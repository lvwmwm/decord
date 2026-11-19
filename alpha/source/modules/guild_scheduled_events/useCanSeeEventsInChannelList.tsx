// Module ID: 13151
// Function ID: 13152
// Name: useCanSeeEventsInChannelList
// Dependencies: [7897, 7898, 13152, 2]
// Exports: default

// Module 13151 (useCanSeeEventsInChannelList)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 7897 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 7898 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 13152 */;
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
