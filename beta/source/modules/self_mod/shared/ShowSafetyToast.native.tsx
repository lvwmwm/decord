// Module ID: 10455
// Function ID: 10456
// Name: ShowSafetyToast
// Dependencies: [4490, 9542, 9543, 2]
// Exports: showSafetyToast

// Module 10455 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4490 */;
import _modDef9542 from "module_9542" /* 9542 */;
import ShieldIcon from "ShieldIcon" /* 9543 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9542, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};
