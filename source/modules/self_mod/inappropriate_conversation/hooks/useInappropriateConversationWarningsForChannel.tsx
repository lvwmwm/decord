// Module ID: 10093
// Function ID: 78173
// Name: useInappropriateConversationWarningsForChannel
// Dependencies: []
// Exports: useInappropriateConversationWarningsForChannel

// Module 10093 (useInappropriateConversationWarningsForChannel)
let closure_2 = importDefault(dependencyMap[0]);
const SafetyWarningTypes = arg1(dependencyMap[0]).SafetyWarningTypes;
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx");

export const useInappropriateConversationWarningsForChannel = function useInappropriateConversationWarningsForChannel(channelId) {
  const arg1 = channelId;
  const items = [closure_2];
  const items1 = [channelId];
  const stateFromStores = arg1(dependencyMap[1]).useStateFromStores(items, () => channelSafetyWarnings.getChannelSafetyWarnings(arg0), items1);
  return stateFromStores.filter((type) => {
    let tmp = type.type === closure_3.INAPPROPRIATE_CONVERSATION_TIER_1;
    if (!tmp) {
      tmp = type.type === closure_3.INAPPROPRIATE_CONVERSATION_TIER_2;
    }
    return tmp;
  });
};
