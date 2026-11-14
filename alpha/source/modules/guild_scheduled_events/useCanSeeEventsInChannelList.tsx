// Module ID: 14782
// Function ID: 14783
// Name: useCanSeeEventsInChannelList
// Dependencies: [8425, 8426, 14783, 2]
// Exports: default

// Module 14782 (useCanSeeEventsInChannelList)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8425 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 8426 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 14783 */;
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
