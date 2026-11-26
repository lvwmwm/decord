// Module ID: 13247
// Function ID: 13248
// Name: useCanSeeEventsInChannelList
// Dependencies: [8016, 8017, 13248, 2]
// Exports: default

// Module 13247 (useCanSeeEventsInChannelList)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8016 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 8017 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 13248 */;
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
