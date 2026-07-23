// Module ID: 12091
// Function ID: 94695
// Name: UserProfileApplicationWidgetBottomProgressLayout
// Dependencies: [31, 27, 33, 4130, 689, 12000, 12088, 4126, 2]
// Exports: default

// Module 12091 (UserProfileApplicationWidgetBottomProgressLayout)
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
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.root = _createForOfIteratorHelperLoose;
let obj1 = { width: 48, height: 48, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden", borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.image = obj1;
let obj2 = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_4, minWidth: 0 };
_createForOfIteratorHelperLoose.content = obj2;
let obj3 = { width: "100%", height: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.progressContainer = obj3;
_createForOfIteratorHelperLoose.progress = { height: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG };
let obj5 = { flexDirection: "row", justifyContent: "space-between", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.textContent = obj5;
_createForOfIteratorHelperLoose.textLeft = { flex: 1, minWidth: 0 };
_createForOfIteratorHelperLoose.progressText = { flexShrink: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { height: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG };
const result = require("jsxProd").fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetBottomProgressLayout.tsx");

export default function UserProfileApplicationWidgetBottomProgressLayout(arg0) {
  let bottomConfig;
  let resolveFieldValue;
  ({ bottomConfig, resolveFieldValue } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const objective = bottomConfig.components.objective;
  let image;
  if (null != objective) {
    image = objective.fields.image;
  }
  const items = [require(12000) /* resolvedValuesFromUserApplicationIdentityProfile */.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  let obj = require(12000) /* resolvedValuesFromUserApplicationIdentityProfile */;
  const singleStringOrSkeleton = obj.resolveSingleStringOrSkeleton(objective, "name", resolveFieldValue);
  let obj1 = require(12000) /* resolvedValuesFromUserApplicationIdentityProfile */;
  const singleStringOrSkeleton1 = obj1.resolveSingleStringOrSkeleton(objective, "description", resolveFieldValue);
  const progress = bottomConfig.components.progress;
  let current;
  if (null != progress) {
    current = progress.fields.current;
  }
  const items1 = [require(12000) /* resolvedValuesFromUserApplicationIdentityProfile */.ResolvedValueType.NUMBER];
  let iter = resolveFieldValue(current, items1);
  let max;
  if (null != progress) {
    max = progress.fields.max;
  }
  const items2 = [require(12000) /* resolvedValuesFromUserApplicationIdentityProfile */.ResolvedValueType.NUMBER];
  let iter2 = resolveFieldValue(max, items2);
  let obj2 = require(12000) /* resolvedValuesFromUserApplicationIdentityProfile */;
  obj = { style: tmp.root };
  const progressPercentage = obj2.resolveProgressPercentage(iter, iter2);
  if (null != fieldValue) {
    obj = {};
    obj1 = { uri: fieldValue.media.url };
    obj.source = obj1;
    obj.style = tmp.image;
    obj.resizeMode = "contain";
    let tmp14 = callback(closure_2, obj);
  } else {
    obj2 = { style: tmp.image };
    tmp14 = callback(require(12088) /* ImageSkeleton */.ImageSkeleton, obj2);
  }
  const items3 = [tmp14, ];
  const obj3 = { style: tmp.content };
  const obj4 = { style: tmp.progressContainer, accessibilityRole: "progressbar" };
  const obj5 = { min: 0 };
  let value;
  if (null != iter2) {
    value = iter2.value;
  }
  let num2 = 1;
  if (null != value) {
    num2 = value;
  }
  obj5.max = num2;
  value = undefined;
  if (null != iter) {
    value = iter.value;
  }
  let num3 = 0;
  if (null != value) {
    num3 = value;
  }
  obj5.now = num3;
  obj4.accessibilityValue = obj5;
  const obj6 = {};
  const items4 = [tmp.progress, ];
  let str2 = globalThis;
  items4[1] = { width: "" + progressPercentage + "%" };
  obj6.style = items4;
  obj4.children = callback(closure_3, obj6);
  const items5 = [callback(closure_3, obj4), ];
  const obj8 = { style: tmp.textContent };
  const obj9 = { style: tmp.textLeft };
  if ("value" === singleStringOrSkeleton.status) {
    const obj10 = { variant: "heading-sm/medium", lineClamp: 2, children: singleStringOrSkeleton.text };
    let tmp27 = callback(require(4126) /* Text */.Text, obj10);
  } else {
    const obj11 = { variant: "heading-sm/medium" };
    tmp27 = callback(require(12088) /* ImageSkeleton */.TextSkeleton, obj11);
  }
  const items6 = [tmp27, ];
  if ("value" === singleStringOrSkeleton1.status) {
    const obj12 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 2, children: singleStringOrSkeleton1.text };
    let tmp34 = callback(require(4126) /* Text */.Text, obj12);
  } else {
    const obj13 = { variant: "text-xs/medium" };
    tmp34 = callback(require(12088) /* ImageSkeleton */.TextSkeleton, obj13);
  }
  items6[1] = tmp34;
  obj9.children = items6;
  const items7 = [closure_5(closure_3, obj9), ];
  if (null != iter) {
    const obj14 = { variant: "text-sm/medium", lineClamp: 1, style: tmp.progressText };
    if (null != iter2) {
      iter = iter2.value;
      iter2 = str2.HermesInternal.concat;
      str2 = "/";
      let iter2Result = iter2(iter.value, "/", iter);
    } else {
      const _HermesInternal = HermesInternal;
      iter2Result = "" + require(12000) /* resolvedValuesFromUserApplicationIdentityProfile */.decimalToClampedPercentage(iter.value) + "%";
      const obj20 = require(12000) /* resolvedValuesFromUserApplicationIdentityProfile */;
    }
    obj14.children = iter2Result;
    callback(require(4126) /* Text */.Text, obj14);
    const tmp41 = callback;
  } else {
    items7[1] = callback(require(12088) /* ImageSkeleton */.TextSkeleton, { variant: "text-sm/medium", widthChars: 4 });
    obj8.children = items7;
    items5[1] = tmp23(tmp22, obj8);
    obj3.children = items5;
    items3[1] = closure_5(tmp18, obj3);
    obj.children = items3;
    return closure_5(closure_3, obj);
  }
};
