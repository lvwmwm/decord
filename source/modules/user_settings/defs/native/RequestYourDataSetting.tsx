// Module ID: 13638
// Function ID: 103328
// Name: useIsHarvestRequestDisabled
// Dependencies: [13646, 13648, 2, 13647, 566, 2, 57, 31, 27, 6764, 1849, 653, 1197, 1345, 6765, 33]
// Exports: fetchHarvestStatus

// Module 13638 (useIsHarvestRequestDisabled)
import { ActivityIndicator } from "useParentalConsentWarning";
import frozen from "frozen";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "initialize";
import result2 from "result2";
import ContentDismissActionType from "ContentDismissActionType";
import module_33 from "module_33";

function useIsHarvestRequestDisabled() {
  const items = [frozen];
  const stateFromStores = require(dependencyMap[8]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(dependencyMap[8]);
  let harvestDisabledResult = callback((isRequesting) => isRequesting.isRequesting, require(dependencyMap[9]).shallow);
  let tmp4 = null == stateFromStores;
  if (!tmp4) {
    if (!harvestDisabledResult) {
      harvestDisabledResult = require(dependencyMap[10]).harvestDisabled(tmp2, stateFromStores);
      const obj2 = require(dependencyMap[10]);
    }
    tmp4 = harvestDisabledResult;
  }
  return tmp4;
}
const REQUEST_DATA_LIMIT_DAYS = _isNativeReflectConstruct.REQUEST_DATA_LIMIT_DAYS;
let closure_7 = result2.createWithEqualityFn(() => ({ marginLeft: null, display: null }));
let obj = {
  useTitle() {
    const intl = require(dependencyMap[11]).intl;
    return intl.string(require(dependencyMap[11]).t.XAHCgJ);
  },
  parent: require("result2").MobileSetting.DATA_AND_PRIVACY,
  useTrailing: function useHarvestRequestSettingTrailing() {
    let tmp = null;
    if (function useIsRequestingHarvestState() {
      return callback2((isRequesting) => isRequesting.isRequesting, callback(closure_2[9]).shallow);
    }()) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  },
  useDescription: function useRequestYourDataSettingDescription() {
    const tmp = function useHarvestRequest() {
      return callback2((harvestRequest) => harvestRequest.harvestRequest, callback(closure_2[9]).shallow);
    }();
    const currentUser = currentUser.getCurrentUser();
    if (null == currentUser) {
      return null;
    } else if (currentUser.isStaff()) {
      const intl2 = require(dependencyMap[11]).intl;
      return intl2.string(require(dependencyMap[11]).t.ZPQLH2);
    } else if (null == tmp) {
      return null;
    } else {
      const addResult = importDefault(dependencyMap[12])(tmp.created_at).add(REQUEST_DATA_LIMIT_DAYS, "days");
      let formatToPlainStringResult = null;
      if (!addResult.isBefore(importDefault(dependencyMap[12])())) {
        const intl = require(dependencyMap[11]).intl;
        const obj = { date: addResult.format("MMMM Do YYYY") };
        formatToPlainStringResult = intl.formatToPlainString(require(dependencyMap[11]).t.RNDlV9, obj);
      }
      return formatToPlainStringResult;
    }
  },
  useIsDisabled: useIsHarvestRequestDisabled,
  usePreNavigationAction() {
    let closure_0 = useIsHarvestRequestDisabled();
    return (arg0) => {
      let flag = !closure_0;
      if (flag) {
        arg0();
        flag = true;
      }
      return flag;
    };
  },
  screen: obj
};
obj = {
  route: _isNativeReflectConstruct.UserSettingsSections.REQUEST_DATA,
  getComponent() {
    return require(dependencyMap[14]).default;
  }
};
const route = ContentDismissActionType.createRoute(obj);
const result = module_33.fileFinishedImporting("modules/user_settings/defs/native/RequestYourDataSetting.tsx");

export default route;
export const fetchHarvestStatus = function fetchHarvestStatus() {
  const harvestStatus = require(dependencyMap[6]).getHarvestStatus();
  harvestStatus.then((arg0) => {
    arg0(closure_2[7]).batchUpdates(() => {
      state.setState({ isRequesting: false, harvestRequest: arg0.body });
    });
  }, () => {
    callback(closure_2[7]).batchUpdates(() => state.setState({ isRequesting: false }));
  });
};
export { useIsHarvestRequestDisabled };
