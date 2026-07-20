// Module ID: 16040
// Function ID: 123184
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 16040 (_createForOfIteratorHelperLoose)
let NativeEventEmitter;
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ DeviceEventEmitter: closure_9, NativeEventEmitter } = arg1(dependencyMap[6]));
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
let closure_18 = importDefault(dependencyMap[15]);
let closure_19 = importDefault(dependencyMap[16]);
let closure_20 = importDefault(dependencyMap[17]);
const ApplicationStreamStates = arg1(dependencyMap[18]).ApplicationStreamStates;
const MediaEngineContextTypes = arg1(dependencyMap[19]).MediaEngineContextTypes;
let importDefaultResult = importDefault(dependencyMap[20]);
importDefaultResult = new importDefaultResult("TelecomManager");
importDefaultResult.enableNativeLogger(true);
let closure_24 = { Ringing: 0, [0]: "Ringing", Connecting: 1, [1]: "Connecting", Connected: 2, [2]: "Connected" };
const nativeEventEmitter = new NativeEventEmitter(importDefault(dependencyMap[21]));
let tmp6 = (arg0) => {
  class TelecomManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, TelecomManager);
      items1 = [...items];
      obj = closure_7(TelecomManager);
      tmp2 = closure_6;
      if (closure_28()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      closure_0 = tmp2Result;
      map = new Map();
      result = map.set(closure_17, () => tmp2Result.reconcileTelecomState());
      result1 = result.set(closure_15, () => tmp2Result.handleMuteStoreChange());
      result2 = result1.set(closure_11, () => tmp2Result.handleScreenShareStoreChange());
      tmp2Result.stores = result2.set(closure_13, () => tmp2Result.handleIncomingCallStoreChange());
      tmp2Result.actions = {
        CALL_CREATE(arg0) {
              return tmp2Result.handleCallCreate(arg0);
            },
        CALL_UPDATE(arg0) {
              return tmp2Result.handleCallUpdate(arg0);
            },
        CALL_DELETE(arg0) {
              return tmp2Result.handleCallDelete(arg0);
            }
      };
      tmp2Result.currentCall = null;
      tmp2Result.isInitialized = false;
      tmp2Result.lastMuteState = null;
      set = new Set();
      tmp2Result.registeredIncomingCallIds = set;
      tmp2Result.lastScreenShareActive = null;
      tmp2Result.pendingScreenShareOffSyncTimeout = null;
      tmp2Result.reconcilePromise = null;
      tmp2Result.needsReconcile = false;
      tmp2Result.hostDestroySubscription = null;
      tmp2Result.pendingMutePreference = null;
      tmp2Result.ringtone = null;
      tmp2Result.handleHostDestroy = () => {
        if (tmp2Result.isEnabled()) {
          if (null != tmp2Result.currentCall) {
            if (tmp2Result.currentCall.state === closure_24.Ringing) {
              closure_23.info("Activity destroyed with ringing call, cancelling incoming call");
              tmp2Result.cancelIncomingCall(tmp2Result.currentCall.channelId);
            } else {
              closure_23.info("Activity destroyed with active call, disconnecting from voice channel");
              callback(closure_2[22]).disconnect();
              const obj = callback(closure_2[22]);
            }
          }
        }
      };
      tmp2Result.handleEndCallRequested = (callId) => {
        closure_23.info("Received end call request from Call Bar:", callId.callId);
        if (null != tmp2Result.currentCall) {
          if (callId.callId === tmp2Result.currentCall.channelId) {
            if (tmp2Result.currentCall.state === closure_24.Ringing) {
              closure_23.info("Rejecting ringing call from Call Bar:", tmp2Result.currentCall.channelId);
              callback(closure_2[23]).stopRinging(tmp2Result.currentCall.channelId);
              tmp2Result.clearCall(tmp2Result.currentCall.channelId);
              const obj2 = callback(closure_2[23]);
            } else {
              callback(closure_2[22]).disconnect();
              const obj = callback(closure_2[22]);
            }
            return tmp8;
          }
        }
      };
      tmp2Result.handleSetForegroundRequested = (callId) => {
        closure_23.info("Received set foreground request from Call Bar");
        if (null != tmp2Result.currentCall) {
          if (callId.callId === tmp2Result.currentCall.channelId) {
            const channel = store.getChannel(tmp2Result.currentCall.channelId);
            if (null != channel) {
              const result = tmp2Result(closure_2[24]).navigateToVoiceChannel(channel, "Call Bar");
              const obj = tmp2Result(closure_2[24]);
            }
          }
        }
      };
      tmp2Result.handleMicMuteRequested = (callId) => {
        closure_23.info("Received mic mute request from Call Bar:", callId.callId, "isMuted:", callId.isMuted);
        let tmp2 = null != tmp2Result.currentCall;
        if (tmp2) {
          tmp2 = callId.callId === tmp2Result.currentCall.channelId;
        }
        if (tmp2) {
          let tmp6 = tmp2Result.currentCall.state !== closure_24.Ringing;
          if (tmp6) {
            tmp6 = tmp2Result.currentCall.state !== closure_24.Connecting;
          }
          if (!tmp6) {
            tmp2Result.pendingMutePreference = callId.isMuted;
          }
          if (selfMute.isSelfMute() !== callId.isMuted) {
            closure_23.info("Updating Call Bar -> Discord mute state:", callId.isMuted);
            callback(closure_2[25]).toggleSelfMute();
            const obj = callback(closure_2[25]);
          }
        }
      };
      tmp2Result.handleScreenShareRequested = (callId) => {
        closure_23.info("Received screen share request from Call Bar:", callId.callId, "isEnabled:", callId.isEnabled);
        if (null != tmp2Result.currentCall) {
          if (callId.callId === tmp2Result.currentCall.channelId) {
            const channel = store.getChannel(tmp2Result.currentCall.channelId);
            if (null != channel) {
              const currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
              let tmp3 = null != currentUserActiveStream;
              if (tmp3) {
                tmp3 = currentUserActiveStream.state === constants.ACTIVE;
              }
              if (callId.isEnabled) {
                if (!tmp3) {
                  const videoPermission = tmp2Result(closure_2[26]).getVideoPermission(channel);
                  const obj = tmp2Result(closure_2[26]);
                  if (obj2.getOSRequirement()) {
                    if (videoPermission) {
                      obj3.info("Starting screen share from Call Bar");
                      tmp2Result(closure_2[27]).startStream();
                      const obj4 = tmp2Result(closure_2[27]);
                    } else {
                      obj3.warn("Cannot start screen share from Call Bar: user lacks streaming permission in this channel");
                    }
                  } else {
                    obj3.warn("Cannot start screen share from Call Bar: OS version does not meet requirements");
                  }
                  const obj2 = tmp2Result(closure_2[27]);
                }
              }
              if (tmp13) {
                closure_23.info("Stopping screen share from Call Bar");
                tmp2Result(closure_2[27]).stopScreenshare();
                const obj5 = tmp2Result(closure_2[27]);
              }
              const tmp13 = !callId.isEnabled && tmp3;
            }
          }
        }
      };
      tmp2Result.handleAnswerCallRequested = (callId) => {
        closure_23.info("Received answer call request from Call Bar:", callId.callId);
        let tmp2 = null != tmp2Result.currentCall;
        if (tmp2) {
          tmp2 = callId.callId === tmp2Result.currentCall.channelId;
        }
        if (tmp2) {
          if (tmp2Result.currentCall.state === closure_24.Ringing) {
            tmp2Result.stopRingtone();
            tmp2Result.currentCall.state = closure_24.Connecting;
            closure_23.info("Answering incoming call, joining voice channel:", tmp2Result.currentCall.channelId);
            const voiceChannel = callback(closure_2[22]).selectVoiceChannel(tmp2Result.currentCall.channelId);
            const obj = callback(closure_2[22]);
          } else {
            closure_23.warn("Answer requested but call is not ringing:", tmp2Result.currentCall.state);
          }
        }
      };
      tmp2Result.handleCallCreate = (channelId) => {
        let isEnabledResult = tmp2Result.isEnabled();
        if (isEnabledResult) {
          isEnabledResult = tmp2Result(closure_2[28]).isMetaQuest();
          const obj = tmp2Result(closure_2[28]);
        }
        if (isEnabledResult) {
          tmp2Result.processIncomingRing(channelId.channelId, channelId.ongoingRings);
        }
      };
      tmp2Result.handleCallUpdate = (channelId) => {
        let isEnabledResult = tmp2Result.isEnabled();
        if (isEnabledResult) {
          isEnabledResult = tmp2Result(closure_2[28]).isMetaQuest();
          const obj = tmp2Result(closure_2[28]);
        }
        if (isEnabledResult) {
          tmp2Result.processIncomingRing(channelId.channelId, channelId.ongoingRings);
        }
      };
      tmp2Result.handleCallDelete = (channelId) => {
        let isEnabledResult = tmp2Result.isEnabled();
        if (isEnabledResult) {
          isEnabledResult = tmp2Result(closure_2[28]).isMetaQuest();
          const obj = tmp2Result(closure_2[28]);
        }
        if (isEnabledResult) {
          const currentCall = tmp2Result.currentCall;
          channelId = undefined;
          if (null != currentCall) {
            channelId = currentCall.channelId;
          }
          isEnabledResult = channelId === channelId.channelId;
        }
        if (isEnabledResult) {
          isEnabledResult = tmp2Result.isPendingIncomingCall(tmp2Result.currentCall);
        }
        if (isEnabledResult) {
          closure_23.info("Pending incoming call deleted, cancelling incoming call:", channelId.channelId);
          tmp2Result.cancelIncomingCall(channelId.channelId);
        }
      };
      tmp2Result.handleIncomingCallAnswered = (callId) => {
        closure_23.info("Received incoming call answered from telecom:", callId.callId);
        const registeredIncomingCallIds = tmp2Result.registeredIncomingCallIds;
        registeredIncomingCallIds.delete(callId.callId);
        const obj = callback(closure_2[29]);
        callback(closure_2[29]).endCall(callId.callId).catch((arg0) => {
          closure_23.warn("Failed to end answered telecom call:", arg0);
        });
        const endCallResult = callback(closure_2[29]).endCall(callId.callId);
        const voiceChannel = callback(closure_2[22]).selectVoiceChannel(callId.callId);
      };
      tmp2Result.handleIncomingCallRejected = (callId) => {
        closure_23.info("Received incoming call rejected from telecom:", callId.callId);
        const registeredIncomingCallIds = tmp2Result.registeredIncomingCallIds;
        registeredIncomingCallIds.delete(callId.callId);
        const obj = callback(closure_2[23]);
        callback(closure_2[23]).stopRinging(callId.callId).catch((arg0) => {
          closure_23.warn("Failed to stop ringing after telecom reject:", arg0);
        });
      };
      return tmp2Result;
    }
  }
  const dependencyMap = TelecomManager;
  callback3(TelecomManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const self = this;
      if (!this.isInitialized) {
        closure_23.info("Initializing CallKitManager using Telecom framework");
        const hostDestroySubscription = self.hostDestroySubscription;
        if (null != hostDestroySubscription) {
          hostDestroySubscription.remove();
        }
        self.hostDestroySubscription = closure_25.addListener("onHostDestroy", self.handleHostDestroy);
        closure_9.addListener("telecom-end-call-requested", self.handleEndCallRequested);
        closure_9.addListener("telecom-set-foreground-requested", self.handleSetForegroundRequested);
        closure_9.addListener("telecom-mic-mute-requested", self.handleMicMuteRequested);
        closure_9.addListener("telecom-screen-share-requested", self.handleScreenShareRequested);
        closure_9.addListener("telecom-incoming-call-answered", self.handleIncomingCallAnswered);
        closure_9.addListener("telecom-incoming-call-rejected", self.handleIncomingCallRejected);
        closure_9.addListener("telecom-answer-call-requested", self.handleAnswerCallRequested);
        self.isInitialized = true;
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "_terminate",
    value() {
      let done;
      const self = this;
      if (this.isInitialized) {
        const hostDestroySubscription = self.hostDestroySubscription;
        if (null != hostDestroySubscription) {
          hostDestroySubscription.remove();
        }
        self.hostDestroySubscription = null;
        closure_9.removeAllListeners("telecom-end-call-requested");
        closure_9.removeAllListeners("telecom-set-foreground-requested");
        closure_9.removeAllListeners("telecom-mic-mute-requested");
        closure_9.removeAllListeners("telecom-screen-share-requested");
        closure_9.removeAllListeners("telecom-incoming-call-answered");
        closure_9.removeAllListeners("telecom-incoming-call-rejected");
        closure_9.removeAllListeners("telecom-answer-call-requested");
        const tmp12 = callback5(self.registeredIncomingCallIds);
        let iter = tmp12();
        if (!iter.done) {
          do {
            let tmp13 = closure_1;
            let tmp14 = closure_2;
            let obj = closure_1(closure_2[29]);
            let endCallResult = obj.endCall(iter.value);
            let catchPromise = endCallResult.catch((arg0) => {
              closure_23.warn("Failed to end telecom incoming call on terminate:", arg0);
            });
            let iter2 = tmp12();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
        const registeredIncomingCallIds = self.registeredIncomingCallIds;
        registeredIncomingCallIds.clear();
        const result = self.clearPendingScreenShareOffSync();
        self.stopRingtone();
        self.reportCallEnded();
        self.reconcilePromise = null;
        self.needsReconcile = false;
        self.isInitialized = false;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "isEnabled",
    value() {
      return this.isInitialized;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "processIncomingRing",
    value(arg0, arg1) {
      const self = this;
      const id = store.getId();
      if (id in arg1) {
        if (null != arg1[id]) {
          const currentCall2 = self.currentCall;
          let channelId;
          if (null != currentCall2) {
            channelId = currentCall2.channelId;
          }
          if (null == channelId.getChannelId()) {
            const currentCall3 = self.currentCall;
            let channelId1;
            if (null != currentCall3) {
              channelId1 = currentCall3.channelId;
            }
            self.reportIncomingCall(arg0);
          }
        }
      }
      const currentCall = self.currentCall;
      let channelId2;
      if (null != currentCall) {
        channelId2 = currentCall.channelId;
      }
      let tmp4 = channelId2 === arg0;
      if (tmp4) {
        tmp4 = self.currentCall.state === closure_24.Ringing;
      }
      if (tmp4) {
        closure_23.info("Call no longer ringing, cancelling incoming call:", arg0);
        self.cancelIncomingCall(arg0);
      }
    }
  };
  items[4] = {
    key: "reportIncomingCall",
    value(channelId) {
      const self = this;
      const callback = this;
      const callback2 = channelId;
      const channel = channel.getChannel(channelId);
      if (null != channel) {
        if (tmp3) {
          self.cancelIncomingCall(self.currentCall.channelId);
        }
        const tmp3 = null != self.currentCall && self.currentCall.channelId !== channelId && self.isPendingIncomingCall(self.currentCall);
        const channelName = callback(TelecomManager[30]).computeChannelName(channel, closure_20, closure_18);
        const guildId = channel.getGuildId();
        let tmp11 = null;
        if (null != guildId) {
          tmp11 = guildId;
        }
        let obj = { channelId, guildId: tmp11, channelName, state: closure_24.Ringing };
        self.currentCall = obj;
        closure_23.info("Reporting incoming call to Telecom:", channelId, "callerName:", channelName);
        self.startRingtone();
        const obj2 = callback(TelecomManager[30]);
        let tmp21 = null;
        if (null != tmp11) {
          obj = { guildId: tmp11 };
          tmp21 = obj;
        }
        const obj4 = callback2(TelecomManager[29]);
        const reportIncomingCallResult = callback2(TelecomManager[29]).reportIncomingCall(channelId, channelName, tmp21);
        callback2(TelecomManager[29]).reportIncomingCall(channelId, channelName, tmp21).then((arg0) => {
          if (!arg0) {
            closure_23.warn("Failed to report incoming call: resolved false");
            self.clearCall(arg0);
          }
        }).catch((arg0) => {
          closure_23.warn("Failed to report incoming call:", arg0);
          self.clearCall(arg0);
        });
        const nextPromise = callback2(TelecomManager[29]).reportIncomingCall(channelId, channelName, tmp21).then((arg0) => {
          if (!arg0) {
            closure_23.warn("Failed to report incoming call: resolved false");
            self.clearCall(arg0);
          }
        });
      } else {
        closure_23.warn("Cannot report incoming call: channel not found:", channelId);
      }
    }
  };
  items[5] = {
    key: "cancelIncomingCall",
    value(arg0) {
      let closure_0 = this;
      const callback2 = arg0;
      closure_23.info("Cancelling incoming call:", arg0);
      const obj = callback2(TelecomManager[29]);
      const cancelIncomingCallResult = callback2(TelecomManager[29]).cancelIncomingCall(arg0);
      return callback2(TelecomManager[29]).cancelIncomingCall(arg0).then(() => {
        self.clearCall(arg0);
        return true;
      }).catch((arg0) => {
        closure_23.warn("Failed to cancel incoming call:", arg0);
        self.clearCall(arg0);
        return false;
      });
    }
  };
  items[6] = {
    key: "isPendingIncomingCall",
    value(state) {
      let tmp = state.state === closure_24.Ringing;
      if (!tmp) {
        tmp = state.state === closure_24.Connecting;
      }
      return tmp;
    }
  };
  items[7] = {
    key: "reconcileTelecomState",
    value() {
      const self = this;
      const callback = this;
      let isEnabledResult = this.isEnabled();
      if (isEnabledResult) {
        isEnabledResult = callback(TelecomManager[28]).isMetaQuest();
        const obj = callback(TelecomManager[28]);
      }
      if (isEnabledResult) {
        if (null == self.reconcilePromise) {
          self.reconcilePromise = self.doReconcile().finally(() => {
            self.reconcilePromise = null;
            if (self.needsReconcile) {
              self.needsReconcile = false;
              const result = self.reconcileTelecomState();
            }
          });
          const doReconcileResult = self.doReconcile();
        } else {
          self.needsReconcile = true;
        }
      }
    }
  };
  const obj6 = { key: "doReconcile" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_1 = callback(tmp);
  obj6.value = function doReconcile() {
    return callback2(...arguments);
  };
  items[8] = obj6;
  items[9] = {
    key: "handleIncomingCallStoreChange",
    value() {
      let done;
      let iter2;
      let iter4;
      const self = this;
      const callback = this;
      if (!obj.isMetaQuest()) {
        if (self.isEnabled()) {
          const _Set = Set;
          const id = store.getId();
          const set = new Set();
          const tmp9 = callback5(calls.getCalls());
          let iter = tmp9();
          if (!iter.done) {
            do {
              let value = iter.value;
              let ringing = value.ringing;
              if (ringing.includes(id)) {
                let addResult = set.add(value.channelId);
              }
              iter2 = tmp9();
              iter = iter2;
            } while (!iter2.done);
          }
          const tmp12 = callback5(self.registeredIncomingCallIds);
          let iter3 = tmp12();
          if (!iter3.done) {
            do {
              value = iter3.value;
              if (!set.has(value)) {
                let registeredIncomingCallIds = self.registeredIncomingCallIds;
                let deleteResult = registeredIncomingCallIds.delete(value);
                let tmp14 = closure_1;
                let tmp15 = closure_2;
                let obj3 = closure_1(closure_2[29]);
                let endCallResult = obj3.endCall(value);
                let catchPromise = endCallResult.catch((arg0) => {
                  closure_23.warn("Failed to end telecom call:", arg0);
                });
              }
              iter4 = tmp12();
              iter3 = iter4;
            } while (!iter4.done);
          }
          function _loop(value) {
            const self = value;
            const registeredIncomingCallIds = self.registeredIncomingCallIds;
            if (!registeredIncomingCallIds.has(value)) {
              const registeredIncomingCallIds2 = self.registeredIncomingCallIds;
              registeredIncomingCallIds2.add(value);
              const obj = callback(closure_2[29]);
              const registerIncomingCallResult = callback(closure_2[29]).registerIncomingCall(value);
              callback(closure_2[29]).registerIncomingCall(value).then((arg0) => {
                if (!arg0) {
                  closure_23.warn("Failed to register incoming call with telecom: resolved false");
                  const registeredIncomingCallIds = arg0.registeredIncomingCallIds;
                  registeredIncomingCallIds.delete(arg0);
                }
              }).catch((arg0) => {
                closure_23.warn("Failed to register incoming call with telecom:", arg0);
                const registeredIncomingCallIds = arg0.registeredIncomingCallIds;
                registeredIncomingCallIds.delete(arg0);
              });
              const nextPromise = callback(closure_2[29]).registerIncomingCall(value).then((arg0) => {
                if (!arg0) {
                  closure_23.warn("Failed to register incoming call with telecom: resolved false");
                  const registeredIncomingCallIds = arg0.registeredIncomingCallIds;
                  registeredIncomingCallIds.delete(arg0);
                }
              });
            }
          }
          const tmp18 = callback5(set);
          let iter5 = tmp18();
          if (!iter5.done) {
            do {
              let _loopResult = _loop(iter5.value);
              let iter6 = tmp18();
              iter5 = iter6;
              done = iter6.done;
            } while (!done);
          }
        }
      }
    }
  };
  const obj8 = { key: "startCall" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback("startCall");
  obj8.value = function startCall(channelId, arg1) {
    return callback(...arguments);
  };
  items[10] = obj8;
  items[11] = {
    key: "endCall",
    value: function endCall(channelId) {
      let closure_0 = this;
      const callback2 = channelId;
      closure_23.info("Ending call:", channelId.channelId);
      const obj = callback2(TelecomManager[29]);
      const endCallResult = callback2(TelecomManager[29]).endCall(channelId.channelId);
      return callback2(TelecomManager[29]).endCall(channelId.channelId).then((arg0) => {
        self.clearCall(arg0.channelId);
        return arg0;
      }).catch((arg0) => {
        closure_23.warn("Failed to end call:", arg0);
        self.clearCall(arg0.channelId);
        return false;
      });
    }
  };
  items[12] = {
    key: "reportCallEnded",
    value: function reportCallEnded() {
      const self = this;
      closure_23.info("Reporting call ended");
      if (null == this.currentCall) {
        let resolved = Promise.resolve(true);
      } else if (self.currentCall.state === closure_24.Ringing) {
        resolved = self.cancelIncomingCall(self.currentCall.channelId);
      } else {
        resolved = self.endCall(self.currentCall);
      }
      return resolved;
    }
  };
  items[13] = {
    key: "setCallActive",
    value: function setCallActive(channelId, isSelfMuteResult) {
      const self = this;
      const currentCall = this.currentCall;
      channelId = undefined;
      if (null != currentCall) {
        channelId = currentCall.channelId;
      }
      if (channelId === channelId) {
        closure_23.info("Setting call active:", channelId);
        isSelfMuteResult = closure_15.isSelfMute();
        callback2(TelecomManager[29]).setCallActive(channelId, isSelfMuteResult);
        self.lastMuteState = isSelfMuteResult;
        self.lastScreenShareActive = false;
        const obj = callback2(TelecomManager[29]);
      } else {
        closure_23.warn("setCallActive called for unknown channel:", channelId);
      }
    }
  };
  items[14] = {
    key: "setIncomingCallActive",
    value: function setIncomingCallActive(arg0, arg1) {
      const self = this;
      const currentCall = this.currentCall;
      let channelId;
      if (null != currentCall) {
        channelId = currentCall.channelId;
      }
      if (channelId === arg0) {
        closure_23.info("Setting incoming call active:", arg0);
        const isSelfMuteResult = closure_15.isSelfMute();
        let tmp8 = isSelfMuteResult;
        if (null != self.pendingMutePreference) {
          const pendingMutePreference = self.pendingMutePreference;
          self.pendingMutePreference = null;
          tmp8 = isSelfMuteResult;
          if (isSelfMuteResult !== pendingMutePreference) {
            closure_23.info("Re-applying Telecom Bar ringing-state mute preference:", pendingMutePreference);
            callback2(TelecomManager[25]).setSelfMute(constants2.DEFAULT, pendingMutePreference, false);
            tmp8 = pendingMutePreference;
            const obj = callback2(TelecomManager[25]);
          }
        }
        const result = callback2(TelecomManager[29]).setIncomingCallActive(arg0, tmp8);
        self.lastMuteState = tmp8;
        self.lastScreenShareActive = false;
        const obj2 = callback2(TelecomManager[29]);
      } else {
        closure_23.warn("setIncomingCallActive called for unknown channel:", arg0);
      }
    }
  };
  items[15] = {
    key: "clearScreenShareState",
    value: function clearScreenShareState() {
      this.lastScreenShareActive = null;
    }
  };
  items[16] = {
    key: "clearPendingScreenShareOffSync",
    value: function clearPendingScreenShareOffSync() {
      const self = this;
      if (null != this.pendingScreenShareOffSyncTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.pendingScreenShareOffSyncTimeout);
        self.pendingScreenShareOffSyncTimeout = null;
      }
    }
  };
  items[17] = {
    key: "clearCall",
    value: function clearCall(arg0) {
      const self = this;
      const currentCall = this.currentCall;
      let channelId;
      if (null != currentCall) {
        channelId = currentCall.channelId;
      }
      if (channelId === arg0) {
        self.stopRingtone();
        self.currentCall = null;
        self.lastMuteState = null;
        self.pendingMutePreference = null;
        const result = self.clearScreenShareState();
        const result1 = self.clearPendingScreenShareOffSync();
      }
    }
  };
  items[18] = {
    key: "startRingtone",
    value: function startRingtone() {
      const self = this;
      let isMetaQuestResult = callback(TelecomManager[28]).isMetaQuest();
      if (isMetaQuestResult) {
        isMetaQuestResult = null == self.ringtone;
      }
      if (isMetaQuestResult) {
        let disableSounds = disableSounds.disableSounds;
        if (!disableSounds) {
          disableSounds = soundDisabled.isSoundDisabled("call_ringing");
        }
        if (!disableSounds) {
          self.ringtone = callback(TelecomManager[31]).createSoundForPack("call_ringing", soundpack.getSoundpack());
          const ringtone = self.ringtone;
          ringtone.loop();
          const obj2 = callback(TelecomManager[31]);
        }
      }
    }
  };
  items[19] = {
    key: "stopRingtone",
    value: function stopRingtone() {
      const ringtone = this.ringtone;
      if (null != ringtone) {
        this.ringtone = null;
        ringtone.stop();
      }
    }
  };
  items[20] = {
    key: "handleMuteStoreChange",
    value: function handleMuteStoreChange() {
      const self = this;
      if (this.isEnabled()) {
        if (null != self.currentCall) {
          if (self.currentCall.state === closure_24.Connected) {
            const isSelfMuteResult = closure_15.isSelfMute();
            if (self.lastMuteState !== isSelfMuteResult) {
              self.lastMuteState = isSelfMuteResult;
              closure_23.info("Syncing Discord -> Call Bar mute state:", isSelfMuteResult);
              callback2(TelecomManager[29]).setMicMuted(self.currentCall.channelId, isSelfMuteResult);
              const obj = callback2(TelecomManager[29]);
            }
          }
        }
      }
    }
  };
  items[21] = {
    key: "handleScreenShareStoreChange",
    value: function handleScreenShareStoreChange() {
      const self = this;
      let closure_0 = this;
      if (this.isEnabled()) {
        if (null != self.currentCall) {
          if (self.currentCall.state === closure_24.Connected) {
            const currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
            let tmp3 = null != currentUserActiveStream;
            if (tmp3) {
              tmp3 = currentUserActiveStream.state === constants.ACTIVE;
            }
            if (self.lastScreenShareActive !== tmp3) {
              self.lastScreenShareActive = tmp3;
              const result = self.clearPendingScreenShareOffSync();
              if (tmp3) {
                closure_23.info("Syncing Discord -> Call Bar screen share state: true");
                callback2(TelecomManager[29]).setScreenShareState(self.currentCall.channelId, true, true);
                const obj = callback2(TelecomManager[29]);
              } else {
                const callback2 = self.currentCall.channelId;
                const _setTimeout = setTimeout;
                self.pendingScreenShareOffSyncTimeout = setTimeout(() => {
                  self.pendingScreenShareOffSyncTimeout = null;
                  let isEnabledResult = self.isEnabled();
                  if (isEnabledResult) {
                    const currentCall = self.currentCall;
                    let channelId;
                    if (null != currentCall) {
                      channelId = currentCall.channelId;
                    }
                    isEnabledResult = channelId === channelId;
                  }
                  if (isEnabledResult) {
                    closure_23.info("Syncing Discord -> Call Bar screen share state: false (delayed)");
                    channelId(closure_2[29]).setScreenShareState(channelId, true, false);
                    const obj = channelId(closure_2[29]);
                  }
                }, 400);
              }
            }
          }
        }
      }
    }
  };
  return callback2(TelecomManager, items);
}(importDefault(dependencyMap[32]));
tmp6 = new tmp6();
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/calls/native/TelecomManager.android.tsx");

export default tmp6;
