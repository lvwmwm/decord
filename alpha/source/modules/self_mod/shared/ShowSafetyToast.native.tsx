// Module ID: 11061
// Function ID: 11062
// Name: ShowSafetyToast
// Dependencies: [5701, 11027, 2]
// Exports: showSafetyToast

// Module 11061 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import ShieldIcon from "ShieldIcon" /* 11027 */;
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
