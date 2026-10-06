// Module ID: 11754
// Function ID: 11755
// Name: useCanSeeEventsInChannelList
// Dependencies: [558, 8949, 8938, 11755, 2]

// Module 11754 (useCanSeeEventsInChannelList)
import useGuildScheduledEventsDefault from "useGuildScheduledEvents" /* 8938 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8949 */;
import useIsHubForGuildDefault from "useIsHubForGuild" /* 11755 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((arg0) => {
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
