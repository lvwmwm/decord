// Module ID: 6024
// Function ID: 6025
// Name: getClipBaseProperties
// Dependencies: [4279, 4208, 4261, 4275, 4242, 4246, 4726, 4253, 6025, 2]
// Exports: getClipContextProperties, getClipSaveFailureAnalytics, getClipSavedAnalytics, getClipType, getPreSaveClipAnalytics

// Module 6024 (getClipBaseProperties)
import ApplicationStreamPresets from "ApplicationStreamPresets";
import reset from "reset";
import createRTCConnection from "createRTCConnection";
import initialize from "initialize";
import _migrateDefaultStorage from "_migrateDefaultStorage";

const require = arg1;
function getClipBaseProperties(clip) {
  const decision = clip.decision;
  let type;
  if (decision != null) {
    const signal = decision.signal;
    if (signal != null) {
      type = signal.type;
    }
  }
  let str = "manual";
  if (require(4246) /* ClipSignalTypes */.ClipSignalTypes.MANUAL !== type) {
    str = "distributed";
    if (tmp2(4246).ClipSignalTypes.DISTRIBUTED !== type) {
      if (tmp2(4246).ClipSignalTypes.LAUGHTER !== type) {
        if (tmp2(4246).ClipSignalTypes.SHOUTING !== type) {
          str = "unknown";
        }
      }
      str = "auto_ml";
    }
  }
  return { clip_type: str, num_clip_participants: clip.users.length, clip_session_id: clip.gameSessionId, is_candidate: clip.isCandidate };
}
function getClipSignalTypes(remoteClipId) {
  const items = [];
  const iter = remoteClipId.timeline[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let type = nextResult.signal.type;
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tmp2 = nextResult;
    if (require(4246) /* ClipSignalTypes */.ClipSignalTypes.MANUAL === type) {
      let arr = items.push("manual");
    } else if (tmp3(4246).ClipSignalTypes.DISTRIBUTED === type) {
      arr = items.push("distributed");
    } else if (tmp3(4246).ClipSignalTypes.LAUGHTER === type) {
      let arr1 = items.push("laughter");
    } else if (tmp3(4246).ClipSignalTypes.SHOUTING === type) {
      let arr2 = items.push("shouting");
    } else if (tmp3(4246).ClipSignalTypes.GAME_EVENT === type) {
      let tmp5 = nextResult;
      let _HermesInternal = HermesInternal;
      let arr3 = items.push("game_event:" + tmp2.signal.eventType);
    }
    continue;
  }
  return items;
}
function getPostSaveClipAnalytics(arg0, framesEncodedByEncoder) {
  const map = new Map();
  for (const key10011 in arg1.framesEncodedByEncoder) {
    let tmp7 = key10011;
    let tmp8 = require;
    let tmp9 = dependencyMap;
    let obj3 = require(6025) /* parseEncoder */;
    let parseEncoderResult = obj3.parseEncoder(key10011);
    let num = map.get(parseEncoderResult);
    if (num == null) {
      num = 0;
    }
    let result = map.set(parseEncoderResult, num + arg1.framesEncodedByEncoder[key10011]);
    continue;
  }
  const obj = {};
  const merged = Object.assign(arg0);
  let num2 = map.get(require(6025) /* parseEncoder */.Encoders.NVIDIA_CUDA);
  if (num2 == null) {
    num2 = 0;
  }
  obj.frames_encoded_nvidia_cuda = num2;
  let num3 = map.get(tmp3(6025).Encoders.NVIDIA_DIRECT_3D);
  if (num3 == null) {
    num3 = 0;
  }
  obj.frames_encoded_nvidia_direct3d = num3;
  let num4 = map.get(tmp3(6025).Encoders.OPENH264);
  if (num4 == null) {
    num4 = 0;
  }
  obj.frames_encoded_openh264 = num4;
  let num5 = map.get(tmp3(6025).Encoders.VIDEOTOOLBOX);
  if (num5 == null) {
    num5 = 0;
  }
  obj.frames_encoded_videotoolbox = num5;
  let num6 = map.get(tmp3(6025).Encoders.AMD_DIRECT_3D);
  if (num6 == null) {
    num6 = 0;
  }
  obj.frames_encoded_amd_direct3d = num6;
  let num7 = map.get(tmp3(6025).Encoders.AMD_VAAPI);
  if (num7 == null) {
    num7 = 0;
  }
  obj.frames_encoded_amd_vaapi = num7;
  let num8 = map.get(tmp3(6025).Encoders.INTEL);
  if (num8 == null) {
    num8 = 0;
  }
  obj.frames_encoded_intel = num8;
  let num9 = map.get(tmp3(6025).Encoders.INTEL_DIRECT_3D);
  if (num9 == null) {
    num9 = 0;
  }
  obj.frames_encoded_intel_direct3d = num9;
  let num10 = map.get(tmp3(6025).Encoders.WMF_DIRECT_3D_INTEL);
  if (num10 == null) {
    num10 = 0;
  }
  obj.frames_encoded_wmf_direct3d_intel = num10;
  let num11 = map.get(tmp3(6025).Encoders.WMF_DIRECT_3D_NVIDIA);
  if (num11 == null) {
    num11 = 0;
  }
  obj.frames_encoded_wmf_direct3d_nvidia = num11;
  let num12 = map.get(tmp3(6025).Encoders.WMF_DIRECT_3D_AMD);
  if (num12 == null) {
    num12 = 0;
  }
  obj.frames_encoded_wmf_direct3d_amd = num12;
  let num13 = map.get(tmp3(6025).Encoders.WMF_DIRECT_3D);
  if (num13 == null) {
    num13 = 0;
  }
  let num14 = map.get(tmp3(6025).Encoders.WMF_DIRECT_3D_INTEL);
  if (num14 == null) {
    num14 = 0;
  }
  const sum = num13 + num14;
  let num15 = map.get(tmp3(6025).Encoders.WMF_DIRECT_3D_NVIDIA);
  if (num15 == null) {
    num15 = 0;
  }
  const sum1 = sum + num15;
  let num16 = map.get(tmp3(6025).Encoders.WMF_DIRECT_3D_AMD);
  if (num16 == null) {
    num16 = 0;
  }
  obj.frames_encoded_wmf_direct3d = sum1 + num16;
  let num17 = map.get(tmp3(6025).Encoders.UNCATEGORIZED);
  if (num17 == null) {
    num17 = 0;
  }
  obj.frames_encoded_uncategorized = num17;
  let num18 = map.get(tmp3(6025).Encoders.UNKNOWN);
  if (num18 == null) {
    num18 = 0;
  }
  obj.frames_encoded_unknown = num18;
  ({ framesSubmitted: obj2.frames_submitted, framesSubmittedDuringClip: obj2.frames_submitted_during_clip, framesEncoded: obj2.frames_encoded, framesEncodedDuringClip: obj2.frames_encoded_during_clip, framesDropped: obj2.frames_dropped, framesDroppedDuringClip: obj2.frames_dropped_during_clip } = framesEncodedByEncoder);
  obj.clip_duration_setting = store.getSettings().clipsLength;
  ({ clipDuration: obj2.clip_duration, clipResolutionWidth: obj2.clip_resolution_width, clipResolutionHeight: obj2.clip_resolution_height, minFps: obj2.min_fps, maxFps: obj2.max_fps, submittedFps: obj2.submitted_fps } = framesEncodedByEncoder);
  obj.target_fps = state.getState().fps;
  ({ audioTrackCount: obj2.audio_track_count, savedAt: obj2.saved_at } = framesEncodedByEncoder);
  return obj;
}
let result = require("createRTCConnection").fileFinishedImporting("modules/clips/ClipAnalyticsUtils.tsx");

export const getClipType = function getClipType(decision) {
  decision = decision.decision;
  let type;
  if (decision != null) {
    const signal = decision.signal;
    if (signal != null) {
      type = signal.type;
    }
  }
  if (require(4246) /* ClipSignalTypes */.ClipSignalTypes.MANUAL === type) {
    return "manual";
  } else if (tmp2(4246).ClipSignalTypes.DISTRIBUTED === type) {
    return "distributed";
  } else {
    if (tmp2(4246).ClipSignalTypes.LAUGHTER !== type) {
      if (tmp2(4246).ClipSignalTypes.SHOUTING !== type) {
        if (tmp2(4246).ClipSignalTypes.GAME_EVENT !== type) {
          return "unknown";
        }
      }
    }
    return "auto_ml";
  }
};
export { getClipBaseProperties };
export const getClipContextProperties = function getClipContextProperties(trackClipsShared) {
  const obj = { clip_runtime: null, current_clip_session_id: null };
  obj[0] = require(4726) /* apexExperiment */.getClipsRuntime(trackClipsShared);
  const currentClipsSession = store.getCurrentClipsSession();
  let id;
  if (currentClipsSession != null) {
    id = currentClipsSession.id;
  }
  obj[1] = id;
  return obj;
};
export { getClipSignalTypes };
export const getPreSaveClipAnalytics = function getPreSaveClipAnalytics(timeline) {
  currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
  let rTCConnection = null;
  if (null != currentUserActiveStream) {
    let obj = require(4253) /* isStreamKey */;
    rTCConnection = rTCConnection.getRTCConnection(obj.encodeStreamKey(currentUserActiveStream));
  }
  obj = {};
  const merged = Object.assign(getClipBaseProperties(timeline));
  obj = { clip_runtime: null, current_clip_session_id: null };
  obj[0] = require(4726) /* apexExperiment */.getClipsRuntime("getPreSaveClipAnalytics");
  const currentClipsSession = store.getCurrentClipsSession();
  let id;
  if (currentClipsSession != null) {
    id = currentClipsSession.id;
  }
  obj[1] = id;
  const merged1 = Object.assign(obj);
  let rTCConnectionId;
  if (rTCConnection != null) {
    rTCConnectionId = rTCConnection.getRTCConnectionId();
  }
  obj.rtc_connection_id = rTCConnectionId;
  let mediaSessionId;
  if (rTCConnection != null) {
    mediaSessionId = rTCConnection.getMediaSessionId();
  }
  obj.media_session_id = mediaSessionId;
  obj.parent_media_session_id = mediaSessionId.getMediaSessionId();
  ({ guildId: obj2.guild_id, channelId: obj2.channel_id, applicationId: obj2.application_id, applicationName: obj2.application_name, id: obj2.clip_uuid } = timeline);
  obj.clip_event_timeline_size = timeline.timeline.length;
  return obj;
};
export { getPostSaveClipAnalytics };
export const getClipSavedAnalytics = function getClipSavedAnalytics(arg0, viewerDecodeFps, remoteClipId) {
  const tmp = getPostSaveClipAnalytics(arg0, viewerDecodeFps);
  ({ clipSaveTimeMs: tmp.clip_save_time_ms, clipSizeBytes: tmp.clip_size_bytes } = viewerDecodeFps);
  if (null != viewerDecodeFps.viewerDecodeFps) {
    ({ viewerDecodeFps: tmp.decode_fps_during_clip, viewerEncodeFps: tmp.encode_fps_during_clip } = viewerDecodeFps);
    tmp.target_fps = null;
    tmp.remote_clip_id = remoteClipId.remoteClipId;
  }
  tmp.clip_signal_types = getClipSignalTypes(remoteClipId);
  if (null != arg3) {
    const _Object = Object;
    const merged = Object.assign(tmp, arg3);
  }
  return tmp;
};
export const getClipSaveFailureAnalytics = function getClipSaveFailureAnalytics(arg0, framesEncodedByEncoder) {
  const tmp = getPostSaveClipAnalytics(arg0, framesEncodedByEncoder);
  ({ errorAt: tmp.error_at, errorMessage: tmp.error_message } = framesEncodedByEncoder);
  return tmp;
};
