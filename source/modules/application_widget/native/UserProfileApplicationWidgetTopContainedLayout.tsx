// Module ID: 12115
// Function ID: 94925
// Name: UserProfileApplicationWidgetTopContainedLayout
// Dependencies: [31, 27, 33, 4130, 689, 12026, 12113, 12114, 2]
// Exports: default

// Module 12115 (UserProfileApplicationWidgetTopContainedLayout)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ Image: closure_2, View: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, alignItems: "center" };
_createForOfIteratorHelperLoose.contentRow = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj2 = { width: 96, height: 96, marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, overflow: "hidden", borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.imageContainer = obj2;
_createForOfIteratorHelperLoose.image = { width: "100%", height: "100%" };
let obj3 = { width: 96, height: 96, marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.imageSkeleton = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
const result = require("jsxProd").fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetTopContainedLayout.tsx");

export default function UserProfileApplicationWidgetTopContainedLayout(header) {
  let numberFormat;
  let resolveFieldValue;
  let topConfig;
  ({ topConfig, resolveFieldValue, numberFormat } = header);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(12026) /* resolvedValuesFromUserApplicationIdentityProfile */;
  const textComponentValues = obj.resolveTextComponentValues(topConfig.components.title, resolveFieldValue, numberFormat, true);
  let obj1 = require(12026) /* resolvedValuesFromUserApplicationIdentityProfile */;
  const textComponentValues1 = obj1.resolveTextComponentValues(topConfig.components.subtitle_1, resolveFieldValue, numberFormat);
  let obj2 = require(12026) /* resolvedValuesFromUserApplicationIdentityProfile */;
  const textComponentValues2 = obj2.resolveTextComponentValues(topConfig.components.subtitle_2, resolveFieldValue, numberFormat);
  let obj3 = require(12026) /* resolvedValuesFromUserApplicationIdentityProfile */;
  const contained_image = topConfig.components.contained_image;
  let image;
  const textComponentValues3 = obj3.resolveTextComponentValues(topConfig.components.subtitle_3, resolveFieldValue, numberFormat);
  if (null != contained_image) {
    image = contained_image.fields.image;
  }
  const items = [require(12026) /* resolvedValuesFromUserApplicationIdentityProfile */.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  obj = {};
  const items1 = [header.header, ];
  obj = { style: tmp.contentRow };
  obj1 = { style: tmp.text };
  obj2 = { field: textComponentValues, variant: "text-lg/medium", color: "text-default" };
  const items2 = [callback(require(12113) /* formatDurationNarrow */.FieldText, obj2), , , ];
  obj3 = { field: textComponentValues1, variant: "text-sm/normal", color: "text-muted" };
  items2[1] = callback(require(12113) /* formatDurationNarrow */.FieldText, obj3);
  const obj4 = { field: textComponentValues2, variant: "text-sm/normal", color: "text-muted" };
  items2[2] = callback(require(12113) /* formatDurationNarrow */.FieldText, obj4);
  const obj5 = { field: textComponentValues3, variant: "text-sm/normal", color: "text-muted" };
  items2[3] = callback(require(12113) /* formatDurationNarrow */.FieldText, obj5);
  obj1.children = items2;
  const items3 = [callback2(closure_3, obj1), ];
  if (null != fieldValue) {
    const obj6 = { style: tmp.imageContainer };
    const obj7 = {};
    const obj8 = { uri: fieldValue.media.url };
    obj7.source = obj8;
    obj7.style = tmp.image;
    obj7.resizeMode = "contain";
    obj6.children = callback(closure_2, obj7);
    let tmp13 = callback(closure_3, obj6);
  } else {
    const obj9 = { style: tmp.imageSkeleton };
    tmp13 = callback(require(12114) /* ImageSkeleton */.ImageSkeleton, obj9);
  }
  items3[1] = tmp13;
  obj.children = items3;
  items1[1] = callback2(closure_3, obj);
  obj.children = items1;
  return callback2(closure_3, obj);
};
