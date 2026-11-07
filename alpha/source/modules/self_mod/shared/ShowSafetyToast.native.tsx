// Module ID: 11455
// Function ID: 11456
// Name: ShowSafetyToast
// Dependencies: [5837, 11421, 2]
// Exports: showSafetyToast

// Module 11455 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5837 */;
import ShieldIcon from "ShieldIcon" /* 11421 */;
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
