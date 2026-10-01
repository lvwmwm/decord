// Module ID: 16358
// Function ID: 16359
// Name: getIconForChannel
// Dependencies: [1074, 5592, 5599, 5595, 5578, 5586, 5585, 2]
// Exports: getIconForChannel

// Module 16358 (getIconForChannel)
import Constants from "Constants" /* 1074 */;
import TextIcon from "TextIcon" /* 5578 */;
import ImageIcon from "ImageIcon" /* 5585 */;
import ForumIcon from "ForumIcon" /* 5586 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5592 */;
import StageIcon from "StageIcon" /* 5595 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5599 */;
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
