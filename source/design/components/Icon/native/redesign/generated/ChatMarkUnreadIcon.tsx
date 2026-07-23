// Module ID: 9953
// Function ID: 76960
// Name: ChatMarkUnreadIcon
// Dependencies: [31, 33, 689, 3833, 9954, 2]
// Exports: ChatMarkUnreadIcon

// Module 9953 (ChatMarkUnreadIcon)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Icon/native/redesign/generated/ChatMarkUnreadIcon.tsx");

export const ChatMarkUnreadIcon = function ChatMarkUnreadIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(689).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = Object.create(null);
  obj.style = 0;
  obj.color = 0;
  const merged = Object.assign(color, obj);
  obj = { source: require(9954) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style };
  const merged1 = Object.assign(merged);
  return jsx(require(3833) /* BaseIconImage */.BaseIconImage, { source: require(9954) /* registerAsset */, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
