// Module ID: 9211
// Function ID: 9212
// Name: guild_profile/GuildProfileUtils
// Dependencies: [32, 4825, 1397, 7589, 6972, 2]
// Exports: getProfilePrimaryColor, useProfilePrimaryColor

// Module 9211 (guild_profile/GuildProfileUtils)
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import _modDef6972 from "module_6972" /* 6972 */;
import useAvatarColor from "useAvatarColor" /* 7589 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

const useAvatarColorDefault = useAvatarColor;

const result = size.fileFinishedImporting("modules/guild_profile/native/GuildProfileUtils.tsx");

export const useProfilePrimaryColor = function useProfilePrimaryColor(guildProfile, token) {
  let guildIconURL = null;
  if (null != guildProfile) {
    guildIconURL = null;
    if (null == guildProfile.brandColorPrimary) {
      const obj3 = { id: null, icon: null, size: 64 };
      ({ id: obj2.id, icon: obj2.icon } = guildProfile);
      const obj = AvatarUtilsDefault;
      guildIconURL = obj.getGuildIconURL(obj3);
    }
  }
  let brandColorPrimary = useAvatarColorDefault(guildIconURL, token);
  let brandColorPrimary1;
  if (guildProfile != null) {
    brandColorPrimary1 = guildProfile.brandColorPrimary;
  }
  if (null != brandColorPrimary1) {
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
    const obj3 = { id: null, icon: null, size: 64 };
    ({ id: obj6.id, icon: obj6.icon } = guildProfileFromInvite);
    const obj5 = AvatarUtilsDefault;
    const guildIconURL = obj5.getGuildIconURL(obj3);
    if (null == guildIconURL) {
      return null;
    } else {
      const obj7 = useAvatarColor;
      obj7.maybeFetchColors(guildIconURL);
      const useColorStore = useAvatarColor.useColorStore;
      const tmp13 = useColorStore.getState().palette[guildIconURL];
      let first;
      if (tmp13 != null) {
        first = tmp13[0];
      }
      if (null != first) {
        [tmp4, tmp5, tmp6] = first;
        const obj = { r: tmp4, g: tmp5, b: tmp6 };
        _slicedToArray(first, 3);
        const obj2 = _modDef6972(obj);
        let num2 = 1;
        ({ h, s, l } = obj2.toHsl());
        obj2.toHsl();
        if (AccessibilityStore.desaturateUserColors) {
          num2 = AccessibilityStore.saturation;
        }
        const obj9 = { h, s: s * num2, l };
        const obj4 = _modDef6972(obj9);
        return obj4.toHexString();
      } else {
        return null;
      }
    }
  }
};
