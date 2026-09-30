// Module ID: 12226
// Function ID: 12227
// Name: GuildBoostingMarketingUtils
// Dependencies: [4758, 8415, 12227, 10043, 12229, 12231, 8873, 9232, 11400, 9899, 5607, 9774, 2]
// Exports: getIconForPerk

// Module 12226 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4758 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(8415).ReactionIcon;
  } else if (tmp(4758).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12227).SoundboardIcon;
  } else if (tmp(4758).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10043).GifIcon;
  } else if (tmp(4758).PerkIcons.AUDIO === perkIcon) {
    return tmp(12229).HeadphonesIcon;
  } else if (tmp(4758).PerkIcons.STREAM === perkIcon) {
    return tmp(12231).ScreenArrowIcon;
  } else if (tmp(4758).PerkIcons.UPLOAD === perkIcon) {
    return tmp(8873).UploadIcon;
  } else if (tmp(4758).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9232).ShieldUserIcon;
  } else if (tmp(4758).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11400).ImagesIcon;
  } else if (tmp(4758).PerkIcons.VANITY === perkIcon) {
    return tmp(9899).StarIcon;
  } else if (tmp(4758).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5607).StageIcon;
  } else if (tmp(4758).PerkIcons.STICKER === perkIcon) {
    return tmp(9774).StickerIcon;
  } else {
    return tmp(8415).ReactionIcon;
  }
};
