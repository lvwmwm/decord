// Module ID: 15177
// Function ID: 15178
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1372, 8325, 15176, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15177 (useActiveEventOrStageInstanceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = require(8325) /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15176)(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
