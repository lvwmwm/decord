// Module ID: 10570
// Function ID: 10571
// Dependencies: [10571, 10572, 10581, 2]

// Module 10570
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("ChatViewWrapperAnimatedKeyboard");
} else {
  importDefaultResult = require("ChatViewWrapperBase");
}
const result = require("ChatViewWrapperBase").fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
