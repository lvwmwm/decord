// Module ID: 14944
// Function ID: 113957
// Name: computeIsFavoritesGuildVisible
// Dependencies: [1340, 3948, 1351, 1841, 10158, 10152, 1334, 3947, 566, 2]
// Exports: default, isFavoritesGuildVisible

// Module 14944 (computeIsFavoritesGuildVisible)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

let closure_2;
let closure_3;
function computeIsFavoritesGuildVisible(closure_5, closure_4, isExperimentEnabled) {
  let tmp5 = !tmp4;
  if (!!isExperimentEnabled.isExperimentEnabled) {
    let tmp7 = !(!isExperimentEnabled.isMenuItemDCSelected || tmp3);
    if (!tmp7) {
      const tmp10 = !require(1841) /* isFavoritesGuildId */.isFavoritesGuildId(closure_4.getGuildId());
      let tmp11 = !tmp10;
      if (tmp10) {
        let isFavoritesGuildEnabled = !tmp12;
        if (!!tmp2) {
          isFavoritesGuildEnabled = require(10158) /* computeIsFavoritesGuildEnabled */.computeIsFavoritesGuildEnabled(tmp, closure_5);
          const obj2 = require(10158) /* computeIsFavoritesGuildEnabled */;
        }
        tmp11 = isFavoritesGuildEnabled;
      }
      tmp7 = tmp11;
      const obj = require(1841) /* isFavoritesGuildId */;
    }
    tmp5 = tmp7;
    const tmp6 = !isExperimentEnabled.isMenuItemDCSelected || tmp3;
  }
  return tmp5;
}
({ isContentShown: closure_2, useIsContentShown: closure_3 } = _isNativeReflectConstruct);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildVisible.tsx");

export default function useIsFavoritesGuildVisible(FavoritesGuildChannelList) {
  const favoritesAccess = isExperimentEnabled(isFreemium[5]).useFavoritesAccess(FavoritesGuildChannelList);
  isExperimentEnabled = favoritesAccess.isExperimentEnabled;
  isFreemium = favoritesAccess.isFreemium;
  const hasAccess = favoritesAccess.hasAccess;
  const tmp2 = callback2(isExperimentEnabled(isFreemium[6]).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
  callback2 = tmp2;
  const obj = isExperimentEnabled(isFreemium[5]);
  const result = isExperimentEnabled(isFreemium[7]).useIsDismissibleContentDismissed_UNSAFE(isExperimentEnabled(isFreemium[6]).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO);
  const obj2 = isExperimentEnabled(isFreemium[7]);
  const items = [closure_5, result];
  const items1 = [isExperimentEnabled, isFreemium, hasAccess, tmp2, result];
  return isExperimentEnabled(isFreemium[8]).useStateFromStores(items, () => outer1_6(outer1_5, result, { isExperimentEnabled, isFreemium, hasAccess, isMenuItemDCSelected: closure_3, isIntroDCDismissed: closure_4 }), items1);
};
export const isFavoritesGuildVisible = function isFavoritesGuildVisible() {
  let hasAccess;
  let isExperimentEnabled;
  let isFreemium;
  let obj = require(10152) /* computeFavoritesAccess */;
  const favoritesAccess = obj.getFavoritesAccess();
  ({ isExperimentEnabled, isFreemium, hasAccess } = favoritesAccess);
  const tmp2 = callback(require(1334) /* DismissibleContent */.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
  obj = { isExperimentEnabled, isFreemium, hasAccess, isMenuItemDCSelected: tmp2, isIntroDCDismissed: require(3947) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_isDismissibleContentDismissed(require(1334) /* DismissibleContent */.DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO) };
  return computeIsFavoritesGuildVisible(closure_5, closure_4, obj);
};
