// Module ID: 15079
// Function ID: 15080
// Name: defs/QuestHomeSetting
// Dependencies: [1085, 11262, 1126, 10576, 15080, 15082, 7399, 5982, 2]

// Module 15079 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import QuestContent from "QuestContent" /* 5982 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7399 */;
import QuestsEligibility from "QuestsEligibility" /* 10576 */;
import QuestsIcon from "QuestsIcon" /* 15080 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
