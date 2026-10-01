// Module ID: 11472
// Function ID: 11473
// Name: TypingActionCreators
// Dependencies: [573, 2]

// Module 11472 (TypingActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
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
