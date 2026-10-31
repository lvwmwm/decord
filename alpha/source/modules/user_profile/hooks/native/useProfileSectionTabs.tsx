// Module ID: 14983
// Function ID: 14984
// Name: useProfileSectionTabs
// Dependencies: [32, 19, 8754, 2]
// Exports: getProfileTabSectionIndex, useProfileSectionTabs, useProfileTabIndices

// Module 14983 (useProfileSectionTabs)
import Constants from "Constants" /* 8754 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let activeIndex;

const UserProfileSections = Constants.UserProfileSections;
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useProfileSectionTabs.tsx");

export function useProfileTabIndices(arg0, isRecentActivityMobileEnabled, arg2) {
  let tmp2;
  let num = -1;
  let num2 = 1;
  let num3 = -1;
  if (arg0) {
    num2 = 2;
    num3 = 1;
  }
  let sum = num2;
  const obj = { boardTabIndex: num3, activityTabIndex: tmp2, wishlistTabIndex: num };
  tmp2 = num;
  if (isRecentActivityMobileEnabled) {
    sum = num2 + 1;
    tmp2 = num2;
  }
  if (arg2) {
    num = sum;
  }
  return obj;
}
export function getProfileTabSectionIndex(initialTab, wishlistTabIndex) {
  if (UserProfileSections.WISHLIST === initialTab) {
    return wishlistTabIndex.wishlistTabIndex;
  } else if (UserProfileSections.WIDGETS === initialTab) {
    return tmp;
  } else if (UserProfileSections.ACTIVITY === initialTab) {
    return tmp2;
  } else if (UserProfileSections.MAIN === initialTab) {
    return 0;
  }
}
export function useProfileSectionTabs(boardTabIndex) {
  let _undefined;
  let tmp2;
  let tmp3;
  let wishlistTabIndex;
  ({ initialUserProfileSection: _slicedToArray, wishlistTabIndex } = boardTabIndex);
  boardTabIndex = boardTabIndex.boardTabIndex;
  const activityTabIndex = boardTabIndex.activityTabIndex;
  const onTabChange = boardTabIndex.onTabChange;
  let num2;
  const tmp = _slicedToArray(wishlistTabIndex.useState(() => {
    if (UserProfileSections.WISHLIST === _slicedToArray) {
      return UserProfileSections.WISHLIST;
    } else if (UserProfileSections.WIDGETS === _slicedToArray) {
      return UserProfileSections.WIDGETS;
    } else {
      return UserProfileSections.ACTIVITY === _slicedToArray ? UserProfileSections.ACTIVITY : UserProfileSections.MAIN;
    }
  }), 2);
  [tmp2, tmp3] = tmp;
  let c5 = tmp3;
  let num = wishlistTabIndex;
  if (boardTabIndex.WISHLIST !== tmp2) {
    num = boardTabIndex;
    if (boardTabIndex.WIDGETS !== tmp2) {
      num = activityTabIndex;
      if (boardTabIndex.ACTIVITY !== tmp2) {
        if (boardTabIndex.MAIN === tmp2) {
          num = 0;
        }
      }
    }
  }
  if (num < 0) {
    tmp3(boardTabIndex.MAIN);
  }
  num2 = 0;
  if (num >= 0) {
    num2 = num;
  }
  const items = [wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange];
  const items1 = [num2];
  const callback = obj.useCallback((arg0) => {
    let MAIN;
    if (wishlistTabIndex === arg0) {
      MAIN = UserProfileSections.WISHLIST;
    } else if (boardTabIndex === arg0) {
      MAIN = UserProfileSections.WIDGETS;
    } else if (activityTabIndex === arg0) {
      MAIN = UserProfileSections.ACTIVITY;
    } else {
      MAIN = UserProfileSections.MAIN;
    }
    _undefined(MAIN);
    if (onTabChange != null) {
      onTabChange(MAIN);
    }
  }, items);
  const obj2 = {
    activeProfileTabSection: tmp2,
    setActiveProfileTabSection: tmp3,
    handleTabChange: callback,
    restoreActiveIndex: wishlistTabIndex.useCallback((activeIndex) => {
      activeIndex = activeIndex.activeIndex;
      if (activeIndex.get() !== num2) {
        activeIndex.setActiveIndex(tmp, false, true);
      }
    }, items1),
    activeProfileTabSectionIndex: num2
  };
  return obj2;
}
