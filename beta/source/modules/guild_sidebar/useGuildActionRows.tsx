// Module ID: 15889
// Function ID: 15890
// Name: useGuildActionRows
// Dependencies: [32, 5023, 6954, 1074, 11861, 6682, 6668, 6680, 6647, 6643, 563, 5370, 6644, 11771, 6683, 6645, 12009, 15789, 15854, 6685, 4747, 15890, 6806, 2029, 2]
// Exports: default

// Module 15889 (useGuildActionRows)
import Constants from "Constants" /* 1074 */;
import useIsNewMemberDefault from "useIsNewMember" /* 6644 */;
import GuildSidebarConstants from "GuildSidebarConstants" /* 6954 */;
import useCanSeeEventsInChannelListDefault from "useCanSeeEventsInChannelList" /* 11861 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12009 */;
import useTotalPossibleBoostCountDefault from "useTotalPossibleBoostCount" /* 15854 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5023 */;
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
        items2 = [tmp3(2029).DismissibleContent.EMPTY_GAME_SERVER_TAB];
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
};
