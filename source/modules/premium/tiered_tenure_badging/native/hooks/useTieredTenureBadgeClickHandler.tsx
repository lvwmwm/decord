// Module ID: 8572
// Function ID: 68197
// Name: useTieredTenureBadgeClickHandler
// Dependencies: [31, 1849, 1851, 8573, 653, 5510, 8574, 6876, 566, 5796, 4098, 8575, 1934, 8575, 675, 2]
// Exports: useTieredTenureBadgeClickHandler

// Module 8572 (useTieredTenureBadgeClickHandler)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";
import { DEFAULT_PREMIUM_BADGE_ID } from "DEFAULT_PREMIUM_BADGE_ID";
import ME from "ME";
import { UserProfileThemeTypes } from "ARBITRARY_LARGE_OFFSET";

let closure_7;
let closure_8;
const require = arg1;
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = ME);
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useTieredTenureBadgeClickHandler.tsx");

export const useTieredTenureBadgeClickHandler = function useTieredTenureBadgeClickHandler(id, userId, themeType) {
  const _require = id;
  let closure_1 = userId;
  const dependencyMap = themeType;
  const isPremiumSubscriber = _require(8574).useIsPremiumSubscriber(PremiumTypes.TIER_2);
  let tmp2 = "string" === typeof id;
  if (tmp2) {
    tmp2 = null != _require(6876).getTieredTenureBadge(id);
    const obj2 = _require(6876);
  }
  let obj = _require(8574);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => tmp2.getCurrentUser());
  let tmp7 = id === DEFAULT_PREMIUM_BADGE_ID;
  if (tmp7) {
    id = undefined;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    tmp7 = userId === id;
  }
  if (tmp7) {
    tmp7 = isPremiumSubscriber;
  }
  if (!tmp2) {
    tmp2 = tmp7;
  }
  _isNativeReflectConstruct = tmp2;
  const items1 = [themeType, userId, tmp2, id, isPremiumSubscriber];
  let callback = null;
  if (tmp2) {
    callback = isPremiumSubscriber.useCallback(() => {
      if (themeType === outer1_9.YOU_SCREEN) {
        let obj = { screen: outer1_8.PREMIUM };
        id(themeType[9]).openUserSettings(obj);
        const obj3 = id(themeType[9]);
      } else {
        obj = userId(themeType[10]);
        const tmp4 = id(themeType[12])(themeType[11], themeType.paths);
        obj = { userId };
        obj.openLazy(tmp4, id(themeType[13]).TIERED_TENURE_BADGE_ACTION_SHEET_KEY, obj, "stack");
      }
      if (_isNativeReflectConstruct) {
        const obj1 = { badge: id, viewed_user_id: userId, premium_type: isPremiumSubscriber };
        userId(themeType[14]).track(outer1_7.TIERED_TENURE_BADGE_CLICKED, obj1);
        const obj5 = userId(themeType[14]);
      }
    }, items1);
  }
  return callback;
};
