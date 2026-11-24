// Module ID: 11763
// Function ID: 11764
// Name: ChatViewWrapper
// Dependencies: [11764, 11765, 11780, 2]

// Module 11763 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11765 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11780 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11764 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
