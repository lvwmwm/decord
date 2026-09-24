// Module ID: 11446
// Function ID: 11447
// Name: useTieredTenureBadgeClickHandler
// Dependencies: [19, 1376, 1378, 8500, 1078, 7487, 11447, 7907, 504, 7658, 4757, 11448, 1984, 11448, 1245, 2]
// Exports: useTieredTenureBadgeClickHandler

// Module 11446 (useTieredTenureBadgeClickHandler)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import openUserSettings from "openUserSettings" /* 7658 */;
import TieredTenureBadgeActionSheet from "TieredTenureBadgeActionSheet" /* 11448 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;

require = fn;
const PremiumTypes = fn(1378).PremiumTypes;
const DEFAULT_PREMIUM_BADGE_ID = fn(8500).DEFAULT_PREMIUM_BADGE_ID;
const Constants = fn(1078);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = Constants);
const UserProfileThemeTypes = fn(7487).UserProfileThemeTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useTieredTenureBadgeClickHandler.tsx");

export const useTieredTenureBadgeClickHandler = function useTieredTenureBadgeClickHandler(id, userId, themeType) {
  _require = id;
  dependencyMap = themeType;
  let isPremiumSubscriber = require("useIsPremiumSubscriber").useIsPremiumSubscriber(PremiumTypes.TIER_2);
  let tmp4 = typeof id === "string";
  if (typeof id === "string") {
    tmp4 = null != tmp(7907).getTieredTenureBadge(id);
    const tmpResult = tmp(7907);
  }
  let obj = require("useIsPremiumSubscriber");
  const items = [isPremiumSubscriber];
  const stateFromStores = require("initialize").useStateFromStores(items, () => isPremiumSubscriber.getCurrentUser());
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
      if (closure_2 === UserProfileThemeTypes.YOU_SCREEN) {
        const obj2 = { screen: constants2.PREMIUM };
        openUserSettings.openUserSettings(obj2);
      } else {
        const obj = ActionSheetActionCreatorsDefault;
        const tmp4 = asyncRequireImpl(11448, dependencyMap.paths);
        const obj4 = { userId };
        obj.openLazy(tmp4, TieredTenureBadgeActionSheet.TIERED_TENURE_BADGE_ACTION_SHEET_KEY, obj4, "stack");
      }
      if (isPremiumSubscriber) {
        const obj6 = { badge, viewed_user_id: userId, premium_type: isPremiumSubscriber };
        AnalyticsUtilsDefault.track(constants.TIERED_TENURE_BADGE_CLICKED, obj6);
      }
    }, items1);
  }
  return callback;
};
