// Module ID: 15209
// Function ID: 15210
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1372, 8961, 15208, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15209 (useActiveEventOrStageInstanceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = require(8961) /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15208)(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
