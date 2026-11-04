// Module ID: 17144
// Function ID: 17145
// Name: QuestHomeSetting
// Dependencies: [1072, 11729, 1113, 9823, 14930, 17145, 8006, 6921, 2]

// Module 17144 (QuestHomeSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import QuestContent from "QuestContent" /* 6921 */;
import utils_QuestUtils from "utils/QuestUtils" /* 8006 */;
import QuestsEligibility from "QuestsEligibility" /* 9823 */;
import QuestsIcon from "QuestsIcon" /* 14930 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
