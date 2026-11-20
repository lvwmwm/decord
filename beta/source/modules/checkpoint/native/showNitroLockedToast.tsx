// Module ID: 14498
// Function ID: 14499
// Name: showNitroLockedToast
// Dependencies: [6734, 6004, 2]
// Exports: default

// Module 14498 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6734 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(6004);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(checkpointRouteBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(checkpointRouteBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
