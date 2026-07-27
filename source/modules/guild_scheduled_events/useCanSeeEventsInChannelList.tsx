// Module ID: 11409
// Function ID: 88696
// Name: useCanSeeEventsInChannelList
// Dependencies: [8258, 8259, 11410, 2]
// Exports: default

// Module 11409 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(8258)(arg0);
  let tmp2 = !importDefault(11410)(arg0);
  if (tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp2 = tmp;
  }
  return tmp2;
};
