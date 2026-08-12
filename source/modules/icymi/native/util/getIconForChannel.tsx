// Module ID: 15682
// Function ID: 15683
// Name: getIconForChannel
// Dependencies: [676, 4862, 4869, 4865, 4849, 4856, 4855, 2]
// Exports: getIconForChannel

// Module 15682 (getIconForChannel)
import { ChannelTypes } from "ME";

const result = require("VoiceNormalIcon").fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(type) {
  type = type.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return require(4862) /* AnnouncementsIcon */.AnnouncementsIcon;
  } else if (tmp.GUILD_VOICE === type) {
    return require(4869) /* VoiceNormalIcon */.VoiceNormalIcon;
  } else if (tmp.GUILD_STAGE_VOICE === type) {
    return require(4865) /* StageIcon */.StageIcon;
  } else if (tmp.GUILD_TEXT === type) {
    return require(4849) /* TextIcon */.TextIcon;
  } else if (tmp.GUILD_FORUM === type) {
    return require(4856) /* ForumIcon */.ForumIcon;
  } else if (tmp.GUILD_MEDIA === type) {
    return require(4855) /* ImageIcon */.ImageIcon;
  } else {
    return require(4849) /* TextIcon */.TextIcon;
  }
};
