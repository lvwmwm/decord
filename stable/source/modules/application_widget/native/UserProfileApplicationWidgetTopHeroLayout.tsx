// Module ID: 12148
// Function ID: 12149
// Name: UserProfileApplicationWidgetTopHeroLayout
// Dependencies: [32, 19, 17, 7962, 21, 5306, 575, 12149, 8607, 12255, 12256, 12259, 2]
// Exports: default

// Module 12148 (UserProfileApplicationWidgetTopHeroLayout)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 7962 */;
import UserProfileSharedStyles from "UserProfileSharedStyles" /* 8607 */;
import _mod12149 from "module_12149" /* 12149 */;
import UserProfileApplicationWidgetFieldUtils from "UserProfileApplicationWidgetFieldUtils" /* 12255 */;
import UserProfileApplicationWidgetHeroImageDefault from "UserProfileApplicationWidgetHeroImage" /* 12259 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
const View = react_native.View;
const CARD_PADDING = Constants.CARD_PADDING;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: { position: "relative" }, contentRow: obj2, heroText: obj3, heroImageColumn: { flex: 1, alignItems: "flex-end" }, heroImageSkeleton: size, heroImagePositioner: { position: "absolute", left: "50%", right: -CARD_PADDING, top: -CARD_PADDING, bottom: 0, overflow: "hidden" } };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12, minHeight: 140 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, minWidth: 120, gap: nativeDefault.space.PX_4, justifyContent: "center" };
size = { width: 86, height: 86, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetTopHeroLayout.tsx");

export default function UserProfileApplicationWidgetTopHeroLayout(header) {
  let c0;
  let c1;
  let items1;
  let items2;
  let items3;
  let items4;
  let numberFormat;
  let resolveFieldValue;
  let tmp19Result;
  let tmp3;
  let tmp5;
  let topConfig;
  ({ topConfig, resolveFieldValue, numberFormat } = header);
  c0 = undefined;
  c1 = undefined;
  header = header.header;
  const tmp = closure_8();
  [tmp3, c0] = _slicedToArray(react.useState(), 2);
  const tmp2 = _slicedToArray(react.useState(), 2);
  [tmp5, c1] = react.useState();
  let tmp19Result3 = null != tmp3;
  _slicedToArray(react.useState(), 2);
  const callback = react.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    _undefined(layout.width);
    _undefined2(layout.height);
  }, []);
  if (tmp19Result3) {
    tmp19Result3 = null != tmp5;
  }
  const obj = _mod12149;
  const textComponentValues = obj.resolveTextComponentValues(topConfig.components.title, resolveFieldValue, numberFormat, true);
  const obj2 = _mod12149;
  const textComponentValues1 = obj2.resolveTextComponentValues(topConfig.components.subtitle_1, resolveFieldValue, numberFormat);
  const obj3 = _mod12149;
  const textComponentValues2 = obj3.resolveTextComponentValues(topConfig.components.subtitle_2, resolveFieldValue, numberFormat);
  const hero_image = topConfig.components.hero_image;
  let image;
  const obj4 = _mod12149;
  const textComponentValues3 = obj4.resolveTextComponentValues(topConfig.components.subtitle_3, resolveFieldValue, numberFormat);
  if (hero_image != null) {
    image = hero_image.fields.image;
  }
  const items = [_mod12149.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const obj5 = { style: tmp.root, children: items1 };
  items1 = [header, , ];
  const obj6 = { style: tmp.contentRow, children: items3 };
  const obj7 = { style: tmp.heroText, children: items2 };
  const tmp8Result = UserProfileSharedStyles;
  const userProfileCardRadius = tmp8Result.useUserProfileCardRadius();
  items2 = [metroRequire(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues, variant: "body-lg/medium", color: "text-default" }), metroRequire(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues1, variant: "body-sm/normal", color: "text-muted" }), metroRequire(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues2, variant: "body-sm/normal", color: "text-muted" }), metroRequire(UserProfileApplicationWidgetFieldUtils.FieldText, { field: textComponentValues3, variant: "body-sm/normal", color: "text-muted" })];
  items3 = [metroImportDefault(View, obj7), ];
  const obj8 = { style: tmp.heroImageColumn, children: tmp19Result };
  tmp19Result = null == fieldValue || !tmp19Result3;
  if (tmp19Result) {
    const obj9 = { style: tmp.heroImageSkeleton };
    tmp19Result = tmp19(tmp8(12256).ImageSkeleton, obj9);
  }
  items3[1] = metroRequire(View, obj8);
  items1[1] = metroImportDefault(View, obj6);
  let tmp19Result4 = null != fieldValue;
  if (tmp19Result4) {
    const obj10 = { style: items4, pointerEvents: "none", onLayout: callback, children: tmp19Result3 };
    items4 = [tmp.heroImagePositioner, ];
    const obj11 = { borderTopRightRadius: userProfileCardRadius };
    items4[1] = obj11;
    if (tmp19Result3) {
      size = { media: fieldValue.media, width: tmp3, height: tmp5 };
      tmp19Result3 = tmp19(UserProfileApplicationWidgetHeroImageDefault, size);
    }
    tmp19Result4 = tmp19(tmp18, obj10);
  }
  items1[2] = tmp19Result4;
  return metroImportDefault(View, obj5);
};
