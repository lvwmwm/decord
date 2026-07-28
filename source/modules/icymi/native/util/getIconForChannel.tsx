// Module ID: 15331
// Function ID: 116702
// Name: getIconForChannel
// Dependencies: [653, 4686, 4693, 4689, 4673, 4680, 4679, 2]
// Exports: getIconForChannel

// Module 15331 (getIconForChannel)
import { ChannelTypes } from "ME";

const result = require("VoiceNormalIcon").fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(stateFromStores) {
  const type = stateFromStores.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return require(4686) /* AnnouncementsIcon */.AnnouncementsIcon;
  } else if (ChannelTypes.GUILD_VOICE === type) {
    return require(4693) /* VoiceNormalIcon */.VoiceNormalIcon;
  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
    return require(4689) /* StageIcon */.StageIcon;
  } else if (ChannelTypes.GUILD_TEXT === type) {
    return require(4673) /* TextIcon */.TextIcon;
  } else if (ChannelTypes.GUILD_FORUM === type) {
    return require(4680) /* ForumIcon */.ForumIcon;
  } else if (ChannelTypes.GUILD_MEDIA === type) {
    return require(4679) /* ImageIcon */.ImageIcon;
  } else {
    return require(4673) /* TextIcon */.TextIcon;
  }
};
