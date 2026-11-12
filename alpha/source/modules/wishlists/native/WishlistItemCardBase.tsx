// Module ID: 9394
// Function ID: 9395
// Name: WishlistItemCardBase
// Dependencies: [19, 17, 21, 575, 5243, 5952, 9389, 5314, 8535, 5839, 9395, 1113, 1380, 9416, 8027, 9418, 2]
// Exports: default

// Module 9394 (WishlistItemCardBase)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import native from "native" /* 5314 */;
import useToken from "useToken" /* 5839 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import useUserProfileColors from "useUserProfileColors" /* 8535 */;
import IndicatorDot from "IndicatorDot" /* 9418 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function SourceIcon(toastText) {
  let HeartIcon;
  let obj2;
  toastText = toastText.toastText;
  let obj = {
    style: closure_8().sourceIcon,
    onPress() {
      const obj = ToastActionCreatorsDefault;
      const obj2 = { text: toastText };
      obj.open("WISHLIST_SOURCE_ICON", obj2);
    },
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: closure_5(HeartIcon, obj2)
  };
  obj2 = { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "md" };
  HeartIcon = toastText(9389).HeartIcon;
  return closure_5(closure_3, obj);
}
({ Pressable: c3, View: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
let createStyles = createStyles_mod;
let obj = { card: obj2, overlayContainer: obj3, previewWrap: { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }, dimmedPreview: { opacity: 0.5 }, sourceIcon: obj4, newContentDot: obj5, lockBadge: obj6 };
obj2 = { borderWidth: 1, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_MUTED, justifyContent: "center", alignItems: "center", overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { justifyContent: "center", alignItems: "center", zIndex: 2, shadowOpacity: 0.5, shadowRadius: 6, elevation: 6 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { zIndex: 1 };
const merged1 = Object.assign(rect);
obj5 = { zIndex: 2 };
const merged2 = Object.assign(rect);
obj6 = { zIndex: 2, width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, alignItems: "center", justifyContent: "center" };
const merged3 = Object.assign(rect);
let closure_8 = createStyles(obj);
let obj7 = { OWNED: "owned", LOCKED: "locked" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistItemCardBase.tsx");

export default function WishlistItemCardBase(backgroundColor) {
  let CheckmarkLargeBoldIcon;
  let LockIcon;
  let accessibilityHidden;
  let accessibilityLabel;
  let isNew;
  let obj10;
  let obj12;
  let obj6;
  let onPress;
  let overlay;
  let primaryColor;
  let recipientName;
  let renderPreview;
  let secondaryColor;
  let source;
  let str;
  let str3;
  let stringResult;
  let theme;
  let tmp25;
  ({ onPress, size } = backgroundColor);
  ({ accessibilityLabel, renderPreview, source } = backgroundColor);
  if (size === undefined) {
    size = 170;
  }
  ({ overlay, accessibilityHidden, isNew, recipientName } = backgroundColor);
  if (isNew === undefined) {
    isNew = false;
  }
  backgroundColor = backgroundColor.backgroundColor;
  const tmp = closure_8();
  const obj = native;
  const themeContext = obj.useThemeContext();
  ({ primaryColor, theme, secondaryColor } = themeContext);
  const obj2 = useUserProfileColors;
  let containerBackground = obj2.useUserProfileColors({ theme, primaryColor, secondaryColor }).containerBackground;
  const obj3 = useToken;
  const token = obj3.useToken(nativeDefault.colors.BG_SURFACE_RAISED);
  const obj4 = useToken;
  let token1 = obj4.useToken(backgroundColor);
  if (null == primaryColor) {
    if (token1 == null) {
      token1 = token;
    }
    containerBackground = token1;
  }
  const items = [tmp.card, { backgroundColor: containerBackground }, ];
  if (typeof size === "object") {
    const size1 = { width: null, height: null };
    ({ width: obj5.width, height: obj5.height } = size);
    obj6 = size1;
  } else {
    obj6 = { width: size, aspectRatio: 1 };
  }
  items[2] = obj6;
  const WISHLIST = tmp2(9395).WishlistItemSource.WISHLIST;
  const intl = tmp2(1113).intl;
  const formatToPlainStringResult = intl.formatToPlainString(intl5.t.p3RmJF, { username: recipientName });
  const items1 = [accessibilityLabel, , ];
  if (obj7.OWNED === overlay) {
    const intl3 = tmp2(1113).intl;
    stringResult = intl3.string(tmp2(1113).t["6cfuDj"]);
  } else {
    stringResult = null;
    if (obj7.LOCKED === overlay) {
      const intl2 = tmp2(1113).intl;
      stringResult = intl2.string(tmp2(1113).t.wu4gyV);
    }
  }
  let tmp17Result4 = source === WISHLIST;
  items1[1] = stringResult;
  let tmp12 = null;
  if (tmp17Result4) {
    tmp12 = formatToPlainStringResult;
  }
  items1[2] = tmp12;
  const found = items1.filter(tmp2(1380).isNotNullish);
  const joined = found.join(", ");
  let formatToPlainStringResult1 = joined;
  if (isNew) {
    const intl4 = tmp2(1113).intl;
    obj7 = { label: joined };
    formatToPlainStringResult1 = intl4.formatToPlainString(tmp2(1113).t.s9RZ1r, obj7);
  }
  const items2 = [tmp.previewWrap, ];
  let dimmedPreview = overlay === tmp9.OWNED;
  const tmp15 = metroImportDefault;
  const tmp16 = metroRequire;
  if (dimmedPreview) {
    dimmedPreview = tmp.dimmedPreview;
  }
  items2[1] = dimmedPreview;
  const items3 = [, , , , ];
  const obj8 = { style: items2, "aria-hidden": true, children: renderPreview() };
  items3[0] = hasOwnProperty(React3, obj8);
  let tmp17Result = overlay === tmp9.OWNED;
  if (tmp17Result) {
    const obj9 = { style: tmp.overlayContainer, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(CheckmarkLargeBoldIcon, obj10) };
    obj10 = { color: nativeDefault.colors.WHITE, size: "custom", style: { width: 40, height: 40 } };
    CheckmarkLargeBoldIcon = tmp2(9416).CheckmarkLargeBoldIcon;
    tmp17Result = tmp17(tmp18, obj9);
  }
  items3[1] = tmp17Result;
  let tmp17Result3 = overlay === tmp9.LOCKED;
  if (tmp17Result3) {
    const obj11 = { style: tmp.lockBadge, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(LockIcon, obj12) };
    obj12 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, size: "custom", style: { width: 18, height: 18 } };
    LockIcon = tmp2(8027).LockIcon;
    tmp17Result3 = tmp17(tmp18, obj11);
  }
  items3[2] = tmp17Result3;
  if (tmp17Result4) {
    const obj13 = { toastText: formatToPlainStringResult };
    tmp17Result4 = tmp17(SourceIcon, obj13);
  }
  items3[3] = tmp17Result4;
  if (isNew) {
    const obj14 = { style: tmp.newContentDot, pointerEvents: "none", children: hasOwnProperty(IndicatorDot.IndicatorDot, {}) };
    isNew = tmp17(tmp18, obj14);
  }
  items3[4] = isNew;
  const tmp15Result = tmp15(tmp16, { children: items3 });
  if (null == onPress) {
    const obj15 = { style: items, accessible: "" !== formatToPlainStringResult1 || undefined, accessibilityLabel: tmp25, accessibilityElementsHidden: accessibilityHidden, importantForAccessibility: str3, children: tmp15Result };
    tmp25 = undefined;
    if ("" !== formatToPlainStringResult1) {
      tmp25 = formatToPlainStringResult1;
    }
    str3 = "auto";
    if (accessibilityHidden) {
      str3 = "no-hide-descendants";
    }
    return hasOwnProperty(React3, obj15);
  } else {
    const obj16 = { accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult1, style: items, onPress, accessibilityElementsHidden: accessibilityHidden, importantForAccessibility: str, children: tmp15Result };
    str = "auto";
    const tmp23 = _false;
    if (accessibilityHidden) {
      str = "no-hide-descendants";
    }
    return hasOwnProperty(tmp23, obj16);
  }
};
export const DEFAULT_ITEM_SIZE = 170;
export const CARD_TOP_RIGHT_OVERLAY_POSITION = rect;
export const WishlistItemCardOverlay = obj7;
