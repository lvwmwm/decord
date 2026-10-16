// Module ID: 15973
// Function ID: 15974
// Name: defs/QuestHomeSetting
// Dependencies: [1087, 11003, 1128, 9404, 13862, 15974, 7630, 6196, 2]

// Module 15973 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import QuestContent from "QuestContent" /* 6196 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7630 */;
import QuestsEligibility from "QuestsEligibility" /* 9404 */;
import QuestsIcon from "QuestsIcon" /* 13862 */;
import SettingBuilders from "SettingBuilders" /* 11003 */;
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
