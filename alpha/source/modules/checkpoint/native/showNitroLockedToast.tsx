// Module ID: 13258
// Function ID: 13259
// Name: showNitroLockedToast
// Dependencies: [6398, 5698, 2]
// Exports: default

// Module 13258 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6398 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5698);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(nextBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(nextBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
