// Module ID: 10951
// Function ID: 10952
// Name: ChatViewWrapper
// Dependencies: [10952, 10953, 10963, 2]

// Module 10951 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10953 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10963 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10952 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
