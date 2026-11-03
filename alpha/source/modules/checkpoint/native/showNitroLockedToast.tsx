// Module ID: 13831
// Function ID: 13832
// Name: showNitroLockedToast
// Dependencies: [6554, 5831, 2]
// Exports: default

// Module 13831 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6554 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5831);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(nextBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(nextBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
