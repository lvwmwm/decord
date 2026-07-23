// Module ID: 11999
// Function ID: 92707
// Name: UserProfileApplicationWidgetTopHeroLayout
// Dependencies: [57, 31, 27, 653, 5512, 33, 4130, 689, 12000, 12087, 12088, 5109, 4554, 2]
// Exports: default

// Module 11999 (UserProfileApplicationWidgetTopHeroLayout)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { HorizontalGradient } from "ME";
import { CARD_PADDING } from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
({ Image: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const sum = CARD_PADDING + 8;
let closure_10 = ["transparent", "black"];
_createForOfIteratorHelperLoose = { root: { position: "relative" } };
_createForOfIteratorHelperLoose = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, minHeight: 140 };
_createForOfIteratorHelperLoose.contentRow = _createForOfIteratorHelperLoose;
let obj1 = { flex: 1, minWidth: 120, gap: require("_createForOfIteratorHelperLoose").space.PX_4, justifyContent: "center" };
_createForOfIteratorHelperLoose.heroText = obj1;
_createForOfIteratorHelperLoose.heroImageColumn = { flex: 1, alignItems: "flex-end" };
_createForOfIteratorHelperLoose.firstWidgetSpacing = { marginTop: 8 };
let obj2 = { width: 86, height: 86, marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.heroImageSkeleton = obj2;
let obj3 = { position: "absolute", left: "50%", right: -CARD_PADDING, top: -sum, bottom: 0, overflow: "hidden" };
_createForOfIteratorHelperLoose.heroImagePositioner = obj3;
_createForOfIteratorHelperLoose.heroImageMask = { flex: 1, flexDirection: "row" };
_createForOfIteratorHelperLoose.heroImageFadeGradient = { width: 130 };
_createForOfIteratorHelperLoose.heroImageMaskRemainder = { flex: 1, backgroundColor: "black" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetTopHeroLayout.tsx");

export default function UserProfileApplicationWidgetTopHeroLayout(header) {
  let isFirstWidget;
  let numberFormat;
  let resolveFieldValue;
  let topConfig;
  ({ topConfig, resolveFieldValue, numberFormat, isFirstWidget } = header);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(null), 2);
  const first = tmp2[0];
  const _require = tmp2[1];
  let obj = _require(12000);
  const textComponentValues = obj.resolveTextComponentValues(topConfig.components.title, resolveFieldValue, numberFormat, true);
  let obj1 = _require(12000);
  const textComponentValues1 = obj1.resolveTextComponentValues(topConfig.components.subtitle_1, resolveFieldValue, numberFormat);
  let obj2 = _require(12000);
  const textComponentValues2 = obj2.resolveTextComponentValues(topConfig.components.subtitle_2, resolveFieldValue, numberFormat);
  let obj3 = _require(12000);
  const hero_image = topConfig.components.hero_image;
  let image;
  const textComponentValues3 = obj3.resolveTextComponentValues(topConfig.components.subtitle_3, resolveFieldValue, numberFormat);
  if (null != hero_image) {
    image = hero_image.fields.image;
  }
  const items = [_require(12000).ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  obj = {};
  const items1 = [tmp.root, ];
  if (isFirstWidget) {
    isFirstWidget = tmp.firstWidgetSpacing;
  }
  items1[1] = isFirstWidget;
  obj.style = items1;
  const items2 = [header.header, , ];
  obj = { style: tmp.contentRow };
  obj1 = { style: tmp.heroText };
  obj2 = { field: textComponentValues, variant: "text-lg/medium", color: "text-default" };
  const items3 = [callback2(_require(12087).FieldText, obj2), , , ];
  obj3 = { field: textComponentValues1, variant: "text-sm/normal", color: "text-muted" };
  items3[1] = callback2(_require(12087).FieldText, obj3);
  const obj4 = { field: textComponentValues2, variant: "text-sm/normal", color: "text-muted" };
  items3[2] = callback2(_require(12087).FieldText, obj4);
  const obj5 = { field: textComponentValues3, variant: "text-sm/normal", color: "text-muted" };
  items3[3] = callback2(_require(12087).FieldText, obj5);
  obj1.children = items3;
  const items4 = [callback3(closure_6, obj1), ];
  const obj6 = { style: tmp.heroImageColumn };
  let tmp15 = null == fieldValue || null == first;
  if (tmp15) {
    const obj7 = { style: tmp.heroImageSkeleton };
    tmp15 = callback2(_require(12088).ImageSkeleton, obj7);
  }
  obj6.children = tmp15;
  items4[1] = callback2(closure_6, obj6);
  obj.children = items4;
  items2[1] = callback3(closure_6, obj);
  let tmp20Result = null != fieldValue;
  if (tmp20Result) {
    const obj8 = {
      style: tmp.heroImagePositioner,
      pointerEvents: "none",
      onLayout(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          callback({ width: layout.width, height: layout.height });
        }
    };
    let tmp22 = null != first;
    if (tmp22) {
      const result = fieldValue.media.height * (first.width / fieldValue.media.width);
      const obj9 = {};
      const obj10 = { width: first.width, height: result };
      obj9.style = obj10;
      obj9.androidRenderingMode = "software";
      const obj11 = { style: tmp.heroImageMask };
      const obj12 = {};
      ({ START: obj18.start, END: obj18.end } = HorizontalGradient);
      obj12.colors = closure_10;
      obj12.style = tmp.heroImageFadeGradient;
      const items5 = [callback2(importDefault(4554), obj12), ];
      const obj13 = { style: tmp.heroImageMaskRemainder };
      items5[1] = callback2(closure_6, obj13);
      obj11.children = items5;
      obj9.maskElement = callback3(closure_6, obj11);
      const obj14 = {};
      const obj15 = { uri: fieldValue.media.url };
      obj14.source = obj15;
      obj14.style = { width: "100%", height: "100%" };
      obj9.children = callback2(closure_5, obj14);
      tmp22 = callback2(importDefault(5109), obj9);
      const tmp27 = importDefault(5109);
    }
    obj8.children = tmp22;
    tmp20Result = callback2(closure_6, obj8);
    const tmp20 = callback2;
    const tmp21 = closure_6;
  }
  items2[2] = tmp20Result;
  obj.children = items2;
  return callback3(closure_6, obj);
};
export const HERO_IMAGE_UNCLIPPED_TOP_BLEED = 8;
export const HERO_IMAGE_TOP_BLEED = sum;
