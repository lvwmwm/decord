// Module ID: 11823
// Function ID: 11824
// Name: ShowSafetyToast
// Dependencies: [5694, 10036, 2]
// Exports: showSafetyToast

// Module 11823 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5694 */;
import ShieldIcon from "ShieldIcon" /* 10036 */;
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
