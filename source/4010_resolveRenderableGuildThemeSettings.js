// Module ID: 4010
// Function ID: 33275
// Name: resolveRenderableGuildThemeSettings
// Dependencies: []
// Exports: getActiveGuildTheme, isRenderableGuildThemeSettings, useActiveGuildTheme, useEnabledGuildThemeForGuildId, useIsGuildThemePreviewActive

// Module 4010 (resolveRenderableGuildThemeSettings)
function resolveRenderableGuildThemeSettings(themeSettings) {
  if (null == themeSettings) {
    return null;
  } else {
    const customUserThemeSettings = themeSettings.customUserThemeSettings;
    let colors;
    if (null != customUserThemeSettings) {
      colors = customUserThemeSettings.colors;
    }
    let tmp2 = null;
    if (null != colors) {
      tmp2 = null;
      if (1 === customUserThemeSettings.colors.length) {
        if (null == customUserThemeSettings.gradientColorStops) {
          let obj = { type: "custom", customUserThemeSettings };
          tmp2 = obj;
        } else {
          tmp2 = null;
        }
      }
    }
    if (null != tmp2) {
      return tmp2;
    } else {
      const guildThemePreset = arg1(dependencyMap[7]).getGuildThemePreset(themeSettings.presetId);
      let tmp6 = null;
      if (null != guildThemePreset) {
        obj = { type: "preset", preset: guildThemePreset };
        tmp6 = obj;
      }
      return tmp6;
    }
  }
}
function resolveSavedActiveGuildTheme(enabled) {
  enabled = undefined;
  if (null != enabled) {
    enabled = enabled.enabled;
  }
  let tmp2 = null;
  if (true === enabled) {
    tmp2 = resolveRenderableGuildThemeSettings(enabled.themeSettings);
  }
  return tmp2;
}
function useSavedActiveGuildThemeForGuildId(guildId, serverThemeUserEnabled) {
  serverThemeUserEnabled = guildId;
  const dependencyMap = serverThemeUserEnabled;
  const items = [closure_4, closure_7];
  const items1 = [guildId, serverThemeUserEnabled];
  const stateFromStores = serverThemeUserEnabled(dependencyMap[8]).useStateFromStores(items, () => {
    if (null != arg0) {
      if (arg1) {
        const guild = guild.getGuild(arg0);
        if (null != guild) {
          const features = guild.features;
          if (features.has(constants.GUILD_THEME)) {
            let guildTheme = guildThemeSnapshot.getGuildThemeSnapshot(arg0);
            if (undefined === guildTheme) {
              guildTheme = guild.guildTheme;
            }
            return guildTheme;
          }
        }
        return null;
      }
    }
    return null;
  }, items1);
  const React = stateFromStores;
  const items2 = [stateFromStores];
  return React.useMemo(() => callback(stateFromStores), items2);
}
function getActiveGuildThemeForGuildId(guildId, getActiveGuildTheme) {
  let str = getActiveGuildTheme;
  if (getActiveGuildTheme === undefined) {
    str = "getActiveGuildThemeForGuildId";
  }
  if (null != guildId) {
    if (obj.getServerThemeUserEnabled(str)) {
      const guild = guild.getGuild(guildId);
      if (null != guild) {
        const features = guild.features;
        if (features.has(GuildFeatures.GUILD_THEME)) {
          const guildThemeSourcePreference = closure_3.resolveGuildThemeSourcePreference(guildId);
          if (guildThemeSourcePreference === getActiveGuildTheme(dependencyMap[10]).GuildThemeSourcePreference.PERSONAL) {
            return null;
          } else {
            let guildTheme = guildThemeSnapshot.getGuildThemeSnapshot(guildId);
            if (undefined === guildTheme) {
              guildTheme = guild.guildTheme;
            }
            return resolveSavedActiveGuildTheme(guildTheme);
          }
        }
      }
      return null;
    }
    const obj = getActiveGuildTheme(dependencyMap[9]);
  }
  return null;
}
function useActiveGuildThemeForGuildId(guildId, useActiveGuildTheme) {
  let str = useActiveGuildTheme;
  useActiveGuildTheme = guildId;
  if (useActiveGuildTheme === undefined) {
    str = "useActiveGuildThemeForGuildId";
  }
  let dependencyMap;
  let React;
  let closure_3;
  let closure_4;
  const serverThemeUserEnabled = useActiveGuildTheme(dependencyMap[9]).useServerThemeUserEnabled(str);
  dependencyMap = serverThemeUserEnabled;
  const obj = useActiveGuildTheme(dependencyMap[9]);
  const items = [closure_6];
  const items1 = [guildId, serverThemeUserEnabled];
  const stateFromStores = useActiveGuildTheme(dependencyMap[8]).useStateFromStores(items, () => {

  }, items1);
  React = stateFromStores;
  const tmp3 = useSavedActiveGuildThemeForGuildId(guildId, serverThemeUserEnabled);
  closure_3 = tmp3;
  const obj2 = useActiveGuildTheme(dependencyMap[8]);
  const items2 = [closure_3];
  const items3 = [guildId, serverThemeUserEnabled];
  const stateFromStores1 = useActiveGuildTheme(dependencyMap[8]).useStateFromStores(items2, () => {
    if (null != arg0) {
      if (serverThemeUserEnabled) {
        let PERSONAL = tmp3.resolveGuildThemeSourcePreference(arg0);
      }
      return PERSONAL;
    }
    PERSONAL = arg0(serverThemeUserEnabled[10]).GuildThemeSourcePreference.PERSONAL;
  }, items3);
  closure_4 = stateFromStores1;
  const items4 = [tmp3, stateFromStores1, stateFromStores];
  return React.useMemo(() => {
    if (undefined !== stateFromStores) {
      let tmp4 = callback(stateFromStores);
    } else {
      tmp4 = null;
      if (stateFromStores1 !== arg0(serverThemeUserEnabled[10]).GuildThemeSourcePreference.PERSONAL) {
        tmp4 = tmp3;
      }
      const tmp3 = serverThemeUserEnabled;
    }
    return tmp4;
  }, items4);
}
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const GuildFeatures = arg1(dependencyMap[6]).GuildFeatures;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_themes/GuildThemeResolver.tsx");

export { resolveRenderableGuildThemeSettings };
export const isRenderableGuildThemeSettings = function isRenderableGuildThemeSettings(themeSettings) {
  return null != resolveRenderableGuildThemeSettings(themeSettings);
};
export { resolveSavedActiveGuildTheme };
export const useEnabledGuildThemeForGuildId = function useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger) {
  let str = GuildThemeNuxTrigger;
  if (GuildThemeNuxTrigger === undefined) {
    str = "useEnabledGuildThemeForGuildId";
  }
  return useSavedActiveGuildThemeForGuildId(guildId, GuildThemeNuxTrigger(dependencyMap[9]).useServerThemeUserEnabled(str));
};
export { getActiveGuildThemeForGuildId };
export const getActiveGuildTheme = function getActiveGuildTheme() {
  return getActiveGuildThemeForGuildId(guildId.getGuildId(), "getActiveGuildTheme");
};
export { useActiveGuildThemeForGuildId };
export const useActiveGuildTheme = function useActiveGuildTheme() {
  const items = [closure_5];
  return useActiveGuildThemeForGuildId(arg1(dependencyMap[8]).useStateFromStores(items, () => guildId.getGuildId()), "useActiveGuildTheme");
};
export const useIsGuildThemePreviewActive = function useIsGuildThemePreviewActive() {
  const items = [closure_6];
  return arg1(dependencyMap[8]).useStateFromStores(items, () => false);
};
