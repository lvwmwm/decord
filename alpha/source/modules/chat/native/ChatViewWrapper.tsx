// Module ID: 10366
// Function ID: 10367
// Name: ChatViewWrapper
// Dependencies: [10367, 10368, 10379, 2]

// Module 10366 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10368 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10379 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10367 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
