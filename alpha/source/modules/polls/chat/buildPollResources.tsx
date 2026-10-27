// Module ID: 12124
// Function ID: 12125
// Name: buildPollResources
// Dependencies: [12120, 12, 2]

// Module 12124 (buildPollResources)
import buildPlatformPollResources from "buildPlatformPollResources" /* 12120 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const memoizeResult = module_12.memoize(function buildPollResources(arg0) {
  let layoutType;
  let theme;
  ({ theme, layoutType } = arg0);
  const obj = buildPlatformPollResources;
  return obj.buildPlatformPollResources(theme, layoutType);
}, (theme) => "" + theme.theme + ":" + theme.layoutType);
const result = size.fileFinishedImporting("modules/polls/chat/buildPollResources.tsx");

export default memoizeResult;
