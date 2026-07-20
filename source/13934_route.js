// Module ID: 13934
// Function ID: 105910
// Name: route
// Dependencies: [0, 0, 0, 0, 0, 0]

// Module 13934 (route)
import result from "result";

let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.BDUDau);
  },
  usePredicate() {
    return require(dependencyMap[3]).useIsPreviewerOnAnyQuest();
  },
  parent: null,
  IconComponent: require("result").QuestsIcon,
  screen: obj
};
obj = {
  route: require("result").UserSettingsSections.QUEST_PREVIEW_TOOL_2,
  getComponent() {
    return require(dependencyMap[5]).default;
  }
};
const route = result.createRoute(obj);
const _module1 = require(dependencyMap[6]);
result = _module1.fileFinishedImporting("modules/user_settings/defs/native/QuestPreviewToolSetting.tsx");

export default route;
