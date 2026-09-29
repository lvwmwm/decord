// Module ID: 14705
// Function ID: 14706
// Name: defs/QuestHomeSetting
// Dependencies: [1074, 11175, 1115, 10851, 14706, 14708, 7300, 5928, 2]

// Module 14705 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import QuestContent from "QuestContent" /* 5928 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7300 */;
import QuestsEligibility from "QuestsEligibility" /* 10851 */;
import QuestsIcon from "QuestsIcon" /* 14706 */;
import SettingBuilders from "SettingBuilders" /* 11175 */;
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
