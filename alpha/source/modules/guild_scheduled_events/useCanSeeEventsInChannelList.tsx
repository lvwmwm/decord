// Module ID: 12630
// Function ID: 12631
// Name: useCanSeeEventsInChannelList
// Dependencies: [9767, 9756, 12631, 2]
// Exports: default

// Module 12630 (useCanSeeEventsInChannelList)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9767 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 12631 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = useCanCreateAnEventDefault(arg0);
  const tmp2 = useIsHubForGuildDefault(arg0);
  let tmp3 = !tmp2;
  if (!tmp2) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
