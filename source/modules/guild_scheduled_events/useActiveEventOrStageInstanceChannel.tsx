// Module ID: 15151
// Function ID: 15152
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1372, 8318, 15150, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15151 (useActiveEventOrStageInstanceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = require(8318) /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15150)(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
