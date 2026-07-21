// Module ID: 10377
// Function ID: 80038
// Name: useIsSelectedResourceChannel
// Dependencies: []
// Exports: default

// Module 10377 (useIsSelectedResourceChannel)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const EMPTY_STRING_SNOWFLAKE_ID = arg1(dependencyMap[3]).EMPTY_STRING_SNOWFLAKE_ID;
const ChannelFlags = arg1(dependencyMap[4]).ChannelFlags;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx");

export default function useIsSelectedResourceChannel(arg0) {
  const arg1 = arg0;
  const items = [closure_4, closure_5, closure_3];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => {
    const channel = channel.getChannel(arg0);
    if (null != channel) {
      if (obj.hasFlag(channel.flags, constants.IS_GUILD_RESOURCE_CHANNEL)) {
        if (callback(closure_2[7])(channel, closure_5, closure_3)) {
          return channel.guild_id;
        }
      }
      const obj = arg0(closure_2[6]);
    }
  });
  const obj = arg1(dependencyMap[5]);
  let tmp2 = stateFromStores;
  if (null == stateFromStores) {
    tmp2 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj2 = arg1(dependencyMap[8]);
  return null != stateFromStores && arg1(dependencyMap[8]).useCanSeeOnboardingHome(tmp2);
};
