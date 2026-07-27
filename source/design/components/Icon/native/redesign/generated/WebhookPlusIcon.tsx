// Module ID: 15597
// Function ID: 120261
// Name: WebhookPlusIcon
// Dependencies: [31, 33, 689, 3834, 15598, 2]
// Exports: WebhookPlusIcon

// Module 15597 (WebhookPlusIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/WebhookPlusIcon.tsx");

export const WebhookPlusIcon = function WebhookPlusIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(15598) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3834) /* BaseIconImage */.BaseIconImage, { source: require(15598) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
