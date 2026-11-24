// Module ID: 13161
// Function ID: 13162
// Name: useCanSeeEventsInChannelList
// Dependencies: [8471, 8322, 13162, 2]
// Exports: default

// Module 13161 (useCanSeeEventsInChannelList)
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 8322 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8471 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 13162 */;
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
