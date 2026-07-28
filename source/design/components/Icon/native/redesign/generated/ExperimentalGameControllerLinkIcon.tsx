// Module ID: 8621
// Function ID: 68296
// Name: ExperimentalGameControllerLinkIcon
// Dependencies: [31, 33, 689, 3868, 8622, 2]
// Exports: ExperimentalGameControllerLinkIcon

// Module 8621 (ExperimentalGameControllerLinkIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/ExperimentalGameControllerLinkIcon.tsx");

export const ExperimentalGameControllerLinkIcon = function ExperimentalGameControllerLinkIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(8622) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3868) /* BaseIconImage */.BaseIconImage, { source: require(8622) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
