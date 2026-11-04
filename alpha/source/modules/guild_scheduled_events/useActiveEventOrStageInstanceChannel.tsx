// Module ID: 18499
// Function ID: 18500
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [4990, 9235, 18498, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 18499 (useActiveEventOrStageInstanceChannel)
import useGuildScheduledEvents from "useGuildScheduledEvents" /* 9235 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 18498 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export function useActiveEventOrStageInstanceChannel(id) {
  const obj = useGuildScheduledEvents;
  let firstActiveEventChannel = obj.useFirstActiveEventChannel(id);
  const first = useLiveStageChannelsDefault(id)[0];
  const getChannel = ChannelStore.getChannel;
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = getChannel(id);
  }
  return firstActiveEventChannel;
}
