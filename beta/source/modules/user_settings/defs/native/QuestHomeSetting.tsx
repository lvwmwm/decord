// Module ID: 16303
// Function ID: 16304
// Name: QuestHomeSetting
// Dependencies: [1071, 11942, 1112, 9950, 13799, 16304, 8425, 6563, 2]

// Module 16303 (QuestHomeSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import QuestContent from "QuestContent" /* 6563 */;
import utils_QuestUtils from "utils/QuestUtils" /* 8425 */;
import QuestsEligibility from "QuestsEligibility" /* 9950 */;
import QuestsIcon from "QuestsIcon" /* 13799 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
