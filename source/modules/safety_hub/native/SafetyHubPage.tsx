// Module ID: 13538
// Function ID: 102694
// Name: AutomatedUnderageAppealStatus
// Dependencies: []
// Exports: default

// Module 13538 (AutomatedUnderageAppealStatus)
function AutomatedUnderageAppealStatus() {
  let obj = arg1(dependencyMap[10]);
  const items = [closure_8];
  const type = function getAutomatedAppealStatusMessage(arg0) {
    if (constants.SUCCESS === arg0) {
      let obj = {};
      const intl4 = callback(closure_3[6]).intl;
      obj = {
        loginHook(children) {
            const obj = {
              cachedAt: "<string:3344105473>",
              edpbxy: "<string:3465102384>",
              onPress() {
                return callback(closure_3[8]).logout("safety_hub_page_appeal_success", constants.LOGIN);
              },
              children
            };
            return callback2(callback(closure_3[7]).Text, obj);
          }
      };
      obj.message = intl4.format(callback(closure_3[6]).t.hyh4ls, obj);
      obj.type = callback(closure_3[9]).HelpMessageTypes.SUCCESS;
      return obj;
    } else if (constants.ERROR === arg0) {
      const obj1 = {};
      const intl3 = callback(closure_3[6]).intl;
      obj1.message = intl3.string(callback(closure_3[6]).t.4sILBU);
      obj1.type = callback(closure_3[9]).HelpMessageTypes.ERROR;
      return obj1;
    } else if (constants.FAILURE === arg0) {
      const obj2 = {};
      const intl2 = callback(closure_3[6]).intl;
      obj2.message = intl2.string(callback(closure_3[6]).t.40R63o);
      obj2.type = callback(closure_3[9]).HelpMessageTypes.ERROR;
      return obj2;
    } else if (constants.LOADING === arg0) {
      obj = {};
      const intl = callback(closure_3[6]).intl;
      obj.message = intl.string(callback(closure_3[6]).t.nhhy/R);
      obj.type = callback(closure_3[9]).HelpMessageTypes.INFO;
      return obj;
    } else {
      return { <string:2487814992>: "o", <string:1373108578>: "o" };
    }
  }(obj.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus())).type;
  let tmp3 = null;
  if (null != type) {
    obj = { messageType: type, children: tmp2 };
    tmp3 = callback(arg1(dependencyMap[9]).HelpMessage, obj);
  }
  return tmp3;
}
let closure_4 = importAll(dependencyMap[0]);
({ View: closure_5, ActivityIndicator: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[1]));
let closure_8 = importDefault(dependencyMap[2]);
const AgeCheckStatus = arg1(dependencyMap[3]).AgeCheckStatus;
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_10, Routes: closure_11 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[11]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[12]).space.PX_12, paddingVertical: importDefault(dependencyMap[12]).space.PX_12 };
obj.container = obj;
obj.loadingIndicator = {};
const tmp4 = arg1(dependencyMap[5]);
obj.body = { gap: importDefault(dependencyMap[12]).space.PX_8 };
let closure_14 = obj.createStyles(obj);
const obj1 = { gap: importDefault(dependencyMap[12]).space.PX_8 };
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  visible = visible.visible;
  const arg1 = visible;
  const tmp = callback3();
  let obj = arg1(dependencyMap[14]);
  const importDefault = obj.useSafetyHubInitialized();
  let obj1 = arg1(dependencyMap[15]);
  let closure_2 = obj1.useSafetyHubAccountStanding();
  const tmp2 = importDefault(dependencyMap[13])();
  const safetyHubFetchError = arg1(dependencyMap[16]).useSafetyHubFetchError();
  const dependencyMap = safetyHubFetchError;
  importDefault(dependencyMap[17])(() => {
    let obj = lib(safetyHubFetchError[18]);
    const safetyHubData = obj.getSafetyHubData();
    if (callback) {
      obj = { account_standing: lib.state };
      callback(safetyHubFetchError[19]).track(constants.SAFETY_HUB_VIEWED, obj);
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
    obj.children = callback(closure_6, {});
    let tmp6 = callback(closure_5, obj);
  } else {
    tmp6 = null;
    if (null == safetyHubFetchError) {
      obj = { style: tmp.container };
      obj1 = { style: tmp.body };
      const items2 = [callback(AutomatedUnderageAppealStatus, {}), callback(importDefault(dependencyMap[25]), {})];
      obj1.children = items2;
      const items3 = [callback2(closure_5, obj1), callback(arg1(dependencyMap[26]).ConnectedSafetyHubViolationsContainer, {})];
      obj.children = items3;
      tmp6 = callback2(closure_7, obj);
    }
  }
  return tmp6;
};
