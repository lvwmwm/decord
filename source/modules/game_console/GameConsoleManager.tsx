// Module ID: 15925
// Function ID: 122012
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15925 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function syncLocalState() {
  return _syncLocalState(...arguments);
}
function _syncLocalState() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _syncLocalState = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
({ GAME_CONSOLE_SESSIONS: closure_15, USER_ACTION_REQUIRED_ERROR_CODES: closure_16 } = arg1(dependencyMap[12]));
const MediaEngineContextTypes = arg1(dependencyMap[13]).MediaEngineContextTypes;
let importDefaultResult = importDefault(dependencyMap[14]);
importDefaultResult = new importDefaultResult("GameConsoleManager");
let tmp5 = (arg0) => {
  class GameConsoleManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, GameConsoleManager);
      items1 = [...items];
      obj = closure_6(GameConsoleManager);
      tmp2 = closure_5;
      if (closure_19()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      GameConsoleManager = tmp2Result;
      timeout = new GameConsoleManager(closure_2[18]).Timeout();
      tmp2Result.rollbackCommandTimeout = timeout;
      timeout1 = new GameConsoleManager(closure_2[18]).Timeout();
      tmp2Result.awaitRemoteTimeout = timeout1;
      tmp2Result.actions = {
        WAIT_FOR_REMOTE_SESSION() {
              return tmp2Result.handleWaitForRemoteSession();
            },
        POST_CONNECTION_OPEN() {
              return tmp2Result.handleSessionsChanged();
            },
        SESSIONS_REPLACE() {
              return tmp2Result.handleSessionsChanged();
            },
        AUDIO_TOGGLE_SELF_DEAF(arg0) {
              return tmp2Result.handleAudioStateToggle(arg0);
            },
        AUDIO_TOGGLE_SELF_MUTE(arg0) {
              return tmp2Result.handleAudioStateToggle(arg0);
            },
        VOICE_STATE_UPDATES(arg0) {
              return tmp2Result.handleVoiceStateUpdates(arg0);
            },
        CONSOLE_COMMAND_UPDATE(arg0) {
              return tmp2Result.handleConsoleCommandUpdate(arg0);
            },
        PASSIVE_UPDATE_V2(arg0) {
              return tmp2Result.handleVoiceStateUpdates(arg0);
            },
        REMOTE_SESSION_DISCONNECT() {
              return tmp2Result.handleRemoteSessionDisconnect();
            }
      };
      tmp2Result.maybeConnect = (arr) => {
        const tmp = function findRemoteSession(arr) {
          const awaitingRemoteSessionInfo2 = awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo();
          return arr.find((clientInfo) => {
            let hasItem = set.has(clientInfo.clientInfo.os);
            let tmp3 = null == lib;
            if (!tmp3) {
              tmp3 = lib(closure_2[17]).coercePlatformTypeToConsoleType(lib.type) === clientInfo.clientInfo.os;
              const obj = lib(closure_2[17]);
            }
            if (hasItem) {
              hasItem = tmp3;
            }
            if (hasItem) {
              hasItem = tmp2;
            }
            return hasItem;
          });
        }(arr);
        if (null == tmp) {
          return null;
        } else {
          const awaitRemoteTimeout = tmp2Result.awaitRemoteTimeout;
          awaitRemoteTimeout.stop();
          tmp2Result(closure_2[19]).connectToRemote(tmp.sessionId);
          const voiceStateForSession = store3.getVoiceStateForSession(store.getId(), tmp.sessionId);
          if (null != voiceStateForSession) {
            callback2(voiceStateForSession);
          }
        }
      };
      tmp2Result.handleAudioStateToggle = (syncRemote) => {
        let tmp2Result;
        if (syncRemote.syncRemote) {
          if (tmp === constants.DEFAULT) {
            const isSelfDeafResult = closure_10.isSelfDeaf();
            const isSelfMuteResult = closure_10.isSelfMute();
            const id = store.getId();
            const remoteSessionId = store4.getRemoteSessionId();
            if (null != remoteSessionId) {
              const voiceStateForSession = store3.getVoiceStateForSession(id, remoteSessionId);
              tmp2Result = voiceStateForSession;
              if (null != voiceStateForSession) {
                if (!tmp3) {
                  let obj = tmp2Result(closure_2[19]);
                  obj = { selfDeaf: isSelfDeafResult, selfMute: isSelfMuteResult };
                  const result = obj.remoteVoiceStateUpdate(remoteSessionId, obj);
                  const rollbackCommandTimeout = tmp2Result.rollbackCommandTimeout;
                  rollbackCommandTimeout.start(3000, () => {
                    callback(voiceStateForSession);
                  });
                }
                const tmp3 = voiceStateForSession.selfDeaf === isSelfDeafResult && voiceStateForSession.selfMute === isSelfMuteResult;
              }
            }
          }
        }
      };
      tmp2Result.handleVoiceStateUpdates = (voiceStates) => {
        voiceStates = voiceStates.voiceStates;
        const remoteSessionId = store4.getRemoteSessionId();
        if (null == remoteSessionId) {
          const mapped = voiceStates.map((sessionId) => {
            sessionId = sessionId.sessionId;
            let sessionById = null;
            if (null != sessionId) {
              sessionById = sessionById.getSessionById(sessionId);
            }
            return sessionById;
          });
          return tmp2Result.maybeConnect(mapped.filter(tmp2Result(closure_2[20]).isNotNullish));
        } else {
          const found = voiceStates.find((sessionId) => sessionId.sessionId === remoteSessionId);
          if (null != found) {
            const rollbackCommandTimeout = tmp2Result.rollbackCommandTimeout;
            rollbackCommandTimeout.stop();
            callback2(found);
          }
        }
      };
      tmp2Result.handleSessionsChanged = () => {
        const remoteSessionId = store4.getRemoteSessionId();
        let tmp2 = null != remoteSessionId;
        if (tmp2) {
          tmp2 = null == store2.getSessionById(remoteSessionId);
        }
        if (tmp2) {
          tmp2Result(closure_2[19]).disconnectRemote();
          const obj = tmp2Result(closure_2[19]);
        }
        if (null == remoteSessionId) {
          const _Object = Object;
          tmp2Result.maybeConnect(Object.values(store2.getSessions()));
        }
      };
      tmp2Result.handleWaitForRemoteSession = () => {
        const awaitRemoteTimeout = tmp2Result.awaitRemoteTimeout;
        awaitRemoteTimeout.start(60000, () => {
          let obj = callback(closure_2[19]);
          obj.disconnectRemote();
          obj = {};
          const intl = callback(closure_2[22]).intl;
          obj.title = intl.string(callback(closure_2[22]).t.wGMxr3);
          const intl2 = callback(closure_2[22]).intl;
          obj.body = intl2.string(callback(closure_2[22]).t.i5k8b5);
          callback2(closure_2[21]).show(obj);
        });
      };
      tmp2Result.handleConsoleCommandUpdate = (arg0) => {
        let error;
        let result;
        ({ result, error } = arg0);
        if ("failed" === result) {
          if (null != error) {
            closure_18.info("Console command Error result:", result, error);
            const awaitingRemoteSessionInfo = store4.getAwaitingRemoteSessionInfo();
            let commandId;
            if (null != awaitingRemoteSessionInfo) {
              commandId = awaitingRemoteSessionInfo.commandId;
            }
            if (commandId === tmp) {
              const deviceId = awaitingRemoteSessionInfo.deviceId;
              let str2 = "";
              if (null != deviceId) {
                str2 = deviceId;
              }
              let device = store4.getDevice(awaitingRemoteSessionInfo.type, str2);
              if (null == device) {
                let obj = { id: "id" };
                const intl = tmp2Result(closure_2[22]).intl;
                obj.platform = intl.string(tmp2Result(closure_2[22]).t.UQMV/E);
                const intl2 = tmp2Result(closure_2[22]).intl;
                obj.name = intl2.string(tmp2Result(closure_2[22]).t.UQMV/E);
                device = obj;
              }
              const tmp8Result = callback(closure_2[23])(device, result, error);
              if (null != tmp8Result) {
                obj = callback(closure_2[24]);
                obj = {};
                ({ title: obj2.title, body: obj2.body, errorCodeMessage: obj2.errorCodeMessage } = tmp8Result);
                let type;
                if (tmp8Result.isAccountLinkError) {
                  type = awaitingRemoteSessionInfo.type;
                }
                obj.reconnectPlatformType = type;
                result = obj.showSelfDismissableAlert(obj);
              }
              if (set.has(error.code)) {
                const awaitRemoteTimeout = tmp2Result.awaitRemoteTimeout;
                if (awaitRemoteTimeout.isStarted()) {
                  const awaitRemoteTimeout2 = tmp2Result.awaitRemoteTimeout;
                  awaitRemoteTimeout2.start(180000, () => callback(closure_2[19]).disconnectRemote(), true);
                }
              }
              if (tmp2) {
                tmp2Result(closure_2[19]).disconnectRemote();
                const obj3 = tmp2Result(closure_2[19]);
              }
              const tmp8 = callback(closure_2[23]);
            }
          }
        }
      };
      tmp2Result.handleRemoteSessionDisconnect = () => {
        const awaitRemoteTimeout = tmp2Result.awaitRemoteTimeout;
        awaitRemoteTimeout.stop();
      };
      return tmp2Result;
    }
  }
  const arg1 = GameConsoleManager;
  callback2(GameConsoleManager, arg0);
  return callback(GameConsoleManager);
}(importDefault(dependencyMap[25]));
tmp5 = new tmp5();
const tmp2 = arg1(dependencyMap[12]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/game_console/GameConsoleManager.tsx");

export default tmp5;
