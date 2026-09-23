// Module ID: 17029
// Function ID: 17030
// Name: useUserApplicationWidgetData
// Dependencies: [32, 19, 5054, 9377, 7943, 9380, 9379, 504, 7499, 9378, 8531, 7955, 2]
// Exports: default

// Module 17029 (useUserApplicationWidgetData)
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8531 */;
import UserApplicationIdentityActionCreatorsDefault from "UserApplicationIdentityActionCreators" /* 9378 */;
import useApplicationWidgetConfigsDefault from "useApplicationWidgetConfigs" /* 9379 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5054 */;
import UserApplicationIdentityStore from "UserApplicationIdentityStore" /* 9377 */;
import UserProfileStore from "UserProfileStore" /* 7943 */;
import ApplicationWidgetConfigStore from "ApplicationWidgetConfigStore" /* 9380 */;

const require = globalThis.__r;

const require = fn;
fn(9377).FetchState;
const FetchState = fn(9380).FetchState;
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_widget/hooks/useUserApplicationWidgetData.tsx");

export default function useUserApplicationWidgetData(arg0, applicationId) {
  _require = applicationId;
  closure_129_0 = applicationId;
  if (null != applicationId) {
    let items = [applicationId];
    let items1 = items;
  } else {
    items1 = [];
  }
  useApplicationWidgetConfigsDefault(items1);
  const items2 = [ApplicationWidgetConfigStore];
  const items3 = [applicationId];
  let obj = require("initialize");
  [tmp7, tmp8] = require("initialize").useStateFromStoresArray(items2, () => {
    if (null == closure_0) {
      const items = [false, null];
      return items;
    } else {
      let config = ApplicationWidgetConfigStore.getConfig(tmp);
      if (config == null) {
        config = null;
      }
      const fetchState = ApplicationWidgetConfigStore.getFetchState(tmp);
      const items1 = [(fetchState === FetchState.NOT_FETCHED || fetchState === FetchState.FETCHING) && null == config, config];
      return items1;
    }
  }, items3);
  importDefault = tmp8;
  let tmp9 = null;
  if (null != tmp8) {
    tmp9 = applicationId;
  }
  closure_130_0 = tmp9;
  const tmp6 = _slicedToArray(require("initialize").useStateFromStoresArray(items2, () => {
    if (null == closure_0) {
      const items = [false, null];
      return items;
    } else {
      let config = ApplicationWidgetConfigStore.getConfig(tmp);
      if (config == null) {
        config = null;
      }
      const fetchState = ApplicationWidgetConfigStore.getFetchState(tmp);
      const items1 = [(fetchState === FetchState.NOT_FETCHED || fetchState === FetchState.FETCHING) && null == config, config];
      return items1;
    }
  }, items3), 2);
  let getOrFetchApplication = require("useGetOrFetchApplications").useGetOrFetchApplication(tmp9);
  const tmp4Result = require("useGetOrFetchApplications");
  const items4 = [isLoading];
  const items5 = [tmp9];
  const tmp4Result5 = require("initialize");
  const items6 = [
    require("initialize").useStateFromStores(items4, () => {
      let result = null != closure_0;
      if (result) {
        result = ApplicationStore.isFetchingApplication(tmp);
      }
      return result;
    }, items5) && null == getOrFetchApplication,

  ];
  if (getOrFetchApplication == null) {
    getOrFetchApplication = null;
  }
  items6[1] = getOrFetchApplication;
  const tmp5Result = _slicedToArray(items6, 2);
  dependencyMap = tmp13;
  let tmp14 = null != tmp8;
  if (tmp14) {
    tmp14 = null != tmp13;
  }
  let tmp15 = null;
  if (tmp14) {
    tmp15 = arg0;
  }
  let tmp16 = null;
  if (tmp14) {
    tmp16 = applicationId;
  }
  closure_131_0 = tmp15;
  closure_131_1 = tmp16;
  const tmp11 = require("initialize").useStateFromStores(items4, () => {
    let result = null != closure_0;
    if (result) {
      result = ApplicationStore.isFetchingApplication(tmp);
    }
    return result;
  }, items5) && null == getOrFetchApplication;
  const items7 = [UserApplicationIdentityStore];
  const items8 = [tmp15];
  const stateFromStores = require("initialize").useStateFromStores(items7, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = UserApplicationIdentityStore.getFetchState(tmp) === FetchState.NOT_FETCHED;
    }
    return tmp2;
  }, items8);
  closure_131_2 = stateFromStores;
  const items9 = [stateFromStores, tmp15];
  const effect = noop.useEffect(() => {
    let tmp = closure_2;
    if (closure_2) {
      tmp = null != closure_0;
    }
    if (tmp) {
      const userApplicationIdentitiesWithProfiles = UserApplicationIdentityActionCreatorsDefault.fetchUserApplicationIdentitiesWithProfiles(closure_0);
    }
  }, items9);
  const tmp4Result6 = require("initialize");
  const items10 = [UserApplicationIdentityStore];
  const items11 = [tmp15, tmp16];
  const tmp5Result4 = _slicedToArray(require("initialize").useStateFromStoresArray(items10, () => {
    if (null != closure_0) {
      if (null != closure_1) {
        let userIdentityByApplication = UserApplicationIdentityStore.getUserIdentityByApplication(tmp, tmp2);
        if (userIdentityByApplication == null) {
          userIdentityByApplication = null;
        }
        let isFetchingUserResult = obj.isFetchingUser(tmp);
        if (!isFetchingUserResult) {
          isFetchingUserResult = obj.getFetchState(tmp) === FetchState.NOT_FETCHED;
        }
        if (isFetchingUserResult) {
          isFetchingUserResult = null == userIdentityByApplication;
        }
        const items = [isFetchingUserResult, userIdentityByApplication];
        return items;
      }
    }
    const items1 = [false, null];
    return items1;
  }, items11), 2);
  _slicedToArray = tmp20;
  let tmp21 = null;
  if (tmp14) {
    tmp21 = arg0;
  }
  closure_132_0 = tmp21;
  const tmp4Result7 = require("initialize");
  const items12 = [UserProfileStore];
  const items13 = [tmp21];
  const tmp4Result8 = require("initialize");
  [tmp23, tmp24] = require("initialize").useStateFromStoresArray(items12, () => {
    if (null != closure_0) {
      const items = [UserProfileStore.isFetchingProfile(tmp), ];
      let userProfile = UserProfileStore.getUserProfile(tmp);
      if (userProfile == null) {
        userProfile = null;
      }
      items[1] = userProfile;
      let items1 = items;
    } else {
      items1 = [false, null];
    }
    return items1;
  }, items13);
  closure_132_1 = tmp25;
  const items14 = [null != tmp21 && !tmp23 && null == tmp24, tmp21];
  const effect1 = obj5.useEffect(() => {
    let tmp = closure_1;
    if (closure_1) {
      tmp = null != closure_0;
    }
    if (tmp) {
      maybeFetchUserProfileDefault(closure_0);
    }
  }, items14);
  if (!tmp23) {
    tmp23 = tmp25;
  }
  if (tmp23) {
    tmp23 = null == tmp24;
  }
  const items15 = [tmp23, tmp24];
  const tmp5Result6 = _slicedToArray(items15, 2);
  noop = tmp28;
  if (!isLoading) {
    isLoading = tmp5Result[0];
  }
  if (!isLoading) {
    isLoading = tmp5Result4[0];
  }
  if (!isLoading) {
    isLoading = tmp5Result6[0];
  }
  const items16 = [tmp5Result[1], applicationId, tmp8, tmp5Result4[1], isLoading, tmp5Result6[1]];
  return noop.useMemo(() => {
    let found;
    if (widgets != null) {
      widgets = widgets.widgets;
      if (widgets != null) {
        found = widgets.find((item) => closure_0(closure_2[11]).isApplicationWidgetWithId(item, applicationId));
      }
    }
    if (found == null) {
      found = null;
    }
    return { isLoading, application, applicationWidgetConfig, userApplicationIdentity, profileApplicationWidget: found };
  }, items16);
};
