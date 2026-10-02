// Module ID: 10666
// Function ID: 10667
// Name: badgeDetailsCtas
// Dependencies: [1086, 1088, 7633, 1127, 4522, 6801, 6965, 6604, 10667, 5762, 10163, 2]
// Exports: getBadgeDetailsCta

// Module 10666 (badgeDetailsCtas)
import Constants from "Constants" /* 1086 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1088 */;
import intl2 from "intl" /* 1127 */;
import openURLDefault from "openURL" /* 4522 */;
import QuestContent from "QuestContent" /* 5762 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6604 */;
import openUserSettings from "openUserSettings" /* 6801 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6965 */;
import BadgeId from "BadgeId" /* 7633 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10163 */;
import QuestUtils from "QuestUtils" /* 10667 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
let obj = {
  ctaLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.q7A8hP);
  },
  ctaAction() {
    return openURLDefault("https://discord.com/careers");
  }
};
let obj2 = {
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
    const obj = openUserSettings;
    const obj2 = { screen: UserSettingsSections.PREMIUM };
    return obj.openUserSettings(obj2);
  }
};
const obj3 = {
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
    const obj = openUserSettings;
    const obj2 = { screen: UserSettingsSections.GUILD_BOOSTING };
    return obj.openUserSettings(obj2);
  }
};
const obj4 = {
  ctaLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.EBYkzk);
  },
  ctaAction() {
    let items;
    const obj = { screen: constants.ORBS, analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.BADGE };
    const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
    items = [];
    CollectiblesActionCreators;
    items[0] = AnalyticsLocationDefault.BADGE;
    return openCollectiblesShopMobile(obj);
  }
};
const obj5 = {
  ctaLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t.swICIT);
  },
  ctaAction() {
    const obj = QuestUtils;
    const obj2 = { fromContent: QuestContent.QuestContent.QUEST_BADGE };
    return obj.openQuestHome(obj2);
  }
};
const obj6 = {
  ctaLabel() {
    const intl = intl2.intl;
    return intl.string(intl2.t["nUA/JW"]);
  },
  ctaAction() {
    let items;
    const obj = { analyticsLocations: items };
    const openGiftModal = utils_openGiftModal.openGiftModal;
    items = [];
    utils_openGiftModal;
    items[0] = AnalyticsLocationDefault.BADGE;
    return openGiftModal(obj);
  }
};
let closure_5 = { [BadgeId.BadgeId.STAFF]: obj, [BadgeId.BadgeId.PREMIUM_TENURE]: obj2, [BadgeId.BadgeId.GUILD_BOOSTER]: obj3, [BadgeId.BadgeId.ORB_PROFILE]: obj4, [BadgeId.BadgeId.QUEST_COMPLETED]: obj5, [BadgeId.BadgeId.GIFTING]: obj6 };
const result = size.fileFinishedImporting("modules/badges/native/badgeDetailsCtas.tsx");

export const getBadgeDetailsCta = function getBadgeDetailsCta(badge_id) {
  return closure_5[badge_id];
};
