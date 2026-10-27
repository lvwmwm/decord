// Module ID: 13041
// Function ID: 13042
// Name: showNitroLockedToast
// Dependencies: [6364, 5663, 2]
// Exports: default

// Module 13041 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6364 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5663);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(nextBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(nextBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
