// Module ID: 12977
// Function ID: 98696
// Name: Badge
// Dependencies: []
// Exports: MaskedBadge

// Module 12977 (Badge)
let BADGE_PADDING;
let BADGE_SIZE;
class Badge {
  constructor(arg0) {
    value = global.value;
    arg1 = value;
    style = global.style;
    importDefault = style;
    flag = global.accessibilityElementsHidden;
    ({ dotStyle, textStyle, accessible, accessibilityLabel } = global);
    if (flag === undefined) {
      flag = false;
    }
    str = global.importantForAccessibility;
    if (str === undefined) {
      str = "auto";
    }
    flag2 = global.hideCount;
    if (flag2 === undefined) {
      flag2 = false;
    }
    num = global.maxValue;
    if (num === undefined) {
      num = Infinity;
    }
    flag3 = global.unreadIndicator;
    if (flag3 === undefined) {
      flag3 = false;
    }
    closure_2 = flag3;
    flag4 = global.eventsMentionBadge;
    if (flag4 === undefined) {
      flag4 = false;
    }
    closure_3 = flag4;
    flag5 = global.isMentionLowImportance;
    if (flag5 === undefined) {
      flag5 = false;
    }
    closure_4 = flag5;
    closure_5 = undefined;
    items2 = closure_11();
    closure_5 = items2;
    obj = arg1(closure_2[9]);
    items = [];
    items[0] = closure_5;
    items1 = [, , , , , ];
    items1[0] = items2;
    items1[1] = style;
    items1[2] = flag3;
    items1[3] = value;
    items1[4] = flag4;
    items1[5] = flag5;
    stateFromStores = obj.useStateFromStores(items, () => items2.locale);
    if (value > 0) {
      obj = {};
      str2 = "none";
      obj.pointerEvents = "none";
      obj.style = tmp2;
      obj.accessible = accessible;
      obj.accessibilityLabel = accessibilityLabel;
      obj.accessibilityElementsHidden = flag;
      obj.importantForAccessibility = str;
      if (flag3) {
        tmp6 = null;
        if (0 === value) {
          obj.children = null;
          tmp4Result = tmp4(tmp5, obj);
        }
      }
      tmp7 = jsx;
      if (flag2) {
        tmp14 = closure_4;
        obj1 = {};
        items2 = [, ];
        items2[0] = items2.noCount;
        items2[1] = dotStyle;
        obj1.style = items2;
        tmp7Result = tmp7(closure_4, obj1);
      } else {
        tmp8 = importDefault;
        tmp9 = closure_2;
        num2 = 10;
        obj2 = {};
        items3 = [, ];
        items3[0] = items2.badgeText;
        items3[1] = textStyle;
        obj2.style = items3;
        tmp11 = arg1;
        num3 = 11;
        tmp10 = importDefault(closure_2[10]);
        obj4 = arg1(closure_2[11]);
        tmp12 = globalThis;
        _Math = Math;
        obj2.children = obj4.humanizeValue(Math.min(value, num), stateFromStores);
        tmp7Result = tmp7(tmp10, obj2);
      }
      tmp15 = tmp7Result;
    } else {
      tmp4Result = null;
    }
    return tmp4Result;
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[4]);
({ BADGE_MASK_SIZE: closure_6, BADGE_MASK_UNREAD_SIZE: closure_7, BADGE_PADDING, BADGE_SIZE } = tmp2);
const BADGE_SIZE_UNREAD = tmp2.BADGE_SIZE_UNREAD;
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[6]);
obj = { badgeMask: obj };
obj = { position: "absolute", bottom: -BADGE_PADDING, right: -BADGE_PADDING, padding: BADGE_PADDING, zIndex: 1 };
const obj1 = { "Null": "<string:17134657>", "Null": "<string:1147228416>", "Null": "<string:17134657>", "Null": "<string:1218597120>", "Null": "<string:17134657>", "Null": "<string:1057575168>", paddingLeft: BADGE_PADDING, paddingRight: BADGE_PADDING, borderRadius: importDefault(dependencyMap[7]).space.PX_8 };
obj.badge = obj1;
const obj2 = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: importDefault(dependencyMap[7]).colors.WHITE, fontSize: 12 };
let obj5 = arg1(dependencyMap[8]);
const space = importDefault(dependencyMap[7]).space;
obj2.lineHeight = obj5.isAndroid() ? space.PX_12 : space.PX_16;
obj2.fontFamily = arg1(dependencyMap[3]).Fonts.PRIMARY_BOLD;
obj2.textAlign = "center";
let obj6 = arg1(dependencyMap[8]);
let str;
if (obj6.isAndroid()) {
  str = "center";
}
obj2.textAlignVertical = str;
obj.badgeText = obj2;
const obj3 = { "Bool(false)": "__closure", "Bool(false)": "4", "Bool(false)": "gsw", backgroundColor: importDefault(dependencyMap[7]).colors.WHITE };
obj.noCount = obj3;
const isAndroidResult = obj5.isAndroid();
obj.unread = { backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
obj5 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_FEEDBACK_NOTIFICATION };
obj.mention = obj5;
obj6 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_STRONG };
obj.lowImportanceMention = obj6;
const obj4 = { backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
obj.eventsMentionBadge = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_STRONG };
let closure_11 = obj.createStyles(obj);
const obj7 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_STRONG };
const result = arg1(dependencyMap[12]).fileFinishedImporting("design/void/Badge/native/Badge.tsx");

export default Badge;
export const MaskedBadge = function MaskedBadge(maskStyle) {
  let accessibilityElementsHidden;
  let accessibilityLabel;
  let dotStyle;
  let hideCount;
  let importantForAccessibility;
  let maxValue;
  let onLayout;
  let style;
  let textStyle;
  maskStyle = maskStyle.maskStyle;
  const arg1 = maskStyle;
  const value = maskStyle.value;
  const importDefault = value;
  let flag = maskStyle.unreadIndicator;
  ({ style, dotStyle, textStyle, maxValue, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, onLayout, hideCount } = maskStyle);
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  let closure_3;
  const tmp = callback();
  closure_3 = tmp;
  const items = [tmp, maskStyle, flag, value];
  if (value > 0) {
    let obj = { pointerEvents: "none", style: tmp2, onLayout };
    obj = { style, textStyle, dotStyle, value, maxValue, hideCount, unreadIndicator: flag, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, isMentionLowImportance: maskStyle.isMentionLowImportance };
    obj.children = <Badge {...obj} />;
    let tmp3 = <View {...obj} />;
  } else {
    tmp3 = null;
  }
  return tmp3;
};
