// Module ID: 19103
// Function ID: 19104
// Name: ExternalPipViewVideo
// Dependencies: [32, 19, 17, 4863, 1383, 21, 5014, 575, 5735, 5624, 1113, 504, 6853, 19104, 5587, 1187, 5888, 5874, 5596, 19105, 11772, 19106, 2]

// Module 19103 (ExternalPipViewVideo)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5735 */;
import ExternalPipDefault from "ExternalPip" /* 5874 */;
import VideoActionCreators from "VideoActionCreators" /* 19105 */;
import useExternalPipParticipantDefault from "useExternalPipParticipant" /* 19106 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

let StyleSheet;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let unpackModuleId;
function ExternalPipViewVideoUnavailable() {
  let intl;
  let items;
  const tmp = closure_14();
  const obj = { style: tmp.unavailable, children: items };
  items = [unpackModuleId(CircleInformationIcon.CircleInformationIcon, {}), ];
  const obj2 = { variant: "text-md/semibold", style: tmp.unavailableText, lineClamp: 1, children: intl.string(intl2.t.Nzo5nz) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[1] = unpackModuleId(Text, obj2);
  return authStore2(metroImportDefault, obj);
}
function ExternalPipViewVideoUser(userId) {
  let avatarURL;
  let backgroundColor;
  let gradientStops;
  let items3;
  let user;
  userId = userId.userId;
  const channelId = userId.channelId;
  backgroundColor = undefined;
  const speaking = userId.speaking;
  const tmp = closure_14();
  dependencyMap = tmp;
  let obj = userId(504);
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  const items1 = [ChannelStore];
  const obj3 = userId(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj4 = userId(6853);
  const avatarDecoration = obj4.useAvatarDecoration(stateFromStores, stateFromStores1);
  const obj2 = { userId, guildId: stateFromStores1, avatarURI: avatarURL, location: "ExternalPipViewVideo-native" };
  avatarURL = undefined;
  const tmp7 = channelId(19104);
  const tmp6 = channelId;
  if (stateFromStores != null) {
    avatarURL = stateFromStores.getAvatarURL(stateFromStores1, 80, false);
  }
  ({ gradientStops, backgroundColor } = tmp7(obj2));
  const items2 = [tmp.user, backgroundColor];
  tmp7(obj2);
  let tmp12 = null;
  const obj5 = {
    style: react.useMemo(() => {
      const items = [user.user, ];
      const obj = { backgroundColor };
      items[1] = obj;
      return items;
    }, items2),
    children: items3
  };
  const tmp10 = closure_12;
  const tmp11 = closure_7;
  if (null != gradientStops) {
    const obj6 = { colors: gradientStops, start, end, style: StyleSheet.absoluteFill, pointerEvents: "none" };
    tmp12 = closure_11(tmp6(5587), obj6);
  }
  items3 = [tmp12, ];
  let tmp17 = null;
  if (null != stateFromStores) {
    const obj7 = { user: stateFromStores, avatarDecoration, guildId: stateFromStores1, size: userId(1187).AvatarSizes.XXLARGE, speaking };
    const Avatar = tmp2(1187).Avatar;
    tmp17 = closure_11(Avatar, obj7);
  }
  items3[1] = tmp17;
  return tmp10(tmp11, obj5);
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
  let obj = streamId(5888);
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
  const items2 = [first];
  const effect1 = react.useEffect(() => {
    if (null != first) {
      const obj = ExternalPipDefault;
      obj.setPipContentReady();
    }
  }, items2);
  const tmp9 = closure_14();
  dependencyMap = tmp9;
  const items3 = [tmp9, first];
  const memo = react.useMemo(() => {
    const items = [video.video, ];
    let num = 1;
    if (null == first) {
      num = 0;
    }
    items[1] = { opacity: num };
    return items;
  }, items3);
  const obj2 = streamId(5596);
  const token = obj2.useToken(first(575).colors.TEXT_FEEDBACK_INFO);
  const value = closure_8.get();
  _slicedToArray = value;
  const items4 = [streamId, value];
  const callback1 = react.useCallback((nativeEvent) => {
    let height;
    let width;
    if (null != streamId) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      size = { width: width * c3, height: height * c3 };
      const obj = VideoActionCreators;
      obj.updateVideoSize(tmp, size, 1);
    }
  }, items4);
  const children = [closure_11(first(11772), { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: memo, streamId, onReady: callback, onLayout: callback1 }), ];
  let tmp16Result = null;
  const tmp14 = closure_12;
  const tmp15 = closure_13;
  if (null == first) {
    tmp16Result = null;
    if (first1) {
      const obj3 = { style: tmp9.videoUnavailableWrap, children: closure_11(closure_5, obj4) };
      obj4 = { style: tmp9.videoUnavailableSpinner, size: "large", color: token };
      tmp16Result = tmp16(closure_7, obj3);
    }
  }
  children[1] = tmp16Result;
  return tmp14(tmp15, { children });
}
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, StyleSheet } = react_native);
({ View: metroImportDefault, PixelRatio: metroImportAll } = react_native);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, video: obj3, videoUnavailableWrap: obj4, videoUnavailableSpinner: obj5, unavailable: obj6, unavailableText: obj7, user: obj8 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { margin: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm, justifyContent: "center", alignContent: "center", flexDirection: "row", alignItems: "center", flexWrap: "wrap", flex: 1 };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { marginTop: nativeDefault.space.PX_16 };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8, margin: nativeDefault.space.PX_8, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
obj7 = { marginLeft: nativeDefault.space.PX_4, textAlign: "center" };
obj8 = { alignItems: "center", justifyContent: "center" };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
let closure_14 = createStyles(obj);
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const memoResult = react.memo(function ExternalPipViewVideo(onLayout) {
  let channelId;
  let closure_1;
  let selectedParticipantSpeaking;
  let selectedParticipantStreamId;
  let selectedParticipantUserId;
  let tmp5Result;
  onLayout = onLayout.onLayout;
  let tmp = closure_14();
  const tmp2 = useExternalPipParticipantDefault();
  ({ selectedParticipantStreamId, selectedParticipantUserId } = tmp2);
  const items = [selectedParticipantStreamId, selectedParticipantUserId, ];
  ({ participantType: arr[2], channelId, selectedParticipantSpeaking } = tmp2);
  const effect = react.useEffect(() => {
    const obj = closure_1(dependencyMap[17]);
    obj.refreshPipUi();
  }, items);
  importDefault = tmp4;
  const items1 = [null != selectedParticipantStreamId, onLayout];
  const tmp5 = closure_11;
  let obj = {
    style: tmp.container,
    onLayout: react.useCallback((arg0) => {
      const tmp = closure_1;
      if (!tmp) {
        const obj = ExternalPipDefault;
        obj.setPipContentReady();
      }
      if (onLayout != null) {
        tmp5(arg0);
      }
    }, items1),
    children: tmp5Result
  };
  const tmp6 = closure_7;
  if (null != selectedParticipantStreamId) {
    const obj2 = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
    tmp5Result = tmp5(ExternalPipViewVideoStream, obj2);
  } else if (null != selectedParticipantUserId) {
    const obj3 = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
    tmp5Result = tmp5(ExternalPipViewVideoUser, obj3);
  } else {
    tmp5Result = tmp5(ExternalPipViewVideoUnavailable, {});
  }
  return tmp5(tmp6, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/external_pip/ExternalPipViewVideo.android.tsx");

export default memoResult;
