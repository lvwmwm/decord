// Module ID: 4667
// Function ID: 40532
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 4184, 653, 4191, 4668, 4187, 675, 4669, 2]
// Exports: getClipCreatedAt, getClipEventsTimeline, getClipParticipantIds

// Module 4667 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { AnalyticEvents } from "ME";
import { SpeakingFlags } from "DesktopSources";

let closure_4;
let closure_5;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
({ CLIPS_MAX_PARTICIPANTS: closure_4, CLIPS_MAX_TIMELINE_EVENTS: closure_5 } = result);
let obj = { UNKNOWN: 0, [0]: "UNKNOWN", KILL: 1, [1]: "KILL", MULTIKILL: 2, [2]: "MULTIKILL", DEATH: 3, [3]: "DEATH" };
result = require("ME").fileFinishedImporting("modules/clips/clipPayloadUtils.tsx");

export const getClipCreatedAt = function getClipCreatedAt(createdAt) {
  return new Date(createdAt).toISOString();
};
export const getClipParticipantIds = function getClipParticipantIds(users) {
  return users.slice(0, closure_4);
};
export const ServerClipGameEventType = obj;
export const getClipEventsTimeline = function getClipEventsTimeline(clip) {
  let iter4;
  const _require = clip;
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
      let obj1 = _require(4668);
      const importDefault = obj1.isGameEventsOnPlayerEnabled("getClipEventsTimeline");
      const timeline1 = clip.timeline;
      const found = timeline1.filter((signal) => {
        const editMetadata = clip.editMetadata;
        let voiceAudio;
        if (null != editMetadata) {
          voiceAudio = editMetadata.voiceAudio;
        }
        let tmp2 = false !== voiceAudio;
        if (tmp2) {
          tmp2 = signal.signal.type === clip(outer1_2[5]).ClipSignalTypes.SPEAKING;
        }
        if (!tmp2) {
          let tmp5 = closure_1;
          if (closure_1) {
            tmp5 = signal.signal.type === clip(outer1_2[5]).ClipSignalTypes.GAME_EVENT;
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
            let tmp17 = _require;
            let tmp18 = dependencyMap;
            if (value.signal.type !== _require(4187).ClipSignalTypes.SPEAKING) {
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
            let tmp23 = callback;
            let tmp24 = callback(iter3.value, 2);
            if (tmp24[1]) {
              obj = { timestamp_ms: 0 };
              obj = { user_id: tmp25 };
              let tmp26 = SpeakingFlags;
              obj.speaking_flags = SpeakingFlags.VOICE;
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
            let tmp35 = _require;
            let tmp36 = dependencyMap;
            if (value.signal.type === _require(4187).ClipSignalTypes.SPEAKING) {
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
              let tmp59 = _require;
              let tmp60 = dependencyMap;
              tmp41 = tmp30;
              tmp42 = tmp31;
              tmp43 = tmp32;
              tmp44 = tmp33;
              tmp45 = tmp34;
              if (value.signal.type === _require(4187).ClipSignalTypes.GAME_EVENT) {
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
                    let tmp61 = _require;
                    let tmp62 = dependencyMap;
                    if (_require(4187).GameEventType.KILL === eventType) {
                      let tmp40 = obj;
                      let MULTIKILL = obj.KILL;
                    } else {
                      let tmp37 = _require;
                      let tmp38 = dependencyMap;
                      if (_require(4187).GameEventType.MULTIKILL === eventType) {
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
            tmp30 = tmp41;
            tmp31 = tmp42;
            tmp32 = tmp43;
            tmp33 = tmp44;
            tmp34 = tmp45;
            iter6 = iter7;
            if (iter7.done) {
              break;
            }
          }
        }
        const substr = items.slice(0, closure_5);
        if (substr.length !== items.length) {
          const obj6 = { clip_uuid: clip.id, clip_event_timeline_size: items.length };
          const obj12 = importDefault(675);
          obj6.clip_runtime = _require(4669).getClipsRuntime("getClipEventsTimeline");
          obj12.track(AnalyticEvents.CLIP_TIMELINE_TRIMMED, obj6);
          const obj14 = _require(4669);
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
