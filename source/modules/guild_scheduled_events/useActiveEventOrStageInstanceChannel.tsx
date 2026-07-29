// Module ID: 15157
// Function ID: 15158
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1372, 8321, 15156, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15157 (useActiveEventOrStageInstanceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = require(8321) /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15156)(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
