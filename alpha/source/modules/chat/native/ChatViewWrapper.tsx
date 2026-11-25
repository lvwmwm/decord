// Module ID: 11752
// Function ID: 11753
// Name: ChatViewWrapper
// Dependencies: [11753, 11754, 11769, 2]

// Module 11752 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11754 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11769 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11753 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
