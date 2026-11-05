// Module ID: 14161
// Function ID: 14162
// Name: useCanSeeEventsInChannelList
// Dependencies: [9241, 9242, 14162, 2]
// Exports: default

// Module 14161 (useCanSeeEventsInChannelList)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9241 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 9242 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 14162 */;
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
