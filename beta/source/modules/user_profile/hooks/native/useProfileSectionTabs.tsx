// Module ID: 13419
// Function ID: 13420
// Name: useProfileSectionTabs
// Dependencies: [32, 19, 8489, 558, 568, 2]
// Exports: useProfileTabIndices

// Module 13419 (useProfileSectionTabs)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const UserProfileSections = fn(8489).UserProfileSections;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useProfileSectionTabs.tsx");

export function useProfileTabIndices(arg0, isRecentActivityMobileEnabled, arg2) {
  let num = -1;
  let num2 = 1;
  let num3 = -1;
  if (arg0) {
    num2 = 2;
    num3 = 1;
  }
  const obj = { boardTabIndex: num3, activityTabIndex: null, wishlistTabIndex: null };
  let sum = num2;
  let tmp2 = num;
  if (isRecentActivityMobileEnabled) {
    sum = num2 + 1;
    tmp2 = num2;
  }
  obj.activityTabIndex = tmp2;
  if (arg2) {
    num = sum;
  }
  obj.wishlistTabIndex = num;
  return obj;
}
export const useProfileSectionTabs = ReactCompilerGating.isReactCompilerEnabled() ? ((initialUserProfileSection) => {
  const cResult = initialUserProfileSection(wishlistTabIndex[4]).c(14);
  initialUserProfileSection = initialUserProfileSection.initialUserProfileSection;
  wishlistTabIndex = initialUserProfileSection.wishlistTabIndex;
  const boardTabIndex = initialUserProfileSection.boardTabIndex;
  const activityTabIndex = initialUserProfileSection.activityTabIndex;
  const onTabChange = initialUserProfileSection.onTabChange;
  if (cResult[0] !== initialUserProfileSection) {
    const fn = function s() {
      if (UserProfileSections.WISHLIST === initialUserProfileSection) {
        return tmp2.WISHLIST;
      } else if (tmp2.WIDGETS === tmp) {
        return tmp2.WIDGETS;
      } else {
        return tmp2.ACTIVITY === tmp ? tmp2.ACTIVITY : tmp2.MAIN;
      }
    };
    cResult[0] = initialUserProfileSection;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const obj = initialUserProfileSection(wishlistTabIndex[4]);
  [tmp4, tmp5] = boardTabIndex(activityTabIndex.useState(tmp2), 2);
  let num3 = wishlistTabIndex;
  if (onTabChange.WISHLIST !== tmp4) {
    num3 = boardTabIndex;
    if (tmp6.WIDGETS !== tmp4) {
      num3 = activityTabIndex;
      if (tmp6.ACTIVITY !== tmp4) {
        if (tmp6.MAIN === tmp4) {
          num3 = 0;
        }
      }
    }
  }
  if (num3 < 0) {
    tmp5(tmp6.MAIN);
  }
  let num4 = 0;
  if (num3 >= 0) {
    num4 = num3;
  }
  if (cResult[2] === activityTabIndex) {
    if (cResult[3] === boardTabIndex) {
      if (cResult[4] === onTabChange) {
        if (cResult[5] === wishlistTabIndex) {
          let tmp8 = cResult[6];
        }
        if (cResult[7] !== num4) {
          const fn2 = function k(activeIndex) {
            activeIndex = activeIndex.activeIndex;
            if (activeIndex.get() !== num4) {
              activeIndex.setActiveIndex(tmp, false, true);
            }
          };
          cResult[7] = num4;
          cResult[8] = fn2;
          let tmp9 = fn2;
        } else {
          tmp9 = cResult[8];
        }
        if (cResult[9] === tmp4) {
          if (cResult[10] === tmp8) {
            if (cResult[11] === tmp9) {
              if (cResult[12] === num4) {
                let tmp10 = cResult[13];
              }
              return tmp10;
            }
          }
        }
        const obj2 = { activeProfileTabSection: tmp4, setActiveProfileTabSection: tmp5, handleTabChange: tmp8, restoreActiveIndex: tmp9, activeProfileTabSectionIndex: num4 };
        cResult[9] = tmp4;
        cResult[10] = tmp8;
        cResult[11] = tmp9;
        cResult[12] = num4;
        cResult[13] = obj2;
        tmp10 = obj2;
      }
    }
  }
  class C {
    constructor(arg0) {
      if (wishlistTabIndex === initialUserProfileSection) {
        tmp6 = UserProfileSections;
        MAIN = UserProfileSections.WISHLIST;
      } else {
        tmp = boardTabIndex;
        if (boardTabIndex === initialUserProfileSection) {
          tmp5 = UserProfileSections;
          MAIN = UserProfileSections.WIDGETS;
        } else {
          tmp2 = activityTabIndex;
          if (activityTabIndex === initialUserProfileSection) {
            tmp4 = UserProfileSections;
            MAIN = UserProfileSections.ACTIVITY;
          } else {
            tmp3 = UserProfileSections;
            MAIN = UserProfileSections.MAIN;
          }
        }
      }
      tmp7 = closure_5(MAIN);
      if (onTabChange != null) {
        tmp8 = onTabChange(MAIN);
      }
      return;
    }
  }
  cResult[2] = activityTabIndex;
  cResult[3] = boardTabIndex;
  cResult[4] = onTabChange;
  cResult[5] = wishlistTabIndex;
  cResult[6] = C;
  tmp8 = C;
}) : ((boardTabIndex) => {
  ({ initialUserProfileSection: require, wishlistTabIndex } = boardTabIndex);
  boardTabIndex = boardTabIndex.boardTabIndex;
  const activityTabIndex = boardTabIndex.activityTabIndex;
  const onTabChange = boardTabIndex.onTabChange;
  let num2;
  [tmp2, tmp3] = boardTabIndex(activityTabIndex.useState(() => {
    if (UserProfileSections.WISHLIST === require) {
      return tmp2.WISHLIST;
    } else if (tmp2.WIDGETS === tmp) {
      return tmp2.WIDGETS;
    } else {
      return tmp2.ACTIVITY === tmp ? tmp2.ACTIVITY : tmp2.MAIN;
    }
  }), 2);
  c5 = tmp3;
  let num = wishlistTabIndex;
  if (onTabChange.WISHLIST !== tmp2) {
    num = boardTabIndex;
    if (tmp4.WIDGETS !== tmp2) {
      num = activityTabIndex;
      if (tmp4.ACTIVITY !== tmp2) {
        if (tmp4.MAIN === tmp2) {
          num = 0;
        }
      }
    }
  }
  if (num < 0) {
    tmp3(tmp4.MAIN);
  }
  num2 = 0;
  if (num >= 0) {
    num2 = num;
  }
  const items = [wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange];
  const items1 = [num2];
  const callback = obj.useCallback((arg0) => {
    if (wishlistTabIndex === arg0) {
      let MAIN = UserProfileSections.WISHLIST;
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
  const tmp = boardTabIndex(activityTabIndex.useState(() => {
    if (UserProfileSections.WISHLIST === require) {
      return tmp2.WISHLIST;
    } else if (tmp2.WIDGETS === tmp) {
      return tmp2.WIDGETS;
    } else {
      return tmp2.ACTIVITY === tmp ? tmp2.ACTIVITY : tmp2.MAIN;
    }
  }), 2);
  return {
    activeProfileTabSection: tmp2,
    setActiveProfileTabSection: tmp3,
    handleTabChange: callback,
    restoreActiveIndex: activityTabIndex.useCallback((activeIndex) => {
      activeIndex = activeIndex.activeIndex;
      if (activeIndex.get() !== num2) {
        activeIndex.setActiveIndex(tmp, false, true);
      }
    }, items1),
    activeProfileTabSectionIndex: num2
  };
});
