// Module ID: 6801
// Function ID: 6802
// Name: PassTheControllerStore
// Dependencies: [2140, 502, 6071, 6802, 16109, 1072, 6803, 6808, 1406, 6096, 16110, 16111, 572, 16113, 16116, 504, 2]

// Module 6801 (PassTheControllerStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 6096 */;
import Constants2 from "Constants" /* 6803 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6808 */;
import Constants3 from "Constants" /* 16109 */;
import InputHostDefault from "InputHost" /* 16113 */;
import InputGuestDefault from "InputGuest" /* 16116 */;
import RunningGameStore from "RunningGameStore" /* 2140 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 6802 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let _null, _null2, _null3;

let c10;
let c9;
let metroImportAll;
let tmp;
const FlagUtils = tmp(1406);
function handleControllerGrab(arg0) {
  if (arg0 !== c15) {
    c15 = arg0;
    passTheControllerStore.emitChange();
  }
}
function handleControllerDrop() {
  if (null != c15) {
    c15 = null;
    passTheControllerStore.emitChange();
  }
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
    const tmp10 = null != _null && null == c13 && null == _null3;
    if (tmp10) {
      _null.close();
      _null = null;
      flag = true;
    }
  }
  return flag;
}
let closure_7 = Constants3.isPassTheControllerBlocked;
({ ApplicationStreamDeleteReasons: metroImportAll, RTCConnectionStates: c9, VoiceFlags: c10 } = Constants);
const StreamTypes = Constants2.StreamTypes;
let c12 = null;
const gesture = null;
let c15 = null;
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
      tmp2 = c15;
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
    c15 = null;
  },
  PASS_THE_CONTROLLER_UPDATE: function handlePassTheController(isHost) {
    let active;
    let c13;
    let host;
    let id;
    let inputConnection1;
    let obj2;
    let streamKey;
    let tmp2;
    let tmp27;
    let tmp552;
    const f92781 = () => {
      if (inputConnection1 === inputConnection) {
        if (null != streamKey) {
          const obj = { type: "PASS_THE_CONTROLLER_UPDATE", streamKey: streamKey.streamKey, isHost: true, host: id.getId(), active: false };
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
      let flag5;
      if (active) {
        let streamKey1;
        if (_null2 != null) {
          streamKey1 = tmp29.streamKey;
        }
        let flag6 = false;
        if (streamKey1 !== streamKey) {
          const streamPid = StreamRTCConnectionStore.getStreamPid(streamKey);
          flag6 = false;
          if (null != streamPid) {
            flag6 = false;
            if (!closure_7(streamKey)) {
              let tmp51;
              if (null != inputConnection1) {
                tmp51 = inputConnection1;
              } else {
                const rTCConnection = RTCConnectionStore.getRTCConnection();
                tmp51 = null;
                if (null != rTCConnection) {
                  const self5 = this;
                  const self6 = this;
                  const inputConnection = new inputConnection1(16110).InputConnection(rTCConnection, AuthenticationStore.getId());
                  inputConnection.on(inputConnection1(16111).InputEvent.Disconnect, f92781);
                  inputConnection.connect();
                  inputConnection1 = inputConnection;
                  tmp51 = inputConnection;
                }
              }
              let flag7 = null != tmp51;
              if (flag7) {
                if (_null2 != null) {
                  const inputHost2 = _null2.inputHost;
                  inputHost2.shutdown();
                }
                c15 = null;
                let obj = { streamKey, inputHost: tmp552 };
                const tmp55 = InputHostDefault;
                const obj7 = inputConnection1(6808);
                let guildId = obj7.decodeStreamKey(streamKey).guildId;
                if (guildId == null) {
                  guildId = null;
                }
                const self7 = this;
                const self8 = this;
                _null2 = obj;
                flag7 = true;
                tmp552 = new tmp55(tmp51, streamPid, guildId, handleControllerGrab, handleControllerDrop);
              }
              flag6 = flag7;
            }
          }
        }
        flag5 = flag6;
      } else {
        let streamKey2;
        if (_null2 != null) {
          streamKey2 = tmp29.streamKey;
        }
        flag5 = streamKey2 === streamKey;
        if (flag5) {
          const inputHost = _null2.inputHost;
          inputHost.shutdown();
          _null2 = null;
          c15 = null;
          flag5 = true;
          const tmp36 = null != inputConnection1 && null == _null2 && null == obj2;
          if (tmp36) {
            inputConnection1.close();
            inputConnection1 = null;
            flag5 = true;
          }
        }
      }
      tmp2 = flag5;
    } else if (active) {
      let streamKey3;
      if (obj2 != null) {
        streamKey3 = obj2.streamKey;
      }
      let flag2 = false;
      if (streamKey3 !== streamKey) {
        let tmp12;
        if (null != inputConnection1) {
          tmp12 = inputConnection1;
        } else {
          const rTCConnection1 = RTCConnectionStore.getRTCConnection();
          tmp12 = null;
          if (null != rTCConnection1) {
            const self = this;
            const self2 = this;
            inputConnection1 = new inputConnection1(16110).InputConnection(rTCConnection1, AuthenticationStore.getId());
            inputConnection1.on(inputConnection1(16111).InputEvent.Disconnect, f92781);
            inputConnection1.connect();
            tmp12 = inputConnection1;
          }
        }
        let flag3 = null != tmp12;
        if (flag3) {
          if (null != obj2) {
            const rTCConnection2 = StreamRTCConnectionStore.getRTCConnection(obj2.streamKey);
            if (rTCConnection2 != null) {
              rTCConnection2.setAvSyncEnabled(obj2.inputGuest.host, true);
            }
            const inputGuest = obj2.inputGuest;
            inputGuest.shutdown();
            obj2 = null;
          }
          const rTCConnection3 = StreamRTCConnectionStore.getRTCConnection(streamKey);
          if (rTCConnection3 != null) {
            rTCConnection3.setAvSyncEnabled(host, false);
          }
          obj2 = { streamKey, inputGuest: tmp27 };
          const self3 = this;
          const self4 = this;
          flag3 = true;
          tmp27 = new InputGuestDefault(tmp12, host, streamKey);
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
      if (null != c15) {
        const inputHost = _null2.inputHost;
        inputHost.takeBackController();
      }
    }
    return false;
  },
  STREAM_DELETE: function handleStreamDelete(streamKey) {
    let flag;
    let streamKey1;
    if (_null3 != null) {
      streamKey1 = _null3.streamKey;
    }
    if (streamKey1 === streamKey.streamKey) {
      if (streamKey.reason === metroImportAll.USER_REQUESTED) {
        const streamKey2 = streamKey.streamKey;
        flag = set.delete(streamKey2) || stopGuest(streamKey2);
        const deleteResult = set.delete(streamKey2) || stopGuest(streamKey2);
      }
      return flag;
    }
    streamKey = streamKey.streamKey;
    let streamKey3;
    if (_null2 != null) {
      streamKey3 = _null2.streamKey;
    }
    flag = streamKey3 === streamKey;
    if (flag) {
      const inputHost = _null2.inputHost;
      inputHost.shutdown();
      _null2 = null;
      c15 = null;
      flag = true;
      const tmp7 = null != _null && null == _null2 && null == _null3;
      if (tmp7) {
        _null.close();
        _null = null;
        flag = true;
      }
    }
    if (!flag) {
      flag = stopGuest(streamKey);
    }
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
    let tmp3 = streamKey === encodeStreamKeyResult && StreamRTCConnectionStore.getStreamPid(encodeStreamKeyResult) !== _null2.inputHost.pid;
    if (tmp3) {
      let streamKey1;
      if (_null2 != null) {
        streamKey1 = _null2.streamKey;
      }
      let flag = streamKey1 === encodeStreamKeyResult;
      if (flag) {
        const inputHost = _null2.inputHost;
        inputHost.shutdown();
        _null2 = null;
        c15 = null;
        flag = true;
        const tmp10 = null != _null && null == _null2 && null == c14;
        if (tmp10) {
          _null.close();
          _null = null;
          flag = true;
        }
      }
      tmp3 = flag;
    }
    return tmp3;
  },
  STREAM_STOP: function handleStreamStop(streamKey) {
    streamKey = streamKey.streamKey;
    let streamKey1;
    if (_null2 != null) {
      streamKey1 = _null2.streamKey;
    }
    let flag = streamKey1 === streamKey;
    if (flag) {
      const inputHost = _null2.inputHost;
      inputHost.shutdown();
      _null2 = null;
      c15 = null;
      flag = true;
      const tmp5 = null != _null && null == _null2 && null == c14;
      if (tmp5) {
        _null.close();
        _null = null;
        flag = true;
      }
    }
    if (!flag) {
      flag = stopGuest(streamKey);
    }
    return flag;
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
      const tmp6 = null != _null2 && userId === c15;
      if (tmp6) {
        const inputHost = _null2.inputHost;
        inputHost.takeBackController();
      }
      const encodeStreamKey = tmp(6808).encodeStreamKey;
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
const result = size.fileFinishedImporting("modules/pass_the_controller/PassTheControllerStore.tsx");

export default passTheControllerStore;
