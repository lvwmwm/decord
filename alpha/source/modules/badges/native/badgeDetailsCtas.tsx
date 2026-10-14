// Module ID: 10607
// Function ID: 10608
// Name: badgeDetailsCtas
// Dependencies: [1085, 1087, 8316, 1126, 4802, 7100, 7269, 6884, 9177, 5982, 9175, 10061, 2]
// Exports: getBadgeDetailsCta

// Module 10607 (badgeDetailsCtas)
import Constants from "Constants" /* 1085 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import intl2 from "intl" /* 1126 */;
import openURLDefault from "openURL" /* 4802 */;
import QuestContent from "QuestContent" /* 5982 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6884 */;
import openUserSettings from "openUserSettings" /* 7100 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7269 */;
import BadgeId from "BadgeId" /* 8316 */;
import QuestsEligibility from "QuestsEligibility" /* 9175 */;
import QuestUtils from "QuestUtils" /* 9177 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10061 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let obj4;
let obj5;
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
    obj = openUserSettings;
    const obj2 = { screen: UserSettingsSections.PREMIUM };
    return obj.openUserSettings(obj2, undefined, { pop: false });
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
    return intl.string(intl2.t.EBYkzk);
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

export const getBadgeDetailsCta = function getBadgeDetailsCta(badge_id) {
  let isAvailable;
  if (obj[badge_id] != null) {
    isAvailable = obj.isAvailable;
  }
  return obj[badge_id];
};
