const tools = [
    {
        "type":"function",
        "function":{
            "name":"get_sum",
            "description": "get two numbers like this:{'number1':'number','number2':'number'}",
            "parameter":{
                "type": "object",
                "properties":{
                    "number1": {
                        "type":"string",
                        "description": "get the number1"
                    },
                    "number2": {
                        "type": "string",
                        "description": "get the number1"
                    },
                }
            },

        }
    }
];

module.exports = tools;