// Module ID: 11546
// Function ID: 11547
// Name: useCanSeeEventsInChannelList
// Dependencies: [8890, 8891, 11547, 2]
// Exports: default

// Module 11546 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(8890)(arg0);
  const tmp2 = importDefault(11547)(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
