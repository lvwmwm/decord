// Module ID: 13089
// Function ID: 13090
// Name: InAppNotificationActionCreators
// Dependencies: [584, 2]

// Module 13089 (InAppNotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
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
