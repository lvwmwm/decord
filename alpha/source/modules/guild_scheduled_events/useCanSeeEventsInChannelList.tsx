// Module ID: 13121
// Function ID: 13122
// Name: useCanSeeEventsInChannelList
// Dependencies: [7896, 7897, 13122, 2]
// Exports: default

// Module 13121 (useCanSeeEventsInChannelList)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 7896 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 7897 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 13122 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default function useCanSeeEventsInChannelList(arg0) {
  let tmp = useCanCreateAnEventDefault(arg0);
  const arr = useGuildScheduledEventsDefault(arg0);
  let tmp3 = !useIsHubForGuildDefault(arg0);
  useIsHubForGuildDefault(arg0);
  if (tmp3) {
    if (!tmp) {
      tmp = arr.length > 0;
    }
    tmp3 = tmp;
  }
  return tmp3;
};
