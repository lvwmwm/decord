// Module ID: 10317
// Function ID: 10318
// Name: useReportToModHooks
// Dependencies: [19, 5011, 6194, 504, 7504, 7525, 7521, 7712, 8823, 2]
// Exports: loadOriginalAuthorFromSnapshot, useIsModeratorReportOrPostChannel, useIsModeratorReportPostChannel, useIsReportToModEnabled, useLoadReportedMessage, useReportToModChannelId

// Module 10317 (useReportToModHooks)
import react from "react" /* 19 */;
import getGuildModeratorReportingEnabledDefault from "getGuildModeratorReportingEnabled" /* 7504 */;
import ReportToModUtils from "ReportToModUtils" /* 7521 */;
import getGuildModeratorReportChannelIdDefault from "getGuildModeratorReportChannelId" /* 7525 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7712 */;
import UserActionCreators from "UserActionCreators" /* 8823 */;
import GuildStore from "GuildStore" /* 5011 */;
import MessageStore from "MessageStore" /* 6194 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useEffect = react.useEffect;
const result = size.fileFinishedImporting("modules/report_to_mod/hooks/useReportToModHooks.tsx");

export function useIsReportToModEnabled(arg0) {
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
}
export function useReportToModChannelId(arg0) {
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
}
export function useIsModeratorReportOrPostChannel(isModeratorReportChannel) {
  const obj = ReportToModUtils;
  return obj.isModeratorReportOrPostChannel(isModeratorReportChannel);
}
export function useIsModeratorReportPostChannel(isModeratorReportChannel) {
  const obj = ReportToModUtils;
  return obj.isModeratorReportPostChannel(isModeratorReportChannel);
}
export function useLoadReportedMessage(messageReference) {
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
}
export function loadOriginalAuthorFromSnapshot(arg0) {
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
}
