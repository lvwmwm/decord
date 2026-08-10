// Module ID: 11746
// Function ID: 11747
// Name: useCanSeeEventsInChannelList
// Dependencies: [9037, 9038, 11747, 2]
// Exports: default

// Module 11746 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(9037)(arg0);
  const tmp2 = importDefault(11747)(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
