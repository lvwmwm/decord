// Module ID: 11713
// Function ID: 11714
// Name: openStaticChannelRoute
// Dependencies: [5053, 5047, 5012, 4997, 1072, 7389, 7385, 6864, 11714, 2123, 7545, 5381, 11727, 11736, 1380, 2]
// Exports: default

// Module 11713 (openStaticChannelRoute)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import ChannelConstants from "ChannelConstants" /* 4997 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 7385 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 7389 */;
import safeTransitionToDefault from "safeTransitionTo" /* 7545 */;
import GuildMemberStore from "GuildMemberStore" /* 5053 */;
import GuildRoleStore from "GuildRoleStore" /* 5047 */;
import GuildStore from "GuildStore" /* 5012 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ GuildFeatures: metroImportDefault, Routes: metroImportAll } = Constants);
const GuildOnboardingTab = GuildOnboardingPromptsConstants.GuildOnboardingTab;
let closure_10 = GuildOnboardingConstants.CHANNELS_AND_ROLES_MODAL_KEY;
const result = size.fileFinishedImporting("modules/channel/native/openStaticChannelRoute.tsx");

export default function openStaticChannelRoute(arg0) {
  let guildId;
  let itemId;
  let navigationReplace;
  let staticRoute;
  ({ guildId, staticRoute, itemId, navigationReplace } = arg0);
  if (navigationReplace === undefined) {
    navigationReplace = false;
  }
  if (null != guildId) {
    const guild = GuildStore.getGuild(guildId);
    if (null != guild) {
      if ("browse" === staticRoute) {
        const features3 = guild.features;
        if (features3.has(metroImportDefault.COMMUNITY)) {
          const obj2 = { guildId, defaultTab: GuildOnboardingTab.BROWSE };
          const obj8 = ModalActionCreatorsDefault;
          obj8.pushLazy(asyncRequire(11714, dependencyMap.paths), obj2, closure_10);
        }
      } else if ("customize" === staticRoute) {
        const features2 = guild.features;
        if (features2.has(metroImportDefault.COMMUNITY)) {
          const obj4 = { guildId, defaultTab: GuildOnboardingTab.CUSTOMIZE };
          const obj6 = ModalActionCreatorsDefault;
          obj6.pushLazy(asyncRequire(11714, dependencyMap.paths), obj4, closure_10);
        }
      } else {
        if ("home" !== staticRoute) {
          if ("guide" !== staticRoute) {
            if ("linked-roles" === staticRoute) {
              if (null != itemId) {
                const selfMember = GuildMemberStore.getSelfMember(guildId);
                if (null != selfMember) {
                  const role = GuildRoleStore.getRole(guildId, itemId);
                  if (null != role) {
                    const roles = selfMember.roles;
                    if (!roles.includes(role.id)) {
                      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
                      const _HermesInternal = HermesInternal;
                      ActionSheetActionCreatorsDefault;
                      const obj5 = { role, guildId };
                      const tmp10 = asyncRequire(11727, dependencyMap.paths);
                      openLazy(tmp10, "GuildRoleConnectionsConnectAccountsActionSheet-" + role.id, obj5);
                    }
                  }
                }
              }
              const obj7 = { guildId };
              const obj3 = ModalActionCreatorsDefault;
              obj3.pushLazy(asyncRequire(11736, dependencyMap.paths), obj7);
            } else {
              const obj = GlobalUtils;
              obj.assertNever(staticRoute);
            }
          }
        }
        const features = guild.features;
        if (features.has(metroImportDefault.COMMUNITY)) {
          const obj9 = { navigationReplace, openChannel: true };
          const tmp20 = safeTransitionToDefault;
          tmp20(metroImportAll.CHANNEL(guildId, StaticChannelRoute.GUILD_HOME), obj9);
        }
      }
    }
  }
};
