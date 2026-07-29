// Module ID: 15014
// Function ID: 15015
// Name: useIsFavoritesGuildVisible
// Dependencies: [1364, 4006, 1375, 1865, 10221, 10215, 1358, 4005, 589, 2]
// Exports: default, isFavoritesGuildVisible

// Module 15014 (useIsFavoritesGuildVisible)
import withContent from "withContent";
import handleConnectionOpen from "handleConnectionOpen";
import initializeFromUserSettings from "initializeFromUserSettings";

let c3;
let obj1;
({ isContentShown: obj1, useIsContentShown: c3 } = withContent);
let result = require("initializeFromUserSettings").fileFinishedImporting("modules/favorites/hooks/useIsFavoritesGuildVisible.tsx");

export default function useIsFavoritesGuildVisible(FavoritesGuildChannelList) {
  const favoritesAccess = isExperimentEnabled(isFreemium[5]).useFavoritesAccess(FavoritesGuildChannelList);
  isExperimentEnabled = favoritesAccess.isExperimentEnabled;
  isFreemium = favoritesAccess.isFreemium;
  const hasAccess = favoritesAccess.hasAccess;
  const tmp2 = callback2(isExperimentEnabled(isFreemium[6]).DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
  callback2 = tmp2;
  const obj = isExperimentEnabled(isFreemium[5]);
  const result = isExperimentEnabled(isFreemium[7]).useIsDismissibleContentDismissed_UNSAFE(isExperimentEnabled(isFreemium[6]).DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO);
  let handleConnectionOpen = result;
  let obj2 = isExperimentEnabled(isFreemium[7]);
  const items = [initializeFromUserSettings, handleConnectionOpen];
  const items1 = [isExperimentEnabled, isFreemium, hasAccess, tmp2, result];
  return isExperimentEnabled(isFreemium[8]).useStateFromStores(items, () => {
    let tmp6 = isExperimentEnabled;
    if (tmp6) {
      let tmp7 = !tmp4;
      if (tmp4) {
        tmp7 = tmp5;
      }
      let tmp8 = !tmp7;
      if (tmp7) {
        let isFavoritesGuildIdResult = isExperimentEnabled(isFreemium[3]).isFavoritesGuildId(result.getGuildId());
        if (!isFavoritesGuildIdResult) {
          let isFavoritesGuildEnabled = tmp3;
          if (isFavoritesGuildEnabled) {
            isFavoritesGuildEnabled = tmp9(tmp10[4]).computeIsFavoritesGuildEnabled(tmp2, tmp);
            const tmp9Result = tmp9(tmp10[4]);
          }
          isFavoritesGuildIdResult = isFavoritesGuildEnabled;
        }
        tmp8 = isFavoritesGuildIdResult;
        const obj2 = isExperimentEnabled(isFreemium[3]);
        tmp10 = isFreemium;
        tmp9 = isExperimentEnabled;
      }
      tmp6 = tmp8;
    }
    return tmp6;
  }, items1);
};
export const isFavoritesGuildVisible = function isFavoritesGuildVisible() {
  let hasAccess;
  let isExperimentEnabled;
  let isFreemium;
  const favoritesAccess = require(10215) /* useFavoritesAccess */.getFavoritesAccess();
  ({ isExperimentEnabled, isFreemium, hasAccess } = favoritesAccess);
  const tmp4 = callback(require(1358) /* DismissibleContent */.DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM);
  require(4005) /* UNSAFE_isDismissibleContentDismissed */;
  let tmp8 = isExperimentEnabled;
  if (tmp8) {
    let tmp9 = !tmp4;
    if (tmp4) {
      tmp9 = tmp6;
    }
    let tmp10 = !tmp9;
    if (tmp9) {
      let tmpResult = tmp(1865);
      let isFavoritesGuildIdResult = tmpResult.isFavoritesGuildId(handleConnectionOpen.getGuildId());
      if (!isFavoritesGuildIdResult) {
        let isFavoritesGuildEnabled = hasAccess;
        if (isFavoritesGuildEnabled) {
          tmpResult = tmp(10221);
          isFavoritesGuildEnabled = tmpResult.computeIsFavoritesGuildEnabled(isFreemium, tmp7);
        }
        isFavoritesGuildIdResult = isFavoritesGuildEnabled;
      }
      tmp10 = isFavoritesGuildIdResult;
    }
    tmp8 = tmp10;
  }
  return tmp8;
};
