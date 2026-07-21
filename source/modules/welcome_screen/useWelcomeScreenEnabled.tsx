// Module ID: 11676
// Function ID: 90578
// Name: useWelcomeScreenEnabled
// Dependencies: []
// Exports: default

// Module 11676 (useWelcomeScreenEnabled)
const isGuildTextChannelType = require(dependencyMap[0]).isGuildTextChannelType;
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const GuildFeatures = require(dependencyMap[4]).GuildFeatures;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/welcome_screen/useWelcomeScreenEnabled.tsx");

export default function useWelcomeScreenEnabled(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  const items = [closure_3, closure_4, closure_5];
  return require(dependencyMap[5]).useStateFromStores(items, () => {
    const guild = guild.getGuild(arg1);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(constants.WELCOME_SCREEN_ENABLED);
    }
    if (true === hasItem) {
      const features2 = guild.features;
      if (features2.has(constants.COMMUNITY)) {
        const features3 = guild.features;
        if (features3.has(constants.GUILD_SERVER_GUIDE)) {
          return false;
        } else {
          const channel = channel.getChannel(arg0);
          let tmp10 = arg0 === channelId.getChannelId(arg1) && null != channel && channel.getGuildId() === guild.id;
          if (tmp10) {
            tmp10 = callback(channel.type);
          }
          return tmp10;
        }
      }
    }
    return false;
  });
};
