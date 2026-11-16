// Module ID: 18906
// Function ID: 18907
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [5155, 8426, 18905, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 18906 (useActiveEventOrStageInstanceChannel)
import useGuildScheduledEvents from "useGuildScheduledEvents" /* 8426 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 18905 */;
import ChannelStore from "ChannelStore" /* 5155 */;
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
