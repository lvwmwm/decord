// Module ID: 11407
// Function ID: 88743
// Name: useCanSeeEventsInChannelList
// Dependencies: []
// Exports: default

// Module 11407 (useCanSeeEventsInChannelList)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(dependencyMap[0])(arg0);
  let tmp2 = !importDefault(dependencyMap[2])(arg0);
  if (tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp2 = tmp;
  }
  return tmp2;
};
