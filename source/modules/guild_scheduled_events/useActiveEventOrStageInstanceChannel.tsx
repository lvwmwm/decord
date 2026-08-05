// Module ID: 15171
// Function ID: 15172
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1372, 8932, 15170, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15171 (useActiveEventOrStageInstanceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = require(8932) /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15170)(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
