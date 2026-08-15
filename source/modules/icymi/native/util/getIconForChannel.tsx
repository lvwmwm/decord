// Module ID: 15750
// Function ID: 15751
// Name: getIconForChannel
// Dependencies: [676, 6889, 6896, 6892, 6876, 6883, 6882, 2]
// Exports: getIconForChannel

// Module 15750 (getIconForChannel)
import { ChannelTypes } from "ME";

const result = require("VoiceNormalIcon").fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(type) {
  type = type.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return require(6889) /* AnnouncementsIcon */.AnnouncementsIcon;
  } else if (tmp.GUILD_VOICE === type) {
    return require(6896) /* VoiceNormalIcon */.VoiceNormalIcon;
  } else if (tmp.GUILD_STAGE_VOICE === type) {
    return require(6892) /* StageIcon */.StageIcon;
  } else if (tmp.GUILD_TEXT === type) {
    return require(6876) /* TextIcon */.TextIcon;
  } else if (tmp.GUILD_FORUM === type) {
    return require(6883) /* ForumIcon */.ForumIcon;
  } else if (tmp.GUILD_MEDIA === type) {
    return require(6882) /* ImageIcon */.ImageIcon;
  } else {
    return require(6876) /* TextIcon */.TextIcon;
  }
};
