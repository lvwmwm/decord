// Module ID: 10354
// Function ID: 79972
// Dependencies: [10355, 10356, 10365, 2]

// Module 10354
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("ChatViewWrapperAnimatedKeyboard");
} else {
  importDefaultResult = require("ChatViewWrapperBase");
}
const result = require("ChatViewWrapperBase").fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
