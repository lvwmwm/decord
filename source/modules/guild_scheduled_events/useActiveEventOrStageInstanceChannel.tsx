// Module ID: 15383
// Function ID: 15384
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1391, 9083, 15382, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15383 (useActiveEventOrStageInstanceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = require(9083) /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15382)(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
