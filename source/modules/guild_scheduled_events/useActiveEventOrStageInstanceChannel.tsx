// Module ID: 15392
// Function ID: 15393
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1391, 9087, 15391, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15392 (useActiveEventOrStageInstanceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = require(9087) /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15391)(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
