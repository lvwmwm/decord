// Module ID: 14511
// Function ID: 14512
// Name: showAppChannelReportErrorToast
// Dependencies: [5706, 1114, 2]
// Exports: default

// Module 14511 (showAppChannelReportErrorToast)
import intl2 from "intl" /* 1114 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/showAppChannelReportErrorToast.native.tsx");

export default function showAppChannelReportErrorToast() {
  const presentFailedToast = ToastUtils.presentFailedToast;
  ToastUtils;
  const intl = intl2.intl;
  presentFailedToast(intl.string(intl2.t.F8FvUy));
};
