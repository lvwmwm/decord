// Module ID: 11701
// Function ID: 11702
// Name: ChatViewWrapper
// Dependencies: [11702, 11703, 11718, 2]

// Module 11701 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11703 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11718 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11702 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
