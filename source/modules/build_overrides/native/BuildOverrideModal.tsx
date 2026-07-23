// Module ID: 12877
// Function ID: 100015
// Name: BuildOverrideModal
// Dependencies: [31, 27, 10440, 33, 4130, 689, 4066, 3976, 12878, 12879, 566, 10939, 3712, 5121, 4126, 1212, 4543, 4337, 2]
// Exports: default

// Module 12877 (BuildOverrideModal)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, height: "100%", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.content = { marginTop: 160, flex: 1, alignItems: "center" };
let obj1 = { width: 100, height: 100, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, marginBottom: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.imageWrapper = obj1;
_createForOfIteratorHelperLoose.text = { lineHeight: 24, textAlign: "center" };
_createForOfIteratorHelperLoose.buildOverrideName = { marginTop: 8 };
_createForOfIteratorHelperLoose.buildOverrideExpiration = { lineHeight: 24 };
_createForOfIteratorHelperLoose.buildOverrideInvalid = { marginTop: 8 };
_createForOfIteratorHelperLoose.buttonWrapper = { alignSelf: "stretch" };
_createForOfIteratorHelperLoose.actionButton = { marginBottom: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/build_overrides/native/BuildOverrideModal.tsx");

export default function BuildOverrideModal(overrideUrl) {
  let str = overrideUrl.overrideUrl;
  if (str === undefined) {
    str = "";
  }
  let stateFromStores;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = str(3976);
  if (obj.isThemeDark(tmp2)) {
    let tmp3Result = tmp3(12878);
  } else {
    tmp3Result = tmp3(12879);
  }
  let obj1 = str(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [str];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_5.getBuildOverride(str), items1);
  const override = stateFromStores.override;
  let id;
  if (null != override) {
    const targetBuildOverride = override.targetBuildOverride;
    if (null != targetBuildOverride) {
      const tmp10 = targetBuildOverride[str(undefined, 10939).DEVICE_FIELD];
      if (null != tmp10) {
        id = tmp10.id;
      }
    }
  }
  let obj2 = stateFromStores(3712);
  let obj3 = stateFromStores(3712)();
  let expiresAt;
  if (null != override) {
    expiresAt = override.expiresAt;
  }
  tmp2 = stateFromStores(4066)();
  const durationResult = obj2.duration(obj3.diff(expiresAt));
  obj = { top: true, bottom: true, style: tmp.container };
  obj = { style: tmp.content };
  obj1 = { style: tmp.imageWrapper };
  obj2 = { source: tmp3Result };
  obj1.children = callback(closure_3, obj2);
  const items2 = [callback(closure_4, obj1), , ];
  obj3 = { style: tmp.text, variant: "text-md/medium" };
  const intl = str(1212).intl;
  obj3.children = intl.string(str(1212).t["6ILkNN"]);
  items2[1] = callback(str(4126).Text, obj3);
  if (null != id) {
    const obj4 = {};
    const obj5 = { style: tmp.buildOverrideName, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: id };
    const items3 = [callback(str(4126).Text, obj5), ];
    const obj6 = { style: tmp.buildOverrideExpiration, variant: "text-md/medium", color: "text-default" };
    const intl3 = str(1212).intl;
    const obj7 = { expirationDuration: humanizeResult };
    obj6.children = intl3.format(str(1212).t.lOsPpu, obj7);
    items3[1] = callback(str(4126).Text, obj6);
    obj4.children = items3;
    let tmp18 = callback2(closure_7, obj4);
  } else {
    const obj8 = { style: tmp.buildOverrideInvalid, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
    const intl2 = str(1212).intl;
    obj8.children = intl2.string(str(1212).t["cz+sue"]);
    tmp18 = callback(str(4126).Text, obj8);
  }
  items2[2] = tmp18;
  obj.children = items2;
  const items4 = [callback2(closure_4, obj), ];
  const obj9 = { style: tmp.buttonWrapper };
  if (null != id) {
    const obj10 = {};
    const obj11 = { style: tmp.actionButton };
    const obj12 = {};
    const intl5 = str(1212).intl;
    obj12.text = intl5.string(str(1212).t.v0MBqF);
    obj12.grow = true;
    obj12.onPress = function onPress() {
      const validatedURL = stateFromStores.validatedURL;
      let str = "";
      if (null != validatedURL) {
        str = validatedURL;
      }
      const result = str(outer1_2[11]).setBuildOverrideFromLink(str);
    };
    obj11.children = callback(str(4543).Button, obj12);
    const items5 = [callback(closure_4, obj11), ];
    const obj13 = { text: null, variant: "secondary", grow: true };
    const intl6 = str(1212).intl;
    obj13.text = intl6.string(str(1212).t.b5KKph);
    obj13.onPress = function onPress() {
      return stateFromStores(outer1_2[17]).pop();
    };
    items5[1] = callback(str(4543).Button, obj13);
    obj10.children = items5;
    let tmp29 = callback2(closure_7, obj10);
  } else {
    const obj14 = {};
    const intl4 = str(1212).intl;
    obj14.text = intl4.string(str(1212).t.WRkdCQ);
    obj14.grow = true;
    obj14.onPress = function onPress() {
      return stateFromStores(outer1_2[17]).pop();
    };
    tmp29 = callback(str(4543).Button, obj14);
  }
  obj9.children = tmp29;
  items4[1] = callback(closure_4, obj9);
  obj.children = items4;
  return callback2(str(5121).SafeAreaPaddingView, obj);
};
