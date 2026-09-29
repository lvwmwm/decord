// Module ID: 15839
// Function ID: 15840
// Name: MobilePhoneSettingsIcon
// Dependencies: [19, 21, 576, 4488, 15840, 2]
// Exports: MobilePhoneSettingsIcon

// Module 15839 (MobilePhoneSettingsIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod15840 from "module_15840" /* 15840 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/MobilePhoneSettingsIcon.tsx");

export const MobilePhoneSettingsIcon = function MobilePhoneSettingsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15840, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
