// Module ID: 11979
// Function ID: 11980
// Name: openStaticChannelRoute
// Dependencies: [4924, 4918, 4883, 4868, 1071, 7425, 7421, 6099, 11980, 2119, 7573, 5226, 11994, 12003, 1254, 2]
// Exports: default

// Module 11979 (openStaticChannelRoute)
import GlobalUtils from "GlobalUtils" /* 1254 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ChannelConstants from "ChannelConstants" /* 4868 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 7421 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 7425 */;
import safeTransitionToDefault from "safeTransitionTo" /* 7573 */;
import GuildMemberStore from "GuildMemberStore" /* 4924 */;
import GuildRoleStore from "GuildRoleStore" /* 4918 */;
import GuildStore from "GuildStore" /* 4883 */;
import Constants from "Constants" /* 1071 */;
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
          obj8.pushLazy(asyncRequire(11980, dependencyMap.paths), obj2, closure_10);
        }
      } else if ("customize" === staticRoute) {
        const features2 = guild.features;
        if (features2.has(metroImportDefault.COMMUNITY)) {
          const obj4 = { guildId, defaultTab: GuildOnboardingTab.CUSTOMIZE };
          const obj6 = ModalActionCreatorsDefault;
          obj6.pushLazy(asyncRequire(11980, dependencyMap.paths), obj4, closure_10);
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
                      const tmp10 = asyncRequire(11994, dependencyMap.paths);
                      openLazy(tmp10, "GuildRoleConnectionsConnectAccountsActionSheet-" + role.id, obj5);
                    }
                  }
                }
              }
              const obj7 = { guildId };
              const obj3 = ModalActionCreatorsDefault;
              obj3.pushLazy(asyncRequire(12003, dependencyMap.paths), obj7);
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
