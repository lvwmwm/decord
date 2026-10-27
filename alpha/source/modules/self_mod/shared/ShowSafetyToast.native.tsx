// Module ID: 10988
// Function ID: 10989
// Name: ShowSafetyToast
// Dependencies: [5663, 10954, 2]
// Exports: showSafetyToast

// Module 10988 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5663 */;
import ShieldIcon from "ShieldIcon" /* 10954 */;
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
