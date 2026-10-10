// Module ID: 13367
// Function ID: 13368
// Name: useProfileSectionTabs
// Dependencies: [32, 19, 8307, 558, 576, 2]
// Exports: getProfileTabSectionIndex, useProfileTabIndices

// Module 13367 (useProfileSectionTabs)
import Constants from "Constants" /* 8307 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const UserProfileSections = Constants.UserProfileSections;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useProfileSectionTabs(initialUserProfileSection) {
  let closure_5;
  let tmp2;
  let tmp4;
  let tmp5;
  let wishlistTabIndex;
  const obj = initialUserProfileSection(wishlistTabIndex[4]);
  const cResult = obj.c(19);
  initialUserProfileSection = initialUserProfileSection.initialUserProfileSection;
  wishlistTabIndex = initialUserProfileSection.wishlistTabIndex;
  const boardTabIndex = initialUserProfileSection.boardTabIndex;
  const activityTabIndex = initialUserProfileSection.activityTabIndex;
  const onTabChange = initialUserProfileSection.onTabChange;
  if (cResult[0] !== initialUserProfileSection) {
    const fn = function s() {
      if (UserProfileSections.WISHLIST === initialUserProfileSection) {
        return UserProfileSections.WISHLIST;
      } else if (UserProfileSections.WIDGETS === initialUserProfileSection) {
        return UserProfileSections.WIDGETS;
      } else {
        return UserProfileSections.ACTIVITY === initialUserProfileSection ? UserProfileSections.ACTIVITY : UserProfileSections.MAIN;
      }
    };
    cResult[0] = initialUserProfileSection;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  [tmp4, tmp5] = boardTabIndex(activityTabIndex.useState(tmp2), 2);
  const tmp3 = boardTabIndex(activityTabIndex.useState(tmp2), 2);
  if (cResult[2] === tmp4) {
    if (cResult[3] === activityTabIndex) {
      if (cResult[4] === boardTabIndex) {
        let tmp6;
        if (cResult[5] === wishlistTabIndex) {
          tmp6 = cResult[6];
        }
        if (tmp6 < 0) {
          tmp5(onTabChange.MAIN);
        }
        let num5 = 0;
        if (tmp6 >= 0) {
          num5 = tmp6;
        }
        if (cResult[7] === activityTabIndex) {
          if (cResult[8] === boardTabIndex) {
            if (cResult[9] === onTabChange) {
              let tmp10;
              let tmp11;
              if (cResult[10] === wishlistTabIndex) {
                tmp10 = cResult[11];
              }
              if (cResult[12] !== num5) {
                const fn2 = function w(activeIndex) {
                  activeIndex = activeIndex.activeIndex;
                  if (activeIndex.get() !== num5) {
                    activeIndex.setActiveIndex(tmp, false, true);
                  }
                };
                cResult[12] = num5;
                cResult[13] = fn2;
                tmp11 = fn2;
              } else {
                tmp11 = cResult[13];
              }
              if (cResult[14] === tmp4) {
                if (cResult[15] === tmp10) {
                  if (cResult[16] === tmp11) {
                    let tmp12;
                    if (cResult[17] === num5) {
                      tmp12 = cResult[18];
                    }
                    return tmp12;
                  }
                }
              }
              const obj2 = { activeProfileTabSection: tmp4, setActiveProfileTabSection: tmp5, handleTabChange: tmp10, restoreActiveIndex: null, activeProfileTabSectionIndex: num5 };
              class C {
                constructor(arg0) {
                  let MAIN;
                  let tmp5;
                  if (wishlistTabIndex === arg0) {
                    MAIN = UserProfileSections.WISHLIST;
                  } else if (boardTabIndex === arg0) {
                    MAIN = UserProfileSections.WIDGETS;
                    tmp5 = UserProfileSections;
                  } else if (activityTabIndex === arg0) {
                    MAIN = UserProfileSections.ACTIVITY;
                  } else {
                    MAIN = UserProfileSections.MAIN;
                  }
                  tmp5(MAIN);
                  if (onTabChange != null) {
                    onTabChange(MAIN);
                  }
                }
              }
              cResult[14] = tmp4;
              cResult[15] = tmp10;
              cResult[16] = tmp11;
              cResult[17] = num5;
              cResult[18] = obj2;
              tmp12 = obj2;
            }
          }
        }
        class C {
          constructor(arg0) {
            let MAIN;
            let tmp5;
            if (wishlistTabIndex === arg0) {
              MAIN = UserProfileSections.WISHLIST;
            } else if (boardTabIndex === arg0) {
              MAIN = UserProfileSections.WIDGETS;
              tmp5 = UserProfileSections;
            } else if (activityTabIndex === arg0) {
              MAIN = UserProfileSections.ACTIVITY;
            } else {
              MAIN = UserProfileSections.MAIN;
            }
            tmp5(MAIN);
            if (onTabChange != null) {
              onTabChange(MAIN);
            }
          }
        }
        cResult[7] = activityTabIndex;
        cResult[8] = boardTabIndex;
        cResult[9] = onTabChange;
        cResult[10] = wishlistTabIndex;
        cResult[11] = C;
        tmp10 = C;
      }
    }
  }
  let num3 = wishlistTabIndex;
  if (onTabChange.WISHLIST !== tmp4) {
    num3 = boardTabIndex;
    if (onTabChange.WIDGETS !== tmp4) {
      num3 = activityTabIndex;
      if (onTabChange.ACTIVITY !== tmp4) {
        if (onTabChange.MAIN === tmp4) {
          num3 = 0;
        }
      }
    }
  }
  cResult[2] = tmp4;
  cResult[3] = activityTabIndex;
  cResult[4] = boardTabIndex;
  cResult[5] = wishlistTabIndex;
  cResult[6] = num3;
  tmp6 = num3;
}) : (function useProfileSectionTabs(boardTabIndex) {
  let _undefined;
  let tmp2;
  let tmp3;
  let wishlistTabIndex;
  ({ initialUserProfileSection: require, wishlistTabIndex } = boardTabIndex);
  boardTabIndex = boardTabIndex.boardTabIndex;
  const activityTabIndex = boardTabIndex.activityTabIndex;
  const onTabChange = boardTabIndex.onTabChange;
  let num2;
  const tmp = boardTabIndex(activityTabIndex.useState(() => {
    if (UserProfileSections.WISHLIST === require) {
      return UserProfileSections.WISHLIST;
    } else if (UserProfileSections.WIDGETS === require) {
      return UserProfileSections.WIDGETS;
    } else {
      return UserProfileSections.ACTIVITY === require ? UserProfileSections.ACTIVITY : UserProfileSections.MAIN;
    }
  }), 2);
  [tmp2, tmp3] = tmp;
  let c5 = tmp3;
  let num = wishlistTabIndex;
  if (onTabChange.WISHLIST !== tmp2) {
    num = boardTabIndex;
    if (onTabChange.WIDGETS !== tmp2) {
      num = activityTabIndex;
      if (onTabChange.ACTIVITY !== tmp2) {
        if (onTabChange.MAIN === tmp2) {
          num = 0;
        }
      }
    }
  }
  if (num < 0) {
    tmp3(onTabChange.MAIN);
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
    restoreActiveIndex: activityTabIndex.useCallback((activeIndex) => {
      activeIndex = activeIndex.activeIndex;
      if (activeIndex.get() !== num2) {
        activeIndex.setActiveIndex(tmp, false, true);
      }
    }, items1),
    activeProfileTabSectionIndex: num2
  };
  return obj2;
});
function getProfileTabSectionIndex(initialTab, wishlistTabIndex) {
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
export { getProfileTabSectionIndex };
export const useProfileSectionTabs = tmp2;
