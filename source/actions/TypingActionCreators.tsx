// Module ID: 11144
// Function ID: 86472
// Name: dispatcher
// Dependencies: [686, 2]

// Module 11144 (dispatcher)
const result = require("set").fileFinishedImporting("actions/TypingActionCreators.tsx");

export default {
  startTyping(id) {
    let obj = importDefault(686);
    obj = { type: "TYPING_START_LOCAL", channelId: id };
    obj.dispatch(obj);
  },
  stopTyping(id) {
    let obj = importDefault(686);
    obj = { type: "TYPING_STOP_LOCAL", channelId: id };
    obj.dispatch(obj);
  }
};
