// Module ID: 12821
// Function ID: 12822
// Name: showNitroLockedToast
// Dependencies: [6734, 5693, 2]
// Exports: default

// Module 12821 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6734 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(5693);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(checkpointRouteBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(checkpointRouteBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
