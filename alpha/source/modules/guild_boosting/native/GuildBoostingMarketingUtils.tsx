// Module ID: 12005
// Function ID: 12006
// Name: GuildBoostingMarketingUtils
// Dependencies: [4724, 8211, 12006, 9831, 12008, 12010, 8666, 9022, 11181, 9687, 5404, 9562, 2]
// Exports: getIconForPerk

// Module 12005 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(8211).ReactionIcon;
  } else if (tmp(4724).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12006).SoundboardIcon;
  } else if (tmp(4724).PerkIcons.ANIMATED === perkIcon) {
    return tmp(9831).GifIcon;
  } else if (tmp(4724).PerkIcons.AUDIO === perkIcon) {
    return tmp(12008).HeadphonesIcon;
  } else if (tmp(4724).PerkIcons.STREAM === perkIcon) {
    return tmp(12010).ScreenArrowIcon;
  } else if (tmp(4724).PerkIcons.UPLOAD === perkIcon) {
    return tmp(8666).UploadIcon;
  } else if (tmp(4724).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9022).ShieldUserIcon;
  } else if (tmp(4724).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11181).ImagesIcon;
  } else if (tmp(4724).PerkIcons.VANITY === perkIcon) {
    return tmp(9687).StarIcon;
  } else if (tmp(4724).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5404).StageIcon;
  } else if (tmp(4724).PerkIcons.STICKER === perkIcon) {
    return tmp(9562).StickerIcon;
  } else {
    return tmp(8211).ReactionIcon;
  }
};
