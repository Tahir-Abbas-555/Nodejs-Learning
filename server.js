const {OpenAI} = require("openai")
const tools = require("./tArray.js")
require("dotenv").config()
const client = new OpenAI(apiKey= process.env['OPENAI_API_KEY'])
// console.log(tools)
const get_sum = async (a, b) => {
  return a+b
};

async function main() {
  const response = await client.chat.completions.create({
    messages: [
        {"role": "system", "content": "Your are a helpful assistant for function calling"},
        {"role": "user", "content": "90 + 2 = ?"}
      ],
    model: "gpt-4",
    temperature:0.0,
    tools:tools,
    tool_choice:"auto"
  });
  console.log(response.choices[0].message)
  // const toolCall = response.choices[0].message.tool_calls[0];
  // const arguments = JSON.parse(toolCall.function.arguments);
  // console.log(arguments)
  // get_sum(arguments.number1, arguments.number2).then(result => {
  //   console.log(result); // 15
  // });
  }

main();