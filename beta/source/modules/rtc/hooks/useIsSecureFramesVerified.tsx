// Module ID: 9144
// Function ID: 9145
// Name: useIsSecureFramesVerified
// Dependencies: [502, 4859, 9145, 9146, 9147, 9183, 504, 9186, 4888, 2]
// Exports: useIsCallSecureFramesVerified, useIsStreamSecureFramesVerified, useIsUserSecureFramesVerified

// Module 9144 (useIsSecureFramesVerified)
import StreamKeyUtils from "StreamKeyUtils" /* 4888 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import SecureFramesVerifiedStore from "SecureFramesVerifiedStore" /* 9145 */;
import TransientKeyStore from "TransientKeyStore" /* 9146 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9147 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesVerified.tsx");

export const useIsUserSecureFramesVerified = function useIsUserSecureFramesVerified(userId) {
  userId = userId.userId;
  const userKey = userId.userKey;
  const channelId = userId.channelId;
  const obj = userId(userKey[5]);
  const isSecureFramesUIEnabled = obj.useIsSecureFramesUIEnabled({ channelId });
  const items = [SecureFramesVerifiedStore, isSecureFramesUIEnabled, RTCConnectionStore, VerifiedKeyStore, TransientKeyStore];
  const items1 = [isSecureFramesUIEnabled, userId, userKey];
  const obj2 = userId(userKey[6]);
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
};
export const useIsStreamSecureFramesVerified = function useIsStreamSecureFramesVerified(streamKey) {
  streamKey = streamKey.streamKey;
  let isSecureFramesUIEnabled;
  const channelId = streamKey.channelId;
  let obj = streamKey(isSecureFramesUIEnabled[5]);
  isSecureFramesUIEnabled = obj.useIsSecureFramesUIEnabled({ channelId });
  const obj2 = streamKey(isSecureFramesUIEnabled[7]);
  const isStreamRTCConnectionEmpty = obj2.useIsStreamRTCConnectionEmpty(streamKey);
  const items = [SecureFramesVerifiedStore, isStreamRTCConnectionEmpty];
  const items1 = [isStreamRTCConnectionEmpty, isSecureFramesUIEnabled, streamKey];
  const obj3 = streamKey(isSecureFramesUIEnabled[6]);
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
};
export const useIsCallSecureFramesVerified = function useIsCallSecureFramesVerified(channelId) {
  let isSecureFramesUIEnabled;
  let isCallRTCConnectionEmpty;
  channelId = channelId.channelId;
  const obj = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[5]);
  isSecureFramesUIEnabled = obj.useIsSecureFramesUIEnabled({ channelId });
  const obj2 = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[7]);
  isCallRTCConnectionEmpty = obj2.useIsCallRTCConnectionEmpty();
  const items = [SecureFramesVerifiedStore];
  const items1 = [isCallRTCConnectionEmpty, isSecureFramesUIEnabled];
  const obj3 = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[6]);
  return obj3.useStateFromStores(items, () => {
    let tmp = !isSecureFramesUIEnabled;
    if (isSecureFramesUIEnabled) {
      tmp = isCallRTCConnectionEmpty;
    }
    const isCallVerifiedResult = !tmp && SecureFramesVerifiedStore.isCallVerified();
    return isCallVerifiedResult;
  }, items1);
};
