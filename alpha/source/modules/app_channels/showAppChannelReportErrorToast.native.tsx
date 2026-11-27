// Module ID: 14083
// Function ID: 14084
// Name: showAppChannelReportErrorToast
// Dependencies: [5724, 1112, 2]
// Exports: default

// Module 14083 (showAppChannelReportErrorToast)
import intl2 from "intl" /* 1112 */;
import ToastUtils from "ToastUtils" /* 5724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/showAppChannelReportErrorToast.native.tsx");

export default function showAppChannelReportErrorToast() {
  const presentFailedToast = ToastUtils.presentFailedToast;
  ToastUtils;
  const intl = intl2.intl;
  presentFailedToast(intl.string(intl2.t.F8FvUy));
};
