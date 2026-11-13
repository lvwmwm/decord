// Module ID: 19841
// Function ID: 19842
// Name: AppIconPremiumManager
// Dependencies: [5, 16568, 1385, 10134, 1072, 5195, 3, 5196, 7383, 1377, 15654, 5198, 5200, 5202, 5003, 2171, 1252, 2]

// Module 19841 (AppIconPremiumManager)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5195 */;
import AppIconTypes from "AppIconTypes" /* 5196 */;
import AppIconConstants from "AppIconConstants" /* 10134 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16568 */;
import UserStore from "UserStore" /* 1385 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7383 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c6, c7, dependencyMap;

const getIconById = AppIconConstants.getIconById;
const AnalyticEvents = Constants.AnalyticEvents;
const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
let closure_9 = new LoggerDefault("AppIconPremiumManager");
const tmp2 = new LoggerDefault("AppIconPremiumManager");
const DEFAULT = AppIconTypes.FreemiumAppIconIds.DEFAULT;
let closure_11 = { ORPHANED: "orphaned", PREMIUM_LOST: "premium_lost", CAMPAIGN_EXPIRED: "campaign_expired" };
class AppIconPremiumManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      APP_STATE_UPDATE(arg0) {
        return applyArgumentsResult.handleAppStateUpdate(arg0);
      }
    };
    return applyArgumentsResult;
  }
  handleAppStateUpdate(state) {
    let tmp;
    state = state.state;
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      tmp = "active" === state;
    } else {
      tmp = "background" === state;
    }
    if (tmp) {
      const self = this;
      const result = this.validateAndResetIfNeeded();
    }
  }
  validateAndResetIfNeeded() {
    const self = this;
    return (async (arg0, value) => {
      let _undefined;
      let closure_0;
      let closure_4;
      let obj7;
      let v1;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          let closure_1;
          let _undefined2;
          let id;
          let tmp;
          let currentUser2;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const currentUser = tmp4;
              closure_1 = undefined;
              _undefined2 = undefined;
              id = undefined;
              tmp = undefined;
              currentUser2 = currentUser.getCurrentUser();
              c6 = 1;
              c7 = 1;
              const obj6 = { value: obj7.fetchCurrentAppIcon(), done: false };
              obj7 = currentUser2(_undefined2[10]);
              return obj6;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_1 = value;
            if (closure_1 !== DEFAULT) {
              const obj11 = currentUser2(_undefined2[11]);
              if (obj11.isHexagonCampaignAppIcon(closure_1)) {
                const obj = currentUser2(_undefined2[12]);
                if (obj.isHexagonCampaignPerkExpiredForCurrentUser(constants.APP_ICON)) {
                  const obj3 = currentUser2(_undefined2[13]);
                  if (obj3.UNSAFE_isDismissibleContentDismissed(currentUser2(_undefined2[14]).DismissibleContent.HEXAGON_CAMPAIGN_PERKS_EXPIRED_PROMO_SHEET, { bypassNewUserCheck: true })) {
                    const appIconId = tmp.previousPerkValues.appIconId;
                    currentUser2 = appIconId;
                    const tmp51 = c6;
                    if (appIconId == null) {
                      currentUser2 = DEFAULT;
                    }
                    _undefined2 = tmp51(currentUser2);
                    if (_undefined2.isPremium) {
                      const obj4 = _undefined(_undefined2[15]);
                      if (!obj4.canUsePremiumAppIcons(currentUser2)) {
                        id = DEFAULT;
                      }
                      const _HermesInternal3 = HermesInternal;
                      logger.info("Campaign icon " + closure_1 + " has expired for this user, resetting to " + id);
                      let premiumType;
                      const resetIcon3 = closure_133_0.resetIcon;
                      if (currentUser2 != null) {
                        premiumType = currentUser2.premiumType;
                      }
                      _undefined = premiumType;
                      if (premiumType == null) {
                        _undefined = undefined;
                      }
                      resetIcon3(closure_1, _undefined, constants2.CAMPAIGN_EXPIRED, id);
                      c7 = 3;
                      const obj9 = { value: undefined, done: true };
                      return obj9;
                    }
                    id = _undefined2.id;
                  } else {
                    c7 = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                }
              }
              tmp = c6(closure_1);
              if (closure_1 !== tmp.id) {
                const _HermesInternal2 = HermesInternal;
                logger.info("Icon " + closure_1 + " is no longer available, resetting to default");
                let premiumType1;
                const resetIcon2 = closure_133_0.resetIcon;
                const tmp38 = closure_1;
                if (currentUser2 != null) {
                  premiumType1 = currentUser2.premiumType;
                }
                _undefined2 = premiumType1;
                if (premiumType1 == null) {
                  _undefined2 = undefined;
                }
                resetIcon2(tmp38, _undefined2, constants2.ORPHANED);
                c7 = 3;
                const obj10 = { value: undefined, done: true };
                return obj10;
              } else {
                const obj12 = _undefined(_undefined2[15]);
                const result = obj12.canUsePremiumAppIcons(currentUser2);
                const isPremium = !result && tmp.isPremium;
                if (isPremium) {
                  const _HermesInternal = HermesInternal;
                  logger.info("User is not premium, resetting icon " + closure_1 + " to default");
                  let premiumType2;
                  const resetIcon = closure_133_0.resetIcon;
                  const tmp24 = closure_1;
                  if (currentUser2 != null) {
                    premiumType2 = currentUser2.premiumType;
                  }
                  let c3 = premiumType2;
                  if (premiumType2 == null) {
                    c3 = undefined;
                  }
                  resetIcon(tmp24, c3, constants2.PREMIUM_LOST);
                }
              }
            }
            c7 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp88) {
          c7 = 3;
          throw tmp88;
        }
      }
    })();
  }
  resetIcon(previous_icon_id, c3, PREMIUM_LOST, DEFAULT) {
    let logger;
    let reset_to_icon_id;
    _require = previous_icon_id;
    const reset_reason = PREMIUM_LOST;
    let tmp = DEFAULT;
    if (DEFAULT === undefined) {
      tmp = DEFAULT;
    }
    dependencyMap = tmp;
    let obj = require("AppIconUtils");
    const setAppIconResult = obj.setAppIcon(tmp, c3);
    const nextPromise = setAppIconResult.then(() => {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { previous_icon_id, reset_to_icon_id, reset_reason };
      obj.track(AnalyticEvents.APP_ICON_AUTO_RESET, obj2);
    });
    nextPromise.catch((error) => {
      logger.error("Failed to reset app icon:", error);
    });
  }
}
const prototype = AppIconPremiumManager.prototype;
const appIconPremiumManager = new AppIconPremiumManager();
let result = size.fileFinishedImporting("modules/app_icons/native/AppIconPremiumManager.tsx");

export default appIconPremiumManager;
