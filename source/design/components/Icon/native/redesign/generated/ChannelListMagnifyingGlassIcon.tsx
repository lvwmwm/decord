// Module ID: 13261
// Function ID: 13262
// Name: ChannelListMagnifyingGlassIcon
// Dependencies: [19, 21, 712, 4064, 13262, 2]
// Exports: ChannelListMagnifyingGlassIcon

// Module 13261 (ChannelListMagnifyingGlassIcon)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Themes").fileFinishedImporting("design/components/Icon/native/redesign/generated/ChannelListMagnifyingGlassIcon.tsx");

export const ChannelListMagnifyingGlassIcon = function ChannelListMagnifyingGlassIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const obj = { source: null, color: null, style: null };
  obj[0] = require(13262) /* registerAsset */;
  obj[1] = INTERACTIVE_ICON_DEFAULT;
  obj[2] = color.style;
  const merged1 = Object.assign(merged);
  return jsx(require(4064) /* BaseIconImage */.BaseIconImage, { source: null, color: null, style: null });
};
