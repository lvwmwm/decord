// Module ID: 11664
// Function ID: 11665
// Name: useCanSeeEventsInChannelList
// Dependencies: [8960, 8961, 11665, 2]
// Exports: default

// Module 11664 (useCanSeeEventsInChannelList)
const result = require("useIsHubForGuild").fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = importDefault(8960)(arg0);
  const tmp2 = importDefault(11665)(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
