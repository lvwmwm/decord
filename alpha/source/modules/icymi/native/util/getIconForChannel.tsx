// Module ID: 16869
// Function ID: 16870
// Name: getIconForChannel
// Dependencies: [1085, 8205, 8212, 8208, 8191, 8199, 8198, 2]
// Exports: getIconForChannel

// Module 16869 (getIconForChannel)
import Constants from "Constants" /* 1085 */;
import TextIcon from "TextIcon" /* 8191 */;
import ImageIcon from "ImageIcon" /* 8198 */;
import ForumIcon from "ForumIcon" /* 8199 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 8205 */;
import StageIcon from "StageIcon" /* 8208 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8212 */;
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
