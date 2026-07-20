// Module ID: 5467
// Function ID: 46668
// Name: useAuthorizedAppsTokens
// Dependencies: []
// Exports: useAuthorizedAppsToken

// Module 5467 (useAuthorizedAppsTokens)
function useAuthorizedAppsTokens(closure_3, arg1) {
  let obj = arg1;
  arg1 = closure_3;
  if (null == arg1) {
    obj = {};
  }
  const disableFetch = obj.disableFetch;
  const importDefault = tmp;
  const items = [closure_4];
  const items1 = [closure_3];
  const tokens = arg1(dependencyMap[2]).useStateFromStoresArray(items, () => {
    let found;
    if (null != arg0) {
      const mapped = arg0.map((arg0) => newestTokenForApplication.getNewestTokenForApplication(arg0));
      found = mapped.filter(arg0(stateFromStoresArray1[3]).isNotNullish);
    }
    if (null == found) {
      found = [];
    }
    return found;
  }, items1);
  const obj2 = arg1(dependencyMap[2]);
  const items2 = [closure_4];
  const items3 = [closure_3];
  const fetched = arg1(dependencyMap[2]).useStateFromStores(items2, () => {
    let everyResult;
    if (null != arg0) {
      everyResult = arg0.every((arg0) => fetchStateForApplication.getFetchStateForApplication(arg0) === constants.FETCHED);
    }
    return null != everyResult && everyResult;
  }, items3);
  const obj3 = arg1(dependencyMap[2]);
  const items4 = [closure_4];
  const items5 = [closure_3];
  const stateFromStoresArray1 = arg1(dependencyMap[2]).useStateFromStoresArray(items4, () => {
    let found;
    if (null != arg0) {
      found = arg0.filter((arg0) => fetchStateForApplication.getFetchStateForApplication(arg0) === constants.NOT_FETCHED);
    }
    if (null == found) {
      found = [];
    }
    return found;
  }, items5);
  const dependencyMap = stateFromStoresArray1;
  const items6 = [undefined !== disableFetch && disableFetch, stateFromStoresArray1];
  const effect = React.useEffect(() => {
    if (!tmp) {
      const tmp = 0 === stateFromStoresArray1.length;
    }
    if (!tmp) {
      const response = tmp(stateFromStoresArray1[4]).fetch(stateFromStoresArray1);
      const obj = tmp(stateFromStoresArray1[4]);
    }
  }, items6);
  return { tokens, fetched };
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const FetchState = arg1(dependencyMap[1]).FetchState;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizedAppsToken.tsx");

export { useAuthorizedAppsTokens };
export const useAuthorizedAppsToken = function useAuthorizedAppsToken(parentId) {
  const arg1 = parentId;
  const items = [parentId];
  const tmp = useAuthorizedAppsTokens(React.useMemo(() => {
    let tmp = null;
    if (null != arg0) {
      const items = [arg0];
      tmp = items;
    }
    return tmp;
  }, items), arg1);
  const tokens = tmp.tokens;
  const obj = {};
  let first = null;
  if (tokens.length > 0) {
    first = tokens[0];
  }
  obj.token = first;
  obj.fetched = tmp.fetched;
  return obj;
};
