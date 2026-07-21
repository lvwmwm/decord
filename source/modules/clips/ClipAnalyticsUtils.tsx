// Module ID: 6978
// Function ID: 55752
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getClipSignalTypes, getPostSaveClipAnalytics, getPreSaveClipAnalytics

// Module 6978 (_createForOfIteratorHelperLoose)
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
function getClipType(decision) {
  decision = decision.decision;
  let type;
  if (null != decision) {
    const signal = decision.signal;
    if (null != signal) {
      type = signal.type;
    }
  }
  if (arg1(dependencyMap[4]).ClipSignalTypes.MANUAL === type) {
    return "manual";
  } else if (arg1(dependencyMap[4]).ClipSignalTypes.DISTRIBUTED === type) {
    return "distributed";
  } else {
    if (arg1(dependencyMap[4]).ClipSignalTypes.LAUGHTER !== type) {
      if (arg1(dependencyMap[4]).ClipSignalTypes.SHOUTING !== type) {
        if (arg1(dependencyMap[4]).ClipSignalTypes.GAME_EVENT !== type) {
          return "unknown";
        }
      }
    }
    return "auto_ml";
  }
}
function getClipBaseProperties(clip) {
  return { clip_type: getClipType(clip), num_clip_participants: clip.users.length, clip_session_id: clip.gameSessionId, is_candidate: clip.isCandidate };
}
function getClipContextProperties(getPreSaveClipAnalytics) {
  const obj = {};
  let id;
  obj.clip_runtime = arg1(dependencyMap[5]).getClipsRuntime(getPreSaveClipAnalytics);
  const currentClipsSession = store.getCurrentClipsSession();
  if (null != currentClipsSession) {
    id = currentClipsSession.id;
  }
  obj.current_clip_session_id = id;
  return obj;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/clips/ClipAnalyticsUtils.tsx");

export { getClipType };
export { getClipBaseProperties };
export { getClipContextProperties };
export const getClipSignalTypes = function getClipSignalTypes(timeline) {
  let iter2;
  const items = [];
  const tmp = _createForOfIteratorHelperLoose(timeline.timeline);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let type = value.signal.type;
      let tmp2 = closure_0;
      let tmp3 = closure_1;
      if (closure_0(closure_1[4]).ClipSignalTypes.MANUAL === type) {
        let arr = items.push("manual");
      } else {
        let tmp13 = closure_0;
        let tmp14 = closure_1;
        if (closure_0(closure_1[4]).ClipSignalTypes.DISTRIBUTED === type) {
          arr = items.push("distributed");
        } else {
          let tmp15 = closure_0;
          let tmp16 = closure_1;
          if (closure_0(closure_1[4]).ClipSignalTypes.LAUGHTER === type) {
            let arr1 = items.push("laughter");
          } else {
            let tmp4 = closure_0;
            let tmp5 = closure_1;
            if (closure_0(closure_1[4]).ClipSignalTypes.SHOUTING === type) {
              let arr2 = items.push("shouting");
            } else {
              let tmp6 = closure_0;
              let tmp7 = closure_1;
              if (closure_0(closure_1[4]).ClipSignalTypes.GAME_EVENT === type) {
                let _HermesInternal = HermesInternal;
                let arr3 = items.push("game_event:" + value.signal.eventType);
              }
            }
          }
        }
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  return items;
};
export const getPreSaveClipAnalytics = function getPreSaveClipAnalytics(guildId) {
  const currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
  let rTCConnection = null;
  if (null != currentUserActiveStream) {
    let obj = arg1(dependencyMap[6]);
    rTCConnection = rTCConnection.getRTCConnection(obj.encodeStreamKey(currentUserActiveStream));
  }
  obj = {};
  const merged = Object.assign(getClipBaseProperties(guildId));
  const merged1 = Object.assign(getClipContextProperties("getPreSaveClipAnalytics"));
  let rTCConnectionId;
  if (null != rTCConnection) {
    rTCConnectionId = rTCConnection.getRTCConnectionId();
  }
  obj["rtc_connection_id"] = rTCConnectionId;
  let mediaSessionId;
  if (null != rTCConnection) {
    mediaSessionId = rTCConnection.getMediaSessionId();
  }
  obj["media_session_id"] = mediaSessionId;
  let parentMediaSessionId;
  if (null != rTCConnection) {
    parentMediaSessionId = rTCConnection.parentMediaSessionId;
  }
  obj["parent_media_session_id"] = parentMediaSessionId;
  obj["guild_id"] = guildId.guildId;
  obj["channel_id"] = guildId.channelId;
  obj["application_id"] = guildId.applicationId;
  obj["application_name"] = guildId.applicationName;
  obj["clip_uuid"] = guildId.id;
  obj["clip_event_timeline_size"] = guildId.timeline.length;
  return obj;
};
export const getPostSaveClipAnalytics = function getPostSaveClipAnalytics(arg0, framesEncodedByEncoder) {
  const map = new Map();
  for (const key10013 in arg1.framesEncodedByEncoder) {
    let tmp22 = key10013;
    let tmp23 = closure_0;
    let tmp24 = closure_1;
    let obj3 = closure_0(closure_1[7]);
    let parseEncoderResult = obj3.parseEncoder(key10013);
    let value = map.get(parseEncoderResult);
    let num = 0;
    if (null != value) {
      num = value;
    }
    let result = map.set(parseEncoderResult, num + arg1.framesEncodedByEncoder[key10013]);
  }
  const obj = {};
  const merged = Object.assign(arg0);
  value = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.NVIDIA_CUDA);
  let num2 = 0;
  if (null != value) {
    num2 = value;
  }
  obj["frames_encoded_nvidia_cuda"] = num2;
  const value1 = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.NVIDIA_DIRECT_3D);
  let num3 = 0;
  if (null != value1) {
    num3 = value1;
  }
  obj["frames_encoded_nvidia_direct3d"] = num3;
  const value2 = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.OPENH264);
  let num4 = 0;
  if (null != value2) {
    num4 = value2;
  }
  obj["frames_encoded_openh264"] = num4;
  const value3 = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.VIDEOTOOLBOX);
  let num5 = 0;
  if (null != value3) {
    num5 = value3;
  }
  obj["frames_encoded_videotoolbox"] = num5;
  const value4 = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.AMD_DIRECT_3D);
  let num6 = 0;
  if (null != value4) {
    num6 = value4;
  }
  obj["frames_encoded_amd_direct3d"] = num6;
  const value5 = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.AMD_VAAPI);
  let num7 = 0;
  if (null != value5) {
    num7 = value5;
  }
  obj["frames_encoded_amd_vaapi"] = num7;
  const value6 = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.INTEL);
  let num8 = 0;
  if (null != value6) {
    num8 = value6;
  }
  obj["frames_encoded_intel"] = num8;
  const value7 = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.INTEL_DIRECT_3D);
  let num9 = 0;
  if (null != value7) {
    num9 = value7;
  }
  obj["frames_encoded_intel_direct3d"] = num9;
  const value8 = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.WMF_DIRECT_3D_INTEL);
  let num10 = 0;
  if (null != value8) {
    num10 = value8;
  }
  obj["frames_encoded_wmf_direct3d_intel"] = num10;
  const value9 = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.WMF_DIRECT_3D_NVIDIA);
  let num11 = 0;
  if (null != value9) {
    num11 = value9;
  }
  obj["frames_encoded_wmf_direct3d_nvidia"] = num11;
  const value10 = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.WMF_DIRECT_3D_AMD);
  let num12 = 0;
  if (null != value10) {
    num12 = value10;
  }
  obj["frames_encoded_wmf_direct3d_amd"] = num12;
  const value11 = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.WMF_DIRECT_3D);
  let num13 = 0;
  if (null != value11) {
    num13 = value11;
  }
  const value12 = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.WMF_DIRECT_3D_INTEL);
  let num14 = 0;
  if (null != value12) {
    num14 = value12;
  }
  const sum = num13 + num14;
  const value13 = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.WMF_DIRECT_3D_NVIDIA);
  let num15 = 0;
  if (null != value13) {
    num15 = value13;
  }
  const sum1 = sum + num15;
  const value14 = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.WMF_DIRECT_3D_AMD);
  let num16 = 0;
  if (null != value14) {
    num16 = value14;
  }
  obj["frames_encoded_wmf_direct3d"] = sum1 + num16;
  const value15 = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.UNCATEGORIZED);
  let num17 = 0;
  if (null != value15) {
    num17 = value15;
  }
  obj["frames_encoded_uncategorized"] = num17;
  const value16 = map.get(framesEncodedByEncoder(dependencyMap[7]).Encoders.UNKNOWN);
  let num18 = 0;
  if (null != value16) {
    num18 = value16;
  }
  obj["frames_encoded_unknown"] = num18;
  obj["frames_submitted"] = framesEncodedByEncoder.framesSubmitted;
  obj["frames_submitted_during_clip"] = framesEncodedByEncoder.framesSubmittedDuringClip;
  obj["frames_encoded"] = framesEncodedByEncoder.framesEncoded;
  obj["frames_encoded_during_clip"] = framesEncodedByEncoder.framesEncodedDuringClip;
  obj["frames_dropped"] = framesEncodedByEncoder.framesDropped;
  obj["frames_dropped_during_clip"] = framesEncodedByEncoder.framesDroppedDuringClip;
  obj["clip_duration_setting"] = store.getSettings().clipsLength;
  obj["clip_duration"] = framesEncodedByEncoder.clipDuration;
  obj["clip_resolution_width"] = framesEncodedByEncoder.clipResolutionWidth;
  obj["clip_resolution_height"] = framesEncodedByEncoder.clipResolutionHeight;
  obj["min_fps"] = framesEncodedByEncoder.minFps;
  obj["max_fps"] = framesEncodedByEncoder.maxFps;
  obj["submitted_fps"] = framesEncodedByEncoder.submittedFps;
  obj["target_fps"] = state.getState().fps;
  obj["audio_track_count"] = framesEncodedByEncoder.audioTrackCount;
  obj["saved_at"] = framesEncodedByEncoder.savedAt;
  return obj;
};
