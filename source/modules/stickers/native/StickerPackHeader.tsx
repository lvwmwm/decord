// Module ID: 9602
// Function ID: 74835
// Dependencies: []

// Module 9602
const View = arg1(dependencyMap[1]).View;
const tmp2 = arg1(dependencyMap[2]);
const PADDING_VERTICAL = tmp2.PADDING_VERTICAL;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5, Fragment: closure_6 } = arg1(dependencyMap[3]));
const result = 2 * PADDING_VERTICAL;
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { paddingTop: PADDING_VERTICAL, paddingHorizontal: tmp2.PADDING_HORIZONTAL, height: 36 + result, justifyContent: "center", overflow: "hidden", backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.section = obj;
obj.label = { flex: -1 };
obj.header = { 9223372036854775807: "Array", 9223372036854775807: "isArray", 0: "accessibilityRole" };
obj.bannerContainer = {};
obj.banner = { height: "100%" };
obj.headline = { "Bool(true)": "6d493c91631ba30b8d8c55fe48d43780", "Bool(true)": "CheckmarkLargeBoldIcon", "Bool(true)": "png", "Bool(true)": "absolute" };
obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.sm, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.iconContainer = obj1;
const tmp3 = arg1(dependencyMap[3]);
obj.icon = { color: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.animatedIcon = {};
obj.premiumIcon = {};
let closure_7 = obj1.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT };
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
  const items = [callback(arg1(dependencyMap[6]).Text, { style: tmp.label, children: stickerPack.name }), , ];
  let obj4 = arg1(dependencyMap[7]);
  let result = obj4.isStickerPackAnimated(stickerPack);
  if (result) {
    const obj2 = { style: tmp.iconContainer };
    const obj3 = { source: importDefault(dependencyMap[9]), style: tmp.animatedIcon, size: arg1(dependencyMap[8]).Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color };
    obj2.children = callback(arg1(dependencyMap[8]).Icon, obj3);
    result = callback(View, obj2);
  }
  items[1] = result;
  obj4 = { style: tmp.iconContainer };
  const obj5 = { source: importDefault(dependencyMap[10]), style: tmp.premiumIcon, size: arg1(dependencyMap[8]).Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color };
  obj4.children = callback(arg1(dependencyMap[8]).Icon, obj5);
  items[2] = callback(View, obj4);
  obj.children = items;
  obj.children = closure_5(View, obj);
  const items1 = [callback(View, obj), , ];
  if (flag) {
    flag = null != stickerPack.description;
  }
  if (flag) {
    const obj6 = { variant: "text-sm/medium", children: stickerPack.description };
    flag = callback(arg1(dependencyMap[6]).Text, obj6);
  }
  items1[1] = flag;
  const obj7 = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj7.children = intl.format(arg1(dependencyMap[11]).t.0S3JpO, { numStickers: stickerPack.stickers.length });
  items1[2] = callback(arg1(dependencyMap[6]).Text, obj7);
  obj.children = items1;
  const tmp2Result = closure_5(closure_6, obj);
  const obj9 = {};
  if (withBanner) {
    const obj10 = { stickerPack };
    ({ bannerContainer: obj14.containerStyle, banner: obj14.style } = tmp);
    withBanner = callback(importDefault(dependencyMap[12]), obj10);
  }
  const items2 = [withBanner, ];
  if (null != onPress) {
    const obj11 = {};
    const items3 = [tmp.section, style];
    obj11.style = items3;
    obj11.onPress = onPress;
    obj11.accessibilityRole = "header";
    obj11.children = tmp2Result;
    let tmp24 = callback(arg1(dependencyMap[13]).PressableOpacity, obj11);
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
const result1 = arg1(dependencyMap[14]).fileFinishedImporting("modules/stickers/native/StickerPackHeader.tsx");

export default memoResult;
