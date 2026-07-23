// Module ID: 13761
// Function ID: 105539
// Name: useIsHarvestRequestDisabled
// Dependencies: [27, 1849, 7662, 653, 33, 677, 9230, 682, 566, 3743, 13762, 1212, 3712, 10095, 13764, 2]
// Exports: fetchHarvestStatus

// Module 13761 (useIsHarvestRequestDisabled)
import { ActivityIndicator } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";
import createToggle from "createToggle";

function useIsHarvestRequestDisabled() {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_4.getCurrentUser());
  const obj = require(566) /* initialize */;
  let harvestDisabledResult = callback((isRequesting) => isRequesting.isRequesting, require(3743) /* isIterable */.shallow);
  let tmp4 = null == stateFromStores;
  if (!tmp4) {
    if (!harvestDisabledResult) {
      harvestDisabledResult = require(13762) /* harvestDisabled */.harvestDisabled(tmp2, stateFromStores);
      const obj2 = require(13762) /* harvestDisabled */;
    }
    tmp4 = harvestDisabledResult;
  }
  return tmp4;
}
const REQUEST_DATA_LIMIT_DAYS = ME.REQUEST_DATA_LIMIT_DAYS;
let closure_7 = useStoreWithEqualityFn.createWithEqualityFn(() => ({ isRequesting: false, harvestRequest: null }));
obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.XAHCgJ);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useTrailing: function useHarvestRequestSettingTrailing() {
    let tmp = null;
    if ((function useIsRequestingHarvestState() {
      return outer1_7((isRequesting) => isRequesting.isRequesting, outer1_0(outer1_2[9]).shallow);
    })()) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  },
  useDescription: function useRequestYourDataSettingDescription() {
    const tmp = (function useHarvestRequest() {
      return outer1_7((harvestRequest) => harvestRequest.harvestRequest, outer1_0(outer1_2[9]).shallow);
    })();
    currentUser = currentUser.getCurrentUser();
    if (null == currentUser) {
      return null;
    } else if (currentUser.isStaff()) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      return intl2.string(require(1212) /* getSystemLocale */.t.ZPQLH2);
    } else if (null == tmp) {
      return null;
    } else {
      const addResult = importDefault(3712)(tmp.created_at).add(REQUEST_DATA_LIMIT_DAYS, "days");
      let formatToPlainStringResult = null;
      if (!addResult.isBefore(importDefault(3712)())) {
        const intl = require(1212) /* getSystemLocale */.intl;
        const obj = { date: addResult.format("MMMM Do YYYY") };
        formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.RNDlV9, obj);
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
  route: ME.UserSettingsSections.REQUEST_DATA,
  getComponent() {
    return require(13764).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/RequestYourDataSetting.tsx");

export default route;
export const fetchHarvestStatus = function fetchHarvestStatus() {
  const harvestStatus = require(9230) /* saveProfileAndAccountRequest */.getHarvestStatus();
  harvestStatus.then((arg0) => {
    let closure_0 = arg0;
    outer1_0(outer1_2[7]).batchUpdates(() => {
      outer2_7.setState({ isRequesting: false, harvestRequest: body.body });
    });
  }, () => {
    outer1_0(outer1_2[7]).batchUpdates(() => outer2_7.setState({ isRequesting: false }));
  });
};
export { useIsHarvestRequestDisabled };
