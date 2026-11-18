// Module ID: 11723
// Function ID: 11724
// Name: ChatViewWrapper
// Dependencies: [11724, 11725, 11740, 2]

// Module 11723 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11725 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11740 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11724 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
