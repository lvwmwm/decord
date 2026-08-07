// Module ID: 11679
// Function ID: 11680
// Name: useCanSeeEventsInChannelList
// Dependencies: [8977, 8978, 11680, 2]
// Exports: default

// Module 11679 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(8977)(arg0);
  const tmp2 = importDefault(11680)(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
