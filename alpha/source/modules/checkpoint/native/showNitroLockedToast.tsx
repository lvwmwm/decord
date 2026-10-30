// Module ID: 13641
// Function ID: 13642
// Name: showNitroLockedToast
// Dependencies: [6429, 5706, 2]
// Exports: default

// Module 13641 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6429 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5706);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(nextBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(nextBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
