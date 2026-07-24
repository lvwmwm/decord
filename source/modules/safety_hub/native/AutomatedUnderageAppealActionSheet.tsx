// Module ID: 11066
// Function ID: 86124
// Name: items
// Dependencies: [31, 27, 11053, 7589, 33, 4130, 689, 1212, 566, 1557, 11065, 7581, 7583, 4098, 5187, 5189, 4126, 5501, 5165, 3827, 4543, 11059, 2]
// Exports: default

// Module 11066 (items)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import SafetyHubLinks from "SafetyHubLinks";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { intl } from "getSystemLocale";
import { intl as intl2 } from "getSystemLocale";
import { intl as intl3 } from "getSystemLocale";
import { intl as intl4 } from "getSystemLocale";
import { intl as intl5 } from "getSystemLocale";
import { intl as intl6 } from "getSystemLocale";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ AGE_APPEAL_ACTION_SHEET_NAME: closure_6, SafetyHubLinks: closure_7 } = SafetyHubLinks);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { alignItems: "center" };
_createForOfIteratorHelperLoose.content = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.moreInfo = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.learnMore = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, textAlign: "center", paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, textAlign: "center", paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.footer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj5 = { alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.number = obj5;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj6 = {};
obj6.title = intl.string(require("getSystemLocale").t["1+E7LP"]);
obj6.description = intl2.string(require("getSystemLocale").t["BXiat/"]);
let items = [obj6, , ];
let obj7 = {};
obj7.title = intl3.string(require("getSystemLocale").t.iMQXtK);
obj7.description = intl4.string(require("getSystemLocale").t.oQ0vwu);
items[1] = obj7;
let obj8 = {};
obj8.title = intl5.string(require("getSystemLocale").t["oY/z1Q"]);
obj8.description = intl6.string(require("getSystemLocale").t.wtj02W);
items[2] = obj8;
let obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/safety_hub/native/AutomatedUnderageAppealActionSheet.tsx");

export default function AutomatedUnderageAppealActionSheet(onClose) {
  onClose = onClose.onClose;
  const classificationId = onClose.classificationId;
  let tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = onClose(566);
  const items = [callback1];
  const stateFromStores = obj.useStateFromStores(items, () => callback1.getAgeVerificationWebviewUrl());
  let obj1 = onClose(566);
  const items1 = [callback1];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => callback1.getIsLoadingAgeVerification());
  const bottom = classificationId(1557)().bottom;
  const items2 = [onClose];
  const callback = stateFromStores.useCallback(() => {
    if (null != onClose) {
      onClose();
      const tmp = onClose;
    }
    classificationId(tmp[10]).close();
  }, items2);
  const items3 = [callback];
  callback1 = stateFromStores.useCallback(() => {
    classificationId(tmp[10]).success();
    callback();
    const obj = classificationId(tmp[10]);
    const result = classificationId(tmp[10]).start_verification_check();
  }, items3);
  const items4 = [stateFromStores, callback1];
  const effect = stateFromStores.useEffect(() => {
    if ("" !== stateFromStores) {
      let obj = classificationId(tmp[11]);
      obj = { webviewUrl: stateFromStores, onComplete: callback1, entryPoint: onClose(classificationId[12]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS };
      obj.showAgeVerification(obj);
      classificationId(classificationId[13]).hideActionSheet(outer1_6);
      const obj3 = classificationId(classificationId[13]);
    }
  }, items4);
  obj = { scrollable: true };
  const sum = 425 + bottom;
  const sum1 = sum + classificationId(689).space.PX_16;
  obj.startHeight = sum1 + classificationId(689).space.PX_32;
  obj = { style: tmp.container };
  obj1 = {};
  const obj2 = {};
  const merged = Object.assign(tmp.content);
  obj2["paddingBottom"] = bottom;
  obj1.style = obj2;
  let obj3 = { style: tmp.header };
  const obj4 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
  const intl = onClose(1212).intl;
  obj4.children = intl.string(onClose(1212).t["9SDLnj"]);
  const items5 = [callback(onClose(4126).Text, obj4), ];
  const obj5 = { variant: "heading-md/medium", color: "text-default" };
  const intl2 = onClose(1212).intl;
  obj5.children = intl2.string(onClose(1212).t["yvx//1"]);
  items5[1] = callback(onClose(4126).Text, obj5);
  obj3.children = items5;
  const items6 = [callback2(callback, obj3), , , ];
  const obj6 = {};
  const obj7 = {
    hasIcons: true,
    children: items.map((arg0, arg1) => {
      let description;
      let title;
      ({ title, description } = arg0);
      let obj = { label: title, subLabel: description };
      obj = { style: tmp.number };
      obj = { variant: "heading-md/semibold", color: "text-brand", children: arg1 + 1 };
      obj.children = outer1_8(onClose(tmp[16]).Text, obj);
      obj.icon = outer1_8(callback, obj);
      return outer1_8(onClose(tmp[18]).TableRow, obj, arg1);
    })
  };
  obj6.children = callback(onClose(5501).TableRowGroup, obj7);
  items6[1] = callback(callback, obj6);
  const obj8 = { style: tmp.moreInfo };
  const obj9 = {};
  const intl3 = onClose(1212).intl;
  obj9.title = intl3.string(onClose(1212).t.WPwp1b);
  obj9.hasIcons = false;
  const obj10 = { label: null, subLabel: null, onPress: null, arrow: true, start: true, end: true };
  const intl4 = onClose(1212).intl;
  obj10.label = intl4.string(onClose(1212).t.N9WJMM);
  const intl5 = onClose(1212).intl;
  obj10.subLabel = intl5.string(onClose(1212).t.NHq382);
  obj10.onPress = function onPress() {
    return classificationId(tmp[19]).openURL(outer1_7.AGE_VERIFICATION_LINK);
  };
  obj9.children = callback(onClose(5165).TableRow, obj10);
  obj8.children = callback(onClose(5501).TableRowGroup, obj9);
  items6[2] = callback(callback, obj8);
  const obj11 = { style: tmp.footer };
  const obj12 = {
    onPress() {
      return onClose(tmp[21]).requestSuspendedUserAgeVerification(classificationId);
    },
    loading: stateFromStores1,
    disabled: stateFromStores1
  };
  const intl6 = onClose(1212).intl;
  obj12.text = intl6.string(onClose(1212).t["54b8V0"]);
  const items7 = [callback(onClose(4543).Button, obj12), ];
  const obj13 = { variant: "heading-sm/medium", color: "text-subtle", style: tmp.learnMore };
  const intl7 = onClose(1212).intl;
  obj13.children = intl7.format(onClose(1212).t.ZbWsOF, { learnMoreLink: constants.LEARN_MORE_UU_APPEAL_LINK });
  items7[1] = callback(onClose(4126).Text, obj13);
  obj11.children = items7;
  items6[3] = callback2(callback, obj11);
  obj1.children = items6;
  obj.children = callback2(callback, obj1);
  obj.children = callback(onClose(5189).BottomSheetScrollView, obj);
  return callback(onClose(5187).BottomSheet, obj);
};
