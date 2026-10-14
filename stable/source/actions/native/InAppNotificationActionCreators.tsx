// Module ID: 12479
// Function ID: 12480
// Name: InAppNotificationActionCreators
// Dependencies: [584, 2]

// Module 12479 (InAppNotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let obj = {
  enqueueNotification(buildResult) {
    const obj = DispatcherDefault;
    const obj2 = { type: "ENQUEUE_IN_APP_NOTIFICATION", notification: buildResult };
    obj.dispatch(obj2);
  },
  clearNotification() {
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = DispatcherDefault;
      obj.dispatch({ type: "CLEAR_IN_APP_NOTIFICATION" });
    });
  }
};
const result = size.fileFinishedImporting("actions/native/InAppNotificationActionCreators.tsx");

export default obj;
