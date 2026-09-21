// Module ID: 12690
// Function ID: 12691
// Name: GuildBoostingMarketingUtils
// Dependencies: [4652, 9035, 12691, 10673, 12693, 12695, 9483, 9818, 11824, 10515, 5317, 12696, 2]
// Exports: getIconForPerk

// Module 12690 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4652 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(9035).ReactionIcon;
  } else if (tmp(4652).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12691).SoundboardIcon;
  } else if (tmp(4652).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10673).GifIcon;
  } else if (tmp(4652).PerkIcons.AUDIO === perkIcon) {
    return tmp(12693).HeadphonesIcon;
  } else if (tmp(4652).PerkIcons.STREAM === perkIcon) {
    return tmp(12695).ScreenArrowIcon;
  } else if (tmp(4652).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9483).UploadIcon;
  } else if (tmp(4652).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9818).ShieldUserIcon;
  } else if (tmp(4652).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11824).ImagesIcon;
  } else if (tmp(4652).PerkIcons.VANITY === perkIcon) {
    return tmp(10515).StarIcon;
  } else if (tmp(4652).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5317).StageIcon;
  } else if (tmp(4652).PerkIcons.STICKER === perkIcon) {
    return tmp(12696).StickerIcon;
  } else {
    return tmp(9035).ReactionIcon;
  }
};
