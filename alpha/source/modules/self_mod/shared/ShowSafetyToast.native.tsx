// Module ID: 11159
// Function ID: 11160
// Name: ShowSafetyToast
// Dependencies: [4558, 8903, 8904, 2]
// Exports: showSafetyToast

// Module 11159 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4558 */;
import _modDef8903 from "module_8903" /* 8903 */;
import ShieldIcon from "ShieldIcon" /* 8904 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef8903, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};
