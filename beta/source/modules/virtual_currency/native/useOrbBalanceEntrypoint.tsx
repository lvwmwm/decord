// Module ID: 16306
// Function ID: 16307
// Name: useOrbBalanceEntrypoint
// Dependencies: [5, 19, 16307, 16308, 7539, 5127, 16309, 2119, 9445, 14714, 16320, 16311, 2]
// Exports: openBalanceWidgetActionSheet, useIsOrbWalletEntrypointEnabled, useOrbBalanceEntrypoint

// Module 16306 (useOrbBalanceEntrypoint)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7539 */;
import useVirtualCurrencyMobileEnabled from "useVirtualCurrencyMobileEnabled" /* 14714 */;
import OrbWalletConstants from "OrbWalletConstants" /* 16307 */;
import VirtualCurrencyAnalyticsUtil from "VirtualCurrencyAnalyticsUtil" /* 16308 */;
import OrbchievementsExperiment from "OrbchievementsExperiment" /* 16320 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1;

let closure_5 = OrbWalletConstants.ORB_WALLET_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/virtual_currency/native/useOrbBalanceEntrypoint.tsx");

export function openBalanceWidgetActionSheet(isOrbWalletEntrypointEnabled, analyticsPage) {
  _require = isOrbWalletEntrypointEnabled;
  if (_require) {
    const obj = { pageType: analyticsPage.analyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET, ctaObject: analyticsPage.openCtaObject };
    const trackOrbsClick = require("VirtualCurrencyAnalyticsUtil").trackOrbsClick;
    require("VirtualCurrencyAnalyticsUtil");
    trackOrbsClick(obj);
  }
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  let str = "BalanceWidgetActionSheet";
  ActionSheetActionCreatorsDefault;
  const tmp7 = _asyncToGenerator(async (arg0, value) => {
    let v3;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const tmp13 = c0(closure_1_2[7]);
            if (closure_0) {
              c1 = 2;
              c0 = 1;
              const obj4 = { value: tmp13(closure_1_2[6], closure_1_2.paths), done: false };
              return obj4;
            } else {
              c1 = 1;
              c0 = 1;
              const obj5 = { value: tmp13(closure_1_2[8], closure_1_2.paths), done: false };
              return obj5;
            }
          }
        } else {
          let _default;
          if (1 === tmp3) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              _default = value.default;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            _default = value.default;
          }
          c0 = 3;
          const obj7 = { value: _default, done: true };
          return obj7;
        }
      } catch (tmp6) {
        c0 = 3;
        throw tmp6;
      }
    }
  });
  if (isOrbWalletEntrypointEnabled) {
    str = closure_5;
  }
  openLazy(tmp7, str, analyticsPage);
}
export function useIsOrbWalletEntrypointEnabled(location) {
  const _location = location.location;
  const obj = useVirtualCurrencyMobileEnabled;
  const enabled = obj.useVirtualCurrencyMobileEnabled().enabled;
  const obj2 = OrbchievementsExperiment;
  const tmp = obj2.useIsOrbchievementsMobileEnabled({ location: _location }) && enabled;
  return tmp;
}
export function useOrbBalanceEntrypoint(location) {
  let closure_0;
  let hasUnreadUpdate;
  let notificationType;
  _require = undefined;
  const _location = location.location;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("useVirtualCurrencyMobileEnabled");
  const enabled = obj.useVirtualCurrencyMobileEnabled().enabled;
  let obj2 = require("OrbchievementsExperiment");
  let tmp3 = obj2.useIsOrbchievementsMobileEnabled({ location: _location }) && enabled;
  _require = tmp3;
  const tmpResult = tmp(16311);
  const orbChallengeUnreadState = tmpResult.useOrbChallengeUnreadState({ enabled: tmp3 });
  const items = [tmp3];
  ({ hasUnreadUpdate, notificationType } = orbChallengeUnreadState);
  let obj3 = {
    isOrbchievementsEnabled: tmp3,
    hasUnreadUpdate,
    notificationType,
    openBalanceWidgetActionSheet: react.useCallback((analyticsPage) => {
      if (closure_0) {
        const tmp2 = require;
        const tmp3 = dependencyMap;
        const tmp4 = VirtualCurrencyAnalyticsUtil;
        let obj = { pageType: analyticsPage.analyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET, ctaObject: analyticsPage.openCtaObject };
        const trackOrbsClick = tmp4.trackOrbsClick;
        trackOrbsClick(obj);
      }
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      let str = "BalanceWidgetActionSheet";
      const tmp8 = _asyncToGenerator(async (arg0, value) => {
        let v3;
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
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
            c0 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const tmp13 = c0(closure_1_2[7]);
                if (closure_0) {
                  c1 = 2;
                  c0 = 1;
                  const obj4 = { value: tmp13(closure_1_2[6], closure_1_2.paths), done: false };
                  return obj4;
                } else {
                  c1 = 1;
                  c0 = 1;
                  const obj5 = { value: tmp13(closure_1_2[8], closure_1_2.paths), done: false };
                  return obj5;
                }
              }
            } else {
              let _default;
              if (1 === tmp3) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  _default = value.default;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                _default = value.default;
              }
              c0 = 3;
              const obj7 = { value: _default, done: true };
              return obj7;
            }
          } catch (tmp6) {
            c0 = 3;
            throw tmp6;
          }
        }
      });
      if (closure_0) {
        str = closure_5;
      }
      openLazy(tmp8, str, analyticsPage);
    }, items)
  };
  return obj3;
}
