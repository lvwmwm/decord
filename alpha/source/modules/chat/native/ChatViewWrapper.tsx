// Module ID: 10885
// Function ID: 10886
// Name: ChatViewWrapper
// Dependencies: [10886, 10887, 10897, 2]

// Module 10885 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10887 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10897 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10886 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
