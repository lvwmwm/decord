// Module ID: 11447
// Function ID: 88815
// Name: useCanSeeEventsInChannelList
// Dependencies: [8296, 8297, 11448, 2]
// Exports: default

// Module 11447 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(8296)(arg0);
  let tmp2 = !importDefault(11448)(arg0);
  if (tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp2 = tmp;
  }
  return tmp2;
};
