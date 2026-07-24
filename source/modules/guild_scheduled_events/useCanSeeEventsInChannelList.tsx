// Module ID: 11445
// Function ID: 89032
// Name: useCanSeeEventsInChannelList
// Dependencies: [8498, 8499, 11446, 2]
// Exports: default

// Module 11445 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(8498)(arg0);
  let tmp2 = !importDefault(11446)(arg0);
  if (tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp2 = tmp;
  }
  return tmp2;
};
