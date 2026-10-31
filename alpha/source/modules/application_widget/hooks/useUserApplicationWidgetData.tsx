// Module ID: 12080
// Function ID: 12081
// Name: useUserApplicationWidgetData
// Dependencies: [32, 19, 2038, 10946, 7772, 10943, 12081, 504, 7330, 10945, 8758, 7777, 2]
// Exports: default

// Module 12080 (useUserApplicationWidgetData)
import ApplicationWidgetConfigStore2 from "ApplicationWidgetConfigStore" /* 10943 */;
import UserApplicationIdentityStore2 from "UserApplicationIdentityStore" /* 10946 */;
import useApplicationWidgetConfigsDefault from "useApplicationWidgetConfigs" /* 12081 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import UserProfileStore from "UserProfileStore" /* 7772 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const UserApplicationIdentityStore = UserApplicationIdentityStore2;
const ApplicationWidgetConfigStore = ApplicationWidgetConfigStore2;
let _require, config, dependencyMap, importDefault, widgets;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const FetchState = ApplicationWidgetConfigStore2.FetchState;
let result = size.fileFinishedImporting("modules/application_widget/hooks/useUserApplicationWidgetData.tsx");

export default function useUserApplicationWidgetData(arg0, applicationId) {
  let application;
  let constants2;
  let first2;
  let items1;
  let tmp25;
  let tmp26;
  let tmp7;
  let tmp8;
  let userApplicationIdentity;
  const f126862 = () => {
    if (null == closure_0) {
      const items = [false, null];
      return items;
    } else {
      const obj = config;
      config = config.getConfig(tmp);
      if (config == null) {
        config = null;
      }
      const fetchState = obj.getFetchState(tmp);
      const items1 = [, ];
      const tmp4 = (fetchState === constants2.NOT_FETCHED || fetchState === constants2.FETCHING) && null == config;
      items1[0] = tmp4;
      items1[1] = config;
      return items1;
    }
  };
  const f126863 = () => {
    const result = null != closure_0 && first2.isFetchingApplication(tmp);
    return result;
  };
  const f126867 = () => {
    let items1;
    if (null != closure_0) {
      const items = [UserProfileStore.isFetchingProfile(closure_0), ];
      let userProfile = UserProfileStore.getUserProfile(tmp);
      if (userProfile == null) {
        userProfile = null;
      }
      items[1] = userProfile;
      items1 = items;
    } else {
      items1 = [false, null];
    }
    return items1;
  };
  _require = applicationId;
  let tmp = dependencyMap;
  let tmp2 = useApplicationWidgetConfigsDefault;
  if (null != applicationId) {
    let items = [applicationId];
    items1 = items;
  } else {
    items1 = [];
  }
  tmp2(items1);
  let tmp4 = _require;
  let obj = require("get initialized");
  const items2 = [ApplicationWidgetConfigStore];
  const items3 = [applicationId];
  [tmp7, tmp8] = _slicedToArray(obj.useStateFromStoresArray(items2, f126862, items3), 2);
  importDefault = tmp8;
  let tmp9 = null;
  const tmp6 = _slicedToArray(obj.useStateFromStoresArray(items2, f126862, items3), 2);
  if (null != tmp8) {
    tmp9 = applicationId;
  }
  _require = tmp9;
  const tmp4Result = tmp4(7330);
  let getOrFetchApplication = tmp4Result.useGetOrFetchApplication(tmp9);
  const items4 = [first2];
  const items5 = [tmp9];
  const tmp4Result5 = tmp4(504);
  const items6 = [tmp4Result5.useStateFromStores(items4, f126863, items5) && null == getOrFetchApplication, ];
  tmp4Result5.useStateFromStores(items4, f126863, items5) && null == getOrFetchApplication;
  if (getOrFetchApplication == null) {
    getOrFetchApplication = null;
  }
  items6[1] = getOrFetchApplication;
  const tmp5Result = _slicedToArray(items6, 2);
  dependencyMap = tmp14;
  let tmp15 = null != tmp8;
  const first = tmp5Result[0];
  if (tmp15) {
    tmp15 = null != tmp14;
  }
  let tmp16 = null;
  if (tmp15) {
    tmp16 = arg0;
  }
  let tmp17 = null;
  if (tmp15) {
    tmp17 = applicationId;
  }
  _require = tmp16;
  let applicationWidgetConfig = tmp17;
  const items7 = [UserApplicationIdentityStore];
  const items8 = [tmp16];
  const tmp4Result6 = tmp4(504);
  const stateFromStores = tmp4Result6.useStateFromStores(items7, () => {
    const tmp2 = null != closure_0 && authStore.getFetchState(tmp) === constants.NOT_FETCHED;
    return tmp2;
  }, items8);
  const items9 = [stateFromStores, tmp16];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores && null != closure_0;
    if (tmp) {
      const obj = require("UserApplicationIdentityActionCreators");
      const userApplicationIdentitiesWithProfiles = obj.fetchUserApplicationIdentitiesWithProfiles(closure_0);
    }
  }, items9);
  const items10 = [UserApplicationIdentityStore];
  const items11 = [tmp16, tmp17];
  const tmp4Result7 = tmp4(504);
  const tmp5Result4 = _slicedToArray(tmp4Result7.useStateFromStoresArray(items10, () => {
    if (null != closure_0) {
      if (null != closure_1) {
        let userIdentityByApplication = authStore.getUserIdentityByApplication(tmp, tmp2);
        if (userIdentityByApplication == null) {
          userIdentityByApplication = null;
        }
        const items = [(obj.isFetchingUser(tmp) || obj.getFetchState(tmp) === constants.NOT_FETCHED) && null == userIdentityByApplication, userIdentityByApplication];
        const isFetchingUserResult = (obj.isFetchingUser(tmp) || obj.getFetchState(tmp) === constants.NOT_FETCHED) && null == userIdentityByApplication;
        return items;
      }
    }
    const items1 = [false, null];
    return items1;
  }, items11), 2);
  _slicedToArray = tmp22;
  let tmp23 = null;
  const first1 = tmp5Result4[0];
  if (tmp15) {
    tmp23 = arg0;
  }
  _require = tmp23;
  const items12 = [UserProfileStore];
  const items13 = [tmp23];
  const tmp4Result8 = tmp4(504);
  [tmp25, tmp26] = _slicedToArray(tmp4Result8.useStateFromStoresArray(items12, f126867, items13), 2);
  applicationWidgetConfig = tmp27;
  const items14 = [null != tmp23 && !tmp25 && null == tmp26, tmp23];
  _slicedToArray(tmp4Result8.useStateFromStoresArray(items12, f126867, items13), 2);
  const effect1 = obj5.useEffect(() => {
    const tmp = closure_1 && null != closure_0;
    if (tmp) {
      closure_1(application[10])(closure_0);
    }
  }, items14);
  if (!tmp25) {
    tmp25 = tmp27;
  }
  if (tmp25) {
    tmp25 = null == tmp26;
  }
  const items15 = [tmp25, tmp26];
  const tmp5Result6 = _slicedToArray(items15, 2);
  react = tmp31;
  first2 = tmp5Result6[0];
  if (!tmp7) {
    tmp7 = first;
  }
  if (!tmp7) {
    tmp7 = first1;
  }
  if (!tmp7) {
    tmp7 = first2;
  }
  first2 = tmp7;
  const items16 = [tmp5Result[1], applicationId, tmp8, tmp5Result4[1], tmp7, tmp5Result6[1]];
  return react.useMemo(() => {
    let found;
    if (widgets != null) {
      widgets = widgets.widgets;
      if (widgets != null) {
        found = widgets.find((item) => {
          const obj = closure_0(application[11]);
          return obj.isApplicationWidgetWithId(item, closure_1_0);
        });
      }
    }
    if (found == null) {
      found = null;
    }
    let obj = { isLoading: first2, application, applicationWidgetConfig: importDefault, userApplicationIdentity, profileApplicationWidget: found };
    return obj;
  }, items16);
};
