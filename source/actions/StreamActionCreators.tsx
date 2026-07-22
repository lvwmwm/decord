// Module ID: 4305
// Function ID: 37689
// Name: isVoiceChannelFull
// Dependencies: []
// Exports: changeStreamRegion, fetchStreamPreview, joinPrivateChannelAndWatchStream, notifyStreamStart, setLayout, setStreamPaused, startStream, stopOwnStream, toggleSelfStreamHidden, updateStreamSettings

// Module 4305 (isVoiceChannelFull)
function isVoiceChannelFull(arg0, channelId) {
  const channel = channel.getChannel(channelId);
  importDefault(dependencyMap[14])(null != channel, "Cannot join a null voice channel");
  let isChannelFullResult = !inChannel.isInChannel(channelId);
  if (isChannelFullResult) {
    isChannelFullResult = channelId(dependencyMap[15]).isChannelFull(channel, inChannel, closure_10);
    const obj = channelId(dependencyMap[15]);
  }
  return isChannelFullResult;
}
function watchStream(stream, forceMultiple) {
  if (null == remoteSessionId.getRemoteSessionId()) {
    const channelId = stream.channelId;
    if (null == stream.guildId) {
      let obj = forceMultiple(dependencyMap[13]);
      const encodeStreamKeyResult = obj.encodeStreamKey(stream);
      forceMultiple = undefined;
      if (null != forceMultiple) {
        forceMultiple = forceMultiple.forceMultiple;
      }
      if (!forceMultiple) {
        const allActiveStreamsForChannel = authStore.getAllActiveStreamsForChannel(channelId);
        forceMultiple = allActiveStreamsForChannel.filter((ownerId) => ownerId.ownerId !== id.getId()).length >= MAX_VALUE;
      }
      obj = { type: "STREAM_WATCH", streamKey: encodeStreamKeyResult, allowMultiple: forceMultiple };
      importDefault(dependencyMap[12]).dispatch(obj);
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
        const participant = importDefault(dependencyMap[16]).selectParticipant(stream.channelId, encodeStreamKeyResult);
        const obj4 = importDefault(dependencyMap[16]);
      }
      const obj2 = importDefault(dependencyMap[12]);
    }
  }
}
function watchStreamAndTransitionToStream(stream, forceMultiple) {
  const channelId = stream.channelId;
  if (null == stream.guildId) {
    watchStream(stream, forceMultiple);
    let windowOpen = windowOpen.getWindowOpen(constants2.CHANNEL_CALL_POPOUT);
    if (windowOpen) {
      windowOpen = store.getVoiceChannelId() === channelId;
    }
    if (!windowOpen) {
      importDefault(dependencyMap[17])(stream);
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
  let obj = importDefault(dependencyMap[12]);
  obj = { type: "STREAM_STOP", streamKey: encodeStreamKeyResult, appContext: constants.APP };
  obj.dispatch(obj);
}
function closeStream(encodeStreamKeyResult, flag) {
  if (flag === undefined) {
    flag = true;
  }
  let obj = importDefault(dependencyMap[12]);
  obj = { type: "STREAM_CLOSE", streamKey: encodeStreamKeyResult, canShowFeedback: flag };
  obj.dispatch(obj);
}
async function _fetchStreamPreview(guildId, channelId, ownerId, arg3) {
  if (closure_6.shouldFetchPreview(guildId, channelId, ownerId)) {
    let obj = callback(closure_2[13]);
    obj = {};
    if (null != guildId) {
      let CALL = constants.GUILD;
    } else {
      CALL = constants.CALL;
    }
    obj.streamType = CALL;
    obj.guildId = guildId;
    obj.channelId = channelId;
    obj.ownerId = ownerId;
    const encodeStreamKeyResult = obj.encodeStreamKey(obj);
    let obj2 = callback2(closure_2[12]);
    obj = { type: "STREAM_PREVIEW_FETCH_START", streamKey: encodeStreamKeyResult };
    obj2.dispatch(obj);
    const HTTP = callback(closure_2[18]).HTTP;
    const obj1 = { url: closure_13.STREAM_PREVIEW(encodeStreamKeyResult) };
    obj2 = {};
    const _Date = Date;
    obj2.version = Date.now();
    obj1.query = obj2;
    obj1.oldFormErrors = true;
    obj1.rejectWithError = callback(closure_2[18]).rejectWithMigratedError();
    const obj7 = callback(closure_2[18]);
    const tmp9 = encodeStreamKeyResult;
    const tmp18 = yield HTTP.get(obj1);
    const obj3 = { type: "STREAM_PREVIEW_FETCH_SUCCESS", streamKey: tmp9, previewURL: tmp18.body.url };
    callback2(closure_2[12]).dispatch(obj3);
    const obj8 = callback2(closure_2[12]);
  }
}
async function _notifyStreamStart(arg0, arg1) {
  let obj = callback2(closure_2[20]);
  obj = { url: closure_13.STREAM_NOTIFY(arg0), oldFormErrors: true };
  obj = { event: callback(closure_2[21]).NetworkActionNames.STREAM_NOTIFY };
  obj.trackedActionData = obj;
  obj.rejectWithError = true;
  yield obj.post(obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
({ Endpoints: closure_13, AppContext: closure_14, PopoutWindowKeys: closure_15 } = arg1(dependencyMap[10]));
const StreamTypes = arg1(dependencyMap[11]).StreamTypes;
const tmp2 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("actions/StreamActionCreators.tsx");

export const startStream = function startStream(guildId, channelId) {
  let obj = importDefault(dependencyMap[12]);
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
  let obj = paused(dependencyMap[13]);
  const encodeStreamKeyResult = obj.encodeStreamKey(currentUserActiveStream);
  obj = { type: "STREAM_SET_PAUSED", streamKey: encodeStreamKeyResult, paused };
  importDefault(dependencyMap[12]).dispatch(obj);
};
export { watchStream };
export const toggleSelfStreamHidden = function toggleSelfStreamHidden(channelId, selfStreamHidden) {
  let obj = importDefault(dependencyMap[12]);
  obj = { type: "STREAM_UPDATE_SELF_HIDDEN", channelId, selfStreamHidden };
  obj.dispatch(obj);
};
export { watchStreamAndTransitionToStream };
export { stopStream };
export { closeStream };
export const fetchStreamPreview = function fetchStreamPreview(arg0, arg1, arg2) {
  return _fetchStreamPreview(...arguments);
};
export const setLayout = function setLayout(layout) {
  let obj = importDefault(dependencyMap[12]);
  obj = { type: "STREAM_LAYOUT_UPDATE", layout };
  obj.dispatch(obj);
};
export const notifyStreamStart = function notifyStreamStart() {
  return _notifyStreamStart(...arguments);
};
export const updateStreamSettings = function updateStreamSettings(noTrack) {
  if (true !== noTrack.noTrack) {
    let obj = arg1(dependencyMap[22]);
    const result = obj.trackStreamSettingsUpdate(noTrack.preset, noTrack.resolution, noTrack.frameRate, noTrack.soundshareEnabled);
  }
  obj = { type: "STREAM_UPDATE_SETTINGS" };
  const merged = Object.assign(noTrack);
  importDefault(dependencyMap[12]).dispatch(obj);
};
export const changeStreamRegion = function changeStreamRegion(first, preferredRegion) {
  const HTTP = preferredRegion(dependencyMap[18]).HTTP;
  let obj = { url: closure_13.STREAM(first), body: obj, oldFormErrors: true, rejectWithError: true };
  obj = { region: preferredRegion };
  HTTP.patch(obj);
};
export const stopOwnStream = function stopOwnStream(flag) {
  if (flag === undefined) {
    flag = true;
  }
  const currentUserActiveStream = authStore.getCurrentUserActiveStream();
  if (null != currentUserActiveStream) {
    stopStream(arg1(dependencyMap[13]).encodeStreamKey(currentUserActiveStream), flag);
    const obj = arg1(dependencyMap[13]);
  }
};
export const joinPrivateChannelAndWatchStream = function joinPrivateChannelAndWatchStream(id, streamKey) {
  streamKey = id;
  id = id.getId();
  const importDefault = streamKey(dependencyMap[13]).decodeStreamKey(streamKey);
  const voiceChannelId = store.getVoiceChannelId();
  if (tmp3) {
    importDefault(dependencyMap[23]).disconnect();
    const obj2 = importDefault(dependencyMap[23]);
  }
  const obj = streamKey(dependencyMap[13]);
  const tmp3 = null != voiceChannelId && voiceChannelId !== id;
  importDefault(dependencyMap[24]).addRecipient(id, id, undefined, () => {
    callback(closure_2[25]).call(arg0, false, false, null, () => {
      callback(closure_1);
    });
  });
};
