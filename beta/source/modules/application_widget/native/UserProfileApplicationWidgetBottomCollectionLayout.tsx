// Module ID: 8484
// Function ID: 8485
// Name: UserProfileApplicationWidgetBottomCollectionLayout
// Dependencies: [19, 17, 21, 4836, 576, 8390, 8478, 4832, 2]
// Exports: default

// Module 8484 (UserProfileApplicationWidgetBottomCollectionLayout)
import nativeDefault from "native" /* 576 */;
import _mod8390 from "module_8390" /* 8390 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c2;
let c3;
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
  let tmp11;
  let tmp12;
  let tmp12Result;
  let tmp12Result2;
  ({ componentConfig, resolveFieldValue } = arg0);
  const tmp = closure_6();
  let image;
  if (componentConfig != null) {
    image = componentConfig.fields.image;
  }
  const items = [_mod8390.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const obj = _mod8390;
  const singleStringOrSkeleton = obj.resolveSingleStringOrSkeleton(componentConfig, "name", resolveFieldValue);
  const obj2 = _mod8390;
  const singleStringOrSkeleton1 = obj2.resolveSingleStringOrSkeleton(componentConfig, "description", resolveFieldValue);
  const obj3 = { style: tmp.item, children: items1 };
  if (null != fieldValue) {
    const obj4 = { source: obj5, style: tmp.itemImage, resizeMode: "contain" };
    obj5 = { uri: fieldValue.media.url };
    tmp11 = React3(React2, obj4);
    tmp12 = React3;
  } else {
    const obj6 = { style: tmp.itemImage };
    tmp11 = React3(tmp3(8478).ImageSkeleton, obj6);
    tmp12 = React3;
  }
  items1 = [tmp11, ];
  const obj7 = { style: tmp.itemContent, children: items2 };
  if ("value" === singleStringOrSkeleton.status) {
    const obj8 = { variant: "text-xs/medium", lineClamp: 2, children: singleStringOrSkeleton.text };
    tmp12Result = tmp12(tmp3(4832).Text, obj8);
  } else {
    tmp12Result = tmp12(tmp3(8478).TextSkeleton, { variant: "text-xs/medium", widthChars: 6 });
  }
  items2 = [tmp12Result, ];
  if ("value" === singleStringOrSkeleton1.status) {
    const obj9 = { variant: "text-xxs/medium", color: "text-subtle", lineClamp: 2, children: singleStringOrSkeleton1.text };
    tmp12Result2 = tmp12(tmp3(4832).Text, obj9);
  } else {
    tmp12Result2 = tmp12(tmp3(8478).TextSkeleton, { variant: "text-xxs/medium", widthChars: 10 });
  }
  items2[1] = tmp12Result2;
  items1[1] = hasOwnProperty(_false, obj7);
  return hasOwnProperty(_false, obj3);
}
({ Image: c2, View: c3 } = react_native);
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
  return hasOwnProperty(_false, obj);
};
