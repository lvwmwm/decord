// Module ID: 11784
// Function ID: 11785
// Name: ShowSafetyToast
// Dependencies: [5474, 10010, 2]
// Exports: showSafetyToast

// Module 11784 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5474 */;
import ShieldIcon from "ShieldIcon" /* 10010 */;
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
