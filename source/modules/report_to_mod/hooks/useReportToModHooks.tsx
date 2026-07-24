// Module ID: 9577
// Function ID: 74498
// Name: useIsReportToModEnabled
// Dependencies: [31, 1838, 4349, 566, 5647, 5668, 5655, 6691, 7976, 2]
// Exports: loadOriginalAuthorFromSnapshot, useIsModeratorReportOrPostChannel, useIsModeratorReportPostChannel, useIsReportToModEnabled, useLoadReportedMessage, useReportToModChannelId

// Module 9577 (useIsReportToModEnabled)
import { useEffect } from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/report_to_mod/hooks/useReportToModHooks.tsx");

export const useIsReportToModEnabled = function useIsReportToModEnabled(arg0) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose];
  return _require(566).useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = outer1_4.getGuild(closure_0);
      let tmp4 = null != guild;
      if (tmp4) {
        let tmp7 = outer1_1(outer1_2[4])(guild);
        if (tmp7) {
          tmp7 = null != outer1_1(outer1_2[5])(guild);
        }
        tmp4 = tmp7;
      }
      return tmp4;
    }
  });
};
export const useReportToModChannelId = function useReportToModChannelId(arg0) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose];
  return _require(566).useStateFromStores(items, () => {
    let guild = null;
    if (null != closure_0) {
      guild = outer1_4.getGuild(closure_0);
    }
    let tmp4 = null;
    if (null != guild) {
      const tmp7 = outer1_1(outer1_2[5])(guild);
      let tmp8 = null;
      if (null != tmp7) {
        tmp8 = tmp7;
      }
      tmp4 = tmp8;
    }
    return tmp4;
  });
};
export const useIsModeratorReportOrPostChannel = function useIsModeratorReportOrPostChannel(channel) {
  return require(5655) /* isModeratorReportOrPostChannelId */.isModeratorReportOrPostChannel(channel);
};
export const useIsModeratorReportPostChannel = function useIsModeratorReportPostChannel(channel) {
  return require(5655) /* isModeratorReportOrPostChannelId */.isModeratorReportPostChannel(channel);
};
export const useLoadReportedMessage = function useLoadReportedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = messageReference(566).useStateFromStores(items, () => {
    let message = null;
    if (null != messageReference) {
      message = outer1_5.getMessage(messageReference.channel_id, messageReference.message_id);
    }
    return message;
  });
  const items1 = [stateFromStores, messageReference];
  useEffect(() => {
    let tmp = null == stateFromStores;
    if (tmp) {
      tmp = null != messageReference;
    }
    if (tmp) {
      let obj = stateFromStores(outer1_2[7]);
      obj = { channelId: messageReference.channel_id };
      obj = { messageId: messageReference.message_id };
      obj.jump = obj;
      obj.limit = 10;
      const messages = obj.fetchMessages(obj);
    }
  }, items1);
};
export const loadOriginalAuthorFromSnapshot = function loadOriginalAuthorFromSnapshot(arg0) {
  let reported_user_id;
  if (null != arg0) {
    const first = arg0.messageSnapshots[0];
    if (null != first) {
      const moderatorReport = first.moderatorReport;
      if (null != moderatorReport) {
        reported_user_id = moderatorReport.reported_user_id;
      }
    }
  }
  if (null != reported_user_id) {
    const user = require(7976) /* _fetchProfile */.getUser(reported_user_id);
    const obj = require(7976) /* _fetchProfile */;
  }
};
