// Module ID: 14565
// Function ID: 14566
// Name: useApplicationWidgetAffinityData
// Dependencies: [19, 10332, 14566, 504, 6961, 6864, 7524, 14567, 2]
// Exports: default

// Module 14565 (useApplicationWidgetAffinityData)
import LibraryApplicationStatisticsActionCreators from "LibraryApplicationStatisticsActionCreators" /* 14567 */;
import react_mod from "react" /* 19 */;
import ApplicationWidgetConfigStore from "ApplicationWidgetConfigStore" /* 10332 */;
import LibraryApplicationStatisticsStore from "LibraryApplicationStatisticsStore" /* 14566 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, lastPlayedDateTime, set;

let react = react_mod;
const result = size.fileFinishedImporting("modules/user_profile/hooks/useApplicationWidgetAffinityData.tsx");

export default function useApplicationWidgetAffinityData(arg0) {
  let closure_0;
  let closure_3;
  let memo;
  let memo1;
  _require = arg0;
  let obj = require("get initialized");
  let items = [memo1];
  const stateFromStores = obj.useStateFromStores(items, () => memo1.getFeaturedApplicationIds());
  const items1 = [stateFromStores, arg0];
  memo = react.useMemo(() => {
    set = new Set(stateFromStores);
    const found = closure_0.filter((item) => item instanceof closure_1_0(memo[4]).ApplicationWidget);
    const mapped = found.map((applicationId) => applicationId.applicationId);
    return mapped.filter((item) => set.has(item));
  }, items1);
  let tmp2 = stateFromStores(memo[5])(memo);
  react = tmp2;
  const items2 = [memo, tmp2];
  memo1 = react.useMemo(() => memo.map((item, index) => {
    let parentId;
    if (closure_1_3[index] != null) {
      parentId = tmp.parentId;
    }
    if (parentId == null) {
      parentId = item;
    }
    return parentId;
  }), items2);
  const obj2 = require("useAuthorizedAppsToken");
  const tokens = obj2.useAuthorizedAppsTokens(memo1).tokens;
  let tmp4 = memo.length > 0;
  let closure_6 = tmp4;
  const items3 = [tmp4];
  const effect = react.useEffect(() => {
    const tmp = closure_6;
    if (tmp) {
      const obj = LibraryApplicationStatisticsActionCreators;
      const activityStatistics = obj.fetchActivityStatistics();
    }
  }, items3);
  const items4 = [tmp2];
  let closure_7 = react.useMemo(() => closure_3.map((getCanonicalGameId) => {
    let canonicalGameId;
    if (getCanonicalGameId != null) {
      canonicalGameId = getCanonicalGameId.getCanonicalGameId();
    }
    if (canonicalGameId == null) {
      canonicalGameId = null;
    }
    return canonicalGameId;
  }), items4);
  const items5 = [tokens];
  const obj3 = require("get initialized");
  const stateFromStoresArray = obj3.useStateFromStoresArray(items5, () => {
    let gameDuration;
    return closure_7.map((item) => {
      let num = 0;
      if (null != item) {
        num = gameDuration.getGameDuration(item);
      }
      return num;
    });
  });
  const items6 = [tokens];
  const obj4 = require("get initialized");
  const stateFromStoresArray1 = obj4.useStateFromStoresArray(items6, () => closure_7.map((item) => {
    lastPlayedDateTime = null;
    if (null != item) {
      lastPlayedDateTime = lastPlayedDateTime.getLastPlayedDateTime(item);
    }
    return lastPlayedDateTime;
  }));
  const items7 = [memo, memo1, stateFromStoresArray1, tokens, stateFromStoresArray];
  return react.useMemo(() => {
    let arr2;
    let num2;
    let tmp5;
    const items = [];
    let num = 0;
    set = new Set(tokens.map((application) => application.application.id));
    if (0 < memo.length) {
      do {
        let obj = { applicationId: memo[num], isConnected: set.has(memo1[num]), totalPlayDuration: num2, lastPlayedAt: tmp5 };
        let push = items.push;
        arr2 = memo;
        num2 = stateFromStoresArray[num];
        if (num2 == null) {
          num2 = 0;
        }
        tmp5 = stateFromStoresArray1[num];
        if (tmp5 == null) {
          tmp5 = null;
        }
        let arr = push(obj);
        num = num + 1;
      } while (num < arr2.length);
    }
    return items;
  }, items7);
};
