// Module ID: 10368
// Function ID: 10369
// Name: ChatViewWrapper
// Dependencies: [10369, 10370, 10381, 2]

// Module 10368 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10370 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10381 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10369 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
