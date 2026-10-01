// Module ID: 8389
// Function ID: 8390
// Name: UserProfileApplicationWidgetTopHeroLayout
// Dependencies: [32, 19, 17, 1074, 6629, 21, 4836, 576, 8390, 7687, 8477, 8478, 5976, 5293, 2]
// Exports: default

// Module 8389 (UserProfileApplicationWidgetTopHeroLayout)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import _modDef5976 from "module_5976" /* 5976 */;
import Constants2 from "Constants" /* 6629 */;
import UserProfileSharedStyles from "UserProfileSharedStyles" /* 7687 */;
import _mod8390 from "module_8390" /* 8390 */;
import UserProfileApplicationWidgetFieldUtils from "UserProfileApplicationWidgetFieldUtils" /* 8477 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let size;
({ Image: hasOwnProperty, View: metroRequire } = react_native);
const HorizontalGradient = Constants.HorizontalGradient;
const CARD_PADDING = Constants2.CARD_PADDING;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const colors = ["transparent", "black"];
let createStyles = createStyles_mod;
let obj = { root: { position: "relative" }, contentRow: obj2, heroText: obj3, heroImageColumn: { flex: 1, alignItems: "flex-end" }, heroImageSkeleton: size, heroImagePositioner: { position: "absolute", left: "50%", right: -CARD_PADDING, top: -CARD_PADDING, bottom: 0, overflow: "hidden" }, heroImageMask: { flex: 1, flexDirection: "row" }, heroImageFadeGradient: { width: 130 }, heroImageMaskRemainder: { flex: 1, backgroundColor: "black" } };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12, minHeight: 140 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, minWidth: 120, gap: nativeDefault.space.PX_4, justifyContent: "center" };
size = { width: 86, height: 86, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
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
  const tmp = closure_11();
  [tmp3, c0] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const obj = _mod8390;
  const textComponentValues = obj.resolveTextComponentValues(topConfig.components.title, resolveFieldValue, numberFormat, true);
  const obj2 = _mod8390;
  const textComponentValues1 = obj2.resolveTextComponentValues(topConfig.components.subtitle_1, resolveFieldValue, numberFormat);
  const obj3 = _mod8390;
  const textComponentValues2 = obj3.resolveTextComponentValues(topConfig.components.subtitle_2, resolveFieldValue, numberFormat);
  const hero_image = topConfig.components.hero_image;
  let image;
  const obj4 = _mod8390;
  const textComponentValues3 = obj4.resolveTextComponentValues(topConfig.components.subtitle_3, resolveFieldValue, numberFormat);
  if (hero_image != null) {
    image = hero_image.fields.image;
  }
  const items = [_mod8390.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const obj5 = { style: tmp.root, children: items1 };
  items1 = [header, , ];
  const obj6 = { style: tmp.contentRow, children: items3 };
  const obj7 = { style: tmp.heroText, children: items2 };
  const tmp4Result = UserProfileSharedStyles;
  const userProfileCardRadius = tmp4Result.useUserProfileCardRadius();
  items2 = [metroImportAll(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues, variant: "text-lg/medium", color: "text-default" }), metroImportAll(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues1, variant: "text-sm/normal", color: "text-muted" }), metroImportAll(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues2, variant: "text-sm/normal", color: "text-muted" }), metroImportAll(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues3, variant: "text-sm/normal", color: "text-muted" })];
  items3 = [React4(metroRequire, obj7), ];
  const obj8 = { style: tmp.heroImageColumn, children: tmp15Result };
  tmp15Result = null == fieldValue || null == tmp3;
  if (tmp15Result) {
    const obj9 = { style: tmp.heroImageSkeleton };
    tmp15Result = tmp15(tmp4(8478).ImageSkeleton, obj9);
  }
  items3[1] = metroImportAll(metroRequire, obj8);
  items1[1] = React4(metroRequire, obj6);
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
      const obj12 = { style: size, androidRenderingMode: "software", maskElement: React4(metroRequire, obj13), children: metroImportAll(hasOwnProperty, obj17) };
      size = { width: tmp3.width, height: result };
      obj13 = { style: tmp.heroImageMask, children: items5 };
      const obj14 = { start: null, end: null, colors, style: tmp.heroImageFadeGradient };
      ({ START: obj16.start, END: obj16.end } = HorizontalGradient);
      items5 = [, ];
      const tmp21 = _modDef5976;
      items5[0] = metroImportAll(LinearGradientDefault, obj14);
      const obj15 = { style: tmp.heroImageMaskRemainder };
      items5[1] = metroImportAll(metroRequire, obj15);
      obj17 = { source: obj18, style: { width: "100%", height: "100%" } };
      obj18 = { uri: fieldValue.media.url };
      tmp15Result3 = tmp15(tmp21, obj12);
    }
    tmp15Result4 = tmp15(tmp14, obj10);
  }
  items1[2] = tmp15Result4;
  return React4(metroRequire, obj5);
};
