// Module ID: 11654
// Function ID: 11655
// Dependencies: [11650, 12, 2]

// Module 11654
import set from "set" /* 2 */;
import buildPlatformPollResources from "buildPlatformPollResources" /* 11650 */;
import apply from "apply" /* 12 */;

const memoizeResult = apply.memoize(function buildPollResources(arg0) {
  ({ theme, layoutType } = arg0);
  return buildPlatformPollResources.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
const result = set.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default memoizeResult;
