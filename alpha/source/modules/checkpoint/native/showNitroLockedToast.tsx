// Module ID: 13363
// Function ID: 13364
// Name: showNitroLockedToast
// Dependencies: [6742, 6008, 2]
// Exports: default

// Module 13363 (showNitroLockedToast)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6742 */;
import size from "module_2" /* 2 */;

let tmp;
const ToastUtils = tmp(6008);
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(checkpointRouteBlockedTrait) {
  const obj = CheckpointCustomizationUtils;
  const nitroLockedMessage = obj.getNitroLockedMessage(checkpointRouteBlockedTrait);
  if (null != nitroLockedMessage) {
    const tmpResult = ToastUtils;
    tmpResult.presentError(nitroLockedMessage);
  }
};
