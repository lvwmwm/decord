// Module ID: 11749
// Function ID: 11750
// Name: useCanSeeEventsInChannelList
// Dependencies: [9043, 9044, 11750, 2]
// Exports: default

// Module 11749 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(9043)(arg0);
  const tmp2 = importDefault(11750)(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
