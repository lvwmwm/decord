// Module ID: 19838
// Function ID: 19839
// Name: AppIconPremiumManager
// Dependencies: [5, 1385, 10134, 1072, 5195, 3, 5196, 7383, 1377, 15657, 5198, 5200, 2171, 1252, 2]

// Module 19838 (AppIconPremiumManager)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5195 */;
import AppIconTypes from "AppIconTypes" /* 5196 */;
import AppIconConstants from "AppIconConstants" /* 10134 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1385 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7383 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, c6;

const getIconById = AppIconConstants.getIconById;
const AnalyticEvents = Constants.AnalyticEvents;
const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
let closure_8 = new LoggerDefault("AppIconPremiumManager");
const tmp2 = new LoggerDefault("AppIconPremiumManager");
const DEFAULT = AppIconTypes.FreemiumAppIconIds.DEFAULT;
let closure_10 = { ORPHANED: "orphaned", PREMIUM_LOST: "premium_lost", CAMPAIGN_EXPIRED: "campaign_expired" };
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
      let obj5;
      let v1;
      if (c6 === 2) {
        c6 = 3;
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
          let closure_1;
          let _undefined3;
          let _undefined;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const currentUser = tmp4;
              let closure_3 = tmp;
              closure_1 = undefined;
              _undefined3 = undefined;
              _undefined = currentUser.getCurrentUser();
              c5 = 1;
              c6 = 1;
              const obj4 = { value: obj5.fetchCurrentAppIcon(), done: false };
              obj5 = _undefined(_undefined3[9]);
              return obj4;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_1 = value;
            if (closure_1 !== DEFAULT) {
              let _undefined2;
              const obj9 = _undefined(_undefined3[10]);
              if (obj9.isHexagonCampaignAppIcon(closure_1)) {
                const obj = _undefined(_undefined3[11]);
                if (obj.isHexagonCampaignPerkExpiredForCurrentUser(constants.APP_ICON)) {
                  const _HermesInternal3 = HermesInternal;
                  logger.info("Campaign icon " + closure_1 + " has expired for this user, resetting to default");
                  let premiumType;
                  const resetIcon3 = closure_132_0.resetIcon;
                  const tmp52 = closure_1;
                  if (_undefined != null) {
                    premiumType = _undefined.premiumType;
                  }
                  _undefined = premiumType;
                  if (premiumType == null) {
                    _undefined = undefined;
                  }
                  resetIcon3(tmp52, _undefined, constants2.CAMPAIGN_EXPIRED);
                  c6 = 3;
                  const obj7 = { value: undefined, done: true };
                  return obj7;
                }
              }
              _undefined3 = c5(closure_1);
              if (closure_1 !== _undefined3.id) {
                const _HermesInternal2 = HermesInternal;
                logger.info("Icon " + closure_1 + " is no longer available, resetting to default");
                let premiumType1;
                const resetIcon2 = closure_132_0.resetIcon;
                const tmp38 = closure_1;
                if (_undefined != null) {
                  premiumType1 = _undefined.premiumType;
                }
                _undefined2 = premiumType1;
                if (premiumType1 == null) {
                  _undefined2 = undefined;
                }
                resetIcon2(tmp38, _undefined2, constants2.ORPHANED);
                c6 = 3;
                const obj8 = { value: undefined, done: true };
                return obj8;
              } else {
                const obj10 = _undefined2(_undefined3[12]);
                const result = obj10.canUsePremiumAppIcons(_undefined);
                const isPremium = !result && _undefined3.isPremium;
                if (isPremium) {
                  const _HermesInternal = HermesInternal;
                  logger.info("User is not premium, resetting icon " + closure_1 + " to default");
                  let premiumType2;
                  const resetIcon = closure_132_0.resetIcon;
                  const tmp24 = closure_1;
                  if (_undefined != null) {
                    premiumType2 = _undefined.premiumType;
                  }
                  _undefined3 = premiumType2;
                  if (premiumType2 == null) {
                    _undefined3 = undefined;
                  }
                  resetIcon(tmp24, _undefined3, constants2.PREMIUM_LOST);
                }
              }
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp62) {
          c6 = 3;
          throw tmp62;
        }
      }
    })();
  }
  resetIcon(previous_icon_id, c2, PREMIUM_LOST) {
    let logger;
    _require = previous_icon_id;
    const reset_reason = PREMIUM_LOST;
    let obj = require("AppIconUtils");
    const setAppIconResult = obj.setAppIcon(DEFAULT, c2);
    const nextPromise = setAppIconResult.then(() => {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { previous_icon_id, reset_to_icon_id: DEFAULT, reset_reason };
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
