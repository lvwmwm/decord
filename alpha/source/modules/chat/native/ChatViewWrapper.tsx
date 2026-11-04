// Module ID: 11423
// Function ID: 11424
// Name: ChatViewWrapper
// Dependencies: [11424, 11425, 11442, 2]

// Module 11423 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11425 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11442 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11424 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
