// Module ID: 13907
// Function ID: 13908
// Name: showNitroLockedToast
// Dependencies: [6591, 5866, 2]
// Exports: default

// Module 13907 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6591 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5866);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(nextBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(nextBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
