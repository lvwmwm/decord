// Module ID: 10117
// Function ID: 10118
// Name: dispatcher
// Dependencies: [709, 2]

// Module 10117 (dispatcher)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("actions/native/InAppNotificationActionCreators.tsx");

export default {
  enqueueNotification(buildResult) {
    let obj = dispatcherDefault;
    obj = { type: "ENQUEUE_IN_APP_NOTIFICATION", notification: buildResult };
    obj.dispatch(obj);
  },
  clearNotification() {
    dispatcherDefault.wait(() => {
      callback(table[0]).dispatch({ type: "CLEAR_IN_APP_NOTIFICATION" });
    });
  }
};
