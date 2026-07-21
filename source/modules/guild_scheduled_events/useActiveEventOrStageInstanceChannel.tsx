// Module ID: 14888
// Function ID: 112150
// Name: useActiveEventOrStageInstanceChannel
// Dependencies: []
// Exports: useActiveEventOrStageInstanceChannel

// Module 14888 (useActiveEventOrStageInstanceChannel)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_scheduled_events/useActiveEventOrStageInstanceChannel.tsx");

export const useActiveEventOrStageInstanceChannel = function useActiveEventOrStageInstanceChannel(id) {
  id = undefined;
  const firstActiveEventChannel = arg1(dependencyMap[1]).useFirstActiveEventChannel(id);
  const first = importDefault(dependencyMap[2])(id)[0];
  if (null != first) {
    id = first.id;
  }
  let channel = channel.getChannel(id);
  if (null != firstActiveEventChannel) {
    channel = firstActiveEventChannel;
  }
  return channel;
};
