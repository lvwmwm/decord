// Module ID: 13951
// Function ID: 106005
// Name: route
// Dependencies: [0, 0, 0, 0, 0, 0]

// Module 13951 (route)
let obj = {
  useTitle() {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.BDUDau);
  },
  usePredicate() {
    return require(dependencyMap[3]).useIsPreviewerOnAnyQuest();
  },
  parent: null,
  IconComponent: require("__exportStarResult1").QuestsIcon,
  screen: obj
};
obj = {
  route: require("__exportStarResult1").UserSettingsSections.QUEST_PREVIEW_TOOL_2,
  getComponent() {
    return require(dependencyMap[5]).default;
  }
};
const route = require("__exportStarResult1").createRoute(obj);
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/QuestPreviewToolSetting.tsx");

export default route;
