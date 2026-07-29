// Module ID: 10260
// Function ID: 10261
// Name: dispatcher
// Dependencies: [709, 2]

// Module 10260 (dispatcher)
const result = require("set").fileFinishedImporting("actions/native/InAppNotificationActionCreators.tsx");

export default {
  enqueueNotification(notification) {
    let obj = importDefault(709);
    obj = { type: "ENQUEUE_IN_APP_NOTIFICATION", notification };
    obj.dispatch(obj);
  },
  clearNotification() {
    importDefault(709).wait(() => {
      callback(table[0]).dispatch({ type: "CLEAR_IN_APP_NOTIFICATION" });
    });
  }
};
