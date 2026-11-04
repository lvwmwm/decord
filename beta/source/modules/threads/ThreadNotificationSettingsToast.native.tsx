// Module ID: 8348
// Function ID: 8349
// Name: ThreadNotificationSettingsToast
// Dependencies: [5712, 2]

// Module 8348 (ThreadNotificationSettingsToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import size from "module_2" /* 2 */;

let obj = {
  showError(text) {
    const obj = ToastActionCreatorsDefault;
    const obj2 = { text, variant: "critical" };
    obj.open("THREAD_NOTIFICATION_SETTINGS_RATE_LIMITED", obj2);
  }
};
const result = size.fileFinishedImporting("modules/threads/ThreadNotificationSettingsToast.native.tsx");

export default obj;
