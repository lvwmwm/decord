// Module ID: 15398
// Function ID: 15399
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1391, 9101, 15397, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15398 (useActiveEventOrStageInstanceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = require(9101) /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15397)(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
