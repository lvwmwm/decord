// Module ID: 14408
// Function ID: 108688
// Name: useAuthorizedSlayerApplications
// Dependencies: []
// Exports: default

// Module 14408 (useAuthorizedSlayerApplications)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const FetchState = arg1(dependencyMap[1]).FetchState;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_settings/authorized_apps/useAuthorizedSlayerApplications.tsx");

export default function useAuthorizedSlayerApplications(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  let obj = arg1(dependencyMap[2]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => fetchState.getFetchState());
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[2]).useStateFromStores(items1, () => {
    if (arg0) {
      let newestTokensForNonChildrenApplications = obj.getNewestTokensForNonChildrenApplications();
    } else {
      newestTokensForNonChildrenApplications = obj.getNewestTokens();
    }
    return newestTokensForNonChildrenApplications;
  });
  const dependencyMap = stateFromStores1;
  const items2 = [stateFromStores1];
  const items3 = [arg1];
  const memo = React.useMemo(() => {
    if (null == stateFromStores1) {
      let items = [];
    } else {
      const found = stateFromStores1.filter((application) => callback(closure_2[3]).isSocialLayerSDKAuthorization(application.application, application.scopes));
      items = found.map((application) => application.application);
    }
    return items;
  }, items2);
  const effect = React.useEffect(() => {
    if (!arg1) {
      const response = arg1(stateFromStores1[4]).fetch();
      const obj = arg1(stateFromStores1[4]);
    }
  }, items3);
  obj = {};
  let tmp4 = stateFromStores !== FetchState.FETCHED;
  if (tmp4) {
    let tmp6 = null == stateFromStores1;
    if (!tmp6) {
      tmp6 = 0 === stateFromStores1.length;
    }
    tmp4 = tmp6;
  }
  obj.showLoadingIndicator = tmp4;
  obj.slayerSdkApplications = memo;
  return obj;
};
