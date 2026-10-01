// Module ID: 10954
// Function ID: 10955
// Name: ShowSafetyToast
// Dependencies: [4528, 8704, 8705, 2]
// Exports: showSafetyToast

// Module 10954 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import AssetRegistryDefault from "AssetRegistry" /* 8704 */;
import ShieldIcon from "ShieldIcon" /* 8705 */;
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
