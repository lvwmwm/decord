// Module ID: 10600
// Function ID: 10601
// Name: ChatViewWrapper
// Dependencies: [10601, 10602, 10613, 2]

// Module 10600 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10602 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10613 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10601 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
