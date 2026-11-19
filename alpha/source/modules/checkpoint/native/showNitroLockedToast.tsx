// Module ID: 12649
// Function ID: 12650
// Name: showNitroLockedToast
// Dependencies: [6215, 5473, 2]
// Exports: default

// Module 12649 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6215 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5473);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(checkpointRouteBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(checkpointRouteBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
