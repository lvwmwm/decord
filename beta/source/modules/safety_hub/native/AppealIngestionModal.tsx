// Module ID: 11365
// Function ID: 11366
// Name: AppealIngestionModal
// Dependencies: [5, 32, 19, 17, 7881, 7868, 1074, 21, 4836, 576, 4832, 504, 11359, 1485, 7869, 11364, 11360, 7867, 6544, 1115, 5281, 5936, 11366, 1249, 11380, 11382, 11384, 11386, 11387, 5910, 6421, 2]
// Exports: AppealIngestionModalHeader, AppealIngestionModalScreen, default

// Module 11365 (AppealIngestionModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import Text_Text from "Text/Text" /* 4832 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import AppealIngestionModalActionCreatorsDefault from "AppealIngestionModalActionCreators" /* 11364 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 7881 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7868 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, _undefined, c5, navigation;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const View = react_native.View;
({ APPEAL_INGESTION_IMPRESSION_PROPERTIES: c9, AppealIngestionSections: c10 } = SafetyHubConstants);
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerContainer: { alignSelf: "stretch", marginTop: 16, marginBottom: 8, paddingHorizontal: 16 }, header: { marginBottom: 8, textAlign: "center" }, subheader: { lineHeight: 20, marginBottom: 8, textAlign: "center" }, separator: obj3, footerContainer: { marginBottom: 16 }, footerText: { marginBottom: 16, textAlign: "center" }, footerButton: { paddingHorizontal: 16 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
let closure_15 = createStyles(obj);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModal.tsx");

export default function AppealIngestionModal(classificationId) {
  let c0;
  let classification;
  let intl;
  const f93521 = () => {
    let obj11;
    let obj13;
    let obj3;
    let obj5;
    let obj7;
    let obj9;
    let closure_1 = flag;
    let closure_2 = flag2;
    let closure_3 = flag3;
    let obj = {};
    const SPEED_BUMP = constants.SPEED_BUMP;
    const obj2 = {
      headerLeft: obj3.getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close),
      headerTitle() {
        return closure_1_12(c0(flag3[10]).Text, { variant: "text-md/normal", children: "paddingHorizontal" });
      },
      render() {
        const obj = { isDsaEligible, isSpam, isCoppa, isDeveloperClassification };
        return closure_2_12(flag(flag3[22]), obj);
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
      impressionProperties
    };
    obj[SPEED_BUMP] = obj2;
    obj3 = NavigatorHeader;
    const COLLECT_SIGNAL = constants.COLLECT_SIGNAL;
    const obj4 = {
      headerLeft: obj5.getHeaderBackButton(),
      headerTitle() {
        return closure_1_12(c0(flag3[10]).Text, { variant: "text-md/normal", children: "paddingHorizontal" });
      },
      render() {
        const obj = { isDsaEligible };
        return closure_2_12(flag(flag3[24]), obj);
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
      impressionProperties
    };
    obj[COLLECT_SIGNAL] = obj4;
    obj5 = NavigatorHeader;
    const CONFIRM_SUBMISSION = constants.CONFIRM_SUBMISSION;
    const obj6 = {
      headerLeft: obj7.getHeaderBackButton(),
      headerTitle() {
        return closure_1_12(c0(flag3[10]).Text, { variant: "text-md/normal", children: "paddingHorizontal" });
      },
      render() {
        const obj = { isDsaEligible };
        return closure_2_12(flag(flag3[25]), obj);
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
      impressionProperties
    };
    obj[CONFIRM_SUBMISSION] = obj6;
    obj7 = NavigatorHeader;
    const REQUEST_SENT = constants.REQUEST_SENT;
    const obj8 = {
      headerLeft: obj9.getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close),
      headerTitle() {
        return closure_1_12(c0(flag3[10]).Text, { variant: "text-md/normal", children: "paddingHorizontal" });
      },
      render() {
        return closure_1_12(flag(flag3[26]), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
      impressionProperties
    };
    obj[REQUEST_SENT] = obj8;
    obj9 = NavigatorHeader;
    const THANKS = constants.THANKS;
    const obj10 = {
      headerLeft: obj11.getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close),
      headerTitle() {
        return closure_1_12(c0(flag3[10]).Text, { variant: "text-md/normal", children: "paddingHorizontal" });
      },
      render() {
        return closure_1_12(flag(flag3[27]), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_THANKS,
      impressionProperties
    };
    obj[THANKS] = obj10;
    obj11 = NavigatorHeader;
    const SPAM = constants.SPAM;
    const obj12 = {
      headerLeft: obj13.getHeaderCloseButton(AppealIngestionModalActionCreatorsDefault.close),
      headerTitle() {
        return closure_1_12(c0(flag3[10]).Text, { variant: "text-md/normal", children: "paddingHorizontal" });
      },
      render() {
        return closure_1_12(flag(flag3[28]), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.APPEAL_INGESTION_SPAM,
      impressionProperties
    };
    obj[SPAM] = obj12;
    obj13 = NavigatorHeader;
    return obj;
  };
  _require = undefined;
  let flag2;
  let flag3;
  classificationId = classificationId.classificationId;
  let obj = require("useSafetyHubClassifications");
  const safetyHubClassification = obj.useSafetyHubClassification(classificationId);
  ({ isDsaEligible: c0, classification } = safetyHubClassification);
  let flag;
  if (classification != null) {
    flag = classification.is_spam;
  }
  if (!flag) {
    flag = false;
  }
  const classification2 = safetyHubClassification.classification;
  flag2 = undefined;
  if (classification2 != null) {
    flag2 = classification2.is_coppa;
  }
  if (!flag2) {
    flag2 = false;
  }
  const classification3 = safetyHubClassification.classification;
  flag3 = undefined;
  if (classification3 != null) {
    flag3 = classification3.is_developer_classification;
  }
  if (!flag3) {
    flag3 = false;
  }
  let obj2 = { initialRouteName: constants.SPEED_BUMP, screens: flag(flag3[29])(f93521), headerBackTitle: intl.string(require("intl").t["13/7kX"]), headerTitleAlign: "center" };
  flag(flag3[29])(f93521);
  const Navigator = tmp(tmp2[30]).Navigator;
  intl = tmp(tmp2[19]).intl;
  return closure_12(Navigator, obj2);
};
export const AppealIngestionModalHeader = function AppealIngestionModalHeader(arg0) {
  let headerText;
  let items;
  let subHeaderText;
  ({ headerText, subHeaderText } = arg0);
  const tmp = closure_15();
  let tmp4 = null != headerText;
  const obj = { style: tmp.headerContainer, children: items };
  const tmp2 = map1;
  const tmp3 = View;
  if (tmp4) {
    tmp4 = "" !== headerText;
  }
  if (tmp4) {
    const obj2 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: headerText };
    tmp4 = closure_12(Text_Text.Text, obj2);
  }
  items = [tmp4, ];
  let tmp8 = null;
  if (null != subHeaderText) {
    tmp8 = null;
    if (subHeaderText.length > 0) {
      const obj3 = { style: tmp.subheader, variant: "text-md/medium", color: "text-default", children: subHeaderText };
      tmp8 = closure_12(Text_Text.Text, obj3);
    }
  }
  items[1] = tmp8;
  return tmp2(tmp3, obj);
};
export const AppealIngestionModalScreen = function AppealIngestionModalScreen(children) {
  let c4;
  let closure_6;
  let intl3;
  let intl4;
  let items6;
  let items7;
  let tmp16;
  let tmp24Result2;
  let safetyHubAppealSignal;
  navigation = undefined;
  _asyncToGenerator = undefined;
  let first;
  react = undefined;
  let onPress;
  children = children.children;
  const tmp = closure_15();
  const tmp3 = navigation;
  let obj = safetyHubAppealSignal(navigation[11]);
  const items = [SafetyHubStore];
  const stateFromStores = obj.useStateFromStores(items, () => SafetyHubStore.getIsSubmitting());
  let obj2 = safetyHubAppealSignal(navigation[12]);
  safetyHubAppealSignal = obj2.useSafetyHubAppealSignal();
  let obj3 = safetyHubAppealSignal(navigation[11]);
  const items1 = [SafetyHubStore];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => SafetyHubStore.getFreeTextAppealReason());
  let obj4 = safetyHubAppealSignal(navigation[11]);
  const items2 = [SafetyHubStore];
  const stateFromStores2 = obj4.useStateFromStores(items2, () => SafetyHubStore.getAppealClassificationId());
  let tmp9 = stateFromStores2;
  const useSafetyHubClassification = safetyHubAppealSignal(navigation[12]).useSafetyHubClassification;
  const tmp8 = safetyHubAppealSignal(navigation[12]);
  if (stateFromStores2 == null) {
    tmp9 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const safetyHubClassification = useSafetyHubClassification(tmp9);
  const classification = safetyHubClassification.classification;
  let flag;
  if (classification != null) {
    flag = classification.is_spam;
  }
  if (!flag) {
    flag = false;
  }
  const classification2 = safetyHubClassification.classification;
  let flag2;
  if (classification2 != null) {
    flag2 = classification2.is_coppa;
  }
  if (!flag2) {
    flag2 = false;
  }
  const classification3 = safetyHubClassification.classification;
  let prop;
  if (classification3 != null) {
    prop = classification3.appeal_ingestion_type;
  }
  const tmp2Result = safetyHubAppealSignal(tmp3[13]);
  navigation = tmp2Result.useNavigation();
  const tmp13 = null != prop && prop !== safetyHubAppealSignal(tmp3[14]).AppealIngestionType.IN_APP || flag2 || flag;
  let tmp24Result3 = !tmp13;
  let tmp15 = first(react.useState(""), 2);
  [tmp16, c4] = tmp15;
  const tmp17 = first(react.useState(""), 2);
  first = tmp17[0];
  react = tmp17[1];
  const items3 = [navigation];
  const effect = react.useEffect(() => {
    let closure_0 = navigation.addListener("state", () => {
      closure_1_6(navigation.getState().routes[navigation.getState(navigation).routes.length - 1].name);
    });
    return () => {
      navigation.removeListener("state", closure_0);
    };
  }, items3);
  const items4 = [navigation, first];
  onPress = react.useCallback(() => {
    if (first === constants.SPEED_BUMP) {
      navigation.push(constants.COLLECT_SIGNAL);
    } else if (first === constants.COLLECT_SIGNAL) {
      navigation.push(constants.CONFIRM_SUBMISSION);
    } else if (first === constants.CONFIRM_SUBMISSION) {
      navigation.push(constants.REQUEST_SENT);
    } else {
      const obj = AppealIngestionModalActionCreatorsDefault;
      obj.close();
    }
  }, items4);
  const items5 = [stateFromStores2, safetyHubAppealSignal, stateFromStores1, onPress];
  let obj5 = { style: tmp.container, children: items6 };
  items6 = [children, ];
  const obj6 = { style: tmp.footerContainer, children: items7 };
  const obj7 = { style: tmp.separator };
  const callback1 = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let c3;
    let closure_0;
    let closure_2;
    let obj2;
    let v1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === _undefined) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            safetyHubAppealSignal = tmp4;
            if (null !== stateFromStores2) {
              navigation = 1;
              _undefined("");
              _undefined = 2;
              c5 = 1;
              const obj5 = { value: obj2.requestReview(tmp32, safetyHubAppealSignal, stateFromStores1), done: false };
              obj2 = tmp25(navigation[16]);
              return obj5;
            }
          }
        } else if (1 === _undefined) {
          navigation = 0;
          safetyHubAppealSignal = tmp25;
          const body = safetyHubAppealSignal.body;
          let code;
          const getRequestReviewErrorFromCode = safetyHubAppealSignal(navigation[17]).getRequestReviewErrorFromCode;
          const tmp12 = closure_129_4;
          const tmp15 = safetyHubAppealSignal(navigation[17]);
          if (body != null) {
            code = body.code;
          }
          tmp12(getRequestReviewErrorFromCode(code));
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          navigation = 0;
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_129_7();
          navigation = 0;
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp25) {
        if (0 === navigation) {
          c5 = 3;
          throw tmp25;
        } else {
          _undefined = 1;
        }
      }
    }
  }), items5);
  items7 = [closure_12(onPress, obj7), ];
  if (!tmp13) {
    const tmp25 = constants;
    const obj8 = { bottom: true, style: tmp.footerButton, children: tmp24Result2 };
    const SafeAreaPaddingView = tmp2(tmp3[18]).SafeAreaPaddingView;
    if (first === constants.CONFIRM_SUBMISSION) {
      const obj9 = { variant: "text-xs/medium", color: "text-default", style: tmp.footerText, children: intl3.string(safetyHubAppealSignal(tmp3[19]).t["d6qgY/"]) };
      const Text = tmp2(tmp3[10]).Text;
      intl3 = tmp2(tmp3[19]).intl;
      const items8 = [tmp24(Text, obj9), , ];
      let tmp24Result = "" !== tmp16;
      const tmp28 = closure_14;
      if (tmp24Result) {
        const obj10 = { variant: "text-xs/medium", color: "text-feedback-critical", style: tmp.footerText, children: tmp16 };
        tmp24Result = tmp24(tmp2(tmp3[10]).Text, obj10);
      }
      const obj11 = { children: items8 };
      items8[1] = tmp24Result;
      const obj12 = { onPress: callback1, text: intl4.string(safetyHubAppealSignal(tmp3[19]).t.geKm7t), variant: "destructive", loading: stateFromStores, disabled: stateFromStores };
      const Button = tmp2(tmp3[20]).Button;
      intl4 = tmp2(tmp3[19]).intl;
      items8[2] = closure_12(Button, obj12);
      tmp24Result2 = tmp22(tmp28, obj11);
    } else {
      const obj13 = { onPress, text: null };
      if (first !== tmp25.REQUEST_SENT) {
        let stringResult;
        if (first !== tmp25.THANKS) {
          const intl = tmp2(tmp3[19]).intl;
          stringResult = intl.string(tmp2(tmp3[19]).t.XiOHRX);
        }
        obj13.text = stringResult;
        tmp24Result2 = tmp24(tmp30, obj13);
      }
      const intl2 = tmp2(tmp3[19]).intl;
      stringResult = intl2.string(tmp2(tmp3[19]).t.i4jeWR);
    }
    tmp24Result3 = tmp24(SafeAreaPaddingView, obj8);
  }
  items7[1] = tmp24Result3;
  items6[1] = closure_13(onPress, obj6);
  return closure_13(onPress, obj5);
};
