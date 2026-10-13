// Module ID: 11731
// Function ID: 11732
// Name: buildPollResources
// Dependencies: [11727, 12, 2]

// Module 11731 (buildPollResources)
import buildPlatformPollResources from "buildPlatformPollResources" /* 11727 */;
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
