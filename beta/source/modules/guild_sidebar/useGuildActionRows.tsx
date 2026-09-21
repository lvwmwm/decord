// Module ID: 16597
// Function ID: 16598
// Name: useGuildActionRows
// Dependencies: [32, 4945, 7781, 1078, 558, 568, 12520, 7508, 7494, 7506, 7473, 7469, 565, 5276, 7470, 12436, 7509, 7471, 12676, 16496, 16562, 7511, 4671, 16598, 2031, 7632, 2]

// Module 16597 (useGuildActionRows)
import useIsNewMemberDefault from "useIsNewMember" /* 7470 */;
import useCanSeeEventsInChannelListDefault from "useCanSeeEventsInChannelList" /* 12520 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12676 */;
import useTotalPossibleBoostCountDefault from "useTotalPossibleBoostCount" /* 16562 */;
import _slicedToArray from "module_32" /* 32 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 4945 */;

const require = globalThis.__r;

const require = fn;
const ChannelListGuildActionRow = fn(7781).ChannelListGuildActionRow;
const GuildFeatures = fn(1078).GuildFeatures;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  _require = id;
  const cResult = require("c").c(10);
  const obj = require("c");
  const tmp5 = useCanSeeEventsInChannelListDefault(id.id);
  let canReviewGuildMemberApplications = require("canReviewGuildMemberApplications").useCanReviewGuildMemberApplications(id.id);
  const obj2 = require("canReviewGuildMemberApplications");
  const showRoleSubscriptionsInChannelList = require("useRoleSubscriptionsVisibleInGuild").useShowRoleSubscriptionsInChannelList(id.id);
  const obj3 = require("useRoleSubscriptionsVisibleInGuild");
  const guildShopVisibleInGuild = require("useGuildShopVisibleInGuild").useGuildShopVisibleInGuild(id);
  const obj4 = require("useGuildShopVisibleInGuild");
  const result = require("SlayerStorefrontUtils").hasSocialLayerStorefront(id);
  const obj5 = require("SlayerStorefrontUtils");
  const canSeeOnboardingHome = require("OnboardingHomeUtils").useCanSeeOnboardingHome(id.id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingHomeSettingsStore];
    cResult[0] = items;
    let first = items;
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
    let tmp14 = items1;
    let tmp13 = fn;
  } else {
    tmp13 = cResult[2];
    tmp14 = cResult[3];
  }
  const obj6 = require("OnboardingHomeUtils");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp13, tmp14);
  const tmpResult = require("useStateFromStores");
  const canAccessVibegrations = require("VibegrationsUtils").useCanAccessVibegrations(id, "useGuildActionRows");
  const tmpResult10 = require("VibegrationsUtils");
  const tmp16 = useIsNewMemberDefault(id.id);
  const allActionsCompleted = require("MemberActionUtils").useAllActionsCompleted(id.id);
  const tmpResult11 = require("MemberActionUtils");
  const canAccessMemberSafetyPage = require("MemberSafetyPermissionsUtils").useCanAccessMemberSafetyPage(id.id);
  const tmpResult12 = require("MemberSafetyPermissionsUtils");
  const features = id.features;
  const canUseGuildSpace = require("canUseGuildSpace").useCanUseGuildSpace(id.id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const tmpResult13 = require("canUseGuildSpace");
  const tmp24 = useHasAllocateBoostPermissionDefault(id.id);
  const mobileBoostProgressBarEnabled = require("MobileBoostProgressBarExperiment").useMobileBoostProgressBarEnabled("useGuildActionRows");
  const tmpResult14 = require("MobileBoostProgressBarExperiment");
  const tmp26 = useTotalPossibleBoostCountDefault(id);
  const isGuildOfficialMessagesEnabled = require("GuildOfficialMessageUtils").useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const tmpResult15 = require("GuildOfficialMessageUtils");
  const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(id.id, "useGuildActionRows");
  if (cResult[4] !== id.features) {
    const features4 = id.features;
    const hasItem3 = features4.has(tmp20.GAME_SERVERS);
    cResult[4] = id.features;
    cResult[5] = hasItem3;
    let tmp29 = hasItem3;
  } else {
    tmp29 = cResult[5];
  }
  const tmpResult16 = require("GameServerExperiment");
  const isGameServerTabAlwaysOnEnabled = require("GameServerTabAlwaysOnExperiment").useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  if (cResult[6] === gameServerEnabled) {
    if (cResult[7] === tmp29) {
      if (cResult[8] === isGameServerTabAlwaysOnEnabled) {
        const items2 = [];
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
                let tmp42 = !hasItem;
                if (!hasItem) {
                  tmp42 = canSeeOnboardingHome;
                }
                if (tmp42) {
                  items2.push(ChannelListGuildActionRow.GUILD_HOME);
                }
                if (canUseGuildSpace) {
                  items2.push(ChannelListGuildActionRow.GUILD_SPACE);
                }
                if (tmp5) {
                  items2.push(ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS);
                }
                let tmp49 = !hasItem;
                if (!hasItem) {
                  tmp49 = hasItem1;
                }
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
                  if (tmp29) {
                    items2.push(ChannelListGuildActionRow.GAME_SERVERS);
                  } else if (null != _slicedToArray(tmpResult18.useSelectedDismissibleContent(cResult[9], undefined, true), 1)[0]) {
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
        let tmp39 = id.premiumProgressBarEnabled && mobileBoostProgressBarEnabled;
        if (tmp39) {
          tmp39 = tmp26 > 0;
        }
        if (tmp39) {
          items2.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
        }
        tmpResult18 = tmp(7632);
      }
    }
  }
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      if (!tmp29) {
        let items3 = [tmp(2031).DismissibleContent.EMPTY_GAME_SERVER_TAB];
      }
      cResult[6] = gameServerEnabled;
      cResult[7] = tmp29;
      cResult[8] = isGameServerTabAlwaysOnEnabled;
      cResult[9] = items3;
    }
  }
  items3 = [];
}) : ((id) => {
  _require = id;
  const tmp2 = useCanSeeEventsInChannelListDefault(id.id);
  const tmp3 = _require;
  let canReviewGuildMemberApplications = require("canReviewGuildMemberApplications").useCanReviewGuildMemberApplications(id.id);
  const obj = require("canReviewGuildMemberApplications");
  const showRoleSubscriptionsInChannelList = require("useRoleSubscriptionsVisibleInGuild").useShowRoleSubscriptionsInChannelList(id.id);
  const obj2 = require("useRoleSubscriptionsVisibleInGuild");
  const guildShopVisibleInGuild = require("useGuildShopVisibleInGuild").useGuildShopVisibleInGuild(id);
  const obj3 = require("useGuildShopVisibleInGuild");
  const result = require("SlayerStorefrontUtils").hasSocialLayerStorefront(id);
  const obj4 = require("SlayerStorefrontUtils");
  const canSeeOnboardingHome = require("OnboardingHomeUtils").useCanSeeOnboardingHome(id.id);
  const obj5 = require("OnboardingHomeUtils");
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [id.id];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getNewMemberActions(id.id), items1);
  const obj6 = require("useStateFromStores");
  const canAccessVibegrations = require("VibegrationsUtils").useCanAccessVibegrations(id, "useGuildActionRows");
  const obj7 = require("VibegrationsUtils");
  const tmp10 = useIsNewMemberDefault(id.id);
  const allActionsCompleted = require("MemberActionUtils").useAllActionsCompleted(id.id);
  const obj8 = require("MemberActionUtils");
  const canAccessMemberSafetyPage = require("MemberSafetyPermissionsUtils").useCanAccessMemberSafetyPage(id.id);
  const obj9 = require("MemberSafetyPermissionsUtils");
  const features = id.features;
  const canUseGuildSpace = require("canUseGuildSpace").useCanUseGuildSpace(id.id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const obj10 = require("canUseGuildSpace");
  const tmp14 = GuildFeatures;
  const tmp18 = useHasAllocateBoostPermissionDefault(id.id);
  const mobileBoostProgressBarEnabled = require("MobileBoostProgressBarExperiment").useMobileBoostProgressBarEnabled("useGuildActionRows");
  const obj11 = require("MobileBoostProgressBarExperiment");
  const tmp20 = useTotalPossibleBoostCountDefault(id);
  const isGuildOfficialMessagesEnabled = require("GuildOfficialMessageUtils").useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const obj12 = require("GuildOfficialMessageUtils");
  const gameServerEnabled = require("GameServerExperiment").useGameServerEnabled(id.id, "useGuildActionRows");
  const features4 = id.features;
  const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
  const obj13 = require("GameServerExperiment");
  const isGameServerTabAlwaysOnEnabled = require("GameServerTabAlwaysOnExperiment").useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  require("useSelectedDismissibleContent");
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      if (!hasItem3) {
        let items2 = [tmp3(2031).DismissibleContent.EMPTY_GAME_SERVER_TAB];
      }
      const items3 = [];
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
              let tmp36 = !hasItem;
              if (!hasItem) {
                tmp36 = canSeeOnboardingHome;
              }
              if (tmp36) {
                items3.push(ChannelListGuildActionRow.GUILD_HOME);
              }
              if (canUseGuildSpace) {
                items3.push(ChannelListGuildActionRow.GUILD_SPACE);
              }
              if (tmp2) {
                items3.push(ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS);
              }
              let tmp43 = !hasItem;
              if (!hasItem) {
                tmp43 = hasItem1;
              }
              if (tmp43) {
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
                } else if (null != _slicedToArray(tmp26(items2, undefined, true), 1)[0]) {
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
      let tmp33 = id.premiumProgressBarEnabled && mobileBoostProgressBarEnabled;
      if (tmp33) {
        tmp33 = tmp20 > 0;
      }
      if (tmp33) {
        items3.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
      }
    }
  }
  items2 = [];
});
