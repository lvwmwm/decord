// Module ID: 11808
// Function ID: 11809
// Name: ChatViewWrapper
// Dependencies: [11809, 11810, 11825, 2]

// Module 11808 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11810 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11825 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11809 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
