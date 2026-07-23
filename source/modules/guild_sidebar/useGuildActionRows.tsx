// Module ID: 15081
// Function ID: 114769
// Name: useGuildActionRows
// Dependencies: [57, 4333, 6766, 653, 11417, 5645, 5631, 5643, 5611, 5607, 624, 5608, 11387, 5646, 5609, 11545, 14988, 15046, 5648, 4041, 15082, 5802, 1334, 2]
// Exports: default

// Module 15081 (useGuildActionRows)
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
  const tmp = importDefault(11417)(id.id);
  let canReviewGuildMemberApplications = _require(5645).useCanReviewGuildMemberApplications(id.id);
  const obj = _require(5645);
  const showRoleSubscriptionsInChannelList = _require(5631).useShowRoleSubscriptionsInChannelList(id.id);
  const obj2 = _require(5631);
  const guildShopVisibleInGuild = _require(5643).useGuildShopVisibleInGuild(id);
  const obj3 = _require(5643);
  const result = _require(5611).hasSocialLayerStorefront(id);
  const obj4 = _require(5611);
  const canSeeOnboardingHome = _require(5607).useCanSeeOnboardingHome(id.id);
  const obj5 = _require(5607);
  const items = [_isNativeReflectConstruct];
  const items1 = [id.id];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_4.getNewMemberActions(id.id), items1);
  const obj6 = _require(624);
  const tmp7 = importDefault(5608)(id.id);
  const allActionsCompleted = _require(11387).useAllActionsCompleted(id.id);
  const obj7 = _require(11387);
  const canAccessMemberSafetyPage = _require(5646).useCanAccessMemberSafetyPage(id.id);
  const obj8 = _require(5646);
  const items2 = [];
  const features = id.features;
  const canUseGuildSpace = _require(5609).useCanUseGuildSpace(id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const obj9 = _require(5609);
  const tmp14 = importDefault(11545)(id.id);
  const mobileBoostProgressBarEnabled = _require(14988).useMobileBoostProgressBarEnabled("useGuildActionRows");
  const obj10 = _require(14988);
  const tmp16 = importDefault(15046)(id);
  const isGuildOfficialMessagesEnabled = _require(5648).useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const obj11 = _require(5648);
  const gameServerEnabled = _require(4041).useGameServerEnabled(id.id, "useGuildActionRows");
  const features4 = id.features;
  const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
  const obj12 = _require(4041);
  const isGameServerTabAlwaysOnEnabled = _require(15082).useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  _require(5802);
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
          if (tmp7) {
            if (null != stateFromStores) {
              if (stateFromStores.length > 0) {
                items2.push(ChannelListGuildActionRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR);
              }
              if (tmp36) {
                items2.push(ChannelListGuildActionRow.GUILD_HOME);
              }
              if (tmp) {
                items2.push(ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS);
              }
              if (tmp41) {
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
              if (tmp14) {
                items2.push(ChannelListGuildActionRow.GUILD_BOOSTS);
              }
              if (isGuildOfficialMessagesEnabled) {
                items2.push(ChannelListGuildActionRow.GUILD_OFFICIAL_MESSAGES);
              }
              if (gameServerEnabled) {
                if (hasItem3) {
                  items2.push(ChannelListGuildActionRow.GAME_SERVERS);
                } else if (null != callback(tmp22(items3, undefined, true), 1)[0]) {
                  items2.push(ChannelListGuildActionRow.GAME_SERVERS_EMPTY);
                }
              }
              return items2;
            }
          }
        }
      }
      if (tmp33) {
        items2.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
      }
      tmp33 = id.premiumProgressBarEnabled && mobileBoostProgressBarEnabled && tmp16 > 0;
    }
  }
  items3 = [];
};
