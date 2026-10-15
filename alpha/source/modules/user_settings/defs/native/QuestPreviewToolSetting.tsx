// Module ID: 16095
// Function ID: 16096
// Name: QuestPreviewToolSetting
// Dependencies: [1085, 10991, 1126, 9392, 13825, 16096, 2]

// Module 16095 (QuestPreviewToolSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9392 */;
import QuestsIcon from "QuestsIcon" /* 13825 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
