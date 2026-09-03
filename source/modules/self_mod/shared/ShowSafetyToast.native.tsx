// Module ID: 11268
// Function ID: 11269
// Name: showSafetyToast
// Dependencies: [4194, 8439, 8440, 2]
// Exports: showSafetyToast

// Module 11268 (showSafetyToast)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 4194 */;
import registerAssetDefault from "registerAsset" /* 8439 */;
import ShieldIcon from "ShieldIcon" /* 8440 */;

const result = set.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  let obj = dispatcherDefault;
  obj = { key: id, icon: registerAssetDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
