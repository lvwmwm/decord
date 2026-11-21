// Module ID: 14203
// Function ID: 14204
// Name: useTieredTenureBadgeClickHandler
// Dependencies: [19, 1386, 1388, 8139, 1071, 7564, 14204, 14023, 6963, 504, 8194, 5127, 14021, 2119, 14021, 1255, 2]
// Exports: useTieredTenureBadgeClickHandler

// Module 14203 (useTieredTenureBadgeClickHandler)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import Constants2 from "Constants" /* 7564 */;
import Constants3 from "Constants" /* 8139 */;
import openUserSettings from "openUserSettings" /* 8194 */;
import TieredTenureBadgeActionSheet from "TieredTenureBadgeActionSheet" /* 14021 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
import Constants from "Constants" /* 1071 */;
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

export function useTieredTenureBadgeClickHandler(id, userId, themeType) {
  let badge;
  _require = id;
  dependencyMap = themeType;
  let obj = require("useIsPremiumSubscriber");
  const isPremiumSubscriber = obj.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  let obj2 = require("useCanUseTenureBadge");
  let tmp5 = typeof id === "string";
  let canUseTenureBadge = obj2.useCanUseTenureBadge();
  if (typeof id === "string") {
    const tmpResult = require("TieredTenureBadgeUtils");
    tmp5 = null != tmpResult.getTieredTenureBadge(id);
  }
  const items = [canUseTenureBadge];
  const tmpResult2 = require("get initialized");
  const stateFromStores = tmpResult2.useStateFromStores(items, () => canUseTenureBadge.getCurrentUser());
  if (!tmp5) {
    let tmp8 = id === DEFAULT_PREMIUM_BADGE_ID;
    if (tmp8) {
      id = undefined;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      tmp8 = userId === id;
    }
    if (tmp8) {
      tmp8 = canUseTenureBadge;
    }
    tmp5 = tmp8;
  }
  canUseTenureBadge = tmp5;
  const items1 = [themeType, userId, tmp5, id, isPremiumSubscriber];
  let callback = null;
  if (tmp5) {
    callback = isPremiumSubscriber.useCallback(() => {
      if (themeType === UserProfileThemeTypes.YOU_SCREEN) {
        const obj3 = { screen: metroImportAll.PREMIUM };
        const obj2 = openUserSettings;
        obj2.openUserSettings(obj3);
      } else {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        const obj = { userId };
        const tmp5 = asyncRequire(14021, dependencyMap.paths);
        openLazy(tmp5, TieredTenureBadgeActionSheet.TIERED_TENURE_BADGE_ACTION_SHEET_KEY, obj, "stack");
      }
      const tmp15 = canUseTenureBadge;
      if (tmp15) {
        const obj5 = { badge, viewed_user_id: userId, premium_type: isPremiumSubscriber };
        const obj4 = AnalyticsUtilsDefault;
        obj4.track(metroImportDefault.TIERED_TENURE_BADGE_CLICKED, obj5);
      }
    }, items1);
  }
  return callback;
}
