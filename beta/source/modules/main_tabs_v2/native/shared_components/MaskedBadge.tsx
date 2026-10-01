// Module ID: 7293
// Function ID: 7294
// Name: MaskedBadge
// Dependencies: [19, 21, 4836, 576, 1177, 7294, 2]
// Exports: default

// Module 7293 (MaskedBadge)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import shared_components_BadgeDefault from "shared_components/Badge" /* 7294 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
const obj = { maskStyle: { position: "relative", right: "HermesInternal" }, unreadDot: { width: 0, height: 0 }, badgeStyle: { flexGrow: 1, flexShrink: 0 }, unreadBadge: { position: "relative", bottom: -3 }, lowPriorityBadge: obj2 };
obj2 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_400 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx");

export default function MaskedBadge(backgroundColor) {
  let items;
  let items1;
  let lowPriority;
  let maxValue;
  let style;
  let tmp7Result;
  let unread;
  backgroundColor = backgroundColor.backgroundColor;
  const value = backgroundColor.value;
  ({ unread, maxValue, lowPriority, size, style } = backgroundColor);
  const tmp = closure_5();
  [][0] = backgroundColor;
  if (value > 0) {
    const obj2 = { maskStyle: items, dotStyle: tmp.unreadDot, style: items1, value, maxValue };
    items = [tmp2, tmp.maskStyle];
    items1 = [tmp.badgeStyle, , ];
    let lowPriorityBadge = null;
    const MaskedBadge = native.MaskedBadge;
    const tmp7 = jsx;
    if (lowPriority) {
      lowPriorityBadge = tmp.lowPriorityBadge;
    }
    items1[1] = lowPriorityBadge;
    items1[2] = style;
    tmp7Result = tmp7(MaskedBadge, obj2);
  } else {
    tmp7Result = null;
    if (unread) {
      tmp7Result = jsx(shared_components_BadgeDefault, { size, maskColor: backgroundColor, style: tmp.unreadBadge });
    }
  }
  return tmp7Result;
};
