// Module ID: 11107
// Function ID: 86442
// Dependencies: []

// Module 11107
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("actions/TypingActionCreators.tsx");

export default {
  startTyping(id) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "TYPING_START_LOCAL", channelId: id };
    obj.dispatch(obj);
  },
  stopTyping(id) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "TYPING_STOP_LOCAL", channelId: id };
    obj.dispatch(obj);
  }
};
