// Module ID: 15163
// Function ID: 114357
// Name: useResourceChannels
// Dependencies: []
// Exports: default

// Module 15163 (useResourceChannels)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_onboarding_home/useResourceChannels.tsx");

export default function useResourceChannels(arg0) {
  const arg1 = arg0;
  const items = [closure_3, closure_2];
  return arg1(dependencyMap[2]).useStateFromStoresArray(items, () => {
    const resourceChannels = resourceChannels.getResourceChannels(arg0);
    return resourceChannels.filter((channelId) => null != channel.getChannel(channelId.channelId));
  });
};
