// Module ID: 9467
// Function ID: 9468
// Name: WishlistItemCardBase
// Dependencies: [19, 17, 21, 575, 5014, 5712, 9468, 5080, 8811, 5596, 9470, 1113, 1379, 9285, 8667, 9491, 2]
// Exports: default

// Module 9467 (WishlistItemCardBase)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import native from "native" /* 5080 */;
import useToken from "useToken" /* 5596 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import useUserProfileColors from "useUserProfileColors" /* 8811 */;
import IndicatorDot from "IndicatorDot" /* 9491 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
  HeartIcon = toastText(9468).HeartIcon;
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

export default function WishlistItemCardBase(arg0) {
  let CheckmarkLargeBoldIcon;
  let LockIcon;
  let accessibilityHidden;
  let accessibilityLabel;
  let isNew;
  let obj11;
  let obj5;
  let obj9;
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
  let tmp24;
  ({ onPress, size } = arg0);
  ({ accessibilityLabel, renderPreview, source } = arg0);
  if (size === undefined) {
    size = 170;
  }
  ({ overlay, accessibilityHidden, isNew, recipientName } = arg0);
  if (isNew === undefined) {
    isNew = false;
  }
  const tmp = closure_8();
  const obj = native;
  const themeContext = obj.useThemeContext();
  ({ primaryColor, theme, secondaryColor } = themeContext);
  const obj2 = useUserProfileColors;
  const containerBackground = obj2.useUserProfileColors({ theme, primaryColor, secondaryColor }).containerBackground;
  const obj3 = useToken;
  let token = obj3.useToken(nativeDefault.colors.BG_SURFACE_RAISED);
  if (null != primaryColor) {
    token = containerBackground;
  }
  const items = [tmp.card, { backgroundColor: token }, ];
  if (typeof size === "object") {
    const size1 = { width: null, height: null };
    ({ width: obj4.width, height: obj4.height } = size);
    obj5 = size1;
  } else {
    obj5 = { width: size, aspectRatio: 1 };
  }
  items[2] = obj5;
  const WISHLIST = tmp2(9470).WishlistItemSource.WISHLIST;
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
  let tmp16Result4 = source === WISHLIST;
  items1[1] = stringResult;
  let tmp11 = null;
  if (tmp16Result4) {
    tmp11 = formatToPlainStringResult;
  }
  items1[2] = tmp11;
  const found = items1.filter(tmp2(1379).isNotNullish);
  const joined = found.join(", ");
  let formatToPlainStringResult1 = joined;
  if (isNew) {
    const intl4 = tmp2(1113).intl;
    const obj6 = { label: joined };
    formatToPlainStringResult1 = intl4.formatToPlainString(tmp2(1113).t.s9RZ1r, obj6);
  }
  const items2 = [tmp.previewWrap, ];
  let dimmedPreview = overlay === tmp8.OWNED;
  const tmp14 = metroImportDefault;
  const tmp15 = metroRequire;
  if (dimmedPreview) {
    dimmedPreview = tmp.dimmedPreview;
  }
  obj7 = { style: items2, "aria-hidden": true, children: renderPreview() };
  items2[1] = dimmedPreview;
  const items3 = [hasOwnProperty(React3, obj7), , , , ];
  let tmp16Result = overlay === tmp8.OWNED;
  if (tmp16Result) {
    const obj8 = { style: tmp.overlayContainer, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(CheckmarkLargeBoldIcon, obj9) };
    obj9 = { color: nativeDefault.colors.WHITE, size: "custom", style: { width: 40, height: 40 } };
    CheckmarkLargeBoldIcon = tmp2(9285).CheckmarkLargeBoldIcon;
    tmp16Result = tmp16(tmp17, obj8);
  }
  items3[1] = tmp16Result;
  let tmp16Result3 = overlay === tmp8.LOCKED;
  if (tmp16Result3) {
    const obj10 = { style: tmp.lockBadge, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(LockIcon, obj11) };
    obj11 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, size: "custom", style: { width: 18, height: 18 } };
    LockIcon = tmp2(8667).LockIcon;
    tmp16Result3 = tmp16(tmp17, obj10);
  }
  items3[2] = tmp16Result3;
  if (tmp16Result4) {
    const obj12 = { toastText: formatToPlainStringResult };
    tmp16Result4 = tmp16(SourceIcon, obj12);
  }
  items3[3] = tmp16Result4;
  if (isNew) {
    const obj13 = { style: tmp.newContentDot, pointerEvents: "none", children: hasOwnProperty(IndicatorDot.IndicatorDot, {}) };
    isNew = tmp16(tmp17, obj13);
  }
  items3[4] = isNew;
  const tmp14Result = tmp14(tmp15, { children: items3 });
  if (null == onPress) {
    const obj14 = { style: items, accessible: "" !== formatToPlainStringResult1 || undefined, accessibilityLabel: tmp24, accessibilityElementsHidden: accessibilityHidden, importantForAccessibility: str3, children: tmp14Result };
    tmp24 = undefined;
    if ("" !== formatToPlainStringResult1) {
      tmp24 = formatToPlainStringResult1;
    }
    str3 = "auto";
    if (accessibilityHidden) {
      str3 = "no-hide-descendants";
    }
    return hasOwnProperty(React3, obj14);
  } else {
    const obj15 = { accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult1, style: items, onPress, accessibilityElementsHidden: accessibilityHidden, importantForAccessibility: str, children: tmp14Result };
    str = "auto";
    const tmp22 = _false;
    if (accessibilityHidden) {
      str = "no-hide-descendants";
    }
    return hasOwnProperty(tmp22, obj15);
  }
};
export const DEFAULT_ITEM_SIZE = 170;
export const CARD_TOP_RIGHT_OVERLAY_POSITION = rect;
export const WishlistItemCardOverlay = obj7;
