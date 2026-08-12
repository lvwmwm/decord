// Module ID: 10371
// Function ID: 10372
// Dependencies: [10372, 10373, 10383, 2]

// Module 10371
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("ChatViewWrapperAnimatedKeyboard");
} else {
  importDefaultResult = require("ChatViewWrapperBase");
}
const result = require("ChatViewWrapperBase").fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
