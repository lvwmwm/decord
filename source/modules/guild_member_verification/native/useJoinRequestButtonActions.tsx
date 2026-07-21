// Module ID: 11655
// Function ID: 90392
// Name: useJoinRequestButtonActions
// Dependencies: []
// Exports: useJoinRequestButtonActions

// Module 11655 (useJoinRequestButtonActions)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const Routes = arg1(dependencyMap[4]).Routes;
const jsx = arg1(dependencyMap[5]).jsx;
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_member_verification/native/useJoinRequestButtonActions.tsx");

export const useJoinRequestButtonActions = function useJoinRequestButtonActions(joinRequest, interviewChannelId, callback) {
  interviewChannelId = joinRequest;
  const importDefault = interviewChannelId;
  const dependencyMap = callback;
  let obj = joinRequest;
  if (null == joinRequest) {
    obj = {};
  }
  const guildId = obj.guildId;
  callback = guildId;
  const userId = obj.userId;
  const callback2 = userId;
  const joinRequestId = obj.joinRequestId;
  const React = joinRequestId;
  const tmp = callback2(React.useState(false), 2);
  const first = tmp[0];
  let closure_6 = first;
  let closure_7 = tmp[1];
  callback = React.useCallback(() => {
    let obj = arg1(arg2[6]);
    obj = { key: "JOIN_REQUEST_ERROR" };
    const intl = arg0(arg2[7]).intl;
    obj.content = intl.string(arg0(arg2[7]).t.R0RpRX);
    obj.open(obj);
  }, []);
  const jsx = callback;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [guildId, joinRequestId, interviewChannelId, callback, first, userId];
  obj = {};
  // CreateGeneratorClosureLongIndex (0x67)
  const callback1 = useCallback(callback(obj), items);
  const items1 = [guildId, joinRequestId, callback, first, userId];
  obj.approveRequest = React.useCallback(callback(React.useCallback), items1);
  const items2 = [guildId, joinRequestId, joinRequest, callback, callback, userId];
  obj.rejectRequest = React.useCallback(() => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = null != guildId;
    }
    if (tmp) {
      tmp = null != userId;
    }
    if (tmp) {
      tmp = null != joinRequestId;
    }
    if (tmp) {
      let obj = arg1(arg2[9]);
      const _HermesInternal = HermesInternal;
      obj = { joinRequest: arg0, onError: callback, onDismiss: arg2 };
      obj.openLazy(arg0(arg2[15])(arg2[14], arg2.paths), "RejectionReason-" + joinRequestId, obj);
      const tmp8 = arg0(arg2[15])(arg2[14], arg2.paths);
    }
  }, items2);
  obj.submitting = first;
  obj.handleOpenInterview = callback1;
  return obj;
};
