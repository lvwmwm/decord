// Module ID: 8575
// Function ID: 68121
// Name: useProfilePrimaryColor
// Dependencies: []
// Exports: getProfilePrimaryColor, useProfilePrimaryColor

// Module 8575 (useProfilePrimaryColor)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_profile/native/GuildProfileUtils.tsx");

export const useProfilePrimaryColor = function useProfilePrimaryColor(guildProfile, token) {
  let guildIconURL = null;
  if (null != guildProfile) {
    guildIconURL = null;
    if (null == guildProfile.brandColorPrimary) {
      let obj = importDefault(dependencyMap[2]);
      obj = {};
      ({ id: obj2.id, icon: obj2.icon } = guildProfile);
      obj.size = 64;
      guildIconURL = obj.getGuildIconURL(obj);
    }
  }
  let brandColorPrimary;
  brandColorPrimary = importDefault(dependencyMap[3])(guildIconURL, token);
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
    const guildIconURL = importDefault(dependencyMap[2]).getGuildIconURL(obj);
    if (null == guildIconURL) {
      return null;
    } else {
      arg1(dependencyMap[3]).maybeFetchColors(guildIconURL);
      const useColorStore = arg1(dependencyMap[3]).useColorStore;
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
        const obj2 = importDefault(dependencyMap[4])(obj);
        ({ h, s, l } = importDefault(dependencyMap[4])(obj).toHsl());
        if (closure_4.desaturateUserColors) {
          num3 = closure_4.saturation;
        }
        obj = { h, s: s * num3, l };
        const toHslResult = importDefault(dependencyMap[4])(obj).toHsl();
        return importDefault(dependencyMap[4])(obj).toHexString();
      } else {
        return null;
      }
      const obj7 = arg1(dependencyMap[3]);
    }
    const obj5 = importDefault(dependencyMap[2]);
  }
};
