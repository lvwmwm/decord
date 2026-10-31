// Module ID: 8213
// Function ID: 8214
// Name: clipPayloadUtils
// Dependencies: [32, 8214, 1072, 5768, 8215, 1252, 2]
// Exports: getClipCreatedAt, getClipEventsTimeline, getClipParticipantIds, getClipSyncTimestamp

// Module 8213 (clipPayloadUtils)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Constants2 from "Constants" /* 5768 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ClipsConstants from "ClipsConstants" /* 8214 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, map;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ CLIPS_MAX_PARTICIPANTS: closure_4, CLIPS_MAX_TIMELINE_EVENTS: hasOwnProperty, ClipSignalTypes: metroRequire, GameEventType: metroImportDefault, CLIP_RUNTIME: metroImportAll } = ClipsConstants);
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
  return users.slice(0, React3);
}
export { ServerClipGameEventType };
export const ServerClipEmotionType = obj2;
export function getClipEventsTimeline(clip) {
  let closure_1;
  _require = clip;
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
      obj2 = require("GameEventsOnPlayerExperiment");
      importDefault = obj2.isGameEventsOnPlayerEnabled("getClipEventsTimeline");
      const timeline1 = clip.timeline;
      const found = timeline1.filter((signal) => {
        const editMetadata = clip.editMetadata;
        let voiceAudio;
        if (editMetadata != null) {
          voiceAudio = editMetadata.voiceAudio;
        }
        let tmp2 = false !== voiceAudio && signal.signal.type === metroRequire.SPEAKING;
        if (!tmp2) {
          tmp2 = closure_1 && signal.signal.type === metroRequire.GAME_EVENT;
          const tmp4 = closure_1 && signal.signal.type === metroRequire.GAME_EVENT;
        }
        return tmp2;
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
      for (const item10067 of sorted) {
        let tmp12 = item10067;
        if (item10067.signal.type !== constants.SPEAKING) {
          continue;
        } else {
          if (tmp12.timestamp >= sum) {
            obj5.return();
            break;
          } else {
            let result = map.set(tmp12.signal.userId, (tmp12.signal.speakingFlags & SpeakingFlags.VOICE) === SpeakingFlags.VOICE);
          }
          break;
        }
        let tmp21 = tmp9[Symbol.iterator]();
        while (tmp21 !== undefined) {
          let tmp26 = _slicedToArray(tmp23, 2);
          let first = tmp26[0];
          if (tmp26[1]) {
            let obj3 = { timestamp_ms: 0, speaking: obj4 };
            let obj4 = { user_id: first, speaking_flags: SpeakingFlags.VOICE };
            let arr = items1.push(obj3);
          }
          continue;
        }
        for (const item10112 of sorted) {
          let tmp33 = item10112;
          if (item10112.signal.type === constants.SPEAKING) {
            if (tmp33.timestamp < sum) {
              continue;
            } else {
              if (tmp33.timestamp > sum1) {
                obj8.return();
                break;
              } else {
                let tmp72 = (tmp33.signal.speakingFlags & SpeakingFlags.VOICE) === SpeakingFlags.VOICE;
                let flag2 = map.get(tmp33.signal.userId) ?? false;
                if (flag2 === tmp72) {
                  continue;
                } else {
                  let result1 = map.set(tmp33.signal.userId, tmp72);
                  let obj6 = { timestamp_ms: Math.round(tmp33.timestamp - sum), speaking: obj7 };
                  let _Math3 = Math;
                  let push3 = items1.push;
                  let obj7 = { user_id: tmp33.signal.userId, speaking_flags: tmp33.signal.speakingFlags };
                  let push3Result = push3(obj6);
                }
              }
              break;
            }
            for (const item10146 of items) {
              let tmp45 = item10146;
              let tmp46 = item10146.peakMs < sum;
              if (!tmp46) {
                tmp46 = tmp45.peakMs > sum1;
              }
              if (!tmp46) {
                let SHOUTING;
                let obj9 = { timestamp_ms: Math.round(tmp45.peakMs - sum), emotion: obj10 };
                let _Math2 = Math;
                let push2 = items1.push;
                if (tmp45.type === constants.LAUGHTER) {
                  SHOUTING = obj2.LAUGHTER;
                } else {
                  SHOUTING = obj2.SHOUTING;
                }
                let obj10 = { type: SHOUTING };
                let push2Result = push2(obj9);
              }
              continue;
            }
            let sorted1 = items1.sort((timestamp_ms, timestamp_ms2) => timestamp_ms.timestamp_ms - timestamp_ms2.timestamp_ms);
            let substr = items1.slice(0, closure_5);
            if (substr.length !== items1.length) {
              let obj13 = AnalyticsUtilsDefault;
              let obj11 = { clip_uuid: clip.id, clip_event_timeline_size: items1.length, clip_runtime };
              let trackResult = obj13.track(AnalyticEvents.CLIP_TIMELINE_TRIMMED, obj11);
            }
            let tmp61;
            if (substr.length > 0) {
              tmp61 = substr;
            }
            return tmp61;
          } else {
            if (tmp33.signal.type === tmp35.GAME_EVENT) {
              if (tmp33.timestamp < sum) {
                continue;
              } else {
                if (tmp33.timestamp > sum1) {
                  obj8.return();
                  break;
                } else {
                  let tmp66 = obj;
                  let DEATH = obj.UNKNOWN;
                  let eventType = tmp33.signal.eventType;
                  let tmp68 = constants2;
                  if (constants2.KILL === eventType) {
                    DEATH = tmp66.KILL;
                  } else if (tmp68.MULTIKILL === eventType) {
                    DEATH = tmp66.MULTIKILL;
                  } else if (tmp68.DEATH === eventType) {
                    DEATH = tmp66.DEATH;
                  }
                  let obj12 = { timestamp_ms: Math.round(tmp33.timestamp - sum), game: obj14 };
                  let _Math = Math;
                  let push = items1.push;
                  let obj14 = { type: DEATH, event_name: tmp33.signal.eventName };
                  let arr2 = push(obj12);
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
