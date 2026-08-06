// Module ID: 8250
// Function ID: 8251
// Dependencies: [8246, 12, 2]

// Module 8250
import apply from "apply";

const memoizeResult = apply.memoize(function buildPollResources(arg0) {
  let layoutType;
  let theme;
  ({ theme, layoutType } = arg0);
  return require(8246) /* buildPlatformPollResources */.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
const result = require("set").fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default memoizeResult;
