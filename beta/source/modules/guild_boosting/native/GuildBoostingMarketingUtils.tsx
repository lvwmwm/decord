// Module ID: 12810
// Function ID: 12811
// Name: GuildBoostingMarketingUtils
// Dependencies: [4681, 9069, 12811, 10676, 12813, 12815, 9517, 9872, 11981, 10532, 5347, 10409, 2]
// Exports: getIconForPerk

// Module 12810 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4681 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(9069).ReactionIcon;
  } else if (tmp(4681).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12811).SoundboardIcon;
  } else if (tmp(4681).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10676).GifIcon;
  } else if (tmp(4681).PerkIcons.AUDIO === perkIcon) {
    return tmp(12813).HeadphonesIcon;
  } else if (tmp(4681).PerkIcons.STREAM === perkIcon) {
    return tmp(12815).ScreenArrowIcon;
  } else if (tmp(4681).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9517).UploadIcon;
  } else if (tmp(4681).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9872).ShieldUserIcon;
  } else if (tmp(4681).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11981).ImagesIcon;
  } else if (tmp(4681).PerkIcons.VANITY === perkIcon) {
    return tmp(10532).StarIcon;
  } else if (tmp(4681).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5347).StageIcon;
  } else if (tmp(4681).PerkIcons.STICKER === perkIcon) {
    return tmp(10409).StickerIcon;
  } else {
    return tmp(9069).ReactionIcon;
  }
};
