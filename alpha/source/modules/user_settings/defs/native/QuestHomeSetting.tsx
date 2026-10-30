// Module ID: 16847
// Function ID: 16848
// Name: QuestHomeSetting
// Dependencies: [1072, 11505, 1114, 9653, 14676, 16848, 7859, 6780, 2]

// Module 16847 (QuestHomeSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import QuestContent from "QuestContent" /* 6780 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7859 */;
import QuestsEligibility from "QuestsEligibility" /* 9653 */;
import QuestsIcon from "QuestsIcon" /* 14676 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
