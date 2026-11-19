// Module ID: 14277
// Function ID: 14278
// Name: showAppChannelReportErrorToast
// Dependencies: [5473, 1113, 2]
// Exports: default

// Module 14277 (showAppChannelReportErrorToast)
import intl2 from "intl" /* 1113 */;
import ToastUtils from "ToastUtils" /* 5473 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/showAppChannelReportErrorToast.native.tsx");

export default function showAppChannelReportErrorToast() {
  const presentFailedToast = ToastUtils.presentFailedToast;
  ToastUtils;
  const intl = intl2.intl;
  presentFailedToast(intl.string(intl2.t.F8FvUy));
};
