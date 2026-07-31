// Module ID: 11485
// Function ID: 11486
// Name: useCanSeeEventsInChannelList
// Dependencies: [8324, 8325, 11486, 2]
// Exports: default

// Module 11485 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(8324)(arg0);
  const tmp2 = importDefault(11486)(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
