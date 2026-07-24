// Module ID: 8626
// Function ID: 68396
// Name: useProfilePrimaryColor
// Dependencies: [57, 4122, 1392, 7903, 6784, 2]
// Exports: getProfilePrimaryColor, useProfilePrimaryColor

// Module 8626 (useProfilePrimaryColor)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("getAvatarURL").fileFinishedImporting("modules/guild_profile/native/GuildProfileUtils.tsx");

export const useProfilePrimaryColor = function useProfilePrimaryColor(guildProfile, token) {
  let guildIconURL = null;
  if (null != guildProfile) {
    guildIconURL = null;
    if (null == guildProfile.brandColorPrimary) {
      let obj = importDefault(1392);
      obj = {};
      ({ id: obj2.id, icon: obj2.icon } = guildProfile);
      obj.size = 64;
      guildIconURL = obj.getGuildIconURL(obj);
    }
  }
  let brandColorPrimary;
  brandColorPrimary = importDefault(7903)(guildIconURL, token);
  if (null != guildProfile) {
    brandColorPrimary = guildProfile.brandColorPrimary;
  }
  if (null != brandColorPrimary) {
    brandColorPrimary = guildProfile.brandColorPrimary;
  }
  return brandColorPrimary;
};
export const getProfilePrimaryColor = function getProfilePrimaryColor(guildProfileFromInvite) {
  let h;
  let l;
  let s;
  let tmp4;
  let tmp5;
  let tmp6;
  if (null == guildProfileFromInvite) {
    return null;
  } else if (null != guildProfileFromInvite.brandColorPrimary) {
    return guildProfileFromInvite.brandColorPrimary;
  } else {
    let obj = {};
    ({ id: obj6.id, icon: obj6.icon } = guildProfileFromInvite);
    obj.size = 64;
    const guildIconURL = importDefault(1392).getGuildIconURL(obj);
    if (null == guildIconURL) {
      return null;
    } else {
      require(7903) /* hasFetchedColors */.maybeFetchColors(guildIconURL);
      const useColorStore = require(7903) /* hasFetchedColors */.useColorStore;
      const tmp20 = useColorStore.getState().palette[guildIconURL];
      let first;
      if (null != tmp20) {
        first = tmp20[0];
      }
      if (null != first) {
        let num3 = 1;
        [tmp4, tmp5, tmp6] = callback(first, 3);
        obj = { r: tmp4, g: tmp5, b: tmp6 };
        const tmp3 = callback(first, 3);
        const obj2 = importDefault(6784)(obj);
        ({ h, s, l } = importDefault(6784)(obj).toHsl());
        if (_isNativeReflectConstruct.desaturateUserColors) {
          num3 = _isNativeReflectConstruct.saturation;
        }
        obj = { h, s: s * num3, l };
        const toHslResult = importDefault(6784)(obj).toHsl();
        return importDefault(6784)(obj).toHexString();
      } else {
        return null;
      }
      const obj7 = require(7903) /* hasFetchedColors */;
    }
    const obj5 = importDefault(1392);
  }
};
