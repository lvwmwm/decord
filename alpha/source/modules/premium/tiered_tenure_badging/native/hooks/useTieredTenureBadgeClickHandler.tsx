// Module ID: 10510
// Function ID: 10511
// Name: useTieredTenureBadgeClickHandler
// Dependencies: [19, 1389, 1391, 8294, 1085, 6891, 10511, 7318, 504, 7084, 5054, 10512, 1999, 10512, 1264, 2]
// Exports: useTieredTenureBadgeClickHandler

// Module 10510 (useTieredTenureBadgeClickHandler)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Constants2 from "Constants" /* 6891 */;
import openUserSettings from "openUserSettings" /* 7084 */;
import Constants3 from "Constants" /* 8294 */;
import TieredTenureBadgeActionSheet from "TieredTenureBadgeActionSheet" /* 10512 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let metroImportAll;
let metroImportDefault;
const PremiumTypes = PremiumConstants.PremiumTypes;
const DEFAULT_PREMIUM_BADGE_ID = Constants3.DEFAULT_PREMIUM_BADGE_ID;
({ AnalyticEvents: metroImportDefault, UserSettingsSections: metroImportAll } = Constants);
const UserProfileThemeTypes = Constants2.UserProfileThemeTypes;
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useTieredTenureBadgeClickHandler.tsx");

export const useTieredTenureBadgeClickHandler = function useTieredTenureBadgeClickHandler(id, userId, themeType) {
  let badge;
  _require = id;
  dependencyMap = themeType;
  let obj = require("useIsPremiumSubscriber");
  let isPremiumSubscriber = obj.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  let tmp4 = typeof id === "string";
  if (typeof id === "string") {
    const tmpResult = require("TieredTenureBadgeUtils");
    tmp4 = null != tmpResult.getTieredTenureBadge(id);
  }
  const items = [isPremiumSubscriber];
  const tmpResult2 = require("get initialized");
  const stateFromStores = tmpResult2.useStateFromStores(items, () => isPremiumSubscriber.getCurrentUser());
  if (!tmp4) {
    let tmp7 = id === DEFAULT_PREMIUM_BADGE_ID;
    if (tmp7) {
      id = undefined;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      tmp7 = userId === id;
    }
    if (tmp7) {
      tmp7 = isPremiumSubscriber;
    }
    tmp4 = tmp7;
  }
  isPremiumSubscriber = tmp4;
  const items1 = [themeType, userId, tmp4, id, isPremiumSubscriber];
  let callback = null;
  if (tmp4) {
    callback = isPremiumSubscriber.useCallback(() => {
      if (themeType === UserProfileThemeTypes.YOU_SCREEN) {
        const obj3 = { screen: metroImportAll.PREMIUM };
        const obj2 = openUserSettings;
        obj2.openUserSettings(obj3);
      } else {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        const obj = { userId };
        const tmp5 = asyncRequire(10512, dependencyMap.paths);
        openLazy(tmp5, TieredTenureBadgeActionSheet.TIERED_TENURE_BADGE_ACTION_SHEET_KEY, obj, "stack");
      }
      const tmp15 = isPremiumSubscriber;
      if (tmp15) {
        const obj5 = { badge, viewed_user_id: userId, premium_type: isPremiumSubscriber };
        const obj4 = AnalyticsUtilsDefault;
        obj4.track(metroImportDefault.TIERED_TENURE_BADGE_CLICKED, obj5);
      }
    }, items1);
  }
  return callback;
};
