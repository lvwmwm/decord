// Module ID: 6879
// Function ID: 6880
// Name: isOptInEnabled
// Dependencies: [4880, 4941, 6769, 1384, 1072, 504, 2]
// Exports: isOptInEnabledForGuild, useOptInEnabledForGuild, useShouldShowOnboardingAdminUpsellForGuild

// Module 6879 (isOptInEnabled)
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
({ GuildFeatures: metroRequire, Permissions: metroImportDefault } = Constants);
const result = size.fileFinishedImporting("modules/opt_in_channels/isOptInEnabled.tsx");

export function useOptInEnabledForGuild(id) {
  _require = id;
  const items = [UserGuildSettingsStore, GuildStore, UserStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let isOptInEnabledResult = UserGuildSettingsStore.isOptInEnabled(id);
    const guild = GuildStore.getGuild(id);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(metroRequire.COMMUNITY);
    }
    if (flag == null) {
      flag = false;
    }
    const currentUser = UserStore.getCurrentUser();
    let flag2;
    if (currentUser != null) {
      flag2 = currentUser.isStaff();
    }
    if (flag2 == null) {
      flag2 = false;
    }
    if (isOptInEnabledResult) {
      if (!flag) {
        flag = flag2;
      }
      isOptInEnabledResult = flag;
    }
    return isOptInEnabledResult;
  });
}
export function isOptInEnabledForGuild(_guildId) {
  const guild = GuildStore.getGuild(_guildId);
  const currentUser = UserStore.getCurrentUser();
  let tmp2 = null != _guildId && null != guild && null != currentUser;
  if (tmp2) {
    const features = guild.features;
    tmp2 = (features.has(metroRequire.COMMUNITY) || currentUser.isStaff()) && UserGuildSettingsStore.isOptInEnabled(_guildId);
    const isOptInEnabledResult = (features.has(metroRequire.COMMUNITY) || currentUser.isStaff()) && UserGuildSettingsStore.isOptInEnabled(_guildId);
  }
  return tmp2;
}
export function useShouldShowOnboardingAdminUpsellForGuild(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let flag;
    const canResult = PermissionStore.can(metroImportDefault.MANAGE_GUILD, guild);
    const canResult1 = PermissionStore.can(metroImportDefault.MANAGE_ROLES, guild);
    if (guild != null) {
      const features = guild.features;
      flag = features.has(metroRequire.GUILD_ONBOARDING_EVER_ENABLED);
    }
    if (flag == null) {
      flag = false;
    }
    return null != guild && canResult && canResult1 && !flag;
  });
}
