// Module ID: 11041
// Function ID: 85948
// Name: getHeader
// Dependencies: [5, 57, 31, 27, 11026, 7544, 653, 33, 4130, 689, 4126, 566, 11031, 1456, 7545, 11040, 11032, 7543, 5121, 1212, 4543, 5087, 11042, 480, 11047, 11049, 11051, 11053, 11054, 5450, 5519, 2]
// Exports: AppealIngestionModalHeader, AppealIngestionModalScreen, default

// Module 11041 (getHeader)
import closure_4 from "SafetyHubLinks";
import _slicedToArray from "_slicedToArray";
import set from "set";
import { View } from "AppealIngestionThanks";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import SafetyHubLinks from "SafetyHubLinks";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_14;
let closure_9;
const require = arg1;
function getHeader(arg0) {
  return callback2(require(4126) /* Text */.Text, { variant: "text-md/normal", children: undefined });
}
({ APPEAL_INGESTION_IMPRESSION_PROPERTIES: closure_9, AppealIngestionSections: closure_10 } = SafetyHubLinks);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerContainer = { alignSelf: "stretch", marginTop: 16, marginBottom: 8, paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.header = { marginBottom: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.subheader = { lineHeight: 20, marginBottom: 8, textAlign: "center" };
let obj1 = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginVertical: 24 };
_createForOfIteratorHelperLoose.separator = obj1;
_createForOfIteratorHelperLoose.footerContainer = { marginBottom: 16 };
_createForOfIteratorHelperLoose.footerText = { marginBottom: 16, textAlign: "center" };
_createForOfIteratorHelperLoose.footerButton = { paddingHorizontal: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("result").fileFinishedImporting("modules/safety_hub/native/AppealIngestionModal.tsx");

export default function AppealIngestionModal(classificationId) {
  let classification;
  let require;
  let flag;
  let flag2;
  let obj = require(11031) /* useSafetyHubClassifications */;
  const safetyHubClassification = obj.useSafetyHubClassification(classificationId.classificationId);
  ({ isDsaEligible: require, classification } = safetyHubClassification);
  flag = undefined;
  if (null != classification) {
    flag = classification.is_spam;
  }
  if (!flag) {
    flag = false;
  }
  const classification2 = safetyHubClassification.classification;
  flag2 = undefined;
  if (null != classification2) {
    flag2 = classification2.is_coppa;
  }
  if (!flag2) {
    flag2 = false;
  }
  obj = {
    initialRouteName: constants.SPEED_BUMP,
    screens: flag(5450)(() => (function getScreens(closure_0, flag, flag2) {
      let closure_1 = flag;
      let closure_2 = flag2;
      let obj = {};
      obj = {};
      let obj2 = outer2_0(outer2_3[21]);
      obj.headerLeft = obj2.getHeaderCloseButton(flag(outer2_3[15]).close);
      obj.headerTitle = function headerTitle() {
        return outer3_16();
      };
      obj.render = function render() {
        return outer3_12(flag(outer3_3[22]), { isDsaEligible: closure_0, isSpam: closure_1, isCoppa: closure_2 });
      };
      obj.impressionName = outer2_0(outer2_3[23]).ImpressionNames.APPEAL_INGESTION_SPEED_BUMP;
      obj.impressionProperties = outer2_9;
      obj[outer2_10.SPEED_BUMP] = obj;
      obj = {};
      let obj4 = outer2_0(outer2_3[21]);
      obj.headerLeft = obj4.getHeaderBackButton();
      obj.headerTitle = function headerTitle() {
        return outer3_16();
      };
      obj.render = function render() {
        return outer3_12(flag(outer3_3[24]), { isDsaEligible: closure_0 });
      };
      obj.impressionName = outer2_0(outer2_3[23]).ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL;
      obj.impressionProperties = outer2_9;
      obj[outer2_10.COLLECT_SIGNAL] = obj;
      const obj1 = {
        headerLeft: outer2_0(outer2_3[21]).getHeaderBackButton(),
        headerTitle() {
          return outer3_16();
        },
        render() {
          return outer3_12(flag(outer3_3[25]), { isDsaEligible: closure_0 });
        },
        impressionName: outer2_0(outer2_3[23]).ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
        impressionProperties: outer2_9
      };
      obj[outer2_10.CONFIRM_SUBMISSION] = obj1;
      obj2 = {};
      const obj7 = outer2_0(outer2_3[21]);
      obj2.headerLeft = outer2_0(outer2_3[21]).getHeaderCloseButton(flag(outer2_3[15]).close);
      obj2.headerTitle = function headerTitle() {
        return outer3_16();
      };
      obj2.render = function render() {
        return outer3_12(flag(outer3_3[26]), {});
      };
      obj2.impressionName = outer2_0(outer2_3[23]).ImpressionNames.APPEAL_INGESTION_REQUEST_SENT;
      obj2.impressionProperties = outer2_9;
      obj[outer2_10.REQUEST_SENT] = obj2;
      const obj3 = {};
      const obj9 = outer2_0(outer2_3[21]);
      obj3.headerLeft = outer2_0(outer2_3[21]).getHeaderCloseButton(flag(outer2_3[15]).close);
      obj3.headerTitle = function headerTitle() {
        return outer3_16();
      };
      obj3.render = function render() {
        return outer3_12(flag(outer3_3[27]), {});
      };
      obj3.impressionName = outer2_0(outer2_3[23]).ImpressionNames.APPEAL_INGESTION_THANKS;
      obj3.impressionProperties = outer2_9;
      obj[outer2_10.THANKS] = obj3;
      obj4 = {};
      const obj11 = outer2_0(outer2_3[21]);
      obj4.headerLeft = outer2_0(outer2_3[21]).getHeaderCloseButton(flag(outer2_3[15]).close);
      obj4.headerTitle = function headerTitle() {
        return outer3_16();
      };
      obj4.render = function render() {
        return outer3_12(flag(outer3_3[28]), {});
      };
      obj4.impressionName = outer2_0(outer2_3[23]).ImpressionNames.APPEAL_INGESTION_SPAM;
      obj4.impressionProperties = outer2_9;
      obj[outer2_10.SPAM] = obj4;
      return obj;
    })(closure_0, flag, flag2))
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.headerBackTitle = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  obj.headerTitleAlign = "center";
  return callback2(require(5519) /* NavigationStack */.Navigator, obj);
};
export const AppealIngestionModalHeader = function AppealIngestionModalHeader(arg0) {
  let headerText;
  let subHeaderText;
  ({ headerText, subHeaderText } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.headerContainer };
  let tmp4 = null != headerText;
  if (tmp4) {
    tmp4 = "" !== headerText;
  }
  if (tmp4) {
    obj = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: headerText };
    tmp4 = callback2(require(4126) /* Text */.Text, obj);
  }
  const items = [tmp4, ];
  let tmp8 = null;
  if (null != subHeaderText) {
    tmp8 = null;
    if (subHeaderText.length > 0) {
      obj = { style: tmp.subheader, variant: "text-md/medium", color: "text-default", children: subHeaderText };
      tmp8 = callback2(require(4126) /* Text */.Text, obj);
    }
  }
  items[1] = tmp8;
  obj.children = items;
  return closure_13(View, obj);
};
export const AppealIngestionModalScreen = function AppealIngestionModalScreen(children) {
  let navigation;
  let callback;
  let first1;
  let React;
  callback = undefined;
  let footerText = _createForOfIteratorHelperLoose();
  let obj = safetyHubAppealSignal(navigation[11]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getIsSubmitting());
  let obj1 = safetyHubAppealSignal(navigation[12]);
  safetyHubAppealSignal = obj1.useSafetyHubAppealSignal();
  let obj2 = safetyHubAppealSignal(navigation[11]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_8.getFreeTextAppealReason());
  let obj3 = safetyHubAppealSignal(navigation[11]);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => outer1_8.getAppealClassificationId());
  let obj4 = safetyHubAppealSignal(navigation[12]);
  let tmp6 = stateFromStores2;
  if (null == stateFromStores2) {
    tmp6 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = obj4.useSafetyHubClassification(tmp6);
  const classification = safetyHubClassification.classification;
  let flag;
  if (null != classification) {
    flag = classification.is_spam;
  }
  if (!flag) {
    flag = false;
  }
  const classification2 = safetyHubClassification.classification;
  let flag2;
  if (null != classification2) {
    flag2 = classification2.is_coppa;
  }
  if (!flag2) {
    flag2 = false;
  }
  const classification3 = safetyHubClassification.classification;
  let prop;
  if (null != classification3) {
    prop = classification3.appeal_ingestion_type;
  }
  let obj5 = safetyHubAppealSignal(navigation[13]);
  navigation = obj5.useNavigation();
  let tmp10 = null != prop;
  if (tmp10) {
    tmp10 = prop !== safetyHubAppealSignal(navigation[14]).AppealIngestionType.IN_APP;
  }
  if (!tmp10) {
    tmp10 = flag2;
  }
  if (!tmp10) {
    tmp10 = flag;
  }
  const tmp14 = first1(React.useState(""), 2);
  let first = tmp14[0];
  callback = tmp14[1];
  const tmp16 = first1(React.useState(""), 2);
  first1 = tmp16[0];
  React = tmp16[1];
  const items3 = [navigation];
  const effect = React.useEffect(() => {
    let closure_0 = navigation.addListener("state", () => {
      outer1_6(outer1_3.getState().routes[outer1_3.getState(outer1_3).routes.length - 1].name);
    });
    return () => {
      outer1_3.removeListener("state", closure_0);
    };
  }, items3);
  const items4 = [navigation, first1];
  callback = React.useCallback(() => {
    if (first1 === outer1_10.SPEED_BUMP) {
      navigation.push(outer1_10.COLLECT_SIGNAL);
    } else if (first1 === outer1_10.COLLECT_SIGNAL) {
      navigation.push(outer1_10.CONFIRM_SUBMISSION);
    } else if (first1 === outer1_10.CONFIRM_SUBMISSION) {
      navigation.push(outer1_10.REQUEST_SENT);
    } else {
      stateFromStores1(navigation[15]).close();
      const obj = stateFromStores1(navigation[15]);
    }
  }, items4);
  // CreateGeneratorClosureLongIndex (0x67)
  const items5 = [stateFromStores2, safetyHubAppealSignal, stateFromStores1, callback];
  let string = React.useCallback(callback(tmp), items5);
  obj = { style: footerText.container };
  const items6 = [children.children, ];
  obj = { style: footerText.footerContainer };
  obj1 = { style: footerText.separator };
  const items7 = [callback2(callback, obj1), ];
  if (!!tmp10) {
    items7[1] = tmp13;
    obj.children = items7;
    items6[1] = tmp20(tmp21, obj);
    obj.children = items6;
    return tmp20(tmp21, obj);
  } else {
    obj2 = { bottom: true, style: footerText.footerButton };
    if (first1 === constants.CONFIRM_SUBMISSION) {
      obj3 = {};
      obj4 = { variant: "text-xs/medium", color: "text-default", style: footerText.footerText };
      const intl3 = safetyHubAppealSignal(navigation[19]).intl;
      obj4.children = intl3.string(safetyHubAppealSignal(navigation[19]).t["d6qgY/"]);
      const items8 = [callback2(safetyHubAppealSignal(navigation[10]).Text, obj4), , ];
      let tmp38 = `` !== first;
      if (tmp38) {
        obj5 = { variant: "text-xs/medium", color: "text-feedback-critical" };
        footerText = footerText.footerText;
        obj5.style = footerText;
        obj5.children = first;
        tmp38 = callback2(safetyHubAppealSignal(navigation[10]).Text, obj5);
      }
      items8[1] = tmp38;
      first = safetyHubAppealSignal;
      const obj6 = { onPress: string };
      const intl4 = safetyHubAppealSignal(navigation[19]).intl;
      string = intl4.string;
      obj6.text = string(safetyHubAppealSignal(navigation[19]).t.geKm7t);
      obj6.variant = "destructive";
      obj6.loading = stateFromStores;
      obj6.disabled = stateFromStores;
      items8[2] = callback2(safetyHubAppealSignal(navigation[20]).Button, obj6);
      obj3.children = items8;
      let tmp45Result = closure_13(closure_14, obj3);
      const tmp33 = closure_13;
      const tmp34 = closure_14;
    } else {
      const obj7 = { onPress: callback };
      if (first1 !== constants.REQUEST_SENT) {
        if (first1 !== constants.THANKS) {
          const intl = safetyHubAppealSignal(navigation[19]).intl;
          let stringResult = intl.string(safetyHubAppealSignal(navigation[19]).t.XiOHRX);
        }
        obj7.text = stringResult;
        tmp45Result = tmp45(tmp48, obj7);
      }
      const intl2 = safetyHubAppealSignal(navigation[19]).intl;
      stringResult = intl2.string(safetyHubAppealSignal(navigation[19]).t.i4jeWR);
      tmp45 = callback2;
    }
    obj2.children = tmp45Result;
    callback2(safetyHubAppealSignal(navigation[18]).SafeAreaPaddingView, obj2);
    const tmp22 = callback2;
  }
};
