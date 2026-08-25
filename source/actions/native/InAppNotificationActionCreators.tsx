// Module ID: 9926
// Function ID: 9927
// Name: dispatcher
// Dependencies: [709, 2]

// Module 9926 (dispatcher)
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
