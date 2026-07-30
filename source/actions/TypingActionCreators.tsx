// Module ID: 11164
// Function ID: 11165
// Name: dispatcher
// Dependencies: [709, 2]

// Module 11164 (dispatcher)
const result = require("set").fileFinishedImporting("actions/TypingActionCreators.tsx");

export default {
  startTyping(id) {
    let obj = importDefault(709);
    obj = { type: "TYPING_START_LOCAL", channelId: id };
    obj.dispatch(obj);
  },
  stopTyping(id) {
    let obj = importDefault(709);
    obj = { type: "TYPING_STOP_LOCAL", channelId: id };
    obj.dispatch(obj);
  }
};
