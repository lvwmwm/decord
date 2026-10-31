// Module ID: 13915
// Function ID: 13916
// Name: useCanSeeEventsInChannelList
// Dependencies: [9089, 9090, 13916, 2]
// Exports: default

// Module 13915 (useCanSeeEventsInChannelList)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9089 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 9090 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 13916 */;
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
