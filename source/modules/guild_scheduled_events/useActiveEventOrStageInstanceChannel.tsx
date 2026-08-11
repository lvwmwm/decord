// Module ID: 15326
// Function ID: 15327
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: [1391, 9044, 15325, 2]
// Exports: useActiveEventOrStageInstanceChannel

// Module 15326 (useActiveEventOrStageInstanceChannel)
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("useLiveStageChannels").fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  let firstActiveEventChannel = require(9044) /* useGuildEvents */.useFirstActiveEventChannel(id);
  const first = importDefault(15325)(id)[0];
  if (first != null) {
    id = first.id;
  }
  if (firstActiveEventChannel == null) {
    firstActiveEventChannel = channel.getChannel(id);
  }
  return firstActiveEventChannel;
};
