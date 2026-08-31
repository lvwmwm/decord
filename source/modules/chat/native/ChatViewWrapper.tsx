// Module ID: 10948
// Function ID: 10949
// Dependencies: [10949, 10950, 10961, 2]

// Module 10948
import set from "set" /* 2 */;
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 10950 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 10961 */;
import apexExperiment from "apexExperiment" /* 10949 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = set.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
