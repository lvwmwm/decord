// Module ID: 10780
// Function ID: 10781
// Name: ShowSafetyToast
// Dependencies: [5625, 10746, 2]
// Exports: showSafetyToast

// Module 10780 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5625 */;
import ShieldIcon from "ShieldIcon" /* 10746 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text, icon: ShieldIcon.ShieldIcon, iconColor: "text-brand" };
  obj.open(id, obj2);
};
