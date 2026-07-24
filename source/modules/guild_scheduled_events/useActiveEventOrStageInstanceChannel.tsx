// Module ID: 15062
// Function ID: 114716
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1348, 8499, 15061, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15062 (useActiveEventOrStageInstanceChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("useAllVisibleChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  id = undefined;
  const firstActiveEventChannel = require(8499) /* useGuildUpcomingEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15061)(id)[0];
  if (null != first) {
    id = first.id;
  }
  channel = channel.getChannel(id);
  if (null != firstActiveEventChannel) {
    channel = firstActiveEventChannel;
  }
  return channel;
};
