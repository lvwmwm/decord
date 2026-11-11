// Module ID: 14430
// Function ID: 14431
// Name: showNitroLockedToast
// Dependencies: [6681, 5951, 2]
// Exports: default

// Module 14430 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6681 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5951);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(nextBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(nextBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
