// Module ID: 11547
// Function ID: 11548
// Name: ShowSafetyToast
// Dependencies: [4335, 9531, 9532, 2]
// Exports: showSafetyToast

// Module 11547 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4335 */;
import _modDef9531 from "module_9531" /* 9531 */;
import ShieldIcon from "ShieldIcon" /* 9532 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9531, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};
