// Module ID: 15268
// Function ID: 116366
// Name: getIconForChannel
// Dependencies: [653, 4651, 4658, 4654, 4638, 4645, 4644, 2]
// Exports: getIconForChannel

// Module 15268 (getIconForChannel)
import { ChannelTypes } from "ME";

const result = require("VoiceNormalIcon").fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(stateFromStores) {
  const type = stateFromStores.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return require(4651) /* AnnouncementsIcon */.AnnouncementsIcon;
  } else if (ChannelTypes.GUILD_VOICE === type) {
    return require(4658) /* VoiceNormalIcon */.VoiceNormalIcon;
  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
    return require(4654) /* StageIcon */.StageIcon;
  } else if (ChannelTypes.GUILD_TEXT === type) {
    return require(4638) /* TextIcon */.TextIcon;
  } else if (ChannelTypes.GUILD_FORUM === type) {
    return require(4645) /* ForumIcon */.ForumIcon;
  } else if (ChannelTypes.GUILD_MEDIA === type) {
    return require(4644) /* ImageIcon */.ImageIcon;
  } else {
    return require(4638) /* TextIcon */.TextIcon;
  }
};
