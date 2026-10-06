// Module ID: 9620
// Function ID: 9621
// Name: ShowSafetyToast
// Dependencies: [4531, 8698, 8699, 2]
// Exports: showSafetyToast

// Module 9620 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import AssetRegistryDefault from "AssetRegistry" /* 8698 */;
import ShieldIcon from "ShieldIcon" /* 8699 */;
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
