const chai = require('chai');
const chaiHTTP = require('chai-http');

const app = require('../app');

chai.use(chaiHTTP);
chai.should();

describe ('Car router', function(){
    describe('GET /car', function(){
        it('should return an array of Cars', function(done){
            chai.request(app).get('/car').end(err, res) => {
                if (err) done(err);
                res.should.have.status(200);
            });
        });
    });
});