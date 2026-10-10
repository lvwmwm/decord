// Module ID: 8810
// Function ID: 8811
// Name: SecureFramesVerifiedStore
// Dependencies: [502, 5110, 7428, 8811, 8812, 1085, 8828, 5900, 5137, 504, 584, 2]

// Module 8810 (SecureFramesVerifiedStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5137 */;
import SecureFramesUtils from "SecureFramesUtils" /* 8828 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5110 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7428 */;
import TransientKeyStore from "TransientKeyStore" /* 8811 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 8812 */;
import size from "module_2" /* 2 */;

const f99481 = (acc, item) => {
  const obj = closure_0(dependencyMap[7]);
  const tmp = true === map.get(obj.decodeStreamKey(item).ownerId);
  const value = map1.get(item);
  const result = map1.set(item, tmp);
  return value !== tmp || acc;
};
function computeCallVerification() {
  let userIds = RTCConnectionStore.getUserIds();
  if (userIds == null) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    userIds = new Set();
  }
  let flag = true;
  for (const item10020 of userIds) {
    if (tmp3 !== item10020) {
      if (true !== map.get(tmp4)) {
        flag = false;
        obj.return();
        break;
      }
      c10 = flag;
      return flag !== c10;
    }
    continue;
  }
}
function handleUserUpdate(userId) {
  userId = userId.userId;
  if (AuthenticationStore.getId() === userId) {
    return false;
  } else {
    const secureFramesRosterMapEntry = RTCConnectionStore.getSecureFramesRosterMapEntry(userId);
    let flag = false;
    const tmp17 = RTCConnectionStore;
    if (null != secureFramesRosterMapEntry) {
      const _Uint8Array = Uint8Array;
      const self = this;
      const self2 = this;
      const uint8Array = new Uint8Array(secureFramesRosterMapEntry);
      let isKeyVerifiedResult = VerifiedKeyStore.isKeyVerified(userId, uint8Array) || TransientKeyStore.isKeyVerified(userId, uint8Array);
      const items = [tmp17, StreamRTCConnectionStore];
      const obj = SecureFramesUtils;
      if (isKeyVerifiedResult) {
        isKeyVerifiedResult = !obj.getIsSecureFramesKeyInconsistent(userId, items);
      }
      flag = isKeyVerifiedResult !== map.get(userId);
      const result = map.set(userId, isKeyVerifiedResult);
    }
    const allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
    const reduced = allActiveStreamKeys.reduce(f99481, false);
    const tmp16 = computeCallVerification();
    if (!flag) {
      flag = reduced;
    }
    if (!flag) {
      flag = tmp16;
    }
    return flag;
  }
}
const RTCConnectionStates = Constants.RTCConnectionStates;
const map = new Map();
const map1 = new Map();
let c10 = false;
let channelId = null;
const Store = get_initializedDefault.Store;
class SecureFramesVerifiedStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, RTCConnectionStore, StreamRTCConnectionStore, TransientKeyStore, VerifiedKeyStore);
  }
  isCallVerified() {
    return c10;
  }
  isStreamVerified(streamKey) {
    return map1.get(streamKey);
  }
  isUserVerified(userId) {
    return map.get(userId);
  }
}
const prototype = SecureFramesVerifiedStore.prototype;
SecureFramesVerifiedStore.displayName = "SecureFramesVerifiedStore";
let obj = {
  CONNECTION_OPEN: function handleReset() {
    map.clear();
    map1.clear();
    c10 = false;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (channelId === channelId) {
      return false;
    } else {
      map.clear();
      map1.clear();
      c10 = false;
    }
  },
  RTC_CONNECTION_STATE: function handleRtcConnectionState(state) {
    let context;
    let streamKey;
    ({ streamKey, context } = state);
    if (state.state !== RTCConnectionStates.DISCONNECTED) {
      return false;
    } else {
      const tmp10 = require;
      if (BaseConnectionEvent.MediaEngineContextTypes.STREAM === context) {
        let tmp6 = null != streamKey;
        if (tmp6) {
          map1.delete(streamKey);
          tmp6 = computeCallVerification();
        }
        return tmp6;
      } else if (tmp10(5137).MediaEngineContextTypes.DEFAULT === context) {
        map.clear();
        map1.clear();
        c10 = false;
      }
    }
  },
  RTC_CONNECTION_ROSTER_MAP_UPDATE: function handleBulkUserUpdate(userIds) {
    let closure_0;
    userIds = userIds.userIds;
    const id = AuthenticationStore.getId();
    let reduced = userIds.reduce((acc, userId) => {
      let tmp = acc;
      if (closure_0 !== userId) {
        const obj = { userId };
        tmp = handleUserUpdate(obj) || acc;
        handleUserUpdate(obj) || acc;
      }
      return tmp;
    }, false);
    const allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
    const reduced1 = allActiveStreamKeys.reduce(f99481, false);
    const tmp3 = computeCallVerification();
    if (!reduced) {
      reduced = reduced1;
    }
    if (!reduced) {
      reduced = tmp3;
    }
    return reduced;
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: handleUserUpdate,
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: handleUserUpdate,
  SECURE_FRAMES_VERIFIED_KEY_CREATE: handleUserUpdate,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: handleUserUpdate,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: handleUserUpdate
};
const secureFramesVerifiedStore = new SecureFramesVerifiedStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/rtc/SecureFramesVerifiedStore.tsx");

export default secureFramesVerifiedStore;
