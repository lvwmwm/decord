// Module ID: 16019
// Function ID: 16020
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [2045, 9142, 16018, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 16019 (useActiveEventOrStageInstanceChannel)
import useGuildScheduledEvents from "useGuildScheduledEvents" /* 9142 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 16018 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = useGuildScheduledEvents.useFirstActiveEventChannel(id);
  const first = useLiveStageChannelsDefault(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = ChannelStore.getChannel(id);
  }
  return firstActiveEventChannel;
};
