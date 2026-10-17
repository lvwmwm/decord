// Module ID: 16208
// Function ID: 16209
// Name: QuestPreviewToolSetting
// Dependencies: [1087, 11065, 1128, 9473, 13930, 16209, 2]

// Module 16208 (QuestPreviewToolSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9473 */;
import QuestsIcon from "QuestsIcon" /* 13930 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
