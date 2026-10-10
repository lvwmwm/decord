// Module ID: 8809
// Function ID: 8810
// Name: useIsSecureFramesVerified
// Dependencies: [502, 5110, 8810, 8811, 8812, 558, 576, 8847, 504, 8852, 5900, 2]

// Module 8809 (useIsSecureFramesVerified)
import StreamKeyUtils from "StreamKeyUtils" /* 5900 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5110 */;
import SecureFramesVerifiedStore from "SecureFramesVerifiedStore" /* 8810 */;
import TransientKeyStore from "TransientKeyStore" /* 8811 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 8812 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let flag, tmp5, tmp8;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsUserSecureFramesVerified(userId) {
  let channelId;
  let tmp4;
  let tmp6;
  let userKey;
  const tmp = userId;
  const obj = userId(userKey[6]);
  const cResult = obj.c(8);
  userId = userId.userId;
  ({ channelId, userKey } = userId);
  if (cResult[0] !== channelId) {
    const obj2 = { channelId };
    cResult[0] = channelId;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = tmp(userKey[7]);
  const isSecureFramesUIEnabled = tmpResult.useIsSecureFramesUIEnabled(tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SecureFramesVerifiedStore, , , , ];
    items[1] = isSecureFramesUIEnabled;
    items[2] = RTCConnectionStore;
    items[3] = VerifiedKeyStore;
    items[4] = TransientKeyStore;
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === isSecureFramesUIEnabled) {
    if (cResult[4] === userId) {
      let tmp12;
      let tmp13;
      if (cResult[5] === userKey) {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      const tmpResult2 = tmp(userKey[8]);
      return tmpResult2.useStateFromStores(tmp6, tmp12, tmp13);
    }
  }
  class C {
    constructor() {
      tmp = userId;
      if (null != userId) {
        tmp13 = closure_2;
        if (tmp13) {
          tmp2 = closure_3;
          if (closure_3.isUserConnected(tmp)) {
            tmp3 = closure_2;
            if (closure_2.getId() !== tmp) {
              tmp4 = userKey;
              if (undefined === userKey) {
                tmp12 = closure_4;
                return closure_4.isUserVerified(tmp);
              } else if (null === tmp4) {
                flag = false;
                return false;
              } else {
                tmp5 = globalThis;
                _Uint8Array = Uint8Array;
                self = this;
                self2 = this;
                tmp6 = tmp4;
                uint8Array = new Uint8Array(tmp4);
                tmp8 = uint8Array;
                tmp9 = closure_6;
                isKeyVerifiedResult = closure_6.isKeyVerified(tmp, uint8Array);
                if (!isKeyVerifiedResult) {
                  tmp11 = closure_5;
                  isKeyVerifiedResult = closure_5.isKeyVerified(tmp, uint8Array);
                }
                return isKeyVerifiedResult;
              }
            }
          }
        }
      }
      return false;
    }
  }
  const items1 = [isSecureFramesUIEnabled, userId, userKey];
  cResult[3] = isSecureFramesUIEnabled;
  cResult[4] = userId;
  cResult[5] = userKey;
  cResult[6] = C;
  cResult[7] = items1;
  tmp13 = items1;
  tmp12 = C;
}) : (function useIsUserSecureFramesVerified(userId) {
  userId = userId.userId;
  const userKey = userId.userKey;
  const channelId = userId.channelId;
  const obj = userId(userKey[7]);
  const isSecureFramesUIEnabled = obj.useIsSecureFramesUIEnabled({ channelId });
  const items = [SecureFramesVerifiedStore, isSecureFramesUIEnabled, RTCConnectionStore, VerifiedKeyStore, TransientKeyStore];
  const items1 = [isSecureFramesUIEnabled, userId, userKey];
  const obj2 = userId(userKey[8]);
  return obj2.useStateFromStores(items, function() {
    if (null != userId) {
      const tmp13 = isSecureFramesUIEnabled;
      if (tmp13) {
        if (RTCConnectionStore.isUserConnected(userId)) {
          if (AuthenticationStore.getId() !== userId) {
            if (undefined === userKey) {
              return SecureFramesVerifiedStore.isUserVerified(userId);
            } else if (null === userKey) {
              return false;
            } else {
              const _Uint8Array = Uint8Array;
              const self = this;
              const self2 = this;
              const uint8Array = new Uint8Array(tmp4);
              const isKeyVerifiedResult = VerifiedKeyStore.isKeyVerified(tmp, uint8Array) || TransientKeyStore.isKeyVerified(tmp, uint8Array);
              return isKeyVerifiedResult;
            }
          }
        }
      }
    }
    return false;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsStreamSecureFramesVerified(streamKey) {
  let isSecureFramesUIEnabled;
  let tmp4;
  let tmp7;
  let tmp = streamKey;
  let tmp2 = isSecureFramesUIEnabled;
  let obj = streamKey(isSecureFramesUIEnabled[6]);
  const cResult = obj.c(8);
  streamKey = streamKey.streamKey;
  const channelId = streamKey.channelId;
  if (cResult[0] !== channelId) {
    const obj2 = { channelId };
    cResult[0] = channelId;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = tmp(tmp2[7]);
  isSecureFramesUIEnabled = tmpResult.useIsSecureFramesUIEnabled(tmp4);
  const tmpResult3 = tmp(tmp2[9]);
  const isStreamRTCConnectionEmpty = tmpResult3.useIsStreamRTCConnectionEmpty(streamKey);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SecureFramesVerifiedStore, isStreamRTCConnectionEmpty];
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === isStreamRTCConnectionEmpty) {
    if (cResult[4] === isSecureFramesUIEnabled) {
      let tmp10;
      let tmp11;
      if (cResult[5] === streamKey) {
        tmp10 = cResult[6];
        tmp11 = cResult[7];
      }
      const tmpResult4 = tmp(tmp2[8]);
      return tmpResult4.useStateFromStores(tmp7, tmp10, tmp11);
    }
  }
  const fn = function f() {
    const tmp = isSecureFramesUIEnabled;
    if (tmp) {
      const tmp2 = isStreamRTCConnectionEmpty;
      if (!tmp2) {
        if (null == streamKey) {
          return false;
        } else {
          const id = AuthenticationStore.getId();
          const obj = StreamKeyUtils;
          const isStreamVerifiedResult = obj.decodeStreamKey(tmp3).ownerId !== id && SecureFramesVerifiedStore.isStreamVerified(tmp3);
          return isStreamVerifiedResult;
        }
      }
    }
    return false;
  };
  const items1 = [isStreamRTCConnectionEmpty, isSecureFramesUIEnabled, streamKey];
  cResult[3] = isStreamRTCConnectionEmpty;
  cResult[4] = isSecureFramesUIEnabled;
  cResult[5] = streamKey;
  cResult[6] = fn;
  cResult[7] = items1;
  tmp11 = items1;
  tmp10 = fn;
}) : (function useIsStreamSecureFramesVerified(streamKey) {
  streamKey = streamKey.streamKey;
  let isSecureFramesUIEnabled;
  const channelId = streamKey.channelId;
  let obj = streamKey(isSecureFramesUIEnabled[7]);
  isSecureFramesUIEnabled = obj.useIsSecureFramesUIEnabled({ channelId });
  const obj2 = streamKey(isSecureFramesUIEnabled[9]);
  const isStreamRTCConnectionEmpty = obj2.useIsStreamRTCConnectionEmpty(streamKey);
  const items = [SecureFramesVerifiedStore, isStreamRTCConnectionEmpty];
  const items1 = [isStreamRTCConnectionEmpty, isSecureFramesUIEnabled, streamKey];
  const obj3 = streamKey(isSecureFramesUIEnabled[8]);
  return obj3.useStateFromStores(items, () => {
    const tmp = isSecureFramesUIEnabled;
    if (tmp) {
      const tmp2 = isStreamRTCConnectionEmpty;
      if (!tmp2) {
        if (null == streamKey) {
          return false;
        } else {
          const id = AuthenticationStore.getId();
          const obj = StreamKeyUtils;
          const isStreamVerifiedResult = obj.decodeStreamKey(tmp3).ownerId !== id && SecureFramesVerifiedStore.isStreamVerified(tmp3);
          return isStreamVerifiedResult;
        }
      }
    }
    return false;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsCallSecureFramesVerified(channelId) {
  let isCallRTCConnectionEmpty;
  let isSecureFramesUIEnabled;
  let tmp4;
  let tmp7;
  let tmp = isSecureFramesUIEnabled;
  const obj = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[6]);
  const cResult = obj.c(7);
  channelId = channelId.channelId;
  if (cResult[0] !== channelId) {
    const obj2 = { channelId };
    cResult[0] = channelId;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = tmp(isCallRTCConnectionEmpty[7]);
  isSecureFramesUIEnabled = tmpResult.useIsSecureFramesUIEnabled(tmp4);
  const tmpResult3 = tmp(isCallRTCConnectionEmpty[9]);
  isCallRTCConnectionEmpty = tmpResult3.useIsCallRTCConnectionEmpty();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SecureFramesVerifiedStore];
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === isCallRTCConnectionEmpty) {
    let tmp9;
    let tmp10;
    if (cResult[4] === isSecureFramesUIEnabled) {
      tmp9 = cResult[5];
      tmp10 = cResult[6];
    }
    const tmpResult4 = tmp(isCallRTCConnectionEmpty[8]);
    return tmpResult4.useStateFromStores(tmp7, tmp9, tmp10);
  }
  const fn = function o() {
    let tmp = !isSecureFramesUIEnabled;
    if (isSecureFramesUIEnabled) {
      tmp = isCallRTCConnectionEmpty;
    }
    const isCallVerifiedResult = !tmp && SecureFramesVerifiedStore.isCallVerified();
    return isCallVerifiedResult;
  };
  const items1 = [isCallRTCConnectionEmpty, isSecureFramesUIEnabled];
  cResult[3] = isCallRTCConnectionEmpty;
  cResult[4] = isSecureFramesUIEnabled;
  cResult[5] = fn;
  cResult[6] = items1;
  tmp10 = items1;
  tmp9 = fn;
}) : (function useIsCallSecureFramesVerified(channelId) {
  let isSecureFramesUIEnabled;
  let isCallRTCConnectionEmpty;
  channelId = channelId.channelId;
  const obj = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[7]);
  isSecureFramesUIEnabled = obj.useIsSecureFramesUIEnabled({ channelId });
  const obj2 = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[9]);
  isCallRTCConnectionEmpty = obj2.useIsCallRTCConnectionEmpty();
  const items = [SecureFramesVerifiedStore];
  const items1 = [isCallRTCConnectionEmpty, isSecureFramesUIEnabled];
  const obj3 = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[8]);
  return obj3.useStateFromStores(items, () => {
    let tmp = !isSecureFramesUIEnabled;
    if (isSecureFramesUIEnabled) {
      tmp = isCallRTCConnectionEmpty;
    }
    const isCallVerifiedResult = !tmp && SecureFramesVerifiedStore.isCallVerified();
    return isCallVerifiedResult;
  }, items1);
});
const result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesVerified.tsx");

export const useIsUserSecureFramesVerified = tmp2;
export const useIsStreamSecureFramesVerified = tmp3;
export const useIsCallSecureFramesVerified = tmp4;
