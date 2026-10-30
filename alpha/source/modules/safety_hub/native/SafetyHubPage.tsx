// Module ID: 16586
// Function ID: 16587
// Name: SafetyHubPage
// Dependencies: [19, 17, 7986, 7962, 1072, 21, 6734, 13266, 8164, 8017, 1114, 504, 3189, 5619, 16587, 1392, 16588, 5009, 575, 16589, 13299, 13265, 16583, 5588, 13264, 1253, 6534, 6539, 5253, 16590, 1995, 16591, 16593, 2]
// Exports: default

// Module 16586 (SafetyHubPage)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import _modDef3189 from "module_3189" /* 3189 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6534 */;
import MetricEvents from "MetricEvents" /* 6539 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6734 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7962 */;
import InlineNotice6 from "InlineNotice" /* 8017 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 8164 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 13264 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 13266 */;
import useAvailableAgeVerificationMethods from "useAvailableAgeVerificationMethods" /* 16587 */;
import useShouldShowInitialGoogleWalletBanner from "useShouldShowInitialGoogleWalletBanner" /* 16588 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SafetyHubStore from "SafetyHubStore" /* 7986 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c10;
let closure_12;
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
  return authStore2(InlineNotice, obj);
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
  return authStore2(InlineNotice, obj2);
}
function ManualOrAutomatedReviewBanner() {
  let intl;
  let intl2;
  let link;
  let obj2;
  let obj3;
  _require = closure_22();
  let obj = { type: "critical", message: intl.format(_modDef3189.vPoM8y, obj2), role: "alert", action: obj3 };
  const InlineNotice = require("InlineNotice").InlineNotice;
  intl = require("intl").intl;
  obj2 = {
    manualReviewHook(children, arg1) {
      const obj = { onPress: handleManualReviewClick, style: link.link, variant: "text-sm/normal", color: "text-default", children };
      return authStore2(Text_Text.Text, obj, arg1);
    }
  };
  obj3 = { text: intl2.string(require("intl").t.IcA9iD), onPress: handleRetryClick };
  intl2 = require("intl").intl;
  return closure_12(InlineNotice, obj);
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
    tmp5Result = authStore2(AgeCheckLoadingBanner, {});
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
    const InlineNotice = tmp(8017).InlineNotice;
    intl = tmp(1114).intl;
    obj3 = { text: intl2.string(intl7.t.NkTGsC), onPress: handleManualReviewClick };
    intl2 = tmp(1114).intl;
    tmp5Result = authStore2(InlineNotice, obj2);
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
      tmp20 = authStore2(ManualOrAutomatedReviewBanner, {});
    }
    tmp9 = tmp20;
  } else if (stateFromStores === AgeCheckStatus.SUCCESS) {
    const obj2 = { type: "success", message: intl6.format(intl7.t.hyh4ls, obj3), role: "status" };
    const InlineNotice5 = tmp(8017).InlineNotice;
    intl6 = tmp(1114).intl;
    obj3 = {
      loginHook(children) {
          let obj = {
            variant: "text-sm/medium",
            color: "text-link",
            onPress() {
              const obj = closure_1_1(closure_1_3[6]);
              return obj.logout("safety_hub_page_appeal_success", constants.LOGIN);
            },
            children
          };
          return closure_1_12(require("Text/Text").Text, obj);
        }
    };
    tmp9 = authStore2(InlineNotice5, obj2);
  } else if (stateFromStores === AgeCheckStatus.VERIFIED) {
    const obj4 = { type: "success", message: intl4.string(intl7.t["2Qe65J"]), role: "status", action: obj5 };
    const InlineNotice4 = tmp(8017).InlineNotice;
    intl4 = tmp(1114).intl;
    obj5 = { text: intl5.string(intl7.t["2jvQ6K"]), onPress: handleLogInClick };
    intl5 = tmp(1114).intl;
    tmp9 = authStore2(InlineNotice4, obj4);
  } else if (stateFromStores === AgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
    const obj6 = { type: "success", message: intl3.string(intl7.t.Ie7p1Q), role: "status" };
    const InlineNotice3 = tmp(8017).InlineNotice;
    intl3 = tmp(1114).intl;
    tmp9 = authStore2(InlineNotice3, obj6);
  } else if (stateFromStores === AgeCheckStatus.ERROR) {
    const obj7 = { type: "critical", message: intl2.string(intl7.t["4sILBU"]), role: "alert" };
    const InlineNotice2 = tmp(8017).InlineNotice;
    intl2 = tmp(1114).intl;
    tmp9 = authStore2(InlineNotice2, obj7);
  } else if (stateFromStores === AgeCheckStatus.FAILURE) {
    const obj8 = { type: "critical", message: intl.string(intl7.t["40R63o"]), role: "alert" };
    const InlineNotice = tmp(8017).InlineNotice;
    intl = tmp(1114).intl;
    tmp9 = authStore2(InlineNotice, obj8);
  } else if (stateFromStores === AgeCheckStatus.UNDERAGE) {
    tmp9 = authStore2(RetryBanner, {});
  } else if (stateFromStores === AgeCheckStatus.UNDERAGE_MANUAL_REVIEW) {
    tmp9 = authStore2(ManualReviewBanner, {});
  } else {
    tmp9 = authStore2(AgeCheckLoadingBanner, {});
  }
  return tmp9;
}
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: metroImportDefault } = react_native);
const AgeCheckStatus = SafetyHubConstants.AgeCheckStatus;
({ AnalyticEvents: c10, Routes: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, loadingIndicator: { display: "flex", justifyContent: "center", alignItems: "center" }, body: obj3, link: { textDecorationLine: "underline" } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
let closure_22 = createStyles(obj);
let result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  let closure_1;
  let items1;
  let items2;
  let items3;
  let tmp9;
  visible = visible.visible;
  importDefault = undefined;
  let safetyHubFetchError;
  let tmp = closure_22();
  let tmp3 = safetyHubFetchError;
  const tmp4 = require("useSafetyHubLoading")();
  let obj = visible(safetyHubFetchError[20]);
  const tmp2 = importDefault;
  importDefault = obj.useSafetyHubInitialized();
  let obj2 = visible(safetyHubFetchError[21]);
  const state = obj2.useSafetyHubAccountStanding();
  let obj3 = visible(safetyHubFetchError[22]);
  safetyHubFetchError = obj3.useSafetyHubFetchError();
  require("useMountEffect")(() => {
    const obj = SafetyHubActionCreatorsAll;
    const safetyHubData = obj.getSafetyHubData();
    const tmp3 = closure_1;
    if (tmp3) {
      const obj3 = { account_standing: state.state };
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(constants.SAFETY_HUB_VIEWED, obj3);
      const obj4 = { name: MetricEvents.MetricEvents.SAFETY_HUB_VIEW };
      const increment = MonitoringAgentDefault.increment;
      MonitoringAgentDefault;
      increment(obj4);
    }
  });
  const items = [safetyHubFetchError, visible];
  const effect = react.useEffect(() => {
    const tmp = visible;
    if (tmp) {
      if (null != safetyHubFetchError) {
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.openLazy(asyncRequire(16590, dependencyMap.paths), "SafetyHubErrorActionSheet", {});
      }
    }
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("SafetyHubErrorActionSheet");
  }, items);
  const tmp5 = visible;
  if (tmp4) {
    let obj4 = { style: items1, children: closure_12(closure_6, { animating: true, size: "large" }) };
    items1 = [, ];
    ({ container: arr4[0], loadingIndicator: arr4[1] } = tmp);
    tmp9 = closure_12(closure_5, obj4);
  } else {
    tmp9 = null;
    if (null == safetyHubFetchError) {
      const obj5 = { style: tmp.container, children: items3 };
      const obj6 = { style: tmp.body, children: items2 };
      items2 = [closure_12(AutomatedUnderageAppealStatus, {}), closure_12(tmp2(tmp3[31]), {})];
      items3 = [closure_13(closure_5, obj6), closure_12(tmp5(tmp3[32]).ConnectedSafetyHubViolationsContainer, {})];
      tmp9 = closure_13(closure_7, obj5);
    }
  }
  return tmp9;
};
