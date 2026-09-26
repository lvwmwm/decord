// Module ID: 16137
// Function ID: 16138
// Name: getIconForChannel
// Dependencies: [1074, 5408, 5415, 5411, 5394, 5402, 5401, 2]
// Exports: getIconForChannel

// Module 16137 (getIconForChannel)
import Constants from "Constants" /* 1074 */;
import TextIcon from "TextIcon" /* 5394 */;
import ImageIcon from "ImageIcon" /* 5401 */;
import ForumIcon from "ForumIcon" /* 5402 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5408 */;
import StageIcon from "StageIcon" /* 5411 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5415 */;
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
