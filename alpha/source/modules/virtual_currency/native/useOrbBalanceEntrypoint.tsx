// Module ID: 16887
// Function ID: 16888
// Name: useOrbBalanceEntrypoint
// Dependencies: [5, 19, 16888, 5258, 16889, 1994, 14498, 16905, 16891, 2]
// Exports: useOrbBalanceEntrypoint

// Module 16887 (useOrbBalanceEntrypoint)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import OrbWalletConstants from "OrbWalletConstants" /* 16888 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c0, c1;

let closure_5 = OrbWalletConstants.ORB_WALLET_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/virtual_currency/native/useOrbBalanceEntrypoint.tsx");

export function useOrbBalanceEntrypoint(location) {
  let hasUnreadUpdate;
  let notificationType;
  let isOrbchievementsMobileEnabled;
  const _location = location.location;
  let obj = isOrbchievementsMobileEnabled(16905);
  isOrbchievementsMobileEnabled = obj.useIsOrbchievementsMobileEnabled({ location: _location });
  let obj2 = isOrbchievementsMobileEnabled(16891);
  const orbChallengeUnreadState = obj2.useOrbChallengeUnreadState({ enabled: isOrbchievementsMobileEnabled });
  const items = [isOrbchievementsMobileEnabled];
  ({ hasUnreadUpdate, notificationType } = orbChallengeUnreadState);
  let obj3 = {
    isOrbchievementsEnabled: isOrbchievementsMobileEnabled,
    hasUnreadUpdate,
    notificationType,
    openBalanceWidgetActionSheet: react.useCallback((arg0) => {
      let closure_0 = isOrbchievementsMobileEnabled;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      let str = "BalanceWidgetActionSheet";
      const tmp2 = _asyncToGenerator(async (arg0, value) => {
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                const tmp13 = c0(closure_1_2[5]);
                if (closure_0) {
                  c1 = 2;
                  c0 = 1;
                  const obj4 = { value: tmp13(closure_1_2[4], closure_1_2.paths), done: false };
                  return obj4;
                } else {
                  c1 = 1;
                  c0 = 1;
                  const obj5 = { value: tmp13(closure_1_2[6], closure_1_2.paths), done: false };
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
      if (isOrbchievementsMobileEnabled) {
        str = closure_5;
      }
      openLazy(tmp2, str, arg0);
    }, items)
  };
  return obj3;
}
