// Module ID: 13862
// Function ID: 13863
// Name: useCanSeeEventsInChannelList
// Dependencies: [8436, 8437, 13863, 2]
// Exports: default

// Module 13862 (useCanSeeEventsInChannelList)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8436 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 8437 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 13863 */;
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
