// Module ID: 16537
// Function ID: 16538
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [2042, 9756, 16536, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 16537 (useActiveEventOrStageInstanceChannel)
import useGuildScheduledEvents from "useGuildScheduledEvents" /* 9756 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 16536 */;
import ChannelStore from "ChannelStore" /* 2042 */;

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
