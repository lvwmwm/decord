// Module ID: 11589
// Function ID: 90209
// Name: getIconForPerk
// Dependencies: [4022, 7437, 7491, 9630, 11590, 11592, 7440, 8466, 9933, 9431, 4654, 7488, 2]
// Exports: getIconForPerk

// Module 11589 (getIconForPerk)
const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.EMOJI === perkIcon) {
    return require(7437) /* ReactionIcon */.ReactionIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.SOUNDBOARD === perkIcon) {
    return require(7491) /* SoundboardIcon */.SoundboardIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.ANIMATED === perkIcon) {
    return require(9630) /* GifIcon */.GifIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.AUDIO === perkIcon) {
    return require(11590) /* HeadphonesIcon */.HeadphonesIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.STREAM === perkIcon) {
    return require(11592) /* ScreenArrowIcon */.ScreenArrowIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.UPLOAD === perkIcon) {
    return require(7440) /* UploadIcon */.UploadIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return require(8466) /* ShieldUserIcon */.ShieldUserIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.CUSTOMIZATION === perkIcon) {
    return require(9933) /* ImagesIcon */.ImagesIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.VANITY === perkIcon) {
    return require(9431) /* StarIcon */.StarIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.STAGE_VIDEO === perkIcon) {
    return require(4654) /* StageIcon */.StageIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.STICKER === perkIcon) {
    return require(7488) /* StickerIcon */.StickerIcon;
  } else {
    return require(7437) /* ReactionIcon */.ReactionIcon;
  }
};
