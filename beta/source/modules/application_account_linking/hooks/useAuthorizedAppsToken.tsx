// Module ID: 6590
// Function ID: 6591
// Name: useAuthorizedAppsToken
// Dependencies: [19, 6528, 504, 1370, 6591, 2]
// Exports: useAuthorizedAppsToken

// Module 6590 (useAuthorizedAppsToken)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 6528 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6591 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const AuthorizedAppsStore = AuthorizedAppsStore2;
let _require;

function useAuthorizedAppsTokens(react, arg1) {
  let stateFromStoresArray1;
  _require = react;
  let obj = arg1;
  if (arg1 == null) {
    obj = {};
  }
  const disableFetch = obj.disableFetch;
  let tmp = undefined !== disableFetch && disableFetch;
  let closure_1 = tmp;
  const items = [AuthorizedAppsStore];
  const items1 = [react];
  const obj2 = require("get initialized");
  const tokens = obj2.useStateFromStoresArray(items, () => {
    let newestTokenForApplication;
    let found;
    const arr = react;
    if (react != null) {
      const mapped = arr.map((item) => newestTokenForApplication.getNewestTokenForApplication(item));
      found = mapped.filter(GlobalUtils.isNotNullish);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items1);
  const items2 = [AuthorizedAppsStore];
  const items3 = [react];
  const obj3 = require("get initialized");
  const fetched = obj3.useStateFromStores(items2, () => {
    let fetchStateForApplication;
    let flag;
    const obj = react;
    if (react != null) {
      flag = obj.every((item) => fetchStateForApplication.getFetchStateForApplication(item) === constants.FETCHED);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items3);
  const items4 = [AuthorizedAppsStore];
  const items5 = [react];
  const obj4 = require("get initialized");
  stateFromStoresArray1 = obj4.useStateFromStoresArray(items4, () => {
    let fetchStateForApplication;
    let found;
    const arr = react;
    if (react != null) {
      found = arr.filter((item) => fetchStateForApplication.getFetchStateForApplication(item) === constants.NOT_FETCHED);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items5);
  const items6 = [tmp, stateFromStoresArray1];
  const effect = react.useEffect(() => {
    const tmp = closure_1 || 0 === stateFromStoresArray1.length;
    if (!tmp) {
      const obj = AuthorizedAppsActionCreatorsDefault;
      const response = obj.fetch(stateFromStoresArray1);
    }
  }, items6);
  return { tokens, fetched };
}
const FetchState = AuthorizedAppsStore2.FetchState;
const result = size.fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizedAppsToken.tsx");

export { useAuthorizedAppsTokens };
export const useAuthorizedAppsToken = function useAuthorizedAppsToken(parentId, arg1) {
  let closure_0 = parentId;
  let items = [parentId];
  const tmp = useAuthorizedAppsTokens(react.useMemo(() => {
    let tmp2 = null;
    if (null != closure_0) {
      const items = [tmp];
      tmp2 = items;
    }
    return tmp2;
  }, items), arg1);
  const tokens = tmp.tokens;
  let token = null;
  const fetched = tmp.fetched;
  if (tokens.length > 0) {
    token = tokens[0];
  }
  return { token, fetched };
};
