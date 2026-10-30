// Module ID: 12169
// Function ID: 12170
// Name: UserProfileApplicationWidgetTopContainedLayout
// Dependencies: [19, 17, 21, 5009, 575, 12079, 12165, 5712, 12166, 2]
// Exports: default

// Module 12169 (UserProfileApplicationWidgetTopContainedLayout)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5712 */;
import _mod12079 from "module_12079" /* 12079 */;
import UserProfileApplicationWidgetFieldUtils from "UserProfileApplicationWidgetFieldUtils" /* 12165 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let size;
let size1;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentRow: obj2, text: obj3, imageContainer: size, image: { width: "100%", height: "100%" }, imageSkeleton: size1 };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_4 };
size = { width: 96, height: 96, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
size1 = { width: 96, height: 96, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetTopContainedLayout.tsx");

export default function UserProfileApplicationWidgetTopContainedLayout(header) {
  let items2;
  let items3;
  let numberFormat;
  let obj8;
  let obj9;
  let resolveFieldValue;
  let tmp12Result;
  let topConfig;
  ({ topConfig, resolveFieldValue, numberFormat } = header);
  header = header.header;
  const tmp = closure_6();
  const obj = _mod12079;
  const textComponentValues = obj.resolveTextComponentValues(topConfig.components.title, resolveFieldValue, numberFormat, true);
  const obj2 = _mod12079;
  const textComponentValues1 = obj2.resolveTextComponentValues(topConfig.components.subtitle_1, resolveFieldValue, numberFormat);
  const obj3 = _mod12079;
  const textComponentValues2 = obj3.resolveTextComponentValues(topConfig.components.subtitle_2, resolveFieldValue, numberFormat);
  const contained_image = topConfig.components.contained_image;
  let image;
  const obj4 = _mod12079;
  const textComponentValues3 = obj4.resolveTextComponentValues(topConfig.components.subtitle_3, resolveFieldValue, numberFormat);
  if (contained_image != null) {
    image = contained_image.fields.image;
  }
  const items = [_mod12079.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const items1 = [header, ];
  const obj5 = { style: tmp.contentRow, children: items3 };
  const obj6 = { style: tmp.text, children: items2 };
  items2 = [React3(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues, variant: "text-lg/medium", color: "text-default" }), React3(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues1, variant: "text-sm/normal", color: "text-muted" }), React3(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues2, variant: "text-sm/normal", color: "text-muted" }), React3(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues3, variant: "text-sm/normal", color: "text-muted" })];
  items3 = [hasOwnProperty(View, obj6), ];
  if (null != fieldValue) {
    const obj7 = { style: tmp.imageContainer, children: React3(FastImageDefault, obj8) };
    obj8 = { source: obj9, style: tmp.image, resizeMode: "contain" };
    obj9 = { uri: fieldValue.media.url };
    tmp12Result = tmp12(tmp11, obj7);
  } else {
    const obj10 = { style: tmp.imageSkeleton };
    tmp12Result = tmp12(tmp2(12166).ImageSkeleton, obj10);
  }
  const obj11 = { children: items1 };
  items3[1] = tmp12Result;
  items1[1] = hasOwnProperty(View, obj5);
  return hasOwnProperty(View, obj11);
};
