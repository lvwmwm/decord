// Module ID: 14882
// Function ID: 14883
// Name: useManageServerIntegrationMenuItem
// Dependencies: [10048, 4914, 4975, 1071, 504, 1112, 5257, 8574, 2]
// Exports: default

// Module 14882 (useManageServerIntegrationMenuItem)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8574 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 10048 */;
import GuildStore from "GuildStore" /* 4914 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
const useGuildIndexState = ApplicationCommandIndexStore.useGuildIndexState;
({ GuildSettingsSections: metroRequire, Permissions: metroImportDefault } = Constants);
let result = size.fileFinishedImporting("modules/guild_settings/integrations/native/useManageServerIntegrationMenuItem.tsx");

export default function useManageServerIntegrationMenuItem(bot, arg1, arg2) {
  let id;
  let intl;
  _require = bot;
  let closure_1 = arg2;
  let obj = require("get initialized");
  const items = [GuildStore, PermissionStore];
  const items1 = [bot.bot, arg2];
  const stateFromStores = obj.useStateFromStores(items, () => {
    bot = bot.bot && null != closure_1 && PermissionStore.can(metroImportDefault.MANAGE_GUILD, GuildStore.getGuild(closure_1));
    return bot;
  }, items1);
  let tmp5;
  const tmp4 = useGuildIndexState;
  if (stateFromStores) {
    if (null != arg2) {
      tmp5 = arg2;
    }
  }
  id = arg1;
  const result = tmp4(tmp5, true).result;
  if (arg1 == null) {
    let tmp7;
    if (result != null) {
      tmp7 = result.sectionIdsByBotId[bot.id];
    }
    id = tmp7;
  }
  if (id == null) {
    id = bot.id;
  }
  let sections;
  const _Object = Object;
  if (result != null) {
    sections = result.sections;
  }
  if (sections == null) {
    sections = {};
  }
  const values2 = values(sections);
  let tmp10 = null;
  if (stateFromStores) {
    tmp10 = null;
    if (null != arg2) {
      tmp10 = null;
      if (tmp9) {
        let obj2 = {
          label: intl.string(tmp(tmp2[5]).t.IuSJT8),
          action() {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet();
                  const obj2 = GuildSettingsActionCreatorsDefault;
                  const obj3 = { applicationId: id };
                  obj2.open(closure_1, metroRequire.INTEGRATION_APPLICATION, undefined, undefined, obj3);
                }
        };
        intl = tmp(tmp2[5]).intl;
        tmp10 = obj2;
      }
    }
  }
  return tmp10;
};
