// Module ID: 10346
// Function ID: 10347
// Name: ChatViewWrapper
// Dependencies: [10347, 10348, 10359, 2]

// Module 10346 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10348 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10359 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10347 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
