// Module ID: 11942
// Function ID: 11943
// Name: ChatViewWrapper
// Dependencies: [11943, 11944, 11961, 2]

// Module 11942 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11944 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11961 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11943 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
