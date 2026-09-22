// Module ID: 12123
// Function ID: 12124
// Name: TypingActionCreators
// Dependencies: [573, 2]

// Module 12123 (TypingActionCreators)
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
