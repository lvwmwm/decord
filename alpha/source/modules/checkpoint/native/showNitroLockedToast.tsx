// Module ID: 12666
// Function ID: 12667
// Name: showNitroLockedToast
// Dependencies: [6244, 5504, 2]
// Exports: default

// Module 12666 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6244 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5504);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(checkpointRouteBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(checkpointRouteBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
