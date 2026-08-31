// Module ID: 11007
// Function ID: 11008
// Name: showSafetyToast
// Dependencies: [4164, 8394, 8395, 2]
// Exports: showSafetyToast

// Module 11007 (showSafetyToast)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 4164 */;
import registerAssetDefault from "registerAsset" /* 8394 */;
import ShieldIcon from "ShieldIcon" /* 8395 */;

const result = set.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  let obj = dispatcherDefault;
  obj = { key: id, icon: registerAssetDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
