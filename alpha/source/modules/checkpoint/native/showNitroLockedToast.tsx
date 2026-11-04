// Module ID: 13918
// Function ID: 13919
// Name: showNitroLockedToast
// Dependencies: [6569, 5845, 2]
// Exports: default

// Module 13918 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6569 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5845);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(nextBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(nextBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
