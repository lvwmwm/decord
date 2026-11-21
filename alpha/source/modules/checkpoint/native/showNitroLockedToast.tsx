// Module ID: 12741
// Function ID: 12742
// Name: showNitroLockedToast
// Dependencies: [6336, 5594, 2]
// Exports: default

// Module 12741 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6336 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5594);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(checkpointRouteBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(checkpointRouteBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
