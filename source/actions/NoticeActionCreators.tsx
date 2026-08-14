// Module ID: 15974
// Function ID: 15975
// Name: dispatcher
// Dependencies: [709, 2]

// Module 15974 (dispatcher)
const result = require("set").fileFinishedImporting("actions/NoticeActionCreators.tsx");

export default {
  show(type, message, buttonText, callback, id) {
    let obj = importDefault(709);
    obj = { id, type, message, buttonText, callback };
    obj.dispatch({ type: "NOTICE_SHOW", notice: obj });
  },
  dismiss(arg0) {
    let obj = importDefault(709);
    obj = { type: "NOTICE_DISMISS" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  }
};
