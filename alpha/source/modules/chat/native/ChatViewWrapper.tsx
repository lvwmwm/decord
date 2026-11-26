// Module ID: 11800
// Function ID: 11801
// Name: ChatViewWrapper
// Dependencies: [11801, 11802, 11817, 2]

// Module 11800 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11802 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11817 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11801 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
