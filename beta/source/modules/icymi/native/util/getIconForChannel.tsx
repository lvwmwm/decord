// Module ID: 16842
// Function ID: 16843
// Name: getIconForChannel
// Dependencies: [1078, 5314, 5321, 5317, 5300, 5308, 5307, 2]
// Exports: getIconForChannel

// Module 16842 (getIconForChannel)
import Constants from "Constants" /* 1078 */;
import TextIcon from "TextIcon" /* 5300 */;
import ImageIcon from "ImageIcon" /* 5307 */;
import ForumIcon from "ForumIcon" /* 5308 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 5314 */;
import StageIcon from "StageIcon" /* 5317 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5321 */;
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
