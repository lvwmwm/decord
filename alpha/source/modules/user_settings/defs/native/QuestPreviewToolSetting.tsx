// Module ID: 17774
// Function ID: 17775
// Name: QuestPreviewToolSetting
// Dependencies: [1072, 12406, 1113, 10131, 10562, 17775, 2]

// Module 17774 (QuestPreviewToolSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10131 */;
import QuestsIcon from "QuestsIcon" /* 10562 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
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
