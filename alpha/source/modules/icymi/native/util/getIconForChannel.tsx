// Module ID: 17298
// Function ID: 17299
// Name: getIconForChannel
// Dependencies: [1085, 8229, 8236, 8232, 8215, 8223, 8222, 2]
// Exports: getIconForChannel

// Module 17298 (getIconForChannel)
import Constants from "Constants" /* 1085 */;
import TextIcon from "TextIcon" /* 8215 */;
import ImageIcon from "ImageIcon" /* 8222 */;
import ForumIcon from "ForumIcon" /* 8223 */;
import AnnouncementsIcon from "AnnouncementsIcon" /* 8229 */;
import StageIcon from "StageIcon" /* 8232 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8236 */;
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
