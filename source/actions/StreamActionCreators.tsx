// Module ID: 4309
// Function ID: 37721
// Name: isVoiceChannelFull
// Dependencies: [5, 4144, 4310, 4311, 4149, 1194, 1348, 1838, 1906, 4146, 653, 4195, 686, 4194, 44, 4312, 4323, 4336, 507, 664, 4942, 480, 8856, 4944, 4140, 8922, 2]
// Exports: changeStreamRegion, fetchStreamPreview, joinPrivateChannelAndWatchStream, notifyStreamStart, setLayout, setStreamPaused, startStream, stopOwnStream, toggleSelfStreamHidden, updateStreamSettings

// Module 4309 (isVoiceChannelFull)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import ME from "ME";
import { StreamTypes } from "StreamIssueReportReasons";

let closure_13;
let closure_14;
let closure_15;
const require = arg1;
function isVoiceChannelFull(arg0, channelId) {
  channel = channel.getChannel(channelId);
  importDefault(44)(null != channel, "Cannot join a null voice channel");
  let isChannelFullResult = !inChannel.isInChannel(channelId);
  if (isChannelFullResult) {
    isChannelFullResult = require(4312) /* _createForOfIteratorHelperLoose */.isChannelFull(channel, inChannel, _createForOfIteratorHelperLoose);
    const obj = require(4312) /* _createForOfIteratorHelperLoose */;
  }
  return isChannelFullResult;
}
function watchStream(stream, forceMultiple) {
  if (null == remoteSessionId.getRemoteSessionId()) {
    const channelId = stream.channelId;
    if (null == stream.guildId) {
      let obj = require(4194) /* isStreamKey */;
      const encodeStreamKeyResult = obj.encodeStreamKey(stream);
      forceMultiple = undefined;
      if (null != forceMultiple) {
        forceMultiple = forceMultiple.forceMultiple;
      }
      if (!forceMultiple) {
        const allActiveStreamsForChannel = authStore.getAllActiveStreamsForChannel(channelId);
        forceMultiple = allActiveStreamsForChannel.filter((ownerId) => ownerId.ownerId !== outer1_8.getId()).length >= MAX_VALUE;
      }
      obj = { type: "STREAM_WATCH", streamKey: encodeStreamKeyResult, allowMultiple: forceMultiple };
      importDefault(686).dispatch(obj);
      let forceFocus;
      if (null != forceMultiple) {
        forceFocus = forceMultiple.forceFocus;
      }
      let tmp12 = true !== forceFocus;
      if (tmp12) {
        if (!forceMultiple) {
          forceMultiple = null != forceMultiple && forceMultiple.noFocus;
          const tmp13 = null != forceMultiple && forceMultiple.noFocus;
        }
        tmp12 = forceMultiple;
      }
      if (!tmp12) {
        const participant = importDefault(4323).selectParticipant(stream.channelId, encodeStreamKeyResult);
        const obj4 = importDefault(4323);
      }
      const obj2 = importDefault(686);
    }
  }
}
function watchStreamAndTransitionToStream(stream, forceMultiple) {
  const channelId = stream.channelId;
  if (null == stream.guildId) {
    watchStream(stream, forceMultiple);
    windowOpen = windowOpen.getWindowOpen(constants2.CHANNEL_CALL_POPOUT);
    if (windowOpen) {
      windowOpen = store.getVoiceChannelId() === channelId;
    }
    if (!windowOpen) {
      importDefault(4336)(stream);
    }
  }
}
function stopStream(encodeStreamKeyResult, flag) {
  let flag2 = arg2;
  if (flag === undefined) {
    flag = true;
  }
  if (flag2 === undefined) {
    flag2 = true;
  }
  if (flag2) {
    closeStream(encodeStreamKeyResult, flag);
  }
  let obj = importDefault(686);
  obj = { type: "STREAM_STOP", streamKey: encodeStreamKeyResult, appContext: constants.APP };
  obj.dispatch(obj);
}
function closeStream(closure_0, flag) {
  if (flag === undefined) {
    flag = true;
  }
  let obj = importDefault(686);
  obj = { type: "STREAM_CLOSE", streamKey: closure_0, canShowFeedback: flag };
  obj.dispatch(obj);
}
async function _fetchStreamPreview(arg0, arg1, arg2, arg3) {
  if (outer2_6.shouldFetchPreview(arg0, arg1, arg2)) {
    let obj = outer2_0(outer2_2[13]);
    obj = {};
    if (null != arg0) {
      let CALL = outer2_16.GUILD;
    } else {
      CALL = outer2_16.CALL;
    }
    obj.streamType = CALL;
    obj.guildId = arg0;
    obj.channelId = arg1;
    obj.ownerId = arg2;
    const encodeStreamKeyResult = obj.encodeStreamKey(obj);
    let obj2 = outer2_1(outer2_2[12]);
    obj = { type: "STREAM_PREVIEW_FETCH_START", streamKey: encodeStreamKeyResult };
    obj2.dispatch(obj);
    const HTTP = outer2_0(outer2_2[18]).HTTP;
    const obj1 = { url: outer2_13.STREAM_PREVIEW(encodeStreamKeyResult) };
    obj2 = {};
    const _Date = Date;
    obj2.version = Date.now();
    obj1.query = obj2;
    obj1.oldFormErrors = true;
    obj1.rejectWithError = outer2_0(outer2_2[18]).rejectWithMigratedError();
    const obj7 = outer2_0(outer2_2[18]);
    const tmp9 = encodeStreamKeyResult;
    const tmp18 = yield HTTP.get(obj1);
    const obj3 = { type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: tmp9, previewURL: tmp18.body.url };
    outer2_1(outer2_2[12]).dispatch(obj3);
    const obj8 = outer2_1(outer2_2[12]);
  }
}
async function _notifyStreamStart(arg0, arg1) {
  let obj = outer2_1(outer2_2[20]);
  obj = { url: outer2_13.STREAM_NOTIFY(arg0), oldFormErrors: true };
  obj = { event: outer2_0(outer2_2[21]).NetworkActionNames.STREAM_NOTIFY };
  obj.trackedActionData = obj;
  obj.rejectWithError = true;
  yield obj.post(obj);
}
({ Endpoints: closure_13, AppContext: closure_14, PopoutWindowKeys: closure_15 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/StreamActionCreators.tsx");

export const startStream = function startStream(guildId, channelId) {
  let obj = importDefault(686);
  obj = { type: "STREAM_START" };
  if (null != guildId) {
    let CALL = StreamTypes.GUILD;
  } else {
    CALL = StreamTypes.CALL;
  }
  obj.streamType = CALL;
  obj.guildId = guildId;
  obj.channelId = channelId;
  obj.appContext = constants.APP;
  const merged = Object.assign(arg2);
  obj.dispatch(obj);
};
export const setStreamPaused = function setStreamPaused(currentUserActiveStream, paused) {
  let obj = require(4194) /* isStreamKey */;
  const encodeStreamKeyResult = obj.encodeStreamKey(currentUserActiveStream);
  obj = { type: "STREAM_SET_PAUSED", streamKey: encodeStreamKeyResult, paused };
  importDefault(686).dispatch(obj);
};
export { watchStream };
export const toggleSelfStreamHidden = function toggleSelfStreamHidden(channelId, selfStreamHidden) {
  let obj = importDefault(686);
  obj = { type: "STREAM_UPDATE_SELF_HIDDEN", channelId, selfStreamHidden };
  obj.dispatch(obj);
};
export { watchStreamAndTransitionToStream };
export { stopStream };
export { closeStream };
export const fetchStreamPreview = function fetchStreamPreview(closure_0, closure_1, closure_2) {
  return _fetchStreamPreview(...arguments);
};
export const setLayout = function setLayout(layout) {
  let obj = importDefault(686);
  obj = { type: "STREAM_LAYOUT_UPDATE", layout };
  obj.dispatch(obj);
};
export const notifyStreamStart = function notifyStreamStart() {
  return _notifyStreamStart(...arguments);
};
export const updateStreamSettings = function updateStreamSettings(noTrack) {
  if (true !== noTrack.noTrack) {
    let obj = require(8856) /* isPremiumRequirement */;
    const result = obj.trackStreamSettingsUpdate(noTrack.preset, noTrack.resolution, noTrack.frameRate, noTrack.soundshareEnabled);
  }
  obj = { type: "STREAM_UPDATE_SETTINGS" };
  const merged = Object.assign(noTrack);
  importDefault(686).dispatch(obj);
};
export const changeStreamRegion = function changeStreamRegion(closure_0, preferredRegion) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: closure_13.STREAM(closure_0), body: obj, oldFormErrors: true, rejectWithError: true };
  obj = { region: preferredRegion };
  HTTP.patch(obj);
};
export const stopOwnStream = function stopOwnStream(flag) {
  if (flag === undefined) {
    flag = true;
  }
  const currentUserActiveStream = authStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    stopStream(require(4194) /* isStreamKey */.encodeStreamKey(currentUserActiveStream), flag);
    const obj = require(4194) /* isStreamKey */;
  }
};
export const joinPrivateChannelAndWatchStream = function joinPrivateChannelAndWatchStream(id, streamKey) {
  const _require = id;
  id = id.getId();
  const importDefault = _require(4194).decodeStreamKey(streamKey);
  const voiceChannelId = store.getVoiceChannelId();
  if (tmp3) {
    importDefault(4944).disconnect();
    const obj2 = importDefault(4944);
  }
  const obj = _require(4194);
  tmp3 = null != voiceChannelId && voiceChannelId !== id;
  importDefault(4140).addRecipient(id, id, undefined, () => {
    callback(outer1_2[25]).call(closure_0, false, false, null, () => {
      outer2_20(outer1_1);
    });
  });
};
