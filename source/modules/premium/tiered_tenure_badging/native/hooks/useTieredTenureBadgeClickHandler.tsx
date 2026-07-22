// Module ID: 8521
// Function ID: 67930
// Name: useTieredTenureBadgeClickHandler
// Dependencies: []
// Exports: useTieredTenureBadgeClickHandler

// Module 8521 (useTieredTenureBadgeClickHandler)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const PremiumTypes = arg1(dependencyMap[2]).PremiumTypes;
const DEFAULT_PREMIUM_BADGE_ID = arg1(dependencyMap[3]).DEFAULT_PREMIUM_BADGE_ID;
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = arg1(dependencyMap[4]));
const UserProfileThemeTypes = arg1(dependencyMap[5]).UserProfileThemeTypes;
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useTieredTenureBadgeClickHandler.tsx");

export const useTieredTenureBadgeClickHandler = function useTieredTenureBadgeClickHandler(id, userId, themeType) {
  userId = id;
  const importDefault = userId;
  const dependencyMap = themeType;
  const isPremiumSubscriber = userId(dependencyMap[6]).useIsPremiumSubscriber(PremiumTypes.TIER_2);
  const React = isPremiumSubscriber;
  let tmp2 = "string" === typeof id;
  if (tmp2) {
    tmp2 = null != userId(dependencyMap[7]).getTieredTenureBadge(id);
    const obj2 = userId(dependencyMap[7]);
  }
  const obj = userId(dependencyMap[6]);
  const items = [closure_4];
  const stateFromStores = userId(dependencyMap[8]).useStateFromStores(items, () => tmp2.getCurrentUser());
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
  closure_4 = tmp2;
  const items1 = [themeType, userId, tmp2, id, isPremiumSubscriber];
  let callback = null;
  if (tmp2) {
    callback = React.useCallback(() => {
      if (arg2 === constants3.YOU_SCREEN) {
        let obj = { screen: constants2.PREMIUM };
        arg0(arg2[9]).openUserSettings(obj);
        const obj3 = arg0(arg2[9]);
      } else {
        obj = arg1(arg2[10]);
        const tmp4 = arg0(arg2[12])(arg2[11], arg2.paths);
        obj = { userId: arg1 };
        obj.openLazy(tmp4, arg0(arg2[13]).TIERED_TENURE_BADGE_ACTION_SHEET_KEY, obj, "stack");
        const tmp2 = arg2;
      }
      if (tmp2) {
        const obj1 = { badge: arg0, viewed_user_id: arg1, premium_type: isPremiumSubscriber };
        arg1(arg2[14]).track(constants.TIERED_TENURE_BADGE_CLICKED, obj1);
        const obj5 = arg1(arg2[14]);
      }
    }, items1);
  }
  return callback;
};
