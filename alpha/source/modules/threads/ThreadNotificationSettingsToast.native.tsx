// Module ID: 8340
// Function ID: 8341
// Name: ThreadNotificationSettingsToast
// Dependencies: [5707, 2]

// Module 8340 (ThreadNotificationSettingsToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
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
