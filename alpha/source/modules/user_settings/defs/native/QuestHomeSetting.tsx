// Module ID: 14742
// Function ID: 14743
// Name: defs/QuestHomeSetting
// Dependencies: [1074, 11215, 1115, 10887, 14743, 14745, 7308, 5947, 2]

// Module 14742 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import QuestContent from "QuestContent" /* 5947 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7308 */;
import QuestsEligibility from "QuestsEligibility" /* 10887 */;
import QuestsIcon from "QuestsIcon" /* 14743 */;
import SettingBuilders from "SettingBuilders" /* 11215 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.JALI2K);
  },
  usePredicate() {
    return QuestsEligibility.getIsEligibleForQuests();
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  screen: {
    route: Constants.UserSettingsSections.QUESTS,
    getComponent() {
      return require("QuestHomeSetting").default;
    }
  },
  usePreNavigationAction() {
    return () => {
      const obj = utils_QuestUtils;
      const result = obj.setQuestHomeUtmContext({ fromContent: QuestContent.QuestContent.USER_SETTINGS });
      return true;
    };
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;
