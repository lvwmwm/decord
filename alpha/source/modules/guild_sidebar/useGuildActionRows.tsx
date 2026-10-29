// Module ID: 18208
// Function ID: 18209
// Name: useGuildActionRows
// Dependencies: [32, 7385, 7701, 1084, 558, 576, 13733, 7424, 7410, 7422, 7390, 7384, 573, 7405, 7386, 13639, 7425, 7388, 13903, 18168, 7427, 5237, 18209, 4841, 7555, 2]

// Module 18208 (useGuildActionRows)
import Constants from "Constants" /* 1084 */;
import useIsNewMemberDefault from "useIsNewMember" /* 7386 */;
import GuildSidebarConstants from "GuildSidebarConstants" /* 7701 */;
import useCanSeeEventsInChannelListDefault from "useCanSeeEventsInChannelList" /* 13733 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 13903 */;
import useTotalPossibleBoostCountDefault from "useTotalPossibleBoostCount" /* 18168 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7385 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ChannelListGuildActionRow = GuildSidebarConstants.ChannelListGuildActionRow;
const GuildFeatures = Constants.GuildFeatures;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildActionRows(id) {
  let features2;
  let features3;
  let first;
  let tmp13;
  let tmp14;
  let tmp28;
  let tmp31;
  _require = id;
  const obj = require("react");
  const cResult = obj.c(11);
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
    const fn = function t() {
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
  const tmpResult9 = require("ConjureUtils");
  const canAccessConjure = tmpResult9.useCanAccessConjure(id, "useGuildActionRows");
  const tmp16 = useIsNewMemberDefault(id.id);
  const tmpResult10 = require("MemberActionUtils");
  const allActionsCompleted = tmpResult10.useAllActionsCompleted(id.id);
  const tmpResult11 = require("MemberSafetyPermissionsUtils");
  const canAccessMemberSafetyPage = tmpResult11.useCanAccessMemberSafetyPage(id.id);
  const features = id.features;
  const tmpResult12 = require("canUseGuildSpace");
  const canUseGuildSpace = tmpResult12.useCanUseGuildSpace(id.id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const tmp24 = useHasAllocateBoostPermissionDefault(id.id);
  const tmp25 = useTotalPossibleBoostCountDefault(id);
  const tmpResult13 = require("GuildOfficialMessageUtils");
  const isGuildOfficialMessagesEnabled = tmpResult13.useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const tmpResult14 = require("GameServerExperiment");
  const gameServerEnabled = tmpResult14.useGameServerEnabled(id.id, "useGuildActionRows");
  if (cResult[4] !== id.features) {
    const features4 = id.features;
    const hasItem3 = features4.has(tmp20.GAME_SERVERS);
    cResult[4] = id.features;
    cResult[5] = hasItem3;
    tmp28 = hasItem3;
  } else {
    tmp28 = cResult[5];
  }
  const tmpResult15 = require("GameServerTabAlwaysOnExperiment");
  const isGameServerTabAlwaysOnEnabled = tmpResult15.useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  if (cResult[6] === gameServerEnabled) {
    if (cResult[7] === tmp28) {
      let tmp32;
      if (cResult[8] === isGameServerTabAlwaysOnEnabled) {
        tmp31 = cResult[9];
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { bypassAutoDismiss: true };
        cResult[10] = obj7;
        tmp32 = obj7;
      } else {
        tmp32 = cResult[10];
      }
      const items2 = [];
      const tmpResult16 = require("useSelectedDismissibleContent");
      const first1 = _slicedToArray(tmpResult16.useSelectedDismissibleContent(tmp31, tmp32), 1)[0];
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
              const tmp42 = !hasItem && canSeeOnboardingHome;
              if (tmp42) {
                items2.push(ChannelListGuildActionRow.GUILD_HOME);
              }
              if (canUseGuildSpace) {
                items2.push(ChannelListGuildActionRow.GUILD_SPACE);
              }
              if (tmp5) {
                items2.push(ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS);
              }
              const tmp49 = !hasItem && hasItem1;
              if (tmp49) {
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
                if (tmp28) {
                  items2.push(ChannelListGuildActionRow.GAME_SERVERS);
                } else if (null != first1) {
                  items2.push(ChannelListGuildActionRow.GAME_SERVERS_EMPTY);
                }
              }
              if (canAccessConjure) {
                items2.push(ChannelListGuildActionRow.GUILD_CONJURE);
              }
              return items2;
            }
          }
        }
      }
      const premiumProgressBarEnabled = id.premiumProgressBarEnabled && tmp25 > 0;
      if (premiumProgressBarEnabled) {
        items2.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
      }
    }
  }
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      let items3;
      if (!tmp28) {
        items3 = [require("dismissible_content").DismissibleContent.EMPTY_GAME_SERVER_TAB];
      }
      cResult[6] = gameServerEnabled;
      cResult[7] = tmp28;
      cResult[8] = isGameServerTabAlwaysOnEnabled;
      cResult[9] = items3;
      tmp31 = items3;
    }
  }
  items3 = [];
}) : (function useGuildActionRows(id) {
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
  const obj7 = require("ConjureUtils");
  const canAccessConjure = obj7.useCanAccessConjure(id, "useGuildActionRows");
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
  const tmp19 = useTotalPossibleBoostCountDefault(id);
  const obj11 = require("GuildOfficialMessageUtils");
  const isGuildOfficialMessagesEnabled = obj11.useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const obj12 = require("GameServerExperiment");
  const gameServerEnabled = obj12.useGameServerEnabled(id.id, "useGuildActionRows");
  const features4 = id.features;
  const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
  const obj13 = require("GameServerTabAlwaysOnExperiment");
  const isGameServerTabAlwaysOnEnabled = obj13.useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  require("useSelectedDismissibleContent");
  const tmp14 = GuildFeatures;
  const tmp3 = _require;
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      let items2;
      if (!hasItem3) {
        items2 = [tmp3(4841).DismissibleContent.EMPTY_GAME_SERVER_TAB];
      }
      const items3 = [];
      const first = _slicedToArray(tmp25(items2, { bypassAutoDismiss: true }), 1)[0];
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
              const tmp35 = !hasItem && canSeeOnboardingHome;
              if (tmp35) {
                items3.push(ChannelListGuildActionRow.GUILD_HOME);
              }
              if (canUseGuildSpace) {
                items3.push(ChannelListGuildActionRow.GUILD_SPACE);
              }
              if (tmp2) {
                items3.push(ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS);
              }
              const tmp42 = !hasItem && hasItem1;
              if (tmp42) {
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
              if (canAccessConjure) {
                items3.push(ChannelListGuildActionRow.GUILD_CONJURE);
              }
              return items3;
            }
          }
        }
      }
      const premiumProgressBarEnabled = id.premiumProgressBarEnabled && tmp19 > 0;
      if (premiumProgressBarEnabled) {
        items3.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
      }
    }
  }
  items2 = [];
});
let result = size.fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default tmp2;
