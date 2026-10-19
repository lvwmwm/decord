// Module ID: 10692
// Function ID: 10693
// Name: ChatViewWrapper
// Dependencies: [10693, 10694, 10704, 2]

// Module 10692 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10694 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10704 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10693 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
