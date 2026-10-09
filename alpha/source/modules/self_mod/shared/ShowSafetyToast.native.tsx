// Module ID: 10409
// Function ID: 10410
// Name: ShowSafetyToast
// Dependencies: [4768, 10376, 10375, 2]
// Exports: showSafetyToast

// Module 10409 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import ShieldIcon from "ShieldIcon" /* 10375 */;
import AssetRegistryDefault from "AssetRegistry" /* 10376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  const obj2 = { key: id, icon: AssetRegistryDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj2);
};
