// Module ID: 16172
// Function ID: 16173
// Name: QuestHomeSetting
// Dependencies: [1071, 11817, 1112, 9830, 13676, 16173, 8305, 6444, 2]

// Module 16172 (QuestHomeSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import QuestContent from "QuestContent" /* 6444 */;
import utils_QuestUtils from "utils/QuestUtils" /* 8305 */;
import QuestsEligibility from "QuestsEligibility" /* 9830 */;
import QuestsIcon from "QuestsIcon" /* 13676 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
