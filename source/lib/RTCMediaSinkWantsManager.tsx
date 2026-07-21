// Module ID: 12613
// Function ID: 96908
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 12613 (_createForOfIteratorHelperLoose)
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
function getDefaultWants(any) {
  let obj = arg1(dependencyMap[11]);
  if (obj.getBrowserInvertedWantsConfig("RTCMediaSinkWantsManager.getDefaultWants").invertWants) {
    obj = {};
    const merged = Object.assign(obj);
  } else {
    obj = { any };
  }
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const VideoToggleState = arg1(dependencyMap[7]).VideoToggleState;
const SimulcastOverrideQuality = arg1(dependencyMap[8]).SimulcastOverrideQuality;
let obj = { any: 0 };
let closure_13 = 30 * importDefault(dependencyMap[9]).Millis.SECOND;
let closure_14 = 120 * importDefault(dependencyMap[9]).Millis.SECOND;
let closure_15 = -1 !== arg1(dependencyMap[10]).getFirefoxVersion();
obj = { UserSSRCUpdate: "user-ssrc-update", Update: "update" };
const obj2 = arg1(dependencyMap[10]);
const tmp2 = (arg0) => {
  class RTCMediaSinkWantsManager {
    constructor(arg0, arg1, arg2) {
      mediaSinkWantsLadder = arg3;
      self = this;
      if (arg3 === undefined) {
        tmp2 = RTCMediaSinkWantsManager;
        tmp3 = closure_2;
        num = 12;
        MediaSinkWantsLadder = RTCMediaSinkWantsManager(closure_2[12]).MediaSinkWantsLadder;
        prototype = MediaSinkWantsLadder.prototype;
        tmp4 = new.target;
        tmp5 = new.target;
        mediaSinkWantsLadder = new MediaSinkWantsLadder();
      }
      RTCMediaSinkWantsManager = undefined;
      tmp6 = closure_4(self, RTCMediaSinkWantsManager);
      obj = closure_7(RTCMediaSinkWantsManager);
      tmp7 = closure_6;
      if (closure_19()) {
        tmp9 = globalThis;
        _Reflect = Reflect;
        tmp10 = closure_7;
        constructResult = Reflect.construct(obj, [], closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp7Result = tmp7(self, constructResult);
      RTCMediaSinkWantsManager = tmp7Result;
      tmp7Result.userId = arg0;
      tmp7Result.isStageChannel = arg1;
      tmp7Result.supportsSeamless = arg2;
      tmp7Result.ladder = mediaSinkWantsLadder;
      tmp7Result.connection = null;
      tmp7Result.audioSsrcs = {};
      tmp7Result.videoSsrcs = {};
      tmp7Result.remoteVideoSsrcs = {};
      tmp7Result.framesReceived = {};
      tmp7Result.streamIds = {};
      tmp7Result.offscreenUsers = {};
      tmp7Result.offscreenDisabledUsers = {};
      tmp7Result.streamPixelCounts = {};
      tmp7Result.latestWants = closure_20(100);
      set = new Set();
      tmp7Result.participants = set;
      tmp7Result.selectedParticipantId = null;
      tmp7Result.pipOpen = false;
      map = new Map();
      tmp7Result.simulcastDebugOverrides = map;
      tmp7Result.videoHealthManager = null;
      set1 = new Set();
      tmp7Result.otherUsers = set1;
      tmp7Result.delayedUpdate = () => {
        const delayedCall = tmp7Result.delayedCall;
        delayedCall.delay();
      };
      tmp7Result.addLru = (arg0, arg1, arr) => {
        arr.push(arg0);
        if (arr.length > 3) {
          let num = 0;
          let num2 = -1;
          let num3 = -1;
          let num4 = -1;
          if (0 < arr.length) {
            do {
              let tmp2 = closure_0;
              let diff = arg1 - closure_0.offscreenUsers[arr[num]];
              if (diff > num2) {
                num2 = diff;
                num3 = num;
              }
              num = num + 1;
              num4 = num3;
            } while (num < arr.length);
          }
          tmp7Result.offscreenDisabledUsers[arr[num4]] = true;
          arr.splice(num4, 1);
        }
      };
      tmp7Result.updateOffscreenUsers = () => {
        let done;
        let iter3;
        let tmp10;
        let tmp11;
        const connection = tmp7Result.connection;
        if (null != connection) {
          if (connection.getActiveOutputSinkTrackingEnabled()) {
            const _Date = Date;
            const timestamp = Date.now();
            const items = [];
            const tmp7 = callback3(callback(closure_2[13]).entries(tmp7Result.streamIds));
            const iter = tmp7();
            let iter2 = iter;
            if (!iter.done) {
              do {
                let tmp8 = closure_3;
                let tmp9 = closure_3(iter2.value, 2);
                [tmp10, tmp11] = tmp9;
                if (null != tmp11) {
                  let tmp43 = closure_0;
                  let connection2 = closure_0.connection;
                  if (null != connection2) {
                    if (connection2.getHasActiveVideoOutputSink(tmp11)) {
                      let tmp27 = closure_0;
                      let offscreenUsers = closure_0.offscreenUsers;
                      delete r15[r16];
                      let tmp28 = closure_0;
                      let offscreenDisabledUsers = closure_0.offscreenDisabledUsers;
                      delete r15[r16];
                      let tmp29 = connection2;
                    }
                  }
                  let tmp12 = closure_0;
                  if (null == closure_0.offscreenUsers[tmp10]) {
                    let tmp23 = closure_0;
                    closure_0.offscreenUsers[tmp10] = timestamp;
                    let tmp24 = closure_0;
                    let addLruResult = closure_0.addLru(tmp10, timestamp, items);
                    let tmp26 = connection2;
                  } else {
                    let tmp13 = closure_0;
                    let tmp14 = connection2;
                    if (!closure_0.offscreenDisabledUsers[tmp10]) {
                      let tmp15 = closure_0;
                      let tmp17 = closure_0;
                      let diff = timestamp - closure_0.offscreenUsers[tmp10];
                      if (diff >= closure_0.getOffscreenTimeoutMs()) {
                        let tmp21 = closure_0;
                        closure_0.offscreenDisabledUsers[tmp10] = true;
                        let tmp22 = connection2;
                      } else {
                        let tmp18 = closure_0;
                        let addLruResult1 = closure_0.addLru(tmp10, timestamp, items);
                        let tmp20 = connection2;
                      }
                    }
                  }
                }
                iter3 = tmp7();
                iter2 = iter3;
              } while (!iter3.done);
            }
            if (items.length > 0) {
              const sum = timestamp + tmp7Result.getOffscreenTimeoutMs();
              const tmp35 = callback3(items);
              const iter4 = tmp35();
              let iter5 = iter4;
              let bound = sum;
              let tmp37 = sum;
              if (!iter4.done) {
                do {
                  let _Math = Math;
                  let tmp38 = closure_0;
                  let tmp39 = closure_0;
                  bound = Math.min(bound, closure_0.offscreenUsers[iter5.value] + closure_0.getOffscreenTimeoutMs());
                  let iter6 = tmp35();
                  iter5 = iter6;
                  tmp37 = bound;
                  done = iter6.done;
                } while (!done);
              }
              const offscreenTimeout2 = tmp7Result.offscreenTimeout;
              offscreenTimeout2.start(tmp37 - timestamp, tmp7Result.update);
            } else {
              const offscreenTimeout = tmp7Result.offscreenTimeout;
              offscreenTimeout.stop();
            }
            const obj = callback(closure_2[13]);
          }
        }
      };
      tmp7Result.handleLocalVideoDisabled = () => {
        tmp7Result.update();
      };
      tmp7Result.handleLocalMute = () => {
        tmp7Result.update();
      };
      tmp7Result.update = () => {
        let arr2;
        let tmp28;
        let items = arg0;
        if (arg0 === undefined) {
          items = [];
        }
        let wantsLevel = tmp7Result.getWantsLevel();
        let tmp2 = callback4(wantsLevel);
        let obj = tmp7Result(closure_2[11]);
        let tmp3 = tmp2;
        if (obj.getBrowserInvertedWantsConfig("RTCMediaSinkWantsManager.update").invertWants) {
          tmp7Result.invertWants(tmp2, wantsLevel);
          let tmp7 = tmp2;
          if (closure_15) {
            obj = {};
            const merged = Object.assign(tmp2);
            tmp7 = obj;
          }
          tmp3 = tmp7;
        }
        tmp7Result.updateOffscreenUsers();
        let isDesktopResult = tmp7Result(closure_2[14]).isDesktop();
        if (isDesktopResult) {
          isDesktopResult = tmp7Result.isOneToOneCall();
        }
        if (isDesktopResult) {
          isDesktopResult = !tmp7Result.isStageChannel;
        }
        const obj3 = tmp7Result(closure_2[14]);
        const tmp15 = callback3(callback(closure_2[13]).entries(tmp7Result.videoSsrcs));
        const iter = tmp15();
        let iter2 = iter;
        if (!iter.done) {
          while (true) {
            let tmp26 = callback2;
            let tmp27 = callback2(iter2.value, 2);
            [tmp28, arr2] = tmp27;
            let items1 = [];
            let tmp29 = tmp7Result;
            let tmp30 = tmp7Result;
            let tmp31 = tmp7Result.streamPixelCounts[closure_0.streamIds[tmp28]];
            let num = 0;
            if (null != tmp31) {
              num = tmp31;
            }
            let tmp32 = tmp7Result;
            let wantsLevel1 = tmp7Result.getWantsLevel(num);
            let ssrc = arr2[0].ssrc;
            let tmp34 = tmp7Result;
            if (tmp7Result.shouldReceiveFromUser(tmp28)) {
              let tmp47 = tmp7Result;
              let tmp48 = tmp28 === tmp7Result.selectedParticipantId && tmp16;
              if (tmp48) {
                let tmp49 = tmp7Result;
                tmp48 = !tmp7Result.pipOpen;
              }
              if (arr2.length > 1) {
                let tmp50 = callback3;
                let tmp51 = callback3(arr2);
                let iter6 = tmp51();
                let tmp52 = ssrc;
                let iter7 = iter6;
                let tmp53 = ssrc;
                let tmp54 = iter6;
                if (!iter6.done) {
                  do {
                    let value = iter7.value;
                    if (value.quality === 100) {
                      let ssrc3 = value.ssrc;
                      if (tmp48) {
                        tmp2[ssrc3] = 100;
                        let ssrc2 = value.ssrc;
                      } else {
                        tmp2[ssrc3] = 0;
                        ssrc2 = tmp52;
                      }
                    } else if (tmp48) {
                      tmp2[value.ssrc] = 0;
                      ssrc2 = tmp52;
                    } else {
                      if (isDesktopResult) {
                        tmp2[value.ssrc] = wantsLevel1;
                      }
                      ssrc2 = value.ssrc;
                    }
                    let iter8 = tmp51();
                    tmp52 = ssrc2;
                    iter7 = iter8;
                    tmp53 = ssrc2;
                    tmp54 = iter8;
                    let tmp20 = value;
                  } while (!iter8.done);
                }
                let tmp55 = tmp7Result;
                let obj5 = items1;
                let flag = false;
                let tmp37 = tmp53;
                let tmp38 = tmp48;
                let tmp39 = tmp54;
                let tmp40 = tmp51;
                let tmp41 = tmp20;
                let tmp42 = tmp21;
                let tmp43 = tmp22;
                let tmp44 = tmp23;
                let tmp45 = tmp24;
                let tmp46 = tmp25;
                if (tmp7Result.supportsSeamless) {
                  let tmp56 = tmp7Result;
                  obj5 = items1;
                  flag = false;
                  tmp37 = tmp53;
                  tmp38 = tmp48;
                  tmp39 = tmp54;
                  tmp40 = tmp51;
                  tmp41 = tmp20;
                  tmp42 = tmp21;
                  tmp43 = tmp22;
                  tmp44 = tmp23;
                  tmp45 = tmp24;
                  tmp46 = tmp25;
                  if (!tmp7Result.framesReceived[tmp53]) {
                    let items2 = [tmp53];
                    let tmp57 = callback3;
                    let tmp58 = callback3(arr2);
                    let iter9 = tmp58();
                    let iter10 = iter9;
                    obj5 = items2;
                    flag = true;
                    tmp37 = tmp53;
                    tmp38 = tmp48;
                    tmp39 = tmp54;
                    tmp40 = tmp51;
                    tmp41 = tmp20;
                    tmp42 = iter9;
                    tmp43 = tmp58;
                    tmp44 = tmp23;
                    tmp45 = tmp24;
                    tmp46 = tmp25;
                    if (!iter9.done) {
                      while (true) {
                        value = iter10.value;
                        let tmp59 = value.ssrc !== tmp53;
                        if (tmp59) {
                          let tmp60 = tmp7Result;
                          tmp59 = tmp7Result.framesReceived[value.ssrc];
                        }
                        if (tmp59) {
                          break;
                        } else {
                          let iter11 = tmp58();
                          iter10 = iter11;
                          obj5 = items2;
                          flag = true;
                          tmp37 = tmp53;
                          tmp38 = tmp48;
                          tmp39 = tmp54;
                          tmp40 = tmp51;
                          tmp41 = tmp20;
                          tmp42 = iter11;
                          tmp43 = tmp58;
                          tmp44 = value;
                          tmp45 = tmp24;
                          tmp46 = tmp25;
                          continue;
                        }
                      }
                      if (value.quality === 100) {
                        tmp2[value.ssrc] = 100;
                      } else {
                        let tmp61 = wantsLevel;
                        if (isDesktopResult) {
                          tmp61 = wantsLevel1;
                        }
                        tmp2[value.ssrc] = tmp61;
                      }
                      let arr = items2.push(value.ssrc);
                    }
                  }
                }
              } else if (tmp48) {
                tmp2[ssrc] = 100;
                obj5 = items1;
                flag = false;
                tmp37 = ssrc;
                tmp38 = tmp48;
                tmp39 = tmp18;
                tmp40 = tmp19;
                tmp41 = tmp20;
                tmp42 = tmp21;
                tmp43 = tmp22;
                tmp44 = tmp23;
                tmp45 = tmp24;
                tmp46 = tmp25;
              } else {
                obj5 = items1;
                flag = false;
                tmp37 = ssrc;
                tmp38 = tmp48;
                tmp39 = tmp18;
                tmp40 = tmp19;
                tmp41 = tmp20;
                tmp42 = tmp21;
                tmp43 = tmp22;
                tmp44 = tmp23;
                tmp45 = tmp24;
                tmp46 = tmp25;
                if (isDesktopResult) {
                  tmp2[ssrc] = wantsLevel1;
                  obj5 = items1;
                  flag = false;
                  tmp37 = ssrc;
                  tmp38 = tmp48;
                  tmp39 = tmp18;
                  tmp40 = tmp19;
                  tmp41 = tmp20;
                  tmp42 = tmp21;
                  tmp43 = tmp22;
                  tmp44 = tmp23;
                  tmp45 = tmp24;
                  tmp46 = tmp25;
                }
              }
            } else {
              let tmp35 = callback3;
              let tmp36 = callback3(arr2);
              let iter3 = tmp36();
              let iter4 = iter3;
              obj5 = items1;
              flag = false;
              tmp37 = ssrc;
              tmp38 = tmp17;
              tmp39 = tmp18;
              tmp40 = tmp19;
              tmp41 = tmp20;
              tmp42 = tmp21;
              tmp43 = tmp22;
              tmp44 = tmp23;
              tmp45 = iter3;
              tmp46 = tmp36;
              if (!iter3.done) {
                tmp2[iter4.value.ssrc] = 0;
                let iter5 = tmp36();
                iter4 = iter5;
                obj5 = items1;
                flag = false;
                tmp37 = ssrc;
                tmp38 = tmp17;
                tmp39 = tmp18;
                tmp40 = tmp19;
                tmp41 = tmp20;
                tmp42 = tmp21;
                tmp43 = tmp22;
                tmp44 = tmp23;
                tmp45 = iter5;
                tmp46 = tmp36;
              }
            }
            let tmp63 = tmp7Result;
            let simulcastOverrideQuality = tmp7Result.getSimulcastOverrideQuality(tmp28);
            let tmp65 = constants;
            if (simulcastOverrideQuality === constants.HIGH) {
              tmp2[tmp37] = 100;
            } else {
              let tmp66 = constants;
              if (simulcastOverrideQuality === constants.LOW) {
                tmp2[tmp37] = 50;
              }
            }
            let tmp67 = tmp7Result;
            let tmp68 = tmp7Result.supportsSeamless && flag;
            if (!tmp68) {
              let items3 = [tmp37];
              obj5 = items3;
            }
            let tmp69 = callback3;
            let tmp70 = callback3(arr2);
            let iter12 = tmp70();
            if (!iter12.done) {
              do {
                value = iter12.value;
                if (!obj5.includes(value.ssrc)) {
                  let tmp71 = closure_0;
                  let framesReceived = closure_0.framesReceived;
                  let ssrc4 = value.ssrc;
                  delete r45[r5];
                }
                let iter13 = tmp70();
                iter12 = iter13;
                let tmp72 = value;
              } while (!iter13.done);
            }
            let hasItem = items.includes(tmp28);
            if (!hasItem) {
              let tmp74 = tmp7Result;
              let tmp75 = undefined !== tmp7Result.remoteVideoSsrcs[tmp28];
              if (tmp75) {
                let tmp76 = callback;
                let tmp77 = closure_2;
                let tmp78 = tmp7Result;
                tmp75 = !callback(closure_2[15])(tmp7Result.remoteVideoSsrcs[tmp28], obj5);
              }
              hasItem = tmp75;
            }
            if (hasItem) {
              let tmp79 = tmp7Result;
              let items4 = [];
              let tmp80 = items4;
              let tmp81 = obj5;
              let num2 = 0;
              let arraySpreadResult = HermesBuiltin.arraySpread(obj5, 0);
              tmp7Result.remoteVideoSsrcs[tmp28] = items4;
              let tmp83 = tmp7Result;
              let tmp84 = closure_16;
              let tmp85 = tmp7Result;
              let tmp86 = tmp7Result;
              let tmp87 = tmp28;
              let tmp88 = obj5;
              let emitResult = tmp7Result.emit(closure_16.UserSSRCUpdate, tmp28, tmp7Result.audioSsrcs[tmp28], obj5);
            }
            let iter14 = tmp15();
            iter2 = iter14;
            let tmp17 = tmp38;
            let tmp18 = tmp39;
            let tmp19 = tmp40;
            tmp20 = tmp41;
            let tmp21 = tmp42;
            let tmp22 = tmp43;
            let tmp23 = tmp44;
            let tmp24 = tmp45;
            let tmp25 = tmp46;
          }
        }
        if (closure_15) {
          tmp2 = tmp3;
        }
        const entries = Object.entries(tmp7Result.audioSsrcs);
        for (let num3 = 0; num3 < entries.length; num3 = num3 + 1) {
          let tmp90 = callback2;
          let tmp91 = callback2(entries[num3], 2);
          let tmp93 = tmp7Result;
          let connection = tmp7Result.connection;
          let localMute = null != connection;
          if (localMute) {
            localMute = connection.getLocalMute(tmp92);
          }
          if (localMute) {
            tmp2[tmp91[1]] = 0;
          }
        }
        let isEqualResult = null == tmp7Result.connection;
        if (!isEqualResult) {
          isEqualResult = callback(closure_2[16]).isEqual(tmp7Result.latestWants, tmp2);
          const obj6 = callback(closure_2[16]);
        }
        if (!isEqualResult) {
          tmp7Result.latestWants = tmp2;
          wantsLevel = tmp7Result;
          wantsLevel = closure_16;
          wantsLevel = tmp7Result.emit(closure_16.Update, tmp2);
        }
        return tmp2;
      };
      tmp7Result.incomingVideoEnabledChanged = () => {
        tmp7Result.update();
      };
      delayedCall = new RTCMediaSinkWantsManager(closure_2[17]).DelayedCall(100, tmp7Result.update);
      tmp7Result.delayedCall = delayedCall;
      timeout = new RTCMediaSinkWantsManager(closure_2[17]).Timeout();
      tmp7Result.offscreenTimeout = timeout;
      WindowVisibilityVideoManager = RTCMediaSinkWantsManager(closure_2[18]).WindowVisibilityVideoManager;
      onResult = WindowVisibilityVideoManager.on(RTCMediaSinkWantsManager(closure_2[18]).WindowVisibilityEvent.IncomingVideoEnabledChanged, tmp7Result.incomingVideoEnabledChanged);
      return tmp7Result;
    }
  }
  const arg1 = RTCMediaSinkWantsManager;
  callback2(RTCMediaSinkWantsManager, arg0);
  let obj = {
    key: "getWantsLevel",
    value() {
      let num = arg0;
      const self = this;
      if (arg0 === undefined) {
        num = 0;
      }
      const ladder = self.ladder;
      return ladder.getMaxSinkValue(self.getVideoParticipantCount(), num);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "userVideoDisabled",
    value(arg0) {
      return this.offscreenDisabledUsers[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "isOneToOneCall",
    value() {
      return 1 === this.otherUsers.size;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "updateCallUserIds",
    value(items) {
      this.otherUsers = new Set(items);
      const otherUsers = this.otherUsers;
      otherUsers.delete(id.getId());
      this.update();
    }
  };
  items[4] = {
    key: "shouldReceiveFromUser",
    value(arg0) {
      const self = this;
      const connection = this.connection;
      let tmp = null != connection && connection.getLocalVideoDisabled(arg0);
      if (!tmp) {
        let userVideoDisabledResult = self.userVideoDisabled(arg0);
        if (userVideoDisabledResult) {
          const videoHealthManager = self.videoHealthManager;
          let currentVideoToggleState;
          if (null != videoHealthManager) {
            currentVideoToggleState = videoHealthManager.getCurrentVideoToggleState(arg0);
          }
          userVideoDisabledResult = currentVideoToggleState !== constants.AUTO_PROBING;
        }
        tmp = userVideoDisabledResult;
      }
      const WindowVisibilityVideoManager = RTCMediaSinkWantsManager(closure_2[18]).WindowVisibilityVideoManager;
      return WindowVisibilityVideoManager.isIncomingVideoEnabled() && !tmp;
    }
  };
  items[5] = {
    key: "invertWants",
    value(arg0, arg1) {
      let length;
      let values = Object.values(this.videoSsrcs);
      for (let num = 0; num < values.length; num = num + 1) {
        let tmp = callback3;
        let tmp2 = callback3(values[num]);
        let iter = tmp2();
        if (!iter.done) {
          do {
            let value = iter.value;
            let tmp3 = closure_15;
            if (closure_15) {
              if (value.quality !== 100) {
                arg0[value.ssrc] = 100;
              } else {
                arg0[value.ssrc] = 0;
              }
            } else {
              arg0[value.ssrc] = arg1;
            }
            let iter2 = tmp2();
            iter = iter2;
            let tmp4 = value;
          } while (!iter2.done);
        }
      }
      values = Object.values(this.audioSsrcs);
      let num2 = 0;
      if (0 < values.length) {
        do {
          arg0[values[num2]] = 100;
          num2 = num2 + 1;
          length = values.length;
        } while (num2 < length);
      }
    }
  };
  items[6] = {
    key: "getAudioSSRCs",
    value() {
      return this.audioSsrcs;
    }
  };
  items[7] = {
    key: "setConnection",
    value(connection) {
      let flag = arg1;
      const self = this;
      if (arg1 === undefined) {
        flag = true;
      }
      connection = self.connection;
      if (null != connection) {
        connection.removeListener(RTCMediaSinkWantsManager(closure_2[19]).BaseConnectionEvent.LocalVideoDisabled, self.handleLocalVideoDisabled);
      }
      const connection2 = self.connection;
      if (null != connection2) {
        connection2.removeListener(RTCMediaSinkWantsManager(closure_2[19]).BaseConnectionEvent.LocalMute, self.handleLocalMute);
      }
      const connection3 = self.connection;
      if (null != connection3) {
        connection3.removeListener(RTCMediaSinkWantsManager(closure_2[19]).BaseConnectionEvent.ActiveSinksChange, self.delayedUpdate);
      }
      self.connection = connection;
      const connection4 = self.connection;
      if (null != connection4) {
        connection4.addListener(RTCMediaSinkWantsManager(closure_2[19]).BaseConnectionEvent.LocalVideoDisabled, self.handleLocalVideoDisabled);
      }
      const connection5 = self.connection;
      if (null != connection5) {
        connection5.addListener(RTCMediaSinkWantsManager(closure_2[19]).BaseConnectionEvent.LocalMute, self.handleLocalMute);
      }
      const connection6 = self.connection;
      if (null != connection6) {
        connection6.addListener(RTCMediaSinkWantsManager(closure_2[19]).BaseConnectionEvent.ActiveSinksChange, self.delayedUpdate);
      }
      if (flag) {
        self.update();
      }
    }
  };
  items[8] = {
    key: "setAudioSSRC",
    value(arg0, arg1) {
      const self = this;
      if (arg1 > 0) {
        self.audioSsrcs[arg0] = arg1;
      } else {
        const audioSsrcs = self.audioSsrcs;
        delete r0[r3];
      }
      return self.update();
    }
  };
  items[9] = {
    key: "setVideoSSRCs",
    value(arg0, arr) {
      let done;
      const self = this;
      const found = arr.filter((active) => {
        active = active.active;
        if (active) {
          const ssrc = active.ssrc;
          let num2 = 0;
          if (null != ssrc) {
            num2 = ssrc;
          }
          active = num2 > 0;
        }
        return active;
      });
      const mapped = found.map((quality) => {
        const obj = {};
        quality = quality.quality;
        let num = 100;
        if (null != quality) {
          num = quality;
        }
        obj.quality = num;
        obj.ssrc = quality.ssrc;
        return obj;
      });
      if (mapped.length > 0) {
        self.videoSsrcs[arg0] = mapped;
        const participants2 = self.participants;
        participants2.add(arg0);
      } else {
        if (undefined !== self.videoSsrcs[arg0]) {
          const tmp2 = callback3(self.videoSsrcs[arg0]);
          let iter = tmp2();
          if (!iter.done) {
            do {
              let ssrc = iter.value.ssrc;
              let framesReceived = self.framesReceived;
              delete r0[r7];
              let iter2 = tmp2();
              iter = iter2;
              done = iter2.done;
            } while (!done);
          }
        }
        const remoteVideoSsrcs = self.remoteVideoSsrcs;
        delete r0[r3];
        const videoSsrcs = self.videoSsrcs;
        delete r0[r3];
        const participants = self.participants;
        participants.delete(arg0);
        self.emit(UserSSRCUpdate.UserSSRCUpdate, arg0, self.audioSsrcs[arg0], []);
      }
      return self.update(Array.from(self.participants));
    }
  };
  items[10] = {
    key: "setFirstFrameReceived",
    value(arg0) {
      this.framesReceived[arg0] = true;
      return this.update();
    }
  };
  items[11] = {
    key: "setStreamId",
    value(arg0, arg1) {
      const self = this;
      if (null != arg1) {
        self.streamIds[arg0] = arg1;
      } else {
        if (arg0 in self.streamIds) {
          const streamPixelCounts = self.streamPixelCounts;
          delete r4[r0];
        }
        const streamIds = self.streamIds;
        delete r0[r3];
      }
      return self.update();
    }
  };
  items[12] = {
    key: "destroyUser",
    value(arg0) {
      delete r0[r1];
      delete r0[r1];
      const participants = this.participants;
      participants.delete(arg0);
      delete r3[r0];
      delete r0[r1];
      return this.update(Array.from(this.participants));
    }
  };
  items[13] = {
    key: "reset",
    value() {
      this.setConnection(null, false);
      this.audioSsrcs = {};
      this.videoSsrcs = {};
      this.remoteVideoSsrcs = {};
      this.framesReceived = {};
      this.streamIds = {};
      this.streamPixelCounts = {};
      this.latestWants = callback5(100);
      const WindowVisibilityVideoManager = RTCMediaSinkWantsManager(closure_2[18]).WindowVisibilityVideoManager;
      WindowVisibilityVideoManager.off(RTCMediaSinkWantsManager(closure_2[18]).WindowVisibilityEvent.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
  };
  items[14] = {
    key: "setSelectedParticipant",
    value(selectedParticipantId) {
      const self = this;
      const RTCMediaSinkWantsManager = this;
      if (selectedParticipantId === this.selectedParticipantId) {
        return self.latestWants;
      } else {
        const items = [];
        if (tmp) {
          items.push(self.selectedParticipantId);
        }
        if (null != selectedParticipantId) {
          const participants = self.participants;
          if (participants.has(selectedParticipantId)) {
            self.selectedParticipantId = selectedParticipantId;
            items.push(selectedParticipantId);
          } else if (self.userId !== selectedParticipantId) {
            return self.latestWants;
          } else {
            self.selectedParticipantId = selectedParticipantId;
          }
        } else {
          self.selectedParticipantId = null;
        }
        return self.update(items.filter((arg0) => {
          let length;
          if (null != self.videoSsrcs[arg0]) {
            length = arr.length;
          }
          return length > 1;
        }));
      }
    }
  };
  items[15] = {
    key: "setPipOpen",
    value(pipOpen) {
      const self = this;
      this.pipOpen = pipOpen;
      if (null != this.selectedParticipantId) {
        const items = [self.selectedParticipantId];
        let latestWants = self.update(items);
      } else {
        latestWants = self.latestWants;
      }
      return latestWants;
    }
  };
  items[16] = {
    key: "getOffscreenDisabledUsers",
    value() {
      return this.offscreenDisabledUsers;
    }
  };
  items[17] = {
    key: "setSimulcastDebugOverride",
    value(arg0, arg1) {
      const simulcastDebugOverrides = this.simulcastDebugOverrides;
      const result = simulcastDebugOverrides.set(arg0, arg1);
      this.update();
    }
  };
  items[18] = {
    key: "setVideoSize",
    value(arg0, arg1) {
      const self = this;
      if (arg1 > 0) {
        self.streamPixelCounts[arg0] = arg1;
      } else {
        const streamPixelCounts = self.streamPixelCounts;
        delete r0[r3];
      }
      self.delayedUpdate();
    }
  };
  items[19] = {
    key: "getVideoParticipantCount",
    value() {
      const keys = Object.keys(this.videoSsrcs);
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      if (0 < keys.length) {
        do {
          let connection = this.connection;
          let tmp2 = null != connection && connection.getLocalVideoDisabled(tmp);
          let sum = num2;
          if (!tmp2) {
            sum = num2 + 1;
          }
          num3 = num3 + 1;
          num2 = sum;
          num = sum;
        } while (num3 < keys.length);
      }
      return num;
    }
  };
  items[20] = {
    key: "getOffscreenTimeoutMs",
    value() {
      return this.isStageChannel ? closure_14 : closure_13;
    }
  };
  items[21] = {
    key: "getSimulcastOverrideQuality",
    value(arg0) {
      const simulcastDebugOverrides = this.simulcastDebugOverrides;
      if (simulcastDebugOverrides.has(arg0)) {
        const simulcastDebugOverrides2 = this.simulcastDebugOverrides;
        let NO_OVERRIDE = simulcastDebugOverrides2.get(arg0);
      } else {
        NO_OVERRIDE = constants2.NO_OVERRIDE;
      }
      return NO_OVERRIDE;
    }
  };
  return callback(RTCMediaSinkWantsManager, items);
}(importDefault(dependencyMap[20]));
const result = arg1(dependencyMap[21]).fileFinishedImporting("lib/RTCMediaSinkWantsManager.tsx");

export default tmp2;
export const DEFAULT_WANTS_FULL = { any: 100 };
export const DEFAULT_WANTS_DISABLED = obj;
export const RTCMediaSinkWantsManagerEvent = obj;
