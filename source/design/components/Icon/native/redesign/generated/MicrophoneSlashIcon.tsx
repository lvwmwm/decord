// Module ID: 9109
// Function ID: 9110
// Name: MicrophoneSlashIcon
// Dependencies: [19, 21, 712, 3987, 9110, 2]
// Exports: MicrophoneSlashIcon

// Module 9109 (MicrophoneSlashIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/MicrophoneSlashIcon.tsx");

export const MicrophoneSlashIcon = function MicrophoneSlashIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(9110) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3987) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
