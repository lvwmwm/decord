// Module ID: 8267
// Function ID: 8268
// Dependencies: [8263, 12, 2]

// Module 8267
import apply from "apply";

const memoizeResult = apply.memoize(function buildPollResources(arg0) {
  let layoutType;
  let theme;
  ({ theme, layoutType } = arg0);
  return require(8263) /* buildPlatformPollResources */.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
const result = require("set").fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default memoizeResult;
