// Module ID: 11556
// Function ID: 89931
// Name: getIconForPerk
// Dependencies: [4023, 6519, 6575, 9551, 11557, 11559, 6522, 8224, 9861, 9351, 4655, 6572, 2]
// Exports: getIconForPerk

// Module 11556 (getIconForPerk)
const result = require("SoundboardIcon").fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (require(4023) /* _createForOfIteratorHelperLoose */.PerkIcons.EMOJI === perkIcon) {
    return require(6519) /* ReactionIcon */.ReactionIcon;
  } else if (require(4023) /* _createForOfIteratorHelperLoose */.PerkIcons.SOUNDBOARD === perkIcon) {
    return require(6575) /* SoundboardIcon */.SoundboardIcon;
  } else if (require(4023) /* _createForOfIteratorHelperLoose */.PerkIcons.ANIMATED === perkIcon) {
    return require(9551) /* GifIcon */.GifIcon;
  } else if (require(4023) /* _createForOfIteratorHelperLoose */.PerkIcons.AUDIO === perkIcon) {
    return require(11557) /* HeadphonesIcon */.HeadphonesIcon;
  } else if (require(4023) /* _createForOfIteratorHelperLoose */.PerkIcons.STREAM === perkIcon) {
    return require(11559) /* ScreenArrowIcon */.ScreenArrowIcon;
  } else if (require(4023) /* _createForOfIteratorHelperLoose */.PerkIcons.UPLOAD === perkIcon) {
    return require(6522) /* UploadIcon */.UploadIcon;
  } else if (require(4023) /* _createForOfIteratorHelperLoose */.PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return require(8224) /* ShieldUserIcon */.ShieldUserIcon;
  } else if (require(4023) /* _createForOfIteratorHelperLoose */.PerkIcons.CUSTOMIZATION === perkIcon) {
    return require(9861) /* ImagesIcon */.ImagesIcon;
  } else if (require(4023) /* _createForOfIteratorHelperLoose */.PerkIcons.VANITY === perkIcon) {
    return require(9351) /* StarIcon */.StarIcon;
  } else if (require(4023) /* _createForOfIteratorHelperLoose */.PerkIcons.STAGE_VIDEO === perkIcon) {
    return require(4655) /* StageIcon */.StageIcon;
  } else if (require(4023) /* _createForOfIteratorHelperLoose */.PerkIcons.STICKER === perkIcon) {
    return require(6572) /* StickerIcon */.StickerIcon;
  } else {
    return require(6519) /* ReactionIcon */.ReactionIcon;
  }
};
