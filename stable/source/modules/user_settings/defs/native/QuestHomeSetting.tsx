// Module ID: 15274
// Function ID: 15275
// Name: defs/QuestHomeSetting
// Dependencies: [1074, 11754, 1115, 11768, 15275, 15277, 7990, 5698, 2]

// Module 15274 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import QuestContent from "QuestContent" /* 5698 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7990 */;
import QuestsEligibility from "QuestsEligibility" /* 11768 */;
import QuestsIcon from "QuestsIcon" /* 15275 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
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
