// Module ID: 13980
// Function ID: 13981
// Name: showAppChannelReportErrorToast
// Dependencies: [5660, 1128, 2]
// Exports: default

// Module 13980 (showAppChannelReportErrorToast)
import intl2 from "intl" /* 1128 */;
import ToastUtils from "ToastUtils" /* 5660 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/showAppChannelReportErrorToast.native.tsx");

export default function showAppChannelReportErrorToast() {
  const presentFailedToast = ToastUtils.presentFailedToast;
  ToastUtils;
  const intl = intl2.intl;
  presentFailedToast(intl.string(intl2.t.F8FvUy));
};
