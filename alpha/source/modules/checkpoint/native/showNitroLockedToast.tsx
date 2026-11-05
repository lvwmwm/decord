// Module ID: 13931
// Function ID: 13932
// Name: showNitroLockedToast
// Dependencies: [6571, 5848, 2]
// Exports: default

// Module 13931 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6571 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5848);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(nextBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(nextBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
