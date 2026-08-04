// Module ID: 11658
// Function ID: 11659
// Name: useCanSeeEventsInChannelList
// Dependencies: [8959, 8960, 11659, 2]
// Exports: default

// Module 11658 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(8959)(arg0);
  const tmp2 = importDefault(11659)(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
