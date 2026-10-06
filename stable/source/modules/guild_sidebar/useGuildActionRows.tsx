// Module ID: 15889
// Function ID: 15890
// Name: useGuildActionRows
// Dependencies: [32, 5024, 6958, 1086, 558, 576, 11754, 6683, 6669, 6681, 6648, 6644, 573, 5371, 6645, 11664, 6684, 6646, 11917, 15788, 15854, 6686, 4749, 15890, 2035, 6807, 2]

// Module 15889 (useGuildActionRows)
import Constants from "Constants" /* 1086 */;
import useIsNewMemberDefault from "useIsNewMember" /* 6645 */;
import GuildSidebarConstants from "GuildSidebarConstants" /* 6958 */;
import useCanSeeEventsInChannelListDefault from "useCanSeeEventsInChannelList" /* 11754 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 11917 */;
import useTotalPossibleBoostCountDefault from "useTotalPossibleBoostCount" /* 15854 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5024 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ChannelListGuildActionRow = GuildSidebarConstants.ChannelListGuildActionRow;
const GuildFeatures = Constants.GuildFeatures;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let features2;
  let features3;
  let first;
  let tmp13;
  let tmp14;
  let tmp29;
  let tmp32;
  _require = id;
  const obj = require("react");
  const cResult = obj.c(10);
  const tmp5 = useCanSeeEventsInChannelListDefault(id.id);
  const obj2 = require("canReviewGuildMemberApplications");
  let canReviewGuildMemberApplications = obj2.useCanReviewGuildMemberApplications(id.id);
  const obj3 = require("useRoleSubscriptionsVisibleInGuild");
  const showRoleSubscriptionsInChannelList = obj3.useShowRoleSubscriptionsInChannelList(id.id);
  const obj4 = require("useGuildShopVisibleInGuild");
  const guildShopVisibleInGuild = obj4.useGuildShopVisibleInGuild(id);
  const obj5 = require("SlayerStorefrontUtils");
  const result = obj5.hasSocialLayerStorefront(id);
  const obj6 = require("OnboardingHomeUtils");
  const canSeeOnboardingHome = obj6.useCanSeeOnboardingHome(id.id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingHomeSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function o() {
      return GuildOnboardingHomeSettingsStore.getNewMemberActions(id.id);
    };
    const items1 = [id.id];
    cResult[1] = id.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp14 = items1;
    tmp13 = fn;
  } else {
    tmp13 = cResult[2];
    tmp14 = cResult[3];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp13, tmp14);
  const tmpResult10 = require("VibegrationsUtils");
  const canAccessVibegrations = tmpResult10.useCanAccessVibegrations(id, "useGuildActionRows");
  const tmp16 = useIsNewMemberDefault(id.id);
  const tmpResult11 = require("MemberActionUtils");
  const allActionsCompleted = tmpResult11.useAllActionsCompleted(id.id);
  const tmpResult12 = require("MemberSafetyPermissionsUtils");
  const canAccessMemberSafetyPage = tmpResult12.useCanAccessMemberSafetyPage(id.id);
  const features = id.features;
  const tmpResult13 = require("canUseGuildSpace");
  const canUseGuildSpace = tmpResult13.useCanUseGuildSpace(id.id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const tmp24 = useHasAllocateBoostPermissionDefault(id.id);
  const tmpResult14 = require("MobileBoostProgressBarExperiment");
  const mobileBoostProgressBarEnabled = tmpResult14.useMobileBoostProgressBarEnabled("useGuildActionRows");
  const tmp26 = useTotalPossibleBoostCountDefault(id);
  const tmpResult15 = require("GuildOfficialMessageUtils");
  const isGuildOfficialMessagesEnabled = tmpResult15.useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const tmpResult16 = require("GameServerExperiment");
  const gameServerEnabled = tmpResult16.useGameServerEnabled(id.id, "useGuildActionRows");
  if (cResult[4] !== id.features) {
    const features4 = id.features;
    const hasItem3 = features4.has(tmp20.GAME_SERVERS);
    cResult[4] = id.features;
    cResult[5] = hasItem3;
    tmp29 = hasItem3;
  } else {
    tmp29 = cResult[5];
  }
  const tmpResult17 = require("GameServerTabAlwaysOnExperiment");
  const isGameServerTabAlwaysOnEnabled = tmpResult17.useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  if (cResult[6] === gameServerEnabled) {
    if (cResult[7] === tmp29) {
      if (cResult[8] === isGameServerTabAlwaysOnEnabled) {
        tmp32 = cResult[9];
      }
      const items2 = [];
      const tmpResult18 = require("useSelectedDismissibleContent");
      const first1 = _slicedToArray(tmpResult18.useSelectedDismissibleContent(tmp32, undefined, true), 1)[0];
      if (hasItem) {
        items2.push(ChannelListGuildActionRow.GUILD_HUB_HEADER_OPTIONS);
      }
      if (!allActionsCompleted) {
        if (canSeeOnboardingHome) {
          if (tmp16) {
            if (null != stateFromStores) {
              if (stateFromStores.length > 0) {
                items2.push(ChannelListGuildActionRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR);
              }
              const tmp43 = !hasItem && canSeeOnboardingHome;
              if (tmp43) {
                items2.push(ChannelListGuildActionRow.GUILD_HOME);
              }
              if (canUseGuildSpace) {
                items2.push(ChannelListGuildActionRow.GUILD_SPACE);
              }
              if (tmp5) {
                items2.push(ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS);
              }
              const tmp50 = !hasItem && hasItem1;
              if (tmp50) {
                items2.push(ChannelListGuildActionRow.CHANNELS_AND_ROLES);
              }
              if (showRoleSubscriptionsInChannelList) {
                items2.push(ChannelListGuildActionRow.GUILD_ROLE_SUBSCRIPTIONS);
              }
              if (guildShopVisibleInGuild) {
                items2.push(ChannelListGuildActionRow.GUILD_SHOP);
              }
              if (result) {
                items2.push(ChannelListGuildActionRow.GUILD_GAME_SHOP);
              }
              if (canReviewGuildMemberApplications) {
                const features5 = id.features;
                canReviewGuildMemberApplications = features5.has(tmp20.MEMBER_VERIFICATION_MANUAL_APPROVAL);
              }
              if (canReviewGuildMemberApplications) {
                items2.push(ChannelListGuildActionRow.GUILD_MOD_DASH_MEMBER_SAFETY);
              }
              if (tmp24) {
                items2.push(ChannelListGuildActionRow.GUILD_BOOSTS);
              }
              if (isGuildOfficialMessagesEnabled) {
                items2.push(ChannelListGuildActionRow.GUILD_OFFICIAL_MESSAGES);
              }
              if (gameServerEnabled) {
                if (tmp29) {
                  items2.push(ChannelListGuildActionRow.GAME_SERVERS);
                } else if (null != first1) {
                  items2.push(ChannelListGuildActionRow.GAME_SERVERS_EMPTY);
                }
              }
              if (canAccessVibegrations) {
                items2.push(ChannelListGuildActionRow.GUILD_VIBEGRATIONS);
              }
              return items2;
            }
          }
        }
      }
      const tmp40 = id.premiumProgressBarEnabled && mobileBoostProgressBarEnabled && tmp26 > 0;
      if (tmp40) {
        items2.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
      }
    }
  }
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      let items3;
      if (!tmp29) {
        items3 = [require("dismissible_content").DismissibleContent.EMPTY_GAME_SERVER_TAB];
      }
      cResult[6] = gameServerEnabled;
      cResult[7] = tmp29;
      cResult[8] = isGameServerTabAlwaysOnEnabled;
      cResult[9] = items3;
      tmp32 = items3;
    }
  }
  items3 = [];
}) : ((id) => {
  let features2;
  let features3;
  _require = id;
  const tmp2 = useCanSeeEventsInChannelListDefault(id.id);
  const obj = require("canReviewGuildMemberApplications");
  let canReviewGuildMemberApplications = obj.useCanReviewGuildMemberApplications(id.id);
  const obj2 = require("useRoleSubscriptionsVisibleInGuild");
  const showRoleSubscriptionsInChannelList = obj2.useShowRoleSubscriptionsInChannelList(id.id);
  const obj3 = require("useGuildShopVisibleInGuild");
  const guildShopVisibleInGuild = obj3.useGuildShopVisibleInGuild(id);
  const obj4 = require("SlayerStorefrontUtils");
  const result = obj4.hasSocialLayerStorefront(id);
  const obj5 = require("OnboardingHomeUtils");
  const canSeeOnboardingHome = obj5.useCanSeeOnboardingHome(id.id);
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [id.id];
  const obj6 = require("useStateFromStores");
  const stateFromStores = obj6.useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getNewMemberActions(id.id), items1);
  const obj7 = require("VibegrationsUtils");
  const canAccessVibegrations = obj7.useCanAccessVibegrations(id, "useGuildActionRows");
  const tmp10 = useIsNewMemberDefault(id.id);
  const obj8 = require("MemberActionUtils");
  const allActionsCompleted = obj8.useAllActionsCompleted(id.id);
  const obj9 = require("MemberSafetyPermissionsUtils");
  const canAccessMemberSafetyPage = obj9.useCanAccessMemberSafetyPage(id.id);
  const features = id.features;
  const obj10 = require("canUseGuildSpace");
  const canUseGuildSpace = obj10.useCanUseGuildSpace(id.id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const tmp18 = useHasAllocateBoostPermissionDefault(id.id);
  const obj11 = require("MobileBoostProgressBarExperiment");
  const mobileBoostProgressBarEnabled = obj11.useMobileBoostProgressBarEnabled("useGuildActionRows");
  const tmp20 = useTotalPossibleBoostCountDefault(id);
  const obj12 = require("GuildOfficialMessageUtils");
  const isGuildOfficialMessagesEnabled = obj12.useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const obj13 = require("GameServerExperiment");
  const gameServerEnabled = obj13.useGameServerEnabled(id.id, "useGuildActionRows");
  const features4 = id.features;
  const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
  const obj14 = require("GameServerTabAlwaysOnExperiment");
  const isGameServerTabAlwaysOnEnabled = obj14.useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  require("useSelectedDismissibleContent");
  const tmp14 = GuildFeatures;
  const tmp3 = _require;
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      let items2;
      if (!hasItem3) {
        items2 = [tmp3(2035).DismissibleContent.EMPTY_GAME_SERVER_TAB];
      }
      const items3 = [];
      const first = _slicedToArray(tmp26(items2, undefined, true), 1)[0];
      if (hasItem) {
        items3.push(ChannelListGuildActionRow.GUILD_HUB_HEADER_OPTIONS);
      }
      if (!allActionsCompleted) {
        if (canSeeOnboardingHome) {
          if (tmp10) {
            if (null != stateFromStores) {
              if (stateFromStores.length > 0) {
                items3.push(ChannelListGuildActionRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR);
              }
              const tmp37 = !hasItem && canSeeOnboardingHome;
              if (tmp37) {
                items3.push(ChannelListGuildActionRow.GUILD_HOME);
              }
              if (canUseGuildSpace) {
                items3.push(ChannelListGuildActionRow.GUILD_SPACE);
              }
              if (tmp2) {
                items3.push(ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS);
              }
              const tmp44 = !hasItem && hasItem1;
              if (tmp44) {
                items3.push(ChannelListGuildActionRow.CHANNELS_AND_ROLES);
              }
              if (showRoleSubscriptionsInChannelList) {
                items3.push(ChannelListGuildActionRow.GUILD_ROLE_SUBSCRIPTIONS);
              }
              if (guildShopVisibleInGuild) {
                items3.push(ChannelListGuildActionRow.GUILD_SHOP);
              }
              if (result) {
                items3.push(ChannelListGuildActionRow.GUILD_GAME_SHOP);
              }
              if (canReviewGuildMemberApplications) {
                const features5 = id.features;
                canReviewGuildMemberApplications = features5.has(tmp14.MEMBER_VERIFICATION_MANUAL_APPROVAL);
              }
              if (canReviewGuildMemberApplications) {
                items3.push(ChannelListGuildActionRow.GUILD_MOD_DASH_MEMBER_SAFETY);
              }
              if (tmp18) {
                items3.push(ChannelListGuildActionRow.GUILD_BOOSTS);
              }
              if (isGuildOfficialMessagesEnabled) {
                items3.push(ChannelListGuildActionRow.GUILD_OFFICIAL_MESSAGES);
              }
              if (gameServerEnabled) {
                if (hasItem3) {
                  items3.push(ChannelListGuildActionRow.GAME_SERVERS);
                } else if (null != first) {
                  items3.push(ChannelListGuildActionRow.GAME_SERVERS_EMPTY);
                }
              }
              if (canAccessVibegrations) {
                items3.push(ChannelListGuildActionRow.GUILD_VIBEGRATIONS);
              }
              return items3;
            }
          }
        }
      }
      const tmp34 = id.premiumProgressBarEnabled && mobileBoostProgressBarEnabled && tmp20 > 0;
      if (tmp34) {
        items3.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
      }
    }
  }
  items2 = [];
});
let result = size.fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default tmp2;
