// Module ID: 11435
// Function ID: 11436
// Name: buildPollResources
// Dependencies: [11431, 12, 2]

// Module 11435 (buildPollResources)
import buildPlatformPollResources from "buildPlatformPollResources" /* 11431 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default apply.memoize(function buildPollResources(arg0) {
  ({ theme, layoutType } = arg0);
  return buildPlatformPollResources.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
