const chai = require('chai');
const chaiHttp = require('chai-http');
const index = require('../index');

//assertion style
chai.should();
chai.use(chaiHttp);

describe('Task API', () => {
    /**
     * Test the GET rout
     */
    describe('GET/users', () => {
        it("it should get all the task", (done) => {
            chai.request(index)
                .get("/users")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    //response.body.length.should.be.eq(3);
                    done();
                })
        })
    })

    /**
    * Test the GET{by id} rout
    */
    describe('GET/users', () => {
        it("it should not  get all the task", (done) => {
            chai.request(index)
                .get("/users")
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                })
        })
    })

    /**
    * Test the POST rout
    */

    /**
    * Test the put rout
    */

    /**
    * Test the DELET rout
    */
});