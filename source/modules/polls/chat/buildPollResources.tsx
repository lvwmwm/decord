// Module ID: 8102
// Function ID: 8103
// Dependencies: [8098, 12, 2]

// Module 8102
import set from "set" /* 2 */;
import buildPlatformPollResources from "buildPlatformPollResources" /* 8098 */;
import apply from "apply" /* 12 */;

const memoizeResult = apply.memoize(function buildPollResources(arg0) {
  ({ theme, layoutType } = arg0);
  return buildPlatformPollResources.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
const result = set.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default memoizeResult;
