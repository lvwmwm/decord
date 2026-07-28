// Module ID: 15124
// Function ID: 115047
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1348, 8297, 15123, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15124 (useActiveEventOrStageInstanceChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("useAllVisibleChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  id = undefined;
  const firstActiveEventChannel = require(8297) /* useGuildUpcomingEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15123)(id)[0];
  if (null != first) {
    id = first.id;
  }
  channel = channel.getChannel(id);
  if (null != firstActiveEventChannel) {
    channel = firstActiveEventChannel;
  }
  return channel;
};
