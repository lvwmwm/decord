// Module ID: 15740
// Function ID: 15741
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1387, 9592, 15739, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15740 (useActiveEventOrStageInstanceChannel)
import useGuildEvents from "useGuildEvents" /* 9592 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 15739 */;
import closure_3 from "ensureGuildLoaded" /* 1387 */;

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
