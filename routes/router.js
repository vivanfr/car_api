const Router = require('express').Router;
const CarController = require('../controllers/carController');

const router = Router();

router.route('/car')
    .get(CarController.getAllcars) // return all cars from mongo db 
    .post(CarController.postCar) // create new car
 //   .delete() // delete a car

router.route('/car/:slug')
    .get(CarController.getCar) // get a particular 
    .patch(CarController.updateCar)// modifier the car

    .delete(CarController.deleteCar) // get a particular car
module.exports = router;
