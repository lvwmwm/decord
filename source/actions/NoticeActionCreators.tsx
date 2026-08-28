// Module ID: 16318
// Function ID: 16319
// Name: dispatcher
// Dependencies: [709, 2]

// Module 16318 (dispatcher)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("actions/NoticeActionCreators.tsx");

export default {
  show(type, message, buttonText, callback, id) {
    let obj = dispatcherDefault;
    obj = { id, type, message, buttonText, callback };
    obj.dispatch({ type: "NOTICE_SHOW", notice: obj });
  },
  dismiss(arg0) {
    let obj = dispatcherDefault;
    obj = { type: "NOTICE_DISMISS" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  }
};
