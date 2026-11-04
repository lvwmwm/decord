// Module ID: 14148
// Function ID: 14149
// Name: useCanSeeEventsInChannelList
// Dependencies: [9234, 9235, 14149, 2]
// Exports: default

// Module 14148 (useCanSeeEventsInChannelList)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9234 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 9235 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 14149 */;
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
