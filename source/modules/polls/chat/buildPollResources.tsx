// Module ID: 8475
// Function ID: 8476
// Dependencies: [8471, 12, 2]

// Module 8475
import set from "set" /* 2 */;
import buildPlatformPollResources from "buildPlatformPollResources" /* 8471 */;
import apply from "apply" /* 12 */;

const memoizeResult = apply.memoize(function buildPollResources(arg0) {
  ({ theme, layoutType } = arg0);
  return buildPlatformPollResources.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
const result = set.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default memoizeResult;
