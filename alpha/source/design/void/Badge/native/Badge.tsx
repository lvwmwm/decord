// Module ID: 16253
// Function ID: 16254
// Name: void/Badge/Badge
// Dependencies: [19, 17, 2191, 1189, 21, 5141, 575, 504, 5761, 2024, 2]
// Exports: MaskedBadge

// Module 16253 (void/Badge/Badge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2191 */;
import BadgeConstants from "BadgeConstants" /* 1189 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let BADGE_PADDING;
let BADGE_SIZE;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
class Badge {
  constructor(value) {
    let accessibilityLabel;
    let accessible;
    let dotStyle;
    let items2;
    let items3;
    let textStyle;
    let tmp2Result;
    let tmp7Result2;
    let tmp9;
    value = value.value;
    require = value;
    const style = value.style;
    let flag = value.accessibilityElementsHidden;
    ({ dotStyle, textStyle, accessible, accessibilityLabel } = value);
    if (flag === undefined) {
      flag = false;
    }
    let str = value.importantForAccessibility;
    if (str === undefined) {
      str = "auto";
    }
    let flag2 = value.hideCount;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let num = value.maxValue;
    if (num === undefined) {
      num = Infinity;
    }
    let flag3 = value.unreadIndicator;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let flag4 = value.eventsMentionBadge;
    if (flag4 === undefined) {
      flag4 = false;
    }
    let flag5 = value.isMentionLowImportance;
    if (flag5 === undefined) {
      flag5 = false;
    }
    const tmp = closure_10();
    const badge = tmp;
    let tmp3 = style;
    let obj = require("get initialized");
    let items = [flag5];
    const items1 = [tmp, style, flag3, value, flag4, flag5];
    const stateFromStores = obj.useStateFromStores(items, () => flag5.locale);
    if (value > 0) {
      const obj2 = { pointerEvents: "none", style: tmp5, accessible, accessibilityLabel, accessibilityElementsHidden: flag, importantForAccessibility: str, children: tmp9 };
      if (!flag3) {
        let tmp7Result;
        if (flag2) {
          const obj3 = { style: items2 };
          items2 = [tmp.noCount, dotStyle];
          tmp7Result = tmp7(tmp8, obj3);
        } else {
          const obj4 = { variant: "body-xs/semibold", color: "none", style: items3, lineClamp: 1, allowFontScaling: false, children: tmp2Result.humanizeValue(Math.min(value, num), stateFromStores) };
          items3 = [tmp.badgeText, textStyle];
          const Text = tmp2(tmp3[8]).Text;
          const _Math = Math;
          tmp2Result = require("NumberUtils");
          tmp7Result = tmp7(Text, obj4);
        }
        tmp9 = tmp7Result;
      } else {
        tmp9 = null;
      }
      tmp7Result2 = tmp7(tmp8, obj2);
    } else {
      tmp7Result2 = null;
    }
    return tmp7Result2;
  }
}
const View = react_native.View;
({ BADGE_MASK_SIZE: hasOwnProperty, BADGE_MASK_UNREAD_SIZE: metroRequire, BADGE_PADDING, BADGE_SIZE } = BadgeConstants);
const BADGE_SIZE_UNREAD = BadgeConstants.BADGE_SIZE_UNREAD;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { badgeMask: { position: "absolute", bottom: -BADGE_PADDING, right: -BADGE_PADDING, padding: BADGE_PADDING, zIndex: 1 }, badge: obj2, badgeText: obj3, noCount: size, unread: obj4, mention: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION }, lowImportanceMention: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG }, eventsMentionBadge: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG } };
obj2 = { paddingLeft: BADGE_PADDING, paddingRight: BADGE_PADDING, borderRadius: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center", overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: nativeDefault.colors.WHITE, textAlign: "center" };
size = { width: 5, height: 5, borderRadius: 2.5, backgroundColor: nativeDefault.colors.WHITE };
obj4 = { backgroundColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
({ backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION });
({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG });
({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG });
const authStore = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("design/void/Badge/native/Badge.tsx");

export default Badge;
export function MaskedBadge(maskStyle) {
  let accessibilityElementsHidden;
  let accessibilityLabel;
  let dotStyle;
  let hideCount;
  let importantForAccessibility;
  let maxValue;
  let onLayout;
  let style;
  let textStyle;
  let tmp3;
  maskStyle = maskStyle.maskStyle;
  const value = maskStyle.value;
  dependencyMap = value;
  let flag = maskStyle.unreadIndicator;
  ({ style, dotStyle, textStyle, maxValue, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, onLayout, hideCount } = maskStyle);
  if (flag === undefined) {
    flag = false;
  }
  const isMentionLowImportance = maskStyle.isMentionLowImportance;
  let tmp = closure_10();
  const badgeMask = tmp;
  let items = [tmp, maskStyle, flag, value];
  if (value > 0) {
    tmp3 = <badgeMask pointerEvents="none" style={tmp2} onLayout={onLayout}>{null}</badgeMask>;
  } else {
    tmp3 = null;
  }
  return tmp3;
}
