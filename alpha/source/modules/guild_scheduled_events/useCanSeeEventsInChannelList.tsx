// Module ID: 13169
// Function ID: 13170
// Name: useCanSeeEventsInChannelList
// Dependencies: [7927, 7928, 13170, 2]
// Exports: default

// Module 13169 (useCanSeeEventsInChannelList)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 7927 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 7928 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 13170 */;
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
