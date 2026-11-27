// Module ID: 13344
// Function ID: 13345
// Name: useCanSeeEventsInChannelList
// Dependencies: [8613, 8464, 13345, 2]
// Exports: default

// Module 13344 (useCanSeeEventsInChannelList)
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 8464 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8613 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 13345 */;
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
