// Module ID: 5469
// Function ID: 46742
// Name: useAuthorizedAppsTokens
// Dependencies: [31, 5066, 566, 1327, 5470, 2]
// Exports: useAuthorizedAppsToken

// Module 5469 (useAuthorizedAppsTokens)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";

const require = arg1;
function useAuthorizedAppsTokens(result, arg1) {
  let obj = arg1;
  const _require = result;
  if (null == arg1) {
    obj = {};
  }
  const disableFetch = obj.disableFetch;
  const importDefault = tmp;
  const items = [_isNativeReflectConstruct];
  const items1 = [result];
  const tokens = _require(stateFromStoresArray1[2]).useStateFromStoresArray(items, () => {
    let found;
    if (null != lib) {
      const mapped = lib.map((arg0) => outer2_4.getNewestTokenForApplication(arg0));
      found = mapped.filter(lib(stateFromStoresArray1[3]).isNotNullish);
    }
    if (null == found) {
      found = [];
    }
    return found;
  }, items1);
  const obj2 = _require(stateFromStoresArray1[2]);
  const items2 = [_isNativeReflectConstruct];
  const items3 = [result];
  const fetched = _require(stateFromStoresArray1[2]).useStateFromStores(items2, () => {
    let everyResult;
    if (null != lib) {
      everyResult = lib.every((arg0) => outer2_4.getFetchStateForApplication(arg0) === outer2_5.FETCHED);
    }
    return null != everyResult && everyResult;
  }, items3);
  const obj3 = _require(stateFromStoresArray1[2]);
  const items4 = [_isNativeReflectConstruct];
  const items5 = [result];
  stateFromStoresArray1 = _require(stateFromStoresArray1[2]).useStateFromStoresArray(items4, () => {
    let found;
    if (null != lib) {
      found = lib.filter((arg0) => outer2_4.getFetchStateForApplication(arg0) === outer2_5.NOT_FETCHED);
    }
    if (null == found) {
      found = [];
    }
    return found;
  }, items5);
  const items6 = [undefined !== disableFetch && disableFetch, stateFromStoresArray1];
  const effect = React.useEffect(() => {
    if (!tmp) {
      tmp = 0 === stateFromStoresArray1.length;
    }
    if (!tmp) {
      const response = tmp(stateFromStoresArray1[4]).fetch(stateFromStoresArray1);
      const obj = tmp(stateFromStoresArray1[4]);
    }
  }, items6);
  return { tokens, fetched };
}
const result = require("initialize").fileFinishedImporting("modules/application_account_linking/hooks/useAuthorizedAppsToken.tsx");

export { useAuthorizedAppsTokens };
export const useAuthorizedAppsToken = function useAuthorizedAppsToken(parentId) {
  let closure_0 = parentId;
  let items = [parentId];
  let tmp = useAuthorizedAppsTokens(React.useMemo(() => {
    let tmp = null;
    if (null != closure_0) {
      const items = [closure_0];
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
