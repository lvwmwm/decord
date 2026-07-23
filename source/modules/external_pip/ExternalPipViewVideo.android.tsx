// Module ID: 15685
// Function ID: 120944
// Name: ExternalPipViewVideoUnavailable
// Dependencies: [57, 31, 27, 1348, 1849, 4148, 33, 4130, 689, 10568, 4086, 4126, 1212, 566, 1273, 10575, 3834, 15686, 10585, 15687, 10233, 2]

// Module 15685 (ExternalPipViewVideoUnavailable)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { ParticipantTypes } from "ParticipantTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_11;
let closure_12;
let closure_13;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function ExternalPipViewVideoUnavailable(wasStream) {
  wasStream = wasStream.wasStream;
  const tmp = callback2();
  let obj = { style: tmp.unavailable };
  if (wasStream) {
    obj = { style: tmp.unavaiableImage };
    let tmp4Result = tmp4(tmp5(10568).StreamEnded, obj);
  } else {
    tmp4Result = tmp4(tmp5(4086).CircleInformationIcon, {});
  }
  const items = [tmp4Result, ];
  obj = { variant: "text-md/semibold", style: tmp.unavailableText, lineClamp: 1 };
  const intl = require(1212) /* getSystemLocale */.intl;
  if (wasStream) {
    let result = intl.formatToMarkdownString(tmp9(1212).t["1Ww0Hi"], {});
  } else {
    result = intl.string(tmp9(1212).t.Nzo5nz);
  }
  obj.children = result;
  items[1] = closure_11(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return closure_12(closure_6, obj);
}
function ExternalPipViewVideoUser(arg0) {
  let importDefault;
  let require;
  let speaking;
  ({ userId: require, channelId: importDefault, speaking } = arg0);
  let obj = require(566) /* initialize */;
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getUser(closure_0));
  require(566) /* initialize */;
  [][0] = _isNativeReflectConstruct;
  obj = { style: callback2().user };
  let tmp7 = null;
  if (null != stateFromStores) {
    obj = { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, guildId: tmp4, size: require(1273) /* Button */.AvatarSizes.XXLARGE, animate: speaking, speaking };
    tmp7 = callback(require(1273) /* Button */.Avatar, obj);
  }
  obj.children = tmp7;
  return callback(closure_6, obj);
}
function ExternalPipViewVideoStream(streamId) {
  let streamReadLongTime;
  let streamReadyCallback;
  streamId = streamId.streamId;
  let obj = streamId(10575);
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(streamId.userId, { location: "ExternalPipViewVideoStream" });
  const tmp2 = (function useStreamReady(streamId) {
    let closure_0 = streamId;
    let num;
    num = 300;
    let streamReady;
    let _slicedToArray;
    let closure_4;
    const tmp = value(outer1_4.useState(undefined), 2);
    streamReady = tmp[0];
    _slicedToArray = tmp[1];
    const streamReadLongTime = value(outer1_4.useState(false), 2);
    closure_4 = streamReadLongTime[1];
    const items = [streamId];
    const items1 = [streamReady, num];
    const effect = outer1_4.useEffect(() => {
      if (null == streamReady) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          outer1_4(true);
        }, num);
        return () => {
          clearTimeout(closure_0);
        };
      } else {
        callback2(false);
      }
    }, items1);
    return { streamReady, streamReadLongTime: streamReadLongTime[0], streamReadyCallback: outer1_4.useCallback(() => callback(closure_0), items) };
  })(streamId);
  let streamReady = tmp2.streamReady;
  ({ streamReadLongTime, streamReadyCallback } = tmp2);
  const tmp3 = callback2();
  const dependencyMap = tmp3;
  let items = [tmp3, streamReady];
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
  let obj1 = streamId(3834);
  const token = obj1.useToken(streamReady(689).colors.TEXT_FEEDBACK_INFO);
  const value = closure_7.get();
  let items1 = [streamId, value];
  obj = {};
  const callback = importAllResult.useCallback((nativeEvent) => {
    let height;
    let width;
    if (null != streamId) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      let obj = streamId(tmp3[17]);
      obj = { width: width * _slicedToArray, height: height * _slicedToArray };
      obj.updateVideoSize(streamId, obj, 1);
    }
  }, items1);
  const items2 = [callback(streamReady(10585), { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: memo, streamId, onReady: streamReadyCallback, onLayout: callback }), ];
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
({ ActivityIndicator: closure_5, StyleSheet, View: closure_6, PixelRatio: closure_7 } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = jsxProd);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH;
obj.container = obj;
_createForOfIteratorHelperLoose = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj.video = _createForOfIteratorHelperLoose;
const obj2 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2["margin"] = require("_createForOfIteratorHelperLoose").space.PX_16;
obj2["borderRadius"] = require("_createForOfIteratorHelperLoose").radii.sm;
obj2["justifyContent"] = "center";
obj2["alignContent"] = "center";
obj2["flexDirection"] = "row";
obj2["alignItems"] = "center";
obj2["flexWrap"] = "wrap";
obj2["flex"] = 1;
obj.videoUnavailableWrap = obj2;
obj.videoUnavailableSpinner = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
const obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.unavailable = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: require("_createForOfIteratorHelperLoose").space.PX_8, margin: require("_createForOfIteratorHelperLoose").space.PX_8, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
const obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: require("_createForOfIteratorHelperLoose").space.PX_8, margin: require("_createForOfIteratorHelperLoose").space.PX_8, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
obj.unavailableText = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4, textAlign: "center" };
const obj6 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, resizeMode: "contain", aspectRatio: 2.5, width: "80%" };
obj.unavaiableImage = obj6;
const obj7 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj7["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST;
obj7["borderRadius"] = require("_createForOfIteratorHelperLoose").radii.sm;
obj7["margin"] = require("_createForOfIteratorHelperLoose").space.PX_8;
obj7["alignItems"] = "center";
obj7["justifyContent"] = "center";
obj.user = obj7;
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
const obj5 = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4, textAlign: "center" };
const memoResult = importAllResult.memo(function ExternalPipViewVideo(onLayout) {
  let channelId;
  let focusedParticipantType;
  let selectedParticipantSpeaking;
  let selectedParticipantStreamId;
  let selectedParticipantUserId;
  const tmp2 = importDefault(15687)();
  ({ selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType } = tmp2);
  const items = [selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType];
  ({ channelId, selectedParticipantSpeaking } = tmp2);
  const effect = importAllResult.useEffect(() => {
    outer1_1(outer1_2[20]).refreshPipUi();
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
let result = require("get ActivityIndicator").fileFinishedImporting("modules/external_pip/ExternalPipViewVideo.android.tsx");

export default memoResult;
