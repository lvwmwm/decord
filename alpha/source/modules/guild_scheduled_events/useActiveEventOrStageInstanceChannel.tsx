// Module ID: 18608
// Function ID: 18609
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [4991, 9176, 18607, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 18608 (useActiveEventOrStageInstanceChannel)
import useGuildScheduledEvents from "useGuildScheduledEvents" /* 9176 */;
import useLiveStageChannelsDefault from "useLiveStageChannels" /* 18607 */;
import ChannelStore from "ChannelStore" /* 4991 */;
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
