// Module ID: 11036
// Function ID: 11037
// Name: openStaticChannelRoute
// Dependencies: [2128, 2122, 2090, 2075, 1087, 7014, 7010, 6153, 11037, 2002, 7172, 5118, 11050, 11059, 1388, 2]
// Exports: default

// Module 11036 (openStaticChannelRoute)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ChannelConstants from "ChannelConstants" /* 2075 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6153 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 7010 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 7014 */;
import safeTransitionToDefault from "safeTransitionTo" /* 7172 */;
import GuildMemberStore from "GuildMemberStore" /* 2128 */;
import GuildRoleStore from "GuildRoleStore" /* 2122 */;
import GuildStore from "GuildStore" /* 2090 */;
import Constants from "Constants" /* 1087 */;
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
          obj8.pushLazy(asyncRequire(11037, dependencyMap.paths), obj2, closure_10);
        }
      } else if ("customize" === staticRoute) {
        const features2 = guild.features;
        if (features2.has(metroImportDefault.COMMUNITY)) {
          const obj4 = { guildId, defaultTab: GuildOnboardingTab.CUSTOMIZE };
          const obj6 = ModalActionCreatorsDefault;
          obj6.pushLazy(asyncRequire(11037, dependencyMap.paths), obj4, closure_10);
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
                      const tmp10 = asyncRequire(11050, dependencyMap.paths);
                      openLazy(tmp10, "GuildRoleConnectionsConnectAccountsActionSheet-" + role.id, obj5);
                    }
                  }
                }
              }
              const obj7 = { guildId };
              const obj3 = ModalActionCreatorsDefault;
              obj3.pushLazy(asyncRequire(11059, dependencyMap.paths), obj7);
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
