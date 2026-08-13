// Module ID: 11804
// Function ID: 11805
// Name: useCanSeeEventsInChannelList
// Dependencies: [9086, 9087, 11805, 2]
// Exports: default

// Module 11804 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(9086)(arg0);
  const tmp2 = importDefault(11805)(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
