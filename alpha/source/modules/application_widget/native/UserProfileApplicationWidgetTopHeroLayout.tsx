// Module ID: 12116
// Function ID: 12117
// Name: UserProfileApplicationWidgetTopHeroLayout
// Dependencies: [32, 19, 17, 1072, 7377, 21, 5014, 575, 12117, 8814, 12203, 12204, 7038, 5587, 5717, 2]
// Exports: default

// Module 12116 (UserProfileApplicationWidgetTopHeroLayout)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import FastImageDefault from "FastImage" /* 5717 */;
import _modDef7038 from "module_7038" /* 7038 */;
import Constants2 from "Constants" /* 7377 */;
import UserProfileSharedStyles from "UserProfileSharedStyles" /* 8814 */;
import _mod12117 from "module_12117" /* 12117 */;
import UserProfileApplicationWidgetFieldUtils from "UserProfileApplicationWidgetFieldUtils" /* 12203 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
const View = react_native.View;
const HorizontalGradient = Constants.HorizontalGradient;
const CARD_PADDING = Constants2.CARD_PADDING;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const colors = ["transparent", "black"];
let createStyles = createStyles_mod;
let obj = { root: { position: "relative" }, contentRow: obj2, heroText: obj3, heroImageColumn: { flex: 1, alignItems: "flex-end" }, heroImageSkeleton: size, heroImagePositioner: { position: "absolute", left: "50%", right: -CARD_PADDING, top: -CARD_PADDING, bottom: 0, overflow: "hidden" }, heroImageMask: { flex: 1, flexDirection: "row" }, heroImageFadeGradient: { width: 130 }, heroImageMaskRemainder: { flex: 1, backgroundColor: "black" } };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12, minHeight: 140 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, minWidth: 120, gap: nativeDefault.space.PX_4, justifyContent: "center" };
size = { width: 86, height: 86, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetTopHeroLayout.tsx");

export default function UserProfileApplicationWidgetTopHeroLayout(header) {
  let c0;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let numberFormat;
  let obj13;
  let obj17;
  let obj18;
  let resolveFieldValue;
  let tmp15Result;
  let tmp15Result3;
  let tmp3;
  let topConfig;
  ({ topConfig, resolveFieldValue, numberFormat } = header);
  c0 = undefined;
  header = header.header;
  const tmp = closure_10();
  [tmp3, c0] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const obj = _mod12117;
  const textComponentValues = obj.resolveTextComponentValues(topConfig.components.title, resolveFieldValue, numberFormat, true);
  const obj2 = _mod12117;
  const textComponentValues1 = obj2.resolveTextComponentValues(topConfig.components.subtitle_1, resolveFieldValue, numberFormat);
  const obj3 = _mod12117;
  const textComponentValues2 = obj3.resolveTextComponentValues(topConfig.components.subtitle_2, resolveFieldValue, numberFormat);
  const hero_image = topConfig.components.hero_image;
  let image;
  const obj4 = _mod12117;
  const textComponentValues3 = obj4.resolveTextComponentValues(topConfig.components.subtitle_3, resolveFieldValue, numberFormat);
  if (hero_image != null) {
    image = hero_image.fields.image;
  }
  const items = [_mod12117.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const obj5 = { style: tmp.root, children: items1 };
  items1 = [header, , ];
  const obj6 = { style: tmp.contentRow, children: items3 };
  const obj7 = { style: tmp.heroText, children: items2 };
  const tmp4Result = UserProfileSharedStyles;
  const userProfileCardRadius = tmp4Result.useUserProfileCardRadius();
  items2 = [metroImportDefault(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues, variant: "text-lg/medium", color: "text-default" }), metroImportDefault(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues1, variant: "text-sm/normal", color: "text-muted" }), metroImportDefault(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues2, variant: "text-sm/normal", color: "text-muted" }), metroImportDefault(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues3, variant: "text-sm/normal", color: "text-muted" })];
  items3 = [metroImportAll(View, obj7), ];
  const obj8 = { style: tmp.heroImageColumn, children: tmp15Result };
  tmp15Result = null == fieldValue || null == tmp3;
  if (tmp15Result) {
    const obj9 = { style: tmp.heroImageSkeleton };
    tmp15Result = tmp15(tmp4(12204).ImageSkeleton, obj9);
  }
  items3[1] = metroImportDefault(View, obj8);
  items1[1] = metroImportAll(View, obj6);
  let tmp15Result4 = null != fieldValue;
  if (tmp15Result4) {
    const obj10 = {
      style: items4,
      pointerEvents: "none",
      onLayout(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          size = { width: layout.width, height: layout.height };
          _undefined(size);
        },
      children: tmp15Result3
    };
    items4 = [tmp.heroImagePositioner, ];
    const obj11 = { borderTopRightRadius: userProfileCardRadius };
    items4[1] = obj11;
    tmp15Result3 = null != tmp3;
    if (tmp15Result3) {
      const result = fieldValue.media.height * (tmp3.width / fieldValue.media.width);
      const obj12 = { style: size, androidRenderingMode: "software", maskElement: metroImportAll(View, obj13), children: metroImportDefault(FastImageDefault, obj17) };
      size = { width: tmp3.width, height: result };
      obj13 = { style: tmp.heroImageMask, children: items5 };
      const obj14 = { start: null, end: null, colors, style: tmp.heroImageFadeGradient };
      ({ START: obj16.start, END: obj16.end } = HorizontalGradient);
      items5 = [, ];
      const tmp21 = _modDef7038;
      items5[0] = metroImportDefault(LinearGradientDefault, obj14);
      const obj15 = { style: tmp.heroImageMaskRemainder };
      items5[1] = metroImportDefault(View, obj15);
      obj17 = { source: obj18, style: { width: "100%", height: "100%" } };
      obj18 = { uri: fieldValue.media.url };
      tmp15Result3 = tmp15(tmp21, obj12);
    }
    tmp15Result4 = tmp15(tmp14, obj10);
  }
  items1[2] = tmp15Result4;
  return metroImportAll(View, obj5);
};
