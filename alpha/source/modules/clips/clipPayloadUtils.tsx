// Module ID: 8324
// Function ID: 8325
// Name: clipPayloadUtils
// Dependencies: [32, 8321, 1071, 5539, 1255, 2]
// Exports: getClipCreatedAt, getClipEventsTimeline, getClipParticipantIds, getClipSyncTimestamp

// Module 8324 (clipPayloadUtils)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import Constants2 from "Constants" /* 5539 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ClipsConstants from "ClipsConstants" /* 8321 */;
import size from "module_2" /* 2 */;

let importDefault, map;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ CLIPS_MAX_PARTICIPANTS: c3, CLIPS_MAX_TIMELINE_EVENTS: closure_4, ClipSignalTypes: hasOwnProperty, GameEventType: metroRequire, CLIP_RUNTIME: metroImportDefault } = ClipsConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const SpeakingFlags = Constants2.SpeakingFlags;
const ServerClipGameEventType = { UNKNOWN: 0, [0]: "UNKNOWN", KILL: 1, [1]: "KILL", MULTIKILL: 2, [2]: "MULTIKILL", DEATH: 3, [3]: "DEATH" };
let obj2 = { UNKNOWN: 0, [0]: "UNKNOWN", LAUGHTER: 1, [1]: "LAUGHTER", SHOUTING: 2, [2]: "SHOUTING" };
let result = size.fileFinishedImporting("modules/clips/clipPayloadUtils.tsx");

export function getClipCreatedAt(createdAt) {
  const date = new Date(createdAt);
  return date.toISOString();
}
export function getClipSyncTimestamp(clip) {
  if (null != clip.syncTimestamp) {
    let length;
    const editMetadata = clip.editMetadata;
    let end;
    if (editMetadata != null) {
      end = editMetadata.end;
    }
    if (null != end) {
      length = 1000 * clip.editMetadata.end;
    } else {
      length = clip.length;
    }
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date(clip.syncTimestamp - (clip.length - length));
    return date.toISOString();
  }
}
export function getClipParticipantIds(users) {
  return users.slice(0, _false);
}
export { ServerClipGameEventType };
export const ServerClipEmotionType = obj2;
export function getClipEventsTimeline(clip) {
  importDefault = clip;
  const timeline = clip.timeline;
  let num;
  if (timeline != null) {
    num = timeline.length;
  }
  if (num == null) {
    num = 0;
  }
  if (0 !== num) {
    const decision = clip.decision;
    let timestamp;
    if (decision != null) {
      timestamp = decision.timestamp;
    }
    if (null != timestamp) {
      let obj;
      let editMetadata = clip.editMetadata;
      if (editMetadata == null) {
        obj = { start: 0, end: clip.length / 1000 };
        editMetadata = obj;
      }
      const diff = clip.decision.timestamp - clip.length;
      const sum = diff + 1000 * editMetadata.start;
      const sum1 = diff + 1000 * editMetadata.end;
      const timeline1 = clip.timeline;
      const found = timeline1.filter((signal) => {
        const editMetadata = clip.editMetadata;
        let voiceAudio;
        if (editMetadata != null) {
          voiceAudio = editMetadata.voiceAudio;
        }
        return false !== voiceAudio && signal.signal.type === hasOwnProperty.SPEAKING || signal.signal.type === hasOwnProperty.GAME_EVENT;
      });
      const sorted = found.sort((timestamp, timestamp2) => timestamp.timestamp - timestamp2.timestamp);
      const editMetadata2 = clip.editMetadata;
      let voiceAudio;
      if (editMetadata2 != null) {
        voiceAudio = editMetadata2.voiceAudio;
      }
      if (false !== voiceAudio) {
        let audioEvents = clip.audioEvents;
        if (audioEvents == null) {
          audioEvents = [];
        }
        let items = audioEvents;
      } else {
        items = [];
      }
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
      const items1 = [];
      for (const item10060 of sorted) {
        let tmp10 = item10060;
        if (item10060.signal.type !== constants.SPEAKING) {
          continue;
        } else {
          if (tmp10.timestamp >= sum) {
            obj4.return();
            break;
          } else {
            let result = map.set(tmp10.signal.userId, (tmp10.signal.speakingFlags & SpeakingFlags.VOICE) === SpeakingFlags.VOICE);
          }
          break;
        }
        let tmp19 = tmp7[Symbol.iterator]();
        while (tmp19 !== undefined) {
          let tmp24 = _slicedToArray(tmp21, 2);
          let first = tmp24[0];
          if (tmp24[1]) {
            obj2 = { timestamp_ms: 0, speaking: obj3 };
            let obj3 = { user_id: first, speaking_flags: SpeakingFlags.VOICE };
            let arr = items1.push(obj2);
          }
          continue;
        }
        for (const item10105 of sorted) {
          let tmp31 = item10105;
          if (item10105.signal.type === constants.SPEAKING) {
            if (tmp31.timestamp < sum) {
              continue;
            } else {
              if (tmp31.timestamp > sum1) {
                obj7.return();
                break;
              } else {
                let tmp70 = (tmp31.signal.speakingFlags & SpeakingFlags.VOICE) === SpeakingFlags.VOICE;
                let flag2 = map.get(tmp31.signal.userId) ?? false;
                if (flag2 === tmp70) {
                  continue;
                } else {
                  let result1 = map.set(tmp31.signal.userId, tmp70);
                  let obj5 = { timestamp_ms: Math.round(tmp31.timestamp - sum), speaking: obj6 };
                  let _Math3 = Math;
                  let push3 = items1.push;
                  let obj6 = { user_id: tmp31.signal.userId, speaking_flags: tmp31.signal.speakingFlags };
                  let push3Result = push3(obj5);
                }
              }
              break;
            }
            for (const item10139 of items) {
              let tmp43 = item10139;
              let tmp44 = item10139.peakMs < sum;
              if (!tmp44) {
                tmp44 = tmp43.peakMs > sum1;
              }
              if (!tmp44) {
                let SHOUTING;
                let obj8 = { timestamp_ms: Math.round(tmp43.peakMs - sum), emotion: obj9 };
                let _Math2 = Math;
                let push2 = items1.push;
                if (tmp43.type === constants.LAUGHTER) {
                  SHOUTING = obj2.LAUGHTER;
                } else {
                  SHOUTING = obj2.SHOUTING;
                }
                let obj9 = { type: SHOUTING };
                let push2Result = push2(obj8);
              }
              continue;
            }
            let sorted1 = items1.sort((timestamp_ms, timestamp_ms2) => timestamp_ms.timestamp_ms - timestamp_ms2.timestamp_ms);
            let substr = items1.slice(0, closure_4);
            if (substr.length !== items1.length) {
              let obj12 = AnalyticsUtilsDefault;
              let obj10 = { clip_uuid: clip.id, clip_event_timeline_size: items1.length, clip_runtime };
              let trackResult = obj12.track(AnalyticEvents.CLIP_TIMELINE_TRIMMED, obj10);
            }
            let tmp59;
            if (substr.length > 0) {
              tmp59 = substr;
            }
            return tmp59;
          } else {
            if (tmp31.signal.type === tmp33.GAME_EVENT) {
              if (tmp31.timestamp < sum) {
                continue;
              } else {
                if (tmp31.timestamp > sum1) {
                  obj7.return();
                  break;
                } else {
                  let tmp64 = obj;
                  let DEATH = obj.UNKNOWN;
                  let eventType = tmp31.signal.eventType;
                  let tmp66 = constants2;
                  if (constants2.KILL === eventType) {
                    DEATH = tmp64.KILL;
                  } else if (tmp66.MULTIKILL === eventType) {
                    DEATH = tmp64.MULTIKILL;
                  } else if (tmp66.DEATH === eventType) {
                    DEATH = tmp64.DEATH;
                  }
                  let obj11 = { timestamp_ms: Math.round(tmp31.timestamp - sum), game: obj13 };
                  let _Math = Math;
                  let push = items1.push;
                  let obj13 = { type: DEATH, event_name: tmp31.signal.eventName };
                  let arr2 = push(obj11);
                }
                break;
              }
              break;
            }
            continue;
          }
          continue;
        }
      }
    }
  } else {
    const audioEvents1 = clip.audioEvents;
    let num2;
    if (audioEvents1 != null) {
      num2 = audioEvents1.length;
    }
    if (num2 == null) {
      num2 = 0;
    }
  }
}
