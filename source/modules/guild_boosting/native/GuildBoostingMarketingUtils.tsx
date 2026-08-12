// Module ID: 11948
// Function ID: 11949
// Name: getIconForPerk
// Dependencies: [4236, 7696, 7750, 9997, 11949, 11951, 7699, 9051, 10308, 8789, 4865, 7747, 2]
// Exports: getIconForPerk

// Module 11948 (getIconForPerk)
const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (require(4236) /* getGuildTierFromGuild */.PerkIcons.EMOJI === perkIcon) {
    return tmp(7696).ReactionIcon;
  } else if (tmp(4236).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(7750).SoundboardIcon;
  } else if (tmp(4236).PerkIcons.ANIMATED === perkIcon) {
    return tmp(9997).GifIcon;
  } else if (tmp(4236).PerkIcons.AUDIO === perkIcon) {
    return tmp(11949).HeadphonesIcon;
  } else if (tmp(4236).PerkIcons.STREAM === perkIcon) {
    return tmp(11951).ScreenArrowIcon;
  } else if (tmp(4236).PerkIcons.UPLOAD === perkIcon) {
    return tmp(7699).UploadIcon;
  } else if (tmp(4236).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9051).ShieldUserIcon;
  } else if (tmp(4236).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(10308).ImagesIcon;
  } else if (tmp(4236).PerkIcons.VANITY === perkIcon) {
    return tmp(8789).StarIcon;
  } else if (tmp(4236).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4865).StageIcon;
  } else if (tmp(4236).PerkIcons.STICKER === perkIcon) {
    return tmp(7747).StickerIcon;
  } else {
    return tmp(7696).ReactionIcon;
  }
};
