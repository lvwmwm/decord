// Module ID: 14426
// Function ID: 14427
// Name: showNitroLockedToast
// Dependencies: [6681, 5951, 2]
// Exports: default

// Module 14426 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6681 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5951);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(checkpointRouteBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(checkpointRouteBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
