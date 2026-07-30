// Module ID: 15358
// Function ID: 15359
// Name: getIconForChannel
// Dependencies: [676, 4708, 4715, 4711, 4695, 4702, 4701, 2]
// Exports: getIconForChannel

// Module 15358 (getIconForChannel)
import { ChannelTypes } from "ME";

const result = require("VoiceNormalIcon").fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(type) {
  type = type.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return require(4708) /* AnnouncementsIcon */.AnnouncementsIcon;
  } else if (tmp.GUILD_VOICE === type) {
    return require(4715) /* VoiceNormalIcon */.VoiceNormalIcon;
  } else if (tmp.GUILD_STAGE_VOICE === type) {
    return require(4711) /* StageIcon */.StageIcon;
  } else if (tmp.GUILD_TEXT === type) {
    return require(4695) /* TextIcon */.TextIcon;
  } else if (tmp.GUILD_FORUM === type) {
    return require(4702) /* ForumIcon */.ForumIcon;
  } else if (tmp.GUILD_MEDIA === type) {
    return require(4701) /* ImageIcon */.ImageIcon;
  } else {
    return require(4695) /* TextIcon */.TextIcon;
  }
};
