// Module ID: 11884
// Function ID: 11885
// Name: buildPollResources
// Dependencies: [11880, 12, 2]

// Module 11884 (buildPollResources)
import buildPlatformPollResources from "buildPlatformPollResources" /* 11880 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default apply.memoize(function buildPollResources(arg0) {
  ({ theme, layoutType } = arg0);
  return buildPlatformPollResources.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
