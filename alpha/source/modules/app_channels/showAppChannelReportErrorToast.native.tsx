// Module ID: 13708
// Function ID: 13709
// Name: showAppChannelReportErrorToast
// Dependencies: [4867, 1128, 2]
// Exports: default

// Module 13708 (showAppChannelReportErrorToast)
import intl2 from "intl" /* 1128 */;
import ToastUtils from "ToastUtils" /* 4867 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/showAppChannelReportErrorToast.native.tsx");

export default function showAppChannelReportErrorToast() {
  const presentFailedToast = ToastUtils.presentFailedToast;
  ToastUtils;
  const intl = intl2.intl;
  presentFailedToast(intl.string(intl2.t.F8FvUy));
};
