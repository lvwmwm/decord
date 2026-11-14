// Module ID: 10127
// Function ID: 10128
// Name: badgeDetailsCtas
// Dependencies: [1072, 1074, 5493, 1503, 8480, 1113, 6008, 8604, 8484, 7937, 10128, 5343, 10132, 11661, 2]
// Exports: getBadgeDetailsCta

// Module 10127 (badgeDetailsCtas)
import Constants from "Constants" /* 1072 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import intl2 from "intl" /* 1113 */;
import QuestContent from "QuestContent" /* 5343 */;
import RootNavigationRef from "RootNavigationRef" /* 5493 */;
import openURLDefault from "openURL" /* 6008 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7937 */;
import BadgeId from "BadgeId" /* 8480 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 8484 */;
import QuestUtils from "QuestUtils" /* 10128 */;
import QuestsEligibility from "QuestsEligibility" /* 10132 */;
import utils_openGiftModal from "utils/openGiftModal" /* 11661 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let obj4;
let obj5;
let tmp;
const Link = tmp(1503);
const openUserSettings = tmp(8604);
const UserSettingsSections = Constants.UserSettingsSections;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
let obj = { [BadgeId.BadgeId.STAFF]: obj2, [BadgeId.BadgeId.PREMIUM_TENURE]: obj3, [BadgeId.BadgeId.GUILD_BOOSTER]: obj4, [BadgeId.BadgeId.ORB_PROFILE]: obj5 };
obj2 = {
  ctaLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.q7A8hP);
  },
  ctaAction() {
    return openURLDefault("https://discord.com/careers");
  }
};
obj3 = {
  ctaLabel(arg0) {
    let isViewerOnUpgradeableNitro;
    let owned;
    let stringResult;
    ({ owned, isViewerOnUpgradeableNitro } = arg0);
    const intl = intl2.intl;
    const string = intl.string;
    const t = intl2.t;
    if (isViewerOnUpgradeableNitro) {
      stringResult = string(t.uKFeS1);
    } else if (owned) {
      stringResult = string(t.xGjjkd);
    } else {
      stringResult = string(t.BTxm69);
    }
    return stringResult;
  },
  ctaAction() {
    let routes1;
    let tmp = require;
    obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    let flag = false;
    if (null != rootNavigationRef) {
      flag = false;
      if (rootNavigationRef.isReady()) {
        const rootState = rootNavigationRef.getRootState();
        const routes = rootState.routes;
        const findLastIndexResult = routes.findLastIndex((name) => {
          let tmp = "settings" === name.name;
          if (tmp) {
            obj = Link;
            tmp = obj.getFocusedRouteNameFromRoute(name) === constants.PREMIUM;
          }
          return tmp;
        });
        let flag2 = -1 !== findLastIndexResult;
        if (flag2) {
          flag2 = true;
          if (findLastIndexResult !== rootState.index) {
            const dispatch = rootNavigationRef.dispatch;
            const CommonActions = Link.CommonActions;
            const reset = CommonActions.reset;
            const obj2 = { routes: routes1.slice(0, findLastIndexResult + 1), index: findLastIndexResult };
            const merged = Object.assign(rootState);
            routes1 = rootState.routes;
            dispatch(reset(obj2));
            flag2 = true;
          }
        }
        flag = flag2;
      }
    }
    if (!flag) {
      const obj3 = { screen: UserSettingsSections.PREMIUM };
      const tmpResult = openUserSettings;
      tmpResult.openUserSettings(obj3, undefined, { pop: false });
    }
  }
};
obj4 = {
  ctaLabel(owned) {
    let stringResult;
    owned = owned.owned;
    const intl = intl2.intl;
    const string = intl.string;
    const t = intl2.t;
    if (owned) {
      stringResult = string(t.VMvz3m);
    } else {
      stringResult = string(t.xFVZeU);
    }
    return stringResult;
  },
  ctaAction() {
    obj = openUserSettings;
    const obj2 = { screen: UserSettingsSections.GUILD_BOOSTING };
    return obj.openUserSettings(obj2, undefined, { pop: false });
  }
};
obj5 = {
  ctaLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.fG3RIg);
  },
  ctaAction() {
    let items;
    obj = { screen: constants.ORBS, analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.BADGE };
    const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
    items = [];
    CollectiblesActionCreators;
    items[0] = AnalyticsLocationDefault.BADGE;
    return openCollectiblesShopMobile(obj);
  }
};
const obj6 = {
  ctaLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.swICIT);
  },
  ctaAction() {
    obj = QuestUtils;
    const obj2 = { fromContent: QuestContent.QuestContent.QUEST_BADGE, pop: false };
    return obj.openQuestHome(obj2);
  },
  isAvailable: QuestsEligibility.getIsEligibleForQuests
};
const QUEST_COMPLETED = BadgeId.BadgeId.QUEST_COMPLETED;
obj[QUEST_COMPLETED] = obj6;
obj[BadgeId.BadgeId.GIFTING] = {
  ctaLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["nUA/JW"]);
  },
  ctaAction() {
    let items;
    obj = { analyticsLocations: items };
    const openGiftModal = utils_openGiftModal.openGiftModal;
    items = [];
    utils_openGiftModal;
    items[0] = AnalyticsLocationDefault.BADGE;
    return openGiftModal(obj);
  }
};
const result = size.fileFinishedImporting("modules/badges/native/badgeDetailsCtas.tsx");

export function getBadgeDetailsCta(badge_id) {
  let isAvailable;
  if (obj[badge_id] != null) {
    isAvailable = obj.isAvailable;
  }
  return obj[badge_id];
}
