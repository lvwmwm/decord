// Module ID: 9773
// Function ID: 76002
// Name: getProfileChangesForUpdateRequest
// Dependencies: []
// Exports: getAccountUpdateForUpdateRequest, getGuildMemberChangesForUpdateRequest, getPrimaryGuildChangesForUpdateRequest, getProfileChangesForUpdateRequest

// Module 9773 (getProfileChangesForUpdateRequest)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/user_profile/ProfileUpdateRequestUtils.tsx");

export const getProfileChangesForUpdateRequest = function getProfileChangesForUpdateRequest(pendingBanner, id) {
  const obj = {};
  if (undefined !== pendingBanner.pendingBanner) {
    obj.banner = pendingBanner.pendingBanner;
    if (null !== pendingBanner.pendingBanner) {
      const pendingBannerOriginalMd5 = pendingBanner.pendingBannerOriginalMd5;
      let tmp2 = null;
      if (null != pendingBannerOriginalMd5) {
        tmp2 = pendingBannerOriginalMd5;
      }
      obj.bannerOriginalMd5 = tmp2;
    }
  }
  if (null != pendingBanner.pendingBio) {
    obj.bio = pendingBanner.pendingBio;
  }
  if (null != pendingBanner.pendingPronouns) {
    obj.pronouns = pendingBanner.pendingPronouns;
  }
  if (undefined !== pendingBanner.pendingAccentColor) {
    obj.accent_color = pendingBanner.pendingAccentColor;
  }
  if (undefined !== pendingBanner.pendingThemeColors) {
    obj.theme_colors = pendingBanner.pendingThemeColors;
  }
  const tmp3 = function getCollectiblesChangesForUpdateRequest(pendingBanner, id) {
    let pendingProfileEffect;
    let pendingProfileFrame;
    ({ pendingProfileEffect, pendingProfileFrame } = pendingBanner);
    if (undefined === pendingProfileEffect) {
      if (undefined === pendingProfileFrame) {
        return {};
      }
    }
    const tmp = callback2(closure_2[1])(id);
    let collectibles;
    if (null != tmp) {
      collectibles = tmp.collectibles;
    }
    if (null == collectibles) {
      collectibles = [];
    }
    const items = [...collectibles];
    if (undefined !== pendingProfileEffect) {
      const found = items.filter((type) => type.type !== callback(closure_2[2]).CollectiblesItemType.PROFILE_EFFECT);
      let arr3 = found;
      if (null !== pendingProfileEffect) {
        let obj = { skuId: pendingProfileEffect.skuId, type: callback(closure_2[2]).CollectiblesItemType.PROFILE_EFFECT };
        found.push(obj);
        arr3 = found;
      }
    }
    let arr5 = arr3;
    if (undefined !== pendingProfileFrame) {
      const found1 = arr3.filter((type) => type.type !== callback(closure_2[2]).CollectiblesItemType.PROFILE_FRAME);
      arr5 = found1;
      if (null !== pendingProfileFrame) {
        found1.push(pendingProfileFrame);
        arr5 = found1;
      }
    }
    obj = { collectibles_sku_ids: arr5.map((skuId) => skuId.skuId) };
    return obj;
  }(pendingBanner, id);
  if (undefined !== tmp3.collectibles_sku_ids) {
    obj.collectibles_sku_ids = tmp3.collectibles_sku_ids;
  }
  return obj;
};
export const getAccountUpdateForUpdateRequest = function getAccountUpdateForUpdateRequest(pendingGlobalName) {
  const obj = {};
  if (undefined !== pendingGlobalName.pendingGlobalName) {
    obj.globalName = pendingGlobalName.pendingGlobalName;
  }
  if (undefined !== pendingGlobalName.pendingNameplate) {
    obj.nameplate = pendingGlobalName.pendingNameplate;
  }
  if (undefined !== pendingGlobalName.pendingAvatar) {
    const pendingAvatar = pendingGlobalName.pendingAvatar;
    if (null === pendingAvatar) {
      obj.avatar = null;
    } else if (pendingAvatar.assetOrigin === require(dependencyMap[0]).AssetOriginTypes.ARCHIVED_ASSET) {
      obj.avatarId = pendingAvatar.originalAsset.id;
    } else {
      ({ imageUri: obj.avatar, description: obj.avatarDescription, originalMd5: obj.avatarOriginalMd5 } = pendingAvatar);
    }
  }
  if (undefined !== pendingGlobalName.pendingAvatarDecoration) {
    obj.avatarDecoration = pendingGlobalName.pendingAvatarDecoration;
  }
  if (undefined !== pendingGlobalName.pendingDisplayNameStyles) {
    obj.displayNameStyles = pendingGlobalName.pendingDisplayNameStyles;
  }
  return obj;
};
export const getGuildMemberChangesForUpdateRequest = function getGuildMemberChangesForUpdateRequest(pendingAvatar) {
  const obj = {};
  if (undefined !== pendingAvatar.pendingAvatar) {
    pendingAvatar = pendingAvatar.pendingAvatar;
    if (null === pendingAvatar) {
      obj.avatar = null;
    } else if (pendingAvatar.assetOrigin === require(dependencyMap[0]).AssetOriginTypes.ARCHIVED_ASSET) {
      obj.avatarId = pendingAvatar.originalAsset.id;
    } else {
      ({ imageUri: obj.avatar, description: obj.avatarDescription, originalMd5: obj.avatarOriginalMd5 } = pendingAvatar);
    }
  }
  if (undefined !== pendingAvatar.pendingNickname) {
    const pendingNickname = pendingAvatar.pendingNickname;
    let str = "";
    if (null != pendingNickname) {
      str = pendingNickname;
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
export const getPrimaryGuildChangesForUpdateRequest = function getPrimaryGuildChangesForUpdateRequest(pendingPrimaryGuildId) {
  const obj = {};
  if (undefined !== pendingPrimaryGuildId.pendingPrimaryGuildId) {
    obj.primaryGuildId = pendingPrimaryGuildId.pendingPrimaryGuildId;
  }
  return obj;
};
