// Module ID: 11693
// Function ID: 90704
// Name: useJoinRequestButtonActions
// Dependencies: [5, 57, 31, 1348, 653, 33, 3831, 1212, 5626, 4098, 9196, 3950, 4091, 689, 11694, 1934, 2]
// Exports: useJoinRequestButtonActions

// Module 11693 (useJoinRequestButtonActions)
import jsxProd from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Routes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/guild_member_verification/native/useJoinRequestButtonActions.tsx");

export const useJoinRequestButtonActions = function useJoinRequestButtonActions(joinRequest, interviewChannelId, callback) {
  let closure_0 = joinRequest;
  let closure_1 = interviewChannelId;
  let closure_2 = callback;
  let obj = joinRequest;
  if (null == joinRequest) {
    obj = {};
  }
  const guildId = obj.guildId;
  const userId = obj.userId;
  const joinRequestId = obj.joinRequestId;
  let tmp = userId(joinRequestId.useState(false), 2);
  const first = tmp[0];
  let closure_7 = tmp[1];
  callback = joinRequestId.useCallback(() => {
    let obj = interviewChannelId(paths[6]);
    obj = { key: "JOIN_REQUEST_ERROR" };
    const intl = joinRequest(paths[7]).intl;
    obj.content = intl.string(joinRequest(paths[7]).t.R0RpRX);
    obj.open(obj);
  }, []);
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [guildId, joinRequestId, interviewChannelId, callback, first, userId];
  obj = {};
  // CreateGeneratorClosureLongIndex (0x67)
  const callback1 = useCallback(guildId(obj), items);
  const items1 = [guildId, joinRequestId, callback, first, userId];
  obj.approveRequest = joinRequestId.useCallback(guildId(joinRequestId.useCallback), items1);
  const items2 = [guildId, joinRequestId, joinRequest, callback, callback, userId];
  obj.rejectRequest = joinRequestId.useCallback(() => {
    let tmp = null != joinRequest;
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
      let obj = interviewChannelId(paths[9]);
      const _HermesInternal = HermesInternal;
      obj = { joinRequest, onError: callback, onDismiss: paths };
      obj.openLazy(joinRequest(paths[15])(paths[14], paths.paths), "RejectionReason-" + joinRequestId, obj);
      const tmp8 = joinRequest(paths[15])(paths[14], paths.paths);
    }
  }, items2);
  obj.submitting = first;
  obj.handleOpenInterview = callback1;
  return obj;
};
