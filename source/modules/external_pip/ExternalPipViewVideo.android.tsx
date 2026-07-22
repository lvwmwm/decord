// Module ID: 15568
// Function ID: 118771
// Name: ExternalPipViewVideoUnavailable
// Dependencies: []

// Module 15568 (ExternalPipViewVideoUnavailable)
let StyleSheet;
function ExternalPipViewVideoUnavailable(wasStream) {
  wasStream = wasStream.wasStream;
  const tmp = callback2();
  let obj = { style: tmp.unavailable };
  if (wasStream) {
    obj = { style: tmp.unavaiableImage };
    let tmp4Result = tmp4(tmp5(tmp6[9]).StreamEnded, obj);
  } else {
    tmp4Result = tmp4(tmp5(tmp6[10]).CircleInformationIcon, {});
  }
  const items = [tmp4Result, ];
  obj = { guild_id: 19066945, exports: 32989440, body: 2674, style: tmp.unavailableText };
  const intl = arg1(dependencyMap[12]).intl;
  if (wasStream) {
    let result = intl.formatToMarkdownString(tmp9(tmp10[12]).t.1Ww0Hi, {});
  } else {
    result = intl.string(tmp9(tmp10[12]).t.Nzo5nz);
  }
  obj.children = result;
  items[1] = closure_11(arg1(dependencyMap[11]).Text, obj);
  obj.children = items;
  return closure_12(closure_6, obj);
}
function ExternalPipViewVideoUser(arg0) {
  let speaking;
  ({ userId: closure_0, channelId: closure_1, speaking } = arg0);
  let obj = arg1(dependencyMap[13]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(closure_0));
  arg1(dependencyMap[13]);
  [][0] = closure_8;
  obj = { style: callback2().user };
  let tmp7 = null;
  if (null != stateFromStores) {
    obj = { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, guildId: tmp4, size: arg1(dependencyMap[14]).AvatarSizes.XXLARGE, animate: speaking, speaking };
    tmp7 = callback(arg1(dependencyMap[14]).Avatar, obj);
  }
  obj.children = tmp7;
  return callback(closure_6, obj);
}
function ExternalPipViewVideoStream(streamId) {
  let streamReadLongTime;
  let streamReadyCallback;
  streamId = streamId.streamId;
  const arg1 = streamId;
  let obj = arg1(dependencyMap[15]);
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(streamId.userId, { location: "ExternalPipViewVideoStream" });
  const tmp2 = function useStreamReady(streamId) {
    let num;
    num = 300;
    let streamReady = num;
    let value;
    let React;
    const tmp = value(React.useState(undefined), 2);
    streamReady = tmp[0];
    value = tmp[1];
    const streamReadLongTime = value(React.useState(false), 2);
    React = streamReadLongTime[1];
    const items = [streamId];
    const items1 = [streamReady, num];
    const effect = React.useEffect(() => {
      if (null == streamReady) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          callback(true);
        }, num);
        return () => {
          clearTimeout(closure_0);
        };
      } else {
        callback2(false);
      }
    }, items1);
    return { streamReady, streamReadLongTime: streamReadLongTime[0], streamReadyCallback: React.useCallback(() => callback(arg0), items) };
  }(streamId);
  const streamReady = tmp2.streamReady;
  const importDefault = streamReady;
  ({ streamReadLongTime, streamReadyCallback } = tmp2);
  const tmp3 = callback2();
  const dependencyMap = tmp3;
  const items = [tmp3, streamReady];
  const memo = importAllResult.useMemo(() => {
    const items = [tmp3.video, ];
    const obj = {};
    let num = 1;
    if (null == streamReady) {
      num = 0;
    }
    obj.opacity = num;
    items[1] = obj;
    return items;
  }, items);
  let obj1 = arg1(dependencyMap[16]);
  const token = obj1.useToken(importDefault(dependencyMap[8]).colors.TEXT_FEEDBACK_INFO);
  const value = closure_7.get();
  let closure_3 = value;
  const items1 = [streamId, value];
  obj = {};
  const callback = importAllResult.useCallback((nativeEvent) => {
    let height;
    let width;
    if (null != streamId) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      let obj = streamId(tmp3[17]);
      obj = { width: width * value, height: height * value };
      obj.updateVideoSize(streamId, obj, 1);
    }
  }, items1);
  const items2 = [callback(importDefault(dependencyMap[18]), { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: memo, streamId, onReady: streamReadyCallback, onLayout: callback }), ];
  let tmp10 = null;
  if (null == streamReady) {
    tmp10 = null;
    if (streamReadLongTime) {
      obj = { style: tmp3.videoUnavailableWrap };
      obj1 = { style: tmp3.videoUnavailableSpinner, size: "large", color: token };
      obj.children = callback(closure_5, obj1);
      tmp10 = callback(closure_6, obj);
    }
  }
  items2[1] = tmp10;
  obj.children = items2;
  return closure_12(closure_13, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, StyleSheet, View: closure_6, PixelRatio: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const ParticipantTypes = arg1(dependencyMap[5]).ParticipantTypes;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = arg1(dependencyMap[6]));
let obj1 = arg1(dependencyMap[7]);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["backgroundColor"] = importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH;
obj.container = obj;
obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj.video = obj1;
const obj2 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2["margin"] = importDefault(dependencyMap[8]).space.PX_16;
obj2["borderRadius"] = importDefault(dependencyMap[8]).radii.sm;
obj2["justifyContent"] = "center";
obj2["alignContent"] = "center";
obj2["flexDirection"] = "row";
obj2["alignItems"] = "center";
obj2["flexWrap"] = "wrap";
obj2["flex"] = 1;
obj.videoUnavailableWrap = obj2;
const tmp3 = arg1(dependencyMap[6]);
obj.videoUnavailableSpinner = { marginTop: importDefault(dependencyMap[8]).space.PX_16 };
const obj3 = { marginTop: importDefault(dependencyMap[8]).space.PX_16 };
obj.unavailable = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[8]).radii.sm, padding: importDefault(dependencyMap[8]).space.PX_8, margin: importDefault(dependencyMap[8]).space.PX_8, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
const obj4 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[8]).radii.sm, padding: importDefault(dependencyMap[8]).space.PX_8, margin: importDefault(dependencyMap[8]).space.PX_8, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
obj.unavailableText = { marginLeft: importDefault(dependencyMap[8]).space.PX_4, textAlign: "center" };
const obj6 = { 979471010: 3142458405845922000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1661208145: 6322197226688.002, 1403737659: 0.000000000000000000000000000000000008651649628586183, 1927661827: 3770953570047519000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, marginBottom: importDefault(dependencyMap[8]).space.PX_8 };
obj.unavaiableImage = obj6;
const obj7 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj7["backgroundColor"] = importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWEST;
obj7["borderRadius"] = importDefault(dependencyMap[8]).radii.sm;
obj7["margin"] = importDefault(dependencyMap[8]).space.PX_8;
obj7["alignItems"] = "center";
obj7["justifyContent"] = "center";
obj.user = obj7;
let closure_14 = obj1.createStyles(obj);
const obj5 = { marginLeft: importDefault(dependencyMap[8]).space.PX_4, textAlign: "center" };
const memoResult = importAllResult.memo(function ExternalPipViewVideo(onLayout) {
  let channelId;
  let focusedParticipantType;
  let selectedParticipantSpeaking;
  let selectedParticipantStreamId;
  let selectedParticipantUserId;
  const tmp2 = importDefault(dependencyMap[19])();
  ({ selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType } = tmp2);
  const items = [selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType];
  ({ channelId, selectedParticipantSpeaking } = tmp2);
  const effect = importAllResult.useEffect(() => {
    callback(closure_2[20]).refreshPipUi();
  }, items);
  let obj = { style: callback2().container, onLayout: onLayout.onLayout };
  if (null != selectedParticipantStreamId) {
    obj = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
    let tmp6Result = callback(ExternalPipViewVideoStream, obj);
  } else if (null != selectedParticipantUserId) {
    obj = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
    tmp6Result = callback(ExternalPipViewVideoUser, obj);
  } else {
    const obj1 = {};
    let tmp9 = focusedParticipantType === ParticipantTypes.STREAM;
    if (!tmp9) {
      tmp9 = focusedParticipantType === ParticipantTypes.HIDDEN_STREAM;
    }
    obj1.wasStream = tmp9;
    tmp6Result = callback(ExternalPipViewVideoUnavailable, obj1);
    const tmp6 = callback;
    const tmp7 = ExternalPipViewVideoUnavailable;
  }
  obj.children = tmp6Result;
  return callback(closure_6, obj);
});
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/external_pip/ExternalPipViewVideo.android.tsx");

export default memoResult;
