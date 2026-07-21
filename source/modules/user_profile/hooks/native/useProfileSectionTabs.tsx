// Module ID: 11987
// Function ID: 92633
// Name: useProfileTabIndices
// Dependencies: [31, 33, 4126, 5468]
// Exports: useProfileSectionTabs, useProfileTabIndices

// Module 11987 (useProfileTabIndices)
import module_31 from "module_31";
import module_33 from "module_33";
import { UserProfileSections } from "_createForOfIteratorHelperLoose";
import useGetOrFetchApplications from "useGetOrFetchApplications";

const result = useGetOrFetchApplications.fileFinishedImporting("modules/user_profile/hooks/native/useProfileSectionTabs.tsx");

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
  let wishlistTabIndex;
  ({ initialUserProfileSection: module_31, wishlistTabIndex } = boardTabIndex);
  const React = wishlistTabIndex;
  boardTabIndex = boardTabIndex.boardTabIndex;
  const UserProfileSections = boardTabIndex;
  const onTabChange = boardTabIndex.onTabChange;
  let num2;
  const tmp = callback(React.useState(() => {
    if (boardTabIndex.WISHLIST === module_31) {
      return boardTabIndex.WISHLIST;
    } else if (boardTabIndex.WIDGETS === tmp) {
      return boardTabIndex.WIDGETS;
    } else {
      return boardTabIndex.MAIN;
    }
  }), 2);
  const first = tmp[0];
  const tmp3 = tmp[1];
  if (UserProfileSections.WISHLIST === first) {
    let num = wishlistTabIndex;
  } else if (UserProfileSections.WIDGETS === first) {
    num = boardTabIndex;
  } else if (UserProfileSections.MAIN === first) {
    num = 0;
  }
  if (num < 0) {
    tmp3(UserProfileSections.MAIN);
  }
  num2 = 0;
  if (num >= 0) {
    num2 = num;
  }
  const items = [wishlistTabIndex, boardTabIndex, onTabChange];
  const items1 = [num2];
  const callback = React.useCallback((arg0) => {
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
    setActiveProfileTabSection: tmp3,
    handleTabChange: callback,
    restoreActiveIndex: React.useCallback((activeIndex) => {
      activeIndex = activeIndex.activeIndex;
      if (activeIndex.get() !== num2) {
        activeIndex.setActiveIndex(num2, false, true);
      }
    }, items1),
    activeProfileTabSectionIndex: num2
  };
  return obj;
};
