// Module ID: 11315
// Function ID: 11316
// Name: ShowSafetyToast
// Dependencies: [5712, 11281, 2]
// Exports: showSafetyToast

// Module 11315 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import ShieldIcon from "ShieldIcon" /* 11281 */;
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
