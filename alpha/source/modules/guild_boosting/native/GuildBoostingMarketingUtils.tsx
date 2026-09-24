// Module ID: 12876
// Function ID: 12877
// Name: GuildBoostingMarketingUtils
// Dependencies: [4722, 9117, 12877, 10727, 12879, 12881, 9568, 9924, 12038, 10583, 5403, 10460, 2]
// Exports: getIconForPerk

// Module 12876 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4722 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(9117).ReactionIcon;
  } else if (tmp(4722).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12877).SoundboardIcon;
  } else if (tmp(4722).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10727).GifIcon;
  } else if (tmp(4722).PerkIcons.AUDIO === perkIcon) {
    return tmp(12879).HeadphonesIcon;
  } else if (tmp(4722).PerkIcons.STREAM === perkIcon) {
    return tmp(12881).ScreenArrowIcon;
  } else if (tmp(4722).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9568).UploadIcon;
  } else if (tmp(4722).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9924).ShieldUserIcon;
  } else if (tmp(4722).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(12038).ImagesIcon;
  } else if (tmp(4722).PerkIcons.VANITY === perkIcon) {
    return tmp(10583).StarIcon;
  } else if (tmp(4722).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5403).StageIcon;
  } else if (tmp(4722).PerkIcons.STICKER === perkIcon) {
    return tmp(10460).StickerIcon;
  } else {
    return tmp(9117).ReactionIcon;
  }
};
