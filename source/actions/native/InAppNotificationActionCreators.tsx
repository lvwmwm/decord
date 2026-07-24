// Module ID: 10265
// Function ID: 79269
// Name: dispatcher
// Dependencies: [686, 2]

// Module 10265 (dispatcher)
const result = require("set").fileFinishedImporting("actions/native/InAppNotificationActionCreators.tsx");

export default {
  enqueueNotification(notification) {
    let obj = importDefault(686);
    obj = { type: "ENQUEUE_IN_APP_NOTIFICATION", notification };
    obj.dispatch(obj);
  },
  clearNotification() {
    importDefault(686).wait(() => {
      outer1_0(outer1_1[0]).dispatch({ type: "CLEAR_IN_APP_NOTIFICATION" });
    });
  }
};
