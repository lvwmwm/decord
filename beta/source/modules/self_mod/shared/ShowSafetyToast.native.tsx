// Module ID: 11486
// Function ID: 11487
// Name: ShowSafetyToast
// Dependencies: [5869, 11452, 2]
// Exports: showSafetyToast

// Module 11486 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5869 */;
import ShieldIcon from "ShieldIcon" /* 11452 */;
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
