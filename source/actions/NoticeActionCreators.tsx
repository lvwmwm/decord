// Module ID: 15601
// Function ID: 119914
// Name: dispatcher
// Dependencies: [686, 2]

// Module 15601 (dispatcher)
const result = require("set").fileFinishedImporting("actions/NoticeActionCreators.tsx");

export default {
  show(type, message, buttonText, callback, id) {
    let obj = importDefault(686);
    obj = { id, type, message, buttonText, callback };
    obj.dispatch({ type: "NOTICE_SHOW", notice: obj });
  },
  dismiss(arg0) {
    let obj = importDefault(686);
    obj = { type: "NOTICE_DISMISS" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  }
};
