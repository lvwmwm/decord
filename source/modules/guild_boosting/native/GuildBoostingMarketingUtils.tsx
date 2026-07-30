// Module ID: 11615
// Function ID: 11616
// Name: getIconForPerk
// Dependencies: [4081, 6573, 6629, 9610, 11616, 11618, 6576, 8283, 9920, 9415, 4711, 6626, 2]
// Exports: getIconForPerk

// Module 11615 (getIconForPerk)
const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (require(4081) /* getGuildTierFromGuild */.PerkIcons.EMOJI === perkIcon) {
    return tmp(6573).ReactionIcon;
  } else if (tmp(4081).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(6629).SoundboardIcon;
  } else if (tmp(4081).PerkIcons.ANIMATED === perkIcon) {
    return tmp(9610).GifIcon;
  } else if (tmp(4081).PerkIcons.AUDIO === perkIcon) {
    return tmp(11616).HeadphonesIcon;
  } else if (tmp(4081).PerkIcons.STREAM === perkIcon) {
    return tmp(11618).ScreenArrowIcon;
  } else if (tmp(4081).PerkIcons.UPLOAD === perkIcon) {
    return tmp(6576).UploadIcon;
  } else if (tmp(4081).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(8283).ShieldUserIcon;
  } else if (tmp(4081).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(9920).ImagesIcon;
  } else if (tmp(4081).PerkIcons.VANITY === perkIcon) {
    return tmp(9415).StarIcon;
  } else if (tmp(4081).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(4711).StageIcon;
  } else if (tmp(4081).PerkIcons.STICKER === perkIcon) {
    return tmp(6626).StickerIcon;
  } else {
    return tmp(6573).ReactionIcon;
  }
};
