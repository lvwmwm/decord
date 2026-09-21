// Module ID: 15271
// Function ID: 15272
// Name: defs/QuestHomeSetting
// Dependencies: [1074, 11725, 1115, 11739, 15272, 15274, 7958, 5666, 2]

// Module 15271 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import QuestContent from "QuestContent" /* 5666 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7958 */;
import QuestsEligibility from "QuestsEligibility" /* 11739 */;
import QuestsIcon from "QuestsIcon" /* 15272 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
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
