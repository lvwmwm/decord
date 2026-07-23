// Module ID: 15083
// Function ID: 114774
// Name: useChannelNoticeRows
// Dependencies: [57, 31, 11508, 1907, 1838, 1849, 6766, 653, 1345, 15023, 624, 5465, 5467, 15084, 5802, 1334, 3946, 15012, 15085, 2]
// Exports: default

// Module 15083 (useChannelNoticeRows)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import { ChannelListChannelNoticeRow as closure_9 } from "ChannelListGuildActionRow";
import { MFALevels } from "ME";
import ContentDismissActionType from "ContentDismissActionType";

let closure_11;
let closure_12;
const require = arg1;
({ ContentDismissActionType: closure_11, DismissibleContentGroupName: closure_12 } = ContentDismissActionType);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_sidebar/native/useChannelNoticeRows.tsx");

export default function useChannelNoticeRows(id) {
  let accountLinkApplication;
  let applicationAccountLinkMarkAsDismissed;
  let startApplicationAccountLinkAuthorization;
  const _require = id;
  id = id.id;
  let obj = _require(stateFromStores[10]);
  let items = [guildHasLiveChannelNotice];
  stateFromStores = obj.useStateFromStores(items, () => guildHasLiveChannelNotice.hasProgress(id));
  currentUser = currentUser.getCurrentUser();
  let items1 = [closure_6];
  let items2 = [currentUser, id.mfaLevel, id];
  const stateFromStores1 = _require(stateFromStores[10]).useStateFromStores(items1, () => {
    let result = null != currentUser;
    if (result) {
      result = id.mfaLevel === outer1_10.ELEVATED;
    }
    if (result) {
      result = !currentUser.mfaEnabled;
    }
    if (result) {
      result = tmp9.hasElevatedPermissions(id);
    }
    return result;
  }, items2);
  let obj2 = _require(stateFromStores[10]);
  guildHasLiveChannelNotice = _require(stateFromStores[17]).useGuildHasLiveChannelNotice(id);
  let obj3 = _require(stateFromStores[17]);
  const canShowGameClaimCoachmark = _require(stateFromStores[18]).useCanShowGameClaimCoachmark(id);
  let obj4 = _require(stateFromStores[18]);
  if (canShowGameClaimCoachmark) {
    let items3 = [_require(stateFromStores[15]).DismissibleContent.GAME_CLAIM_COACHMARK];
    let items4 = items3;
  } else {
    items4 = [];
  }
  const tmp8 = currentUser(_require(stateFromStores[14]).useSelectedSingleUseGuildDismissibleContent(items4, id, constants.CHANNEL_NOTICES, true), 2);
  closure_6 = tmp9;
  const tmp10 = (function useMobileAccountLinkRow(guildId) {
    let canStartAuthorization;
    let fetched;
    let startAuthorization;
    let tmp7;
    let tmp8;
    guildId = guildId.guildId;
    let hasAlreadyLinked;
    let obj = id(stateFromStores[9]);
    let enabled = obj.useConfig({ location: "useMobileAccountLinkRow" }).enabled;
    const items = [showApplicationAccountLink];
    const obj2 = id(stateFromStores[10]);
    let first = null;
    if (enabled) {
      first = obj2.useStateFromStoresArray(items, () => {
        const guild = showApplicationAccountLink.getGuild(guildId);
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
    const tmp2 = id(stateFromStores[12])(id(stateFromStores[11]).useApplication(first).data);
    hasAlreadyLinked = tmp2.hasAlreadyLinked;
    const connectionApp = tmp2.connectionApp;
    ({ fetched, canStartAuthorization, startAuthorization } = tmp2);
    const obj3 = id(stateFromStores[11]);
    const defaultAuthorizationNotifiers = id(stateFromStores[13]).useDefaultAuthorizationNotifiers(startAuthorization, hasAlreadyLinked);
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
    const obj4 = id(stateFromStores[13]);
    if (enabled) {
      const items1 = [id(stateFromStores[15]).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER];
      let items2 = items1;
    } else {
      items2 = [];
    }
    const obj5 = id(stateFromStores[14]);
    const items3 = [guildId, hasAlreadyLinked];
    [tmp7, tmp8] = currentUser(id(stateFromStores[14]).useSelectedSingleUseGuildDismissibleContent(items2, guildId, outer1_12.CHANNEL_NOTICES, true), 2);
    const effect = stateFromStores1.useEffect(() => {
      if (hasAlreadyLinked) {
        let obj = guildId(stateFromStores[16]);
        obj = { dismissAction: outer2_11.INDIRECT_ACTION, guildId, groupName: outer2_12.CHANNEL_NOTICES };
        const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(guildId(stateFromStores[15]).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER, guildId, obj);
      }
    }, items3);
    obj = { showApplicationAccountLink: null != tmp7, applicationAccountLinkMarkAsDismissed: tmp8, startApplicationAccountLinkAuthorization: defaultAuthorizationNotifiers, accountLinkApplication: connectionApp };
    return obj;
  })({ guildId: id });
  const showApplicationAccountLink = tmp10.showApplicationAccountLink;
  obj = {
    rows: stateFromStores1.useMemo(() => {
      const items = [outer1_9.SPACER];
      if (closure_6) {
        items.push(outer1_9.GAME_CLAIM);
      }
      if (showApplicationAccountLink) {
        items.push(outer1_9.APPLICATION_ACCOUNT_LINK);
      }
      if (stateFromStores) {
        items.push(outer1_9.GUILD_PROGRESS);
      } else if (stateFromStores1) {
        items.push(outer1_9.MFA_WARNING);
      }
      if (guildHasLiveChannelNotice) {
        items.push(outer1_9.LIVE_CHANNEL_NOTICE);
      }
      return items;
    }, items5),
    gameClaimMarkAsDismissed: tmp8[1],
    applicationAccountLinkMarkAsDismissed,
    startApplicationAccountLinkAuthorization,
    accountLinkApplication
  };
  items5 = [stateFromStores, stateFromStores1, guildHasLiveChannelNotice, null != tmp8[0], showApplicationAccountLink];
  ({ applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = tmp10);
  return obj;
};
