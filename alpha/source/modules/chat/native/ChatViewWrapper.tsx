// Module ID: 11936
// Function ID: 11937
// Name: ChatViewWrapper
// Dependencies: [11937, 11938, 11955, 2]

// Module 11936 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11938 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11955 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11937 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
