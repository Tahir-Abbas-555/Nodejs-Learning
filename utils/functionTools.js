// {
//     "type": "function",
//     "function": {
//         "name": "physical_or_mental_health_condition",
//         "description":"This function extracts any mental, physical, psychological, or general health-related condition or issue described in the user's message. This can include symptoms, conditions, or complaints about physical health, mental well-being, or psychological state. It should return the specific condition or issue as mentioned by the user. Value: {'physical_or_mental_health_condition':'description of the health, mental, or psychological issue, such as stress, body pain, disease or anxiety'}",
//         "parameter": {
//             "type": "object",
//             "properties": {
//                 "physical_or_mental_health_condition": {
//                     "type": "string",
//                     "description": "A brief description of any health, mental, or psychological condition mentioned by the user, such as stress, body pain, fatigue, anxiety physical or mental health condition or any disease."
//                 }
//             }
//         }
//     }
// },


const tools = [
    {
        "type":"function",
        "function":{
            "name":"create_task",
            "description": "if user should need to do some task or it need to give few task to user",
            "parameter":{
                "type": "object",
                "properties":{
                    "Tasks": {
                        "type":"object",
                        "description": "in this it will give array of like this output: {'task_name': 'task_name', 'task_discription': 'task_discription'}"
                    }
                }
            },
        }
    },
    {
        "type":"function",
        "function":{
            "name":"get_sum",
            "description": "this function take two numbers for sum. Value: get two numbers like this:{'number1':'number','number2':'number'}",
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
    },
    {
        "type":"function",
        "function":{
            "name":"get_multi",
            "description": "this function take two numbers for multiplication. Value: get two numbers like this:{'number1':'number','number2':'number'}",
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

module.exports = tools