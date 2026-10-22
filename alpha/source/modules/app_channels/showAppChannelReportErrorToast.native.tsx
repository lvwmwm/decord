// Module ID: 13957
// Function ID: 13958
// Name: showAppChannelReportErrorToast
// Dependencies: [5648, 1128, 2]
// Exports: default

// Module 13957 (showAppChannelReportErrorToast)
import intl2 from "intl" /* 1128 */;
import ToastUtils from "ToastUtils" /* 5648 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/showAppChannelReportErrorToast.native.tsx");

export default function showAppChannelReportErrorToast() {
  const presentFailedToast = ToastUtils.presentFailedToast;
  ToastUtils;
  const intl = intl2.intl;
  presentFailedToast(intl.string(intl2.t.F8FvUy));
};
