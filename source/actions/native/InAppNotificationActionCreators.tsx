// Module ID: 10222
// Function ID: 78993
// Dependencies: [646840323, 899088385]

// Module 10222
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("actions/native/InAppNotificationActionCreators.tsx");

export default {
  enqueueNotification(notification) {
    let obj = importDefault(dependencyMap[0]);
    obj = { type: "ENQUEUE_IN_APP_NOTIFICATION", notification };
    obj.dispatch(obj);
  },
  clearNotification() {
    importDefault(dependencyMap[0]).wait(() => {
      callback(closure_1[0]).dispatch({ type: "CLEAR_IN_APP_NOTIFICATION" });
    });
  }
};
