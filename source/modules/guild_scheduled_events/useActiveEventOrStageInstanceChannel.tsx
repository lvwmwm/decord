// Module ID: 15084
// Function ID: 114889
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1348, 8259, 15083, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15084 (useActiveEventOrStageInstanceChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("useAllVisibleChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  id = undefined;
  const firstActiveEventChannel = require(8259) /* useGuildUpcomingEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15083)(id)[0];
  if (null != first) {
    id = first.id;
  }
  channel = channel.getChannel(id);
  if (null != firstActiveEventChannel) {
    channel = firstActiveEventChannel;
  }
  return channel;
};
