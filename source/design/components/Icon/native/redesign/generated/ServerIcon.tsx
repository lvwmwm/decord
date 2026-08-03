// Module ID: 9190
// Function ID: 9191
// Name: ServerIcon
// Dependencies: [19, 21, 712, 3958, 9191, 2]
// Exports: ServerIcon

// Module 9190 (ServerIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/ServerIcon.tsx");

export const ServerIcon = function ServerIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(9191) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(3958) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
