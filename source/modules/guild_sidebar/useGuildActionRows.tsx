// Module ID: 15138
// Function ID: 115218
// Name: useGuildActionRows
// Dependencies: [57, 4334, 5760, 653, 11408, 12560, 12548, 12558, 5609, 5605, 624, 5629, 5606, 11378, 6010, 5607, 11541, 15045, 15103, 5994, 4042, 15139, 8379, 1334, 2]
// Exports: default

// Module 15138 (useGuildActionRows)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ChannelListGuildActionRow } from "ChannelListGuildActionRow";
import { GuildFeatures } from "ME";

const require = arg1;
let result = require("ChannelListGuildActionRow").fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default function useGuildActionRows(id) {
  let features2;
  let features3;
  const _require = id;
  const tmp = importDefault(11408)(id.id);
  let canReviewGuildMemberApplications = _require(12560).useCanReviewGuildMemberApplications(id.id);
  const obj = _require(12560);
  const showRoleSubscriptionsInChannelList = _require(12548).useShowRoleSubscriptionsInChannelList(id.id);
  const obj2 = _require(12548);
  const guildShopVisibleInGuild = _require(12558).useGuildShopVisibleInGuild(id);
  const obj3 = _require(12558);
  const result = _require(5609).hasSocialLayerStorefront(id);
  const obj4 = _require(5609);
  const canSeeOnboardingHome = _require(5605).useCanSeeOnboardingHome(id.id);
  const obj5 = _require(5605);
  const items = [_isNativeReflectConstruct];
  const items1 = [id.id];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_4.getNewMemberActions(id.id), items1);
  const obj6 = _require(624);
  const canManageVibegrations = _require(5629).useCanManageVibegrations(id, "useGuildActionRows");
  const obj7 = _require(5629);
  const tmp8 = importDefault(5606)(id.id);
  const allActionsCompleted = _require(11378).useAllActionsCompleted(id.id);
  const obj8 = _require(11378);
  const canAccessMemberSafetyPage = _require(6010).useCanAccessMemberSafetyPage(id.id);
  const obj9 = _require(6010);
  const items2 = [];
  const features = id.features;
  const canUseGuildSpace = _require(5607).useCanUseGuildSpace(id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const obj10 = _require(5607);
  const tmp15 = importDefault(11541)(id.id);
  const mobileBoostProgressBarEnabled = _require(15045).useMobileBoostProgressBarEnabled("useGuildActionRows");
  const obj11 = _require(15045);
  const tmp17 = importDefault(15103)(id);
  const isGuildOfficialMessagesEnabled = _require(5994).useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const obj12 = _require(5994);
  const gameServerEnabled = _require(4042).useGameServerEnabled(id.id, "useGuildActionRows");
  const features4 = id.features;
  const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
  const obj13 = _require(4042);
  const isGameServerTabAlwaysOnEnabled = _require(15139).useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  _require(8379);
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      if (!hasItem3) {
        let items3 = [_require(1334).DismissibleContent.EMPTY_GAME_SERVER_TAB];
      }
      if (canUseGuildSpace) {
        items2.push(ChannelListGuildActionRow.GUILD_SPACE);
      }
      if (hasItem) {
        items2.push(ChannelListGuildActionRow.GUILD_HUB_HEADER_OPTIONS);
      }
      if (!allActionsCompleted) {
        if (canSeeOnboardingHome) {
          if (tmp8) {
            if (null != stateFromStores) {
              if (stateFromStores.length > 0) {
                items2.push(ChannelListGuildActionRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR);
              }
              if (tmp37) {
                items2.push(ChannelListGuildActionRow.GUILD_HOME);
              }
              if (tmp) {
                items2.push(ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS);
              }
              if (tmp42) {
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
                canReviewGuildMemberApplications = features5.has(GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
              }
              if (canReviewGuildMemberApplications) {
                items2.push(ChannelListGuildActionRow.GUILD_MOD_DASH_MEMBER_SAFETY);
              }
              if (tmp15) {
                items2.push(ChannelListGuildActionRow.GUILD_BOOSTS);
              }
              if (isGuildOfficialMessagesEnabled) {
                items2.push(ChannelListGuildActionRow.GUILD_OFFICIAL_MESSAGES);
              }
              if (gameServerEnabled) {
                if (hasItem3) {
                  items2.push(ChannelListGuildActionRow.GAME_SERVERS);
                } else if (null != callback(tmp23(items3, undefined, true), 1)[0]) {
                  items2.push(ChannelListGuildActionRow.GAME_SERVERS_EMPTY);
                }
              }
              if (canManageVibegrations) {
                items2.push(ChannelListGuildActionRow.GUILD_VIBEGRATIONS);
              }
              return items2;
            }
          }
        }
      }
      if (tmp34) {
        items2.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
      }
      tmp34 = id.premiumProgressBarEnabled && mobileBoostProgressBarEnabled && tmp17 > 0;
    }
  }
  items3 = [];
};
