// Module ID: 11561
// Function ID: 11562
// Name: dispatcher
// Dependencies: [709, 2]

// Module 11561 (dispatcher)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("actions/TypingActionCreators.tsx");

export default {
  startTyping(id) {
    let obj = dispatcherDefault;
    obj = { type: "TYPING_START_LOCAL", channelId: id };
    obj.dispatch(obj);
  },
  stopTyping(id) {
    let obj = dispatcherDefault;
    obj = { type: "TYPING_STOP_LOCAL", channelId: id };
    obj.dispatch(obj);
  }
};
