// Module ID: 14518
// Function ID: 14519
// Name: defs/QuestHomeSetting
// Dependencies: [1086, 10874, 1127, 10671, 14519, 14521, 7139, 5762, 2]

// Module 14518 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import QuestContent from "QuestContent" /* 5762 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7139 */;
import QuestsEligibility from "QuestsEligibility" /* 10671 */;
import QuestsIcon from "QuestsIcon" /* 14519 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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
