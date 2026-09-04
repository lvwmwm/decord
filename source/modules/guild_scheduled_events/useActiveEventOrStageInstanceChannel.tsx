// Module ID: 16109
// Function ID: 16110
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1386, 9591, 16108, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 16109 (useActiveEventOrStageInstanceChannel)
import useGuildEvents from "useGuildEvents" /* 9591 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 16108 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = useGuildEvents.useFirstActiveEventChannel(id);
  const first = useLiveStageChannelsDefault(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
