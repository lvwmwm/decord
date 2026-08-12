// Module ID: 9816
// Function ID: 9817
// Name: dispatcher
// Dependencies: [709, 2]

// Module 9816 (dispatcher)
const result = require("set").fileFinishedImporting("actions/native/InAppNotificationActionCreators.tsx");

export default {
  enqueueNotification(buildResult) {
    let obj = importDefault(709);
    obj = { type: "ENQUEUE_IN_APP_NOTIFICATION", notification: buildResult };
    obj.dispatch(obj);
  },
  clearNotification() {
    importDefault(709).wait(() => {
      callback(table[0]).dispatch({ type: "CLEAR_IN_APP_NOTIFICATION" });
    });
  }
};
