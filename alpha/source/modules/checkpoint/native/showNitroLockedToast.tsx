// Module ID: 13491
// Function ID: 13492
// Name: showNitroLockedToast
// Dependencies: [6422, 5700, 2]
// Exports: default

// Module 13491 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6422 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5700);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(nextBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(nextBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
