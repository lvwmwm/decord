// Module ID: 16335
// Function ID: 16336
// Name: VibegrationsNativeStatusLine
// Dependencies: [19, 17, 21, 576, 4836, 4531, 10615, 6630, 9611, 4832, 16336, 5435, 1115, 3715, 2]
// Exports: default, laneTintFor, laneTintIndexFor

// Module 16335 (VibegrationsNativeStatusLine)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import MagicWandIcon from "MagicWandIcon" /* 9611 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let items = [nativeDefault.colors.TEXT_BRAND, nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, nativeDefault.colors.TEXT_FEEDBACK_WARNING, nativeDefault.colors.TEXT_FEEDBACK_INFO];
let length = items.length;
let createStyles = createStyles_mod;
let obj = { row: obj2, glyphGutter: { width: 40, marginRight: 12, alignItems: "center" }, label: { flex: 1 }, trailing: obj3, chevron: obj4 };
obj2 = { flexDirection: "row", alignItems: "flex-start", paddingVertical: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 0, marginLeft: nativeDefault.space.PX_8 };
obj4 = { flexShrink: 0, marginLeft: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeStatusLine.tsx");

export default function VibegrationsNativeStatusLine(line) {
  let crestColor;
  let epoch;
  let inGutter;
  let intl;
  let obj2;
  let obj3;
  let tint;
  line = line.line;
  let flag = line.settled;
  const live = line.live;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = line.failed;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let str = line.presentation;
  if (str === undefined) {
    str = "headline";
  }
  ({ tint, inGutter } = line);
  if (inGutter === undefined) {
    inGutter = false;
  }
  const trailing = line.trailing;
  const glyph = line.glyph;
  ({ crestColor, epoch } = line);
  if (epoch === undefined) {
    epoch = 0;
  }
  let flag3 = line.expanded;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const onToggle = line.onToggle;
  let TEXT_BRAND;
  let str2;
  let ChevronSmallRightIcon;
  closure_8 = undefined;
  let tmp = closure_8();
  const row = tmp;
  if (flag2) {
    const tmp6 = trailing;
    TEXT_BRAND = inGutter(trailing[3]).colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    const tmp2 = null;
    TEXT_BRAND = tint;
    if (tint == null) {
      TEXT_BRAND = inGutter(trailing[3]).colors.TEXT_BRAND;
    }
  }
  str2 = "text-feedback-critical";
  if (!flag2) {
    let str3 = "text-muted";
    if (!flag) {
      let str4 = "text-default";
      if ("detail" === str) {
        str4 = "text-subtle";
      }
      str3 = str4;
    }
    str2 = str3;
  }
  const useToken = line(trailing[5]).useToken;
  const tmp10 = line(trailing[5]);
  if ("detail" === str) {
    const tmp13 = inGutter;
    tint = inGutter(tmp9[3]).colors.TEXT_DEFAULT;
  } else {
    const tmp11 = null;
    if (tint == null) {
      tint = inGutter(tmp9[3]).colors.TEXT_BRAND;
    }
  }
  if ("detail" === str) {
    crestColor = useToken(tint);
  }
  if (flag3) {
    ChevronSmallRightIcon = tmp8(tmp9[6]).ChevronSmallDownIcon;
  } else {
    ChevronSmallRightIcon = tmp8(tmp9[7]).ChevronSmallRightIcon;
  }
  closure_8 = tmp15;
  items = [ChevronSmallRightIcon, null != onToggle, glyph, TEXT_BRAND, inGutter, line, tmp, str2, trailing];
  const callback = glyph.useCallback(() => {
    let Text;
    let obj5;
    let obj8;
    let tmp6Result;
    let tmp6Result2 = null;
    const obj = { style: row.row, children: items };
    const tmp = metroRequire;
    if (inGutter) {
      const obj2 = { style: row.glyphGutter, children: tmp6Result };
      tmp6Result = glyph;
      if (glyph == null) {
        const obj3 = { size: "refresh_sm", color: TEXT_BRAND };
        tmp6Result = tmp6(MagicWandIcon.MagicWandIcon, obj3);
      }
      tmp6Result2 = tmp6(tmp2, obj2);
    }
    items = [tmp6Result2, , , ];
    let str = "text-sm/normal";
    const obj4 = { style: row.label, children: hasOwnProperty(Text, obj5) };
    Text = Text_Text.Text;
    if (inGutter) {
      str = "text-md/normal";
    }
    obj5 = { variant: str, color: str2, children: line };
    items[1] = hasOwnProperty(View, obj4);
    let tmp11Result = null;
    if (null != trailing) {
      const obj6 = { style: row.trailing, children: tmp13 };
      tmp11Result = tmp11(tmp2, obj6);
    }
    items[2] = tmp11Result;
    let tmp11Result2 = null;
    if (closure_8) {
      const obj7 = { style: row.chevron, children: hasOwnProperty(ChevronSmallRightIcon, obj8) };
      obj8 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      tmp11Result2 = tmp11(tmp2, obj7);
    }
    items[3] = tmp11Result2;
    return tmp(View, obj);
  }, items);
  const tmp19 = TEXT_BRAND(inGutter(trailing[10]), { renderFace: callback, live, tint: crestColor, epoch });
  let tmp17Result = tmp19;
  const tmp17 = TEXT_BRAND;
  const tmp18 = inGutter;
  if (null != onToggle) {
    let obj = { accessibilityRole: "button", accessibilityState: obj2, accessibilityLabel: intl.formatToPlainString(tmp18(tmp9[13]).s1wx5H, obj3), hitSlop: 8, onPress: onToggle, children: tmp19 };
    obj2 = { expanded: flag3 };
    const PressableOpacity = tmp8(tmp9[11]).PressableOpacity;
    intl = tmp8(tmp9[12]).intl;
    obj3 = { activity: line };
    tmp17Result = tmp17(PressableOpacity, obj);
  }
  return tmp17Result;
};
export const LANE_TINT_COUNT = length;
export const laneTintIndexFor = function laneTintIndexFor(key) {
  let length;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < key.length) {
    do {
      num3 = (31 * num3 + key.charCodeAt(num2)) % 2147483647;
      num2 = num2 + 1;
      num = num3;
      length = key.length;
    } while (num2 < length);
  }
  return num % items.length;
};
export const laneTintFor = function laneTintFor(str) {
  let length;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  const tmp = items;
  if (0 < str.length) {
    do {
      num3 = (31 * num3 + str.charCodeAt(num2)) % 2147483647;
      num2 = num2 + 1;
      num = num3;
      length = str.length;
    } while (num2 < length);
  }
  return tmp[num % items.length];
};
export const MESSAGE_AVATAR_SIZE = 40;
export const MESSAGE_EDGE_INSET = 12;
export const MESSAGE_AVATAR_GAP = 12;
export const MESSAGE_CONTENT_INSET = 64;
