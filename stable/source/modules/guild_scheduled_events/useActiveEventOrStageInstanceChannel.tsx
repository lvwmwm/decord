// Module ID: 18614
// Function ID: 18615
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [5019, 9203, 18613, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 18614 (useActiveEventOrStageInstanceChannel)
import useGuildScheduledEvents from "useGuildScheduledEvents" /* 9203 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 18613 */;
import ChannelStore from "ChannelStore" /* 5019 */;
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
