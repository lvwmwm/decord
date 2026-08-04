// Module ID: 15191
// Function ID: 15192
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1372, 8960, 15190, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15191 (useActiveEventOrStageInstanceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = require(8960) /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15190)(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
