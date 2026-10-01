// Module ID: 14530
// Function ID: 14531
// Name: QuestHomeSetting
// Dependencies: [1074, 11006, 1115, 10682, 14531, 14533, 7135, 5761, 2]

// Module 14530 (QuestHomeSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import QuestContent from "QuestContent" /* 5761 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7135 */;
import QuestsEligibility from "QuestsEligibility" /* 10682 */;
import QuestsIcon from "QuestsIcon" /* 14531 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.JALI2K);
  },
  usePredicate() {
    const obj = QuestsEligibility;
    return obj.getIsEligibleForQuests();
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  screen: {
    route: UserSettingsSections.QUESTS,
    getComponent() {
      return require("QuestHomeSetting").default;
    }
  },
  usePreNavigationAction() {
    return () => {
      const obj = utils_QuestUtils;
      const obj2 = { fromContent: QuestContent.QuestContent.USER_SETTINGS };
      const result = obj.setQuestHomeUtmContext(obj2);
      return true;
    };
  }
};
const route = SettingBuilders.createRoute(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;
