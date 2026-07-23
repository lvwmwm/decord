// Module ID: 11417
// Function ID: 88793
// Name: useCanSeeEventsInChannelList
// Dependencies: [8454, 8455, 11418, 2]
// Exports: default

// Module 11417 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(8454)(arg0);
  let tmp2 = !importDefault(11418)(arg0);
  if (tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp2 = tmp;
  }
  return tmp2;
};
