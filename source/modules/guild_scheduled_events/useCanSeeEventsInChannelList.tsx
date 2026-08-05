// Module ID: 11630
// Function ID: 11631
// Name: useCanSeeEventsInChannelList
// Dependencies: [8931, 8932, 11631, 2]
// Exports: default

// Module 11630 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(8931)(arg0);
  const tmp2 = importDefault(11631)(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
