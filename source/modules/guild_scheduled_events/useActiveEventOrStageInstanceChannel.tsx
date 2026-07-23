// Module ID: 15015
// Function ID: 114395
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1348, 8455, 15014, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15015 (useActiveEventOrStageInstanceChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("useAllVisibleChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  id = undefined;
  const firstActiveEventChannel = require(8455) /* useGuildUpcomingEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15014)(id)[0];
  if (null != first) {
    id = first.id;
  }
  channel = channel.getChannel(id);
  if (null != firstActiveEventChannel) {
    channel = firstActiveEventChannel;
  }
  return channel;
};
