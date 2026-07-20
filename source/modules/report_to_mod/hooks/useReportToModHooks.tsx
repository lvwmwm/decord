// Module ID: 9528
// Function ID: 74208
// Name: useIsReportToModEnabled
// Dependencies: []
// Exports: loadOriginalAuthorFromSnapshot, useIsModeratorReportOrPostChannel, useIsModeratorReportPostChannel, useIsReportToModEnabled, useLoadReportedMessage, useReportToModChannelId

// Module 9528 (useIsReportToModEnabled)
const useEffect = require(dependencyMap[0]).useEffect;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const _module = require(dependencyMap[9]);
const result = _module.fileFinishedImporting("modules/report_to_mod/hooks/useReportToModHooks.tsx");

export const useIsReportToModEnabled = function useIsReportToModEnabled(arg0) {
  const require = arg0;
  const items = [closure_4];
  return require(dependencyMap[3]).useStateFromStores(items, () => {
    if (null == arg0) {
      return false;
    } else {
      const guild = guild.getGuild(arg0);
      let tmp4 = null != guild;
      if (tmp4) {
        let tmp7 = callback(closure_2[4])(guild);
        if (tmp7) {
          tmp7 = null != callback(closure_2[5])(guild);
        }
        tmp4 = tmp7;
      }
      return tmp4;
    }
  });
};
export const useReportToModChannelId = function useReportToModChannelId(arg0) {
  const require = arg0;
  const items = [closure_4];
  return require(dependencyMap[3]).useStateFromStores(items, () => {
    let guild = null;
    if (null != arg0) {
      guild = guild.getGuild(arg0);
    }
    let tmp4 = null;
    if (null != guild) {
      const tmp7 = callback(closure_2[5])(guild);
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
  return require(dependencyMap[6]).isModeratorReportOrPostChannel(channel);
};
export const useIsModeratorReportPostChannel = function useIsModeratorReportPostChannel(channel) {
  return require(dependencyMap[6]).isModeratorReportPostChannel(channel);
};
export const useLoadReportedMessage = function useLoadReportedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  const require = messageReference;
  const items = [closure_5];
  const stateFromStores = require(dependencyMap[3]).useStateFromStores(items, () => {
    let message = null;
    if (null != messageReference) {
      message = message.getMessage(messageReference.channel_id, messageReference.message_id);
    }
    return message;
  });
  const importDefault = stateFromStores;
  const items1 = [stateFromStores, messageReference];
  useEffect(() => {
    let tmp = null == stateFromStores;
    if (tmp) {
      tmp = null != messageReference;
    }
    if (tmp) {
      let obj = stateFromStores(closure_2[7]);
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
    const user = require(dependencyMap[8]).getUser(reported_user_id);
    const obj = require(dependencyMap[8]);
  }
};
