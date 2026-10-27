// Module ID: 10916
// Function ID: 10917
// Name: ChatViewWrapper
// Dependencies: [10917, 10918, 10928, 2]

// Module 10916 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10918 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10928 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10917 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
