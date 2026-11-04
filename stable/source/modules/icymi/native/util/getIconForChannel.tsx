// Module ID: 17984
// Function ID: 17985
// Name: getIconForChannel
// Dependencies: [1087, 8597, 8604, 8600, 8583, 8591, 8590, 2]
// Exports: getIconForChannel

// Module 17984 (getIconForChannel)
import Constants from "Constants" /* 1087 */;
import TextIcon from "TextIcon" /* 8583 */;
import ImageIcon from "ImageIcon" /* 8590 */;
import ForumIcon from "ForumIcon" /* 8591 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 8597 */;
import StageIcon from "StageIcon" /* 8600 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8604 */;
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
