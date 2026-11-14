// Module ID: 12324
// Function ID: 12325
// Name: ShowSafetyToast
// Dependencies: [6015, 11224, 2]
// Exports: showSafetyToast

// Module 12324 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6015 */;
import ShieldIcon from "ShieldIcon" /* 11224 */;
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
