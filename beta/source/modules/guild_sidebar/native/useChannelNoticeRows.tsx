// Module ID: 15891
// Function ID: 15892
// Name: useChannelNoticeRows
// Dependencies: [32, 19, 11968, 4467, 2067, 1372, 6954, 1074, 2042, 563, 6584, 6586, 15892, 6806, 2029, 4654, 15816, 15893, 2]
// Exports: default

// Module 15891 (useChannelNoticeRows)
import Constants from "Constants" /* 1074 */;
import GuildSidebarConstants from "GuildSidebarConstants" /* 6954 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildProgressStore from "GuildProgressStore" /* 11968 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_6, closure_7, guild;

let closure_12;
let unpackModuleId;
let closure_9 = GuildSidebarConstants.ChannelListChannelNoticeRow;
const MFALevels = Constants.MFALevels;
({ ContentDismissActionType: unpackModuleId, DismissibleContentGroupName: closure_12 } = DismissibleContentConstants);
let result = size.fileFinishedImporting("modules/guild_sidebar/native/useChannelNoticeRows.tsx");

export default function useChannelNoticeRows(id) {
  let canStartAuthorization;
  let connectionApp;
  let constants2;
  let constants3;
  let fetched;
  let guildHasLiveChannelNotice;
  let hasAlreadyLinked;
  let items4;
  let items7;
  let items9;
  let mfaLevel;
  let startAuthorization;
  let stateFromStores;
  let tmp19;
  let tmp20;
  _require = id;
  id = id.id;
  let tmp = _require;
  let tmp2 = stateFromStores;
  let obj = require("useStateFromStores");
  let items = [guildHasLiveChannelNotice];
  stateFromStores = obj.useStateFromStores(items, () => GuildProgressStore.hasProgress(id));
  const currentUser = UserStore.getCurrentUser();
  let obj2 = require("useStateFromStores");
  const items1 = [closure_6];
  const items2 = [currentUser, id.mfaLevel, id];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let result = null != currentUser;
    const tmp = currentUser;
    if (result) {
      result = mfaLevel.mfaLevel === MFALevels.ELEVATED;
    }
    if (result) {
      result = !tmp.mfaEnabled;
    }
    if (result) {
      result = GuildChannelStore.hasElevatedPermissions(id);
    }
    return result;
  }, items2);
  const obj3 = require("useGuildHasLiveChannelNotice");
  guildHasLiveChannelNotice = obj3.useGuildHasLiveChannelNotice(id);
  const obj4 = require("useGameClaimCoachmark");
  const canShowGameClaimCoachmark = obj4.useCanShowGameClaimCoachmark(id);
  const useSelectedSingleUseGuildDismissibleContent = require("useSelectedDismissibleContent").useSelectedSingleUseGuildDismissibleContent;
  require("useSelectedDismissibleContent");
  if (canShowGameClaimCoachmark) {
    const items3 = [tmp(tmp2[14]).DismissibleContent.GAME_CLAIM_COACHMARK];
    items4 = items3;
  } else {
    items4 = [];
  }
  let tmp10 = currentUser;
  const tmp11 = currentUser(useSelectedSingleUseGuildDismissibleContent(items4, id, constants.CHANNEL_NOTICES, true), 2);
  closure_6 = tmp13;
  hasAlreadyLinked = undefined;
  const items5 = [closure_7];
  const tmp12 = tmp11[1];
  const tmpResult = tmp(tmp2[9]);
  const first = tmpResult.useStateFromStoresArray(items5, () => {
    guild = guild.getGuild(id);
    let gameApplicationIds;
    if (guild != null) {
      gameApplicationIds = guild.gameApplicationIds;
    }
    if (gameApplicationIds == null) {
      gameApplicationIds = [];
    }
    return gameApplicationIds;
  })[0];
  const tmpResult4 = tmp(tmp2[10]);
  const tmp15 = id(tmp2[11])(tmpResult4.useApplication(first).data);
  ({ fetched, hasAlreadyLinked } = tmp15);
  ({ connectionApp, canStartAuthorization, startAuthorization } = tmp15);
  const tmpResult5 = tmp(tmp2[12]);
  const defaultAuthorizationNotifiers = tmpResult5.useDefaultAuthorizationNotifiers(startAuthorization, hasAlreadyLinked);
  if (fetched) {
    fetched = !hasAlreadyLinked;
  }
  if (fetched) {
    fetched = canStartAuthorization;
  }
  if (fetched) {
    fetched = null != connectionApp;
  }
  if (fetched) {
    fetched = null != connectionApp.applicationAccountLinkBenefitConfig;
  }
  if (fetched) {
    fetched = null != connectionApp.applicationAccountLinkBenefitConfig.reward_name;
  }
  if (fetched) {
    fetched = null != connectionApp.applicationAccountLinkBenefitConfig.reward_image;
  }
  const useSelectedSingleUseGuildDismissibleContent2 = tmp(tmp2[13]).useSelectedSingleUseGuildDismissibleContent;
  tmp(tmp2[13]);
  if (fetched) {
    const items6 = [tmp(tmp2[14]).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER];
    items7 = items6;
  } else {
    items7 = [];
  }
  const items8 = [id, hasAlreadyLinked];
  [tmp19, tmp20] = tmp10(useSelectedSingleUseGuildDismissibleContent2(items7, id, constants.CHANNEL_NOTICES, true), 2);
  tmp10(useSelectedSingleUseGuildDismissibleContent2(items7, id, constants.CHANNEL_NOTICES, true), 2);
  const effect = stateFromStores1.useEffect(() => {
    const tmp = hasAlreadyLinked;
    if (tmp) {
      const obj2 = { dismissAction: constants2.INDIRECT_ACTION, guildId: id, groupName: constants3.CHANNEL_NOTICES };
      const obj = id(stateFromStores[15]);
      const result = obj.UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(id(stateFromStores[14]).DismissibleContent.MOBILE_ACCOUNT_LINKING_BANNER, id, obj2);
    }
  }, items8);
  closure_7 = tmp22;
  const obj5 = {
    rows: stateFromStores1.useMemo(() => {
      const items = [constants.SPACER];
      const tmp2 = closure_6;
      if (tmp2) {
        items.push(constants.GAME_CLAIM);
      }
      const tmp4 = closure_7;
      if (tmp4) {
        items.push(constants.APPLICATION_ACCOUNT_LINK);
      }
      const tmp6 = stateFromStores;
      if (tmp6) {
        items.push(constants.GUILD_PROGRESS);
      } else {
        const tmp7 = stateFromStores1;
        if (tmp7) {
          items.push(constants.MFA_WARNING);
        }
      }
      const tmp10 = guildHasLiveChannelNotice;
      if (tmp10) {
        items.push(constants.LIVE_CHANNEL_NOTICE);
      }
      return items;
    }, items9),
    gameClaimMarkAsDismissed: tmp12,
    applicationAccountLinkMarkAsDismissed: tmp20,
    startApplicationAccountLinkAuthorization: defaultAuthorizationNotifiers,
    accountLinkApplication: connectionApp
  };
  items9 = [stateFromStores, stateFromStores1, guildHasLiveChannelNotice, null != tmp11[0], null != tmp19];
  return obj5;
};
