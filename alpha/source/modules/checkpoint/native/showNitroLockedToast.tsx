// Module ID: 12619
// Function ID: 12620
// Name: showNitroLockedToast
// Dependencies: [6217, 5475, 2]
// Exports: default

// Module 12619 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6217 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5475);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(checkpointRouteBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(checkpointRouteBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
