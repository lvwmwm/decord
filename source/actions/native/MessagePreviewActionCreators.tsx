// Module ID: 10060
// Function ID: 77665
// Dependencies: [653, 507, 686, 2]

// Module 10060
import ME from "ME";

let closure_3;
let closure_4;
({ Endpoints: closure_3, MAX_MESSAGES_PER_CHANNEL: closure_4 } = ME);
const result = require("dispatcher").fileFinishedImporting("actions/native/MessagePreviewActionCreators.tsx");

export default {
  fetchMessages(channelId, around) {
    const _require = channelId;
    let closure_1 = around;
    const HTTP = _require(507).HTTP;
    let obj = { url: closure_3.MESSAGES(channelId), query: null, retries: 2, oldFormErrors: true, rejectWithError: true };
    obj = { limit: closure_4, around };
    obj.query = obj;
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = around(outer1_2[2]);
      obj = { type: "LOAD_MESSAGES_AROUND_SUCCESS", channelId: closure_0, messages: body.body, around };
      obj.dispatch(obj);
    });
  },
  clearMessages() {
    importDefault(686).dispatch({ type: "CLEAR_MESSAGES_AROUND_SUCCESS" });
  }
};
