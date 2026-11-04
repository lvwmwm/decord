// Module ID: 11422
// Function ID: 11423
// Name: ChatViewWrapper
// Dependencies: [11423, 11424, 11441, 2]

// Module 11422 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11424 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11441 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11423 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
