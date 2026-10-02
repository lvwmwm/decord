// Module ID: 12223
// Function ID: 12224
// Name: InAppNotificationActionCreators
// Dependencies: [585, 2]

// Module 12223 (InAppNotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
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
