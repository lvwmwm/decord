// Module ID: 12701
// Function ID: 12702
// Name: showNitroLockedToast
// Dependencies: [5523, 3123, 1128, 4867, 2]
// Exports: default, getNitroLockedMessage

// Module 12701 (showNitroLockedToast)
import intl2 from "intl" /* 1128 */;
import _modDef3123 from "module_3123" /* 3123 */;
import ToastUtils from "ToastUtils" /* 4867 */;
import CheckpointTrait from "CheckpointTrait" /* 5523 */;
import size from "module_2" /* 2 */;

let obj = {};
obj[CheckpointTrait.CheckpointTrait.FACE] = _modDef3123["4IdR/H"];
obj[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3123.NuujPd;
obj[CheckpointTrait.CheckpointTrait.HAT] = _modDef3123.o1Zign;
obj[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3123.C0CzoH;
obj[CheckpointTrait.CheckpointTrait.AURA] = _modDef3123["+9TbTS"];
obj[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3123.sTG4TS;
const result = size.fileFinishedImporting("modules/checkpoint/native/showNitroLockedToast.tsx");

export default function showNitroLockedToast(arg0) {
  let stringResult;
  if (null != obj[arg0]) {
    const intl = intl2.intl;
    stringResult = intl.string(tmp);
  }
  if (null != stringResult) {
    obj = ToastUtils;
    obj.presentError(stringResult);
  }
};
export const getNitroLockedMessage = function getNitroLockedMessage(nextBlockedTrait) {
  let stringResult;
  if (null != obj[nextBlockedTrait]) {
    const intl = intl2.intl;
    stringResult = intl.string(tmp);
  }
  return stringResult;
};
