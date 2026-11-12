// Module ID: 14669
// Function ID: 14670
// Name: useCanSeeEventsInChannelList
// Dependencies: [8359, 8360, 14670, 2]
// Exports: default

// Module 14669 (useCanSeeEventsInChannelList)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8359 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 8360 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 14670 */;
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
