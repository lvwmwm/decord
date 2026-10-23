// Module ID: 10908
// Function ID: 10909
// Name: ChatViewWrapper
// Dependencies: [10909, 10910, 10920, 2]

// Module 10908 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10910 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10920 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10909 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
