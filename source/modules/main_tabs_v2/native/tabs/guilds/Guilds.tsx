// Module ID: 14683
// Function ID: 110706
// Dependencies: []

// Module 14683
const YouBarNavigatorScreens = arg1(dependencyMap[1]).YouBarNavigatorScreens;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function GuildsOnly() {
  let obj = arg1(dependencyMap[3]);
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp2 = importDefault(dependencyMap[4])();
  let isEligibleForQuests = arg1(dependencyMap[5]).getIsEligibleForQuests();
  obj = { gradient: tmp2 };
  obj = {};
  const items = [callback(importDefault(dependencyMap[8]), {}), callback(importDefault(dependencyMap[9]), {}), ];
  if (isEligibleForQuests) {
    isEligibleForQuests = callback(importDefault(dependencyMap[10]), {});
  }
  items[2] = isEligibleForQuests;
  obj.children = items;
  obj.children = closure_5(arg1(dependencyMap[7]).QuestDockExternalCoordinationContextProvider, obj);
  return callback(arg1(dependencyMap[6]).ThemeContextProvider, obj);
}, () => true);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
