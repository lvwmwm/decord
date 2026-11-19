// Module ID: 16960
// Function ID: 16961
// Name: showEmailSettingsUpdateErrorToast
// Dependencies: [5473, 1113, 2]
// Exports: default

// Module 16960 (showEmailSettingsUpdateErrorToast)
import intl2 from "intl" /* 1113 */;
import ToastUtils from "ToastUtils" /* 5473 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/notifications/showEmailSettingsUpdateErrorToast.native.tsx");

export default function showEmailSettingsUpdateErrorToast() {
  const presentFailedToast = ToastUtils.presentFailedToast;
  ToastUtils;
  const intl = intl2.intl;
  presentFailedToast(intl.string(intl2.t.F8FvUy));
};
