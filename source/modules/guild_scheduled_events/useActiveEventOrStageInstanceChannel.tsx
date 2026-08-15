// Module ID: 15448
// Function ID: 15449
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1391, 8891, 15447, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15448 (useActiveEventOrStageInstanceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = require(8891) /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15447)(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
