// Module ID: 12156
// Function ID: 12157
// Name: TypingActionCreators
// Dependencies: [577, 2]

// Module 12156 (TypingActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
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
