// Module ID: 15192
// Function ID: 15193
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1372, 8960, 15191, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15192 (useActiveEventOrStageInstanceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = require(8960) /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15191)(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
