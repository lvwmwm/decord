// Module ID: 8235
// Function ID: 8236
// Name: WishlistItemCardBase
// Dependencies: [19, 17, 21, 576, 4836, 4528, 8236, 4540, 7684, 4531, 8238, 1115, 1370, 8258, 5409, 2]
// Exports: default

// Module 8235 (WishlistItemCardBase)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import useToken from "useToken" /* 4531 */;
import native from "native" /* 4540 */;
import useUserProfileColors from "useUserProfileColors" /* 7684 */;
import noop from "module_19" /* 19 */;

require = fn;
function SourceIcon(toastText) {
  toastText = toastText.toastText;
  const obj = {
    style: closure_8().sourceIcon,
    onPress() {
      ToastActionCreatorsDefault.open({ key: "WISHLIST_SOURCE_ICON", content: toastText });
    },
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: closure_5(toastText(8236).HeartIcon, { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, size: "md" })
  };
  return closure_5(closure_3, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
const createStyles = fn(4836);
let obj = { card: { borderWidth: 1, borderRadius: nativeDefault.radii.lg, borderColor: nativeDefault.colors.BORDER_MUTED, justifyContent: "center", alignItems: "center", overflow: "hidden" }, overlayContainer: null, previewWrap: null, dimmedPreview: null, sourceIcon: null, lockBadge: null };
const obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.justifyContent = "center";
obj4.alignItems = "center";
obj4.zIndex = 2;
obj4.shadowOpacity = 0.5;
obj4.shadowRadius = 6;
obj4.elevation = 6;
obj.overlayContainer = obj4;
obj.previewWrap = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" };
obj.dimmedPreview = { opacity: 0.5 };
let obj5 = {};
const merged1 = Object.assign(rect);
obj5.zIndex = 1;
obj.sourceIcon = obj5;
let obj6 = {};
const merged2 = Object.assign(rect);
obj6.zIndex = 2;
obj6.width = 32;
obj6.height = 32;
obj6.borderRadius = nativeDefault.radii.round;
obj6.backgroundColor = nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
obj6.alignItems = "center";
obj6.justifyContent = "center";
obj.lockBadge = obj6;
let closure_8 = createStyles.createStyles(obj);
let obj7 = { OWNED: "owned", LOCKED: "locked" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/WishlistItemCardBase.tsx");

export default function WishlistItemCardBase(username) {
  ({ onPress, size } = username);
  ({ accessibilityLabel, renderPreview, source } = username);
  if (size === undefined) {
    size = 170;
  }
  ({ overlay, accessibilityHidden } = username);
  const tmp = closure_8();
  const themeContext = native.useThemeContext();
  ({ primaryColor, theme, secondaryColor } = themeContext);
  const obj2 = useUserProfileColors;
  let containerBackground = useToken.useToken(nativeDefault.colors.BG_SURFACE_RAISED);
  if (null != primaryColor) {
    containerBackground = obj2.useUserProfileColors({ theme, primaryColor, secondaryColor }).containerBackground;
  }
  const items = [tmp.card, { backgroundColor: containerBackground }, ];
  if (typeof size === "object") {
    const size1 = { width: null, height: null };
    ({ width: obj4.width, height: obj4.height } = size);
    let obj5 = size1;
  } else {
    obj5 = { width: size, aspectRatio: 1 };
  }
  items[2] = obj5;
  const intl = tmp2(1115).intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t.p3RmJF, { username: username.recipientName });
  const items1 = [accessibilityLabel, , ];
  if (obj7.OWNED === overlay) {
    const intl3 = tmp2(1115).intl;
    let stringResult = intl3.string(tmp2(1115).t["6cfuDj"]);
  } else {
    stringResult = null;
    if (tmp7.LOCKED === overlay) {
      const intl2 = tmp2(1115).intl;
      stringResult = intl2.string(tmp2(1115).t.wu4gyV);
    }
  }
  let tmp14Result4 = source === tmp2(8238).WishlistItemSource.WISHLIST;
  items1[1] = stringResult;
  let tmp10 = null;
  if (tmp14Result4) {
    tmp10 = formatToPlainStringResult;
  }
  items1[2] = tmp10;
  const found = items1.filter(tmp2(1370).isNotNullish);
  const joined = found.join(", ");
  const items2 = [tmp.previewWrap, ];
  let dimmedPreview = overlay === tmp7.OWNED;
  if (dimmedPreview) {
    dimmedPreview = tmp.dimmedPreview;
  }
  const tmp12 = React5;
  const tmp13 = timestampProducer;
  items2[1] = dimmedPreview;
  const items3 = [hasOwnProperty(React4, { style: items2, "aria-hidden": true, children: renderPreview() }), , , ];
  let tmp14Result = overlay === tmp7.OWNED;
  if (tmp14Result) {
    obj7 = { style: tmp.overlayContainer, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const obj8 = { color: tmp5(576).colors.WHITE, size: "custom", style: { width: 40, height: 40 } };
    obj7.children = tmp14(tmp2(8258).CheckmarkLargeBoldIcon, obj8);
    tmp14Result = tmp14(tmp15, obj7);
  }
  items3[1] = tmp14Result;
  let tmp14Result3 = overlay === tmp7.LOCKED;
  if (tmp14Result3) {
    const obj9 = { style: tmp.lockBadge, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const obj10 = { color: tmp5(576).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, size: "custom", style: { width: 18, height: 18 } };
    obj9.children = tmp14(tmp2(5409).LockIcon, obj10);
    tmp14Result3 = tmp14(tmp15, obj9);
  }
  items3[2] = tmp14Result3;
  if (tmp14Result4) {
    const obj11 = { toastText: formatToPlainStringResult };
    tmp14Result4 = tmp14(SourceIcon, obj11);
  }
  items3[3] = tmp14Result4;
  const tmp12Result = tmp12(tmp13, { children: items3 });
  if (null == onPress) {
    const obj12 = { style: items, accessible: "" !== joined || undefined, accessibilityLabel: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    let tmp22;
    if ("" !== joined) {
      tmp22 = joined;
    }
    obj12.accessibilityLabel = tmp22;
    obj12.accessibilityElementsHidden = accessibilityHidden;
    let str3 = "auto";
    if (accessibilityHidden) {
      str3 = "no-hide-descendants";
    }
    obj12.importantForAccessibility = str3;
    obj12.children = tmp12Result;
    return tmp14(tmp15, obj12);
  } else {
    const obj13 = { accessibilityRole: "button", accessibilityLabel: joined, style: items, onPress, accessibilityElementsHidden: accessibilityHidden, importantForAccessibility: null, children: null };
    let str = "auto";
    if (accessibilityHidden) {
      str = "no-hide-descendants";
    }
    obj13.importantForAccessibility = str;
    obj13.children = tmp12Result;
    return tmp14(React3, obj13);
  }
  const obj6 = { style: items2, "aria-hidden": true, children: renderPreview() };
};
export const DEFAULT_ITEM_SIZE = 170;
export const CARD_TOP_RIGHT_OVERLAY_POSITION = rect;
export const WishlistItemCardOverlay = obj7;
