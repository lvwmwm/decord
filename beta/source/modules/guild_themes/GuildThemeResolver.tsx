// Module ID: 4719
// Function ID: 4720
// Name: GuildThemeResolver
// Dependencies: [19, 1220, 2067, 4655, 4720, 4722, 1074, 4689, 504, 4760, 4763, 2]
// Exports: getActiveGuildTheme, getActiveGuildThemeForGuildId, isRenderableGuildThemeSettings, resolveRenderableGuildThemeSettings, useActiveGuildTheme, useEnabledGuildThemeForGuildId, useIsGuildThemePreviewActive

// Module 4719 (GuildThemeResolver)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1074 */;
import GuildThemePresets from "GuildThemePresets" /* 4689 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 4760 */;
import flow_Client from "flow/Client" /* 4763 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import GuildThemePreviewStore from "GuildThemePreviewStore" /* 4720 */;
import GuildThemeRuntimeStore from "GuildThemeRuntimeStore" /* 4722 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function resolveSavedActiveGuildTheme(stateFromStores) {
  let enabled;
  if (stateFromStores != null) {
    enabled = stateFromStores.enabled;
  }
  let tmp2 = null;
  if (true === enabled) {
    const themeSettings = stateFromStores.themeSettings;
    let tmp5 = null;
    if (null != themeSettings) {
      const customUserThemeSettings = themeSettings.customUserThemeSettings;
      let colors;
      if (customUserThemeSettings != null) {
        colors = customUserThemeSettings.colors;
      }
      let tmp4 = null;
      if (null != colors) {
        tmp4 = null;
        if (1 === customUserThemeSettings.colors.length) {
          if (null == customUserThemeSettings.gradientColorStops) {
            tmp4 = { type: "custom", customUserThemeSettings };
            const obj = { type: "custom", customUserThemeSettings };
          } else {
            tmp4 = null;
          }
        }
      }
      tmp5 = tmp4;
      if (null == tmp4) {
        const obj2 = GuildThemePresets;
        const guildThemePreset = obj2.getGuildThemePreset(themeSettings.presetId);
        let tmp9 = null;
        if (null != guildThemePreset) {
          tmp9 = { type: "preset", preset: guildThemePreset };
          const obj3 = { type: "preset", preset: guildThemePreset };
        }
        tmp5 = tmp9;
      }
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
function useActiveGuildThemeForGuildId(context, useActiveGuildTheme) {
  _require = context;
  let str = useActiveGuildTheme;
  if (useActiveGuildTheme === undefined) {
    str = "useActiveGuildThemeForGuildId";
  }
  let serverThemeUserEnabled;
  let stateFromStores2;
  let obj = require("ServerThemeUserExperiment");
  serverThemeUserEnabled = obj.useServerThemeUserEnabled(str);
  let obj2 = require("get initialized");
  const items = [GuildThemePreviewStore];
  const items1 = [context, serverThemeUserEnabled];
  const stateFromStores = obj2.useStateFromStores(items, () => {

  }, items1);
  _require = context;
  let obj3 = require("get initialized");
  const items2 = [stateFromStores2, GuildThemeRuntimeStore];
  const items3 = [context, serverThemeUserEnabled];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    if (null != guildId) {
      const tmp2 = serverThemeUserEnabled;
      if (tmp2) {
        const guild = GuildStore.getGuild(tmp);
        if (null != guild) {
          const features = guild.features;
          if (features.has(GuildFeatures.GUILD_THEME)) {
            let guildTheme = GuildThemeRuntimeStore.getGuildThemeSnapshot(tmp);
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
  }, items3);
  const items4 = [stateFromStores1];
  const memo = stateFromStores.useMemo(() => resolveSavedActiveGuildTheme(stateFromStores), items4);
  const items5 = [memo];
  const items6 = [context, serverThemeUserEnabled];
  const obj4 = require("get initialized");
  stateFromStores2 = obj4.useStateFromStores(items5, () => {
    if (null != context) {
      let PERSONAL;
      const tmp2 = serverThemeUserEnabled;
      if (tmp2) {
        PERSONAL = UserSettingsProtoStore.resolveGuildThemeSourcePreference(tmp);
      }
      return PERSONAL;
    }
    PERSONAL = flow_Client.GuildThemeSourcePreference.PERSONAL;
  }, items6);
  const items7 = [memo, stateFromStores2, stateFromStores];
  return stateFromStores.useMemo(() => {
    let tmp5;
    if (undefined !== stateFromStores) {
      let tmp7 = null;
      if (null != stateFromStores) {
        const customUserThemeSettings = tmp.customUserThemeSettings;
        let colors;
        if (customUserThemeSettings != null) {
          colors = customUserThemeSettings.colors;
        }
        let tmp9 = null;
        if (null != colors) {
          tmp9 = null;
          if (1 === customUserThemeSettings.colors.length) {
            if (null == customUserThemeSettings.gradientColorStops) {
              tmp9 = { type: "custom", customUserThemeSettings };
              const obj = { type: "custom", customUserThemeSettings };
            } else {
              tmp9 = null;
            }
          }
        }
        tmp7 = tmp9;
        if (null == tmp9) {
          const obj2 = GuildThemePresets;
          const guildThemePreset = obj2.getGuildThemePreset(tmp.presetId);
          let tmp13 = null;
          if (null != guildThemePreset) {
            tmp13 = { type: "preset", preset: guildThemePreset };
            const obj3 = { type: "preset", preset: guildThemePreset };
          }
          tmp7 = tmp13;
        }
      }
      tmp5 = tmp7;
    } else {
      tmp5 = null;
      if (stateFromStores2 !== flow_Client.GuildThemeSourcePreference.PERSONAL) {
        tmp5 = memo;
      }
    }
    return tmp5;
  }, items7);
}
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/guild_themes/GuildThemeResolver.tsx");

export const resolveRenderableGuildThemeSettings = function resolveRenderableGuildThemeSettings(customUserThemeSettings) {
  if (null == customUserThemeSettings) {
    return null;
  } else {
    customUserThemeSettings = customUserThemeSettings.customUserThemeSettings;
    let colors;
    if (customUserThemeSettings != null) {
      colors = customUserThemeSettings.colors;
    }
    let tmp2 = null;
    if (null != colors) {
      tmp2 = null;
      if (1 === customUserThemeSettings.colors.length) {
        if (null == customUserThemeSettings.gradientColorStops) {
          tmp2 = { type: "custom", customUserThemeSettings };
          const obj = { type: "custom", customUserThemeSettings };
        } else {
          tmp2 = null;
        }
      }
    }
    if (null != tmp2) {
      return tmp2;
    } else {
      const obj2 = GuildThemePresets;
      const guildThemePreset = obj2.getGuildThemePreset(customUserThemeSettings.presetId);
      let tmp6 = null;
      if (null != guildThemePreset) {
        tmp6 = { type: "preset", preset: guildThemePreset };
        const obj3 = { type: "preset", preset: guildThemePreset };
      }
      return tmp6;
    }
  }
};
export const isRenderableGuildThemeSettings = function isRenderableGuildThemeSettings(customUserThemeSettings) {
  let tmp = null;
  if (null != customUserThemeSettings) {
    customUserThemeSettings = customUserThemeSettings.customUserThemeSettings;
    let colors;
    if (customUserThemeSettings != null) {
      colors = customUserThemeSettings.colors;
    }
    let tmp3 = null;
    if (null != colors) {
      tmp3 = null;
      if (1 === customUserThemeSettings.colors.length) {
        if (null == customUserThemeSettings.gradientColorStops) {
          tmp3 = { type: "custom", customUserThemeSettings };
          const obj = { type: "custom", customUserThemeSettings };
        } else {
          tmp3 = null;
        }
      }
    }
    tmp = tmp3;
    if (null == tmp3) {
      const obj2 = GuildThemePresets;
      const guildThemePreset = obj2.getGuildThemePreset(customUserThemeSettings.presetId);
      let tmp7 = null;
      if (null != guildThemePreset) {
        tmp7 = { type: "preset", preset: guildThemePreset };
        const obj3 = { type: "preset", preset: guildThemePreset };
      }
      tmp = tmp7;
    }
  }
  return null != tmp;
};
export { resolveSavedActiveGuildTheme };
export const useEnabledGuildThemeForGuildId = function useEnabledGuildThemeForGuildId(guildId, GuildThemeNuxTrigger) {
  let serverThemeUserEnabled;
  let str = GuildThemeNuxTrigger;
  if (GuildThemeNuxTrigger === undefined) {
    str = "useEnabledGuildThemeForGuildId";
  }
  const obj = require("ServerThemeUserExperiment");
  serverThemeUserEnabled = obj.useServerThemeUserEnabled(str);
  _require = guildId;
  const items = [GuildStore, GuildThemeRuntimeStore];
  const items1 = [guildId, serverThemeUserEnabled];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => {
    if (null != guildId) {
      const tmp2 = serverThemeUserEnabled;
      if (tmp2) {
        const guild = GuildStore.getGuild(tmp);
        if (null != guild) {
          const features = guild.features;
          if (features.has(GuildFeatures.GUILD_THEME)) {
            let guildTheme = GuildThemeRuntimeStore.getGuildThemeSnapshot(tmp);
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
  return stateFromStores.useMemo(() => resolveSavedActiveGuildTheme(stateFromStores), items2);
};
export const getActiveGuildThemeForGuildId = function getActiveGuildThemeForGuildId(guildId, GuildPowerupsConstants) {
  let str = GuildPowerupsConstants;
  if (GuildPowerupsConstants === undefined) {
    str = "getActiveGuildThemeForGuildId";
  }
  if (null != guildId) {
    const obj = ServerThemeUserExperiment;
    const tmp8 = require;
    if (obj.getServerThemeUserEnabled(str)) {
      const guild = GuildStore.getGuild(guildId);
      if (null != guild) {
        const features = guild.features;
        if (features.has(GuildFeatures.GUILD_THEME)) {
          const guildThemeSourcePreference = UserSettingsProtoStore.resolveGuildThemeSourcePreference(guildId);
          if (guildThemeSourcePreference === tmp8(4763).GuildThemeSourcePreference.PERSONAL) {
            return null;
          } else {
            let guildTheme = GuildThemeRuntimeStore.getGuildThemeSnapshot(guildId);
            const tmp7 = resolveSavedActiveGuildTheme;
            if (undefined === guildTheme) {
              guildTheme = guild.guildTheme;
            }
            return tmp7(guildTheme);
          }
        }
      }
      return null;
    }
  }
  return null;
};
export const getActiveGuildTheme = function getActiveGuildTheme() {
  const guildId = SelectedGuildStore.getGuildId();
  let tmp11Result = null;
  if (null != guildId) {
    tmp11Result = null;
    const obj = ServerThemeUserExperiment;
    const tmp3 = require;
    if (obj.getServerThemeUserEnabled("getActiveGuildTheme")) {
      const guild = GuildStore.getGuild(guildId);
      tmp11Result = null;
      if (null != guild) {
        const features = guild.features;
        tmp11Result = null;
        if (features.has(GuildFeatures.GUILD_THEME)) {
          const guildThemeSourcePreference = UserSettingsProtoStore.resolveGuildThemeSourcePreference(guildId);
          tmp11Result = null;
          if (guildThemeSourcePreference !== tmp3(4763).GuildThemeSourcePreference.PERSONAL) {
            let guildTheme = GuildThemeRuntimeStore.getGuildThemeSnapshot(guildId);
            const tmp11 = resolveSavedActiveGuildTheme;
            if (undefined === guildTheme) {
              guildTheme = guild.guildTheme;
            }
            tmp11Result = tmp11(guildTheme);
          }
        }
      }
    }
  }
  return tmp11Result;
};
export { useActiveGuildThemeForGuildId };
export const useActiveGuildTheme = function useActiveGuildTheme() {
  let guildId;
  const items = [SelectedGuildStore];
  const obj = get_initialized;
  return useActiveGuildThemeForGuildId(obj.useStateFromStores(items, () => guildId.getGuildId()), "useActiveGuildTheme");
};
export const useIsGuildThemePreviewActive = function useIsGuildThemePreviewActive() {
  const items = [GuildThemePreviewStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => false);
};
