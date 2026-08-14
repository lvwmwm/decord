// Module ID: 11821
// Function ID: 11822
// Name: useCanSeeEventsInChannelList
// Dependencies: [9100, 9101, 11822, 2]
// Exports: default

// Module 11821 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(9100)(arg0);
  const tmp2 = importDefault(11822)(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
