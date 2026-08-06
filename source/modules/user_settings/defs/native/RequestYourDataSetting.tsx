// Module ID: 14019
// Function ID: 14020
// Name: useIsHarvestRequestDisabled
// Dependencies: [17, 1903, 8005, 676, 21, 700, 8433, 705, 589, 3897, 14020, 1236, 3866, 10364, 14022, 2]
// Exports: fetchHarvestStatus, useIsHarvestRequestDisabled

// Module 14019 (useIsHarvestRequestDisabled)
import { ActivityIndicator } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { jsx } from "jsxProd";
import identity from "identity";
import createToggle from "createToggle";

let UserSettingsSections;
let c5;
function useIsHarvestRequestDisabled() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  const tmp = require;
  let harvestDisabledResult = callback((isRequesting) => isRequesting.isRequesting, require(3897) /* isIterable */.shallow);
  let tmp6 = null == stateFromStores;
  if (!tmp6) {
    if (!harvestDisabledResult) {
      harvestDisabledResult = tmp(14020).harvestDisabled(tmp4, stateFromStores);
      const tmpResult = tmp(14020);
    }
    tmp6 = harvestDisabledResult;
  }
  return tmp6;
}
({ REQUEST_DATA_LIMIT_DAYS: c5, UserSettingsSections } = ME);
let closure_7 = identity.createWithEqualityFn(() => ({ isRequesting: false, harvestRequest: null }));
obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.XAHCgJ);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useTrailing: function useHarvestRequestSettingTrailing() {
    let tmp = null;
    if (callback((isRequesting) => isRequesting.isRequesting, require(3897) /* isIterable */.shallow)) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  },
  useDescription: function useRequestYourDataSettingDescription() {
    const tmp3 = callback((harvestRequest) => harvestRequest.harvestRequest, require(3897) /* isIterable */.shallow);
    currentUser = currentUser.getCurrentUser();
    if (null == currentUser) {
      return null;
    } else if (currentUser.isStaff()) {
      const intl2 = tmp(1236).intl;
      return intl2.string(tmp(1236).t.ZPQLH2);
    } else if (null == tmp3) {
      return null;
    } else {
      const addResult = importDefault(3866)(tmp3.created_at).add(closure_5, "days");
      let formatToPlainStringResult = null;
      if (!addResult.isBefore(importDefault(3866)())) {
        const intl = tmp(1236).intl;
        const obj = { date: null };
        obj[0] = addResult.format("MMMM Do YYYY");
        formatToPlainStringResult = intl.formatToPlainString(tmp(1236).t.RNDlV9, obj);
      }
      return formatToPlainStringResult;
    }
  },
  useIsDisabled: useIsHarvestRequestDisabled,
  usePreNavigationAction() {
    const items = [mergeGuildAvatar];
    const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
    const obj = require(589) /* initialize */;
    const tmp = require;
    let harvestDisabledResult = callback((isRequesting) => isRequesting.isRequesting, require(3897) /* isIterable */.shallow);
    let tmp6 = null == stateFromStores;
    if (!tmp6) {
      if (!harvestDisabledResult) {
        harvestDisabledResult = tmp(14020).harvestDisabled(tmp4, stateFromStores);
        const tmpResult = tmp(14020);
      }
      tmp6 = harvestDisabledResult;
    }
    require = tmp6;
    return (arg0) => {
      let flag = !closure_0;
      if (!closure_0) {
        arg0();
        flag = true;
      }
      return flag;
    };
  },
  screen: obj
};
obj = {
  route: UserSettingsSections.REQUEST_DATA,
  getComponent() {
    return require(14022).default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/RequestYourDataSetting.tsx");

export default route;
export const fetchHarvestStatus = function fetchHarvestStatus() {
  const harvestStatus = require(8433) /* saveProfileAndAccountRequest */.getHarvestStatus();
  harvestStatus.then((arg0) => {
    const callback = arg0;
    callback(705).batchUpdates(() => {
      outer1_7.setState({ isRequesting: false, harvestRequest: body.body });
    });
  }, () => {
    callback(705).batchUpdates(() => state.setState({ isRequesting: false }));
  });
};
export { useIsHarvestRequestDisabled };
