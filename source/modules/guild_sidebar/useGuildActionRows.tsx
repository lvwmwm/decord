// Module ID: 15241
// Function ID: 15242
// Name: useGuildActionRows
// Dependencies: [32, 4456, 6887, 676, 11630, 5778, 5764, 5776, 5742, 5738, 647, 5762, 5739, 11544, 5779, 5740, 11758, 15143, 15202, 5781, 4166, 15242, 5916, 1358, 2]
// Exports: default

// Module 15241 (useGuildActionRows)
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
  const tmp2 = importDefault(11630)(id.id);
  const tmp3 = _require;
  let canReviewGuildMemberApplications = _require(5778).useCanReviewGuildMemberApplications(id.id);
  const obj = _require(5778);
  const showRoleSubscriptionsInChannelList = _require(5764).useShowRoleSubscriptionsInChannelList(id.id);
  const obj2 = _require(5764);
  const guildShopVisibleInGuild = _require(5776).useGuildShopVisibleInGuild(id);
  const obj3 = _require(5776);
  const result = _require(5742).hasSocialLayerStorefront(id);
  const obj4 = _require(5742);
  const canSeeOnboardingHome = _require(5738).useCanSeeOnboardingHome(id.id);
  const obj5 = _require(5738);
  const items = [handleSettingsLoadSuccess];
  const items1 = [id.id];
  const stateFromStores = _require(647).useStateFromStores(items, () => outer1_4.getNewMemberActions(id.id), items1);
  const obj6 = _require(647);
  const canManageVibegrations = _require(5762).useCanManageVibegrations(id, "useGuildActionRows");
  const obj7 = _require(5762);
  const tmp10 = importDefault(5739)(id.id);
  const allActionsCompleted = _require(11544).useAllActionsCompleted(id.id);
  const obj8 = _require(11544);
  const canAccessMemberSafetyPage = _require(5779).useCanAccessMemberSafetyPage(id.id);
  const obj9 = _require(5779);
  const features = id.features;
  const canUseGuildSpace = _require(5740).useCanUseGuildSpace(id, "useGuildActionRows");
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const obj10 = _require(5740);
  const tmp14 = GuildFeatures;
  const tmp18 = importDefault(11758)(id.id);
  const mobileBoostProgressBarEnabled = _require(15143).useMobileBoostProgressBarEnabled("useGuildActionRows");
  const obj11 = _require(15143);
  const tmp20 = importDefault(15202)(id);
  const isGuildOfficialMessagesEnabled = _require(5781).useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const obj12 = _require(5781);
  const gameServerEnabled = _require(4166).useGameServerEnabled(id.id, "useGuildActionRows");
  const features4 = id.features;
  const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
  const obj13 = _require(4166);
  const isGameServerTabAlwaysOnEnabled = _require(15242).useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  _require(5916);
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      if (!hasItem3) {
        let items2 = [tmp3(1358).DismissibleContent.EMPTY_GAME_SERVER_TAB];
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
