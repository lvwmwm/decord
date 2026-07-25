// Module ID: 15278
// Function ID: 116494
// Name: getIconForChannel
// Dependencies: [653, 4652, 4659, 4655, 4639, 4646, 4645, 2]
// Exports: getIconForChannel

// Module 15278 (getIconForChannel)
import { ChannelTypes } from "ME";

const result = require("VoiceNormalIcon").fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(stateFromStores) {
  const type = stateFromStores.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return require(4652) /* AnnouncementsIcon */.AnnouncementsIcon;
  } else if (ChannelTypes.GUILD_VOICE === type) {
    return require(4659) /* VoiceNormalIcon */.VoiceNormalIcon;
  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
    return require(4655) /* StageIcon */.StageIcon;
  } else if (ChannelTypes.GUILD_TEXT === type) {
    return require(4639) /* TextIcon */.TextIcon;
  } else if (ChannelTypes.GUILD_FORUM === type) {
    return require(4646) /* ForumIcon */.ForumIcon;
  } else if (ChannelTypes.GUILD_MEDIA === type) {
    return require(4645) /* ImageIcon */.ImageIcon;
  } else {
    return require(4639) /* TextIcon */.TextIcon;
  }
};
