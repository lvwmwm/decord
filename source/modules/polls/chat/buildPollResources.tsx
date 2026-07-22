// Module ID: 7902
// Function ID: 62921
// Dependencies: []

// Module 7902
const _module = require(dependencyMap[1]);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default _module.memoize(function buildPollResources(arg0) {
  let layoutType;
  let theme;
  ({ theme, layoutType } = arg0);
  return require(dependencyMap[0]).buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
