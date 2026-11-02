// Module ID: 12550
// Function ID: 12551
// Name: buildPollResources
// Dependencies: [12546, 12, 2]

// Module 12550 (buildPollResources)
import buildPlatformPollResources from "buildPlatformPollResources" /* 12546 */;
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
