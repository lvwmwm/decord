// Module ID: 12867
// Function ID: 12868
// Name: GuildBoostingMarketingUtils
// Dependencies: [4720, 9113, 12868, 10722, 12870, 12872, 9564, 9919, 12031, 10578, 5401, 10455, 2]
// Exports: getIconForPerk

// Module 12867 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4720 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(9113).ReactionIcon;
  } else if (tmp(4720).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12868).SoundboardIcon;
  } else if (tmp(4720).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10722).GifIcon;
  } else if (tmp(4720).PerkIcons.AUDIO === perkIcon) {
    return tmp(12870).HeadphonesIcon;
  } else if (tmp(4720).PerkIcons.STREAM === perkIcon) {
    return tmp(12872).ScreenArrowIcon;
  } else if (tmp(4720).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9564).UploadIcon;
  } else if (tmp(4720).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9919).ShieldUserIcon;
  } else if (tmp(4720).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(12031).ImagesIcon;
  } else if (tmp(4720).PerkIcons.VANITY === perkIcon) {
    return tmp(10578).StarIcon;
  } else if (tmp(4720).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5401).StageIcon;
  } else if (tmp(4720).PerkIcons.STICKER === perkIcon) {
    return tmp(10455).StickerIcon;
  } else {
    return tmp(9113).ReactionIcon;
  }
};
