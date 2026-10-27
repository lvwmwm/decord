// Module ID: 14019
// Function ID: 14020
// Name: showAppChannelReportErrorToast
// Dependencies: [5663, 1125, 2]
// Exports: default

// Module 14019 (showAppChannelReportErrorToast)
import intl2 from "intl" /* 1125 */;
import ToastUtils from "ToastUtils" /* 5663 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/showAppChannelReportErrorToast.native.tsx");

export default function showAppChannelReportErrorToast() {
  const presentFailedToast = ToastUtils.presentFailedToast;
  ToastUtils;
  const intl = intl2.intl;
  presentFailedToast(intl.string(intl2.t.F8FvUy));
};
