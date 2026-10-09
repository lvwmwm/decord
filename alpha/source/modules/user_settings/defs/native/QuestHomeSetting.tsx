// Module ID: 15191
// Function ID: 15192
// Name: defs/QuestHomeSetting
// Dependencies: [1085, 10629, 1126, 9144, 12955, 15192, 7404, 5984, 2]

// Module 15191 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import QuestContent from "QuestContent" /* 5984 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7404 */;
import QuestsEligibility from "QuestsEligibility" /* 9144 */;
import QuestsIcon from "QuestsIcon" /* 12955 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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
