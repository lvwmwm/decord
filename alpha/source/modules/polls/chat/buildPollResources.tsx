// Module ID: 12162
// Function ID: 12163
// Name: buildPollResources
// Dependencies: [12158, 12, 2]

// Module 12162 (buildPollResources)
import buildPlatformPollResources from "buildPlatformPollResources" /* 12158 */;
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
