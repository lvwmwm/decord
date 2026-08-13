// Module ID: 11805
// Function ID: 11806
// Name: useCanSeeEventsInChannelList
// Dependencies: [9086, 9087, 11806, 2]
// Exports: default

// Module 11805 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(9086)(arg0);
  const tmp2 = importDefault(11806)(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
