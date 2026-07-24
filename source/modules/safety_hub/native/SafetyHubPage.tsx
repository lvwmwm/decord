// Module ID: 13703
// Function ID: 105174
// Name: AutomatedUnderageAppealStatus
// Dependencies: [31, 27, 11053, 7589, 653, 33, 1212, 4126, 5588, 1273, 566, 4130, 689, 13704, 11082, 11060, 13705, 4559, 11059, 675, 6836, 6841, 4098, 13706, 1934, 13707, 13709, 2]
// Exports: default

// Module 13703 (AutomatedUnderageAppealStatus)
import result from "result";
import get_ActivityIndicator from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AgeCheckStatus } from "SafetyHubLinks";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function AutomatedUnderageAppealStatus() {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const type = (function getAutomatedAppealStatusMessage(arg0) {
    if (outer1_9.SUCCESS === arg0) {
      let obj = {};
      const intl4 = outer1_0(outer1_3[6]).intl;
      obj = {
        loginHook(children) {
            const obj = {
              variant: "text-sm/medium",
              color: "text-link",
              onPress() {
                return outer3_1(outer3_3[8]).logout("safety_hub_page_appeal_success", outer3_11.LOGIN);
              },
              children
            };
            return outer2_12(outer2_0(outer2_3[7]).Text, obj);
          }
      };
      obj.message = intl4.format(outer1_0(outer1_3[6]).t.hyh4ls, obj);
      obj.type = outer1_0(outer1_3[9]).HelpMessageTypes.SUCCESS;
      return obj;
    } else if (outer1_9.ERROR === arg0) {
      const obj1 = {};
      const intl3 = outer1_0(outer1_3[6]).intl;
      obj1.message = intl3.string(outer1_0(outer1_3[6]).t["4sILBU"]);
      obj1.type = outer1_0(outer1_3[9]).HelpMessageTypes.ERROR;
      return obj1;
    } else if (outer1_9.FAILURE === arg0) {
      const obj2 = {};
      const intl2 = outer1_0(outer1_3[6]).intl;
      obj2.message = intl2.string(outer1_0(outer1_3[6]).t["40R63o"]);
      obj2.type = outer1_0(outer1_3[9]).HelpMessageTypes.ERROR;
      return obj2;
    } else if (outer1_9.LOADING === arg0) {
      obj = {};
      const intl = outer1_0(outer1_3[6]).intl;
      obj.message = intl.string(outer1_0(outer1_3[6]).t["nhhy/R"]);
      obj.type = outer1_0(outer1_3[9]).HelpMessageTypes.INFO;
      return obj;
    } else {
      return { message: null, type: null };
    }
  })(obj.useStateFromStores(items, () => outer1_8.getAgeCheckStatus())).type;
  let tmp3 = null;
  if (null != type) {
    obj = { messageType: type, children: tmp2 };
    tmp3 = callback(require(1273) /* Button */.HelpMessage, obj);
  }
  return tmp3;
}
({ View: closure_5, ActivityIndicator: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ AnalyticEvents: closure_10, Routes: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.loadingIndicator = { display: "flex", justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.body = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  visible = visible.visible;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = visible(safetyHubFetchError[14]);
  const importDefault = obj.useSafetyHubInitialized();
  let obj1 = visible(safetyHubFetchError[15]);
  let closure_2 = obj1.useSafetyHubAccountStanding();
  const tmp2 = importDefault(safetyHubFetchError[13])();
  safetyHubFetchError = visible(safetyHubFetchError[16]).useSafetyHubFetchError();
  importDefault(safetyHubFetchError[17])(() => {
    let obj = lib(safetyHubFetchError[18]);
    const safetyHubData = obj.getSafetyHubData();
    if (callback) {
      obj = { account_standing: lib.state };
      callback(safetyHubFetchError[19]).track(outer1_10.SAFETY_HUB_VIEWED, obj);
      const obj2 = callback(safetyHubFetchError[19]);
      obj = { name: visible(safetyHubFetchError[21]).MetricEvents.SAFETY_HUB_VIEW };
      callback(safetyHubFetchError[20]).increment(obj);
      const obj4 = callback(safetyHubFetchError[20]);
    }
  });
  const items = [safetyHubFetchError, visible];
  const effect = React.useEffect(() => {
    if (visible) {
      if (null != safetyHubFetchError) {
        callback(safetyHubFetchError[22]).openLazy(visible(safetyHubFetchError[24])(safetyHubFetchError[23], safetyHubFetchError.paths), "SafetyHubErrorActionSheet", {});
        const obj2 = callback(safetyHubFetchError[22]);
      }
    }
    callback(safetyHubFetchError[22]).hideActionSheet("SafetyHubErrorActionSheet");
  }, items);
  if (tmp2) {
    obj = {};
    const items1 = [, ];
    ({ container: arr4[0], loadingIndicator: arr4[1] } = tmp);
    obj.style = items1;
    obj.children = callback(closure_6, { animating: true, size: "large" });
    let tmp6 = callback(closure_5, obj);
  } else {
    tmp6 = null;
    if (null == safetyHubFetchError) {
      obj = { style: tmp.container };
      obj1 = { style: tmp.body };
      const items2 = [callback(AutomatedUnderageAppealStatus, {}), callback(importDefault(safetyHubFetchError[25]), {})];
      obj1.children = items2;
      const items3 = [callback2(closure_5, obj1), callback(visible(safetyHubFetchError[26]).ConnectedSafetyHubViolationsContainer, {})];
      obj.children = items3;
      tmp6 = callback2(closure_7, obj);
    }
  }
  return tmp6;
};
