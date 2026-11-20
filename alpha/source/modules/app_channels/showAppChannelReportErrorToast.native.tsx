// Module ID: 14245
// Function ID: 14246
// Name: showAppChannelReportErrorToast
// Dependencies: [5475, 1112, 2]
// Exports: default

// Module 14245 (showAppChannelReportErrorToast)
import intl2 from "intl" /* 1112 */;
import ToastUtils from "ToastUtils" /* 5475 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/showAppChannelReportErrorToast.native.tsx");

export default function showAppChannelReportErrorToast() {
  const presentFailedToast = ToastUtils.presentFailedToast;
  ToastUtils;
  const intl = intl2.intl;
  presentFailedToast(intl.string(intl2.t.F8FvUy));
};
