// Module ID: 16140
// Function ID: 16141
// Name: getIconForChannel
// Dependencies: [1086, 5409, 5416, 5412, 5395, 5403, 5402, 2]
// Exports: getIconForChannel

// Module 16140 (getIconForChannel)
import Constants from "Constants" /* 1086 */;
import TextIcon from "TextIcon" /* 5395 */;
import ImageIcon from "ImageIcon" /* 5402 */;
import ForumIcon from "ForumIcon" /* 5403 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5409 */;
import StageIcon from "StageIcon" /* 5412 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5416 */;
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
