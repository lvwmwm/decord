// Module ID: 11161
// Function ID: 11162
// Name: useReportToModHooks
// Dependencies: [19, 2067, 5056, 504, 6684, 6708, 6694, 6876, 7626, 2]
// Exports: loadOriginalAuthorFromSnapshot, useIsModeratorReportOrPostChannel, useIsModeratorReportPostChannel, useIsReportToModEnabled, useLoadReportedMessage, useReportToModChannelId

// Module 11161 (useReportToModHooks)
import react from "react" /* 19 */;
import getGuildModeratorReportingEnabledDefault from "getGuildModeratorReportingEnabled" /* 6684 */;
import ReportToModUtils from "ReportToModUtils" /* 6694 */;
import getGuildModeratorReportChannelIdDefault from "getGuildModeratorReportChannelId" /* 6708 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6876 */;
import UserActionCreators from "UserActionCreators" /* 7626 */;
import GuildStore from "GuildStore" /* 2067 */;
import MessageStore from "MessageStore" /* 5056 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useEffect = react.useEffect;
const result = size.fileFinishedImporting("modules/report_to_mod/hooks/useReportToModHooks.tsx");

export const useIsReportToModEnabled = function useIsReportToModEnabled(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = GuildStore.getGuild(tmp);
      let tmp4 = null != guild;
      if (tmp4) {
        tmp4 = getGuildModeratorReportingEnabledDefault(guild) && null != getGuildModeratorReportChannelIdDefault(guild);
        getGuildModeratorReportingEnabledDefault(guild) && null != getGuildModeratorReportChannelIdDefault(guild);
      }
      return tmp4;
    }
  });
};
export const useReportToModChannelId = function useReportToModChannelId(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let guild = null;
    if (null != closure_0) {
      guild = GuildStore.getGuild(tmp);
    }
    let tmp4 = null;
    if (null != guild) {
      let tmp7 = getGuildModeratorReportChannelIdDefault(guild);
      if (tmp7 == null) {
        tmp7 = null;
      }
      tmp4 = tmp7;
    }
    return tmp4;
  });
};
export const useIsModeratorReportOrPostChannel = function useIsModeratorReportOrPostChannel(isModeratorReportChannel) {
  const obj = ReportToModUtils;
  return obj.isModeratorReportOrPostChannel(isModeratorReportChannel);
};
export const useIsModeratorReportPostChannel = function useIsModeratorReportPostChannel(isModeratorReportChannel) {
  const obj = ReportToModUtils;
  return obj.isModeratorReportPostChannel(isModeratorReportChannel);
};
export const useLoadReportedMessage = function useLoadReportedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  let obj = messageReference(504);
  const items = [MessageStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let message = null;
    if (null != messageReference) {
      message = MessageStore.getMessage(tmp.channel_id, tmp.message_id);
    }
    return message;
  });
  const items1 = [stateFromStores, messageReference];
  useEffect(() => {
    let obj3;
    const tmp = null == stateFromStores && null != messageReference;
    if (tmp) {
      const obj2 = { channelId: messageReference.channel_id, jump: obj3, limit: 10 };
      obj3 = { messageId: messageReference.message_id };
      const obj = MessageActionCreatorsDefault;
      const messages = obj.fetchMessages(obj2);
    }
  }, items1);
};
export const loadOriginalAuthorFromSnapshot = function loadOriginalAuthorFromSnapshot(arg0) {
  let reported_user_id;
  if (arg0 != null) {
    const first = arg0.messageSnapshots[0];
    if (first != null) {
      const moderatorReport = first.moderatorReport;
      if (moderatorReport != null) {
        reported_user_id = moderatorReport.reported_user_id;
      }
    }
  }
  if (null != reported_user_id) {
    const obj = UserActionCreators;
    const user = obj.getUser(reported_user_id);
  }
};
