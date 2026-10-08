// Module ID: 15843
// Function ID: 15844
// Name: showNitroLockedToast
// Dependencies: [5457, 3115, 1126, 4765, 2]
// Exports: default, getNitroLockedMessage

// Module 15843 (showNitroLockedToast)
import intl2 from "intl" /* 1126 */;
import _modDef3115 from "module_3115" /* 3115 */;
import ToastUtils from "ToastUtils" /* 4765 */;
import CheckpointTrait from "CheckpointTrait" /* 5457 */;
import size from "module_2" /* 2 */;

let obj = {};
obj[CheckpointTrait.CheckpointTrait.FACE] = _modDef3115["4IdR/H"];
obj[CheckpointTrait.CheckpointTrait.OUTFIT] = _modDef3115.NuujPd;
obj[CheckpointTrait.CheckpointTrait.HAT] = _modDef3115.o1Zign;
obj[CheckpointTrait.CheckpointTrait.WEARABLE] = _modDef3115.C0CzoH;
obj[CheckpointTrait.CheckpointTrait.AURA] = _modDef3115["+9TbTS"];
obj[CheckpointTrait.CheckpointTrait.SHOES] = _modDef3115.sTG4TS;
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
