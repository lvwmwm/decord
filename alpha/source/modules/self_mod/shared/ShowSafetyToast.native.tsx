// Module ID: 12229
// Function ID: 12230
// Name: ShowSafetyToast
// Dependencies: [5952, 11157, 2]
// Exports: showSafetyToast

// Module 12229 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import ShieldIcon from "ShieldIcon" /* 11157 */;
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
