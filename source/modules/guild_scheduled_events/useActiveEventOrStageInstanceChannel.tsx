// Module ID: 15233
// Function ID: 15234
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1372, 8978, 15232, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15233 (useActiveEventOrStageInstanceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = require(8978) /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15232)(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
