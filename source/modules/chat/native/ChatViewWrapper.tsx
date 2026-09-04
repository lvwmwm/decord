// Module ID: 11281
// Function ID: 11282
// Dependencies: [11282, 11283, 11293, 2]

// Module 11281
import set from "set" /* 2 */;
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11283 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11293 */;
import apexExperiment from "apexExperiment" /* 11282 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = set.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
