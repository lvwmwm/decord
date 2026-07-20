// Module ID: 7470
// Function ID: 59978
// Name: useStageChannelIsLive
// Dependencies: []
// Exports: default

// Module 7470 (useStageChannelIsLive)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/stage_channels/useStateChannelIsLive.tsx");

export default function useStageChannelIsLive(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => live.isLive(arg0), items1);
};
