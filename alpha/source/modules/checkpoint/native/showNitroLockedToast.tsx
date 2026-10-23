// Module ID: 12983
// Function ID: 12984
// Name: showNitroLockedToast
// Dependencies: [6037, 3088, 1128, 5660, 2]
// Exports: default, getNitroLockedMessage

// Module 12983 (showNitroLockedToast)
import intl2 from "intl" /* 1128 */;
import _modDef3088 from "module_3088" /* 3088 */;
import ToastUtils from "ToastUtils" /* 5660 */;
import CheckpointTrait from "CheckpointTrait" /* 6037 */;
import size from "module_2" /* 2 */;

let obj = {};
obj[CheckpointTrait.CheckpointTrait.FACE] = _modDef3088["4IdR/H"];
obj[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3088.NuujPd;
obj[CheckpointTrait.CheckpointTrait.HAT] = _modDef3088.o1Zign;
obj[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3088.C0CzoH;
obj[CheckpointTrait.CheckpointTrait.AURA] = _modDef3088["+9TbTS"];
obj[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3088.sTG4TS;
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
