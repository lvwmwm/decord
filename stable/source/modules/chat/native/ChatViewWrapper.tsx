// Module ID: 10944
// Function ID: 10945
// Name: ChatViewWrapper
// Dependencies: [10945, 10946, 10956, 2]

// Module 10944 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10946 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10956 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10945 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
