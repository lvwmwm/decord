// Module ID: 12173
// Function ID: 12174
// Name: UserProfileApplicationWidgetBottomProgressLayout
// Dependencies: [19, 17, 21, 5243, 575, 12167, 12080, 5957, 12168, 5866, 2]
// Exports: default

// Module 12173 (UserProfileApplicationWidgetBottomProgressLayout)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5957 */;
import _mod12080 from "module_12080" /* 12080 */;
import UserProfileApplicationWidgetFieldUtils from "UserProfileApplicationWidgetFieldUtils" /* 12167 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
const View = react_native.View;
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
  let tmp16;
  let tmp17;
  let tmp17Result;
  let tmp17Result3;
  let tmp17Result4;
  ({ bottomConfig, resolveFieldValue } = arg0);
  const tmp = closure_6();
  const obj = UserProfileApplicationWidgetFieldUtils;
  const emojiOverflowStyle = obj.useEmojiOverflowStyle("heading-xs/medium");
  const objective = bottomConfig.components.objective;
  let image;
  const obj2 = UserProfileApplicationWidgetFieldUtils;
  const emojiOverflowStyle1 = obj2.useEmojiOverflowStyle("body-xs/medium");
  if (objective != null) {
    image = objective.fields.image;
  }
  const items = [_mod12080.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const tmp2Result = _mod12080;
  const singleStringOrSkeleton = tmp2Result.resolveSingleStringOrSkeleton(objective, "name", resolveFieldValue);
  const tmp2Result4 = _mod12080;
  const singleStringOrSkeleton1 = tmp2Result4.resolveSingleStringOrSkeleton(objective, "description", resolveFieldValue);
  const progress = bottomConfig.components.progress;
  let current;
  if (progress != null) {
    current = progress.fields.current;
  }
  const items1 = [_mod12080.ResolvedValueType.NUMBER];
  const iter = resolveFieldValue(current, items1);
  let max;
  if (progress != null) {
    max = progress.fields.max;
  }
  const items2 = [_mod12080.ResolvedValueType.NUMBER];
  const iter2 = resolveFieldValue(max, items2);
  const obj3 = { style: tmp.root, children: items3 };
  const tmp2Result5 = _mod12080;
  const progressPercentage = tmp2Result5.resolveProgressPercentage(iter, iter2);
  if (null != fieldValue) {
    const obj4 = { source: obj5, style: tmp.image, resizeMode: "contain" };
    obj5 = { uri: fieldValue.media.url };
    tmp16 = React3(FastImageDefault, obj4);
    tmp17 = React3;
  } else {
    const obj6 = { style: tmp.image };
    tmp16 = React3(tmp2(12168).ImageSkeleton, obj6);
    tmp17 = React3;
  }
  items3 = [tmp16, ];
  const obj7 = { style: tmp.content, children: items5 };
  let num;
  const obj8 = { style: tmp.progressContainer, accessibilityRole: "progressbar", accessibilityValue: range, children: tmp17(View, obj9) };
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
  items5 = [tmp17(View, obj8), ];
  const obj11 = { style: tmp.textContent, children: items7 };
  const obj12 = { style: tmp.textLeft, children: items6 };
  if ("value" === singleStringOrSkeleton.status) {
    const obj13 = { variant: "heading-xs/medium", lineClamp: 2, style: emojiOverflowStyle, children: singleStringOrSkeleton.text };
    tmp17Result = tmp17(tmp2(5866).Text, obj13);
  } else {
    tmp17Result = tmp17(tmp2(12168).TextSkeleton, { variant: "heading-xs/medium" });
  }
  items6 = [tmp17Result, ];
  if ("value" === singleStringOrSkeleton1.status) {
    const obj14 = { variant: "body-xs/medium", color: "text-subtle", lineClamp: 2, style: emojiOverflowStyle1, children: singleStringOrSkeleton1.text };
    tmp17Result3 = tmp17(tmp2(5866).Text, obj14);
  } else {
    tmp17Result3 = tmp17(tmp2(12168).TextSkeleton, { variant: "body-xs/medium" });
  }
  items6[1] = tmp17Result3;
  items7 = [hasOwnProperty(View, obj12), ];
  if (null != iter) {
    const obj15 = { variant: "body-sm/medium", lineClamp: 1, style: tmp.progressText, children: combined };
    const Text = tmp2(5866).Text;
    if (null != iter2) {
      const _HermesInternal2 = HermesInternal;
      combined = "" + iter.value + "/" + iter2.value;
    } else {
      const _HermesInternal = HermesInternal;
      const tmp2Result6 = _mod12080;
      combined = "" + tmp2Result6.decimalToClampedPercentage(iter.value) + "%";
    }
    tmp17Result4 = tmp17(Text, obj15);
  } else {
    tmp17Result4 = tmp17(tmp2(12168).TextSkeleton, { variant: "body-sm/medium", widthChars: 4 });
  }
  items7[1] = tmp17Result4;
  items5[1] = hasOwnProperty(View, obj11);
  items3[1] = hasOwnProperty(View, obj7);
  return hasOwnProperty(View, obj3);
};
