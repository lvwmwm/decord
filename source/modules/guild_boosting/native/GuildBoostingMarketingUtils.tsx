// Module ID: 11745
// Function ID: 11746
// Name: getIconForPerk
// Dependencies: [4270, 7978, 8032, 10250, 11746, 11748, 7981, 8896, 11749, 9447, 6930, 8029, 2]
// Exports: getIconForPerk

// Module 11745 (getIconForPerk)
import set from "set" /* 2 */;
import getGuildTierFromGuild from "getGuildTierFromGuild" /* 4270 */;

const result = set.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(7978).ReactionIcon;
  } else if (tmp(4270).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(8032).SoundboardIcon;
  } else if (tmp(4270).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10250).GifIcon;
  } else if (tmp(4270).PerkIcons.AUDIO === perkIcon) {
    return tmp(11746).HeadphonesIcon;
  } else if (tmp(4270).PerkIcons.STREAM === perkIcon) {
    return tmp(11748).ScreenArrowIcon;
  } else if (tmp(4270).PerkIcons.UPLOAD === perkIcon) {
    return tmp(7981).UploadIcon;
  } else if (tmp(4270).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(8896).ShieldUserIcon;
  } else if (tmp(4270).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11749).ImagesIcon;
  } else if (tmp(4270).PerkIcons.VANITY === perkIcon) {
    return tmp(9447).StarIcon;
  } else if (tmp(4270).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(6930).StageIcon;
  } else if (tmp(4270).PerkIcons.STICKER === perkIcon) {
    return tmp(8029).StickerIcon;
  } else {
    return tmp(7978).ReactionIcon;
  }
};
