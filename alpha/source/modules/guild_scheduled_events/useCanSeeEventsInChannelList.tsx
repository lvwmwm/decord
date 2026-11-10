// Module ID: 14190
// Function ID: 14191
// Name: useCanSeeEventsInChannelList
// Dependencies: [9175, 9176, 14191, 2]
// Exports: default

// Module 14190 (useCanSeeEventsInChannelList)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9175 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 9176 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 14191 */;
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
