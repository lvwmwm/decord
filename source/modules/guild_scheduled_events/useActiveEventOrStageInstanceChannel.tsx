// Module ID: 15158
// Function ID: 15159
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1372, 8630, 15157, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15158 (useActiveEventOrStageInstanceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = require(8630) /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15157)(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
