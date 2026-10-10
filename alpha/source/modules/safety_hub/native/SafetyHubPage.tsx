// Module ID: 14995
// Function ID: 14996
// Name: SafetyHubPage
// Dependencies: [19, 17, 7536, 7512, 1085, 21, 5930, 11474, 7716, 558, 576, 1126, 7567, 504, 3184, 5088, 14996, 1398, 14997, 5092, 587, 14998, 11507, 11473, 14992, 5396, 11472, 1265, 5729, 5734, 5056, 14999, 2000, 15000, 15002, 2]
// Exports: default

// Module 14995 (SafetyHubPage)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import _modDef3184 from "module_3184" /* 3184 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import Text_Text from "Text/Text" /* 5088 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5729 */;
import MetricEvents from "MetricEvents" /* 5734 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 5930 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7512 */;
import InlineNotice6 from "InlineNotice" /* 7567 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 7716 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 11472 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 11474 */;
import useAvailableAgeVerificationMethods from "useAvailableAgeVerificationMethods" /* 14996 */;
import useShouldShowInitialGoogleWalletBanner from "useShouldShowInitialGoogleWalletBanner" /* 14997 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SafetyHubStore from "SafetyHubStore" /* 7536 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles_mod from "createStyles" /* 5092 */;
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
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: metroImportDefault } = react_native);
const AgeCheckStatus = SafetyHubConstants.AgeCheckStatus;
({ AnalyticEvents: c10, Routes: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function RetryBanner() {
  let first;
  let intl2;
  let obj3;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl7.t.dqbMbn);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { type: "critical", message: first, role: "alert", action: obj3 };
    obj3 = { text: intl2.string(intl7.t.IcA9iD), onClick: handleRetryClick };
    const InlineNotice = tmp(7567).InlineNotice;
    intl2 = tmp(1126).intl;
    const tmp9 = authStore2(InlineNotice, obj2);
    cResult[1] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (function RetryBanner() {
  let intl;
  let intl2;
  let obj2;
  const obj = { type: "critical", message: intl.string(intl7.t.dqbMbn), role: "alert", action: obj2 };
  const InlineNotice = InlineNotice6.InlineNotice;
  intl = intl7.intl;
  obj2 = { text: intl2.string(intl7.t.IcA9iD), onClick: handleRetryClick };
  intl2 = intl7.intl;
  return authStore2(InlineNotice, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function AgeCheckLoadingBanner() {
  let isExpressiveModalV2Enabled;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function n() {
      return isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const intl = tmp(1126).intl;
    const string = intl.string;
    const t = tmp(1126).t;
    const stringResult = string(stateFromStores ? t.PU8nMu : t["nhhy/R"]);
    cResult[2] = stateFromStores;
    cResult[3] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== tmp8) {
    const obj2 = { type: "info", message: tmp8, role: "status" };
    const tmp12 = authStore2(InlineNotice6.InlineNotice, obj2);
    cResult[4] = tmp8;
    cResult[5] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[5];
  }
  return tmp10;
}) : (function AgeCheckLoadingBanner() {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function ManualOrAutomatedReviewBanner() {
  let intl2;
  let link;
  let tmp10;
  let tmp5;
  let tmp8;
  let obj = require("react");
  const cResult = obj.c(5);
  const tmp4 = closure_22();
  _require = tmp4;
  if (cResult[0] !== tmp4) {
    const intl = tmp(1126).intl;
    const obj2 = {
      manualReviewHook(children, arg1) {
          const obj = { onPress: handleManualReviewClick, style: link.link, variant: "text-sm/normal", color: "text-default", children };
          return authStore2(Text_Text.Text, obj, arg1);
        }
    };
    const formatResult = intl.format(_modDef3184.vPoM8y, obj2);
    cResult[0] = tmp4;
    cResult[1] = formatResult;
    tmp5 = formatResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { text: intl2.string(require("intl").t.IcA9iD), onClick: handleRetryClick };
    intl2 = tmp(1126).intl;
    cResult[2] = obj3;
    tmp8 = obj3;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp5) {
    const obj4 = { type: "critical", message: tmp5, role: "alert", action: tmp8 };
    const tmp12 = closure_12(require("InlineNotice").InlineNotice, obj4);
    cResult[3] = tmp5;
    cResult[4] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[4];
  }
  return tmp10;
}) : (function ManualOrAutomatedReviewBanner() {
  let intl;
  let intl2;
  let link;
  let obj2;
  let obj3;
  _require = closure_22();
  let obj = { type: "critical", message: intl.format(_modDef3184.vPoM8y, obj2), role: "alert", action: obj3 };
  const InlineNotice = require("InlineNotice").InlineNotice;
  intl = require("intl").intl;
  obj2 = {
    manualReviewHook(children, arg1) {
      const obj = { onPress: handleManualReviewClick, style: link.link, variant: "text-sm/normal", color: "text-default", children };
      return authStore2(Text_Text.Text, obj, arg1);
    }
  };
  obj3 = { text: intl2.string(require("intl").t.IcA9iD), onClick: handleRetryClick };
  intl2 = require("intl").intl;
  return closure_12(InlineNotice, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function ManualReviewBanner() {
  let intl2;
  let obj4;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = useAvailableAgeVerificationMethods;
  const availableAgeVerificationMethods = obj2.useAvailableAgeVerificationMethods();
  const methods = availableAgeVerificationMethods.methods;
  if (availableAgeVerificationMethods.loading) {
    let first;
    const _Symbol5 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp27 = authStore2(closure_18, {});
      cResult[0] = tmp27;
      first = tmp27;
    } else {
      first = cResult[0];
    }
    tmp7 = first;
  } else {
    let tmp17;
    let tmp19;
    if (null != methods) {
      if (0 !== methods.length) {
        if (methods.every((method) => method.method === require("user").AgeAssuranceMethod.GOOGLE_WALLET)) {
          let tmp12;
          const _Symbol2 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp15 = authStore2(closure_19, {});
            cResult[3] = tmp15;
            tmp12 = tmp15;
          } else {
            tmp12 = cResult[3];
          }
          tmp7 = tmp12;
        } else {
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp10 = authStore2(closure_17, {});
            cResult[4] = tmp10;
            tmp7 = tmp10;
          } else {
            tmp7 = cResult[4];
          }
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(intl7.t.VTgFYh);
      cResult[1] = stringResult;
      tmp17 = stringResult;
    } else {
      tmp17 = cResult[1];
    }
    const _Symbol4 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { type: "critical", message: tmp17, role: "alert", action: obj4 };
      obj4 = { text: intl2.string(intl7.t.NkTGsC), onClick: handleManualReviewClick };
      const InlineNotice = tmp(7567).InlineNotice;
      intl2 = tmp(1126).intl;
      const tmp22 = authStore2(InlineNotice, obj3);
      cResult[2] = tmp22;
      tmp19 = tmp22;
    } else {
      tmp19 = cResult[2];
    }
    tmp7 = tmp19;
  }
  return tmp7;
}) : (function ManualReviewBanner() {
  let intl;
  let intl2;
  let obj3;
  let tmp5Result;
  const obj = useAvailableAgeVerificationMethods;
  const availableAgeVerificationMethods = obj.useAvailableAgeVerificationMethods();
  const methods = availableAgeVerificationMethods.methods;
  if (availableAgeVerificationMethods.loading) {
    tmp5Result = authStore2(closure_18, {});
  } else {
    if (null != methods) {
      if (0 !== methods.length) {
        if (methods.every((method) => method.method === require("user").AgeAssuranceMethod.GOOGLE_WALLET)) {
          tmp5Result = tmp5(closure_19, {});
        } else {
          tmp5Result = tmp5(closure_17, {});
        }
      }
    }
    const obj2 = { type: "critical", message: intl.string(intl7.t.VTgFYh), role: "alert", action: obj3 };
    const InlineNotice = tmp(7567).InlineNotice;
    intl = tmp(1126).intl;
    obj3 = { text: intl2.string(intl7.t.NkTGsC), onClick: handleManualReviewClick };
    intl2 = tmp(1126).intl;
    tmp5Result = authStore2(InlineNotice, obj2);
  }
  return tmp5Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function AutomatedUnderageAppealStatus() {
  let ageCheckStatus;
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let intl6;
  let obj3;
  let obj5;
  let tmp10;
  let tmp4;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function n() {
      return ageCheckStatus.getAgeCheckStatus();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmpResult2 = useShouldShowInitialGoogleWalletBanner;
  const shouldShowInitialGoogleWalletBanner = tmpResult2.useShouldShowInitialGoogleWalletBanner();
  if (stateFromStores === AgeCheckStatus.NONE) {
    let tmp40;
    if (cResult[2] !== shouldShowInitialGoogleWalletBanner) {
      let tmp41 = null;
      if (shouldShowInitialGoogleWalletBanner) {
        tmp41 = authStore2(closure_19, {});
      }
      cResult[2] = shouldShowInitialGoogleWalletBanner;
      cResult[3] = tmp41;
      tmp40 = tmp41;
    } else {
      tmp40 = cResult[3];
    }
    tmp10 = tmp40;
  } else if (stateFromStores === AgeCheckStatus.SUCCESS) {
    let tmp37;
    const _Symbol9 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { type: "positive", message: intl6.format(intl7.t.hyh4ls, obj3), role: "status" };
      const InlineNotice5 = tmp(7567).InlineNotice;
      intl6 = tmp(1126).intl;
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
      const tmp39 = authStore2(InlineNotice5, obj2);
      cResult[4] = tmp39;
      tmp37 = tmp39;
    } else {
      tmp37 = cResult[4];
    }
    tmp10 = tmp37;
  } else if (stateFromStores === AgeCheckStatus.VERIFIED) {
    let tmp31;
    let tmp33;
    const _Symbol7 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1126).intl;
      const stringResult = intl4.string(intl7.t["2Qe65J"]);
      cResult[5] = stringResult;
      tmp31 = stringResult;
    } else {
      tmp31 = cResult[5];
    }
    const _Symbol8 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { type: "positive", message: tmp31, role: "status", action: obj5 };
      obj5 = { text: intl5.string(intl7.t["2jvQ6K"]), onClick: handleLogInClick };
      const InlineNotice4 = tmp(7567).InlineNotice;
      intl5 = tmp(1126).intl;
      const tmp36 = authStore2(InlineNotice4, obj4);
      cResult[6] = tmp36;
      tmp33 = tmp36;
    } else {
      tmp33 = cResult[6];
    }
    tmp10 = tmp33;
  } else if (stateFromStores === AgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
    let tmp28;
    const _Symbol6 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { type: "positive", message: intl3.string(intl7.t.Ie7p1Q), role: "status" };
      const InlineNotice3 = tmp(7567).InlineNotice;
      intl3 = tmp(1126).intl;
      const tmp30 = authStore2(InlineNotice3, obj6);
      cResult[7] = tmp30;
      tmp28 = tmp30;
    } else {
      tmp28 = cResult[7];
    }
    tmp10 = tmp28;
  } else if (stateFromStores === AgeCheckStatus.ERROR) {
    let tmp25;
    const _Symbol5 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { type: "critical", message: intl2.string(intl7.t["4sILBU"]), role: "alert" };
      const InlineNotice2 = tmp(7567).InlineNotice;
      intl2 = tmp(1126).intl;
      const tmp27 = authStore2(InlineNotice2, obj7);
      cResult[8] = tmp27;
      tmp25 = tmp27;
    } else {
      tmp25 = cResult[8];
    }
    tmp10 = tmp25;
  } else if (stateFromStores === AgeCheckStatus.FAILURE) {
    let tmp22;
    const _Symbol4 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { type: "critical", message: intl.string(intl7.t["40R63o"]), role: "alert" };
      const InlineNotice = tmp(7567).InlineNotice;
      intl = tmp(1126).intl;
      const tmp24 = authStore2(InlineNotice, obj8);
      cResult[9] = tmp24;
      tmp22 = tmp24;
    } else {
      tmp22 = cResult[9];
    }
    tmp10 = tmp22;
  } else if (stateFromStores === AgeCheckStatus.UNDERAGE) {
    let tmp18;
    const _Symbol3 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp21 = authStore2(closure_17, {});
      cResult[10] = tmp21;
      tmp18 = tmp21;
    } else {
      tmp18 = cResult[10];
    }
    tmp10 = tmp18;
  } else if (stateFromStores === AgeCheckStatus.UNDERAGE_MANUAL_REVIEW) {
    let tmp14;
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp17 = authStore2(closure_20, {});
      cResult[11] = tmp17;
      tmp14 = tmp17;
    } else {
      tmp14 = cResult[11];
    }
    tmp10 = tmp14;
  } else {
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp13 = authStore2(closure_18, {});
      cResult[12] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[12];
    }
  }
  return tmp10;
}) : (function AutomatedUnderageAppealStatus() {
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
      tmp20 = authStore2(closure_19, {});
    }
    tmp9 = tmp20;
  } else if (stateFromStores === AgeCheckStatus.SUCCESS) {
    const obj2 = { type: "positive", message: intl6.format(intl7.t.hyh4ls, obj3), role: "status" };
    const InlineNotice5 = tmp(7567).InlineNotice;
    intl6 = tmp(1126).intl;
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
    const obj4 = { type: "positive", message: intl4.string(intl7.t["2Qe65J"]), role: "status", action: obj5 };
    const InlineNotice4 = tmp(7567).InlineNotice;
    intl4 = tmp(1126).intl;
    obj5 = { text: intl5.string(intl7.t["2jvQ6K"]), onClick: handleLogInClick };
    intl5 = tmp(1126).intl;
    tmp9 = authStore2(InlineNotice4, obj4);
  } else if (stateFromStores === AgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
    const obj6 = { type: "positive", message: intl3.string(intl7.t.Ie7p1Q), role: "status" };
    const InlineNotice3 = tmp(7567).InlineNotice;
    intl3 = tmp(1126).intl;
    tmp9 = authStore2(InlineNotice3, obj6);
  } else if (stateFromStores === AgeCheckStatus.ERROR) {
    const obj7 = { type: "critical", message: intl2.string(intl7.t["4sILBU"]), role: "alert" };
    const InlineNotice2 = tmp(7567).InlineNotice;
    intl2 = tmp(1126).intl;
    tmp9 = authStore2(InlineNotice2, obj7);
  } else if (stateFromStores === AgeCheckStatus.FAILURE) {
    const obj8 = { type: "critical", message: intl.string(intl7.t["40R63o"]), role: "alert" };
    const InlineNotice = tmp(7567).InlineNotice;
    intl = tmp(1126).intl;
    tmp9 = authStore2(InlineNotice, obj8);
  } else if (stateFromStores === AgeCheckStatus.UNDERAGE) {
    tmp9 = authStore2(closure_17, {});
  } else if (stateFromStores === AgeCheckStatus.UNDERAGE_MANUAL_REVIEW) {
    tmp9 = authStore2(closure_20, {});
  } else {
    tmp9 = authStore2(closure_18, {});
  }
  return tmp9;
});
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
  let obj = visible(safetyHubFetchError[22]);
  const tmp2 = importDefault;
  importDefault = obj.useSafetyHubInitialized();
  let obj2 = visible(safetyHubFetchError[23]);
  const state = obj2.useSafetyHubAccountStanding();
  let obj3 = visible(safetyHubFetchError[24]);
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
        obj2.openLazy(asyncRequire(14999, dependencyMap.paths), "SafetyHubErrorActionSheet", {});
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
      items2 = [closure_12(closure_21, {}), closure_12(tmp2(tmp3[33]), {})];
      items3 = [closure_13(closure_5, obj6), closure_12(tmp5(tmp3[34]).ConnectedSafetyHubViolationsContainer, {})];
      tmp9 = closure_13(closure_7, obj5);
    }
  }
  return tmp9;
};
