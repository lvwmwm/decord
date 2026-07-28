// Module ID: 14901
// Function ID: 113497
// Dependencies: [31, 8743, 33, 14902, 4012, 10469, 3877, 14104, 14903, 15207, 14183, 2]

// Module 14901
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const memoResult = require("result").memo(function GuildsOnly() {
  let obj = require(14902) /* trackForScreen */;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp2 = importDefault(4012)();
  let isEligibleForQuests = require(10469) /* getIsEligibleForQuests */.getIsEligibleForQuests();
  obj = { gradient: tmp2 };
  obj = {};
  const items = [callback(importDefault(14903), {}), callback(importDefault(15207), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = callback(importDefault(14183), {});
  }
  items[2] = isEligibleForQuests;
  obj.children = items;
  obj.children = closure_5(require(14104) /* QuestDockMode */.QuestDockExternalCoordinationContextProvider, obj);
  return callback(require(3877) /* ManaContext */.ThemeContextProvider, obj);
}, () => true);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
