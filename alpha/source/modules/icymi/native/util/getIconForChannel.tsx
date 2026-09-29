// Module ID: 16309
// Function ID: 16310
// Name: getIconForChannel
// Dependencies: [1074, 5574, 5581, 5577, 5560, 5568, 5567, 2]
// Exports: getIconForChannel

// Module 16309 (getIconForChannel)
import Constants from "Constants" /* 1074 */;
import TextIcon from "TextIcon" /* 5560 */;
import ImageIcon from "ImageIcon" /* 5567 */;
import ForumIcon from "ForumIcon" /* 5568 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5574 */;
import StageIcon from "StageIcon" /* 5577 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5581 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(stateFromStores) {
  const type = stateFromStores.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return AnnouncementsIcon.AnnouncementsIcon;
  } else if (tmp.GUILD_VOICE === type) {
    return VoiceNormalIcon.VoiceNormalIcon;
  } else if (tmp.GUILD_STAGE_VOICE === type) {
    return StageIcon.StageIcon;
  } else if (tmp.GUILD_TEXT === type) {
    return TextIcon.TextIcon;
  } else if (tmp.GUILD_FORUM === type) {
    return ForumIcon.ForumIcon;
  } else if (tmp.GUILD_MEDIA === type) {
    return ImageIcon.ImageIcon;
  } else {
    return TextIcon.TextIcon;
  }
};
