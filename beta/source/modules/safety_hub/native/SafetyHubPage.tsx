// Module ID: 15032
// Function ID: 15033
// Name: SafetyHubPage
// Dependencies: [19, 17, 8707, 8696, 1078, 21, 6832, 12014, 8870, 558, 568, 1181, 5188, 1119, 504, 3070, 4754, 15033, 1384, 15034, 4758, 580, 15035, 12041, 12013, 15029, 5203, 12012, 1245, 5086, 5091, 4725, 15036, 1984, 15037, 15039, 2]
// Exports: default

// Module 15032 (SafetyHubPage)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import native from "native" /* 1181 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import _modDef3070 from "module_3070" /* 3070 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import Text_Text from "Text/Text" /* 4754 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5086 */;
import MetricEvents from "MetricEvents" /* 5091 */;
import components_Button_Button from "components/Button/Button" /* 5188 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6832 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 8870 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 12012 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 12014 */;
import useAvailableAgeVerificationMethods from "useAvailableAgeVerificationMethods" /* 15033 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8707 */;

const require = globalThis.__r;

const useShouldShowInitialGoogleWalletBanner = hyh4ls(15034);
require = fn;
function handleLogInClick() {
  AuthenticationActionCreatorsDefault.closeSuspendedUser();
}
function handleRetryClick() {
  AutomatedUnderageAppealModalActionCreatorsDefault.openV2("");
}
function handleManualReviewClick() {
  const result = ManualReviewActionCreators.handleManualReviewCta();
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const AgeCheckStatus = fn(8696).AgeCheckStatus;
const Constants = fn(1078);
({ AnalyticEvents: c10, Routes: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { messageType: tmp(1181).HelpMessageTypes.ERROR, button: null, children: null };
    const obj3 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl = tmp(1119).intl;
    obj3.text = intl.string(tmp(1119).t.IcA9iD);
    obj3.onPress = handleRetryClick;
    obj2.button = __initData(tmp(5188).Button, obj3);
    const intl2 = tmp(1119).intl;
    obj2.children = intl2.string(tmp(1119).t.dqbMbn);
    const tmp7 = __initData(tmp(1181).HelpMessage, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const obj = { messageType: native.HelpMessageTypes.ERROR, button: null, children: null };
  const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.IcA9iD);
  obj2.onPress = handleRetryClick;
  obj.button = __initData(components_Button_Button.Button, obj2);
  const intl2 = util.intl;
  obj.children = intl2.string(util.t.dqbMbn);
  return __initData(native.HelpMessage, obj);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
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
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const intl = tmp(1119).intl;
    const t = tmp(1119).t;
    const stringResult = intl.string(stateFromStores ? t.PU8nMu : t["nhhy/R"]);
    cResult[2] = stateFromStores;
    cResult[3] = stringResult;
  } else {
    if (cResult[4] !== cResult[3]) {
      const obj2 = { messageType: tmp(1181).HelpMessageTypes.INFO, children: tmp8 };
      const tmp13 = __initData(tmp(1181).HelpMessage, obj2);
      cResult[4] = tmp8;
      cResult[5] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
}) : (() => {
  const items = [SafetyHubStore];
  const stateFromStores = initialize.useStateFromStores(items, () => isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled());
  const obj2 = { messageType: native.HelpMessageTypes.INFO, children: null };
  const intl = util.intl;
  const t = util.t;
  obj2.children = intl.string(stateFromStores ? t.PU8nMu : t["nhhy/R"]);
  return __initData(native.HelpMessage, obj2);
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(5);
  const tmp4 = closure_22();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl = tmp(1119).intl;
    obj2.text = intl.string(tmp(1119).t.IcA9iD);
    obj2.onPress = handleRetryClick;
    const tmp8 = closure_12(tmp(5188).Button, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const intl2 = tmp(1119).intl;
    const obj3 = {
      manualReviewHook(children, arg1) {
          return __initData(Text_Text.Text, { onPress: handleManualReviewClick, style: link.link, variant: "text-sm/normal", color: "text-default", children }, arg1);
        }
    };
    const formatResult = intl2.format(_modDef3070.vPoM8y, obj3);
    cResult[1] = tmp4;
    cResult[2] = formatResult;
    let tmp9 = formatResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp9) {
    const obj4 = { messageType: tmp(1181).HelpMessageTypes.ERROR, button: first, children: tmp9 };
    const tmp14 = closure_12(tmp(1181).HelpMessage, obj4);
    cResult[3] = tmp9;
    cResult[4] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  return tmp12;
}) : (() => {
  _require = closure_22();
  const obj = { messageType: require("native").HelpMessageTypes.ERROR, button: null, children: null };
  const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = require("util").intl;
  obj2.text = intl.string(require("util").t.IcA9iD);
  obj2.onPress = handleRetryClick;
  obj.button = closure_12(require("components/Button/Button").Button, obj2);
  const intl2 = require("util").intl;
  obj.children = intl2.format(_modDef3070.vPoM8y, {
    manualReviewHook(children, arg1) {
      return __initData(Text_Text.Text, { onPress: handleManualReviewClick, style: link.link, variant: "text-sm/normal", color: "text-default", children }, arg1);
    }
  });
  return closure_12(require("native").HelpMessage, obj);
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let stringResult = dependencyMap;
  const cResult = c.c(4);
  const availableAgeVerificationMethods = useAvailableAgeVerificationMethods.useAvailableAgeVerificationMethods();
  const methods = availableAgeVerificationMethods.methods;
  if (availableAgeVerificationMethods.loading) {
    const _Symbol4 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp27 = __initData(closure_18, {});
      cResult[0] = tmp27;
      let first = tmp27;
    } else {
      first = cResult[0];
    }
  } else {
    if (null != methods) {
      if (0 !== methods.length) {
        if (methods.every((method) => method.method === require("user").AgeAssuranceMethod.GOOGLE_WALLET)) {
          const _Symbol2 = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp15 = __initData(closure_19, {});
            cResult[2] = tmp15;
          }
        } else {
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp10 = __initData(closure_17, {});
            cResult[3] = tmp10;
            let tmp7 = tmp10;
          } else {
            tmp7 = cResult[3];
          }
          return tmp7;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { messageType: tmp(1181).HelpMessageTypes.ERROR, button: null, children: null };
      const obj4 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl = tmp(1119).intl;
      obj4.text = intl.string(tmp(1119).t.NkTGsC);
      obj4.onPress = handleManualReviewClick;
      obj3.button = __initData(tmp(5188).Button, obj4);
      const intl2 = tmp(1119).intl;
      stringResult = intl2.string(tmp(1119).t.VTgFYh);
      obj3.children = stringResult;
      const tmp21 = __initData(tmp(1181).HelpMessage, obj3);
      cResult[1] = tmp21;
    }
  }
}) : (() => {
  const availableAgeVerificationMethods = useAvailableAgeVerificationMethods.useAvailableAgeVerificationMethods();
  const methods = availableAgeVerificationMethods.methods;
  if (availableAgeVerificationMethods.loading) {
    let tmp5Result = __initData(closure_18, {});
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
    const obj2 = { messageType: tmp(1181).HelpMessageTypes.ERROR, button: null, children: null };
    const obj3 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl = tmp(1119).intl;
    obj3.text = intl.string(tmp(1119).t.NkTGsC);
    obj3.onPress = handleManualReviewClick;
    obj2.button = __initData(tmp(5188).Button, obj3);
    const intl2 = tmp(1119).intl;
    obj2.children = intl2.string(tmp(1119).t.VTgFYh);
    tmp5Result = __initData(tmp(1181).HelpMessage, obj2);
  }
  return tmp5Result;
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let hyh4ls = require;
  let formatResult = dependencyMap;
  const cResult = c.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function n() {
      return ageCheckStatus.getAgeCheckStatus();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp3, tmp4);
  const hyh4lsResult = initialize;
  const shouldShowInitialGoogleWalletBanner = useShouldShowInitialGoogleWalletBanner.useShouldShowInitialGoogleWalletBanner();
  if (stateFromStores === AgeCheckStatus.NONE) {
    if (cResult[2] !== shouldShowInitialGoogleWalletBanner) {
      let tmp45 = null;
      if (shouldShowInitialGoogleWalletBanner) {
        tmp45 = __initData(closure_19, {});
      }
      cResult[2] = shouldShowInitialGoogleWalletBanner;
      cResult[3] = tmp45;
    }
  } else if (stateFromStores === tmp8.SUCCESS) {
    const _Symbol8 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { messageType: native.HelpMessageTypes.SUCCESS, children: null };
      const intl6 = util.intl;
      hyh4ls = util.t.hyh4ls;
      const obj3 = {
        loginHook(children) {
              return closure_1_12(require("Text/Text").Text, {
                variant: "text-sm/medium",
                color: "text-link",
                onPress() {
                  return closure_1_1(closure_1_3[6]).logout("safety_hub_page_appeal_success", constants.LOGIN);
                },
                children
              });
            }
      };
      formatResult = intl6.format(hyh4ls, obj3);
      obj2.children = formatResult;
      const tmp42 = __initData(native.HelpMessage, obj2);
      cResult[4] = tmp42;
    }
  } else if (stateFromStores === tmp8.VERIFIED) {
    const _Symbol7 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { messageType: native.HelpMessageTypes.SUCCESS, button: null, children: null };
      const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl4 = util.intl;
      obj5.text = intl4.string(util.t["2jvQ6K"]);
      obj5.onPress = handleLogInClick;
      obj4.button = __initData(components_Button_Button.Button, obj5);
      const intl5 = util.intl;
      obj4.children = intl5.string(util.t["2Qe65J"]);
      const tmp38 = __initData(native.HelpMessage, obj4);
      cResult[5] = tmp38;
    }
  } else if (stateFromStores === tmp8.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
    const _Symbol6 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { messageType: native.HelpMessageTypes.SUCCESS, children: null };
      const intl3 = util.intl;
      obj6.children = intl3.string(util.t.Ie7p1Q);
      const tmp33 = __initData(native.HelpMessage, obj6);
      cResult[6] = tmp33;
    }
  } else if (stateFromStores === tmp8.ERROR) {
    const _Symbol5 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { messageType: native.HelpMessageTypes.ERROR, children: null };
      const intl2 = util.intl;
      obj7.children = intl2.string(util.t["4sILBU"]);
      const tmp29 = __initData(native.HelpMessage, obj7);
      cResult[7] = tmp29;
    }
  } else if (stateFromStores === tmp8.FAILURE) {
    const _Symbol4 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { messageType: native.HelpMessageTypes.ERROR, children: null };
      const intl = util.intl;
      obj8.children = intl.string(util.t["40R63o"]);
      const tmp25 = __initData(native.HelpMessage, obj8);
      cResult[8] = tmp25;
    }
  } else if (stateFromStores === tmp8.UNDERAGE) {
    const _Symbol3 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp21 = __initData(closure_17, {});
      cResult[9] = tmp21;
    }
  } else if (stateFromStores === tmp8.UNDERAGE_MANUAL_REVIEW) {
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp16 = __initData(closure_20, {});
      cResult[10] = tmp16;
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp12 = __initData(closure_18, {});
      cResult[11] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[11];
    }
    return tmp9;
  }
}) : (() => {
  const items = [SafetyHubStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus());
  useShouldShowInitialGoogleWalletBanner;
  if (stateFromStores === AgeCheckStatus.NONE) {
    let tmp20 = null;
    if (tmp5) {
      tmp20 = __initData(closure_19, {});
    }
    let tmp9 = tmp20;
  } else if (stateFromStores === tmp6.SUCCESS) {
    const obj2 = { messageType: tmp(1181).HelpMessageTypes.SUCCESS, children: null };
    const intl6 = tmp(1119).intl;
    const obj3 = {
      loginHook(children) {
          return closure_1_12(require("Text/Text").Text, {
            variant: "text-sm/medium",
            color: "text-link",
            onPress() {
              return closure_1_1(closure_1_3[6]).logout("safety_hub_page_appeal_success", constants.LOGIN);
            },
            children
          });
        }
    };
    obj2.children = intl6.format(tmp(1119).t.hyh4ls, obj3);
    tmp9 = __initData(tmp(1181).HelpMessage, obj2);
  } else if (stateFromStores === tmp6.VERIFIED) {
    const obj4 = { messageType: tmp(1181).HelpMessageTypes.SUCCESS, button: null, children: null };
    const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl4 = tmp(1119).intl;
    obj5.text = intl4.string(tmp(1119).t["2jvQ6K"]);
    obj5.onPress = handleLogInClick;
    obj4.button = __initData(tmp(5188).Button, obj5);
    const intl5 = tmp(1119).intl;
    obj4.children = intl5.string(tmp(1119).t["2Qe65J"]);
    tmp9 = __initData(tmp(1181).HelpMessage, obj4);
  } else if (stateFromStores === tmp6.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
    const obj6 = { messageType: tmp(1181).HelpMessageTypes.SUCCESS, children: null };
    const intl3 = tmp(1119).intl;
    obj6.children = intl3.string(tmp(1119).t.Ie7p1Q);
    tmp9 = __initData(tmp(1181).HelpMessage, obj6);
  } else if (stateFromStores === tmp6.ERROR) {
    const obj7 = { messageType: tmp(1181).HelpMessageTypes.ERROR, children: null };
    const intl2 = tmp(1119).intl;
    obj7.children = intl2.string(tmp(1119).t["4sILBU"]);
    tmp9 = __initData(tmp(1181).HelpMessage, obj7);
  } else if (stateFromStores === tmp6.FAILURE) {
    const obj8 = { messageType: tmp(1181).HelpMessageTypes.ERROR, children: null };
    const intl = tmp(1119).intl;
    obj8.children = intl.string(tmp(1119).t["40R63o"]);
    tmp9 = __initData(tmp(1181).HelpMessage, obj8);
  } else if (stateFromStores === tmp6.UNDERAGE) {
    tmp9 = __initData(closure_17, {});
  } else if (stateFromStores === tmp6.UNDERAGE_MANUAL_REVIEW) {
    tmp9 = __initData(closure_20, {});
  } else {
    tmp9 = __initData(closure_18, {});
  }
  return tmp9;
});
const createStyles = fn(4758);
let obj7 = { container: { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 }, loadingIndicator: { display: "flex", justifyContent: "center", alignItems: "center" }, body: null, link: null };
let obj8 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
obj7.body = { gap: nativeDefault.space.PX_8 };
obj7.link = { textDecorationLine: "underline" };
let closure_22 = createStyles.createStyles(obj7);
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  visible = visible.visible;
  importDefault = undefined;
  let safetyHubFetchError;
  const tmp = closure_22();
  const tmp2 = importDefault;
  const tmp4 = require("useSafetyHubLoading")();
  const tmp5 = visible;
  importDefault = visible(safetyHubFetchError[23]).useSafetyHubInitialized();
  const obj = visible(safetyHubFetchError[23]);
  state = visible(safetyHubFetchError[24]).useSafetyHubAccountStanding();
  let obj2 = visible(safetyHubFetchError[24]);
  safetyHubFetchError = visible(safetyHubFetchError[25]).useSafetyHubFetchError();
  require("useMountEffect")(() => {
    const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
    if (closure_1) {
      const obj3 = { account_standing: state.state };
      AnalyticsUtilsDefault.track(constants.SAFETY_HUB_VIEWED, obj3);
      const obj5 = { name: MetricEvents.MetricEvents.SAFETY_HUB_VIEW };
      MonitoringAgentDefault.increment(obj5);
    }
  });
  const items = [safetyHubFetchError, visible];
  const effect = noop.useEffect(() => {
    if (visible) {
      if (null != safetyHubFetchError) {
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15036, dependencyMap.paths), "SafetyHubErrorActionSheet", {});
      }
    }
    ActionSheetActionCreatorsDefault.hideActionSheet("SafetyHubErrorActionSheet");
  }, items);
  if (tmp4) {
    let obj4 = { style: null, children: null };
    const items1 = [, ];
    ({ container: arr4[0], loadingIndicator: arr4[1] } = tmp);
    obj4.style = items1;
    obj4.children = closure_12(closure_6, { animating: true, size: "large" });
    let tmp9 = closure_12(closure_5, obj4);
  } else {
    tmp9 = null;
    if (null == safetyHubFetchError) {
      let obj5 = { style: tmp.container, children: null };
      const obj6 = { style: tmp.body, children: null };
      const items2 = [closure_12(closure_21, {}), closure_12(tmp2(tmp3[34]), {})];
      obj6.children = items2;
      const items3 = [closure_13(closure_5, obj6), closure_12(tmp5(tmp3[35]).ConnectedSafetyHubViolationsContainer, {})];
      obj5.children = items3;
      tmp9 = closure_13(closure_7, obj5);
    }
  }
  return tmp9;
};
