// Module ID: 11560
// Function ID: 89968
// Name: getIconForPerk
// Dependencies: [4022, 8007, 11561, 9594, 11563, 11565, 8005, 8422, 9901, 9395, 4654, 10256, 2]
// Exports: getIconForPerk

// Module 11560 (getIconForPerk)
const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.EMOJI === perkIcon) {
    return require(8007) /* ReactionIcon */.ReactionIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.SOUNDBOARD === perkIcon) {
    return require(11561) /* SoundboardIcon */.SoundboardIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.ANIMATED === perkIcon) {
    return require(9594) /* GifIcon */.GifIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.AUDIO === perkIcon) {
    return require(11563) /* HeadphonesIcon */.HeadphonesIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.STREAM === perkIcon) {
    return require(11565) /* ScreenArrowIcon */.ScreenArrowIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.UPLOAD === perkIcon) {
    return require(8005) /* UploadIcon */.UploadIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return require(8422) /* ShieldUserIcon */.ShieldUserIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.CUSTOMIZATION === perkIcon) {
    return require(9901) /* ImagesIcon */.ImagesIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.VANITY === perkIcon) {
    return require(9395) /* StarIcon */.StarIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.STAGE_VIDEO === perkIcon) {
    return require(4654) /* StageIcon */.StageIcon;
  } else if (require(4022) /* _createForOfIteratorHelperLoose */.PerkIcons.STICKER === perkIcon) {
    return require(10256) /* StickerIcon */.StickerIcon;
  } else {
    return require(8007) /* ReactionIcon */.ReactionIcon;
  }
};
