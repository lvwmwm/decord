// Module ID: 19326
// Function ID: 19327
// Name: getIconForChannel
// Dependencies: [1072, 8091, 7432, 8017, 8078, 8086, 8085, 2]
// Exports: getIconForChannel

// Module 19326 (getIconForChannel)
import Constants from "Constants" /* 1072 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 7432 */;
import StageIcon from "StageIcon" /* 8017 */;
import TextIcon from "TextIcon" /* 8078 */;
import ImageIcon from "ImageIcon" /* 8085 */;
import ForumIcon from "ForumIcon" /* 8086 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 8091 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/icymi/native/util/getIconForChannel.tsx");

export function getIconForChannel(stateFromStores) {
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
}
