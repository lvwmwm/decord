// Module ID: 16039
// Function ID: 16040
// Name: defs/QuestHomeSetting
// Dependencies: [1087, 11065, 1128, 9468, 13930, 16040, 7676, 6233, 2]

// Module 16039 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import QuestContent from "QuestContent" /* 6233 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7676 */;
import QuestsEligibility from "QuestsEligibility" /* 9468 */;
import QuestsIcon from "QuestsIcon" /* 13930 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
