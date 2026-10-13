// Module ID: 12596
// Function ID: 12597
// Name: useCanSeeEventsInChannelList
// Dependencies: [558, 8654, 8655, 12597, 2]

// Module 12596 (useCanSeeEventsInChannelList)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8654 */;
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 8655 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 12597 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanSeeEventsInChannelList(arg0) {
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
}) : (function useCanSeeEventsInChannelList(arg0) {
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
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx");

export default tmp2;
