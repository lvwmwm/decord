// Module ID: 11861
// Function ID: 11862
// Name: useCanSeeEventsInChannelList
// Dependencies: [8954, 8943, 11862, 2]
// Exports: default

// Module 11861 (useCanSeeEventsInChannelList)
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 8943 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8954 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 11862 */;
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
