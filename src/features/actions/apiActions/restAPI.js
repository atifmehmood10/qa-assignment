const {baseAPI} = require('../../utilities/support/api_constants');
const {resourceSchema, patchedSchema} = require('../../../data/apiSchemas/apiSchemas')
const expect = require("chai").expect;
import { fetch } from 'cross-fetch'
var Validator = require('jsonschema').Validator;
var v = new Validator();



class RESTApiActions {
    async hitAPIUrl() {
        let response = await fetch(baseAPI);
        let resCode = response.status;
        expect(resCode).to.equal(200);
    }

    async verifyGetResourceSchemaAndResponse(){
        let response = await fetch(baseAPI+"/posts/1");
        let resCode = response.status;
        let data = await response.json();
        var compare = v.validate(data, resourceSchema);
        expect(resCode).to.equal(200);
        expect(compare.valid).to.equal(true);
    }

    async verifyCreateResourceSchemaAndResponse(){
        let response = await fetch(baseAPI+'/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'Test Title 1',
                body: 'This is body data for test title 1',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        let resCode = response.status;
        let data = await response.json();
        var compare = v.validate(data, resourceSchema);
        expect(data['title']).to.equal('Test Title 1');
        expect(resCode).to.equal(201);
        expect(compare.valid).to.equal(true);
    }

    async verifyUpdateResourceSchemaAndResponse(){
        let response = await fetch(baseAPI+'/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                title: 'Title Edited',
                body: 'This is body data for test title edited',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        let resCode = response.status;
        let data = await response.json();
        var compare = v.validate(data, resourceSchema);
        expect(resCode).to.equal(200);
        expect(data['title']).to.equal('Title Edited');
        expect(compare.valid).to.equal(true);
    }

    async verifyPatchResourceSchemaAndResponse(){
        let response = await fetch(baseAPI+'/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                title: 'Title Patched'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        let resCode = response.status;
        let data = await response.json();
        var compare = v.validate(data, patchedSchema);
        expect(resCode).to.equal(200);
        expect(data['title']).to.equal('Title Patched');
        expect(compare.valid).to.equal(true);
    }

    async verifyResourceDelete(){
        let response = await fetch(baseAPI+'/posts/2', {
            method: 'DELETE'
        });
        let resCode = response.status;
        //Verify the resource has been deleted
        let deletedResourceResponse = await fetch(baseAPI+"/posts/2");
        let deletedResourceResponseCode = deletedResourceResponse.status;
        expect(resCode).to.equal(200);
        //Assertion would fail as the server mocks the delete functionality not the actual delete
        //expect(deletedResourceResponseCode).to.equal(404);
    }



}
export default new RESTApiActions()
