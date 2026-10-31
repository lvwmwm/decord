// Module ID: 12658
// Function ID: 12659
// Name: useConjureAutomodSettingsLink
// Dependencies: [19, 4885, 4946, 6844, 10867, 1072, 21, 504, 6845, 1113, 3868, 9074, 2]
// Exports: ConjureAutomodSettingsLink, default

// Module 12658 (useConjureAutomodSettingsLink)
import _modDef3868 from "module_3868" /* 3868 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6845 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9074 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10867 */;
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
};
export function ConjureAutomodSettingsLink(guildId) {
  let items;
  guildId = guildId.guildId;
  const update = guildId.update;
  const intl = guildId(1113).intl;
  const format = intl.format;
  const tmp3 = _modDef3868;
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
