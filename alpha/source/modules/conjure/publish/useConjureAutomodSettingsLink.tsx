// Module ID: 12417
// Function ID: 12418
// Name: useConjureAutomodSettingsLink
// Dependencies: [19, 4878, 4936, 6808, 10749, 1084, 21, 558, 576, 6809, 504, 9039, 1125, 3863, 2]

// Module 12417 (useConjureAutomodSettingsLink)
import _modDef3863 from "module_3863" /* 3863 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6809 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9039 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4878 */;
import PermissionStore from "PermissionStore" /* 4936 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10749 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
({ GuildSettingsSections: metroImportDefault, Permissions: metroImportAll } = Constants);
({ Fragment: c9, jsxs: c10 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAutomodSettingsLink(arg0) {
  let closure_0;
  let first;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore, , , ];
    let tmp6 = ConjurePublishStatusStore;
    items[1] = ConjurePublishStatusStore;
    items[2] = GuildStore;
    items[3] = PermissionStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      let guild_id;
      const project = ConjureProjectStore.getProject(closure_0);
      const tmp = closure_0;
      if (null != project) {
        if ("user" !== project.install_scope) {
          if (null != project.guild_id) {
            const supported_surfaces = project.supported_surfaces;
            let hasItem;
            if (supported_surfaces != null) {
              hasItem = supported_surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD);
            }
            let tmp6 = true === hasItem;
            if (!tmp6) {
              const publishStatus = ConjurePublishStatusStore.getPublishStatus(tmp);
              let surface;
              if (publishStatus != null) {
                surface = publishStatus.surface;
              }
              tmp6 = "automod" === surface;
            }
            const guild = GuildStore.getGuild(project.guild_id);
            const obj = { automod: tmp6, guildId: guild_id };
            guild_id = null;
            const canResult = null != guild && PermissionStore.can(metroImportAll.MANAGE_GUILD, guild);
            if (tmp6) {
              guild_id = null;
              if (canResult) {
                guild_id = project.guild_id;
              }
            }
            return obj;
          }
        }
      }
      return { automod: false, guildId: null };
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp9);
}) : (function useConjureAutomodSettingsLink(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjureProjectStore, ConjurePublishStatusStore, GuildStore, PermissionStore];
  return obj.useStateFromStoresObject(items, () => {
    let guild_id;
    const project = ConjureProjectStore.getProject(closure_0);
    const tmp = closure_0;
    if (null != project) {
      if ("user" !== project.install_scope) {
        if (null != project.guild_id) {
          const supported_surfaces = project.supported_surfaces;
          let hasItem;
          if (supported_surfaces != null) {
            hasItem = supported_surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.AUTOMOD);
          }
          let tmp6 = true === hasItem;
          if (!tmp6) {
            const publishStatus = ConjurePublishStatusStore.getPublishStatus(tmp);
            let surface;
            if (publishStatus != null) {
              surface = publishStatus.surface;
            }
            tmp6 = "automod" === surface;
          }
          const guild = GuildStore.getGuild(project.guild_id);
          const obj = { automod: tmp6, guildId: guild_id };
          guild_id = null;
          const canResult = null != guild && PermissionStore.can(metroImportAll.MANAGE_GUILD, guild);
          if (tmp6) {
            guild_id = null;
            if (canResult) {
              guild_id = project.guild_id;
            }
          }
          return obj;
        }
      }
    }
    return { automod: false, guildId: null };
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAutomodSettingsLink(guildId) {
  let items;
  let tmp5;
  let obj = guildId(576);
  const cResult = obj.c(7);
  const tmp = guildId;
  guildId = guildId.guildId;
  const update = guildId.update;
  if (cResult[0] === guildId) {
    let tmp4;
    let tmp8;
    if (cResult[1] === update) {
      tmp4 = cResult[2];
    }
    if (cResult[5] !== tmp4) {
      const obj2 = { children: items };
      items = [" ", tmp4];
      const tmp11 = closure_10(closure_9, obj2);
      cResult[5] = tmp4;
      cResult[6] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[6];
    }
    return tmp8;
  }
  if (cResult[3] !== guildId) {
    const fn = function n() {
      const obj = GuildSettingsActionCreatorsDefault;
      return obj.open(guildId, metroImportDefault.GUILD_AUTOMOD);
    };
    cResult[3] = guildId;
    cResult[4] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[4];
  }
  const intl = tmp(1125).intl;
  const format = intl.format;
  const tmp6 = _modDef3863;
  const formatResult = format(update ? tmp6.esEGL5 : tmp6["XrN+Bg"], { onOpen: tmp5 });
  cResult[0] = guildId;
  cResult[1] = update;
  cResult[2] = formatResult;
  tmp4 = formatResult;
}) : (function ConjureAutomodSettingsLink(guildId) {
  let items;
  guildId = guildId.guildId;
  const update = guildId.update;
  const intl = guildId(1125).intl;
  const format = intl.format;
  const tmp3 = _modDef3863;
  let obj = { children: items };
  items = [" "];
  const obj2 = {
    onOpen() {
      const obj = GuildSettingsActionCreatorsDefault;
      return obj.open(guildId, metroImportDefault.GUILD_AUTOMOD);
    }
  };
  items[1] = format(update ? tmp3.esEGL5 : tmp3["XrN+Bg"], obj2);
  return closure_10(closure_9, obj);
});
const result = size.fileFinishedImporting("modules/conjure/publish/useConjureAutomodSettingsLink.tsx");

export default tmp5;
export const ConjureAutomodSettingsLink = tmp6;
