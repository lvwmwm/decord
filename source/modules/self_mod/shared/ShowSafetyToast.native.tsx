// Module ID: 10529
// Function ID: 10530
// Name: showSafetyToast
// Dependencies: [4162, 10495, 10496, 2]
// Exports: showSafetyToast

// Module 10529 (showSafetyToast)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 4162 */;
import registerAssetDefault from "registerAsset" /* 10495 */;
import ShieldIcon from "ShieldIcon" /* 10496 */;

const result = set.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  let obj = dispatcherDefault;
  obj = { key: id, icon: registerAssetDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
