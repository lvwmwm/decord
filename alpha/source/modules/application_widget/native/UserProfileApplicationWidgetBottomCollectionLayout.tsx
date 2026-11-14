// Module ID: 12263
// Function ID: 12264
// Name: UserProfileApplicationWidgetBottomCollectionLayout
// Dependencies: [19, 17, 21, 5306, 575, 12255, 12149, 6020, 12256, 5929, 2]
// Exports: default

// Module 12263 (UserProfileApplicationWidgetBottomCollectionLayout)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 6020 */;
import _mod12149 from "module_12149" /* 12149 */;
import UserProfileApplicationWidgetFieldUtils from "UserProfileApplicationWidgetFieldUtils" /* 12255 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let size;
function CollectionItem(arg0) {
  let componentConfig;
  let items1;
  let items2;
  let obj5;
  let resolveFieldValue;
  let tmp13;
  let tmp14;
  let tmp14Result;
  let tmp14Result2;
  ({ componentConfig, resolveFieldValue } = arg0);
  const tmp = closure_6();
  const obj = UserProfileApplicationWidgetFieldUtils;
  const emojiOverflowStyle = obj.useEmojiOverflowStyle("body-xs/medium");
  let image;
  const obj2 = UserProfileApplicationWidgetFieldUtils;
  const emojiOverflowStyle1 = obj2.useEmojiOverflowStyle("footnote/medium");
  if (componentConfig != null) {
    image = componentConfig.fields.image;
  }
  const items = [_mod12149.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const tmp2Result = _mod12149;
  const singleStringOrSkeleton = tmp2Result.resolveSingleStringOrSkeleton(componentConfig, "name", resolveFieldValue);
  const tmp2Result2 = _mod12149;
  const singleStringOrSkeleton1 = tmp2Result2.resolveSingleStringOrSkeleton(componentConfig, "description", resolveFieldValue);
  const obj3 = { style: tmp.item, children: items1 };
  if (null != fieldValue) {
    const obj4 = { source: obj5, style: tmp.itemImage, resizeMode: "contain" };
    obj5 = { uri: fieldValue.media.url };
    tmp13 = React3(FastImageDefault, obj4);
    tmp14 = React3;
  } else {
    const obj6 = { style: tmp.itemImage };
    tmp13 = React3(tmp2(12256).ImageSkeleton, obj6);
    tmp14 = React3;
  }
  items1 = [tmp13, ];
  const obj7 = { style: tmp.itemContent, children: items2 };
  if ("value" === singleStringOrSkeleton.status) {
    const obj8 = { variant: "body-xs/medium", lineClamp: 2, style: emojiOverflowStyle, children: singleStringOrSkeleton.text };
    tmp14Result = tmp14(tmp2(5929).Text, obj8);
  } else {
    tmp14Result = tmp14(tmp2(12256).TextSkeleton, { variant: "body-xs/medium", widthChars: 6 });
  }
  items2 = [tmp14Result, ];
  if ("value" === singleStringOrSkeleton1.status) {
    const obj9 = { variant: "footnote/medium", color: "text-subtle", lineClamp: 2, style: emojiOverflowStyle1, children: singleStringOrSkeleton1.text };
    tmp14Result2 = tmp14(tmp2(5929).Text, obj9);
  } else {
    tmp14Result2 = tmp14(tmp2(12256).TextSkeleton, { variant: "footnote/medium", widthChars: 10 });
  }
  items2[1] = tmp14Result2;
  items1[1] = hasOwnProperty(View, obj7);
  return hasOwnProperty(View, obj3);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { grid: obj2, item: obj3, itemImage: size, itemContent: obj4 };
obj2 = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_16, columnGap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { width: "47%", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj4 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetBottomCollectionLayout.tsx");

export default function UserProfileApplicationWidgetBottomCollectionLayout(arg0) {
  let bottomConfig;
  let items;
  let resolveFieldValue;
  ({ bottomConfig, resolveFieldValue } = arg0);
  const obj = { style: closure_6().grid, children: items };
  items = [, , , ];
  const obj2 = { componentConfig: bottomConfig.components.item_1, resolveFieldValue };
  items[0] = React3(CollectionItem, obj2);
  const obj3 = { componentConfig: bottomConfig.components.item_2, resolveFieldValue };
  items[1] = React3(CollectionItem, obj3);
  const obj4 = { componentConfig: bottomConfig.components.item_3, resolveFieldValue };
  items[2] = React3(CollectionItem, obj4);
  const obj5 = { componentConfig: bottomConfig.components.item_4, resolveFieldValue };
  items[3] = React3(CollectionItem, obj5);
  return hasOwnProperty(View, obj);
};
