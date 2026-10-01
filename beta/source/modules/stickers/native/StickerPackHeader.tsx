// Module ID: 9858
// Function ID: 9859
// Name: StickerPackHeader
// Dependencies: [19, 17, 9736, 21, 4836, 576, 4832, 5198, 1177, 9859, 9860, 1115, 9861, 5435, 2]

// Module 9858 (StickerPackHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import StickersUtils from "StickersUtils" /* 5198 */;
import AssetRegistryDefault from "AssetRegistry" /* 9859 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9860 */;
import react from "react" /* 19 */;
import StickerPickerConstants from "StickerPickerConstants" /* 9736 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let PADDING_HORIZONTAL;
let PADDING_VERTICAL;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
let tmp10;
const StickerPackBannerDefault = tmp10(9861);
const View = react_native.View;
({ PADDING_VERTICAL, PADDING_HORIZONTAL } = StickerPickerConstants);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let result = 2 * PADDING_VERTICAL;
let createStyles = createStyles_mod;
let obj = { section: obj2, label: { flex: -1 }, header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, bannerContainer: { aspectRatio: 3.824074074074074, marginVertical: -8, width: "100%" }, banner: { height: "100%" }, headline: { height: 20, flex: 1, flexDirection: "row", alignItems: "center" }, iconContainer: size, icon: obj3, animatedIcon: { position: "relative", left: 1 }, premiumIcon: { position: "relative", left: -1 } };
obj2 = { paddingTop: PADDING_VERTICAL, paddingHorizontal: PADDING_HORIZONTAL, height: 36 + result, justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
size = { marginLeft: 8, height: 16, width: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, alignItems: "center", justifyContent: "center" };
obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_7 = createStyles(obj);
const memoResult = react.memo((withDescription) => {
  let Icon;
  let Icon2;
  let intl;
  let items;
  let items3;
  let items4;
  let obj12;
  let obj2;
  let obj6;
  let obj8;
  let onPress;
  let stickerPack;
  let style;
  let tmp4Result;
  let withBanner;
  ({ stickerPack, style, onPress, withBanner } = withDescription);
  if (withBanner === undefined) {
    withBanner = false;
  }
  let flag = withDescription.withDescription;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  const obj = { style: tmp.header, children: hasOwnProperty(View, obj2) };
  obj2 = { style: tmp.headline, children: items };
  items = [, , ];
  const obj3 = { style: tmp.label, lineClamp: 1, variant: "text-md/bold", color: "mobile-text-heading-primary", children: stickerPack.name };
  items[0] = React3(Text_Text.Text, obj3);
  const obj4 = StickersUtils;
  let result = obj4.isStickerPackAnimated(stickerPack);
  if (result) {
    const obj5 = { style: tmp.iconContainer, children: React3(Icon, obj6) };
    obj6 = { source: AssetRegistryDefault, style: tmp.animatedIcon, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color };
    Icon = tmp6(1177).Icon;
    result = tmp4(tmp5, obj5);
  }
  items[1] = result;
  const obj7 = { style: tmp.iconContainer, children: React3(Icon2, obj8) };
  obj8 = { source: AssetRegistryDefault2, style: tmp.premiumIcon, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color };
  Icon2 = tmp6(1177).Icon;
  items[2] = React3(View, obj7);
  const items1 = [React3(View, obj), , ];
  if (flag) {
    flag = null != stickerPack.description;
  }
  if (flag) {
    const obj9 = { variant: "text-sm/medium", children: stickerPack.description };
    flag = tmp4(tmp6(4832).Text, obj9);
  }
  const obj10 = { children: items1 };
  items1[1] = flag;
  const obj11 = { lineClamp: 1, variant: "text-xs/medium", color: "text-default", children: intl.format(intl2.t["0S3JpO"], obj12) };
  const Text = tmp6(4832).Text;
  intl = tmp6(1115).intl;
  obj12 = { numStickers: stickerPack.stickers.length };
  items1[2] = React3(Text, obj11);
  const tmp2Result = hasOwnProperty(metroRequire, obj10);
  if (withBanner) {
    const obj14 = { stickerPack, containerStyle: null, style: null };
    ({ bannerContainer: obj13.containerStyle, banner: obj13.style } = tmp);
    withBanner = tmp4(StickerPackBannerDefault, obj14);
  }
  const children = [withBanner, ];
  if (null != onPress) {
    const obj15 = { style: items3, onPress, accessibilityRole: "header", children: tmp2Result };
    items3 = [tmp.section, style];
    tmp4Result = tmp4(tmp6(5435).PressableOpacity, obj15);
  } else {
    const obj28 = { style: items4, children: tmp2Result };
    items4 = [tmp.section, style];
    tmp4Result = tmp4(tmp5, obj28);
  }
  children[1] = tmp4Result;
  return hasOwnProperty(metroRequire, { children });
});
size = size_mod;
const result1 = size.fileFinishedImporting("modules/stickers/native/StickerPackHeader.tsx");

export default memoResult;
