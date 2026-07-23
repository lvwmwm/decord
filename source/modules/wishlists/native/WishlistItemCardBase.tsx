// Module ID: 8673
// Function ID: 68623
// Name: SourceIcon
// Dependencies: [31, 27, 33, 4130, 689, 3831, 8674, 3842, 8240, 3834, 8676, 1212, 1327, 8694, 2]
// Exports: default

// Module 8673 (SourceIcon)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function SourceIcon(toastText) {
  toastText = toastText.toastText;
  let obj = {
    style: _createForOfIteratorHelperLoose().sourceIcon,
    onPress() {
      let obj = outer1_1(outer1_2[5]);
      obj = { key: "WISHLIST_SOURCE_ICON", content: toastText };
      obj.open(obj);
    },
    accessible: false,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants"
  };
  obj = { color: importDefault(689).colors.INTERACTIVE_ICON_DEFAULT, size: "md" };
  obj.children = callback(toastText(8674).HeartIcon, obj);
  return callback(closure_3, obj);
}
({ Pressable: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED, justifyContent: "center", alignItems: "center", overflow: "hidden" };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
let obj1 = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj1["justifyContent"] = "center";
obj1["alignItems"] = "center";
obj1["zIndex"] = 2;
obj1["shadowOpacity"] = 0.5;
obj1["shadowRadius"] = 6;
obj1["elevation"] = 6;
_createForOfIteratorHelperLoose.ownedOverlay = obj1;
_createForOfIteratorHelperLoose.previewWrap = { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.ownedCard = { opacity: 0.5 };
_createForOfIteratorHelperLoose.sourceIcon = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_8, right: require("_createForOfIteratorHelperLoose").space.PX_8, zIndex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_8, right: require("_createForOfIteratorHelperLoose").space.PX_8, zIndex: 1 };
const result = require("jsxProd").fileFinishedImporting("modules/wishlists/native/WishlistItemCardBase.tsx");

export default function WishlistItemCardBase(username) {
  let accessibilityLabel;
  let onPress;
  let renderPreview;
  let secondaryColor;
  let size;
  let source;
  let theme;
  ({ onPress, size } = username);
  ({ accessibilityLabel, renderPreview, source } = username);
  if (size === undefined) {
    size = 170;
  }
  let flag = username.isOwned;
  if (flag === undefined) {
    flag = false;
  }
  const accessibilityHidden = username.accessibilityHidden;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3842) /* ManaContext */;
  const themeContext = obj.useThemeContext();
  const primaryColor = themeContext.primaryColor;
  ({ theme, secondaryColor } = themeContext);
  let obj1 = require(8240) /* useUserProfileColors */;
  let obj2 = require(3834) /* map */;
  let containerBackground = obj2.useToken(importDefault(689).colors.BG_SURFACE_RAISED);
  if (null != primaryColor) {
    containerBackground = obj1.useUserProfileColors({ theme, primaryColor, secondaryColor }).containerBackground;
  }
  const items = [tmp.card, , ];
  obj = { backgroundColor: containerBackground };
  items[1] = obj;
  if ("object" === typeof size) {
    obj = {};
    ({ width: obj6.width, height: obj6.height } = size);
    obj1 = obj;
  } else {
    obj1 = { width: size, aspectRatio: 1 };
  }
  items[2] = obj1;
  let tmp3 = source === require(8676) /* _createForOfIteratorHelperLoose */.WishlistItemSource.WISHLIST;
  const intl = require(1212) /* getSystemLocale */.intl;
  const formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.p3RmJF, { username: username.recipientName });
  const items1 = [accessibilityLabel, , ];
  let stringResult = null;
  if (flag) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    stringResult = intl2.string(require(1212) /* getSystemLocale */.t["6cfuDj"]);
  }
  items1[1] = stringResult;
  let tmp8 = null;
  if (tmp3) {
    tmp8 = formatToPlainStringResult;
  }
  items1[2] = tmp8;
  const found = items1.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
  obj2 = { style: tmp.ownedOverlay, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  const joined = found.join(", ");
  const obj3 = { color: importDefault(689).colors.WHITE, size: "custom", style: { width: 40, height: 40 } };
  obj2.children = callback(require(8694) /* CheckmarkLargeBoldIcon */.CheckmarkLargeBoldIcon, obj3);
  const obj4 = {};
  const obj5 = {};
  const items2 = [tmp.previewWrap, ];
  let ownedCard = flag;
  if (flag) {
    ownedCard = tmp.ownedCard;
  }
  items2[1] = ownedCard;
  obj5.style = items2;
  obj5["aria-hidden"] = true;
  obj5.children = renderPreview();
  const items3 = [callback(closure_4, obj5), , ];
  if (flag) {
    flag = tmp11;
  }
  items3[1] = flag;
  if (tmp3) {
    const obj6 = { toastText: formatToPlainStringResult };
    tmp3 = callback(SourceIcon, obj6);
  }
  items3[2] = tmp3;
  obj4.children = items3;
  const tmp12Result = closure_7(closure_6, obj4);
  if (null == onPress) {
    const obj7 = { style: items, accessibilityElementsHidden: accessibilityHidden };
    let str3 = "auto";
    if (accessibilityHidden) {
      str3 = "no-hide-descendants";
    }
    obj7.importantForAccessibility = str3;
    obj7.children = tmp12Result;
    let tmp18Result = callback(closure_4, obj7);
    const tmp21 = callback;
    const tmp22 = closure_4;
  } else {
    const obj8 = { accessibilityRole: "button", accessibilityLabel: joined, style: items, onPress, accessibilityElementsHidden: accessibilityHidden };
    let str2 = "auto";
    if (accessibilityHidden) {
      str2 = "no-hide-descendants";
    }
    obj8.importantForAccessibility = str2;
    obj8.children = tmp12Result;
    tmp18Result = callback(closure_3, obj8);
    const tmp18 = callback;
    const tmp19 = closure_3;
  }
  return tmp18Result;
};
export const DEFAULT_ITEM_SIZE = 170;
