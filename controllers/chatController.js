// controllers/chatController.js
const {OpenAI} = require("openai")
const Chat = require("../models/Chat");
const tools = require("../utils/functionTools");
const sytemprompt = require("../utils/openaiPrompts");
const apiKey=process.env.OPENAI_API_KEY
const client = new OpenAI(apiKey)
let messages = []
// Chat API function
async function handleChat(req, res) {
  const { message } = req.body;
  // Add the new message to the messages array
  
  if (messages.length <= 0){
    messages.push({ role: "system", content: sytemprompt });
  }
  messages.push({ role: "user", content: message });

  const response = await client.chat.completions.create({
    model: "gpt-4",
    messages: messages,
    temperature:0.9,
    tools:tools,
    tool_choice:"auto"
  });

  if (response.choices[0].message.tool_calls){
    let func = response.choices[0].message.tool_calls[0].function
    console.log(func);
    res.json({ status: "success", "botResponse": response.choices[0].message.content});
  } 
  else{
    messages.push({'role':response.choices[0].message.role, 'content':response.choices[0].message.content})
    res.json({ status: "success", "botResponse": response.choices[0].message.content});
  }
}

module.exports = { handleChat };
