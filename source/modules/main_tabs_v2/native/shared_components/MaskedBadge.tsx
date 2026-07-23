// Module ID: 9127
// Function ID: 71472
// Name: MaskedBadge
// Dependencies: [31, 33, 4130, 689, 1273, 9128, 2]
// Exports: default

// Module 9127 (MaskedBadge)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { maskStyle: { position: "relative", right: undefined }, unreadDot: { width: 0, height: 0 }, badgeStyle: { flexGrow: 1, flexShrink: 0 }, unreadBadge: { position: "relative", bottom: -3 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_400 };
_createForOfIteratorHelperLoose.lowPriorityBadge = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx");

export default function MaskedBadge(backgroundColor) {
  let lowPriority;
  let maxValue;
  let size;
  let style;
  let unread;
  backgroundColor = backgroundColor.backgroundColor;
  const value = backgroundColor.value;
  ({ unread, maxValue, lowPriority, size, style } = backgroundColor);
  const tmp = _createForOfIteratorHelperLoose();
  [][0] = backgroundColor;
  if (value > 0) {
    let obj = {};
    const items = [tmp2, tmp.maskStyle];
    obj.maskStyle = items;
    obj.dotStyle = tmp.unreadDot;
    const items1 = [tmp.badgeStyle, , ];
    let lowPriorityBadge = null;
    if (lowPriority) {
      lowPriorityBadge = tmp.lowPriorityBadge;
    }
    items1[1] = lowPriorityBadge;
    items1[2] = style;
    obj.style = items1;
    obj.value = value;
    obj.maxValue = maxValue;
    let tmp7Result = jsx(backgroundColor(1273).MaskedBadge, {});
    const tmp7 = jsx;
  } else {
    tmp7Result = null;
    if (unread) {
      obj = { size, maskColor: backgroundColor, style: tmp.unreadBadge };
      tmp7Result = jsx(importDefault(9128), { size, maskColor: backgroundColor, style: tmp.unreadBadge });
    }
  }
  return tmp7Result;
};
