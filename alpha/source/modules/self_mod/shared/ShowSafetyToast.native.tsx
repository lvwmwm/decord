// Module ID: 11464
// Function ID: 11465
// Name: ShowSafetyToast
// Dependencies: [5839, 11430, 2]
// Exports: showSafetyToast

// Module 11464 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5839 */;
import ShieldIcon from "ShieldIcon" /* 11430 */;
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
