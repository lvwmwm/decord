// Module ID: 4665
// Function ID: 40495
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getClipCreatedAt, getClipEventsTimeline, getClipParticipantIds

// Module 4665 (_createForOfIteratorHelperLoose)
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
let closure_3 = importDefault(dependencyMap[0]);
({ CLIPS_MAX_PARTICIPANTS: closure_4, CLIPS_MAX_TIMELINE_EVENTS: closure_5 } = arg1(dependencyMap[1]));
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const SpeakingFlags = arg1(dependencyMap[3]).SpeakingFlags;
const obj = { UNKNOWN: 0, [0]: "UNKNOWN", KILL: 1, [1]: "KILL", MULTIKILL: 2, [2]: "MULTIKILL", DEATH: 3, [3]: "DEATH" };
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/clips/clipPayloadUtils.tsx");

export const getClipCreatedAt = function getClipCreatedAt(createdAt) {
  return new Date(createdAt).toISOString();
};
export const getClipParticipantIds = function getClipParticipantIds(users) {
  return users.slice(0, closure_4);
};
export const ServerClipGameEventType = obj;
export const getClipEventsTimeline = function getClipEventsTimeline(clip) {
  let iter4;
  const arg1 = clip;
  const timeline = clip.timeline;
  let length;
  if (null != timeline) {
    length = timeline.length;
  }
  let num = 0;
  if (null != length) {
    num = length;
  }
  if (0 !== num) {
    const decision = clip.decision;
    let timestamp;
    if (null != decision) {
      timestamp = decision.timestamp;
    }
    if (null != timestamp) {
      let editMetadata = clip.editMetadata;
      if (null == editMetadata) {
        let obj = { start: 0, end: clip.length / 1000 };
        editMetadata = obj;
      }
      const diff = clip.decision.timestamp - clip.length;
      const sum = diff + 1000 * editMetadata.start;
      const sum1 = diff + 1000 * editMetadata.end;
      let obj1 = arg1(dependencyMap[4]);
      const importDefault = obj1.isGameEventsOnPlayerEnabled("getClipEventsTimeline");
      const timeline1 = clip.timeline;
      const found = timeline1.filter((signal) => {
        const editMetadata = signal.editMetadata;
        let voiceAudio;
        if (null != editMetadata) {
          voiceAudio = editMetadata.voiceAudio;
        }
        let tmp2 = false !== voiceAudio;
        if (tmp2) {
          tmp2 = signal.signal.type === signal(closure_2[5]).ClipSignalTypes.SPEAKING;
        }
        if (!tmp2) {
          let tmp5 = closure_1;
          if (closure_1) {
            tmp5 = signal.signal.type === signal(closure_2[5]).ClipSignalTypes.GAME_EVENT;
          }
          tmp2 = tmp5;
        }
        return tmp2;
      });
      const sorted = found.sort((timestamp, timestamp2) => timestamp.timestamp - timestamp2.timestamp);
      if (0 !== sorted.length) {
        const _Map = Map;
        const map = new Map();
        const items = [];
        const _Map2 = Map;
        const map1 = new Map();
        const tmp16 = _createForOfIteratorHelperLoose(sorted);
        let iter = tmp16();
        if (!iter.done) {
          while (true) {
            let value = iter.value;
            let tmp17 = arg1;
            let tmp18 = dependencyMap;
            if (value.signal.type !== arg1(dependencyMap[5]).ClipSignalTypes.SPEAKING) {
              let iter2 = tmp16();
              iter = iter2;
              if (iter2.done) {
                break;
              }
            } else if (value.timestamp >= sum) {
              break;
            } else {
              let tmp19 = SpeakingFlags;
              let result = map.set(value.signal.userId, (value.signal.speakingFlags & SpeakingFlags.VOICE) === SpeakingFlags.VOICE);
            }
            break;
          }
        }
        const tmp22 = _createForOfIteratorHelperLoose(map);
        let iter3 = tmp22();
        if (!iter3.done) {
          do {
            let tmp23 = closure_3;
            let tmp24 = closure_3(iter3.value, 2);
            if (tmp24[1]) {
              obj = { timestamp_ms: 0 };
              obj = { user_id: tmp25 };
              let tmp26 = closure_7;
              obj.speaking_flags = closure_7.VOICE;
              obj.speaking = obj;
              let arr = items.push(obj);
            }
            iter4 = tmp22();
            iter3 = iter4;
          } while (!iter4.done);
        }
        const tmp29 = _createForOfIteratorHelperLoose(sorted);
        const iter5 = tmp29();
        let iter6 = iter5;
        if (!iter5.done) {
          while (true) {
            value = iter6.value;
            let tmp35 = arg1;
            let tmp36 = dependencyMap;
            if (value.signal.type === arg1(dependencyMap[5]).ClipSignalTypes.SPEAKING) {
              let tmp41 = tmp30;
              let tmp42 = tmp31;
              let tmp43 = tmp32;
              let tmp44 = tmp33;
              let tmp45 = tmp34;
              if (value.timestamp >= sum) {
                if (value.timestamp > sum1) {
                  break;
                } else {
                  let tmp65 = SpeakingFlags;
                  let tmp66 = (value.signal.speakingFlags & SpeakingFlags.VOICE) === SpeakingFlags.VOICE;
                  value = map.get(value.signal.userId);
                  let tmp49 = null != value && value;
                  tmp41 = value;
                  tmp42 = tmp66;
                  tmp43 = tmp32;
                  tmp44 = tmp33;
                  tmp45 = tmp34;
                  if (tmp49 !== tmp66) {
                    let result1 = map.set(value.signal.userId, tmp66);
                    obj1 = {};
                    let _Math = Math;
                    obj1.timestamp_ms = Math.round(value.timestamp - sum);
                    let obj2 = { user_id: value.signal.userId, speaking_flags: value.signal.speakingFlags };
                    obj1.speaking = obj2;
                    arr = items.push(obj1);
                    tmp41 = value;
                    tmp42 = tmp66;
                    tmp43 = tmp32;
                    tmp44 = tmp33;
                    tmp45 = tmp34;
                  }
                }
              }
              break;
            } else {
              let tmp59 = arg1;
              let tmp60 = dependencyMap;
              tmp41 = tmp30;
              tmp42 = tmp31;
              tmp43 = tmp32;
              tmp44 = tmp33;
              tmp45 = tmp34;
              if (value.signal.type === arg1(dependencyMap[5]).ClipSignalTypes.GAME_EVENT) {
                tmp41 = tmp30;
                tmp42 = tmp31;
                tmp43 = tmp32;
                tmp44 = tmp33;
                tmp45 = tmp34;
                if (value.timestamp >= sum) {
                  if (value.timestamp > sum1) {
                    break;
                  } else {
                    let eventType = value.signal.eventType;
                    let tmp61 = arg1;
                    let tmp62 = dependencyMap;
                    if (arg1(dependencyMap[5]).GameEventType.KILL === eventType) {
                      let tmp40 = obj;
                      let MULTIKILL = obj.KILL;
                    } else {
                      let tmp37 = arg1;
                      let tmp38 = dependencyMap;
                      if (arg1(dependencyMap[5]).GameEventType.MULTIKILL === eventType) {
                        let tmp39 = obj;
                        MULTIKILL = obj.MULTIKILL;
                      }
                    }
                    tmp41 = tmp30;
                    tmp42 = tmp31;
                    tmp43 = MULTIKILL;
                    tmp44 = tmp33;
                    tmp45 = tmp34;
                    if (null != MULTIKILL) {
                      let _Math2 = Math;
                      let rounded = Math.round(value.timestamp - sum);
                      let value1 = map1.get(rounded);
                      if (null != value1) {
                        let tmp48 = obj;
                        tmp41 = tmp30;
                        tmp42 = tmp31;
                        tmp43 = MULTIKILL;
                        tmp44 = rounded;
                        tmp45 = value1;
                        if (MULTIKILL === obj.MULTIKILL) {
                          let obj3 = { type: MULTIKILL };
                          items[value1].game = obj3;
                          tmp41 = tmp30;
                          tmp42 = tmp31;
                          tmp43 = MULTIKILL;
                          tmp44 = rounded;
                          tmp45 = value1;
                        }
                      } else {
                        let result2 = map1.set(rounded, items.length);
                        let obj4 = { timestamp_ms: rounded };
                        let obj5 = { type: MULTIKILL };
                        obj4.game = obj5;
                        let arr1 = items.push(obj4);
                        tmp41 = tmp30;
                        tmp42 = tmp31;
                        tmp43 = MULTIKILL;
                        tmp44 = rounded;
                        tmp45 = value1;
                      }
                    }
                  }
                }
                break;
              }
            }
            let iter7 = tmp29();
            let tmp30 = tmp41;
            let tmp31 = tmp42;
            let tmp32 = tmp43;
            let tmp33 = tmp44;
            let tmp34 = tmp45;
            iter6 = iter7;
            if (iter7.done) {
              break;
            }
          }
        }
        const substr = items.slice(0, closure_5);
        if (substr.length !== items.length) {
          const obj6 = { clip_uuid: clip.id, clip_event_timeline_size: items.length };
          const obj12 = importDefault(dependencyMap[6]);
          obj6.clip_runtime = arg1(dependencyMap[7]).getClipsRuntime("getClipEventsTimeline");
          obj12.track(AnalyticEvents.CLIP_TIMELINE_TRIMMED, obj6);
          const obj14 = arg1(dependencyMap[7]);
        }
        let tmp58;
        if (substr.length > 0) {
          tmp58 = substr;
        }
        return tmp58;
      }
    }
  }
};
