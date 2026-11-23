// Module ID: 6395
// Function ID: 6396
// Name: PassTheControllerStore
// Dependencies: [2139, 502, 5654, 6396, 14881, 1071, 6397, 5658, 6401, 1404, 5679, 14882, 14889, 572, 14890, 14893, 504, 2]

// Module 6395 (PassTheControllerStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants2 from "Constants" /* 5658 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5679 */;
import Constants3 from "Constants" /* 6397 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6401 */;
import Constants4 from "Constants" /* 14881 */;
import InputEvent from "InputEvent" /* 14889 */;
import InputHostDefault from "InputHost" /* 14890 */;
import InputGuestDefault from "InputGuest" /* 14893 */;
import RunningGameStore from "RunningGameStore" /* 2139 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5654 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 6396 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let _null, _null2, _null3;

let c10;
let c9;
let metroImportAll;
let tmp;
const FlagUtils = tmp(1404);
function handleControllerGrab(arg0) {
  if (arg0 !== c17) {
    c17 = arg0;
    passTheControllerStore.emitChange();
  }
}
function handleControllerDrop() {
  if (null != c17) {
    c17 = null;
    passTheControllerStore.emitChange();
  }
}
function stopHost(streamKey) {
  streamKey = undefined;
  if (_null2 != null) {
    streamKey = _null2.streamKey;
  }
  let flag = streamKey === streamKey;
  if (flag) {
    const inputHost = _null2.inputHost;
    inputHost.shutdown();
    _null2 = null;
    c17 = null;
    const tmp5 = null != _null && null == _null2 && null == c16;
    if (tmp5) {
      if (null != c14) {
        _null.off(InputEvent.InputEvent.Disconnect, c14);
      }
      _null.close();
      c14 = null;
      _null = null;
    }
    const rTCConnection = StreamRTCConnectionStore.getRTCConnection(streamKey);
    flag = true;
    if (rTCConnection != null) {
      const result = rTCConnection.setVideoEncoderLatencyProfile(constants4.DEFAULT);
      flag = true;
    }
  }
  return flag;
}
function stopGuest(streamKey) {
  streamKey = undefined;
  if (_null3 != null) {
    streamKey = _null3.streamKey;
  }
  let flag = streamKey === streamKey;
  if (flag) {
    if (null != _null3) {
      const rTCConnection = StreamRTCConnectionStore.getRTCConnection(_null3.streamKey);
      if (rTCConnection != null) {
        rTCConnection.setAvSyncEnabled(_null3.inputGuest.host, true);
      }
      const inputGuest = _null3.inputGuest;
      inputGuest.shutdown();
      _null3 = null;
    }
    flag = true;
    const tmp10 = null != _null && null == c15 && null == _null3;
    if (tmp10) {
      if (null != c14) {
        _null.off(InputEvent.InputEvent.Disconnect, c14);
      }
      _null.close();
      c14 = null;
      _null = null;
      flag = true;
    }
  }
  return flag;
}
let closure_7 = Constants4.isPassTheControllerBlocked;
({ ApplicationStreamDeleteReasons: metroImportAll, RTCConnectionStates: c9, VoiceFlags: c10 } = Constants);
const StreamTypes = Constants3.StreamTypes;
const constants4 = Constants2.VideoEncoderLatencyProfile;
let c13 = null;
let c14 = null;
let c15 = null;
const authStore3 = null;
let c17 = null;
const set = new Set();
const Store = get_initializedDefault.Store;
class PassTheControllerStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, RTCConnectionStore, RunningGameStore, StreamRTCConnectionStore);
  }
  isSelfPassingController(encodeStreamKeyResult) {
    let streamKey;
    if (_null2 != null) {
      streamKey = _null2.streamKey;
    }
    return streamKey === encodeStreamKeyResult;
  }
  isStreamPassingController(arg0) {
    return set.has(arg0);
  }
  isSelfHoldingController(arg0) {
    let streamKey;
    if (_null3 != null) {
      streamKey = _null3.streamKey;
    }
    return streamKey === arg0;
  }
  getInputGuest(arg0) {
    let streamKey;
    if (_null3 != null) {
      streamKey = _null3.streamKey;
    }
    let inputGuest = null;
    if (streamKey === arg0) {
      inputGuest = _null3.inputGuest;
    }
    return inputGuest;
  }
  getControllerHolderId(encodeStreamKeyResult) {
    let streamKey;
    if (_null2 != null) {
      streamKey = _null2.streamKey;
    }
    let tmp2 = null;
    if (streamKey === encodeStreamKeyResult) {
      tmp2 = c17;
    }
    return tmp2;
  }
  getGuestStreamKey() {
    let streamKey;
    if (_null3 != null) {
      streamKey = _null3.streamKey;
    }
    if (streamKey == null) {
      streamKey = null;
    }
    return streamKey;
  }
  getGuestHostId(guestStreamKey) {
    let streamKey;
    if (_null3 != null) {
      streamKey = _null3.streamKey;
    }
    let host = null;
    if (streamKey === guestStreamKey) {
      host = _null3.inputGuest.host;
    }
    return host;
  }
  getHostStreamKeys() {
    return set;
  }
}
const prototype = PassTheControllerStore.prototype;
PassTheControllerStore.displayName = "PassTheControllerStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    set.clear();
    c17 = null;
  },
  PASS_THE_CONTROLLER_UPDATE: function handlePassTheController(isHost) {
    let active;
    let h;
    let host;
    let id;
    let inputConnection1;
    let obj;
    let obj2;
    let streamKey;
    let tmp2;
    let tmp28;
    let tmp502;
    const h2 = function h() {
      if (inputConnection1 === inputConnection) {
        if (null != obj) {
          obj = { type: "PASS_THE_CONTROLLER_UPDATE", streamKey: obj.streamKey, isHost: true, host: id.getId(), active: false };
          const dispatch = DispatcherDefault.dispatch;
          DispatcherDefault;
          dispatch(obj);
        }
        if (null != obj2) {
          obj2 = DispatcherDefault;
          const obj3 = { type: "PASS_THE_CONTROLLER_UPDATE", streamKey: obj2.streamKey, isHost: false, host: obj2.inputGuest.host, active: false };
          obj2.dispatch(obj3);
        }
      }
    };
    ({ streamKey, host, active } = isHost);
    if (isHost.isHost) {
      let tmp31;
      if (active) {
        let streamKey1;
        if (obj != null) {
          streamKey1 = obj.streamKey;
        }
        let flag5 = false;
        if (streamKey1 !== streamKey) {
          const streamPid = StreamRTCConnectionStore.getStreamPid(streamKey);
          flag5 = false;
          const obj9 = StreamRTCConnectionStore;
          if (null != streamPid) {
            flag5 = false;
            if (!closure_7(streamKey)) {
              let tmp44;
              if (null != inputConnection1) {
                tmp44 = inputConnection1;
              } else {
                const rTCConnection = RTCConnectionStore.getRTCConnection();
                tmp44 = null;
                if (null != rTCConnection) {
                  const self5 = this;
                  const self6 = this;
                  const inputConnection = new inputConnection1(14882).InputConnection(rTCConnection, AuthenticationStore.getId());
                  h = h2;
                  inputConnection.on(inputConnection1(14889).InputEvent.Disconnect, h);
                  inputConnection.connect();
                  inputConnection1 = inputConnection;
                  tmp44 = inputConnection;
                }
              }
              let flag6 = null != tmp44;
              if (flag6) {
                if (obj != null) {
                  const inputHost = obj.inputHost;
                  inputHost.shutdown();
                }
                c17 = null;
                const rTCConnection1 = obj9.getRTCConnection(streamKey);
                if (rTCConnection1 != null) {
                  const result = rTCConnection1.setVideoEncoderLatencyProfile(constants4.ULTRA_LOW);
                }
                obj = { streamKey, inputHost: tmp502 };
                const tmp50 = InputHostDefault;
                const obj8 = inputConnection1(6401);
                let guildId = obj8.decodeStreamKey(streamKey).guildId;
                if (guildId == null) {
                  guildId = null;
                }
                const self7 = this;
                const self8 = this;
                flag6 = true;
                tmp502 = new tmp50(tmp44, streamPid, guildId, handleControllerGrab, handleControllerDrop);
              }
              flag5 = flag6;
            }
          }
        }
        tmp31 = flag5;
      } else {
        tmp31 = stopHost(streamKey);
      }
      tmp2 = tmp31;
    } else if (active) {
      let streamKey2;
      if (obj2 != null) {
        streamKey2 = obj2.streamKey;
      }
      let flag2 = false;
      if (streamKey2 !== streamKey) {
        let tmp13;
        if (null != inputConnection1) {
          tmp13 = inputConnection1;
        } else {
          const rTCConnection2 = RTCConnectionStore.getRTCConnection();
          tmp13 = null;
          if (null != rTCConnection2) {
            const self = this;
            const self2 = this;
            inputConnection1 = new inputConnection1(14882).InputConnection(rTCConnection2, AuthenticationStore.getId());
            h = h2;
            inputConnection1.on(inputConnection1(14889).InputEvent.Disconnect, h);
            inputConnection1.connect();
            tmp13 = inputConnection1;
          }
        }
        let flag3 = null != tmp13;
        if (flag3) {
          if (null != obj2) {
            const rTCConnection3 = StreamRTCConnectionStore.getRTCConnection(obj2.streamKey);
            if (rTCConnection3 != null) {
              rTCConnection3.setAvSyncEnabled(obj2.inputGuest.host, true);
            }
            const inputGuest = obj2.inputGuest;
            inputGuest.shutdown();
            obj2 = null;
          }
          const rTCConnection4 = StreamRTCConnectionStore.getRTCConnection(streamKey);
          if (rTCConnection4 != null) {
            rTCConnection4.setAvSyncEnabled(host, false);
          }
          obj2 = { streamKey, inputGuest: tmp28 };
          const self3 = this;
          const self4 = this;
          flag3 = true;
          tmp28 = new InputGuestDefault(tmp13, host, streamKey);
        }
        flag2 = flag3;
      }
      tmp2 = flag2;
    } else {
      tmp2 = stopGuest(streamKey);
    }
    return tmp2;
  },
  PASS_THE_CONTROLLER_TAKE_BACK: function handleTakeBack(streamKey) {
    streamKey = undefined;
    if (_null2 != null) {
      streamKey = _null2.streamKey;
    }
    if (streamKey === streamKey.streamKey) {
      if (null != c17) {
        const inputHost = _null2.inputHost;
        inputHost.takeBackController();
      }
    }
    return false;
  },
  STREAM_DELETE: function handleStreamDelete(streamKey) {
    let streamKey1;
    if (_null3 != null) {
      streamKey1 = _null3.streamKey;
    }
    if (streamKey1 === streamKey.streamKey) {
      let tmp4;
      if (streamKey.reason === metroImportAll.USER_REQUESTED) {
        const streamKey2 = streamKey.streamKey;
        tmp4 = set.delete(streamKey2) || stopGuest(streamKey2);
        const deleteResult = set.delete(streamKey2) || stopGuest(streamKey2);
      }
      return tmp4;
    }
    streamKey = streamKey.streamKey;
    const tmp3 = stopHost(streamKey);
    tmp4 = tmp3 || stopGuest(streamKey);
  },
  STREAM_START: function handleStreamStart(arg0) {
    let channelId;
    let guildId;
    let streamType;
    ({ streamType, guildId, channelId } = arg0);
    const obj = StreamKeyUtils;
    const obj2 = { streamType, guildId, channelId, ownerId: AuthenticationStore.getId() };
    const encodeStreamKeyResult = obj.encodeStreamKey(obj2);
    let streamKey;
    if (_null2 != null) {
      streamKey = _null2.streamKey;
    }
    const tmp3 = streamKey === encodeStreamKeyResult && StreamRTCConnectionStore.getStreamPid(encodeStreamKeyResult) !== _null2.inputHost.pid && stopHost(encodeStreamKeyResult);
    return tmp3;
  },
  STREAM_STOP: function handleStreamStop(streamKey) {
    streamKey = streamKey.streamKey;
    const tmp = stopHost(streamKey) || stopGuest(streamKey);
    return tmp;
  },
  RTC_CONNECTION_FLAGS: function handleRTCConnectionFlags(guildId) {
    let CALL;
    let channelId;
    let flags;
    let userId;
    guildId = guildId.guildId;
    ({ flags, userId, channelId } = guildId);
    const encodeStreamKey = StreamKeyUtils.encodeStreamKey;
    StreamKeyUtils;
    if (null != guildId) {
      CALL = StreamTypes.GUILD;
    } else {
      CALL = StreamTypes.CALL;
    }
    const encodeStreamKeyResult = encodeStreamKey({ streamType: CALL, guildId, channelId, ownerId: userId });
    const tmpResult = FlagUtils;
    if (tmpResult.hasFlag(flags, constants3.PASS_THE_CONTROLLER_HOST)) {
      set.add(encodeStreamKeyResult);
    } else {
      set.delete(encodeStreamKeyResult);
      stopGuest(encodeStreamKeyResult);
    }
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function handleRTCConnectionClientDisconnect(arg0) {
    let channelId;
    let context;
    let guildId;
    let userId;
    ({ userId, guildId } = arg0);
    ({ channelId, context } = arg0);
    let tmp3 = context === BaseConnectionEvent.MediaEngineContextTypes.DEFAULT;
    if (tmp3) {
      let CALL;
      const tmp6 = null != _null2 && userId === c17;
      if (tmp6) {
        const inputHost = _null2.inputHost;
        inputHost.takeBackController();
      }
      const encodeStreamKey = tmp(6401).encodeStreamKey;
      StreamKeyUtils;
      if (null != guildId) {
        CALL = StreamTypes.GUILD;
      } else {
        CALL = StreamTypes.CALL;
      }
      const obj = { streamType: CALL, guildId, channelId, ownerId: userId };
      const encodeStreamKeyResult = encodeStreamKey(obj);
      tmp3 = set.delete(encodeStreamKeyResult) || stopGuest(encodeStreamKeyResult);
      const deleteResult = set.delete(encodeStreamKeyResult) || stopGuest(encodeStreamKeyResult);
    }
    return tmp3;
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(context) {
    if (context.context === BaseConnectionEvent.MediaEngineContextTypes.DEFAULT) {
      if (context.state === constants2.DISCONNECTED) {
        const obj = set;
        if (0 !== set.size) {
          obj.clear();
        }
      }
    }
    return false;
  }
};
const passTheControllerStore = new PassTheControllerStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/pass_the_controller/PassTheControllerStore.tsx");

export default passTheControllerStore;
