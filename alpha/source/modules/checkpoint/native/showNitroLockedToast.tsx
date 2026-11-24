// Module ID: 12657
// Function ID: 12658
// Name: showNitroLockedToast
// Dependencies: [6639, 5598, 2]
// Exports: default

// Module 12657 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6639 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5598);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(checkpointRouteBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(checkpointRouteBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
