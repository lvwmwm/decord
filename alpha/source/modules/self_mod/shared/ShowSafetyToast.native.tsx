// Module ID: 11871
// Function ID: 11872
// Name: ShowSafetyToast
// Dependencies: [5725, 10078, 2]
// Exports: showSafetyToast

// Module 11871 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5725 */;
import ShieldIcon from "ShieldIcon" /* 10078 */;
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
