// Module ID: 17848
// Function ID: 17849
// Name: showEmailSettingsUpdateErrorToast
// Dependencies: [5868, 1113, 2]
// Exports: default

// Module 17848 (showEmailSettingsUpdateErrorToast)
import intl2 from "intl" /* 1113 */;
import ToastUtils from "ToastUtils" /* 5868 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/notifications/showEmailSettingsUpdateErrorToast.native.tsx");

export default function showEmailSettingsUpdateErrorToast() {
  const presentFailedToast = ToastUtils.presentFailedToast;
  ToastUtils;
  const intl = intl2.intl;
  presentFailedToast(intl.string(intl2.t.F8FvUy));
};
