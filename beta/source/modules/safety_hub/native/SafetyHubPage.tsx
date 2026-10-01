// Module ID: 14300
// Function ID: 14301
// Name: SafetyHubPage
// Dependencies: [19, 17, 7881, 7868, 1074, 21, 6010, 11362, 8047, 1177, 5281, 1115, 504, 3103, 4832, 14301, 1380, 14302, 4836, 576, 14303, 11389, 11361, 14297, 5298, 11360, 1241, 5179, 5184, 4800, 14304, 1981, 14305, 14307, 2]
// Exports: default

// Module 14300 (SafetyHubPage)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import _modDef3103 from "module_3103" /* 3103 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5179 */;
import MetricEvents from "MetricEvents" /* 5184 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6010 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7868 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 8047 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 11360 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 11362 */;
import useAvailableAgeVerificationMethods from "useAvailableAgeVerificationMethods" /* 14301 */;
import useShouldShowInitialGoogleWalletBanner from "useShouldShowInitialGoogleWalletBanner" /* 14302 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SafetyHubStore from "SafetyHubStore" /* 7881 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
  let Button;
  let intl;
  let intl2;
  let obj2;
  const obj = { messageType: native.HelpMessageTypes.ERROR, button: closure_12(Button, obj2), children: intl2.string(intl7.t.dqbMbn) };
  const HelpMessage = native.HelpMessage;
  obj2 = { variant: "secondary", size: "sm", text: intl.string(intl7.t.IcA9iD), onPress: handleRetryClick };
  Button = components_Button_Button.Button;
  intl = intl7.intl;
  intl2 = intl7.intl;
  return closure_12(HelpMessage, obj);
}
function AgeCheckLoadingBanner() {
  let isExpressiveModalV2Enabled;
  let string;
  let t;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled());
  const obj2 = { messageType: native.HelpMessageTypes.INFO, children: string(stateFromStores ? t.PU8nMu : t["nhhy/R"]) };
  const HelpMessage = native.HelpMessage;
  const intl = intl7.intl;
  string = intl.string;
  t = intl7.t;
  return closure_12(HelpMessage, obj2);
}
function ManualOrAutomatedReviewBanner() {
  let Button;
  let intl;
  let intl2;
  let link;
  let obj2;
  let obj3;
  _require = closure_22();
  let obj = { messageType: require("native").HelpMessageTypes.ERROR, button: closure_12(Button, obj2), children: intl2.format(_modDef3103.vPoM8y, obj3) };
  const HelpMessage = require("native").HelpMessage;
  obj2 = { variant: "secondary", size: "sm", text: intl.string(require("intl").t.IcA9iD), onPress: handleRetryClick };
  Button = require("components/Button/Button").Button;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  obj3 = {
    manualReviewHook(children, arg1) {
      const obj = { onPress: handleManualReviewClick, style: link.link, variant: "text-sm/normal", color: "text-default", children };
      return closure_12(Text_Text.Text, obj, arg1);
    }
  };
  return closure_12(HelpMessage, obj);
}
function ManualReviewBanner() {
  let Button;
  let intl;
  let intl2;
  let obj3;
  let tmp5Result;
  const obj = useAvailableAgeVerificationMethods;
  const availableAgeVerificationMethods = obj.useAvailableAgeVerificationMethods();
  const methods = availableAgeVerificationMethods.methods;
  if (availableAgeVerificationMethods.loading) {
    tmp5Result = closure_12(AgeCheckLoadingBanner, {});
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
    const obj2 = { messageType: native.HelpMessageTypes.ERROR, button: closure_12(Button, obj3), children: intl2.string(intl7.t.VTgFYh) };
    const HelpMessage = tmp(1177).HelpMessage;
    obj3 = { variant: "secondary", size: "sm", text: intl.string(intl7.t.NkTGsC), onPress: handleManualReviewClick };
    Button = tmp(5281).Button;
    intl = tmp(1115).intl;
    intl2 = tmp(1115).intl;
    tmp5Result = closure_12(HelpMessage, obj2);
  }
  return tmp5Result;
}
function AutomatedUnderageAppealStatus() {
  let Button;
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
      tmp20 = closure_12(ManualOrAutomatedReviewBanner, {});
    }
    tmp9 = tmp20;
  } else if (stateFromStores === AgeCheckStatus.SUCCESS) {
    const obj2 = { messageType: native.HelpMessageTypes.SUCCESS, children: intl6.format(intl7.t.hyh4ls, obj3) };
    const HelpMessage5 = tmp(1177).HelpMessage;
    intl6 = tmp(1115).intl;
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
    tmp9 = closure_12(HelpMessage5, obj2);
  } else if (stateFromStores === AgeCheckStatus.VERIFIED) {
    const obj4 = { messageType: native.HelpMessageTypes.SUCCESS, button: closure_12(Button, obj5), children: intl5.string(intl7.t["2Qe65J"]) };
    const HelpMessage4 = tmp(1177).HelpMessage;
    obj5 = { variant: "secondary", size: "sm", text: intl4.string(intl7.t["2jvQ6K"]), onPress: handleLogInClick };
    Button = tmp(5281).Button;
    intl4 = tmp(1115).intl;
    intl5 = tmp(1115).intl;
    tmp9 = closure_12(HelpMessage4, obj4);
  } else if (stateFromStores === AgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
    const obj6 = { messageType: native.HelpMessageTypes.SUCCESS, children: intl3.string(intl7.t.Ie7p1Q) };
    const HelpMessage3 = tmp(1177).HelpMessage;
    intl3 = tmp(1115).intl;
    tmp9 = closure_12(HelpMessage3, obj6);
  } else if (stateFromStores === AgeCheckStatus.ERROR) {
    const obj7 = { messageType: native.HelpMessageTypes.ERROR, children: intl2.string(intl7.t["4sILBU"]) };
    const HelpMessage2 = tmp(1177).HelpMessage;
    intl2 = tmp(1115).intl;
    tmp9 = closure_12(HelpMessage2, obj7);
  } else if (stateFromStores === AgeCheckStatus.FAILURE) {
    const obj8 = { messageType: native.HelpMessageTypes.ERROR, children: intl.string(intl7.t["40R63o"]) };
    const HelpMessage = tmp(1177).HelpMessage;
    intl = tmp(1115).intl;
    tmp9 = closure_12(HelpMessage, obj8);
  } else if (stateFromStores === AgeCheckStatus.UNDERAGE) {
    tmp9 = closure_12(RetryBanner, {});
  } else if (stateFromStores === AgeCheckStatus.UNDERAGE_MANUAL_REVIEW) {
    tmp9 = closure_12(ManualReviewBanner, {});
  } else {
    tmp9 = closure_12(AgeCheckLoadingBanner, {});
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
  let obj = visible(safetyHubFetchError[21]);
  const tmp2 = importDefault;
  importDefault = obj.useSafetyHubInitialized();
  let obj2 = visible(safetyHubFetchError[22]);
  const state = obj2.useSafetyHubAccountStanding();
  let obj3 = visible(safetyHubFetchError[23]);
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
        obj2.openLazy(asyncRequire(14304, dependencyMap.paths), "SafetyHubErrorActionSheet", {});
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
      items2 = [closure_12(AutomatedUnderageAppealStatus, {}), closure_12(tmp2(tmp3[32]), {})];
      items3 = [closure_13(closure_5, obj6), closure_12(tmp5(tmp3[33]).ConnectedSafetyHubViolationsContainer, {})];
      tmp9 = closure_13(closure_7, obj5);
    }
  }
  return tmp9;
};
