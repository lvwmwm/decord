// Module ID: 9119
// Function ID: 71407
// Name: MaskedBadge
// Dependencies: []
// Exports: default

// Module 9119 (MaskedBadge)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = { maskStyle: { position: "relative", right: undefined }, unreadDot: { bhk: -536870861, bic: -299892737 }, badgeStyle: {}, unreadBadge: {} };
obj = { backgroundColor: importDefault(dependencyMap[3]).unsafe_rawColors.PRIMARY_400 };
obj.lowPriorityBadge = obj;
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx");

export default function MaskedBadge(backgroundColor) {
  let lowPriority;
  let maxValue;
  let size;
  let style;
  let unread;
  backgroundColor = backgroundColor.backgroundColor;
  const arg1 = backgroundColor;
  const value = backgroundColor.value;
  ({ unread, maxValue, lowPriority, size, style } = backgroundColor);
  const tmp = callback();
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
    let tmp7Result = jsx(arg1(dependencyMap[4]).MaskedBadge, obj);
    const tmp7 = jsx;
  } else {
    tmp7Result = null;
    if (unread) {
      obj = { size, maskColor: backgroundColor, style: tmp.unreadBadge };
      tmp7Result = jsx(importDefault(dependencyMap[5]), obj);
    }
  }
  return tmp7Result;
};
