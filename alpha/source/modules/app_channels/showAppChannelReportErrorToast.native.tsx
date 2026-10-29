// Module ID: 14478
// Function ID: 14479
// Name: showAppChannelReportErrorToast
// Dependencies: [5700, 1125, 2]
// Exports: default

// Module 14478 (showAppChannelReportErrorToast)
import intl2 from "intl" /* 1125 */;
import ToastUtils from "ToastUtils" /* 5700 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/showAppChannelReportErrorToast.native.tsx");

export default function showAppChannelReportErrorToast() {
  const presentFailedToast = ToastUtils.presentFailedToast;
  ToastUtils;
  const intl = intl2.intl;
  presentFailedToast(intl.string(intl2.t.F8FvUy));
};
