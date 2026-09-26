// Module ID: 12004
// Function ID: 12005
// Name: buildPollResources
// Dependencies: [12000, 12, 2]

// Module 12004 (buildPollResources)
import buildPlatformPollResources from "buildPlatformPollResources" /* 12000 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default apply.memoize(function buildPollResources(arg0) {
  ({ theme, layoutType } = arg0);
  return buildPlatformPollResources.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
