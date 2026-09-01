// Module ID: 8134
// Function ID: 8135
// Dependencies: [8130, 12, 2]

// Module 8134
import set from "set" /* 2 */;
import buildPlatformPollResources from "buildPlatformPollResources" /* 8130 */;
import apply from "apply" /* 12 */;

const memoizeResult = apply.memoize(function buildPollResources(arg0) {
  ({ theme, layoutType } = arg0);
  return buildPlatformPollResources.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
const result = set.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default memoizeResult;
