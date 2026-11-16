// Module ID: 11487
// Function ID: 11488
// Name: ShowSafetyToast
// Dependencies: [5869, 11453, 2]
// Exports: showSafetyToast

// Module 11487 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5869 */;
import ShieldIcon from "ShieldIcon" /* 11453 */;
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
