// Module ID: 17040
// Function ID: 17041
// Name: QuestHomeSetting
// Dependencies: [1072, 11677, 1113, 9805, 14849, 17041, 7990, 6906, 2]

// Module 17040 (QuestHomeSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import QuestContent from "QuestContent" /* 6906 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7990 */;
import QuestsEligibility from "QuestsEligibility" /* 9805 */;
import QuestsIcon from "QuestsIcon" /* 14849 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
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
