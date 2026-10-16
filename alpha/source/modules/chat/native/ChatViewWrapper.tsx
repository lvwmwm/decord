// Module ID: 10615
// Function ID: 10616
// Name: ChatViewWrapper
// Dependencies: [10616, 10617, 10628, 2]

// Module 10615 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10617 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10628 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10616 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
