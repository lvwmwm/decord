// Module ID: 11349
// Function ID: 11350
// Dependencies: [11350, 11351, 11361, 2]

// Module 11349
import set from "set" /* 2 */;
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11351 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11361 */;
import apexExperiment from "apexExperiment" /* 11350 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = set.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
