// Module ID: 17577
// Function ID: 17578
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [4643, 7897, 17576, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 17577 (useActiveEventOrStageInstanceChannel)
import useGuildScheduledEvents from "useGuildScheduledEvents" /* 7897 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 17576 */;
import ChannelStore from "ChannelStore" /* 4643 */;
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
