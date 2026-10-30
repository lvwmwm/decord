// Module ID: 18191
// Function ID: 18192
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [4858, 9071, 18190, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 18191 (useActiveEventOrStageInstanceChannel)
import useGuildScheduledEvents from "useGuildScheduledEvents" /* 9071 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 18190 */;
import ChannelStore from "ChannelStore" /* 4858 */;
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
