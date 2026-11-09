// Module ID: 11154
// Function ID: 11155
// Name: InAppNotificationActionCreators
// Dependencies: [572, 2]

// Module 11154 (InAppNotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let obj = {
  enqueueNotification(buildResult) {
    const obj = DispatcherDefault;
    const obj2 = { type: "ENQUEUE_IN_APP_NOTIFICATION", notification: buildResult };
    obj.dispatch(obj2);
  },
  clearNotification() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "CLEAR_IN_APP_NOTIFICATION" });
  }
};
const result = size.fileFinishedImporting("actions/native/InAppNotificationActionCreators.tsx");

export default obj;
