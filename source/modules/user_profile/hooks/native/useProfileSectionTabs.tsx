// Module ID: 12133
// Function ID: 95084
// Name: useProfileTabIndices
// Dependencies: [57, 31, 8308, 2]
// Exports: useProfileSectionTabs, useProfileTabIndices

// Module 12133 (useProfileTabIndices)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY";

const result = require("USER_PROFILE_TOOLTIP_DELAY").fileFinishedImporting("modules/user_profile/hooks/native/useProfileSectionTabs.tsx");

export const useProfileTabIndices = function useProfileTabIndices(arg0, arg1) {
  const obj = {};
  let num = -1;
  let num2 = -1;
  if (arg0) {
    num2 = 1;
  }
  obj.boardTabIndex = num2;
  if (arg1) {
    let num3 = 1;
    if (arg0) {
      num3 = 2;
    }
    num = num3;
  }
  obj.wishlistTabIndex = num;
  return obj;
};
export const useProfileSectionTabs = function useProfileSectionTabs(boardTabIndex) {
  let _slicedToArray;
  let wishlistTabIndex;
  ({ initialUserProfileSection: _slicedToArray, wishlistTabIndex } = boardTabIndex);
  boardTabIndex = boardTabIndex.boardTabIndex;
  const onTabChange = boardTabIndex.onTabChange;
  let num2;
  const tmp = callback(wishlistTabIndex.useState(() => {
    if (boardTabIndex.WISHLIST === _slicedToArray) {
      return boardTabIndex.WISHLIST;
    } else if (boardTabIndex.WIDGETS === tmp) {
      return boardTabIndex.WIDGETS;
    } else {
      return boardTabIndex.MAIN;
    }
  }), 2);
  const first = tmp[0];
  let closure_4 = tmp3;
  if (boardTabIndex.WISHLIST === first) {
    let num = wishlistTabIndex;
  } else if (boardTabIndex.WIDGETS === first) {
    num = boardTabIndex;
  } else if (boardTabIndex.MAIN === first) {
    num = 0;
  }
  if (num < 0) {
    tmp3(boardTabIndex.MAIN);
  }
  num2 = 0;
  if (num >= 0) {
    num2 = num;
  }
  const items = [wishlistTabIndex, boardTabIndex, onTabChange];
  const items1 = [num2];
  callback = wishlistTabIndex.useCallback((arg0) => {
    if (wishlistTabIndex === arg0) {
      let MAIN = boardTabIndex.WISHLIST;
    } else if (boardTabIndex === arg0) {
      MAIN = boardTabIndex.WIDGETS;
      const tmp3 = boardTabIndex;
    } else {
      MAIN = boardTabIndex.MAIN;
    }
    tmp3(MAIN);
    if (null != onTabChange) {
      onTabChange(MAIN);
    }
  }, items);
  const obj = {
    activeProfileTabSection: first,
    setActiveProfileTabSection: tmp[1],
    handleTabChange: callback,
    restoreActiveIndex: wishlistTabIndex.useCallback((activeIndex) => {
      activeIndex = activeIndex.activeIndex;
      if (activeIndex.get() !== num2) {
        activeIndex.setActiveIndex(num2, false, true);
      }
    }, items1),
    activeProfileTabSectionIndex: num2
  };
  return obj;
};
