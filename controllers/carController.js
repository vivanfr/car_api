const Car = require("../models/CarModel");

class CarController{
    // put async key to indicate this is 
    // a  asynchron functions because of callback
    // however, inside of fct, it use synchrone by using
    // await key 
    static async getAllcars(request, response) {
        try {
            const cars = await Car.find({}).exec();
            console.log(JSON.stringify(cars));
            response.status(200).json({
                'result': 'success',
                cars, 
                message: " An array of cars"
            })
        }catch (error){
            console.log(error);
            response.status(500).json({result: 'failed', message: error});
        }
    }
    static async getCar(request, response){
        try {
            const{slug} = request.params;
            const car = await Car.findOne({slug}).exec();
            response.status(200).join({
                'result': 'success', 
                car, 
                message: 'a car'
            });

        }catch(error){
            console.log(error);
            response.status(404).json({result: 'failed', message:' car is not  found'})

        }

    }
    static async deleteCar(request, response){
        try {
            const{slug} = request.params;
            const car = await Car.findOne({slug}).exec();
            await car.remove();

            response.status(200).json({
                'result': 'success', 
                message: 'a car is removed'
            });

        }catch(error){
            console.log(error);
            response.status(404).json({result: 'failed', message:' car is not  found'})

        }

    }
    static async postCar(request, response){
        console.log('--------Create new car')
        try {
            const{model, brand, price} = request.body;
            console.log(model, brand, price )
            const car = new Car ({
                model, 
                brand, 
                price,
            })
            await car.save();
            
            response.status(201).json({
                'result': 'success', 
                car, 
                message: 'new car added'
            });

        }catch(error){
            console.log(error);
            response.status(404).json({result: 'failed', message:' car is not  found'})

        }

    }
    static async updateCar(request, response){
        console.log('--------Update car');
        try {
            const{slug} = request.params;
            const car = await Car.findOne({slug}).exec();
            await car.updateOne({...request.body});          
            response.status(200).json({
                'result': 'success', 
                message: 'new car added'
            });

        }catch(error){
            console.log(error);
            response.status(404).json({result: 'failed', message:' car is not  found'})

        }

    }
}

module.exports = CarController;
