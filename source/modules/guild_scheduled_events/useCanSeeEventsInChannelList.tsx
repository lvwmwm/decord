// Module ID: 11467
// Function ID: 11468
// Name: useCanSeeEventsInChannelList
// Dependencies: [8317, 8318, 11468, 2]
// Exports: default

// Module 11467 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(8317)(arg0);
  const tmp2 = importDefault(11468)(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
