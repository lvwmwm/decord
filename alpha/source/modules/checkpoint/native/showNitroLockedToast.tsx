// Module ID: 13676
// Function ID: 13677
// Name: showNitroLockedToast
// Dependencies: [6434, 5711, 2]
// Exports: default

// Module 13676 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6434 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5711);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(nextBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(nextBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
