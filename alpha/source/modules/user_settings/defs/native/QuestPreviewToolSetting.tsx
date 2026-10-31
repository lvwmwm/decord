// Module ID: 17132
// Function ID: 17133
// Name: QuestPreviewToolSetting
// Dependencies: [1072, 11539, 1113, 9681, 14714, 17133, 2]

// Module 17132 (QuestPreviewToolSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9681 */;
import QuestsIcon from "QuestsIcon" /* 14714 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.BDUDau);
  },
  usePredicate() {
    const obj = hooks_QuestHooks;
    return obj.useIsPreviewerOnAnyQuest();
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  screen: {
    route: UserSettingsSections.QUEST_PREVIEW_TOOL_2,
    getComponent() {
      return require("SettingsQuestPreviewScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/QuestPreviewToolSetting.tsx");

export default route;
