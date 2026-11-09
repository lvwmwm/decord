// Module ID: 14164
// Function ID: 14165
// Name: useCanSeeEventsInChannelList
// Dependencies: [9169, 9170, 14165, 2]
// Exports: default

// Module 14164 (useCanSeeEventsInChannelList)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9169 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 9170 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 14165 */;
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
