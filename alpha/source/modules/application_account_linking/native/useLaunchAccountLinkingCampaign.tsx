// Module ID: 19852
// Function ID: 19853
// Name: useLaunchAccountLinkingCampaign
// Dependencies: [32, 19, 2165, 16216, 7221, 6846, 19831, 1072, 504, 1380, 7259, 2119, 7921, 7922, 2]
// Exports: default

// Module 19852 (useLaunchAccountLinkingCampaign)
import Constants from "Constants" /* 1072 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 7221 */;
import useAuthorizationApp from "useAuthorizationApp" /* 7921 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import LocalAppDetectionStore from "LocalAppDetectionStore" /* 16216 */;
import ConsentStore from "ConsentStore" /* 6846 */;
import AccountLinkingCampaignStore from "AccountLinkingCampaignStore" /* 19831 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const AuthorizedAppsStore = AuthorizedAppsStore2;
let _require, dependencyMap, linkedGames;

let closure_4;
let hasOwnProperty;
({ useEffect: closure_4, useState: hasOwnProperty } = react);
const FetchState = AuthorizedAppsStore2.FetchState;
const Consents = Constants.Consents;
let result = size.fileFinishedImporting("modules/application_account_linking/native/useLaunchAccountLinkingCampaign.tsx");

export default function useLaunchAccountLinkingCampaign(disableFetch) {
  let appInstalled;
  let closure_2;
  let stateFromStoresArray;
  _require = disableFetch;
  let tmp = stateFromStoresArray(closure_5(Date.now), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  let obj = require("get initialized");
  let items = [AccountLinkingCampaignStore, LocalAppDetectionStore, ConsentStore];
  let items1 = [first];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const campaigns = AccountLinkingCampaignStore.getCampaigns();
    return campaigns.filter((endAtUnixS) => {
      const result = 1000 * endAtUnixS.endAtUnixS;
      let tmp2 = result > Math.max(first, Date.now());
      if (tmp2) {
        let targetType1Eligible = endAtUnixS.targetType1Eligible;
        if (!targetType1Eligible) {
          let isAndroidResult = null != endAtUnixS.targetType2DetectableAppName;
          if (isAndroidResult) {
            const obj = disableFetch(closure_2[9]);
            isAndroidResult = obj.isAndroid();
          }
          if (isAndroidResult) {
            isAndroidResult = ConsentStore.hasConsented(constants.PERSONALIZATION);
          }
          if (isAndroidResult) {
            isAndroidResult = appInstalled.isAppInstalled(endAtUnixS.targetType2DetectableAppName);
          }
          targetType1Eligible = isAndroidResult;
        }
        tmp2 = targetType1Eligible;
      }
      return tmp2;
    });
  }, items1);
  const items2 = [stateFromStoresArray, first];
  const tmp3 = closure_4(() => {
    let closure_0;
    const arr = stateFromStoresArray;
    if (0 !== stateFromStoresArray.length) {
      const _Math = Math;
      const items = [];
      HermesBuiltin.arraySpread(items, arr.map((endAtUnixS) => 1000 * endAtUnixS.endAtUnixS), 0);
      const _Math2 = Math;
      const _setTimeout = setTimeout;
      const _Math3 = Math;
      const _Math4 = Math;
      const _Date = Date;
      const applyResult = HermesBuiltin.apply(min, items, Math);
      const timeout = setTimeout(() => closure_1_2(Date.now()), Math.min(Math.max(0, applyResult - Date.now()), 2147483647));
      return () => clearTimeout(closure_0);
    }
  }, items2);
  const tmp4 = first(7259);
  const tmp4Result = tmp4(stateFromStoresArray.map((applicationId) => applicationId.applicationId), disableFetch);
  const tmp5 = first(7259);
  tmp5(tmp4Result.map((linkedGames) => {
    let id;
    if (linkedGames != null) {
      linkedGames = linkedGames.linkedGames;
      if (linkedGames != null) {
        const found = linkedGames.find((type) => type.type === disableFetch(closure_1_2[11]).GameLinkTypes.OFFICIAL);
        if (found != null) {
          id = found.id;
        }
      }
    }
    return id;
  }), disableFetch);
  const flatMapResult = tmp4Result.flatMap((item) => {
    let items1;
    const obj = disableFetch(closure_2[12]);
    const authorizationApp = obj.getAuthorizationApp(item);
    let prop;
    if (authorizationApp != null) {
      prop = authorizationApp.connectionEntrypointUrl;
    }
    if (null != prop) {
      let id = authorizationApp.parentId;
      if (id == null) {
        id = authorizationApp.id;
      }
      const items = [id];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
  let obj2 = require("useAuthorizedAppsToken");
  const obj3 = { disableFetch: !disableFetch };
  const authorizedAppsTokens = obj2.useAuthorizedAppsTokens(flatMapResult, obj3);
  const items3 = [ApplicationStore, AuthorizedAppsStore];
  const obj4 = require("get initialized");
  return obj4.useStateFromStores(items3, () => {
    const tmp = disableFetch;
    if (tmp) {
      const iter = stateFromStoresArray[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let _Date = Date;
        let tmp10 = nextResult;
        let result = 1000 * nextResult.endAtUnixS;
        if (result > Date.now()) {
          let obj2 = useAuthorizationApp;
          let authorizationApp = obj2.getAuthorizationApp(ApplicationStore.getApplication(tmp10.applicationId));
          let tmp24 = authorizationApp;
          let prop;
          if (authorizationApp != null) {
            prop = authorizationApp.connectionEntrypointUrl;
          }
          if (null != prop) {
            let id = tmp24.parentId;
            if (id == null) {
              id = tmp24.id;
            }
            let obj = AuthorizedAppsStore;
            let tmp15 = id;
            if (AuthorizedAppsStore.getFetchStateForApplication(id) === FetchState.FETCHED) {
              if (null == obj.getNewestTokenForApplication(tmp15)) {
                iter.return();
                return nextResult;
              }
            }
          }
        }
        continue;
      }
      return null;
    } else {
      return null;
    }
  });
};
