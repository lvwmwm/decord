// Module ID: 13953
// Function ID: 13954
// Name: showNitroLockedToast
// Dependencies: [6568, 5838, 2]
// Exports: default

// Module 13953 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6568 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5838);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(nextBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(nextBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
