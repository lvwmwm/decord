// Module ID: 11431
// Function ID: 11432
// Name: ChatViewWrapper
// Dependencies: [11432, 11433, 11450, 2]

// Module 11431 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11433 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11450 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11432 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
