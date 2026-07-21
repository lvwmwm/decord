// Module ID: 8665
// Function ID: 68560
// Name: SourceIcon
// Dependencies: []
// Exports: default

// Module 8665 (SourceIcon)
function SourceIcon(toastText) {
  const arg1 = toastText.toastText;
  let obj = {
    needSubscriptionToAccess: "hidden",
    isSubscriptionGated: "flex-end",
    717824595: "row",
    -446570740: "center",
    1660110929: 8,
    style: callback2().sourceIcon,
    onPress() {
      let obj = callback(closure_2[5]);
      obj = { key: "WISHLIST_SOURCE_ICON", content: toastText };
      obj.open(obj);
    }
  };
  obj = { color: importDefault(dependencyMap[4]).colors.INTERACTIVE_ICON_DEFAULT, size: "md" };
  obj.children = callback(arg1(dependencyMap[6]).HeartIcon, obj);
  return callback(closure_3, obj);
}
importAll(dependencyMap[0]);
const tmp3 = arg1(dependencyMap[1]);
({ Pressable: closure_3, View: closure_4 } = tmp3);
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[4]).radii.lg, borderColor: importDefault(dependencyMap[4]).colors.BORDER_MUTED };
obj.card = obj;
const obj1 = {};
const merged = Object.assign(tmp3.StyleSheet.absoluteFillObject);
obj1["justifyContent"] = "center";
obj1["alignItems"] = "center";
obj1["zIndex"] = 2;
obj1["shadowOpacity"] = 0.5;
obj1["shadowRadius"] = 6;
obj1["elevation"] = 6;
obj.ownedOverlay = obj1;
obj.previewWrap = {};
obj.ownedCard = { opacity: 0.5 };
const tmp4 = arg1(dependencyMap[2]);
obj.sourceIcon = { position: "absolute", top: importDefault(dependencyMap[4]).space.PX_8, right: importDefault(dependencyMap[4]).space.PX_8, zIndex: 1 };
let closure_8 = obj.createStyles(obj);
const obj2 = { position: "absolute", top: importDefault(dependencyMap[4]).space.PX_8, right: importDefault(dependencyMap[4]).space.PX_8, zIndex: 1 };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/wishlists/native/WishlistItemCardBase.tsx");

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
  const tmp = callback2();
  let obj = arg1(dependencyMap[7]);
  const themeContext = obj.useThemeContext();
  const primaryColor = themeContext.primaryColor;
  ({ theme, secondaryColor } = themeContext);
  let obj1 = arg1(dependencyMap[8]);
  let obj2 = arg1(dependencyMap[9]);
  let containerBackground = obj2.useToken(importDefault(dependencyMap[4]).colors.BG_SURFACE_RAISED);
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
  let tmp3 = source === arg1(dependencyMap[10]).WishlistItemSource.WISHLIST;
  const intl = arg1(dependencyMap[11]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[11]).t.p3RmJF, { username: username.recipientName });
  const items1 = [accessibilityLabel, , ];
  let stringResult = null;
  if (flag) {
    const intl2 = arg1(dependencyMap[11]).intl;
    stringResult = intl2.string(arg1(dependencyMap[11]).t.6cfuDj);
  }
  items1[1] = stringResult;
  let tmp8 = null;
  if (tmp3) {
    tmp8 = formatToPlainStringResult;
  }
  items1[2] = tmp8;
  const found = items1.filter(arg1(dependencyMap[12]).isNotNullish);
  obj2 = { "Bool(true)": "/assets/design/components/Icon/native/redesign/generated/images", "Bool(true)": 24, "Bool(true)": 24, "Bool(true)": null, style: tmp.ownedOverlay };
  const joined = found.join(", ");
  const obj3 = { color: importDefault(dependencyMap[4]).colors.WHITE, size: "custom", style: {} };
  obj2.children = callback(arg1(dependencyMap[13]).CheckmarkLargeBoldIcon, obj3);
  const obj4 = {};
  const obj5 = {};
  const items2 = [tmp.previewWrap, ];
  let ownedCard = flag;
  if (flag) {
    ownedCard = tmp.ownedCard;
  }
  items2[1] = ownedCard;
  obj5.style = items2;
  obj5.aria-hidden = true;
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
