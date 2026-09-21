// Module ID: 11385
// Function ID: 11386
// Name: ProfileUpdateRequestUtils
// Dependencies: [7235, 11386, 1977, 2]
// Exports: getAccountUpdateForUpdateRequest, getGuildMemberChangesForUpdateRequest, getPrimaryGuildChangesForUpdateRequest, getProfileChangesForUpdateRequest

// Module 11385 (ProfileUpdateRequestUtils)
import CollectiblesItemType from "CollectiblesItemType" /* 1977 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 7235 */;
import getCurrentUserProfileDefault from "getCurrentUserProfile" /* 11386 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/ProfileUpdateRequestUtils.tsx");

export const getProfileChangesForUpdateRequest = function getProfileChangesForUpdateRequest(c0, id) {
  const obj = {};
  if (undefined !== c0.pendingBanner) {
    const pendingBanner = c0.pendingBanner;
    let imageUri;
    if (pendingBanner != null) {
      imageUri = pendingBanner.imageUri;
    }
    if (imageUri == null) {
      imageUri = null;
    }
    obj.banner = imageUri;
    if (null !== c0.pendingBanner) {
      let originalMd5 = c0.pendingBanner.originalMd5;
      if (originalMd5 == null) {
        originalMd5 = null;
      }
      obj.bannerOriginalMd5 = originalMd5;
    }
  }
  if (null != c0.pendingBio) {
    obj.bio = c0.pendingBio;
  }
  if (null != c0.pendingPronouns) {
    obj.pronouns = c0.pendingPronouns;
  }
  if (undefined !== c0.pendingAccentColor) {
    obj.accent_color = c0.pendingAccentColor;
  }
  if (undefined !== c0.pendingThemeColors) {
    obj.theme_colors = c0.pendingThemeColors;
  }
  ({ pendingProfileEffect, pendingProfileFrame } = c0);
  if (undefined === pendingProfileEffect) {
    if (undefined === pendingProfileFrame) {
      let obj2 = {};
    }
    if (undefined !== obj2.collectibles_sku_ids) {
      obj.collectibles_sku_ids = obj2.collectibles_sku_ids;
    }
    return obj;
  }
  const tmp5 = getCurrentUserProfileDefault(id);
  let collectibles;
  if (tmp5 != null) {
    collectibles = tmp5.collectibles;
  }
  if (collectibles == null) {
    collectibles = [];
  }
  const items = [...collectibles];
  if (undefined !== pendingProfileEffect) {
    const found = items.filter((type) => type.type !== CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT);
    let arr3 = found;
    if (null !== pendingProfileEffect) {
      const obj3 = { skuId: pendingProfileEffect.skuId, type: CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT };
      found.push(obj3);
      arr3 = found;
    }
  }
  let arr5 = arr3;
  if (undefined !== pendingProfileFrame) {
    const found1 = arr3.filter((type) => type.type !== CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME);
    arr5 = found1;
    if (null !== pendingProfileFrame) {
      found1.push(pendingProfileFrame);
      arr5 = found1;
    }
  }
  obj2 = { collectibles_sku_ids: arr5.map((skuId) => skuId.skuId) };
};
export const getAccountUpdateForUpdateRequest = function getAccountUpdateForUpdateRequest(c0) {
  const obj = {};
  if (undefined !== c0.pendingGlobalName) {
    obj.globalName = c0.pendingGlobalName;
  }
  if (undefined !== c0.pendingNameplate) {
    obj.nameplate = c0.pendingNameplate;
  }
  if (undefined !== c0.pendingAvatar) {
    const pendingAvatar = c0.pendingAvatar;
    if (null === pendingAvatar) {
      obj.avatar = null;
    } else if (pendingAvatar.assetOrigin === ProfilePendingImageTypes.AssetOriginTypes.ARCHIVED_ASSET) {
      obj.avatarId = pendingAvatar.originalAsset.id;
    } else {
      ({ imageUri: obj.avatar, description: obj.avatarDescription, originalMd5: obj.avatarOriginalMd5 } = pendingAvatar);
    }
  }
  if (undefined !== c0.pendingAvatarDecoration) {
    obj.avatarDecoration = c0.pendingAvatarDecoration;
  }
  if (undefined !== c0.pendingDisplayNameStyles) {
    obj.displayNameStyles = c0.pendingDisplayNameStyles;
  }
  if (undefined !== c0.pendingCustomTypingIndicatorStyle) {
    obj.typingIndicatorStyle = c0.pendingCustomTypingIndicatorStyle;
  }
  return obj;
};
export const getGuildMemberChangesForUpdateRequest = function getGuildMemberChangesForUpdateRequest(pendingAvatar) {
  const obj = {};
  if (undefined !== pendingAvatar.pendingAvatar) {
    pendingAvatar = pendingAvatar.pendingAvatar;
    if (null === pendingAvatar) {
      obj.avatar = null;
    } else if (pendingAvatar.assetOrigin === ProfilePendingImageTypes.AssetOriginTypes.ARCHIVED_ASSET) {
      obj.avatarId = pendingAvatar.originalAsset.id;
    } else {
      ({ imageUri: obj.avatar, description: obj.avatarDescription, originalMd5: obj.avatarOriginalMd5 } = pendingAvatar);
    }
  }
  if (undefined !== pendingAvatar.pendingNickname) {
    let str = pendingAvatar.pendingNickname;
    if (str == null) {
      str = "";
    }
    obj.nick = str;
  }
  if (undefined !== pendingAvatar.pendingAvatarDecoration) {
    obj.avatarDecoration = pendingAvatar.pendingAvatarDecoration;
  }
  if (undefined !== pendingAvatar.pendingNameplate) {
    obj.nameplate = pendingAvatar.pendingNameplate;
  }
  if (undefined !== pendingAvatar.pendingDisplayNameStyles) {
    obj.displayNameStyles = pendingAvatar.pendingDisplayNameStyles;
  }
  return obj;
};
export const getPrimaryGuildChangesForUpdateRequest = function getPrimaryGuildChangesForUpdateRequest(c0) {
  const obj = {};
  if (undefined !== c0.pendingPrimaryGuildId) {
    obj.primaryGuildId = c0.pendingPrimaryGuildId;
  }
  return obj;
};
