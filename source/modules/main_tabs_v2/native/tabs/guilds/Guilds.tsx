// Module ID: 15937
// Function ID: 15938
// Dependencies: [19, 11016, 21, 15938, 4331, 11416, 4205, 15023, 15939, 16286, 15107, 2]

// Module 15937
import ManaContext from "ManaContext" /* 4205 */;
import getGuildThemeNameDefault from "getGuildThemeName" /* 4331 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 11416 */;
import QuestDockMode from "QuestDockMode" /* 15023 */;
import QuestDockWithGestureAnimationDefault from "QuestDockWithGestureAnimation" /* 15107 */;
import trackTabPressed from "trackTabPressed" /* 15938 */;
import LeftPanelContentDefault from "LeftPanelContent" /* 15939 */;
import _modDef16286 from "module_16286" /* 16286 */;
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS" /* 11016 */;
import jsxProd from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = importAllResult.memo(function GuildsOnly() {
  let obj = trackTabPressed;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = getGuildThemeNameDefault();
  let isEligibleForQuests = getIsEligibleForQuests.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(LeftPanelContentDefault, {}), callback(_modDef16286, {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(QuestDockWithGestureAnimationDefault, {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(QuestDockMode.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(ManaContext.ThemeContextProvider, obj);
}, () => true);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
