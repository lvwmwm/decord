// Module ID: 10019
// Function ID: 77407
// Dependencies: []

// Module 10019
const _module = require(dependencyMap[0]);
({ Endpoints: closure_3, MAX_MESSAGES_PER_CHANNEL: closure_4 } = _module);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("actions/native/MessagePreviewActionCreators.tsx");

export default {
  fetchMessages(channelId, around) {
    const require = channelId;
    const importDefault = around;
    const HTTP = require(dependencyMap[1]).HTTP;
    let obj = { "Bool(false)": "RTC_CONNECTION_LOSS_RATE", "Bool(false)": "handleJoinThreadVoice", "Bool(false)": "toString", "Bool(false)": "isArray", "Bool(false)": "toString", url: closure_3.MESSAGES(channelId) };
    obj = { limit: closure_4, around };
    obj.query = obj;
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = arg1(closure_2[2]);
      obj = { type: "LOAD_MESSAGES_AROUND_SUCCESS", channelId: body, messages: body.body, around: arg1 };
      obj.dispatch(obj);
    });
  },
  clearMessages() {
    importDefault(dependencyMap[2]).dispatch({ type: "CLEAR_MESSAGES_AROUND_SUCCESS" });
  }
};
