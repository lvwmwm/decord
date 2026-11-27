// Module ID: 12878
// Function ID: 12879
// Name: showNitroLockedToast
// Dependencies: [6765, 5724, 2]
// Exports: default

// Module 12878 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6765 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5724);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(checkpointRouteBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(checkpointRouteBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
