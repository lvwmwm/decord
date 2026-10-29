// Module ID: 15116
// Function ID: 15117
// Name: VoiceMemberUser
// Dependencies: [109, 19, 17, 6046, 1204, 502, 6556, 4857, 4917, 2012, 5750, 1084, 21, 5005, 587, 558, 576, 9203, 6839, 504, 5012, 15117, 15118, 1199, 15119, 15120, 15121, 15122, 11541, 5271, 1125, 8988, 7869, 11806, 5187, 7925, 5247, 7473, 6968, 6029, 7483, 5059, 2]

// Module 15116 (VoiceMemberUser)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import intl4 from "intl" /* 1125 */;
import native from "native" /* 1199 */;
import shared from "shared" /* 5012 */;
import UserUtilsDefault from "UserUtils" /* 5059 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5187 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import Text_Text from "Text/Text" /* 5271 */;
import useIsSpeakingDefault from "useIsSpeaking" /* 6839 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 7473 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7869 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7925 */;
import AssetRegistryDefault from "AssetRegistry" /* 11541 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15119 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 15120 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 15121 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 15122 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SoundboardStore from "SoundboardStore" /* 6046 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 6556 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildMemberStore from "GuildMemberStore" /* 4917 */;
import MediaEngineStore_mod from "MediaEngineStore" /* 2012 */;
import PresenceStore from "PresenceStore" /* 5750 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_11, dependencyMap, importDefault;

let Platform;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj6;
let obj7;
let obj8;
let obj9;
let user = ["user", "name", "channel", "voiceState", "withStream", "isSpectating", "isActionSheet", "onPress"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
({ View: hasOwnProperty, Platform } = react_native);
let MediaEngineStore = MediaEngineStore_mod;
const Fonts = Constants.Fonts;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: { flexDirection: "row" }, voiceStatusIcon: obj2, voiceStatusIconMargin: { marginLeft: 8 }, streamPreview: { marginHorizontal: 16, marginBottom: 16, alignItems: "center", flex: 1 }, ringingButton: obj3, ringingButtonLabel: obj4, autoDisabledVideo: { flexDirection: "row", alignItems: "center" }, autoDisabledVideoLabel: { marginLeft: 4 } };
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj4 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_17 = createStyles(obj);
createStyles = createStyles_mod;
let obj5 = { labelCallScreen: obj6, voiceStatusIcon: obj7, ringingButton: obj8, ringingButtonLabel: obj9 };
obj6 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
const createStyles2 = createStyles.createStyles;
obj7 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.xs, height: 32, alignItems: "center", justifyContent: "center" };
obj9 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 14, lineHeight: 18, marginHorizontal: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_18 = createStyles2(obj5);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceMemberUserRow(user) {
  let channel;
  let closure_1;
  let closure_12;
  let closure_2;
  let closure_4;
  let fn2;
  let isActionSheet;
  let isSpectating;
  let localDeaf;
  let localMute;
  let localVideo;
  let localVideoDisabled;
  let name;
  let onPress;
  let stateFromStores1;
  let tmp10;
  let tmp11;
  let tmp20;
  let tmp23;
  let tmp25;
  let tmp27;
  let tmp29;
  let tmp30;
  let tmp32;
  let tmp33;
  let tmp35;
  let tmp5;
  let voiceState;
  let withStream;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(87);
  if (cResult[0] !== user) {
    user = user.user;
    ({ name, channel } = user);
    _require = channel;
    ({ voiceState, withStream, isSpectating } = user);
    importDefault = isSpectating;
    ({ isActionSheet, onPress } = user);
    dependencyMap = onPress;
    const tmp15 = _objectWithoutProperties(user, user);
    cResult[0] = user;
    cResult[1] = channel;
    cResult[2] = isActionSheet;
    cResult[3] = isSpectating;
    cResult[4] = name;
    cResult[5] = onPress;
    cResult[6] = tmp15;
    cResult[7] = voiceState;
    cResult[8] = withStream;
    cResult[9] = user;
    tmp11 = withStream;
    tmp10 = voiceState;
    const tmp6 = isSpectating;
    tmp5 = isActionSheet;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    importDefault = cResult[3];
    dependencyMap = cResult[5];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
    user = cResult[9];
  }
  const withLocalSelfMuteDeaf = tmp(9203).withLocalSelfMuteDeaf;
  tmp(9203);
  const tmpResult6 = tmp(9203);
  const result = withLocalSelfMuteDeaf(tmp10, tmpResult6.useLocalSelfMuteDeaf());
  const tmp18 = closure_17();
  _objectWithoutProperties = tmp18;
  const tmp19 = closure_18();
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const id = localVideoDisabled.getId();
    cResult[10] = id;
    tmp20 = id;
  } else {
    tmp20 = cResult[10];
  }
  let closure_5 = tmp20;
  if (cResult[11] !== tmp12.id) {
    let obj2 = { userId: tmp12.id };
    cResult[11] = tmp12.id;
    cResult[12] = obj2;
    tmp23 = obj2;
  } else {
    tmp23 = cResult[12];
  }
  useIsSpeakingDefault(tmp23);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [stateFromStores1];
    cResult[13] = items;
    tmp25 = items;
  } else {
    tmp25 = cResult[13];
  }
  if (cResult[14] !== tmp12.id) {
    class U {
      constructor() {
        return SoundboardStore.isUserPlayingSounds(user.id);
      }
    }
    cResult[14] = tmp12.id;
    cResult[15] = U;
    tmp27 = U;
  } else {
    class U {
      constructor() {
        return SoundboardStore.isUserPlayingSounds(user.id);
      }
    }
  }
  const tmpResult7 = tmp(504);
  const stateFromStores = tmpResult7.useStateFromStores(tmp25, tmp27);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        return SoundboardStore.isUserPlayingSounds(user.id);
      }
    }
    const items1 = [localMute];
    const fn = function k() {
      return localMute.theme;
    };
    cResult[16] = items1;
    cResult[17] = fn;
    tmp30 = fn;
    tmp29 = items1;
  } else {
    class U {
      constructor() {
        return SoundboardStore.isUserPlayingSounds(user.id);
      }
    }
    tmp30 = cResult[17];
  }
  const tmpResult8 = tmp(504);
  stateFromStores1 = tmpResult8.useStateFromStores(tmp29, tmp30);
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        return SoundboardStore.isUserPlayingSounds(user.id);
      }
    }
    const items2 = [MediaEngineStore];
    cResult[18] = items2;
    tmp32 = items2;
  } else {
    class U {
      constructor() {
        return SoundboardStore.isUserPlayingSounds(user.id);
      }
    }
  }
  if (cResult[19] !== tmp12.id) {
    class G {
      constructor() {
        let isSelfDeafResult;
        let isVideoEnabledResult = closure_5 === user.id;
        const isSelfMuteResult = isVideoEnabledResult && MediaEngineStore.isSelfMute();
        const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: isSelfDeafResult, localVideo: isVideoEnabledResult, localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), localVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id) };
        isSelfDeafResult = isVideoEnabledResult && MediaEngineStore.isSelfDeaf();
        if (isVideoEnabledResult) {
          isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
        }
        return obj;
      }
    }
    cResult[19] = tmp12.id;
    cResult[20] = G;
    tmp33 = G;
  } else {
    class G {
      constructor() {
        let isSelfDeafResult;
        let isVideoEnabledResult = closure_5 === user.id;
        const isSelfMuteResult = isVideoEnabledResult && MediaEngineStore.isSelfMute();
        const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: isSelfDeafResult, localVideo: isVideoEnabledResult, localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), localVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id) };
        isSelfDeafResult = isVideoEnabledResult && MediaEngineStore.isSelfDeaf();
        if (isVideoEnabledResult) {
          isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
        }
        return obj;
      }
    }
  }
  const tmpResult9 = tmp(504);
  const stateFromStoresObject = tmpResult9.useStateFromStoresObject(tmp32, tmp33);
  localMute = stateFromStoresObject.localMute;
  ({ localDeaf, localVideo, localVideoDisabled } = stateFromStoresObject);
  const localVideoAutoDisabled = stateFromStoresObject.localVideoAutoDisabled;
  const isSelfMute = stateFromStoresObject.isSelfMute;
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
      constructor() {
        let isSelfDeafResult;
        let isVideoEnabledResult = closure_5 === user.id;
        const isSelfMuteResult = isVideoEnabledResult && MediaEngineStore.isSelfMute();
        const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: isSelfDeafResult, localVideo: isVideoEnabledResult, localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), localVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id) };
        isSelfDeafResult = isVideoEnabledResult && MediaEngineStore.isSelfDeaf();
        if (isVideoEnabledResult) {
          isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
        }
        return obj;
      }
    }
    const items3 = [closure_11];
    cResult[21] = items3;
    tmp35 = items3;
  } else {
    class G {
      constructor() {
        let isSelfDeafResult;
        let isVideoEnabledResult = closure_5 === user.id;
        const isSelfMuteResult = isVideoEnabledResult && MediaEngineStore.isSelfMute();
        const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: isSelfDeafResult, localVideo: isVideoEnabledResult, localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), localVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id) };
        isSelfDeafResult = isVideoEnabledResult && MediaEngineStore.isSelfDeaf();
        if (isVideoEnabledResult) {
          isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
        }
        return obj;
      }
    }
  }
  const tmp36 = cResult[22];
  if (tmp4 != null) {
    class G {
      constructor() {
        let isSelfDeafResult;
        let isVideoEnabledResult = closure_5 === user.id;
        const isSelfMuteResult = isVideoEnabledResult && MediaEngineStore.isSelfMute();
        const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: isSelfDeafResult, localVideo: isVideoEnabledResult, localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), localVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id) };
        isSelfDeafResult = isVideoEnabledResult && MediaEngineStore.isSelfDeaf();
        if (isVideoEnabledResult) {
          isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
        }
        return obj;
      }
    }
  }
  if (tmp36 === undefined) {
    class G {
      constructor() {
        let isSelfDeafResult;
        let isVideoEnabledResult = closure_5 === user.id;
        const isSelfMuteResult = isVideoEnabledResult && MediaEngineStore.isSelfMute();
        const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: isSelfDeafResult, localVideo: isVideoEnabledResult, localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), localVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id) };
        isSelfDeafResult = isVideoEnabledResult && MediaEngineStore.isSelfDeaf();
        if (isVideoEnabledResult) {
          isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
        }
        return obj;
      }
    }
    const tmpResult10 = tmp(504);
    const stateFromStores2 = tmpResult10.useStateFromStores(tmp35, fn2);
    let c10 = false;
    closure_11 = false;
    MediaEngineStore = tmp38;
    let closure_13 = localDeaf;
    if (!localVideo) {
      class G {
        constructor() {
          let isSelfDeafResult;
          let isVideoEnabledResult = closure_5 === user.id;
          const isSelfMuteResult = isVideoEnabledResult && MediaEngineStore.isSelfMute();
          const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: isSelfDeafResult, localVideo: isVideoEnabledResult, localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), localVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id) };
          isSelfDeafResult = isVideoEnabledResult && MediaEngineStore.isSelfDeaf();
          if (isVideoEnabledResult) {
            isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
          }
          return obj;
        }
      }
    }
    let closure_14 = localVideo;
    let closure_15 = false;
    let tmp41 = tmp38;
    if (null != result) {
      class G {
        constructor() {
          let isSelfDeafResult;
          let isVideoEnabledResult = closure_5 === user.id;
          const isSelfMuteResult = isVideoEnabledResult && MediaEngineStore.isSelfMute();
          const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: isSelfDeafResult, localVideo: isVideoEnabledResult, localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), localVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id) };
          isSelfDeafResult = isVideoEnabledResult && MediaEngineStore.isSelfDeaf();
          if (isVideoEnabledResult) {
            isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
          }
          return obj;
        }
      }
      c10 = true;
      if (undefined === tmp11 || tmp11) {
        class G {
          constructor() {
            let isSelfDeafResult;
            let isVideoEnabledResult = closure_5 === user.id;
            const isSelfMuteResult = isVideoEnabledResult && MediaEngineStore.isSelfMute();
            const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: isSelfDeafResult, localVideo: isVideoEnabledResult, localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), localVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id) };
            isSelfDeafResult = isVideoEnabledResult && MediaEngineStore.isSelfDeaf();
            if (isVideoEnabledResult) {
              isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
            }
            return obj;
          }
        }
      }
      closure_11 = tmp16;
      const tmp42 = localMute || isSelfMute || result.isVoiceMuted();
      MediaEngineStore = tmp42;
      closure_13 = localDeaf || result.isVoiceDeafened();
      closure_14 = tmp44;
      const sessionId = result.sessionId;
      let tmp45 = null != sessionId && tmp20 === tmp12.id;
      const tmp43 = localDeaf || result.isVoiceDeafened();
      if (tmp45) {
        class G {
          constructor() {
            let isSelfDeafResult;
            let isVideoEnabledResult = closure_5 === user.id;
            const isSelfMuteResult = isVideoEnabledResult && MediaEngineStore.isSelfMute();
            const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: isSelfDeafResult, localVideo: isVideoEnabledResult, localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), localVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id) };
            isSelfDeafResult = isVideoEnabledResult && MediaEngineStore.isSelfDeaf();
            if (isVideoEnabledResult) {
              isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
            }
            return obj;
          }
        }
        tmp45 = sessionId !== localVideoDisabled.getSessionId();
      }
      closure_15 = tmp45;
      tmp41 = tmp42;
    }
    const tmp46 = tmp5 ? tmp19.voiceStatusIcon : tmp18.voiceStatusIcon;
    const style = tmp46;
    if (cResult[25] === localMute) {
      class G {
        constructor() {
          let isSelfDeafResult;
          let isVideoEnabledResult = closure_5 === user.id;
          const isSelfMuteResult = isVideoEnabledResult && MediaEngineStore.isSelfMute();
          const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: isSelfDeafResult, localVideo: isVideoEnabledResult, localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), localVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id) };
          isSelfDeafResult = isVideoEnabledResult && MediaEngineStore.isSelfDeaf();
          if (isVideoEnabledResult) {
            isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
          }
          return obj;
        }
      }
    }
    function renderMicIcon() {
      const tmp = closure_12;
      if (tmp) {
        let tmp6Result;
        const obj = shared;
        if (obj.isThemeDark(stateFromStores1)) {
          tmp6Result = tmp6(15117);
        } else {
          tmp6Result = tmp6(15118);
        }
        const obj2 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: tmp6Result, style: closure_4.voiceStatusIconMargin, color: style.tintColor, disableColor: localMute };
        const Icon = tmp3(1199).Icon;
        return syncedClientThemes(Icon, obj2);
      } else {
        return null;
      }
    }
    cResult[25] = localMute;
    cResult[26] = tmp41;
    cResult[27] = tmp18;
    cResult[28] = stateFromStores1;
    cResult[29] = tmp46;
    cResult[30] = renderMicIcon;
  }
  if (tmp4 != null) {
    class G {
      constructor() {
        let isSelfDeafResult;
        let isVideoEnabledResult = closure_5 === user.id;
        const isSelfMuteResult = isVideoEnabledResult && MediaEngineStore.isSelfMute();
        const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: isSelfDeafResult, localVideo: isVideoEnabledResult, localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), localVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id) };
        isSelfDeafResult = isVideoEnabledResult && MediaEngineStore.isSelfDeaf();
        if (isVideoEnabledResult) {
          isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
        }
        return obj;
      }
    }
  }
  fn2 = function q() {
    guild_id = undefined;
    const isGuestOrLurker = GuildMemberStore.isGuestOrLurker;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    return isGuestOrLurker(guild_id, user.id);
  };
  cResult[22] = undefined;
  cResult[23] = tmp12.id;
  cResult[24] = fn2;
}) : (function VoiceMemberUserRow(user) {
  let Avatar;
  let Label;
  let channel;
  let guild_id;
  let intl3;
  let isActionSheet;
  let isSelfMute;
  let items4;
  let items5;
  let items6;
  let items7;
  let labelCallScreen;
  let localDeaf;
  let localMute;
  let localVideo;
  let localVideoAutoDisabled;
  let localVideoDisabled;
  let name;
  let obj20;
  let obj9;
  let stringResult;
  let theme;
  let tmp26Result;
  user = user.user;
  ({ name, channel } = user);
  let flag = user.withStream;
  const voiceState = user.voiceState;
  if (flag === undefined) {
    flag = true;
  }
  ({ isActionSheet, onPress: dependencyMap } = user);
  const isSpectating = user.isSpectating;
  const merged = Object.assign(user, Object.assign({ user: 0, name: 0, channel: 0, voiceState: 0, withStream: 0, isSpectating: 0, isActionSheet: 0, onPress: 0 }));
  const withLocalSelfMuteDeaf = user(9203).withLocalSelfMuteDeaf;
  const tmp4 = user(9203);
  let obj = user(9203);
  const result = withLocalSelfMuteDeaf(voiceState, obj.useLocalSelfMuteDeaf());
  const tmp5 = closure_17();
  const tmp6 = closure_18();
  const id = AuthenticationStore.getId();
  const obj2 = { userId: user.id };
  const items = [SoundboardStore];
  const tmp9 = channel(6839)(obj2);
  const obj5 = user(504);
  const stateFromStores = obj5.useStateFromStores(items, () => SoundboardStore.isUserPlayingSounds(user.id));
  const items1 = [ThemeStore];
  const obj6 = user(504);
  const stateFromStores1 = obj6.useStateFromStores(items1, () => theme.theme);
  const items2 = [MediaEngineStore];
  const obj7 = user(504);
  const stateFromStoresObject = obj7.useStateFromStoresObject(items2, () => {
    let isSelfDeafResult;
    let isVideoEnabledResult = id === user.id;
    const isSelfMuteResult = isVideoEnabledResult && MediaEngineStore.isSelfMute();
    const obj = { isSelfMute: isSelfMuteResult, localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: isSelfDeafResult, localVideo: isVideoEnabledResult, localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), localVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id) };
    isSelfDeafResult = isVideoEnabledResult && MediaEngineStore.isSelfDeaf();
    if (isVideoEnabledResult) {
      isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
    }
    return obj;
  });
  ({ localMute, localDeaf, localVideo, localVideoDisabled, isSelfMute, localVideoAutoDisabled } = stateFromStoresObject);
  const items3 = [GuildMemberStore];
  let tmp14 = localMute;
  const obj8 = user(504);
  const stateFromStores2 = obj8.useStateFromStores(items3, () => {
    let guild_id;
    const isGuestOrLurker = GuildMemberStore.isGuestOrLurker;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return isGuestOrLurker(guild_id, user.id);
  });
  const obj3 = AuthenticationStore;
  if (!localMute) {
    tmp14 = isSelfMute;
  }
  if (!localVideo) {
    localVideo = localVideoDisabled;
  }
  let flag2 = false;
  let tmp15 = localVideo;
  let tmp16 = localDeaf;
  let tmp17 = tmp14;
  let flag3 = false;
  let flag4 = false;
  let flag5 = false;
  if (null != result) {
    if (flag) {
      flag = result.selfStream;
    }
    const sessionId = result.sessionId;
    const tmp18 = tmp14 || result.isVoiceMuted();
    const tmp19 = localDeaf || result.isVoiceDeafened();
    const tmp20 = localVideo || result.selfVideo;
    const tmp21 = null != sessionId && id === user.id && sessionId !== obj3.getSessionId();
    flag4 = true;
    flag2 = tmp21;
    tmp15 = tmp20;
    tmp16 = tmp19;
    tmp17 = tmp18;
    flag3 = flag;
    flag5 = tmp21;
  }
  const tmp22 = isActionSheet ? tmp6.voiceStatusIcon : tmp5.voiceStatusIcon;
  const obj4 = {
    onPress() {
      return dependencyMap(user);
    },
    label: name,
    leading: closure_14(Avatar, obj9),
    trailing: tmp26Result
  };
  obj9 = { user, guildId: guild_id, size: user(1199).AvatarSizes.REFRESH_MEDIUM_32, speaking: tmp9, playingSoundboard: stateFromStores };
  guild_id = undefined;
  Avatar = tmp2(1199).Avatar;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  tmp26Result = null;
  if (flag4) {
    tmp26Result = null;
    if (!flag2) {
      let tmp23Result = null;
      const obj10 = { style: tmp5.row, children: items4 };
      const tmp26 = closure_15;
      const tmp27 = closure_5;
      if (isSpectating) {
        const obj11 = { size: user(1199).Icon.Sizes.REFRESH_SMALL_16, source: channel(15122), style: tmp22 };
        const Icon = tmp2(1199).Icon;
        tmp23Result = tmp23(Icon, obj11);
      }
      items4 = [tmp23Result, , , , ];
      let tmp23Result5 = null;
      if (tmp17) {
        let tmp8Result;
        const tmp2Result = user(5012);
        if (tmp2Result.isThemeDark(stateFromStores1)) {
          tmp8Result = tmp8(15117);
        } else {
          tmp8Result = tmp8(15118);
        }
        const obj12 = { size: user(1199).Icon.Sizes.REFRESH_SMALL_16, source: tmp8Result, style: tmp5.voiceStatusIconMargin, color: tmp22.tintColor, disableColor: localMute };
        const Icon2 = tmp2(1199).Icon;
        tmp23Result5 = tmp23(Icon2, obj12);
      }
      items4[1] = tmp23Result5;
      let tmp23Result6 = null;
      if (tmp16) {
        const obj13 = { size: user(1199).Icon.Sizes.REFRESH_SMALL_16, source: channel(15119), style: tmp22 };
        const Icon3 = tmp2(1199).Icon;
        tmp23Result6 = tmp23(Icon3, obj13);
      }
      items4[2] = tmp23Result6;
      let tmp23Result7 = null;
      if (tmp15) {
        let obj15;
        const Icon4 = tmp2(1199).Icon;
        if (localVideoDisabled) {
          obj15 = { size: user(1199).Icon.Sizes.REFRESH_SMALL_16, source: channel(15120), style: tmp5.voiceStatusIconMargin, disableColor: true };
          const obj14 = { size: user(1199).Icon.Sizes.REFRESH_SMALL_16, source: channel(15120), style: tmp5.voiceStatusIconMargin, disableColor: true };
        } else {
          obj15 = { size: user(1199).Icon.Sizes.REFRESH_SMALL_16, source: channel(15121), style: tmp22 };
        }
        tmp23Result7 = tmp23(Icon4, obj15);
      }
      items4[3] = tmp23Result7;
      let tmp23Result8 = null;
      if (flag3) {
        const obj16 = { style: tmp22 };
        tmp23Result8 = tmp23(tmp2(1199).LiveTag, obj16);
      }
      items4[4] = tmp23Result8;
      tmp26Result = tmp26(tmp27, obj10);
    }
  }
  const obj17 = { disabled: flag5, label: closure_14(Label, obj20), subLabel: stringResult };
  const FormRow = tmp2(8988).FormRow;
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(obj4);
  let tmp36 = name;
  Label = tmp2(8988).FormRow.Label;
  if (stateFromStores2) {
    const obj18 = { children: items5 };
    items5 = [name, ];
    const obj19 = { variant: "text-md/semibold", lineClamp: 1, color: "status-positive", children: items6 };
    const Text = tmp2(5271).Text;
    const intl = tmp2(1125).intl;
    items6 = ["\u00A0", intl.string(user(1125).t["pFO/Ph"])];
    items5[1] = closure_15(Text, obj19);
    tmp36 = closure_15(closure_16, obj18);
  }
  obj20 = { text: tmp36, style: labelCallScreen };
  labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp6.labelCallScreen;
  }
  if (localVideoAutoDisabled) {
    const obj21 = { style: tmp5.autoDisabledVideo, children: items7 };
    const obj22 = { source: channel(11541), size: user(1199).Icon.Sizes.EXTRA_SMALL, disableColor: true };
    const Icon5 = tmp2(1199).Icon;
    items7 = [closure_14(Icon5, obj22), ];
    const obj23 = { variant: "text-xs/medium", color: "text-default", style: tmp5.autoDisabledVideoLabel, children: intl3.string(user(1125).t.m2Hyj0) };
    const Text2 = tmp2(5271).Text;
    intl3 = tmp2(1125).intl;
    items7[1] = closure_14(Text2, obj23);
    stringResult = closure_15(closure_5, obj21);
  } else {
    stringResult = null;
    if (flag2) {
      const intl2 = tmp2(1125).intl;
      stringResult = intl2.string(tmp2(1125).t.IyYqqY);
    }
  }
  return closure_14(FormRow, obj17);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function StreamingUserRow(user) {
  let first;
  let items1;
  let obj5;
  let tmp10;
  let tmp30;
  let tmp8;
  const tmp = user;
  let obj = user(576);
  const cResult = obj.c(18);
  const tmp4 = closure_17();
  user = user.user;
  const channel = user.channel;
  const tmp5 = closure_18();
  const isActionSheet = user.isActionSheet;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function l() {
      const obj = StreamerApplicationSelectors;
      return obj.getStreamerActivityByUserId(user.id, PresenceStore);
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] !== stateFromStores) {
    let formatResult;
    if (null != stateFromStores) {
      const intl2 = tmp(1125).intl;
      const format = intl2.format;
      if (null != stateFromStores.details) {
        let name;
        if ("" !== stateFromStores.details) {
          name = stateFromStores.details;
        }
        let obj2 = { name };
        formatResult = format(tmp13, obj2);
      }
      name = stateFromStores.name;
    } else {
      const intl = tmp(1125).intl;
      formatResult = intl.string(tmp(1125).t.eXan7B);
    }
    cResult[3] = stateFromStores;
    cResult[4] = formatResult;
    tmp10 = formatResult;
  } else {
    tmp10 = cResult[4];
  }
  let labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp5.labelCallScreen;
  }
  if (cResult[5] === tmp10) {
    let tmp15;
    if (cResult[6] === labelCallScreen) {
      tmp15 = cResult[7];
    }
    if (cResult[8] === user) {
      let tmp17;
      if (cResult[9] === tmp15) {
        tmp17 = cResult[10];
      }
      if (cResult[11] === channel) {
        if (cResult[12] === tmp4) {
          let tmp24;
          if (cResult[13] === user.id) {
            tmp24 = cResult[14];
          }
          if (cResult[15] === tmp17) {
            let tmp32;
            if (cResult[16] === tmp24) {
              tmp32 = cResult[17];
            }
            return tmp32;
          }
          const obj3 = { children: items1 };
          items1 = [tmp17, tmp24];
          const tmp35 = closure_15(closure_16, obj3);
          cResult[15] = tmp17;
          cResult[16] = tmp24;
          cResult[17] = tmp35;
          tmp32 = tmp35;
        }
      }
      let tmp27Result = user.id !== AuthenticationStore.getId();
      if (tmp27Result) {
        let guildId;
        const obj4 = { style: tmp4.streamPreview, children: closure_14(tmp30, obj5) };
        const tmp28 = closure_5;
        tmp30 = channel(11806);
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        obj5 = {
          guildId,
          userId: user.id,
          disableTransition: true,
          onPress() {
                  let isModalOpenResult = null != channel;
                  if (isModalOpenResult) {
                    const isModalOpen = NavigationRouteUtils.isModalOpen;
                    NavigationRouteUtils;
                    const obj = PrivateChannelCallUtils;
                    isModalOpenResult = isModalOpen(obj.getVoiceChannelKey(tmp.id));
                  }
                  if (isModalOpenResult) {
                    const hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
                    ActionSheetActionCreatorsDefault;
                    const obj2 = PrivateChannelCallUtils;
                    hideActionSheet(obj2.getVoiceChannelKey(channel.id));
                  }
                }
        };
        tmp27Result = tmp27(tmp28, obj4);
      }
      cResult[11] = channel;
      cResult[12] = tmp4;
      cResult[13] = user.id;
      cResult[14] = tmp27Result;
      tmp24 = tmp27Result;
    }
    const obj6 = { subLabel: tmp15 };
    const merged = Object.assign(user);
    const tmp23 = closure_14(closure_19, obj6);
    cResult[8] = user;
    cResult[9] = tmp15;
    cResult[10] = tmp23;
    tmp17 = tmp23;
  }
  const tmp16 = closure_14(tmp(8988).FormSubLabel, { text: tmp10, style: labelCallScreen });
  cResult[5] = tmp10;
  cResult[6] = labelCallScreen;
  cResult[7] = tmp16;
  tmp15 = tmp16;
}) : (function StreamingUserRow(user) {
  let FormSubLabel;
  let formatResult;
  let labelCallScreen;
  let obj4;
  let obj6;
  let tmp17;
  const tmp = closure_17();
  user = user.user;
  const channel = user.channel;
  const isActionSheet = user.isActionSheet;
  const tmp2 = closure_18();
  let obj = user(504);
  const items = [PresenceStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = StreamerApplicationSelectors;
    return obj.getStreamerActivityByUserId(user.id, PresenceStore);
  });
  if (null != stateFromStores) {
    const intl2 = tmp3(1125).intl;
    const format = intl2.format;
    if (null != stateFromStores.details) {
      let name;
      if ("" !== stateFromStores.details) {
        name = stateFromStores.details;
      }
      let obj2 = { name };
      formatResult = format(tmp7, obj2);
    }
    name = stateFromStores.name;
  } else {
    const intl = tmp3(1125).intl;
    formatResult = intl.string(tmp3(1125).t.eXan7B);
  }
  const tmp10 = closure_14;
  const obj3 = { subLabel: tmp10(FormSubLabel, obj4) };
  const merged = Object.assign(user);
  obj4 = { text: formatResult, style: labelCallScreen };
  labelCallScreen = null;
  FormSubLabel = tmp3(8988).FormSubLabel;
  const tmp11 = closure_19;
  const tmp8 = closure_15;
  const tmp9 = closure_16;
  if (isActionSheet) {
    labelCallScreen = tmp2.labelCallScreen;
  }
  const children = [tmp10(tmp11, obj3), ];
  let tmp10Result = user.id !== AuthenticationStore.getId();
  if (tmp10Result) {
    let guildId;
    const obj5 = { style: tmp.streamPreview, children: tmp10(tmp17, obj6) };
    const tmp15 = closure_5;
    tmp17 = channel(11806);
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    obj6 = {
      guildId,
      userId: user.id,
      disableTransition: true,
      onPress() {
          let isModalOpenResult = null != channel;
          if (isModalOpenResult) {
            const isModalOpen = NavigationRouteUtils.isModalOpen;
            NavigationRouteUtils;
            const obj = PrivateChannelCallUtils;
            isModalOpenResult = isModalOpen(obj.getVoiceChannelKey(tmp.id));
          }
          if (isModalOpenResult) {
            const hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
            ActionSheetActionCreatorsDefault;
            const obj2 = PrivateChannelCallUtils;
            hideActionSheet(obj2.getVoiceChannelKey(channel.id));
          }
        }
    };
    tmp10Result = tmp10(tmp15, obj5);
  }
  children[1] = tmp10Result;
  return tmp8(tmp9, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function RingButton(channelId) {
  let obj = channelId(576);
  const cResult = obj.c(10);
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp4 = closure_17();
  const tmp5 = closure_18();
  if (null != userId) {
    if (null != channelId) {
      if (cResult[0] === channelId) {
        let tmp6;
        let tmp10;
        let tmp12;
        if (cResult[1] === userId) {
          tmp6 = cResult[2];
        }
        const tmp7 = isActionSheet ? tmp5.ringingButton : tmp4.ringingButton;
        const tmp8 = isActionSheet ? tmp5.ringingButtonLabel : tmp4.ringingButtonLabel;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1125).intl;
          const stringResult = intl.string(channelId(1125).t.bHa9kN);
          cResult[3] = stringResult;
          tmp10 = stringResult;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== tmp8) {
          const obj2 = { style: tmp8, children: tmp10 };
          const tmp14 = closure_14(channelId(1199).LegacyText, obj2);
          cResult[4] = tmp8;
          cResult[5] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] === tmp6) {
          if (cResult[7] === tmp7) {
            let tmp15;
            if (cResult[8] === tmp12) {
              tmp15 = cResult[9];
            }
            return tmp15;
          }
        }
        const obj3 = { onPress: tmp6, accessibilityRole: "button", style: tmp7, children: tmp12 };
        const tmp17 = closure_14(channelId(6968).PressableOpacity, obj3);
        cResult[6] = tmp6;
        cResult[7] = tmp7;
        cResult[8] = tmp12;
        cResult[9] = tmp17;
        tmp15 = tmp17;
      }
      const fn = function n() {
        const items = [userId];
        const obj = CallActionCreatorsDefault;
        obj.ring(channelId, items, "voice_user_action_sheet");
      };
      cResult[0] = channelId;
      cResult[1] = userId;
      cResult[2] = fn;
      tmp6 = fn;
    }
  }
  return null;
}) : (function RingButton(channelId) {
  let LegacyText;
  let intl;
  let obj2;
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp = closure_17();
  const tmp2 = closure_18();
  let tmp4Result = null;
  if (null != userId) {
    tmp4Result = null;
    if (null != channelId) {
      let obj = {
        onPress() {
              const items = [userId];
              const obj = CallActionCreatorsDefault;
              obj.ring(channelId, items, "voice_user_action_sheet");
            },
        accessibilityRole: "button",
        style: isActionSheet ? tmp2.ringingButton : tmp.ringingButton,
        children: closure_14(LegacyText, obj2)
      };
      const PressableOpacity = channelId(6968).PressableOpacity;
      obj2 = { style: isActionSheet ? tmp2.ringingButtonLabel : tmp.ringingButtonLabel, children: intl.string(channelId(1125).t.bHa9kN) };
      LegacyText = tmp5(1199).LegacyText;
      intl = tmp5(1125).intl;
      tmp4Result = tmp4(PressableOpacity, obj);
    }
  }
  return tmp4Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function StopRingButton(channelId) {
  let obj = channelId(576);
  const cResult = obj.c(10);
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp4 = closure_17();
  const tmp5 = closure_18();
  if (null != userId) {
    if (null != channelId) {
      if (cResult[0] === channelId) {
        let tmp6;
        let tmp10;
        let tmp12;
        if (cResult[1] === userId) {
          tmp6 = cResult[2];
        }
        const tmp7 = isActionSheet ? tmp5.ringingButton : tmp4.ringingButton;
        const tmp8 = isActionSheet ? tmp5.ringingButtonLabel : tmp4.ringingButtonLabel;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1125).intl;
          const stringResult = intl.string(channelId(1125).t.ygslb0);
          cResult[3] = stringResult;
          tmp10 = stringResult;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== tmp8) {
          const obj2 = { style: tmp8, children: tmp10 };
          const tmp14 = closure_14(channelId(1199).LegacyText, obj2);
          cResult[4] = tmp8;
          cResult[5] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] === tmp6) {
          if (cResult[7] === tmp7) {
            let tmp15;
            if (cResult[8] === tmp12) {
              tmp15 = cResult[9];
            }
            return tmp15;
          }
        }
        const obj3 = { onPress: tmp6, accessibilityRole: "button", style: tmp7, children: tmp12 };
        const tmp17 = closure_14(channelId(6968).PressableOpacity, obj3);
        cResult[6] = tmp6;
        cResult[7] = tmp7;
        cResult[8] = tmp12;
        cResult[9] = tmp17;
        tmp15 = tmp17;
      }
      const fn = function n() {
        const items = [userId];
        const obj = CallActionCreatorsDefault;
        obj.stopRinging(channelId, items);
      };
      cResult[0] = channelId;
      cResult[1] = userId;
      cResult[2] = fn;
      tmp6 = fn;
    }
  }
  return null;
}) : (function StopRingButton(channelId) {
  let LegacyText;
  let intl;
  let obj2;
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const isActionSheet = channelId.isActionSheet;
  const tmp = closure_17();
  const tmp2 = closure_18();
  let tmp4Result = null;
  if (null != userId) {
    tmp4Result = null;
    if (null != channelId) {
      let obj = {
        onPress() {
              const items = [userId];
              const obj = CallActionCreatorsDefault;
              obj.stopRinging(channelId, items);
            },
        accessibilityRole: "button",
        style: isActionSheet ? tmp2.ringingButton : tmp.ringingButton,
        children: closure_14(LegacyText, obj2)
      };
      const PressableOpacity = channelId(6968).PressableOpacity;
      obj2 = { style: isActionSheet ? tmp2.ringingButtonLabel : tmp.ringingButtonLabel, children: intl.string(channelId(1125).t.ygslb0) };
      LegacyText = tmp5(1199).LegacyText;
      intl = tmp5(1125).intl;
      tmp4Result = tmp4(PressableOpacity, obj);
    }
  }
  return tmp4Result;
});
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo3 = react.memo;
const memo2Result = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function DisconnectedUserRow(user) {
  let first;
  let isActionSheet;
  let tmp = user;
  let obj = user(isActionSheet[16]);
  const cResult = obj.c(31);
  user = user.user;
  const channel = user.channel;
  isActionSheet = user.isActionSheet;
  const onPress = user.onPress;
  closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CallStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel.id) {
    let tmp7;
    let tmp8;
    if (cResult[2] === user.id) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(isActionSheet[19]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    if (cResult[5] === channel.guild_id) {
      if (cResult[6] === channel.id) {
        let tmp10;
        if (cResult[7] === user) {
          tmp10 = cResult[8];
        }
        const tmpResult2 = tmp(isActionSheet[40]);
        const canRing = tmpResult2.useCanRing(user);
        if (cResult[9] === canRing) {
          if (cResult[10] === channel.id) {
            if (cResult[11] === isActionSheet) {
              if (cResult[12] === stateFromStores) {
                let tmp14;
                if (cResult[13] === user.id) {
                  tmp14 = cResult[14];
                }
                if (cResult[15] === onPress) {
                  let tmp15;
                  if (cResult[16] === user) {
                    tmp15 = cResult[17];
                  }
                  class E {
                    constructor() {
                      return onPress(user);
                    }
                  }
                  if (cResult[18] === tmp10) {
                    let tmp17;
                    if (cResult[19] === null) {
                      tmp17 = cResult[20];
                    }
                    if (cResult[21] === channel.guild_id) {
                      let tmp20;
                      let tmp22;
                      if (cResult[22] === user) {
                        tmp20 = cResult[23];
                      }
                      if (cResult[24] !== tmp14) {
                        const tmp14Result = tmp14();
                        class E {
                          constructor() {
                            return onPress(user);
                          }
                        }
                        cResult[25] = tmp14Result;
                        tmp22 = tmp14Result;
                      } else {
                        tmp22 = cResult[25];
                      }
                      class E {
                        constructor() {
                          return onPress(user);
                        }
                      }
                      const obj2 = { onPress: tmp15, label: tmp17, leading: tmp20, trailing: tmp22 };
                      const obj4 = {};
                      const FormRow = tmp(tmp2[31]).FormRow;
                      const merged = Object.assign(obj2);
                      cResult[26] = tmp22;
                      cResult[27] = tmp15;
                      cResult[28] = tmp17;
                      cResult[29] = tmp20;
                      cResult[30] = closure_14(FormRow, obj4);
                      const tmp29 = closure_14(FormRow, obj4);
                    }
                    class E {
                      constructor() {
                        return onPress(user);
                      }
                    }
                    const obj5 = { user, guildId: channel.guild_id, size: tmp(isActionSheet[23]).AvatarSizes.REFRESH_MEDIUM_32 };
                    const Avatar = tmp(tmp2[23]).Avatar;
                    const tmp21 = closure_14(Avatar, obj5);
                    cResult[21] = channel.guild_id;
                    cResult[22] = user;
                    cResult[23] = tmp21;
                    tmp20 = tmp21;
                  }
                  const obj6 = { text: tmp10, style: null };
                  const tmp19 = closure_14(tmp(isActionSheet[31]).FormRow.Label, obj6);
                  cResult[18] = tmp10;
                  cResult[19] = null;
                  cResult[20] = tmp19;
                  tmp17 = tmp19;
                }
                class E {
                  constructor() {
                    return onPress(user);
                  }
                }
                cResult[15] = onPress;
                cResult[16] = user;
                cResult[17] = E;
                tmp15 = E;
              }
            }
          }
        }
        function renderVoiceState() {
          let tmp = null;
          if (canRing) {
            const obj = { channelId: channel.id, userId: user.id, isActionSheet };
            tmp = syncedClientThemes(stateFromStores ? closure_22 : closure_21, obj);
          }
          return tmp;
        }
        cResult[9] = canRing;
        cResult[10] = channel.id;
        cResult[11] = isActionSheet;
        cResult[12] = stateFromStores;
        cResult[13] = user.id;
        cResult[14] = renderVoiceState;
        tmp14 = renderVoiceState;
      }
    }
    const obj3 = channel(isActionSheet[39]);
    const name = obj3.getName(channel.guild_id, channel.id, user);
    cResult[5] = channel.guild_id;
    cResult[6] = channel.id;
    cResult[7] = user;
    cResult[8] = name;
    tmp10 = name;
  }
  const fn = function l() {
    const call = CallStore.getCall(channel.id);
    let hasItem = null != call;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(user.id);
    }
    return hasItem;
  };
  const items1 = [channel.id, user.id];
  cResult[1] = channel.id;
  cResult[2] = user.id;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : (function DisconnectedUserRow(user) {
  let Avatar;
  let Label;
  let isActionSheet;
  let labelCallScreen;
  let obj5;
  let obj6;
  let tmp7Result;
  user = user.user;
  const channel = user.channel;
  ({ isActionSheet, onPress: dependencyMap } = user);
  const items = [CallStore];
  const items1 = [channel.id, user.id];
  const tmp = closure_18();
  const obj = user(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const call = CallStore.getCall(channel.id);
    let hasItem = null != call;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(user.id);
    }
    return hasItem;
  }, items1);
  const obj2 = channel(6029);
  const name = obj2.getName(channel.guild_id, channel.id, user);
  const obj4 = {
    onPress() {
      return dependencyMap(user);
    },
    label: closure_14(Label, obj5),
    leading: closure_14(Avatar, obj6),
    trailing: tmp7Result
  };
  const obj3 = user(7483);
  const canRing = obj3.useCanRing(user);
  obj5 = { text: name, style: labelCallScreen };
  labelCallScreen = null;
  Label = user(8988).FormRow.Label;
  if (isActionSheet) {
    labelCallScreen = tmp.labelCallScreen;
  }
  obj6 = { user, guildId: channel.guild_id, size: user(1199).AvatarSizes.REFRESH_MEDIUM_32 };
  Avatar = tmp2(1199).Avatar;
  tmp7Result = null;
  if (canRing) {
    const obj7 = { channelId: channel.id, userId: user.id, isActionSheet };
    tmp7Result = tmp7(stateFromStores ? closure_22 : closure_21, obj7);
  }
  const obj8 = {};
  const FormRow = tmp2(8988).FormRow;
  const merged = Object.assign(obj4);
  return closure_14(FormRow, obj8);
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memo3Result = memo3(ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceMemberUser(voiceState) {
  let first;
  let tmp8;
  const obj = voiceState(576);
  const cResult = obj.c(11);
  const tmp = voiceState;
  voiceState = voiceState.voiceState;
  let nick = voiceState.nick;
  user = voiceState.user;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  let channelId;
  const tmp6 = cResult[1];
  if (voiceState != null) {
    channelId = voiceState.channelId;
  }
  if (tmp6 !== channelId) {
    let channelId1;
    if (voiceState != null) {
      channelId1 = voiceState.channelId;
    }
    const fn = function l() {
      let channelId;
      const getChannel = ChannelStore.getChannel;
      if (voiceState != null) {
        channelId = voiceState.channelId;
      }
      return getChannel(channelId);
    };
    cResult[1] = channelId1;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  const obj3 = UserUtilsDefault;
  const name = obj3.useName(user);
  if (null != voiceState) {
    if (voiceState.selfStream) {
      let tmp12 = nick;
      if (nick == null) {
        tmp12 = name;
      }
      if (cResult[7] === stateFromStores) {
        if (cResult[8] === voiceState) {
          let tmp13;
          if (cResult[9] === tmp12) {
            tmp13 = cResult[10];
          }
          return tmp13;
        }
      }
      const obj2 = { name: tmp12, channel: stateFromStores };
      const merged = Object.assign(voiceState);
      const tmp19 = closure_14(closure_20, obj2);
      cResult[7] = stateFromStores;
      cResult[8] = voiceState;
      cResult[9] = tmp12;
      cResult[10] = tmp19;
      tmp13 = tmp19;
    }
  }
  if (nick == null) {
    nick = name;
  }
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === voiceState) {
      let tmp20;
      if (cResult[5] === nick) {
        tmp20 = cResult[6];
      }
      return tmp20;
    }
  }
  const obj4 = { name: nick, channel: stateFromStores, withStream: false };
  const merged1 = Object.assign(voiceState);
  const tmp22 = closure_14(closure_19, obj4);
  cResult[3] = stateFromStores;
  cResult[4] = voiceState;
  cResult[5] = nick;
  cResult[6] = tmp22;
  tmp20 = tmp22;
}) : (function VoiceMemberUser(voiceState) {
  let tmp6;
  voiceState = voiceState.voiceState;
  let nick = voiceState.nick;
  user = voiceState.user;
  const items = [ChannelStore];
  const obj = voiceState(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channelId;
    const getChannel = ChannelStore.getChannel;
    if (voiceState != null) {
      channelId = voiceState.channelId;
    }
    return getChannel(channelId);
  });
  const obj2 = UserUtilsDefault;
  const name = obj2.useName(user);
  if (null != voiceState) {
    let tmp3Result;
    if (voiceState.selfStream) {
      const obj3 = { name: nick, channel: stateFromStores };
      const merged = Object.assign(voiceState);
      const tmp8 = closure_14;
      const tmp9 = closure_20;
      if (nick == null) {
        nick = name;
      }
      tmp3Result = tmp8(tmp9, obj3);
    }
    return tmp3Result;
  }
  const obj4 = { name: tmp6, channel: stateFromStores, withStream: false };
  const merged1 = Object.assign(voiceState);
  tmp6 = nick;
  const tmp3 = closure_14;
  const tmp4 = closure_19;
  if (nick == null) {
    tmp6 = name;
  }
  tmp3Result = tmp3(tmp4, obj4);
}));
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx");

export default memo3Result;
export const STREAM_PREVIEW_MARGIN = 16;
export const DisconnectedUserRow = memo2Result;
