// Module ID: 6982
// Function ID: 55806
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4220, 4149, 4216, 4183, 4187, 4669, 4194, 6983, 2]
// Exports: getClipSignalTypes, getPostSaveClipAnalytics, getPreSaveClipAnalytics

// Module 6982 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

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
function getClipType(decision) {
  decision = decision.decision;
  let type;
  if (null != decision) {
    const signal = decision.signal;
    if (null != signal) {
      type = signal.type;
    }
  }
  if (require(4187) /* getClipCropAspectRatio */.ClipSignalTypes.MANUAL === type) {
    return "manual";
  } else if (require(4187) /* getClipCropAspectRatio */.ClipSignalTypes.DISTRIBUTED === type) {
    return "distributed";
  } else {
    if (require(4187) /* getClipCropAspectRatio */.ClipSignalTypes.LAUGHTER !== type) {
      if (require(4187) /* getClipCropAspectRatio */.ClipSignalTypes.SHOUTING !== type) {
        if (require(4187) /* getClipCropAspectRatio */.ClipSignalTypes.GAME_EVENT !== type) {
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
  obj.clip_runtime = require(4669) /* isClipsV3Enabled */.getClipsRuntime(getPreSaveClipAnalytics);
  const currentClipsSession = store.getCurrentClipsSession();
  if (null != currentClipsSession) {
    id = currentClipsSession.id;
  }
  obj.current_clip_session_id = id;
  return obj;
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/clips/ClipAnalyticsUtils.tsx");

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
      let tmp2 = require;
      let tmp3 = dependencyMap;
      if (require(4187) /* getClipCropAspectRatio */.ClipSignalTypes.MANUAL === type) {
        let arr = items.push("manual");
      } else {
        let tmp13 = require;
        let tmp14 = dependencyMap;
        if (require(4187) /* getClipCropAspectRatio */.ClipSignalTypes.DISTRIBUTED === type) {
          arr = items.push("distributed");
        } else {
          let tmp15 = require;
          let tmp16 = dependencyMap;
          if (require(4187) /* getClipCropAspectRatio */.ClipSignalTypes.LAUGHTER === type) {
            let arr1 = items.push("laughter");
          } else {
            let tmp4 = require;
            let tmp5 = dependencyMap;
            if (require(4187) /* getClipCropAspectRatio */.ClipSignalTypes.SHOUTING === type) {
              let arr2 = items.push("shouting");
            } else {
              let tmp6 = require;
              let tmp7 = dependencyMap;
              if (require(4187) /* getClipCropAspectRatio */.ClipSignalTypes.GAME_EVENT === type) {
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
  currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
  let rTCConnection = null;
  if (null != currentUserActiveStream) {
    let obj = require(4194) /* isStreamKey */;
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
    let tmp23 = require;
    let tmp24 = dependencyMap;
    let obj3 = require(6983) /* _isNativeReflectConstruct */;
    let parseEncoderResult = obj3.parseEncoder(key10013);
    let value = map.get(parseEncoderResult);
    let num = 0;
    if (null != value) {
      num = value;
    }
    let result = map.set(parseEncoderResult, num + arg1.framesEncodedByEncoder[key10013]);
    continue;
  }
  const obj = {};
  const merged = Object.assign(arg0);
  value = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.NVIDIA_CUDA);
  let num2 = 0;
  if (null != value) {
    num2 = value;
  }
  obj["frames_encoded_nvidia_cuda"] = num2;
  const value1 = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.NVIDIA_DIRECT_3D);
  let num3 = 0;
  if (null != value1) {
    num3 = value1;
  }
  obj["frames_encoded_nvidia_direct3d"] = num3;
  const value2 = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.OPENH264);
  let num4 = 0;
  if (null != value2) {
    num4 = value2;
  }
  obj["frames_encoded_openh264"] = num4;
  const value3 = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.VIDEOTOOLBOX);
  let num5 = 0;
  if (null != value3) {
    num5 = value3;
  }
  obj["frames_encoded_videotoolbox"] = num5;
  const value4 = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.AMD_DIRECT_3D);
  let num6 = 0;
  if (null != value4) {
    num6 = value4;
  }
  obj["frames_encoded_amd_direct3d"] = num6;
  const value5 = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.AMD_VAAPI);
  let num7 = 0;
  if (null != value5) {
    num7 = value5;
  }
  obj["frames_encoded_amd_vaapi"] = num7;
  const value6 = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.INTEL);
  let num8 = 0;
  if (null != value6) {
    num8 = value6;
  }
  obj["frames_encoded_intel"] = num8;
  const value7 = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.INTEL_DIRECT_3D);
  let num9 = 0;
  if (null != value7) {
    num9 = value7;
  }
  obj["frames_encoded_intel_direct3d"] = num9;
  const value8 = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.WMF_DIRECT_3D_INTEL);
  let num10 = 0;
  if (null != value8) {
    num10 = value8;
  }
  obj["frames_encoded_wmf_direct3d_intel"] = num10;
  const value9 = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.WMF_DIRECT_3D_NVIDIA);
  let num11 = 0;
  if (null != value9) {
    num11 = value9;
  }
  obj["frames_encoded_wmf_direct3d_nvidia"] = num11;
  const value10 = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.WMF_DIRECT_3D_AMD);
  let num12 = 0;
  if (null != value10) {
    num12 = value10;
  }
  obj["frames_encoded_wmf_direct3d_amd"] = num12;
  const value11 = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.WMF_DIRECT_3D);
  let num13 = 0;
  if (null != value11) {
    num13 = value11;
  }
  const value12 = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.WMF_DIRECT_3D_INTEL);
  let num14 = 0;
  if (null != value12) {
    num14 = value12;
  }
  const sum = num13 + num14;
  const value13 = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.WMF_DIRECT_3D_NVIDIA);
  let num15 = 0;
  if (null != value13) {
    num15 = value13;
  }
  const sum1 = sum + num15;
  const value14 = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.WMF_DIRECT_3D_AMD);
  let num16 = 0;
  if (null != value14) {
    num16 = value14;
  }
  obj["frames_encoded_wmf_direct3d"] = sum1 + num16;
  const value15 = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.UNCATEGORIZED);
  let num17 = 0;
  if (null != value15) {
    num17 = value15;
  }
  obj["frames_encoded_uncategorized"] = num17;
  const value16 = map.get(require(6983) /* _isNativeReflectConstruct */.Encoders.UNKNOWN);
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
