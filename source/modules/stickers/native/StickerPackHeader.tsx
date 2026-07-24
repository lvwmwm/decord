// Module ID: 9645
// Function ID: 75087
// Dependencies: [31, 27, 9604, 33, 4130, 689, 4126, 4466, 1273, 9646, 9647, 1212, 9648, 4660, 2]

// Module 9645
import { View } from "get ActivityIndicator";
import PADDING_HORIZONTAL from "PADDING_HORIZONTAL";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
const PADDING_VERTICAL = PADDING_HORIZONTAL.PADDING_VERTICAL;
({ jsx: closure_4, jsxs: closure_5, Fragment: closure_6 } = jsxProd);
let result = 2 * PADDING_VERTICAL;
let obj = {};
obj = { paddingTop: PADDING_VERTICAL, paddingHorizontal: PADDING_HORIZONTAL.PADDING_HORIZONTAL, height: 36 + result, justifyContent: "center", overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj.section = obj;
obj.label = { flex: -1 };
obj.header = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.bannerContainer = { aspectRatio: 3.824074074074074, marginVertical: -8, width: "100%" };
obj.banner = { height: "100%" };
obj.headline = { height: 20, flex: 1, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose = { marginLeft: 8, height: 16, width: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, alignItems: "center", justifyContent: "center" };
obj.iconContainer = _createForOfIteratorHelperLoose;
obj.icon = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
obj.animatedIcon = { position: "relative", left: 1 };
obj.premiumIcon = { position: "relative", left: -1 };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
const memoResult = importAllResult.memo((withDescription) => {
  let onPress;
  let stickerPack;
  let style;
  let withBanner;
  ({ stickerPack, style, onPress, withBanner } = withDescription);
  if (withBanner === undefined) {
    withBanner = false;
  }
  let flag = withDescription.withDescription;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback2();
  let obj = {};
  obj = { style: tmp.header };
  obj = { style: tmp.headline };
  const obj1 = { style: tmp.label, lineClamp: 1, variant: "text-md/bold", color: "mobile-text-heading-primary", children: stickerPack.name };
  const items = [callback(require(4126) /* Text */.Text, obj1), , ];
  let obj4 = require(4466) /* getStickerPackPreviewSticker */;
  let result = obj4.isStickerPackAnimated(stickerPack);
  if (result) {
    const obj2 = { style: tmp.iconContainer };
    const obj3 = { source: importDefault(9646), style: tmp.animatedIcon, size: require(1273) /* Button */.Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color };
    obj2.children = callback(require(1273) /* Button */.Icon, obj3);
    result = callback(View, obj2);
  }
  items[1] = result;
  obj4 = { style: tmp.iconContainer };
  const obj5 = { source: importDefault(9647), style: tmp.premiumIcon, size: require(1273) /* Button */.Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color };
  obj4.children = callback(require(1273) /* Button */.Icon, obj5);
  items[2] = callback(View, obj4);
  obj.children = items;
  obj.children = closure_5(View, obj);
  const items1 = [callback(View, obj), , ];
  if (flag) {
    flag = null != stickerPack.description;
  }
  if (flag) {
    const obj6 = { variant: "text-sm/medium", children: stickerPack.description };
    flag = callback(require(4126) /* Text */.Text, obj6);
  }
  items1[1] = flag;
  const obj7 = { lineClamp: 1, variant: "text-xs/medium", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj7.children = intl.format(require(1212) /* getSystemLocale */.t["0S3JpO"], { numStickers: stickerPack.stickers.length });
  items1[2] = callback(require(4126) /* Text */.Text, obj7);
  obj.children = items1;
  const tmp2Result = closure_5(closure_6, obj);
  const obj9 = {};
  if (withBanner) {
    const obj10 = { stickerPack };
    ({ bannerContainer: obj14.containerStyle, banner: obj14.style } = tmp);
    withBanner = callback(importDefault(9648), obj10);
  }
  const items2 = [withBanner, ];
  if (null != onPress) {
    const obj11 = {};
    const items3 = [tmp.section, style];
    obj11.style = items3;
    obj11.onPress = onPress;
    obj11.accessibilityRole = "header";
    obj11.children = tmp2Result;
    let tmp24 = callback(require(4660) /* PressableBase */.PressableOpacity, obj11);
  } else {
    const obj12 = {};
    const items4 = [tmp.section, style];
    obj12.style = items4;
    obj12.children = tmp2Result;
    tmp24 = callback(View, obj12);
  }
  items2[1] = tmp24;
  obj9.children = items2;
  return closure_5(closure_6, obj9);
});
const result1 = require("PADDING_HORIZONTAL").fileFinishedImporting("modules/stickers/native/StickerPackHeader.tsx");

export default memoResult;
