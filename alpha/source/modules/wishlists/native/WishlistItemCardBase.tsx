// Module ID: 9473
// Function ID: 9474
// Name: WishlistItemCardBase
// Dependencies: [19, 17, 21, 575, 5310, 6009, 9468, 5371, 8612, 5896, 9474, 1113, 9495, 1255, 9496, 9497, 8103, 9499, 2]
// Exports: default

// Module 9473 (WishlistItemCardBase)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import native from "native" /* 5371 */;
import useToken from "useToken" /* 5896 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6009 */;
import useUserProfileColors from "useUserProfileColors" /* 8612 */;
import WishlistShopUnpublishUtils from "WishlistShopUnpublishUtils" /* 9495 */;
import IndicatorDot from "IndicatorDot" /* 9499 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5310 */;
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
let result = size.fileFinishedImporting("modules/wishlists/native/WishlistItemCardBase.tsx");

export default function WishlistItemCardBase(shopUnpublishCountdown) {
  let CheckmarkLargeBoldIcon;
  let LockIcon;
  let accessibilityHidden;
  let accessibilityLabel;
  let isNew;
  let obj11;
  let obj13;
  let obj6;
  let onPress;
  let overlay;
  let primaryColor;
  let recipientName;
  let renderPreview;
  let secondaryColor;
  let source;
  let str2;
  let str4;
  let stringResult;
  let theme;
  let tmp27;
  ({ onPress, size } = shopUnpublishCountdown);
  ({ accessibilityLabel, renderPreview, source } = shopUnpublishCountdown);
  if (size === undefined) {
    size = 170;
  }
  ({ overlay, accessibilityHidden, isNew, recipientName } = shopUnpublishCountdown);
  if (isNew === undefined) {
    isNew = false;
  }
  shopUnpublishCountdown = shopUnpublishCountdown.shopUnpublishCountdown;
  const backgroundColor = shopUnpublishCountdown.backgroundColor;
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
  const WISHLIST = tmp2(9474).WishlistItemSource.WISHLIST;
  const intl = tmp2(1113).intl;
  const formatToPlainStringResult = intl.formatToPlainString(intl5.t.p3RmJF, { username: recipientName });
  const items1 = [accessibilityLabel, , , ];
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
  let tmp18Result6 = source === WISHLIST;
  items1[1] = stringResult;
  let tmp12 = null;
  if (tmp18Result6) {
    tmp12 = formatToPlainStringResult;
  }
  items1[2] = tmp12;
  let result = null;
  if (null != shopUnpublishCountdown) {
    const tmp2Result = WishlistShopUnpublishUtils;
    result = tmp2Result.formatWishlistShopUnpublishLabel(shopUnpublishCountdown, "expanded");
  }
  items1[3] = result;
  const found = items1.filter(tmp2(1255).isNotNullish);
  const joined = found.join(", ");
  let formatToPlainStringResult1 = joined;
  if (isNew) {
    const intl4 = tmp2(1113).intl;
    obj7 = { label: joined };
    formatToPlainStringResult1 = intl4.formatToPlainString(tmp2(1113).t.s9RZ1r, obj7);
  }
  const items2 = [tmp.previewWrap, ];
  let dimmedPreview = overlay === tmp9.OWNED;
  const tmp16 = metroImportDefault;
  const tmp17 = metroRequire;
  if (dimmedPreview) {
    dimmedPreview = tmp.dimmedPreview;
  }
  items2[1] = dimmedPreview;
  const items3 = [, , , , , ];
  const obj8 = { style: items2, "aria-hidden": true, children: renderPreview() };
  items3[0] = hasOwnProperty(React3, obj8);
  let tmp18Result = null != shopUnpublishCountdown;
  if (tmp18Result) {
    const obj9 = { countdown: shopUnpublishCountdown };
    tmp18Result = tmp18(tmp5(9496), obj9);
  }
  items3[1] = tmp18Result;
  let tmp18Result4 = overlay === tmp9.OWNED;
  if (tmp18Result4) {
    const obj10 = { style: tmp.overlayContainer, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(CheckmarkLargeBoldIcon, obj11) };
    obj11 = { color: nativeDefault.colors.WHITE, size: "custom", style: { width: 40, height: 40 } };
    CheckmarkLargeBoldIcon = tmp2(9497).CheckmarkLargeBoldIcon;
    tmp18Result4 = tmp18(tmp19, obj10);
  }
  items3[2] = tmp18Result4;
  let tmp18Result5 = overlay === tmp9.LOCKED;
  if (tmp18Result5) {
    const obj12 = { style: tmp.lockBadge, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(LockIcon, obj13) };
    obj13 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, size: "custom", style: { width: 18, height: 18 } };
    LockIcon = tmp2(8103).LockIcon;
    tmp18Result5 = tmp18(tmp19, obj12);
  }
  items3[3] = tmp18Result5;
  if (tmp18Result6) {
    const obj14 = { toastText: formatToPlainStringResult };
    tmp18Result6 = tmp18(SourceIcon, obj14);
  }
  items3[4] = tmp18Result6;
  if (isNew) {
    const obj15 = { style: tmp.newContentDot, pointerEvents: "none", children: hasOwnProperty(IndicatorDot.IndicatorDot, {}) };
    isNew = tmp18(tmp19, obj15);
  }
  items3[5] = isNew;
  const tmp16Result = tmp16(tmp17, { children: items3 });
  if (null == onPress) {
    const obj16 = { style: items, accessible: "" !== formatToPlainStringResult1 || undefined, accessibilityLabel: tmp27, accessibilityElementsHidden: accessibilityHidden, importantForAccessibility: str4, children: tmp16Result };
    tmp27 = undefined;
    if ("" !== formatToPlainStringResult1) {
      tmp27 = formatToPlainStringResult1;
    }
    str4 = "auto";
    if (accessibilityHidden) {
      str4 = "no-hide-descendants";
    }
    return hasOwnProperty(React3, obj16);
  } else {
    const obj17 = { accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult1, style: items, onPress, accessibilityElementsHidden: accessibilityHidden, importantForAccessibility: str2, children: tmp16Result };
    str2 = "auto";
    const tmp25 = _false;
    if (accessibilityHidden) {
      str2 = "no-hide-descendants";
    }
    return hasOwnProperty(tmp25, obj17);
  }
};
export const DEFAULT_ITEM_SIZE = 170;
export const CARD_TOP_RIGHT_OVERLAY_POSITION = rect;
export const WishlistItemCardOverlay = obj7;
