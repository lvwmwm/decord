// Module ID: 11475
// Function ID: 11476
// Name: UserTile
// Dependencies: [32, 19, 17, 6038, 11476, 502, 4855, 2014, 1087, 5664, 5750, 21, 5003, 587, 5000, 558, 576, 504, 1202, 11477, 5266, 1128, 8771, 11465, 11464, 11478, 11479, 11480, 11481, 6813, 10937, 11482, 10920, 11453, 5329, 11483, 2]

// Module 11475 (UserTile)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import Text_Text from "Text/Text" /* 5266 */;
import CallConstants from "CallConstants" /* 5664 */;
import Constants2 from "Constants" /* 5750 */;
import VoiceChannelEffectsStore2 from "VoiceChannelEffectsStore" /* 11476 */;
import AssetRegistryDefault from "AssetRegistry" /* 11477 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11478 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11479 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11480 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11481 */;
import mediaEngineContextFromParticipantTypeDefault from "mediaEngineContextFromParticipantType" /* 11482 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 6038 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4855 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5003 */;
import ColorUtils_mod from "ColorUtils" /* 5000 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const VoiceChannelEffectsStore = VoiceChannelEffectsStore2;
let importDefault;

let ColorUtils;
let closure_15;
let closure_16;
let closure_17;
let obj2;
let obj3;
let obj4;
let size;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
let closure_8 = VoiceChannelEffectsStore2.clearVoiceChannelEffectForUser;
const VideoToggleState = Constants.VideoToggleState;
const ParticipantTypes = CallConstants.ParticipantTypes;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, imageBackground: { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" }, autoDisabledVideoWrapper: { width: "100%", flexDirection: "row", justifyContent: "center" }, autoDisabledVideo: obj3, autoDisabledVideoTextWrapper: obj4, statusWrapper: size, labelText: { marginLeft: 8, height: 20, alignItems: "center" } };
obj2 = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5), alignItems: "center", height: 24 };
ColorUtils = ColorUtils_mod;
obj4 = { borderRadius: nativeDefault.radii.sm, flexDirection: "row", justifyContent: "space-evenly", paddingHorizontal: 8, paddingVertical: 4, alignItems: "center" };
size = { position: "absolute", bottom: 8, right: 8, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5), borderRadius: nativeDefault.radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
ColorUtils = ColorUtils_mod;
let closure_18 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VideoContent(arg0) {
  let avatarSize;
  let first;
  let first1;
  let gestureEnabled;
  let hasVideo;
  let id;
  let playingSoundboard;
  let resizeMode;
  let ringing;
  let speaking;
  let streamId;
  let user;
  let tmp = hasVideo;
  let obj = hasVideo(id[16]);
  const cResult = obj.c(32);
  ({ streamId, user, resizeMode, ringing, avatarSize, speaking, playingSoundboard, gestureEnabled, hasVideo } = arg0);
  const tmp4 = closure_18();
  let closure_1 = tmp4;
  id = user.id;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === hasVideo) {
    let tmp7;
    let tmp8;
    let tmp10;
    let tmp13;
    let tmp12;
    let tmp16;
    let tmp18;
    let tmp17;
    if (cResult[2] === id) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(id[17]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let items1 = [MediaEngineStore];
      cResult[5] = items1;
      tmp10 = items1;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] !== id) {
      class R {
        constructor() {
          const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
          return items;
        }
      }
      const items2 = [id];
      cResult[6] = id;
      cResult[7] = R;
      cResult[8] = items2;
      tmp13 = items2;
      tmp12 = R;
    } else {
      class R {
        constructor() {
          const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
          return items;
        }
      }
      tmp13 = cResult[8];
    }
    const tmpResult3 = tmp(id[17]);
    first1 = first1(tmpResult3.useStateFromStoresArray(tmp10, tmp12, tmp13), 1)[0];
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
          return items;
        }
      }
      const items3 = [MediaEngineStore];
      cResult[9] = items3;
      tmp16 = items3;
    } else {
      class R {
        constructor() {
          const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
          return items;
        }
      }
    }
    if (cResult[10] !== id) {
      class R {
        constructor() {
          const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
          return items;
        }
      }
      const items4 = [id];
      cResult[10] = id;
      cResult[11] = tmp19;
      cResult[12] = items4;
      tmp18 = items4;
      tmp17 = tmp19;
    } else {
      class R {
        constructor() {
          const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
          return items;
        }
      }
      tmp18 = cResult[12];
    }
    const tmpResult4 = tmp(id[17]);
    const tmp21 = tmpResult4.useStateFromStores(tmp16, tmp17, tmp18) === VideoToggleState.AUTO_PROBING;
    let closure_4 = tmp21;
    if (cResult[13] === first1) {
      class R {
        constructor() {
          const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
          return items;
        }
      }
    }
    function renderVideoAutoDisabledStatus() {
      let intl;
      let items;
      let items1;
      let obj2;
      let tmp3;
      const tmp = first1;
      if (tmp) {
        const obj = { style: closure_1.autoDisabledVideoWrapper, children: authStore3(View, obj2) };
        obj2 = { style: items, children: items1 };
        items = [, ];
        ({ autoDisabledVideo: arr[0], autoDisabledVideoTextWrapper: arr[1] } = closure_1);
        const obj3 = { source: AssetRegistryDefault, size: native.Icon.Sizes.SMALL, disableColor: true };
        const Icon = native.Icon;
        items1 = [closure_15(Icon, obj3), ];
        const obj4 = { variant: "text-sm/normal", color: "text-default", style: closure_1.labelText, children: intl.string(intl2.t.m2Hyj0) };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        items1[1] = closure_15(Text, obj4);
        tmp3 = closure_15(View, obj);
      } else {
        tmp3 = null;
      }
      return tmp3;
    }
    cResult[13] = first1;
    cResult[14] = tmp21;
    cResult[15] = tmp4;
    cResult[16] = renderVideoAutoDisabledStatus;
  }
  const fn = function l() {
    const tmp = hasVideo && id === AuthenticationStore.getId();
    return tmp;
  };
  const items5 = [hasVideo, id];
  cResult[1] = hasVideo;
  cResult[2] = id;
  cResult[3] = fn;
  cResult[4] = items5;
  tmp8 = items5;
  tmp7 = fn;
}) : (function VideoContent(guildId) {
  let VideoSpinnerContext;
  let avatarSize;
  let closure_1;
  let closure_3;
  let gestureEnabled;
  let hasVideo;
  let playingSoundboard;
  let resizeMode;
  let ringing;
  let speaking;
  let streamId;
  let user;
  ({ user, hasVideo } = guildId);
  guildId = guildId.guildId;
  _slicedToArray = undefined;
  ({ streamId, resizeMode, ringing, avatarSize, speaking, playingSoundboard, gestureEnabled } = guildId);
  let tmp = closure_18();
  importDefault = tmp;
  const id = user.id;
  let tmp3 = id;
  let obj = hasVideo(id[17]);
  let items = [AuthenticationStore];
  let items1 = [hasVideo, id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = hasVideo && id === AuthenticationStore.getId();
    return tmp;
  }, items1);
  let obj2 = hasVideo(id[17]);
  const items2 = [MediaEngineStore];
  const items3 = [id];
  _slicedToArray = _slicedToArray(obj2.useStateFromStoresArray(items2, () => {
    const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
    return items;
  }, items3), 1)[0];
  let obj3 = hasVideo(id[17]);
  const items4 = [MediaEngineStore];
  const items5 = [id];
  const tmp5 = obj3.useStateFromStores(items4, () => {
    let NONE;
    if (null != id) {
      NONE = MediaEngineStore.getVideoToggleState(tmp, MediaEngineContextTypes.DEFAULT);
    } else {
      NONE = VideoToggleState.NONE;
    }
    return NONE;
  }, items5) === VideoToggleState.AUTO_PROBING;
  let closure_4 = tmp5;
  const tmp2 = hasVideo;
  if (!ringing) {
    if (hasVideo) {
      let tmp6Result;
      if (!tmp5) {
        let obj4 = { resizeMode, streamId, gestureEnabled, videoSpinnerContext: stateFromStores ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO, userId: user.id };
        const tmp8 = require("VideoRenderer");
        VideoSpinnerContext = tmp2(tmp3[24]).VideoSpinnerContext;
        tmp6Result = closure_15(tmp8, obj4);
      }
      return tmp6Result;
    }
  }
  const obj5 = {
    style: tmp.imageBackground,
    url: user.getAvatarURL(guildId, 128),
    user,
    guildId,
    speaking,
    playingSoundboard,
    size: avatarSize,
    renderVideoDetails: function renderVideoAutoDisabledStatus() {
      let intl;
      let items;
      let items1;
      let obj2;
      let tmp3;
      const tmp = closure_3;
      if (tmp) {
        const obj = { style: closure_1.autoDisabledVideoWrapper, children: authStore3(View, obj2) };
        obj2 = { style: items, children: items1 };
        items = [, ];
        ({ autoDisabledVideo: arr[0], autoDisabledVideoTextWrapper: arr[1] } = closure_1);
        const obj3 = { source: AssetRegistryDefault, size: native.Icon.Sizes.SMALL, disableColor: true };
        const Icon = native.Icon;
        items1 = [closure_15(Icon, obj3), ];
        const obj4 = { variant: "text-sm/normal", color: "text-default", style: closure_1.labelText, children: intl.string(intl2.t.m2Hyj0) };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        items1[1] = closure_15(Text, obj4);
        tmp3 = closure_15(View, obj);
      } else {
        tmp3 = null;
      }
      return tmp3;
    }
  };
  const tmp10 = require("VideoBackground");
  tmp6Result = closure_15(tmp10, obj5);
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceStatus(userId) {
  let Icon;
  let Icon2;
  let deafened;
  let first;
  let items2;
  let items4;
  let muted;
  let obj5;
  let obj7;
  let tmp12;
  let tmp16;
  let tmp7;
  let tmp8;
  const obj = userId(576);
  const cResult = obj.c(16);
  userId = userId.userId;
  const style = userId.style;
  ({ muted, deafened } = userId);
  const tmp4 = closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [MediaEngineStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function l() {
      const items = [MediaEngineStore.isLocalMute(userId), MediaEngineStore.isLocalVideoDisabled(userId), MediaEngineStore.isLocalVideoAutoDisabled(userId)];
      return items;
    };
    const items1 = [userId];
    cResult[1] = userId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = userId(504);
  const tmp9 = _slicedToArray(tmpResult.useStateFromStoresArray(first, tmp7, tmp8), 3);
  let tmp10 = tmp9[1];
  const tmp11 = tmp9[2];
  if (tmp9[0]) {
    tmp12 = AssetRegistryDefault2;
  } else if (deafened) {
    tmp12 = AssetRegistryDefault3;
  } else if (muted) {
    tmp12 = AssetRegistryDefault4;
  }
  if (tmp10) {
    tmp10 = !tmp11;
  }
  if (tmp10) {
    if (cResult[4] === tmp10) {
      if (cResult[5] === style) {
        let tmp17;
        if (cResult[6] === tmp4) {
          tmp17 = cResult[7];
        }
        if (cResult[8] === tmp12) {
          if (cResult[9] === tmp10) {
            if (cResult[10] === style) {
              let tmp22;
              if (cResult[11] === tmp4) {
                tmp22 = cResult[12];
              }
              if (cResult[13] === tmp17) {
                let tmp28;
                if (cResult[14] === tmp22) {
                  tmp28 = cResult[15];
                }
                tmp16 = tmp28;
              }
              const obj2 = { children: items2 };
              items2 = [tmp17, tmp22];
              const tmp31 = closure_16(closure_17, obj2);
              cResult[13] = tmp17;
              cResult[14] = tmp22;
              cResult[15] = tmp31;
              tmp28 = tmp31;
            }
          }
        }
        let tmp25Result = null;
        if (null != tmp12) {
          const items3 = [tmp4.statusWrapper, style, ];
          let obj3 = null;
          const tmp26 = View;
          if (tmp10) {
            obj3 = { right: 38 };
          }
          items3[2] = obj3;
          const obj4 = { style: items3, children: closure_15(Icon2, obj5) };
          obj5 = { source: tmp12, size: userId(1202).Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, disableColor: tmp12 === AssetRegistryDefault2 };
          Icon2 = tmp(1202).Icon;
          tmp25Result = tmp25(tmp26, obj4);
        }
        cResult[8] = tmp12;
        cResult[9] = tmp10;
        cResult[10] = style;
        cResult[11] = tmp4;
        cResult[12] = tmp25Result;
        tmp22 = tmp25Result;
      }
    }
    let tmp18 = null;
    if (tmp10) {
      const obj6 = { style: items4, children: closure_15(Icon, obj7) };
      items4 = [tmp4.statusWrapper, style];
      obj7 = { source: AssetRegistryDefault5, size: userId(1202).Icon.Sizes.SMALL, disableColor: true };
      Icon = tmp(1202).Icon;
      tmp18 = closure_15(View, obj6);
    }
    cResult[4] = tmp10;
    cResult[5] = style;
    cResult[6] = tmp4;
    cResult[7] = tmp18;
    tmp17 = tmp18;
  } else {
    tmp16 = null;
  }
  return tmp16;
}) : (function VoiceStatus(userId) {
  let Icon;
  let Icon2;
  let deafened;
  let items2;
  let muted;
  let obj3;
  let obj6;
  let tmp12Result;
  let tmp7;
  userId = userId.userId;
  const style = userId.style;
  ({ muted, deafened } = userId);
  const tmp = closure_18();
  let items = [MediaEngineStore];
  const items1 = [userId];
  const obj = userId(504);
  const tmp4 = _slicedToArray(obj.useStateFromStoresArray(items, () => {
    const items = [MediaEngineStore.isLocalMute(userId), MediaEngineStore.isLocalVideoDisabled(userId), MediaEngineStore.isLocalVideoAutoDisabled(userId)];
    return items;
  }, items1), 3);
  let tmp5 = tmp4[1];
  const tmp6 = tmp4[2];
  if (tmp4[0]) {
    tmp7 = AssetRegistryDefault2;
  } else if (deafened) {
    tmp7 = AssetRegistryDefault3;
  } else if (muted) {
    tmp7 = AssetRegistryDefault4;
  }
  if (tmp5) {
    tmp5 = !tmp6;
  }
  if (tmp5) {
    let tmp15 = null;
    const tmp12 = closure_16;
    const tmp13 = closure_17;
    if (tmp5) {
      const obj2 = { style: items2, children: closure_15(Icon, obj3) };
      items2 = [tmp.statusWrapper, style];
      obj3 = { source: AssetRegistryDefault5, size: userId(1202).Icon.Sizes.SMALL, disableColor: true };
      Icon = tmp2(1202).Icon;
      tmp15 = closure_15(View, obj2);
    }
    const items3 = [tmp15, ];
    let tmp20Result = null;
    if (null != tmp7) {
      const items4 = [tmp.statusWrapper, style, ];
      let obj4 = null;
      const tmp21 = View;
      if (tmp5) {
        obj4 = { right: 38 };
      }
      items4[2] = obj4;
      const obj5 = { style: items4, children: closure_15(Icon2, obj6) };
      obj6 = { source: tmp7, size: userId(1202).Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, disableColor: tmp7 === AssetRegistryDefault2 };
      Icon2 = tmp2(1202).Icon;
      tmp20Result = tmp20(tmp21, obj5);
    }
    const obj7 = { children: items3 };
    items3[1] = tmp20Result;
    tmp12Result = tmp12(tmp13, obj7);
  } else {
    tmp12Result = null;
  }
  return tmp12Result;
}));
const __initData = { code: "function UserTileTsx1(){const{onLongPress,participant}=this.__closure;var _onLongPress;return(_onLongPress=onLongPress)===null||_onLongPress===void 0?void 0:_onLongPress(participant);}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserTile(participant) {
  let avatarSize;
  let gestureEnabled;
  let hasNotch;
  let id;
  let onDoubleTap;
  let resizeMode;
  let statusStyle;
  let style;
  let tmp41;
  let voiceState;
  const tmp = participant;
  const obj = participant(onDoubleTap[16]);
  const cResult = obj.c(69);
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  onDoubleTap = participant.onDoubleTap;
  const onLongPress = participant.onLongPress;
  ({ avatarSize, resizeMode, statusStyle, gestureEnabled, hasNotch, style } = participant);
  if (undefined === resizeMode) {
    resizeMode = tmp(tmp2[23]).ResizeMode.COVER;
  }
  closure_18();
  if (cResult[0] === onSingleTap) {
    let tmp5;
    if (cResult[1] === participant) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === onDoubleTap) {
      let tmp6;
      if (cResult[4] === participant) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === onLongPress) {
        let tmp7;
        let tmp9;
        let tmp13;
        let tmp15;
        if (cResult[7] === participant) {
          tmp7 = cResult[8];
        }
        const streamId = participant.streamId;
        class UserTileTsx1 {
          constructor() {
            tmpResult = undefined;
            if (onLongPress != null) {
              tmp3 = participant;
              tmpResult = tmp(participant);
            }
            return tmpResult;
          }
        }
        const user = participant.user;
        ({ voiceState, id } = participant);
        if (cResult[9] !== id) {
          const obj2 = { userId: id };
          class UserTileTsx1 {
            constructor() {
              tmpResult = undefined;
              if (onLongPress != null) {
                tmp3 = participant;
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          cResult[9] = id;
          cResult[10] = obj2;
          tmp9 = obj2;
        } else {
          tmp9 = cResult[10];
        }
        onSingleTap(onDoubleTap[29])(tmp9);
        const _Symbol = Symbol;
        const tmp10 = onSingleTap;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [];
          class UserTileTsx1 {
            constructor() {
              tmpResult = undefined;
              if (onLongPress != null) {
                tmp3 = participant;
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          cResult[11] = items;
          tmp13 = items;
        } else {
          tmp13 = cResult[11];
        }
        if (cResult[12] !== participant.id) {
          class J {
            constructor() {
              return SoundboardStore.isUserPlayingSounds(participant.id);
            }
          }
          class UserTileTsx1 {
            constructor() {
              tmpResult = undefined;
              if (onLongPress != null) {
                tmp3 = participant;
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          cResult[13] = J;
          tmp15 = J;
        } else {
          class J {
            constructor() {
              return SoundboardStore.isUserPlayingSounds(participant.id);
            }
          }
        }
        let tmpResult = tmp(tmp2[17]);
        const stateFromStores = tmpResult.useStateFromStores(tmp13, tmp15);
        const getChannel = ChannelStore.getChannel;
        if (voiceState != null) {
          class J {
            constructor() {
              return SoundboardStore.isUserPlayingSounds(participant.id);
            }
          }
        }
        const channel = getChannel(tmp19);
        if (channel != null) {
          class J {
            constructor() {
              return SoundboardStore.isUserPlayingSounds(participant.id);
            }
          }
        }
        if (undefined == null) {
          class J {
            constructor() {
              return SoundboardStore.isUserPlayingSounds(participant.id);
            }
          }
        }
        if (cResult[14] !== participant) {
          class J {
            constructor() {
              return SoundboardStore.isUserPlayingSounds(participant.id);
            }
          }
          class UserTileTsx1 {
            constructor() {
              tmpResult = undefined;
              if (onLongPress != null) {
                tmp3 = participant;
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          cResult[15] = tmp23;
        } else {
          class J {
            constructor() {
              return SoundboardStore.isUserPlayingSounds(participant.id);
            }
          }
        }
        if (cResult[16] !== voiceState) {
          class J {
            constructor() {
              return SoundboardStore.isUserPlayingSounds(participant.id);
            }
          }
          if (voiceState != null) {
            class J {
              constructor() {
                return SoundboardStore.isUserPlayingSounds(participant.id);
              }
            }
          }
          class UserTileTsx1 {
            constructor() {
              tmpResult = undefined;
              if (onLongPress != null) {
                tmp3 = participant;
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          cResult[16] = voiceState;
          cResult[17] = tmp25;
        } else {
          class J {
            constructor() {
              return SoundboardStore.isUserPlayingSounds(participant.id);
            }
          }
        }
        if (cResult[18] !== voiceState) {
          class J {
            constructor() {
              return SoundboardStore.isUserPlayingSounds(participant.id);
            }
          }
          if (voiceState != null) {
            class J {
              constructor() {
                return SoundboardStore.isUserPlayingSounds(participant.id);
              }
            }
          }
          class UserTileTsx1 {
            constructor() {
              tmpResult = undefined;
              if (onLongPress != null) {
                tmp3 = participant;
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          cResult[18] = voiceState;
          cResult[19] = tmp27;
        } else {
          class J {
            constructor() {
              return SoundboardStore.isUserPlayingSounds(participant.id);
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          class J {
            constructor() {
              return SoundboardStore.isUserPlayingSounds(participant.id);
            }
          }
          const items1 = [];
          class UserTileTsx1 {
            constructor() {
              tmpResult = undefined;
              if (onLongPress != null) {
                tmp3 = participant;
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          cResult[20] = items1;
        } else {
          class J {
            constructor() {
              return SoundboardStore.isUserPlayingSounds(participant.id);
            }
          }
        }
        if (cResult[21] === participant.type) {
          let tmp35;
          let tmp36;
          class J {
            constructor() {
              return SoundboardStore.isUserPlayingSounds(participant.id);
            }
          }
          tmp(onDoubleTap[17]);
          class UserTileTsx1 {
            constructor() {
              tmpResult = undefined;
              if (onLongPress != null) {
                tmp3 = participant;
                tmpResult = tmp(participant);
              }
              return tmpResult;
            }
          }
          const tmpResult5 = tmp(onDoubleTap[32]);
          const voiceChatNavigationContext = tmpResult5.useVoiceChatNavigationContext();
          if (voiceChatNavigationContext != null) {
            class J {
              constructor() {
                return SoundboardStore.isUserPlayingSounds(participant.id);
              }
            }
          }
          if (participant.user != null) {
            class J {
              constructor() {
                return SoundboardStore.isUserPlayingSounds(participant.id);
              }
            }
          }
          let c5 = tmp34;
          const _Symbol3 = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            class J {
              constructor() {
                return SoundboardStore.isUserPlayingSounds(participant.id);
              }
            }
            const items2 = [];
            class UserTileTsx1 {
              constructor() {
                tmpResult = undefined;
                if (onLongPress != null) {
                  tmp3 = participant;
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            cResult[25] = items2;
            tmp35 = items2;
          } else {
            class J {
              constructor() {
                return SoundboardStore.isUserPlayingSounds(participant.id);
              }
            }
          }
          if (cResult[26] !== undefined) {
            class J {
              constructor() {
                return SoundboardStore.isUserPlayingSounds(participant.id);
              }
            }
            class UserTileTsx1 {
              constructor() {
                tmpResult = undefined;
                if (onLongPress != null) {
                  tmp3 = participant;
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            cResult[27] = tmp37;
            tmp36 = tmp37;
          } else {
            class J {
              constructor() {
                return SoundboardStore.isUserPlayingSounds(participant.id);
              }
            }
          }
          const tmpResult6 = tmp(onDoubleTap[17]);
          const stateFromStores1 = tmpResult6.useStateFromStores(tmp35, tmp36);
          const type = participant.type;
          const USER = ParticipantTypes.USER;
          if (cResult[28] === tmp6) {
            class J {
              constructor() {
                return SoundboardStore.isUserPlayingSounds(participant.id);
              }
            }
            const tmp42 = tmp10(onDoubleTap[33])(tmp41);
            class UserTileTsx1 {
              constructor() {
                tmpResult = undefined;
                if (onLongPress != null) {
                  tmp3 = participant;
                  tmpResult = tmp(participant);
                }
                return tmpResult;
              }
            }
            const Gesture = tmp(tmp2[34]).Gesture;
            const LongPressResult = Gesture.LongPress();
            const runOnJSResult = LongPressResult.runOnJS(true);
            const onStartResult = runOnJSResult.onStart(tmp7);
            const tmp46 = onStartResult.minDuration(800);
            if (null != tmp33) {
              class J {
                constructor() {
                  return SoundboardStore.isUserPlayingSounds(participant.id);
                }
              }
            }
            const GestureDetector = tmp(tmp2[34]).GestureDetector;
            const Gesture2 = tmp(tmp2[34]).Gesture;
            cResult[31] = tmp7;
            cResult[32] = tmp33;
            cResult[33] = tmp42;
            cResult[34] = GestureDetector;
            cResult[35] = Gesture2.Simultaneous(tmp46, tmp42);
            const SimultaneousResult = Gesture2.Simultaneous(tmp46, tmp42);
          }
          const obj3 = { onDoubleTapStart: tmp6, onSingleTapStart: tmp5 };
          cResult[28] = tmp6;
          cResult[29] = tmp5;
          cResult[30] = obj3;
          tmp41 = obj3;
        }
        function ie() {
          const isLocalVideoDisabledResult = null != user.id && MediaEngineStore.isLocalVideoDisabled(tmp.id, mediaEngineContextFromParticipantTypeDefault(participant.type));
          return isLocalVideoDisabledResult;
        }
        const items3 = [user.id, participant.type];
        cResult[21] = participant.type;
        cResult[22] = user.id;
        cResult[23] = ie;
        cResult[24] = items3;
      }
      class UserTileTsx1 {
        constructor() {
          tmpResult = undefined;
          if (onLongPress != null) {
            tmp3 = participant;
            tmpResult = tmp(participant);
          }
          return tmpResult;
        }
      }
      const obj4 = { onLongPress, participant };
      UserTileTsx1.__closure = obj4;
      UserTileTsx1.__workletHash = 2859882955573;
      UserTileTsx1.__initData = __initData;
      cResult[6] = onLongPress;
      cResult[7] = participant;
      cResult[8] = UserTileTsx1;
      tmp7 = UserTileTsx1;
    }
    class O {
      constructor() {
        let tmpResult;
        if (onDoubleTap != null) {
          tmpResult = tmp(participant);
        }
        return tmpResult;
      }
    }
    cResult[3] = onDoubleTap;
    cResult[4] = participant;
    cResult[5] = O;
    tmp6 = O;
  }
  const fn = function o() {
    let tmpResult;
    if (onSingleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  };
  cResult[0] = onSingleTap;
  cResult[1] = participant;
  cResult[2] = fn;
  tmp5 = fn;
}) : (function UserTile(participant) {
  let Gesture2;
  let gestureEnabled;
  let hasNotch;
  let items7;
  let items8;
  let obj4;
  let ringing;
  let statusStyle;
  let streamId;
  let style;
  let tmp25;
  let tmp26;
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  const onLongPress = participant.onLongPress;
  let COVER = participant.resizeMode;
  const avatarSize = participant.avatarSize;
  if (COVER === undefined) {
    const tmp = participant;
    COVER = participant(onDoubleTap[23]).ResizeMode.COVER;
  }
  let user;
  let id;
  ({ statusStyle, gestureEnabled, hasNotch, style } = participant);
  const items = [onSingleTap, participant];
  const items1 = [onDoubleTap, participant];
  const tmp3 = closure_18();
  const callback = user.useCallback(() => {
    let tmpResult;
    if (onSingleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items);
  const items2 = [participant, onLongPress];
  const callback1 = user.useCallback(() => {
    let tmpResult;
    if (onDoubleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items1);
  user = participant.user;
  const voiceState = participant.voiceState;
  const callback2 = user.useCallback(() => {
    let tmpResult;
    if (onLongPress != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items2);
  ({ streamId, ringing } = participant);
  const obj = { userId: participant.id };
  const items3 = [SoundboardStore];
  let channelId;
  const tmp9 = onSingleTap(onDoubleTap[29])(obj);
  const obj2 = participant(onDoubleTap[17]);
  const stateFromStores = obj2.useStateFromStores(items3, () => SoundboardStore.isUserPlayingSounds(participant.id));
  const getChannel = ChannelStore.getChannel;
  if (voiceState != null) {
    channelId = voiceState.channelId;
  }
  const channel = getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let tmp16 = tmp7(tmp8[30])(participant);
  let flag;
  if (voiceState != null) {
    flag = voiceState.isVoiceMuted();
  }
  if (flag == null) {
    flag = false;
  }
  let flag2;
  if (voiceState != null) {
    flag2 = voiceState.isVoiceDeafened();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  const items4 = [MediaEngineStore];
  const items5 = [user.id, participant.type];
  const tmp10Result = participant(onDoubleTap[17]);
  const stateFromStores1 = tmp10Result.useStateFromStores(items4, () => {
    const isLocalVideoDisabledResult = null != user.id && MediaEngineStore.isLocalVideoDisabled(tmp.id, mediaEngineContextFromParticipantTypeDefault(participant.type));
    return isLocalVideoDisabledResult;
  }, items5);
  const tmp10Result3 = participant(onDoubleTap[32]);
  const voiceChatNavigationContext = tmp10Result3.useVoiceChatNavigationContext();
  let swipeDismissRef;
  if (voiceChatNavigationContext != null) {
    swipeDismissRef = voiceChatNavigationContext.swipeDismissRef;
  }
  const user2 = participant.user;
  id = undefined;
  if (user2 != null) {
    id = user2.id;
  }
  const items6 = [VoiceChannelEffectsStore];
  const tmp10Result4 = participant(onDoubleTap[17]);
  const stateFromStores2 = tmp10Result4.useStateFromStores(items6, () => {
    let effectForUserId = null;
    if (null != id) {
      effectForUserId = VoiceChannelEffectsStore.getEffectForUserId(tmp);
    }
    return effectForUserId;
  });
  if (participant.type !== ParticipantTypes.USER) {
    const type = participant.type;
  }
  const tmp22 = onSingleTap(onDoubleTap[33])({ onDoubleTapStart: callback1, onSingleTapStart: callback });
  const Gesture = tmp10(tmp8[34]).Gesture;
  const LongPressResult = Gesture.LongPress();
  const runOnJSResult = LongPressResult.runOnJS(true);
  const onStartResult = runOnJSResult.onStart(callback2);
  const minDurationResult = onStartResult.minDuration(800);
  let result = minDurationResult;
  if (null != swipeDismissRef) {
    result = minDurationResult.requireExternalGestureToFail(swipeDismissRef);
  }
  const obj3 = { gesture: Gesture2.Simultaneous(result, tmp22), children: tmp25(tmp26, obj4) };
  const GestureDetector = tmp10(tmp8[34]).GestureDetector;
  Gesture2 = tmp10(tmp8[34]).Gesture;
  obj4 = { style: items7, children: items8 };
  items7 = [tmp3.container, style];
  const obj5 = { guildId: guild_id, hasVideo: tmp16, streamId, user, resizeMode: COVER, ringing, speaking: tmp9, playingSoundboard: stateFromStores, avatarSize, gestureEnabled };
  tmp25 = closure_16;
  tmp26 = id;
  const tmp27 = closure_19;
  if (tmp16) {
    tmp16 = !stateFromStores1;
  }
  items8 = [closure_15(tmp27, obj5), , ];
  let tmp24Result = null;
  if (null != id) {
    tmp24Result = null;
    if (null != stateFromStores2) {
      const obj6 = {
        voiceChannelEffect: stateFromStores2,
        onComplete() {
              return closure_8(id);
            },
        userId: id,
        hasNotch
      };
      tmp24Result = tmp24(tmp7(tmp8[35]), obj6);
    }
  }
  items8[1] = tmp24Result;
  const obj7 = { muted: flag, deafened: flag2, userId: user.id, style: statusStyle };
  items8[2] = closure_15(closure_20, obj7);
  return closure_15(GestureDetector, obj3);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/components/UserTile.tsx");

export default tmp5;
