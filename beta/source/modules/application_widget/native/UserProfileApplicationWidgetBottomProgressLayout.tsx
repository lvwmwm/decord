// Module ID: 8483
// Function ID: 8484
// Name: UserProfileApplicationWidgetBottomProgressLayout
// Dependencies: [19, 17, 21, 4836, 576, 8390, 8478, 4832, 2]
// Exports: default

// Module 8483 (UserProfileApplicationWidgetBottomProgressLayout)
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
let obj5;
let size;
let size1;
({ Image: c2, View: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: obj2, image: size, content: obj3, progressContainer: size1, progress: obj4, textContent: obj5, textLeft: { flex: 1, minWidth: 0 }, progressText: { flexShrink: 0 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj3 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
size1 = { width: "100%", height: 6, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj4 = { height: 6, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.ICON_STRONG };
obj5 = { flexDirection: "row", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetBottomProgressLayout.tsx");

export default function UserProfileApplicationWidgetBottomProgressLayout(arg0) {
  let bottomConfig;
  let combined;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let num2;
  let obj5;
  let obj9;
  let range;
  let resolveFieldValue;
  let tmp14;
  let tmp15;
  let tmp15Result;
  let tmp15Result3;
  let tmp15Result4;
  ({ bottomConfig, resolveFieldValue } = arg0);
  const tmp = closure_6();
  const objective = bottomConfig.components.objective;
  let image;
  if (objective != null) {
    image = objective.fields.image;
  }
  const items = [_mod8390.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const obj = _mod8390;
  const singleStringOrSkeleton = obj.resolveSingleStringOrSkeleton(objective, "name", resolveFieldValue);
  const obj2 = _mod8390;
  const singleStringOrSkeleton1 = obj2.resolveSingleStringOrSkeleton(objective, "description", resolveFieldValue);
  const progress = bottomConfig.components.progress;
  let current;
  if (progress != null) {
    current = progress.fields.current;
  }
  const items1 = [_mod8390.ResolvedValueType.NUMBER];
  const iter = resolveFieldValue(current, items1);
  let max;
  if (progress != null) {
    max = progress.fields.max;
  }
  const items2 = [_mod8390.ResolvedValueType.NUMBER];
  const iter2 = resolveFieldValue(max, items2);
  const obj3 = { style: tmp.root, children: items3 };
  const tmp3Result = _mod8390;
  const progressPercentage = tmp3Result.resolveProgressPercentage(iter, iter2);
  if (null != fieldValue) {
    const obj4 = { source: obj5, style: tmp.image, resizeMode: "contain" };
    obj5 = { uri: fieldValue.media.url };
    tmp14 = React3(React2, obj4);
    tmp15 = React3;
  } else {
    const obj6 = { style: tmp.image };
    tmp14 = React3(tmp3(8478).ImageSkeleton, obj6);
    tmp15 = React3;
  }
  items3 = [tmp14, ];
  const obj7 = { style: tmp.content, children: items5 };
  let num;
  const obj8 = { style: tmp.progressContainer, accessibilityRole: "progressbar", accessibilityValue: range, children: tmp15(_false, obj9) };
  if (iter2 != null) {
    num = iter2.value;
  }
  if (num == null) {
    num = 1;
  }
  range = { min: 0, max: num, now: num2 };
  num2 = undefined;
  if (iter != null) {
    num2 = iter.value;
  }
  if (num2 == null) {
    num2 = 0;
  }
  obj9 = { style: items4 };
  items4 = [tmp.progress, { width: "" + progressPercentage + "%" }];
  ({ width: "" + progressPercentage + "%" });
  items5 = [tmp15(_false, obj8), ];
  const obj11 = { style: tmp.textContent, children: items7 };
  const obj12 = { style: tmp.textLeft, children: items6 };
  if ("value" === singleStringOrSkeleton.status) {
    const obj13 = { variant: "heading-sm/medium", lineClamp: 2, children: singleStringOrSkeleton.text };
    tmp15Result = tmp15(tmp3(4832).Text, obj13);
  } else {
    tmp15Result = tmp15(tmp3(8478).TextSkeleton, { variant: "heading-sm/medium" });
  }
  items6 = [tmp15Result, ];
  if ("value" === singleStringOrSkeleton1.status) {
    const obj14 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 2, children: singleStringOrSkeleton1.text };
    tmp15Result3 = tmp15(tmp3(4832).Text, obj14);
  } else {
    tmp15Result3 = tmp15(tmp3(8478).TextSkeleton, { variant: "text-xs/medium" });
  }
  items6[1] = tmp15Result3;
  items7 = [hasOwnProperty(_false, obj12), ];
  if (null != iter) {
    const obj15 = { variant: "text-sm/medium", lineClamp: 1, style: tmp.progressText, children: combined };
    const Text = tmp3(4832).Text;
    if (null != iter2) {
      const _HermesInternal2 = HermesInternal;
      combined = "" + iter.value + "/" + iter2.value;
    } else {
      const _HermesInternal = HermesInternal;
      const tmp3Result2 = _mod8390;
      combined = "" + tmp3Result2.decimalToClampedPercentage(iter.value) + "%";
    }
    tmp15Result4 = tmp15(Text, obj15);
  } else {
    tmp15Result4 = tmp15(tmp3(8478).TextSkeleton, { variant: "text-sm/medium", widthChars: 4 });
  }
  items7[1] = tmp15Result4;
  items5[1] = hasOwnProperty(_false, obj11);
  items3[1] = hasOwnProperty(_false, obj7);
  return hasOwnProperty(_false, obj3);
};
