// Module ID: 14496
// Function ID: 14497
// Name: showNitroLockedToast
// Dependencies: [6744, 6014, 2]
// Exports: default

// Module 14496 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6744 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(6014);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(checkpointRouteBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(checkpointRouteBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
