// Module ID: 12023
// Function ID: 12024
// Name: GuildBoostingMarketingUtils
// Dependencies: [4728, 8219, 12024, 9842, 12026, 12028, 8674, 9033, 11195, 9698, 5411, 9573, 2]
// Exports: getIconForPerk

// Module 12023 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4728 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(8219).ReactionIcon;
  } else if (tmp(4728).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12024).SoundboardIcon;
  } else if (tmp(4728).PerkIcons.ANIMATED === perkIcon) {
    return tmp(9842).GifIcon;
  } else if (tmp(4728).PerkIcons.AUDIO === perkIcon) {
    return tmp(12026).HeadphonesIcon;
  } else if (tmp(4728).PerkIcons.STREAM === perkIcon) {
    return tmp(12028).ScreenArrowIcon;
  } else if (tmp(4728).PerkIcons.UPLOAD === perkIcon) {
    return tmp(8674).UploadIcon;
  } else if (tmp(4728).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9033).ShieldUserIcon;
  } else if (tmp(4728).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11195).ImagesIcon;
  } else if (tmp(4728).PerkIcons.VANITY === perkIcon) {
    return tmp(9698).StarIcon;
  } else if (tmp(4728).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5411).StageIcon;
  } else if (tmp(4728).PerkIcons.STICKER === perkIcon) {
    return tmp(9573).StickerIcon;
  } else {
    return tmp(8219).ReactionIcon;
  }
};
