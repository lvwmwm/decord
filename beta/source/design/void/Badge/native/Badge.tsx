// Module ID: 13670
// Function ID: 13671
// Name: Badge/Badge
// Dependencies: [19, 17, 2112, 1074, 1179, 21, 4836, 576, 1364, 4685, 504, 4832, 1882, 8072, 2]
// Exports: MaskedBadge

// Module 13670 (Badge/Badge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import BadgeConstants from "BadgeConstants" /* 1179 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

let BADGE_PADDING;
let BADGE_SIZE;
let PlatformUtils;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let space;
let str;
class Badge {
  constructor(value) {
    let accessibilityElementsHidden;
    let accessibilityLabel;
    let accessible;
    let dotStyle;
    let items2;
    let items3;
    let items4;
    let textStyle;
    let tmp10;
    let tmp2Result3;
    let tmp2Result4;
    let tmp8Result2;
    value = value.value;
    require = value;
    const style = value.style;
    ({ textStyle, accessibilityElementsHidden } = value);
    ({ dotStyle, accessible, accessibilityLabel } = value);
    if (accessibilityElementsHidden === undefined) {
      accessibilityElementsHidden = false;
    }
    let str = value.importantForAccessibility;
    if (str === undefined) {
      str = "auto";
    }
    let flag = value.hideCount;
    if (flag === undefined) {
      flag = false;
    }
    let num = value.maxValue;
    if (num === undefined) {
      num = Infinity;
    }
    let flag2 = value.unreadIndicator;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let flag3 = value.eventsMentionBadge;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let flag4 = value.isMentionLowImportance;
    if (flag4 === undefined) {
      flag4 = false;
    }
    const tmp = closure_11();
    let closure_5 = tmp;
    let tmp3 = flag2;
    let obj = require("shared");
    const themeContext = obj.useThemeContext();
    let flag5;
    if (themeContext != null) {
      const enabledExperiments = themeContext.enabledExperiments;
      if (enabledExperiments != null) {
        flag5 = enabledExperiments.includes("mana-type-consolidation");
      }
    }
    if (flag5 == null) {
      flag5 = false;
    }
    let items = [closure_5];
    const tmp2Result = require("get initialized");
    const stateFromStores = tmp2Result.useStateFromStores(items, () => closure_5.locale);
    const items1 = [tmp, style, flag2, value, flag3, flag4];
    if (value > 0) {
      const obj2 = { pointerEvents: "none", style: tmp6, accessible, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility: str, children: tmp10 };
      if (!flag2) {
        let tmp8Result;
        if (flag) {
          const obj3 = { style: items2 };
          items2 = [tmp.noCount, dotStyle];
          tmp8Result = tmp8(tmp9, obj3);
        } else if (flag5) {
          const obj4 = { variant: "experimental/body-xs/semibold", color: "none", style: items3, lineClamp: 1, allowFontScaling: false, children: tmp2Result3.humanizeValue(Math.min(value, num), stateFromStores) };
          items3 = [tmp.experimentalBadgeText, textStyle];
          const Text = tmp2(tmp3[11]).Text;
          const _Math2 = Math;
          tmp2Result3 = require("NumberUtils");
          tmp8Result = tmp8(Text, obj4);
        } else {
          const obj5 = { style: items4, numberOfLines: 1, allowFontScaling: false, children: tmp2Result4.humanizeValue(Math.min(value, num), stateFromStores) };
          items4 = [tmp.badgeText, textStyle];
          const _Math = Math;
          const tmp12 = style(tmp3[13]);
          tmp2Result4 = require("NumberUtils");
          tmp8Result = tmp8(tmp12, obj5);
        }
        tmp10 = tmp8Result;
      } else {
        tmp10 = null;
      }
      tmp8Result2 = tmp8(tmp9, obj2);
    } else {
      tmp8Result2 = null;
    }
    return tmp8Result2;
  }
}
const View = react_native.View;
const Fonts = Constants.Fonts;
({ BADGE_MASK_SIZE: metroRequire, BADGE_MASK_UNREAD_SIZE: metroImportDefault, BADGE_PADDING, BADGE_SIZE } = BadgeConstants);
const BADGE_SIZE_UNREAD = BadgeConstants.BADGE_SIZE_UNREAD;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { badgeMask: { position: "absolute", bottom: -BADGE_PADDING, right: -BADGE_PADDING, padding: BADGE_PADDING, zIndex: 1 }, badge: obj2, badgeText: obj3, experimentalBadgeText: obj4, noCount: size, unread: obj5, mention: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION }, lowImportanceMention: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG }, eventsMentionBadge: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG } };
obj2 = { paddingLeft: BADGE_PADDING, paddingRight: BADGE_PADDING, borderRadius: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center", overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: nativeDefault.colors.WHITE, fontSize: 12, lineHeight: PlatformUtils ? space.PX_12 : space.PX_16, fontFamily: Fonts.PRIMARY_BOLD, textAlign: "center", textAlignVertical: str };
PlatformUtils = PlatformUtils_mod;
PlatformUtils.isAndroid();
space = nativeDefault.space;
PlatformUtils = PlatformUtils_mod;
str = undefined;
if (PlatformUtils.isAndroid()) {
  str = "center";
}
obj4 = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: nativeDefault.colors.WHITE, textAlign: "center" };
size = { width: 5, height: 5, borderRadius: 2.5, backgroundColor: nativeDefault.colors.WHITE };
obj5 = { backgroundColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
({ backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION });
({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG });
({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG });
const unpackModuleId = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("design/void/Badge/native/Badge.tsx");

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
  let tmp3;
  maskStyle = maskStyle.maskStyle;
  const value = maskStyle.value;
  importDefault = value;
  let flag = maskStyle.unreadIndicator;
  ({ style, dotStyle, textStyle, maxValue, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, onLayout, hideCount } = maskStyle);
  if (flag === undefined) {
    flag = false;
  }
  const isMentionLowImportance = maskStyle.isMentionLowImportance;
  let tmp = closure_11();
  const badgeMask = tmp;
  let items = [tmp, maskStyle, flag, value];
  if (value > 0) {
    tmp3 = <View pointerEvents="none" style={tmp2} onLayout={onLayout}>{null}</View>;
  } else {
    tmp3 = null;
  }
  return tmp3;
};
