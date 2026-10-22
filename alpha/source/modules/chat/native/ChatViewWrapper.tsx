// Module ID: 10877
// Function ID: 10878
// Name: ChatViewWrapper
// Dependencies: [10878, 10879, 10889, 2]

// Module 10877 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10879 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10889 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10878 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
