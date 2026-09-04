// Module ID: 11342
// Function ID: 11343
// Name: showSafetyToast
// Dependencies: [4194, 9330, 9331, 2]
// Exports: showSafetyToast

// Module 11342 (showSafetyToast)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 4194 */;
import registerAssetDefault from "registerAsset" /* 9330 */;
import ShieldIcon from "ShieldIcon" /* 9331 */;

const result = set.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  let obj = dispatcherDefault;
  obj = { key: id, icon: registerAssetDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
