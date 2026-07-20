// Module ID: 15088
// Function ID: 113774
// Name: getIconForChannel
// Dependencies: []
// Exports: getIconForChannel

// Module 15088 (getIconForChannel)
const ChannelTypes = require(dependencyMap[0]).ChannelTypes;
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(stateFromStores) {
  const type = stateFromStores.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return require(dependencyMap[1]).AnnouncementsIcon;
  } else if (ChannelTypes.GUILD_VOICE === type) {
    return require(dependencyMap[2]).VoiceNormalIcon;
  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
    return require(dependencyMap[3]).StageIcon;
  } else if (ChannelTypes.GUILD_TEXT === type) {
    return require(dependencyMap[4]).TextIcon;
  } else if (ChannelTypes.GUILD_FORUM === type) {
    return require(dependencyMap[5]).ForumIcon;
  } else if (ChannelTypes.GUILD_MEDIA === type) {
    return require(dependencyMap[6]).ImageIcon;
  } else {
    return require(dependencyMap[4]).TextIcon;
  }
};
