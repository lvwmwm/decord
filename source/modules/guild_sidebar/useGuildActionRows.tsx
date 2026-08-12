// Module ID: 15455
// Function ID: 15456
// Name: useGuildActionRows
// Dependencies: [32, 4545, 7035, 676, 11806, 5923, 5909, 5921, 5887, 5883, 647, 5907, 5884, 11720, 5924, 5885, 11934, 15354, 15417, 5926, 4255, 15456, 6063, 1377, 2]
// Exports: default

// Module 15455 (useGuildActionRows)
import _slicedToArray from "_slicedToArray";
import handleSettingsLoadSuccess from "handleSettingsLoadSuccess";
import { ChannelListGuildActionRow } from "ChannelListGuildActionRow";
import { GuildFeatures } from "ME";

const require = arg1;
let result = require("ChannelListGuildActionRow").fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default function useGuildActionRows(id) {
  let features2;
  let features3;
  const _require = id;
  const tmp2 = importDefault(11806)(id.id);
  const tmp3 = _require;
  let canReviewGuildMemberApplications = _require(5923).useCanReviewGuildMemberApplications(id.id);
  const obj = _require(5923);
  const showRoleSubscriptionsInChannelList = _require(5909).useShowRoleSubscriptionsInChannelList(id.id);
  const obj2 = _require(5909);
  const guildShopVisibleInGuild = _require(5921).useGuildShopVisibleInGuild(id);
  const obj3 = _require(5921);
  const result = _require(5887).hasSocialLayerStorefront(id);
  const obj4 = _require(5887);
  const canSeeOnboardingHome = _require(5883).useCanSeeOnboardingHome(id.id);
  const obj5 = _require(5883);
  const items = [handleSettingsLoadSuccess];
  const items1 = [id.id];
  const stateFromStores = _require(647).useStateFromStores(items, () => outer1_4.getNewMemberActions(id.id), items1);
  const obj6 = _require(647);
  const canManageVibegrations = _require(5907).useCanManageVibegrations(id, "useGuildActionRows");
  const obj7 = _require(5907);
  const tmp10 = importDefault(5884)(id.id);
  const allActionsCompleted = _require(11720).useAllActionsCompleted(id.id);
  const obj8 = _require(11720);
  const canAccessMemberSafetyPage = _require(5924).useCanAccessMemberSafetyPage(id.id);
  const obj9 = _require(5924);
  const features = id.features;
  const canUseGuildSpace = _require(5885).useCanUseGuildSpace(id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const obj10 = _require(5885);
  const tmp14 = GuildFeatures;
  const tmp18 = importDefault(11934)(id.id);
  const mobileBoostProgressBarEnabled = _require(15354).useMobileBoostProgressBarEnabled("useGuildActionRows");
  const obj11 = _require(15354);
  const tmp20 = importDefault(15417)(id);
  const isGuildOfficialMessagesEnabled = _require(5926).useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const obj12 = _require(5926);
  const gameServerEnabled = _require(4255).useGameServerEnabled(id.id, "useGuildActionRows");
  const features4 = id.features;
  const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
  const obj13 = _require(4255);
  const isGameServerTabAlwaysOnEnabled = _require(15456).useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  _require(6063);
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      if (!hasItem3) {
        let items2 = [tmp3(1377).DismissibleContent.EMPTY_GAME_SERVER_TAB];
      }
      const items3 = [];
      if (canUseGuildSpace) {
        items3.push(ChannelListGuildActionRow.GUILD_SPACE);
      }
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
              let tmp38 = !hasItem;
              if (!hasItem) {
                tmp38 = canSeeOnboardingHome;
              }
              if (tmp38) {
                items3.push(ChannelListGuildActionRow.GUILD_HOME);
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
                } else if (null != callback(tmp26(items2, undefined, true), 1)[0]) {
                  items3.push(ChannelListGuildActionRow.GAME_SERVERS_EMPTY);
                }
              }
              if (canManageVibegrations) {
                items3.push(ChannelListGuildActionRow.GUILD_VIBEGRATIONS);
              }
              return items3;
            }
          }
        }
      }
      let tmp35 = id.premiumProgressBarEnabled && mobileBoostProgressBarEnabled;
      if (tmp35) {
        tmp35 = tmp20 > 0;
      }
      if (tmp35) {
        items3.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
      }
    }
  }
  items2 = [];
};
