// Module ID: 10461
// Function ID: 10462
// Name: showSafetyToast
// Dependencies: [4098, 10427, 10428, 2]
// Exports: showSafetyToast

// Module 10461 (showSafetyToast)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 4098 */;
import registerAssetDefault from "registerAsset" /* 10427 */;
import ShieldIcon from "ShieldIcon" /* 10428 */;

const result = set.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  let obj = dispatcherDefault;
  obj = { key: id, icon: registerAssetDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
