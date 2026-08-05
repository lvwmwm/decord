// Module ID: 10211
// Function ID: 10212
// Dependencies: [10212, 10213, 10223, 2]

// Module 10211
import apexExperiment from "apexExperiment";

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = require("ChatViewWrapperAnimatedKeyboard");
} else {
  importDefaultResult = require("ChatViewWrapperBase");
}
const result = require("ChatViewWrapperBase").fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
