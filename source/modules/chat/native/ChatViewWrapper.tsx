// Module ID: 10325
// Function ID: 10326
// Dependencies: [10326, 10327, 10337, 2]

// Module 10325
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("ChatViewWrapperAnimatedKeyboard");
} else {
  importDefaultResult = require("ChatViewWrapperBase");
}
const result = require("ChatViewWrapperBase").fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
