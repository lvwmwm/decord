// Module ID: 13143
// Function ID: 101175
// Name: Badge
// Dependencies: [31, 27, 1921, 653, 1275, 33, 4130, 689, 477, 566, 7668, 1827, 2]
// Exports: MaskedBadge

// Module 13143 (Badge)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import PX_16 from "PX_16";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import { space } from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "_isNativeReflectConstruct";

let BADGE_PADDING;
let BADGE_SIZE;
let closure_6;
let closure_7;
let require = arg1;
class Badge {
  constructor(arg0) {
    value = global.value;
    closure_0 = value;
    style = global.style;
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
    c2 = flag3;
    flag4 = global.eventsMentionBadge;
    if (flag4 === undefined) {
      flag4 = false;
    }
    c3 = flag4;
    flag5 = global.isMentionLowImportance;
    if (flag5 === undefined) {
      flag5 = false;
    }
    c4 = flag5;
    c5 = undefined;
    items2 = c11();
    c5 = items2;
    obj = require("initialize");
    items = [];
    items[0] = c5;
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
        tmp14 = c4;
        obj1 = {};
        items2 = [, ];
        items2[0] = items2.noCount;
        items2[1] = dotStyle;
        obj1.style = items2;
        tmp7Result = tmp7(c4, obj1);
      } else {
        tmp8 = style;
        tmp9 = c2;
        num2 = 10;
        obj2 = { style: null, numberOfLines: 1, allowFontScaling: false };
        items3 = [, ];
        items3[0] = items2.badgeText;
        items3[1] = textStyle;
        obj2.style = items3;
        tmp11 = closure_0;
        num3 = 11;
        tmp10 = require("module_7668");
        obj4 = require("shortenAndLocalizeNumber");
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
({ BADGE_MASK_SIZE: closure_6, BADGE_MASK_UNREAD_SIZE: closure_7, BADGE_PADDING, BADGE_SIZE } = PX_16);
const BADGE_SIZE_UNREAD = PX_16.BADGE_SIZE_UNREAD;
_createForOfIteratorHelperLoose = { badgeMask: _createForOfIteratorHelperLoose };
_createForOfIteratorHelperLoose = { position: "absolute", bottom: -BADGE_PADDING, right: -BADGE_PADDING, padding: BADGE_PADDING, zIndex: 1 };
let obj1 = { paddingLeft: BADGE_PADDING, paddingRight: BADGE_PADDING, borderRadius: require("_createForOfIteratorHelperLoose").space.PX_8, justifyContent: "center", alignItems: "center", overflow: "hidden" };
_createForOfIteratorHelperLoose.badge = obj1;
const obj2 = { minWidth: BADGE_SIZE - 2 * BADGE_PADDING, color: require("_createForOfIteratorHelperLoose").colors.WHITE, fontSize: 12 };
set = set.isAndroid();
obj2.lineHeight = set ? space.PX_12 : space.PX_16;
obj2.fontFamily = require("ME").Fonts.PRIMARY_BOLD;
obj2.textAlign = "center";
let str;
if (set.isAndroid()) {
  str = "center";
}
obj2.textAlignVertical = str;
_createForOfIteratorHelperLoose.badgeText = obj2;
const obj3 = { width: 5, height: 5, borderRadius: 2.5, backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.noCount = obj3;
_createForOfIteratorHelperLoose.unread = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
set = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_NOTIFICATION };
_createForOfIteratorHelperLoose.mention = set;
set = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG };
_createForOfIteratorHelperLoose.lowImportanceMention = set;
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT };
_createForOfIteratorHelperLoose.eventsMentionBadge = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = set.fileFinishedImporting("design/void/Badge/native/Badge.tsx");

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
  const value = maskStyle.value;
  const importDefault = value;
  let flag = maskStyle.unreadIndicator;
  ({ style, dotStyle, textStyle, maxValue, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, onLayout, hideCount } = maskStyle);
  if (flag === undefined) {
    flag = false;
  }
  let c3;
  const tmp = _createForOfIteratorHelperLoose();
  c3 = tmp;
  let items = [tmp, maskStyle, flag, value];
  if (value > 0) {
    let obj = { pointerEvents: "none", style: tmp2, onLayout };
    obj = { style, textStyle, dotStyle, value, maxValue, hideCount, unreadIndicator: flag, accessibilityLabel, accessibilityElementsHidden, importantForAccessibility, isMentionLowImportance: maskStyle.isMentionLowImportance };
    obj.children = <Badge style={style} textStyle={textStyle} dotStyle={dotStyle} value={value} maxValue={maxValue} hideCount={hideCount} unreadIndicator={flag} accessibilityLabel={accessibilityLabel} accessibilityElementsHidden={accessibilityElementsHidden} importantForAccessibility={importantForAccessibility} isMentionLowImportance={arg0.isMentionLowImportance} />;
    let tmp3 = <View style={style} textStyle={textStyle} dotStyle={dotStyle} value={value} maxValue={maxValue} hideCount={hideCount} unreadIndicator={flag} accessibilityLabel={accessibilityLabel} accessibilityElementsHidden={accessibilityElementsHidden} importantForAccessibility={importantForAccessibility} isMentionLowImportance={arg0.isMentionLowImportance} />;
  } else {
    tmp3 = null;
  }
  return tmp3;
};
