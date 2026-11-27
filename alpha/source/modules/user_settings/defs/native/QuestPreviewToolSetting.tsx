// Module ID: 16768
// Function ID: 16769
// Name: QuestPreviewToolSetting
// Dependencies: [1071, 11970, 1112, 9893, 14303, 16769, 2]

// Module 16768 (QuestPreviewToolSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9893 */;
import QuestsIcon from "QuestsIcon" /* 14303 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
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
