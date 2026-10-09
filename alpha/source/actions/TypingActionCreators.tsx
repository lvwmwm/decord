// Module ID: 11618
// Function ID: 11619
// Name: TypingActionCreators
// Dependencies: [584, 2]

// Module 11618 (TypingActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let obj = {
  startTyping(id) {
    const obj = DispatcherDefault;
    const obj2 = { type: "TYPING_START_LOCAL", channelId: id };
    obj.dispatch(obj2);
  },
  stopTyping(id) {
    const obj = DispatcherDefault;
    const obj2 = { type: "TYPING_STOP_LOCAL", channelId: id };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("actions/TypingActionCreators.tsx");

export default obj;
