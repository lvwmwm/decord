// Module ID: 12785
// Function ID: 12786
// Name: GuildBoostingMarketingUtils
// Dependencies: [4650, 9042, 12786, 10646, 12788, 12790, 9491, 9846, 11956, 10499, 5317, 10376, 2]
// Exports: getIconForPerk

// Module 12785 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4650 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(9042).ReactionIcon;
  } else if (tmp(4650).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12786).SoundboardIcon;
  } else if (tmp(4650).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10646).GifIcon;
  } else if (tmp(4650).PerkIcons.AUDIO === perkIcon) {
    return tmp(12788).HeadphonesIcon;
  } else if (tmp(4650).PerkIcons.STREAM === perkIcon) {
    return tmp(12790).ScreenArrowIcon;
  } else if (tmp(4650).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9491).UploadIcon;
  } else if (tmp(4650).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9846).ShieldUserIcon;
  } else if (tmp(4650).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11956).ImagesIcon;
  } else if (tmp(4650).PerkIcons.VANITY === perkIcon) {
    return tmp(10499).StarIcon;
  } else if (tmp(4650).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5317).StageIcon;
  } else if (tmp(4650).PerkIcons.STICKER === perkIcon) {
    return tmp(10376).StickerIcon;
  } else {
    return tmp(9042).ReactionIcon;
  }
};
