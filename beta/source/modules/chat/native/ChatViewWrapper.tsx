// Module ID: 10379
// Function ID: 10380
// Name: ChatViewWrapper
// Dependencies: [10380, 10381, 10392, 2]

// Module 10379 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10381 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10392 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10380 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
