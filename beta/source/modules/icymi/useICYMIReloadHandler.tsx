// Module ID: 16126
// Function ID: 16127
// Name: useICYMIReloadHandler
// Dependencies: [5, 19, 7807, 7799, 2]
// Exports: useICYMIReloadHandler

// Module 16126 (useICYMIReloadHandler)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c1, c2;

const result = size.fileFinishedImporting("modules/icymi/useICYMIReloadHandler.tsx");

export const useICYMIReloadHandler = function useICYMIReloadHandler(showDot) {
  let closure_0 = showDot;
  const items = [showDot];
  return react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let v3;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const ICYMIAnalytics = tmp(c2[2]).ICYMIAnalytics;
            let str = "NoDotShown";
            const trackFeedShown = ICYMIAnalytics.trackFeedShown;
            if (tmp) {
              str = "DotShown";
            }
            const obj5 = { variant: str, homeSessionId: "gravity_refresh" };
            trackFeedShown(obj5);
            const obj10 = c1(c2[3]);
            c1 = 1;
            c2 = 1;
            const obj7 = { value: obj10.fetchDehydrated({ isReloading: true }), done: false };
            return obj7;
          }
        } else if (1 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            const obj6 = c1(c2[3]);
            c1 = 2;
            c2 = 1;
            const obj9 = { value: obj6.reloadICYMITab(), done: false };
            return obj9;
          }
        } else if (2 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            const obj3 = c1(c2[3]);
            c1 = 3;
            c2 = 1;
            const obj12 = { value: obj3.getGuildChannelScores(), done: false };
            return obj12;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          const obj = c1(c2[3]);
          const recommendedGuilds = obj.getRecommendedGuilds();
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp18) {
        c2 = 3;
        throw tmp18;
      }
    }
  }), items);
};
