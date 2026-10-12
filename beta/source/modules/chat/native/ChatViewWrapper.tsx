// Module ID: 10367
// Function ID: 10368
// Name: ChatViewWrapper
// Dependencies: [10368, 10369, 10380, 2]

// Module 10367 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10369 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10380 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10368 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
