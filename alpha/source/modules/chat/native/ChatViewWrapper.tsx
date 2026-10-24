// Module ID: 10909
// Function ID: 10910
// Name: ChatViewWrapper
// Dependencies: [10910, 10911, 10921, 2]

// Module 10909 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10911 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10921 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10910 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
