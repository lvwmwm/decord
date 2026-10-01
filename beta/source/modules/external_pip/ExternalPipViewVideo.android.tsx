// Module ID: 16827
// Function ID: 16828
// Name: ExternalPipViewVideo
// Dependencies: [32, 19, 17, 2045, 1372, 4857, 21, 4836, 576, 8877, 4787, 4832, 1115, 504, 8902, 1177, 8881, 4531, 16828, 8892, 16829, 8886, 2]

// Module 16827 (ExternalPipViewVideo)
import nativeDefault from "native" /* 576 */;
import CallConstants from "CallConstants" /* 4857 */;
import ExternalPipDefault from "ExternalPip" /* 8886 */;
import VideoActionCreators from "VideoActionCreators" /* 16828 */;
import useExternalPipParticipantDefault from "useExternalPipParticipant" /* 16829 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj9;
let unpackModuleId;
function ExternalPipViewVideoUnavailable(wasStream) {
  let items;
  let result;
  let tmp10;
  let tmp4Result;
  let tmp8;
  wasStream = wasStream.wasStream;
  const tmp = closure_14();
  const obj = { style: tmp.unavailable, children: items };
  const tmp2 = closure_12;
  const tmp3 = metroRequire;
  if (wasStream) {
    const obj2 = { style: tmp.unavaiableImage };
    tmp4Result = tmp4(tmp5(8877).StreamEnded, obj2);
    tmp8 = tmp4;
    tmp10 = tmp5;
  } else {
    tmp4Result = tmp4(tmp5(4787).CircleInformationIcon, {});
    tmp8 = tmp4;
    tmp10 = tmp5;
  }
  items = [tmp4Result, ];
  const obj3 = { variant: "text-md/semibold", style: tmp.unavailableText, lineClamp: 1, children: result };
  const Text = tmp10(4832).Text;
  const intl = tmp10(1115).intl;
  if (wasStream) {
    result = intl.formatToMarkdownString(tmp10(1115).t["1Ww0Hi"], {});
  } else {
    result = intl.string(tmp10(1115).t.Nzo5nz);
  }
  items[1] = tmp8(Text, obj3);
  return tmp2(tmp3, obj);
}
function ExternalPipViewVideoUser(userId) {
  let speaking;
  let tmp8Result;
  userId = userId.userId;
  ({ channelId: importDefault, speaking } = userId);
  const items = [UserStore];
  const tmp = closure_14();
  const obj = userId(504);
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  const items1 = [ChannelStore];
  const obj2 = userId(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const channel = ChannelStore.getChannel(importDefault);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  userId(8902);
  const obj3 = { style: tmp.user, children: tmp8Result };
  tmp8Result = null;
  const tmp9 = closure_6;
  if (null != stateFromStores) {
    const obj4 = { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, guildId: stateFromStores1, size: userId(1177).AvatarSizes.XXLARGE, animate: speaking, speaking, speakingColor: tmp7 };
    const Avatar = tmp2(1177).Avatar;
    tmp8Result = tmp8(Avatar, obj4);
  }
  return closure_11(tmp9, obj3);
}
function ExternalPipViewVideoStream(streamId) {
  let c3;
  let closure_3;
  let closure_4;
  let first;
  let first1;
  let obj4;
  let video;
  streamId = streamId.streamId;
  const userId = streamId.userId;
  let obj = streamId(8881);
  let c1 = 300;
  first = undefined;
  closure_3 = undefined;
  closure_4 = undefined;
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, { location: "ExternalPipViewVideoStream" });
  [first, closure_3] = react.useState(undefined);
  [first1, closure_4] = react.useState(false);
  let items = [streamId];
  const items1 = [first, 300];
  const callback = react.useCallback(() => closure_3(streamId), items);
  const effect = react.useEffect(() => {
    let closure_0;
    if (null == first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_4(true);
      }, c1);
      return () => {
        clearTimeout(closure_0);
      };
    } else {
      closure_4(false);
    }
  }, items1);
  const tmp8 = closure_14();
  dependencyMap = tmp8;
  const items2 = [tmp8, first];
  const memo = react.useMemo(() => {
    const items = [video.video, ];
    let num = 1;
    if (null == first) {
      num = 0;
    }
    items[1] = { opacity: num };
    return items;
  }, items2);
  const obj2 = streamId(4531);
  const token = obj2.useToken(first(576).colors.TEXT_FEEDBACK_INFO);
  const value = closure_7.get();
  _slicedToArray = value;
  const items3 = [streamId, value];
  const callback1 = react.useCallback((nativeEvent) => {
    let height;
    let width;
    if (null != streamId) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      size = { width: width * c3, height: height * c3 };
      const obj = VideoActionCreators;
      obj.updateVideoSize(tmp, size, 1);
    }
  }, items3);
  const children = [closure_11(first(8892), { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: memo, streamId, onReady: callback, onLayout: callback1 }), ];
  let tmp15Result = null;
  const tmp13 = closure_12;
  const tmp14 = closure_13;
  if (null == first) {
    tmp15Result = null;
    if (first1) {
      const obj3 = { style: tmp8.videoUnavailableWrap, children: closure_11(closure_5, obj4) };
      obj4 = { style: tmp8.videoUnavailableSpinner, size: "large", color: token };
      tmp15Result = tmp15(closure_6, obj3);
    }
  }
  children[1] = tmp15Result;
  return tmp13(tmp14, { children });
}
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, StyleSheet, View: metroRequire, PixelRatio: metroImportDefault } = react_native);
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, video: obj3, videoUnavailableWrap: obj4, videoUnavailableSpinner: { marginTop: nativeDefault.space.PX_16 }, unavailable: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8, margin: nativeDefault.space.PX_8, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 }, unavailableText: { marginLeft: nativeDefault.space.PX_4, textAlign: "center" }, unavaiableImage: { marginBottom: nativeDefault.space.PX_8, resizeMode: "contain", aspectRatio: 2.5, width: "80%" }, user: obj9 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { margin: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm, justifyContent: "center", alignContent: "center", flexDirection: "row", alignItems: "center", flexWrap: "wrap", flex: 1 };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
({ marginTop: nativeDefault.space.PX_16 });
({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8, margin: nativeDefault.space.PX_8, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 });
({ marginLeft: nativeDefault.space.PX_4, textAlign: "center" });
obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, margin: nativeDefault.space.PX_8, alignItems: "center", justifyContent: "center" };
({ marginBottom: nativeDefault.space.PX_8, resizeMode: "contain", aspectRatio: 2.5, width: "80%" });
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
let closure_14 = createStyles(obj);
const memoResult = react.memo(function ExternalPipViewVideo(onLayout) {
  let channelId;
  let focusedParticipantType;
  let selectedParticipantSpeaking;
  let selectedParticipantStreamId;
  let selectedParticipantUserId;
  let tmp4Result;
  onLayout = onLayout.onLayout;
  const tmp = closure_14();
  const tmp2 = useExternalPipParticipantDefault();
  ({ selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType } = tmp2);
  const items = [selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType];
  ({ channelId, selectedParticipantSpeaking } = tmp2);
  const effect = react.useEffect(() => {
    const obj = ExternalPipDefault;
    obj.refreshPipUi();
  }, items);
  let obj = { style: tmp.container, onLayout, children: tmp4Result };
  const tmp5 = metroRequire;
  if (null != selectedParticipantStreamId) {
    const obj2 = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
    tmp4Result = tmp4(ExternalPipViewVideoStream, obj2);
  } else if (null != selectedParticipantUserId) {
    const obj3 = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
    tmp4Result = tmp4(ExternalPipViewVideoUser, obj3);
  } else {
    let tmp7 = focusedParticipantType === ParticipantTypes.STREAM;
    const tmp6 = ExternalPipViewVideoUnavailable;
    if (!tmp7) {
      tmp7 = focusedParticipantType === ParticipantTypes.HIDDEN_STREAM;
    }
    const obj4 = { wasStream: tmp7 };
    tmp4Result = tmp4(tmp6, obj4);
  }
  return unpackModuleId(tmp5, obj);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/external_pip/ExternalPipViewVideo.android.tsx");

export default memoResult;
