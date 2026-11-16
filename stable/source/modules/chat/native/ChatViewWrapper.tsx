// Module ID: 11407
// Function ID: 11408
// Name: ChatViewWrapper
// Dependencies: [11408, 11409, 11426, 2]

// Module 11407 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11409 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11426 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11408 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
