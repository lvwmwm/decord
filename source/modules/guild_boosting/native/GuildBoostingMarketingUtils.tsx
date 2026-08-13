// Module ID: 11951
// Function ID: 11952
// Name: getIconForPerk
// Dependencies: [4234, 7700, 7754, 9995, 11952, 11954, 7703, 9055, 11146, 8793, 4866, 7751, 2]
// Exports: getIconForPerk

// Module 11951 (getIconForPerk)
const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (require(4234) /* getGuildTierFromGuild */.PerkIcons.EMOJI === perkIcon) {
    return tmp(7700).ReactionIcon;
  } else if (tmp(4234).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(7754).SoundboardIcon;
  } else if (tmp(4234).PerkIcons.ANIMATED === perkIcon) {
    return tmp(9995).GifIcon;
  } else if (tmp(4234).PerkIcons.AUDIO === perkIcon) {
    return tmp(11952).HeadphonesIcon;
  } else if (tmp(4234).PerkIcons.STREAM === perkIcon) {
    return tmp(11954).ScreenArrowIcon;
  } else if (tmp(4234).PerkIcons.UPLOAD === perkIcon) {
    return tmp(7703).UploadIcon;
  } else if (tmp(4234).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9055).ShieldUserIcon;
  } else if (tmp(4234).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11146).ImagesIcon;
  } else if (tmp(4234).PerkIcons.VANITY === perkIcon) {
    return tmp(8793).StarIcon;
  } else if (tmp(4234).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4866).StageIcon;
  } else if (tmp(4234).PerkIcons.STICKER === perkIcon) {
    return tmp(7751).StickerIcon;
  } else {
    return tmp(7700).ReactionIcon;
  }
};
