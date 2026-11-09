// Module ID: 13932
// Function ID: 13933
// Name: showNitroLockedToast
// Dependencies: [6566, 5836, 2]
// Exports: default

// Module 13932 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6566 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5836);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(nextBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(nextBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
