// Module ID: 11094
// Function ID: 11095
// Name: buildPollResources
// Dependencies: [11090, 12, 2]

// Module 11094 (buildPollResources)
import buildPlatformPollResources from "buildPlatformPollResources" /* 11090 */;
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
