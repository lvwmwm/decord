// Module ID: 10425
// Function ID: 80303
// Name: useShowChannelOptInNotice
// Dependencies: []
// Exports: default

// Module 10425 (useShowChannelOptInNotice)
let closure_2 = importDefault(dependencyMap[0]);
const NULL_STRING_GUILD_ID = arg1(dependencyMap[1]).NULL_STRING_GUILD_ID;
const ChannelFlags = arg1(dependencyMap[2]).ChannelFlags;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/opt_in_channels/useShowChannelOptInNotice.tsx");

export default function useShowChannelOptInNotice(getGuildId) {
  const arg1 = getGuildId;
  let guildId;
  if (null != getGuildId) {
    guildId = getGuildId.getGuildId();
  }
  let optInEnabledForGuild = arg1(dependencyMap[3]).useOptInEnabledForGuild(null != guildId ? getGuildId.guild_id : NULL_STRING_GUILD_ID);
  const obj = arg1(dependencyMap[3]);
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => {
    let result = null != arg0;
    if (result) {
      result = channelRecordOrParentOptedIn.isChannelRecordOrParentOptedIn(arg0);
    }
    return result;
  });
  const obj2 = arg1(dependencyMap[4]);
  let guild_id;
  if (null != getGuildId) {
    guild_id = getGuildId.guild_id;
  }
  if (null == guild_id) {
    guild_id = NULL_STRING_GUILD_ID;
  }
  let canSeeOnboardingHome = arg1(dependencyMap[5]).useCanSeeOnboardingHome(guild_id);
  if (null == getGuildId) {
    return false;
  } else {
    if (canSeeOnboardingHome) {
      canSeeOnboardingHome = getGuildId.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
    }
    if (optInEnabledForGuild) {
      optInEnabledForGuild = !canSeeOnboardingHome;
    }
    if (optInEnabledForGuild) {
      optInEnabledForGuild = !stateFromStores;
    }
    if (optInEnabledForGuild) {
      optInEnabledForGuild = !getGuildId.isThread();
    }
    return optInEnabledForGuild;
  }
  const obj3 = arg1(dependencyMap[5]);
};
