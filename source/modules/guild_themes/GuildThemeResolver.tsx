// Module ID: 4012
// Function ID: 33287
// Name: resolveRenderableGuildThemeSettings
// Dependencies: [31, 1316, 1838, 3947, 4013, 4016, 653, 3978, 566, 4059, 4062, 2]
// Exports: getActiveGuildTheme, isRenderableGuildThemeSettings, useActiveGuildTheme, useEnabledGuildThemeForGuildId, useIsGuildThemePreviewActive

// Module 4012 (resolveRenderableGuildThemeSettings)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";

const require = arg1;
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
      const guildThemePreset = require(3978) /* createPresetAppearance */.getGuildThemePreset(themeSettings.presetId);
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
  const _require = guildId;
  const dependencyMap = serverThemeUserEnabled;
  const items = [_createForOfIteratorHelperLoose, closure_7];
  const items1 = [guildId, serverThemeUserEnabled];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    if (null != closure_0) {
      if (closure_1) {
        const guild = outer1_4.getGuild(closure_0);
        if (null != guild) {
          const features = guild.features;
          if (features.has(outer1_8.GUILD_THEME)) {
            let guildTheme = outer1_7.getGuildThemeSnapshot(closure_0);
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
  const items2 = [stateFromStores];
  return stateFromStores.useMemo(() => outer1_10(stateFromStores), items2);
}
function getActiveGuildThemeForGuildId(guildId, getActiveGuildTheme) {
  let str = getActiveGuildTheme;
  if (getActiveGuildTheme === undefined) {
    str = "getActiveGuildThemeForGuildId";
  }
  if (null != guildId) {
    if (obj.getServerThemeUserEnabled(str)) {
      guild = guild.getGuild(guildId);
      if (null != guild) {
        const features = guild.features;
        if (features.has(GuildFeatures.GUILD_THEME)) {
          const guildThemeSourcePreference = _isNativeReflectConstruct.resolveGuildThemeSourcePreference(guildId);
          if (guildThemeSourcePreference === require(4062) /* GuildThemeSourcePreference */.GuildThemeSourcePreference.PERSONAL) {
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
    obj = require(4059) /* apexExperiment */;
  }
  return null;
}
function useActiveGuildThemeForGuildId(guildId, useActiveGuildTheme) {
  let str = useActiveGuildTheme;
  const _require = guildId;
  if (useActiveGuildTheme === undefined) {
    str = "useActiveGuildThemeForGuildId";
  }
  let serverThemeUserEnabled;
  let stateFromStores;
  let c3;
  let stateFromStores1;
  serverThemeUserEnabled = _require(serverThemeUserEnabled[9]).useServerThemeUserEnabled(str);
  const obj = _require(serverThemeUserEnabled[9]);
  const items = [closure_6];
  const items1 = [guildId, serverThemeUserEnabled];
  stateFromStores = _require(serverThemeUserEnabled[8]).useStateFromStores(items, () => {

  }, items1);
  const tmp3 = useSavedActiveGuildThemeForGuildId(guildId, serverThemeUserEnabled);
  c3 = tmp3;
  const obj2 = _require(serverThemeUserEnabled[8]);
  const items2 = [c3];
  const items3 = [guildId, serverThemeUserEnabled];
  stateFromStores1 = _require(serverThemeUserEnabled[8]).useStateFromStores(items2, () => {
    if (null != guildId) {
      if (serverThemeUserEnabled) {
        let PERSONAL = _undefined.resolveGuildThemeSourcePreference(guildId);
      }
      return PERSONAL;
    }
    PERSONAL = guildId(serverThemeUserEnabled[10]).GuildThemeSourcePreference.PERSONAL;
  }, items3);
  const items4 = [tmp3, stateFromStores1, stateFromStores];
  return stateFromStores.useMemo(() => {
    if (undefined !== stateFromStores) {
      let tmp4 = outer1_9(stateFromStores);
    } else {
      tmp4 = null;
      if (stateFromStores1 !== guildId(serverThemeUserEnabled[10]).GuildThemeSourcePreference.PERSONAL) {
        tmp4 = c3;
      }
    }
    return tmp4;
  }, items4);
}
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_themes/GuildThemeResolver.tsx");

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
  return useSavedActiveGuildThemeForGuildId(guildId, require(4059) /* apexExperiment */.useServerThemeUserEnabled(str));
};
export { getActiveGuildThemeForGuildId };
export const getActiveGuildTheme = function getActiveGuildTheme() {
  return getActiveGuildThemeForGuildId(guildId.getGuildId(), "getActiveGuildTheme");
};
export { useActiveGuildThemeForGuildId };
export const useActiveGuildTheme = function useActiveGuildTheme() {
  const items = [closure_5];
  return useActiveGuildThemeForGuildId(require(566) /* initialize */.useStateFromStores(items, () => outer1_5.getGuildId()), "useActiveGuildTheme");
};
export const useIsGuildThemePreviewActive = function useIsGuildThemePreviewActive() {
  const items = [closure_6];
  return require(566) /* initialize */.useStateFromStores(items, () => false);
};
