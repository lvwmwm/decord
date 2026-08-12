// Module ID: 11806
// Function ID: 11807
// Name: useCanSeeEventsInChannelList
// Dependencies: [9082, 9083, 11807, 2]
// Exports: default

// Module 11806 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(9082)(arg0);
  const tmp2 = importDefault(11807)(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
