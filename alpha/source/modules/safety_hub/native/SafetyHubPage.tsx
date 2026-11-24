// Module ID: 16071
// Function ID: 16072
// Name: SafetyHubPage
// Dependencies: [19, 17, 502, 7779, 7753, 1071, 21, 6713, 12329, 7942, 7808, 1112, 504, 3542, 5508, 16072, 1399, 16073, 4917, 575, 16074, 12371, 12327, 16068, 5478, 12326, 1255, 5685, 5690, 5131, 16075, 2119, 16076, 16078, 2]
// Exports: default

// Module 16071 (SafetyHubPage)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import _modDef3542 from "module_3542" /* 3542 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import Text_Text from "Text/Text" /* 5508 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5685 */;
import MetricEvents from "MetricEvents" /* 5690 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6713 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7753 */;
import InlineNotice6 from "InlineNotice" /* 7808 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 7942 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 12326 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 12329 */;
import useAvailableAgeVerificationMethods from "useAvailableAgeVerificationMethods" /* 16072 */;
import useShouldShowInitialGoogleWalletBanner from "useShouldShowInitialGoogleWalletBanner" /* 16073 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SafetyHubStore from "SafetyHubStore" /* 7779 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4917 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function handleLogInClick() {
  const obj = AuthenticationActionCreatorsDefault;
  obj.closeSuspendedUser();
}
function handleRetryClick() {
  const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
  obj.openV2("");
}
function handleManualReviewClick() {
  const obj = ManualReviewActionCreators;
  const result = obj.handleManualReviewCta();
}
function RetryBanner() {
  let intl;
  let intl2;
  let obj2;
  const obj = { type: "critical", message: intl.string(intl7.t.dqbMbn), role: "alert", action: obj2 };
  const InlineNotice = InlineNotice6.InlineNotice;
  intl = intl7.intl;
  obj2 = { text: intl2.string(intl7.t.IcA9iD), onPress: handleRetryClick };
  intl2 = intl7.intl;
  return map1(InlineNotice, obj);
}
function AgeCheckLoadingBanner() {
  let isExpressiveModalV2Enabled;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled());
  const InlineNotice = InlineNotice6.InlineNotice;
  const intl = intl7.intl;
  const string = intl.string;
  const t = intl7.t;
  const obj2 = { type: "info", message: string(stateFromStores ? t.PU8nMu : t["nhhy/R"]), role: "status" };
  return map1(InlineNotice, obj2);
}
function SessionExpiredBanner() {
  let intl;
  let intl2;
  let obj2;
  const obj = { type: "critical", message: intl.string(intl7.t.rL1kLX), role: "alert", action: obj2 };
  const InlineNotice = InlineNotice6.InlineNotice;
  intl = intl7.intl;
  obj2 = { text: intl2.string(intl7.t["SrY+jH"]), onPress: handleLogInClick };
  intl2 = intl7.intl;
  return map1(InlineNotice, obj);
}
function ManualOrAutomatedReviewBanner() {
  let intl;
  let intl2;
  let link;
  let obj2;
  let obj3;
  _require = closure_24();
  let obj = { type: "critical", message: intl.format(_modDef3542.vPoM8y, obj2), role: "alert", action: obj3 };
  const InlineNotice = require("InlineNotice").InlineNotice;
  intl = require("intl").intl;
  obj2 = {
    manualReviewHook(children, arg1) {
      const obj = { onPress: handleManualReviewClick, style: link.link, variant: "body-sm/normal", color: "text-default", children };
      return map1(Text_Text.Text, obj, arg1);
    }
  };
  obj3 = { text: intl2.string(require("intl").t.IcA9iD), onPress: handleRetryClick };
  intl2 = require("intl").intl;
  return closure_13(InlineNotice, obj);
}
function ManualReviewBanner() {
  let intl;
  let intl2;
  let obj3;
  let tmp5Result;
  const obj = useAvailableAgeVerificationMethods;
  const availableAgeVerificationMethods = obj.useAvailableAgeVerificationMethods();
  const methods = availableAgeVerificationMethods.methods;
  if (availableAgeVerificationMethods.loading) {
    tmp5Result = map1(AgeCheckLoadingBanner, {});
  } else {
    if (null != methods) {
      if (0 !== methods.length) {
        if (methods.every((method) => method.method === require("user").AgeAssuranceMethod.GOOGLE_WALLET)) {
          tmp5Result = tmp5(ManualOrAutomatedReviewBanner, {});
        } else {
          tmp5Result = tmp5(RetryBanner, {});
        }
      }
    }
    const obj2 = { type: "critical", message: intl.string(intl7.t.VTgFYh), role: "alert", action: obj3 };
    const InlineNotice = tmp(7808).InlineNotice;
    intl = tmp(1112).intl;
    obj3 = { text: intl2.string(intl7.t.NkTGsC), onPress: handleManualReviewClick };
    intl2 = tmp(1112).intl;
    tmp5Result = map1(InlineNotice, obj2);
  }
  return tmp5Result;
}
function AutomatedUnderageAppealStatus() {
  let ageCheckStatus;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj3;
  let obj5;
  let tmp9;
  let obj = get_initialized;
  const items = [SafetyHubStore];
  const stateFromStores = obj.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus());
  useShouldShowInitialGoogleWalletBanner;
  if (stateFromStores === AgeCheckStatus.NONE) {
    let tmp20 = null;
    if (tmp5) {
      tmp20 = map1(ManualOrAutomatedReviewBanner, {});
    }
    tmp9 = tmp20;
  } else if (stateFromStores === AgeCheckStatus.SUCCESS) {
    const obj2 = { type: "success", message: intl6.format(intl7.t.hyh4ls, obj3), role: "status" };
    const InlineNotice5 = tmp(7808).InlineNotice;
    intl6 = tmp(1112).intl;
    obj3 = {
      loginHook(children) {
          let obj = {
            variant: "body-sm/medium",
            color: "text-link",
            onPress() {
              const obj = closure_1_1(closure_1_3[7]);
              return obj.logout("safety_hub_page_appeal_success", constants.LOGIN);
            },
            children
          };
          return closure_1_13(require("Text/Text").Text, obj);
        }
    };
    tmp9 = map1(InlineNotice5, obj2);
  } else if (stateFromStores === AgeCheckStatus.VERIFIED) {
    const obj4 = { type: "success", message: intl4.string(intl7.t["2Qe65J"]), role: "status", action: obj5 };
    const InlineNotice4 = tmp(7808).InlineNotice;
    intl4 = tmp(1112).intl;
    obj5 = { text: intl5.string(intl7.t["2jvQ6K"]), onPress: handleLogInClick };
    intl5 = tmp(1112).intl;
    tmp9 = map1(InlineNotice4, obj4);
  } else if (stateFromStores === AgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
    const obj6 = { type: "success", message: intl3.string(intl7.t.Ie7p1Q), role: "status" };
    const InlineNotice3 = tmp(7808).InlineNotice;
    intl3 = tmp(1112).intl;
    tmp9 = map1(InlineNotice3, obj6);
  } else if (stateFromStores === AgeCheckStatus.ERROR) {
    const obj7 = { type: "critical", message: intl2.string(intl7.t["4sILBU"]), role: "alert" };
    const InlineNotice2 = tmp(7808).InlineNotice;
    intl2 = tmp(1112).intl;
    tmp9 = map1(InlineNotice2, obj7);
  } else if (stateFromStores === AgeCheckStatus.FAILURE) {
    const obj8 = { type: "critical", message: intl.string(intl7.t["40R63o"]), role: "alert" };
    const InlineNotice = tmp(7808).InlineNotice;
    intl = tmp(1112).intl;
    tmp9 = map1(InlineNotice, obj8);
  } else if (stateFromStores === AgeCheckStatus.UNDERAGE) {
    tmp9 = map1(RetryBanner, {});
  } else if (stateFromStores === AgeCheckStatus.UNDERAGE_MANUAL_REVIEW) {
    tmp9 = map1(ManualReviewBanner, {});
  } else {
    tmp9 = map1(AgeCheckLoadingBanner, {});
  }
  return tmp9;
}
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: metroImportDefault } = react_native);
const AgeCheckStatus = SafetyHubConstants.AgeCheckStatus;
({ AnalyticEvents: unpackModuleId, Routes: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, loadingIndicator: { display: "flex", justifyContent: "center", alignItems: "center" }, body: obj3, link: { textDecorationLine: "underline" } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
let closure_24 = createStyles(obj);
let result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  let closure_1;
  let items2;
  let items3;
  let items4;
  let suspendedUserTokenExpired;
  let tmp11Result;
  visible = visible.visible;
  importDefault = undefined;
  let safetyHubFetchError;
  let tmp = closure_24();
  let tmp3 = safetyHubFetchError;
  const tmp4 = require("useSafetyHubLoading")();
  let obj = visible(safetyHubFetchError[21]);
  const tmp2 = importDefault;
  importDefault = obj.useSafetyHubInitialized();
  let obj2 = visible(safetyHubFetchError[22]);
  const state = obj2.useSafetyHubAccountStanding();
  let obj3 = visible(safetyHubFetchError[23]);
  safetyHubFetchError = obj3.useSafetyHubFetchError();
  let obj4 = visible(safetyHubFetchError[12]);
  const items = [AuthenticationStore];
  const stateFromStores = obj4.useStateFromStores(items, () => suspendedUserTokenExpired.isSuspendedUserTokenExpired());
  const tmp8 = require("useMountEffect")(() => {
    const obj = SafetyHubActionCreatorsAll;
    const safetyHubData = obj.getSafetyHubData();
    const tmp3 = closure_1;
    if (tmp3) {
      const obj3 = { account_standing: state.state };
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(unpackModuleId.SAFETY_HUB_VIEWED, obj3);
      const obj4 = { name: MetricEvents.MetricEvents.SAFETY_HUB_VIEW };
      const increment = MonitoringAgentDefault.increment;
      MonitoringAgentDefault;
      increment(obj4);
    }
  });
  const items1 = [safetyHubFetchError, visible];
  const effect = react.useEffect(() => {
    const tmp = visible;
    if (tmp) {
      if (null != safetyHubFetchError) {
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.openLazy(asyncRequire(16075, dependencyMap.paths), "SafetyHubErrorActionSheet", {});
      }
    }
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("SafetyHubErrorActionSheet");
  }, items1);
  const tmp5 = visible;
  if (tmp4) {
    const obj5 = { style: items2, children: closure_13(closure_6, { animating: true, size: "large" }) };
    items2 = [, ];
    ({ container: arr5[0], loadingIndicator: arr5[1] } = tmp);
    tmp11Result = closure_13(closure_5, obj5);
  } else {
    tmp11Result = null;
    if (null == safetyHubFetchError) {
      const obj6 = { style: tmp.container, children: items4 };
      const obj7 = { style: tmp.body, children: items3 };
      items3 = [closure_13(stateFromStores ? SessionExpiredBanner : AutomatedUnderageAppealStatus, {}), closure_13(tmp2(tmp3[32]), {})];
      items4 = [closure_14(closure_5, obj7), closure_13(tmp5(tmp3[33]).ConnectedSafetyHubViolationsContainer, {})];
      tmp11Result = tmp11(closure_7, obj6);
    }
  }
  return tmp11Result;
};
