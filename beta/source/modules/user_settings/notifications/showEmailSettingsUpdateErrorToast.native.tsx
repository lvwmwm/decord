// Module ID: 16905
// Function ID: 16906
// Name: showEmailSettingsUpdateErrorToast
// Dependencies: [5594, 1112, 2]
// Exports: default

// Module 16905 (showEmailSettingsUpdateErrorToast)
import intl2 from "intl" /* 1112 */;
import ToastUtils from "ToastUtils" /* 5594 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/notifications/showEmailSettingsUpdateErrorToast.native.tsx");

export default function showEmailSettingsUpdateErrorToast() {
  const presentFailedToast = ToastUtils.presentFailedToast;
  ToastUtils;
  const intl = intl2.intl;
  presentFailedToast(intl.string(intl2.t.F8FvUy));
};
