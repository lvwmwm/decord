// Module ID: 11726
// Function ID: 11727
// Name: ShowSafetyToast
// Dependencies: [5476, 10013, 2]
// Exports: showSafetyToast

// Module 11726 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5476 */;
import ShieldIcon from "ShieldIcon" /* 10013 */;
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
