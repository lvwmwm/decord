// Module ID: 8943
// Function ID: 8944
// Name: ThreadNotificationSettingsToast
// Dependencies: [5952, 2]

// Module 8943 (ThreadNotificationSettingsToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
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
