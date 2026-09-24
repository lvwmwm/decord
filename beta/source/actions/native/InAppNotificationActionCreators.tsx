// Module ID: 12997
// Function ID: 12998
// Name: InAppNotificationActionCreators
// Dependencies: [577, 2]

// Module 12997 (InAppNotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/native/InAppNotificationActionCreators.tsx");

export default {
  enqueueNotification(buildResult) {
    DispatcherDefault.dispatch({ type: "ENQUEUE_IN_APP_NOTIFICATION", notification: buildResult });
  },
  clearNotification() {
    DispatcherDefault.wait(() => {
      DispatcherDefault.dispatch({ type: "CLEAR_IN_APP_NOTIFICATION" });
    });
  }
};
