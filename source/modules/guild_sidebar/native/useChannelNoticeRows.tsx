// Module ID: 14956
// Function ID: 112529
// Name: useChannelNoticeRows
// Dependencies: []
// Exports: default

// Module 14956 (useChannelNoticeRows)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = arg1(dependencyMap[6]).ChannelListChannelNoticeRow;
const MFALevels = arg1(dependencyMap[7]).MFALevels;
({ ContentDismissActionType: closure_11, DismissibleContentGroupName: closure_12 } = arg1(dependencyMap[8]));
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/guild_sidebar/native/useChannelNoticeRows.tsx");

export default function useChannelNoticeRows(id) {
  let accountLinkApplication;
  let applicationAccountLinkMarkAsDismissed;
  let startApplicationAccountLinkAuthorization;
  const arg1 = id;
  id = id.id;
  const importDefault = id;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => guildHasLiveChannelNotice.hasProgress(id));
  const dependencyMap = stateFromStores;
  const currentUser = currentUser.getCurrentUser();
  const callback = currentUser;
  const items1 = [closure_6];
  const items2 = [currentUser, id.mfaLevel, id];
  const stateFromStores1 = arg1(dependencyMap[10]).useStateFromStores(items1, () => {
    let result = null != currentUser;
    if (result) {
      result = arg0.mfaLevel === constants2.ELEVATED;
    }
    if (result) {
      result = !currentUser.mfaEnabled;
    }
    if (result) {
      result = tmp9.hasElevatedPermissions(id);
    }
    return result;
  }, items2);
  const React = stateFromStores1;
  const obj2 = arg1(dependencyMap[10]);
  const guildHasLiveChannelNotice = arg1(dependencyMap[17]).useGuildHasLiveChannelNotice(id);
  closure_5 = guildHasLiveChannelNotice;
  const obj3 = arg1(dependencyMap[17]);
  const canShowGameClaimCoachmark = arg1(dependencyMap[18]).useCanShowGameClaimCoachmark(id);
  const obj4 = arg1(dependencyMap[18]);
  if (canShowGameClaimCoachmark) {
    const items3 = [arg1(dependencyMap[15]).DismissibleContent.GAME_CLAIM_COACHMARK];
    let items4 = items3;
  } else {
    items4 = [];
  }
  const tmp8 = callback(arg1(dependencyMap[14]).useSelectedSingleUseGuildDismissibleContent(items4, id, constants.CHANNEL_NOTICES, true), 2);
  closure_6 = tmp9;
  const tmp10 = function useMobileAccountLinkRow(guildId) {
    let canStartAuthorization;
    let fetched;
    let startAuthorization;
    let tmp7;
    let tmp8;
    guildId = guildId.guildId;
    let id;
    let obj = id(stateFromStores[9]);
    let enabled = obj.useConfig({ location: "useMobileAccountLinkRow" }).enabled;
    const items = [showApplicationAccountLink];
    const obj2 = guildId(stateFromStores[10]);
    let first = null;
    if (enabled) {
      first = obj2.useStateFromStoresArray(items, () => {
        const guild = guild.getGuild(guildId);
        let gameApplicationIds;
        if (null != guild) {
          gameApplicationIds = guild.gameApplicationIds;
        }
        if (null == gameApplicationIds) {
          gameApplicationIds = [];
        }
        return gameApplicationIds;
      })[0];
    }
    const tmp2 = id(stateFromStores[12])(guildId(stateFromStores[11]).useApplication(first).data);
    const hasAlreadyLinked = tmp2.hasAlreadyLinked;
    id = hasAlreadyLinked;
    const connectionApp = tmp2.connectionApp;
    ({ fetched, canStartAuthorization, startAuthorization } = tmp2);
    const obj3 = guildId(stateFromStores[11]);
    const defaultAuthorizationNotifiers = guildId(stateFromStores[13]).useDefaultAuthorizationNotifiers(startAuthorization, hasAlreadyLinked);
    if (enabled) {
      enabled = fetched;
    }
    if (enabled) {
      enabled = !hasAlreadyLinked;
    }
    if (enabled) {
      enabled = canStartAuthorization;
    }
    if (enabled) {
      enabled = null != connectionApp;
    }
    if (enabled) {
      enabled = null != connectionApp.applicationAccountLinkBenefitConfig;
    }
    if (enabled) {
      enabled = null != connectionApp.applicationAccountLinkBenefitConfig.reward_name;
    }
    if (enabled) {
      enabled = null != connectionApp.applicationAccountLinkBenefitConfig.reward_image;
    }
    const obj4 = guildId(stateFromStores[13]);
    if (enabled) {
      const items1 = [guildId(stateFromStores[15]).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER];
      let items2 = items1;
    } else {
      items2 = [];
    }
    const obj5 = guildId(stateFromStores[14]);
    const items3 = [guildId, hasAlreadyLinked];
    [tmp7, tmp8] = currentUser(guildId(stateFromStores[14]).useSelectedSingleUseGuildDismissibleContent(items2, guildId, constants3.CHANNEL_NOTICES, true), 2);
    const effect = stateFromStores1.useEffect(() => {
      if (hasAlreadyLinked) {
        let obj = guildId(closure_2[16]);
        obj = { dismissAction: constants.INDIRECT_ACTION, guildId, groupName: constants2.CHANNEL_NOTICES };
        const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(guildId(closure_2[15]).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER, guildId, obj);
      }
    }, items3);
    obj = { showApplicationAccountLink: null != tmp7, applicationAccountLinkMarkAsDismissed: tmp8, startApplicationAccountLinkAuthorization: defaultAuthorizationNotifiers, accountLinkApplication: connectionApp };
    return obj;
  }({ guildId: id });
  const showApplicationAccountLink = tmp10.showApplicationAccountLink;
  let closure_7 = showApplicationAccountLink;
  obj = {
    rows: React.useMemo(() => {
      const items = [constants.SPACER];
      if (tmp9) {
        items.push(constants.GAME_CLAIM);
      }
      if (showApplicationAccountLink) {
        items.push(constants.APPLICATION_ACCOUNT_LINK);
      }
      if (stateFromStores) {
        items.push(constants.GUILD_PROGRESS);
      } else if (stateFromStores1) {
        items.push(constants.MFA_WARNING);
      }
      if (guildHasLiveChannelNotice) {
        items.push(constants.LIVE_CHANNEL_NOTICE);
      }
      return items;
    }, items5),
    gameClaimMarkAsDismissed: tmp8[1],
    applicationAccountLinkMarkAsDismissed,
    startApplicationAccountLinkAuthorization,
    accountLinkApplication
  };
  const items5 = [stateFromStores, stateFromStores1, guildHasLiveChannelNotice, null != tmp8[0], showApplicationAccountLink];
  ({ applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = tmp10);
  return obj;
};
