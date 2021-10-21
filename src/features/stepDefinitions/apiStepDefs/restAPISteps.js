import { Given, When, Then } from 'cucumber'

import restAPI from "../../actions/apiActions/restAPI";

Given(/^User hits the api/, async function(){
    await restAPI.hitAPIUrl()
});

Then(/^User verifies schema and response code for getting resource/, async function(){
    await restAPI.verifyGetResourceSchemaAndResponse()
});

Then(/^User verifies schema and response code for create resource/, async function(){
    await restAPI.verifyCreateResourceSchemaAndResponse()
});

Then(/^User verifies schema and response code for editing the resource/, async function(){
    await restAPI.verifyUpdateResourceSchemaAndResponse()
});

Then(/^User verifies schema and response code for patching the resource/, async function(){
    await restAPI.verifyPatchResourceSchemaAndResponse()
});

Then(/^User verifies response code for deleting the resource/, async function(){
    await restAPI.verifyResourceDelete()
})
