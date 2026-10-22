// Module ID: 12785
// Function ID: 12786
// Name: showNitroLockedToast
// Dependencies: [5561, 3141, 1128, 4903, 2]
// Exports: default, getNitroLockedMessage

// Module 12785 (showNitroLockedToast)
import intl2 from "intl" /* 1128 */;
import _modDef3141 from "module_3141" /* 3141 */;
import ToastUtils from "ToastUtils" /* 4903 */;
import CheckpointTrait from "CheckpointTrait" /* 5561 */;
import size from "module_2" /* 2 */;

let obj = {};
obj[CheckpointTrait.CheckpointTrait.FACE] = _modDef3141["4IdR/H"];
obj[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3141.NuujPd;
obj[CheckpointTrait.CheckpointTrait.HAT] = _modDef3141.o1Zign;
obj[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3141.C0CzoH;
obj[CheckpointTrait.CheckpointTrait.AURA] = _modDef3141["+9TbTS"];
obj[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3141.sTG4TS;
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
