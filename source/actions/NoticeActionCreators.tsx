// Module ID: 15364
// Function ID: 117003
// Dependencies: []

// Module 15364
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("actions/NoticeActionCreators.tsx");

export default {
  show(type, message, buttonText, callback, id) {
    let obj = importDefault(dependencyMap[0]);
    obj = { id, type, message, buttonText, callback };
    obj.dispatch({ type: "NOTICE_SHOW", notice: obj });
  },
  dismiss(arg0) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "NOTICE_DISMISS" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  }
};
