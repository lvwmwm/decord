// Module ID: 11375
// Function ID: 11376
// Name: ChatViewWrapper
// Dependencies: [11376, 11377, 11394, 2]

// Module 11375 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11377 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11394 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11376 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
