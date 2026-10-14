// Module ID: 10377
// Function ID: 10378
// Name: ChatViewWrapper
// Dependencies: [10378, 10379, 10390, 2]

// Module 10377 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10379 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10390 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10378 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
