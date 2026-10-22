// Module ID: 16209
// Function ID: 16210
// Name: defs/QuestHomeSetting
// Dependencies: [1087, 11172, 1128, 9534, 14095, 16210, 7780, 6701, 2]

// Module 16209 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import QuestContent from "QuestContent" /* 6701 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7780 */;
import QuestsEligibility from "QuestsEligibility" /* 9534 */;
import QuestsIcon from "QuestsIcon" /* 14095 */;
import SettingBuilders from "SettingBuilders" /* 11172 */;
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
