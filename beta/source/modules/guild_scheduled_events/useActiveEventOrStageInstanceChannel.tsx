// Module ID: 17715
// Function ID: 17716
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [4762, 8017, 17714, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 17715 (useActiveEventOrStageInstanceChannel)
import useGuildScheduledEvents from "useGuildScheduledEvents" /* 8017 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 17714 */;
import ChannelStore from "ChannelStore" /* 4762 */;
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
