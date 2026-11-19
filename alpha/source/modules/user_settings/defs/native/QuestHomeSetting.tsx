// Module ID: 16208
// Function ID: 16209
// Name: QuestHomeSetting
// Dependencies: [1072, 11875, 1113, 9828, 13707, 16209, 8306, 6442, 2]

// Module 16208 (QuestHomeSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import QuestContent from "QuestContent" /* 6442 */;
import utils_QuestUtils from "utils/QuestUtils" /* 8306 */;
import QuestsEligibility from "QuestsEligibility" /* 9828 */;
import QuestsIcon from "QuestsIcon" /* 13707 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
