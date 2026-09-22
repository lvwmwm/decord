// Module ID: 16591
// Function ID: 16592
// Name: getIconForChannel
// Dependencies: [1074, 5175, 5182, 5178, 5161, 5169, 5168, 2]
// Exports: getIconForChannel

// Module 16591 (getIconForChannel)
import Constants from "Constants" /* 1074 */;
import TextIcon from "TextIcon" /* 5161 */;
import ImageIcon from "ImageIcon" /* 5168 */;
import ForumIcon from "ForumIcon" /* 5169 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5175 */;
import StageIcon from "StageIcon" /* 5178 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5182 */;
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
