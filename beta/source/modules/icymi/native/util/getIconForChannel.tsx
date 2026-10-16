// Module ID: 16961
// Function ID: 16962
// Name: getIconForChannel
// Dependencies: [1085, 8217, 8224, 8220, 8203, 8211, 8210, 2]
// Exports: getIconForChannel

// Module 16961 (getIconForChannel)
import Constants from "Constants" /* 1085 */;
import TextIcon from "TextIcon" /* 8203 */;
import ImageIcon from "ImageIcon" /* 8210 */;
import ForumIcon from "ForumIcon" /* 8211 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 8217 */;
import StageIcon from "StageIcon" /* 8220 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8224 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export const getIconForChannel = function getIconForChannel(stateFromStores) {
  const type = stateFromStores.type;
  if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return AnnouncementsIcon.AnnouncementsIcon;
  } else if (ChannelTypes.GUILD_VOICE === type) {
    return VoiceNormalIcon.VoiceNormalIcon;
  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
    return StageIcon.StageIcon;
  } else if (ChannelTypes.GUILD_TEXT === type) {
    return TextIcon.TextIcon;
  } else if (ChannelTypes.GUILD_FORUM === type) {
    return ForumIcon.ForumIcon;
  } else if (ChannelTypes.GUILD_MEDIA === type) {
    return ImageIcon.ImageIcon;
  } else {
    return TextIcon.TextIcon;
  }
};
