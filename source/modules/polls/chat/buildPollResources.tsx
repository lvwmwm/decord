// Module ID: 8080
// Function ID: 8081
// Dependencies: [8076, 12, 2]

// Module 8080
import set from "set" /* 2 */;
import buildPlatformPollResources from "buildPlatformPollResources" /* 8076 */;
import apply from "apply" /* 12 */;

const memoizeResult = apply.memoize(function buildPollResources(arg0) {
  ({ theme, layoutType } = arg0);
  return buildPlatformPollResources.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
const result = set.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default memoizeResult;
