// Module ID: 8235
// Function ID: 8236
// Name: WishlistItemCardBase
// Dependencies: [19, 17, 21, 576, 4836, 4528, 8236, 4540, 7684, 4531, 8238, 1115, 1370, 8258, 5409, 2]
// Exports: default

// Module 8235 (WishlistItemCardBase)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import useToken from "useToken" /* 4531 */;
import native from "native" /* 4540 */;
import useUserProfileColors from "useUserProfileColors" /* 7684 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
function SourceIcon(toastText) {
  let HeartIcon;
  let obj2;
  toastText = toastText.toastText;
  let obj = {
    style: closure_8().sourceIcon,
    onPress() {
      const obj = ToastActionCreatorsDefault;
      const obj2 = { key: "WISHLIST_SOURCE_ICON", content: toastText };
      obj.open(obj2);
    },
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: closure_5(HeartIcon, obj2)
  };
  obj2 = { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "md" };
  HeartIcon = toastText(8236).HeartIcon;
  return closure_5(closure_3, obj);
}
({ Pressable: c3, View: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
let createStyles = createStyles_mod;
let obj = { card: obj2, overlayContainer: obj3, previewWrap: { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }, dimmedPreview: { opacity: 0.5 }, sourceIcon: obj4, lockBadge: obj5 };
obj2 = { borderWidth: 1, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_MUTED, justifyContent: "center", alignItems: "center", overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { justifyContent: "center", alignItems: "center", zIndex: 2, shadowOpacity: 0.5, shadowRadius: 6, elevation: 6 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { zIndex: 1 };
const merged1 = Object.assign(rect);
obj5 = { zIndex: 2, width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, alignItems: "center", justifyContent: "center" };
const merged2 = Object.assign(rect);
let closure_8 = createStyles(obj);
let obj6 = { OWNED: "owned", LOCKED: "locked" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistItemCardBase.tsx");

export default function WishlistItemCardBase(recipientName) {
  let CheckmarkLargeBoldIcon;
  let LockIcon;
  let accessibilityHidden;
  let accessibilityLabel;
  let obj10;
  let obj5;
  let obj8;
  let onPress;
  let overlay;
  let primaryColor;
  let renderPreview;
  let secondaryColor;
  let source;
  let str;
  let str3;
  let stringResult;
  let theme;
  let tmp23;
  ({ onPress, size } = recipientName);
  ({ accessibilityLabel, renderPreview, source } = recipientName);
  if (size === undefined) {
    size = 170;
  }
  ({ overlay, accessibilityHidden } = recipientName);
  recipientName = recipientName.recipientName;
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
  const WISHLIST = tmp2(8238).WishlistItemSource.WISHLIST;
  const intl = tmp2(1115).intl;
  const formatToPlainStringResult = intl.formatToPlainString(intl4.t.p3RmJF, { username: recipientName });
  const items1 = [accessibilityLabel, , ];
  if (obj6.OWNED === overlay) {
    const intl3 = tmp2(1115).intl;
    stringResult = intl3.string(tmp2(1115).t["6cfuDj"]);
  } else {
    stringResult = null;
    if (obj6.LOCKED === overlay) {
      const intl2 = tmp2(1115).intl;
      stringResult = intl2.string(tmp2(1115).t.wu4gyV);
    }
  }
  let tmp15Result4 = source === WISHLIST;
  items1[1] = stringResult;
  let tmp11 = null;
  if (tmp15Result4) {
    tmp11 = formatToPlainStringResult;
  }
  items1[2] = tmp11;
  const found = items1.filter(tmp2(1370).isNotNullish);
  const joined = found.join(", ");
  const items2 = [tmp.previewWrap, ];
  let dimmedPreview = overlay === tmp8.OWNED;
  const tmp13 = metroImportDefault;
  const tmp14 = metroRequire;
  if (dimmedPreview) {
    dimmedPreview = tmp.dimmedPreview;
  }
  obj6 = { style: items2, "aria-hidden": true, children: renderPreview() };
  items2[1] = dimmedPreview;
  const items3 = [hasOwnProperty(React3, obj6), , , ];
  let tmp15Result = overlay === tmp8.OWNED;
  if (tmp15Result) {
    const obj7 = { style: tmp.overlayContainer, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(CheckmarkLargeBoldIcon, obj8) };
    obj8 = { color: nativeDefault.colors.WHITE, size: "custom", style: { width: 40, height: 40 } };
    CheckmarkLargeBoldIcon = tmp2(8258).CheckmarkLargeBoldIcon;
    tmp15Result = tmp15(tmp16, obj7);
  }
  items3[1] = tmp15Result;
  let tmp15Result3 = overlay === tmp8.LOCKED;
  if (tmp15Result3) {
    const obj9 = { style: tmp.lockBadge, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(LockIcon, obj10) };
    obj10 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, size: "custom", style: { width: 18, height: 18 } };
    LockIcon = tmp2(5409).LockIcon;
    tmp15Result3 = tmp15(tmp16, obj9);
  }
  items3[2] = tmp15Result3;
  if (tmp15Result4) {
    const obj11 = { toastText: formatToPlainStringResult };
    tmp15Result4 = tmp15(SourceIcon, obj11);
  }
  items3[3] = tmp15Result4;
  const tmp13Result = tmp13(tmp14, { children: items3 });
  if (null == onPress) {
    const obj12 = { style: items, accessible: "" !== joined || undefined, accessibilityLabel: tmp23, accessibilityElementsHidden: accessibilityHidden, importantForAccessibility: str3, children: tmp13Result };
    tmp23 = undefined;
    if ("" !== joined) {
      tmp23 = joined;
    }
    str3 = "auto";
    if (accessibilityHidden) {
      str3 = "no-hide-descendants";
    }
    return hasOwnProperty(React3, obj12);
  } else {
    const obj13 = { accessibilityRole: "button", accessibilityLabel: joined, style: items, onPress, accessibilityElementsHidden: accessibilityHidden, importantForAccessibility: str, children: tmp13Result };
    str = "auto";
    const tmp21 = _false;
    if (accessibilityHidden) {
      str = "no-hide-descendants";
    }
    return hasOwnProperty(tmp21, obj13);
  }
};
export const DEFAULT_ITEM_SIZE = 170;
export const CARD_TOP_RIGHT_OVERLAY_POSITION = rect;
export const WishlistItemCardOverlay = obj6;
