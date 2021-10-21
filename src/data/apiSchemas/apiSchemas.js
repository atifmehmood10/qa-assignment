const resourceSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "userId": {
            "type": "integer"
        },
        "id": {
            "type": "integer"
        },
        "title": {
            "type": "string"
        },
        "body": {
            "type": "string"
        }
    },
    "required": [
        "userId",
        "id",
        "title",
        "body"
    ]
};
const patchedSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "userId": {
            "type": "integer"
        },
        "id": {
            "type": "integer"
        },
        "title": {
            "type": "string"
        },
        "body": {
            "type": "string"
        }
    },
    "required": [
        "id",
        "title"
    ]
};

module.exports = {
    resourceSchema: resourceSchema,
    patchedSchema: patchedSchema
};


