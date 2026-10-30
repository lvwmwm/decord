// Module ID: 11216
// Function ID: 11217
// Name: ChatViewWrapper
// Dependencies: [11217, 11218, 11228, 2]

// Module 11216 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11218 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11228 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11217 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
