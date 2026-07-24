// Module ID: 14845
// Function ID: 113191
// Dependencies: [31, 8811, 33, 14846, 3977, 10494, 3842, 14048, 14847, 15144, 14127, 2]

// Module 14845
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const memoResult = require("result").memo(function GuildsOnly() {
  let obj = require(14846) /* trackForScreen */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp2 = importDefault(3977)();
  let isEligibleForQuests = require(10494) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp2 };
  obj = {};
  const items = [callback(importDefault(14847), {}), callback(importDefault(15144), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = callback(importDefault(14127), {});
  }
  items[2] = isEligibleForQuests;
  obj.children = items;
  obj.children = closure_5(require(14048) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, obj);
  return callback(require(3842) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
