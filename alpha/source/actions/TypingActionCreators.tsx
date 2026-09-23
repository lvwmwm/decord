// Module ID: 12323
// Function ID: 12324
// Name: TypingActionCreators
// Dependencies: [573, 2]

// Module 12323 (TypingActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/TypingActionCreators.tsx");

export default {
  startTyping(id) {
    DispatcherDefault.dispatch({ type: "TYPING_START_LOCAL", channelId: id });
  },
  stopTyping(id) {
    DispatcherDefault.dispatch({ type: "TYPING_STOP_LOCAL", channelId: id });
  }
};
