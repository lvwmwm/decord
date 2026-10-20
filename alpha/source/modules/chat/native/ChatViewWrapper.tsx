// Module ID: 10705
// Function ID: 10706
// Name: ChatViewWrapper
// Dependencies: [10706, 10707, 10717, 2]

// Module 10705 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10707 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10717 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 10706 */;
import size from "module_2" /* 2 */;

let importDefaultResult;
if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
