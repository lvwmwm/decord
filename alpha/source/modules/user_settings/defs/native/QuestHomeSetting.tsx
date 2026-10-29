// Module ID: 16793
// Function ID: 16794
// Name: defs/QuestHomeSetting
// Dependencies: [1084, 11302, 1125, 9628, 14642, 16794, 7854, 6773, 2]

// Module 16793 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import QuestContent from "QuestContent" /* 6773 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7854 */;
import QuestsEligibility from "QuestsEligibility" /* 9628 */;
import QuestsIcon from "QuestsIcon" /* 14642 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
