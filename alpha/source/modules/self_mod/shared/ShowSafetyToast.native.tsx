// Module ID: 11879
// Function ID: 11880
// Name: ShowSafetyToast
// Dependencies: [5725, 10079, 2]
// Exports: showSafetyToast

// Module 11879 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5725 */;
import ShieldIcon from "ShieldIcon" /* 10079 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text, icon: ShieldIcon.ShieldIcon, iconColor: "text-brand" };
  obj.open(id, obj2);
}
