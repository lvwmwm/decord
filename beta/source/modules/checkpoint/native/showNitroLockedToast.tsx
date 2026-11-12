// Module ID: 13964
// Function ID: 13965
// Name: showNitroLockedToast
// Dependencies: [6598, 5868, 2]
// Exports: default

// Module 13964 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6598 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5868);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(nextBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(nextBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
