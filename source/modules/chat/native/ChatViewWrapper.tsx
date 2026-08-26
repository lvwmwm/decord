// Module ID: 10459
// Function ID: 10460
// Dependencies: [10460, 10461, 10472, 2]

// Module 10459
import set from "set" /* 2 */;
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10461 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10472 */;
import apexExperiment from "apexExperiment" /* 10460 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = set.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
