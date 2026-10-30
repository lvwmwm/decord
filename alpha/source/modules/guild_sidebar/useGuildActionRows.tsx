// Module ID: 18268
// Function ID: 18269
// Name: useGuildActionRows
// Dependencies: [32, 7392, 7706, 1072, 13880, 7432, 7418, 7430, 7398, 7391, 563, 7413, 7394, 13786, 7433, 7396, 14037, 18228, 7435, 5243, 18269, 7563, 4842, 2]
// Exports: default

// Module 18268 (useGuildActionRows)
import Constants from "Constants" /* 1072 */;
import useIsNewMemberDefault from "useIsNewMember" /* 7394 */;
import GuildSidebarConstants from "GuildSidebarConstants" /* 7706 */;
import useCanSeeEventsInChannelListDefault from "useCanSeeEventsInChannelList" /* 13880 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 14037 */;
import useTotalPossibleBoostCountDefault from "useTotalPossibleBoostCount" /* 18228 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7392 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ChannelListGuildActionRow = GuildSidebarConstants.ChannelListGuildActionRow;
const GuildFeatures = Constants.GuildFeatures;
let result = size.fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default function useGuildActionRows(id) {
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
        items2 = [tmp3(4842).DismissibleContent.EMPTY_GAME_SERVER_TAB];
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
};
