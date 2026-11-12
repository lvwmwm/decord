// Module ID: 13542
// Function ID: 13543
// Name: useConjureAutomodSettingsLink
// Dependencies: [19, 5114, 5175, 6954, 7313, 1072, 21, 504, 6955, 1113, 4079, 8338, 2]
// Exports: ConjureAutomodSettingsLink, default

// Module 13542 (useConjureAutomodSettingsLink)
import _modDef4079 from "module_4079" /* 4079 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6955 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8338 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5114 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7313 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
({ GuildSettingsSections: metroImportDefault, Permissions: metroImportAll } = Constants);
({ Fragment: c9, jsxs: c10 } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjureAutomodSettingsLink.tsx");

export default function useConjureAutomodSettingsLink(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjureProjectStore, ConjurePublishStatusStore, GuildStore, PermissionStore];
  return obj.useStateFromStoresObject(items, () => {
    let guild_id;
    const project = ConjureProjectStore.getProject(closure_0);
    const tmp = closure_0;
    if (null != project) {
      if ("guild" === project.install_scope) {
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
};
export function ConjureAutomodSettingsLink(guildId) {
  let items;
  guildId = guildId.guildId;
  const update = guildId.update;
  const intl = guildId(1113).intl;
  const format = intl.format;
  const tmp3 = _modDef4079;
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
}
