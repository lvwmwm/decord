// Module ID: 10913
// Function ID: 10914
// Name: ChatViewWrapper
// Dependencies: [10914, 10915, 10925, 2]

// Module 10913 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10915 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10925 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10914 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
