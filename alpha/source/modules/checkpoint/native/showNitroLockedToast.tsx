// Module ID: 12676
// Function ID: 12677
// Name: showNitroLockedToast
// Dependencies: [5521, 3120, 1126, 4864, 2]
// Exports: default, getNitroLockedMessage

// Module 12676 (showNitroLockedToast)
import intl2 from "intl" /* 1126 */;
import _modDef3120 from "module_3120" /* 3120 */;
import ToastUtils from "ToastUtils" /* 4864 */;
import CheckpointTrait from "CheckpointTrait" /* 5521 */;
import size from "module_2" /* 2 */;

let obj = {};
obj[CheckpointTrait.CheckpointTrait.FACE] = _modDef3120["4IdR/H"];
obj[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3120.NuujPd;
obj[CheckpointTrait.CheckpointTrait.HAT] = _modDef3120.o1Zign;
obj[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3120.C0CzoH;
obj[CheckpointTrait.CheckpointTrait.AURA] = _modDef3120["+9TbTS"];
obj[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3120.sTG4TS;
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
