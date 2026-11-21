// Module ID: 11846
// Function ID: 11847
// Name: ShowSafetyToast
// Dependencies: [5595, 10133, 2]
// Exports: showSafetyToast

// Module 11846 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5595 */;
import ShieldIcon from "ShieldIcon" /* 10133 */;
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
