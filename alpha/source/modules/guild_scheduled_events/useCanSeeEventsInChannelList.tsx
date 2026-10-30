// Module ID: 13880
// Function ID: 13881
// Name: useCanSeeEventsInChannelList
// Dependencies: [9070, 9071, 13881, 2]
// Exports: default

// Module 13880 (useCanSeeEventsInChannelList)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9070 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 9071 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 13881 */;
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
