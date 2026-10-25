// Module ID: 10910
// Function ID: 10911
// Name: ChatViewWrapper
// Dependencies: [10911, 10912, 10922, 2]

// Module 10910 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10912 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10922 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10911 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
