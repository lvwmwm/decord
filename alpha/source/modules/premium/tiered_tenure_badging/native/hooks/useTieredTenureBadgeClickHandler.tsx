// Module ID: 9819
// Function ID: 9820
// Name: useTieredTenureBadgeClickHandler
// Dependencies: [19, 1387, 1389, 6385, 1071, 7557, 9820, 9821, 6176, 504, 8109, 5257, 9824, 2120, 9824, 1256, 2]
// Exports: useTieredTenureBadgeClickHandler

// Module 9819 (useTieredTenureBadgeClickHandler)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import PremiumConstants from "PremiumConstants" /* 1389 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import Constants2 from "Constants" /* 6385 */;
import Constants3 from "Constants" /* 7557 */;
import openUserSettings from "openUserSettings" /* 8109 */;
import TieredTenureBadgeActionSheet from "TieredTenureBadgeActionSheet" /* 9824 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1387 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let metroImportAll;
let metroImportDefault;
const PremiumTypes = PremiumConstants.PremiumTypes;
const DEFAULT_PREMIUM_BADGE_ID = Constants2.DEFAULT_PREMIUM_BADGE_ID;
({ AnalyticEvents: metroImportDefault, UserSettingsSections: metroImportAll } = Constants);
const UserProfileThemeTypes = Constants3.UserProfileThemeTypes;
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
        const tmp5 = asyncRequire(9824, dependencyMap.paths);
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
