// Module ID: 10845
// Function ID: 10846
// Name: useTieredTenureBadgeClickHandler
// Dependencies: [19, 1392, 1394, 8592, 1087, 7181, 10846, 7595, 504, 7370, 5155, 10847, 2002, 10847, 1267, 2]
// Exports: useTieredTenureBadgeClickHandler

// Module 10845 (useTieredTenureBadgeClickHandler)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import PremiumConstants from "PremiumConstants" /* 1394 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import Constants2 from "Constants" /* 7181 */;
import openUserSettings from "openUserSettings" /* 7370 */;
import Constants3 from "Constants" /* 8592 */;
import TieredTenureBadgeActionSheet from "TieredTenureBadgeActionSheet" /* 10847 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import Constants from "Constants" /* 1087 */;
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
        const tmp5 = asyncRequire(10847, dependencyMap.paths);
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
