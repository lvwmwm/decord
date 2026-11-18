// Module ID: 11806
// Function ID: 11807
// Name: ShowSafetyToast
// Dependencies: [5505, 10032, 2]
// Exports: showSafetyToast

// Module 11806 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5505 */;
import ShieldIcon from "ShieldIcon" /* 10032 */;
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
