// Module ID: 12840
// Function ID: 12841
// Name: showNitroLockedToast
// Dependencies: [5996, 3078, 1128, 5624, 2]
// Exports: default, getNitroLockedMessage

// Module 12840 (showNitroLockedToast)
import intl2 from "intl" /* 1128 */;
import _modDef3078 from "module_3078" /* 3078 */;
import ToastUtils from "ToastUtils" /* 5624 */;
import CheckpointTrait from "CheckpointTrait" /* 5996 */;
import size from "module_2" /* 2 */;

let obj = {};
obj[CheckpointTrait.CheckpointTrait.FACE] = _modDef3078["4IdR/H"];
obj[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3078.NuujPd;
obj[CheckpointTrait.CheckpointTrait.HAT] = _modDef3078.o1Zign;
obj[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3078.C0CzoH;
obj[CheckpointTrait.CheckpointTrait.AURA] = _modDef3078["+9TbTS"];
obj[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3078.sTG4TS;
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
