// Module ID: 16555
// Function ID: 16556
// Name: defs/QuestHomeSetting
// Dependencies: [1084, 11248, 1125, 9596, 14408, 16556, 7831, 6750, 2]

// Module 16555 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import QuestContent from "QuestContent" /* 6750 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7831 */;
import QuestsEligibility from "QuestsEligibility" /* 9596 */;
import QuestsIcon from "QuestsIcon" /* 14408 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
