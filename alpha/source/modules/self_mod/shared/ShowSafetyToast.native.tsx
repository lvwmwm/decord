// Module ID: 10935
// Function ID: 10936
// Name: ShowSafetyToast
// Dependencies: [5645, 10901, 2]
// Exports: showSafetyToast

// Module 10935 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5645 */;
import ShieldIcon from "ShieldIcon" /* 10901 */;
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
