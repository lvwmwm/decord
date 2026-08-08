// Module ID: 15148
// Function ID: 15149
// Dependencies: [19, 9574, 21, 15149, 4154, 10460, 4013, 14339, 15150, 15476, 14422, 2]

// Module 15148
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = require("noop").memo(function GuildsOnly() {
  let obj = require(15149) /* trackTabPressed */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp3 = importDefault;
  const tmp4 = importDefault(4154)();
  let isEligibleForQuests = require(10460) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp4, children: null };
  const items = [callback(importDefault(15150), {}), callback(importDefault(15476), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = tmp6(tmp3(14422), {});
  }
  items[2] = isEligibleForQuests;
  obj[1] = closure_5(require(14339) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, { children: items });
  return callback(require(4013) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
