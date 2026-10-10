// Module ID: 16018
// Function ID: 16019
// Name: showNitroLockedToast
// Dependencies: [5461, 3118, 1126, 4808, 2]
// Exports: default, getNitroLockedMessage

// Module 16018 (showNitroLockedToast)
import intl2 from "intl" /* 1126 */;
import _modDef3118 from "module_3118" /* 3118 */;
import ToastUtils from "ToastUtils" /* 4808 */;
import CheckpointTrait from "CheckpointTrait" /* 5461 */;
import size from "module_2" /* 2 */;

let obj = {};
obj[CheckpointTrait.CheckpointTrait.FACE] = _modDef3118["4IdR/H"];
obj[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3118.NuujPd;
obj[CheckpointTrait.CheckpointTrait.HAT] = _modDef3118.o1Zign;
obj[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3118.C0CzoH;
obj[CheckpointTrait.CheckpointTrait.AURA] = _modDef3118["+9TbTS"];
obj[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3118.sTG4TS;
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
