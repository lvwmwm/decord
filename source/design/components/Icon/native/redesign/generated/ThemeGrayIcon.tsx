// Module ID: 15150
// Function ID: 115316
// Name: ThemeGrayIcon
// Dependencies: [31, 33, 689, 3833, 15151, 2]
// Exports: ThemeGrayIcon

// Module 15150 (ThemeGrayIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/ThemeGrayIcon.tsx");

export const ThemeGrayIcon = function ThemeGrayIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(15151) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(15151) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
