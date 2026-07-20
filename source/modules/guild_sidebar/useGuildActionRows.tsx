// Module ID: 14947
// Function ID: 112500
// Name: useGuildActionRows
// Dependencies: []
// Exports: default

// Module 14947 (useGuildActionRows)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const ChannelListGuildActionRow = arg1(dependencyMap[2]).ChannelListGuildActionRow;
const GuildFeatures = arg1(dependencyMap[3]).GuildFeatures;
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/guild_sidebar/useGuildActionRows.tsx");

export default function useGuildActionRows(id) {
  let features2;
  let features3;
  const arg1 = id;
  const tmp = importDefault(dependencyMap[4])(id.id);
  let canReviewGuildMemberApplications = arg1(dependencyMap[5]).useCanReviewGuildMemberApplications(id.id);
  const obj = arg1(dependencyMap[5]);
  const showRoleSubscriptionsInChannelList = arg1(dependencyMap[6]).useShowRoleSubscriptionsInChannelList(id.id);
  const obj2 = arg1(dependencyMap[6]);
  const guildShopVisibleInGuild = arg1(dependencyMap[7]).useGuildShopVisibleInGuild(id);
  const obj3 = arg1(dependencyMap[7]);
  const result = arg1(dependencyMap[8]).hasSocialLayerStorefront(id);
  const obj4 = arg1(dependencyMap[8]);
  const canSeeOnboardingHome = arg1(dependencyMap[9]).useCanSeeOnboardingHome(id.id);
  const obj5 = arg1(dependencyMap[9]);
  const items = [closure_4];
  const items1 = [id.id];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => newMemberActions.getNewMemberActions(arg0.id), items1);
  const obj6 = arg1(dependencyMap[10]);
  const tmp7 = importDefault(dependencyMap[11])(id.id);
  const allActionsCompleted = arg1(dependencyMap[12]).useAllActionsCompleted(id.id);
  const obj7 = arg1(dependencyMap[12]);
  const canAccessMemberSafetyPage = arg1(dependencyMap[13]).useCanAccessMemberSafetyPage(id.id);
  const items2 = [];
  const features = id.features;
  const hasItem = features.has(GuildFeatures.HUB);
  ({ features: features2, features: features3 } = id);
  const hasItem1 = features2.has(GuildFeatures.COMMUNITY);
  const hasItem2 = features3.has(GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
  const obj8 = arg1(dependencyMap[13]);
  const tmp13 = importDefault(dependencyMap[14])(id.id);
  const mobileBoostProgressBarEnabled = arg1(dependencyMap[15]).useMobileBoostProgressBarEnabled("useGuildActionRows");
  const obj9 = arg1(dependencyMap[15]);
  const tmp15 = importDefault(dependencyMap[16])(id);
  const isGuildOfficialMessagesEnabled = arg1(dependencyMap[17]).useIsGuildOfficialMessagesEnabled(id.id, "useGuildActionRows");
  const obj10 = arg1(dependencyMap[17]);
  const gameServerEnabled = arg1(dependencyMap[18]).useGameServerEnabled(id.id, "useGuildActionRows");
  const features4 = id.features;
  const hasItem3 = features4.has(GuildFeatures.GAME_SERVERS);
  const obj11 = arg1(dependencyMap[18]);
  const isGameServerTabAlwaysOnEnabled = arg1(dependencyMap[19]).useIsGameServerTabAlwaysOnEnabled("useGuildActionRows");
  arg1(dependencyMap[20]);
  if (gameServerEnabled) {
    if (isGameServerTabAlwaysOnEnabled) {
      if (!hasItem3) {
        let items3 = [arg1(dependencyMap[21]).DismissibleContent.EMPTY_GAME_SERVER_TAB];
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
              if (tmp33) {
                items2.push(ChannelListGuildActionRow.GUILD_HOME);
              }
              if (tmp) {
                items2.push(ChannelListGuildActionRow.GUILD_SCHEDULED_EVENTS);
              }
              if (tmp38) {
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
              if (tmp13) {
                items2.push(ChannelListGuildActionRow.GUILD_BOOSTS);
              }
              if (isGuildOfficialMessagesEnabled) {
                items2.push(ChannelListGuildActionRow.GUILD_OFFICIAL_MESSAGES);
              }
              if (gameServerEnabled) {
                if (hasItem3) {
                  items2.push(ChannelListGuildActionRow.GAME_SERVERS);
                } else if (null != callback(tmp21(items3, undefined, true), 1)[0]) {
                  items2.push(ChannelListGuildActionRow.GAME_SERVERS_EMPTY);
                }
              }
              return items2;
            }
          }
        }
      }
      if (tmp30) {
        items2.push(ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR);
      }
      const tmp30 = id.premiumProgressBarEnabled && mobileBoostProgressBarEnabled && tmp15 > 0;
    }
  }
  items3 = [];
};
