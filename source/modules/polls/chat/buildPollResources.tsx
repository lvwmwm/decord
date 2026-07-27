// Module ID: 7942
// Function ID: 63227
// Dependencies: [7938, 22, 2]

// Module 7942
import apply from "apply";

const memoizeResult = apply.memoize(function buildPollResources(arg0) {
  let layoutType;
  let theme;
  ({ theme, layoutType } = arg0);
  return require(7938) /* buildPlatformPollResources */.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
const result = require("set").fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default memoizeResult;
