// Module ID: 11042
// Function ID: 85976
// Name: AppealIngestionSpeedBump
// Dependencies: [31, 27, 11026, 7544, 653, 33, 4130, 566, 11031, 11043, 1212, 11041, 11044, 11045, 11046, 5459, 2]
// Exports: default

// Module 11042 (AppealIngestionSpeedBump)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import SafetyHubLinks from "SafetyHubLinks";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
({ SafetyHubAnalyticsActions: closure_5, SafetyHubLinks: closure_6 } = SafetyHubLinks);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpeedBump.tsx");

export default function AppealIngestionSpeedBump(arg0) {
  let classification;
  let isCoppa;
  let isDsaEligible;
  let isSpam;
  ({ isCoppa, isSpam } = arg0);
  let _require;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_4.getAppealClassificationId());
  let obj1 = _require(11031);
  if (null == stateFromStores) {
    stateFromStores = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = obj1.useSafetyHubClassification(stateFromStores);
  let obj2 = _require(11043);
  _require = obj2.useEmitAppealIngestionEvent();
  ({ isDsaEligible, classification } = safetyHubClassification);
  let explainer_link;
  if (null != classification) {
    explainer_link = classification.explainer_link;
  }
  let str = "";
  if (null != explainer_link) {
    str = explainer_link;
  }
  const classification2 = safetyHubClassification.classification;
  let flagged_content;
  if (null != classification2) {
    flagged_content = classification2.flagged_content;
  }
  if (null == flagged_content) {
    flagged_content = [];
  }
  const intl = _require(1212).intl;
  const tmp = callback2();
  const intl2 = _require(1212).intl;
  const stringResult = intl.string(_require(1212).t["C5q+pW"]);
  obj = {};
  const items1 = [callback(_require(11041).AppealIngestionModalHeader, { headerText: stringResult, subHeaderText: intl2.string(_require(1212).t.URt7VI) }), ];
  obj = { style: tmp.container };
  let tmp9 = flagged_content.length > 0;
  if (tmp9) {
    obj1 = { flaggedContent: flagged_content };
    tmp9 = callback(importDefault(11044), obj1);
  }
  const items2 = [tmp9, , , , , ];
  obj2 = { classification: safetyHubClassification.classification };
  items2[1] = callback(importDefault(11045), obj2);
  let tmp13 = isCoppa;
  if (isCoppa) {
    const obj3 = {};
    const intl3 = _require(1212).intl;
    obj3.text = intl3.string(_require(1212).t["gJs+kf"]);
    obj3.url = constants.AGE_VERIFICATION_LINK;
    obj3.onPress = function onPress() {
      return callback(outer1_5.ClickAgeVerificationLink);
    };
    tmp13 = callback(importDefault(11046), obj3);
    const tmp17 = importDefault(11046);
  }
  items2[2] = tmp13;
  if (isSpam) {
    isSpam = !isCoppa;
  }
  if (isSpam) {
    const obj4 = {};
    const intl4 = _require(1212).intl;
    obj4.text = intl4.string(_require(1212).t.NBsJvm);
    obj4.url = constants.SPAM_LINK;
    obj4.onPress = function onPress() {
      return callback(outer1_5.ClickSpamWebformLink);
    };
    isSpam = callback(importDefault(11046), obj4);
    const tmp23 = importDefault(11046);
  }
  items2[3] = isSpam;
  let tmp26 = !isCoppa;
  if (tmp26) {
    const obj5 = {};
    const intl5 = _require(1212).intl;
    obj5.text = intl5.string(_require(1212).t["Vtyn/7"]);
    obj5.url = str;
    obj5.onPress = function onPress() {
      return callback(outer1_5.ClickLearnMoreLink);
    };
    tmp26 = callback(importDefault(11046), obj5);
    const tmp30 = importDefault(11046);
  }
  items2[4] = tmp26;
  if (isDsaEligible) {
    const obj6 = { variant: "text-xs/normal" };
    const intl6 = _require(1212).intl;
    obj6.children = intl6.format(_require(1212).t.WMUgCX, {});
    isDsaEligible = callback(_require(5459).TextWithIOSLinkWorkaround, obj6);
  }
  items2[5] = isDsaEligible;
  obj.children = items2;
  items1[1] = closure_9(View, obj);
  obj.children = items1;
  return closure_9(_require(11041).AppealIngestionModalScreen, obj);
};
