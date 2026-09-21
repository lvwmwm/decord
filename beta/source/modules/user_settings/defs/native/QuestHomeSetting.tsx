// Module ID: 15260
// Function ID: 15261
// Name: defs/QuestHomeSetting
// Dependencies: [1078, 11594, 1119, 11608, 15261, 15263, 7963, 5668, 2]

// Module 15260 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import QuestContent from "QuestContent" /* 5668 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7963 */;
import QuestsEligibility from "QuestsEligibility" /* 11608 */;
import QuestsIcon from "QuestsIcon" /* 15261 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
