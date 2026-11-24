// Module ID: 14365
// Function ID: 14366
// Name: showAppChannelReportErrorToast
// Dependencies: [5594, 1112, 2]
// Exports: default

// Module 14365 (showAppChannelReportErrorToast)
import intl2 from "intl" /* 1112 */;
import ToastUtils from "ToastUtils" /* 5594 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/showAppChannelReportErrorToast.native.tsx");

export default function showAppChannelReportErrorToast() {
  const presentFailedToast = ToastUtils.presentFailedToast;
  ToastUtils;
  const intl = intl2.intl;
  presentFailedToast(intl.string(intl2.t.F8FvUy));
};
