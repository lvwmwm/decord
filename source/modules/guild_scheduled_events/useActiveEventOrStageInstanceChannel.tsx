// Module ID: 15314
// Function ID: 15315
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1372, 9038, 15313, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15314 (useActiveEventOrStageInstanceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = require(9038) /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15313)(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
