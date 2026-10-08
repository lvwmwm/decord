// Module ID: 10420
// Function ID: 10421
// Name: ShowSafetyToast
// Dependencies: [4766, 10387, 10386, 2]
// Exports: showSafetyToast

// Module 10420 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import ShieldIcon from "ShieldIcon" /* 10386 */;
import AssetRegistryDefault from "AssetRegistry" /* 10387 */;
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
