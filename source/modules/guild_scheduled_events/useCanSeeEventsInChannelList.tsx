// Module ID: 11471
// Function ID: 11472
// Name: useCanSeeEventsInChannelList
// Dependencies: [8320, 8321, 11472, 2]
// Exports: default

// Module 11471 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(8320)(arg0);
  const tmp2 = importDefault(11472)(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
