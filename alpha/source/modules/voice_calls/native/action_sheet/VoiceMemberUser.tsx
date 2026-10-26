// Module ID: 14621
// Function ID: 14622
// Name: VoiceMemberUser
// Dependencies: [109, 19, 17, 6006, 1207, 502, 6497, 4823, 4883, 2014, 5712, 1087, 21, 4971, 587, 558, 576, 6781, 504, 4978, 14622, 14623, 1202, 14624, 14625, 14626, 14627, 11445, 5234, 1128, 8951, 7811, 11711, 5150, 7867, 5210, 7413, 6908, 5989, 7423, 5025, 2]

// Module 14621 (VoiceMemberUser)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import intl4 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import shared from "shared" /* 4978 */;
import UserUtilsDefault from "UserUtils" /* 5025 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5150 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import Text_Text from "Text/Text" /* 5234 */;
import useIsSpeakingDefault from "useIsSpeaking" /* 6781 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 7413 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7811 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7867 */;
import AssetRegistryDefault from "AssetRegistry" /* 11445 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14624 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14625 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14626 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 14627 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SoundboardStore from "SoundboardStore" /* 6006 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 6497 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import GuildMemberStore_mod from "GuildMemberStore" /* 4883 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
import PresenceStore from "PresenceStore" /* 5712 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_12, dependencyMap, guild_id, importDefault;

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
let GuildMemberStore = GuildMemberStore_mod;
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
  let _require;
  let _true;
  let channel;
  let closure_1;
  let closure_11;
  let closure_2;
  let closure_4;
  let isActionSheet;
  let isSelfMute;
  let isSpectating;
  let localDeaf;
  let localMute;
  let localVideo;
  let localVideoDisabled;
  let name;
  let obj2;
  let onPress;
  let stateFromStores1;
  let style;
  let tmp10;
  let tmp18;
  let tmp21;
  let tmp23;
  let tmp25;
  let tmp27;
  let tmp28;
  let tmp30;
  let tmp31;
  let tmp34;
  let voiceState;
  let withStream;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(101);
  if (cResult[0] !== user) {
    user = user.user;
    ({ name, channel } = user);
    _require = channel;
    ({ voiceState, withStream, isSpectating } = user);
    importDefault = isSpectating;
    ({ isActionSheet, onPress } = user);
    dependencyMap = onPress;
    const tmp14 = _objectWithoutProperties(user, user);
    cResult[0] = user;
    cResult[1] = channel;
    cResult[2] = isActionSheet;
    cResult[3] = isSpectating;
    cResult[4] = name;
    cResult[5] = onPress;
    cResult[6] = tmp14;
    cResult[7] = withStream;
    cResult[8] = user;
    cResult[9] = voiceState;
    obj2 = voiceState;
    tmp10 = withStream;
    const tmp6 = isSpectating;
  } else {
    _require = cResult[1];
    importDefault = cResult[3];
    dependencyMap = cResult[5];
    tmp10 = cResult[7];
    user = cResult[8];
    obj2 = cResult[9];
  }
  _objectWithoutProperties = closure_17();
  const tmp16 = closure_17();
  closure_18();
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const id = localVideoDisabled.getId();
    cResult[10] = id;
    tmp18 = id;
  } else {
    tmp18 = cResult[10];
  }
  let closure_5 = tmp18;
  if (cResult[11] !== tmp11.id) {
    let obj3 = { userId: tmp11.id };
    cResult[11] = tmp11.id;
    cResult[12] = obj3;
    tmp21 = obj3;
  } else {
    tmp21 = cResult[12];
  }
  useIsSpeakingDefault(tmp21);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [stateFromStores1];
    cResult[13] = items;
    tmp23 = items;
  } else {
    tmp23 = cResult[13];
  }
  if (cResult[14] !== tmp11.id) {
    class H {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
    cResult[14] = tmp11.id;
    cResult[15] = H;
    tmp25 = H;
  } else {
    class H {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp23, tmp25);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
    const items1 = [localMute];
    class N {
      constructor() {
        return localMute.theme;
      }
    }
    cResult[16] = items1;
    cResult[17] = N;
    tmp28 = N;
    tmp27 = items1;
  } else {
    class H {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
    tmp28 = cResult[17];
  }
  const tmpResult4 = tmp(504);
  stateFromStores1 = tmpResult4.useStateFromStores(tmp27, tmp28);
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
    const items2 = [closure_12];
    class N {
      constructor() {
        return localMute.theme;
      }
    }
    cResult[18] = items2;
    tmp30 = items2;
  } else {
    class H {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
  }
  if (cResult[19] !== tmp11.id) {
    class H {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
    cResult[19] = tmp11.id;
    class N {
      constructor() {
        return localMute.theme;
      }
    }
    cResult[20] = tmp32;
    tmp31 = tmp32;
  } else {
    class H {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
  }
  const tmpResult5 = tmp(504);
  const stateFromStoresObject = tmpResult5.useStateFromStoresObject(tmp30, tmp31);
  localMute = stateFromStoresObject.localMute;
  ({ localDeaf, localVideo, isSelfMute, localVideoDisabled } = stateFromStoresObject);
  const localVideoAutoDisabled = stateFromStoresObject.localVideoAutoDisabled;
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
    const items3 = [GuildMemberStore];
    class N {
      constructor() {
        return localMute.theme;
      }
    }
    cResult[21] = items3;
    tmp34 = items3;
  } else {
    class H {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
  }
  const tmp35 = cResult[22];
  if (tmp4 != null) {
    class H {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
  }
  if (tmp35 === undefined) {
    class H {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
    const tmpResult6 = tmp(504);
    const stateFromStores2 = tmpResult6.useStateFromStores(tmp34, K);
    class N {
      constructor() {
        return localMute.theme;
      }
    }
    let c15 = false;
    let c13 = false;
    closure_12 = tmp43;
    let closure_10 = localDeaf;
    let closure_14 = tmp44;
    GuildMemberStore = false;
    let flag2 = false;
    let tmp45 = tmp44;
    let flag3 = false;
    let tmp46 = tmp43;
    let flag4 = false;
    let tmp47 = localDeaf;
    if (null != obj2) {
      class H {
        constructor() {
          return closure_6.isUserPlayingSounds(closure_3.id);
        }
      }
      c15 = true;
      const tmp48 = (undefined === tmp10 || tmp10) && obj2.selfStream;
      class N {
        constructor() {
          return localMute.theme;
        }
      }
      const tmp49 = localMute || isSelfMute || obj2.isVoiceMuted();
      closure_12 = tmp49;
      const tmp50 = localDeaf || obj2.isVoiceDeafened();
      closure_10 = tmp50;
      closure_14 = tmp51;
      const sessionId = obj2.sessionId;
      let tmp52 = null != sessionId && tmp18 === tmp11.id;
      if (tmp52) {
        class H {
          constructor() {
            return closure_6.isUserPlayingSounds(closure_3.id);
          }
        }
        tmp52 = sessionId !== localVideoDisabled.getSessionId();
      }
      GuildMemberStore = tmp52;
      flag4 = tmp52;
      flag2 = true;
      tmp45 = tmp51;
      flag3 = tmp48;
      tmp46 = tmp49;
      tmp47 = tmp50;
    }
    cResult[25] = isSelfMute;
    cResult[26] = localDeaf;
    cResult[27] = localMute;
    cResult[28] = localVideo;
    cResult[29] = localVideoDisabled;
    cResult[30] = tmp11.id;
    cResult[31] = obj2;
    cResult[32] = undefined === tmp10 || tmp10;
    cResult[33] = tmp47;
    cResult[34] = flag4;
    cResult[35] = tmp46;
    cResult[36] = flag3;
    cResult[37] = tmp45;
    cResult[38] = flag2;
  }
  if (tmp4 != null) {
    class H {
      constructor() {
        return closure_6.isUserPlayingSounds(closure_3.id);
      }
    }
  }
  class K {
    constructor() {
      guild_id = undefined;
      tmp = closure_11;
      isGuestOrLurker = closure_11.isGuestOrLurker;
      if (closure_0 != null) {
        guild_id = closure_0.guild_id;
      }
      return isGuestOrLurker(guild_id, closure_3.id);
    }
  }
  cResult[22] = undefined;
  cResult[23] = tmp11.id;
  cResult[24] = K;
}) : (function VoiceMemberUserRow(user) {
  let Avatar;
  let Label;
  let channel;
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
  let obj19;
  let obj8;
  let stringResult;
  let theme;
  let tmp25Result;
  let voiceState;
  let withStream;
  user = user.user;
  ({ name, channel } = user);
  ({ voiceState, withStream } = user);
  if (withStream === undefined) {
    withStream = true;
  }
  ({ isActionSheet, onPress: dependencyMap } = user);
  const isSpectating = user.isSpectating;
  const merged = Object.assign(user, Object.assign({ user: 0, name: 0, channel: 0, voiceState: 0, withStream: 0, isSpectating: 0, isActionSheet: 0, onPress: 0 }));
  const tmp2 = closure_17();
  const tmp3 = closure_18();
  let obj = AuthenticationStore;
  const id = AuthenticationStore.getId();
  const obj2 = { userId: user.id };
  const items = [SoundboardStore];
  const tmp7 = channel(6781)(obj2);
  const obj3 = user(504);
  const stateFromStores = obj3.useStateFromStores(items, () => SoundboardStore.isUserPlayingSounds(user.id));
  const items1 = [ThemeStore];
  const obj4 = user(504);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => theme.theme);
  const items2 = [MediaEngineStore];
  const obj5 = user(504);
  const stateFromStoresObject = obj5.useStateFromStoresObject(items2, () => {
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
  let tmp13 = localMute;
  const obj6 = user(504);
  const stateFromStores2 = obj6.useStateFromStores(items3, () => {
    guild_id = undefined;
    const isGuestOrLurker = GuildMemberStore.isGuestOrLurker;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return isGuestOrLurker(guild_id, user.id);
  });
  if (!localMute) {
    tmp13 = isSelfMute;
  }
  if (!localVideo) {
    localVideo = localVideoDisabled;
  }
  let flag = false;
  let tmp14 = localVideo;
  let tmp15 = localDeaf;
  let tmp16 = tmp13;
  let flag2 = false;
  let flag3 = false;
  let flag4 = false;
  if (null != voiceState) {
    if (withStream) {
      withStream = voiceState.selfStream;
    }
    const sessionId = voiceState.sessionId;
    const tmp17 = tmp13 || voiceState.isVoiceMuted();
    const tmp18 = localDeaf || voiceState.isVoiceDeafened();
    const tmp19 = localVideo || voiceState.selfVideo;
    const tmp20 = null != sessionId && id === user.id && sessionId !== obj.getSessionId();
    flag3 = true;
    flag = tmp20;
    tmp14 = tmp19;
    tmp15 = tmp18;
    tmp16 = tmp17;
    flag2 = withStream;
    flag4 = tmp20;
  }
  const tmp21 = isActionSheet ? tmp3.voiceStatusIcon : tmp2.voiceStatusIcon;
  const obj7 = {
    onPress() {
      return dependencyMap(user);
    },
    label: name,
    leading: closure_14(Avatar, obj8),
    trailing: tmp25Result
  };
  obj8 = { user, guildId: guild_id, size: user(1202).AvatarSizes.REFRESH_MEDIUM_32, speaking: tmp7, playingSoundboard: stateFromStores };
  guild_id = undefined;
  Avatar = tmp8(1202).Avatar;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  tmp25Result = null;
  if (flag3) {
    tmp25Result = null;
    if (!flag) {
      let tmp22Result = null;
      const obj9 = { style: tmp2.row, children: items4 };
      const tmp25 = closure_15;
      const tmp26 = closure_5;
      if (isSpectating) {
        const obj10 = { size: user(1202).Icon.Sizes.REFRESH_SMALL_16, source: channel(14627), style: tmp21 };
        const Icon = tmp8(1202).Icon;
        tmp22Result = tmp22(Icon, obj10);
      }
      items4 = [tmp22Result, , , , ];
      let tmp22Result5 = null;
      if (tmp16) {
        let tmp5Result;
        const tmp8Result = user(4978);
        if (tmp8Result.isThemeDark(stateFromStores1)) {
          tmp5Result = tmp5(14622);
        } else {
          tmp5Result = tmp5(14623);
        }
        const obj11 = { size: user(1202).Icon.Sizes.REFRESH_SMALL_16, source: tmp5Result, style: tmp2.voiceStatusIconMargin, color: tmp21.tintColor, disableColor: localMute };
        const Icon2 = tmp8(1202).Icon;
        tmp22Result5 = tmp22(Icon2, obj11);
      }
      items4[1] = tmp22Result5;
      let tmp22Result6 = null;
      if (tmp15) {
        const obj12 = { size: user(1202).Icon.Sizes.REFRESH_SMALL_16, source: channel(14624), style: tmp21 };
        const Icon3 = tmp8(1202).Icon;
        tmp22Result6 = tmp22(Icon3, obj12);
      }
      items4[2] = tmp22Result6;
      let tmp22Result7 = null;
      if (tmp14) {
        let obj14;
        const Icon4 = tmp8(1202).Icon;
        if (localVideoDisabled) {
          obj14 = { size: user(1202).Icon.Sizes.REFRESH_SMALL_16, source: channel(14625), style: tmp2.voiceStatusIconMargin, disableColor: true };
          const obj13 = { size: user(1202).Icon.Sizes.REFRESH_SMALL_16, source: channel(14625), style: tmp2.voiceStatusIconMargin, disableColor: true };
        } else {
          obj14 = { size: user(1202).Icon.Sizes.REFRESH_SMALL_16, source: channel(14626), style: tmp21 };
        }
        tmp22Result7 = tmp22(Icon4, obj14);
      }
      items4[3] = tmp22Result7;
      let tmp22Result8 = null;
      if (flag2) {
        const obj15 = { style: tmp21 };
        tmp22Result8 = tmp22(tmp8(1202).LiveTag, obj15);
      }
      items4[4] = tmp22Result8;
      tmp25Result = tmp25(tmp26, obj9);
    }
  }
  const obj16 = { disabled: flag4, label: closure_14(Label, obj19), subLabel: stringResult };
  const FormRow = tmp8(8951).FormRow;
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(obj7);
  let tmp35 = name;
  Label = tmp8(8951).FormRow.Label;
  if (stateFromStores2) {
    const obj17 = { children: items5 };
    items5 = [name, ];
    const obj18 = { variant: "text-md/semibold", lineClamp: 1, color: "status-positive", children: items6 };
    const Text = tmp8(5234).Text;
    const intl = tmp8(1128).intl;
    items6 = ["\u00A0", intl.string(user(1128).t["pFO/Ph"])];
    items5[1] = closure_15(Text, obj18);
    tmp35 = closure_15(closure_16, obj17);
  }
  obj19 = { text: tmp35, style: labelCallScreen };
  labelCallScreen = null;
  if (isActionSheet) {
    labelCallScreen = tmp3.labelCallScreen;
  }
  if (localVideoAutoDisabled) {
    const obj20 = { style: tmp2.autoDisabledVideo, children: items7 };
    const obj21 = { source: channel(11445), size: user(1202).Icon.Sizes.EXTRA_SMALL, disableColor: true };
    const Icon5 = tmp8(1202).Icon;
    items7 = [closure_14(Icon5, obj21), ];
    const obj22 = { variant: "text-xs/medium", color: "text-default", style: tmp2.autoDisabledVideoLabel, children: intl3.string(user(1128).t.m2Hyj0) };
    const Text2 = tmp8(5234).Text;
    intl3 = tmp8(1128).intl;
    items7[1] = closure_14(Text2, obj22);
    stringResult = closure_15(closure_5, obj20);
  } else {
    stringResult = null;
    if (flag) {
      const intl2 = tmp8(1128).intl;
      stringResult = intl2.string(tmp8(1128).t.IyYqqY);
    }
  }
  return closure_14(FormRow, obj16);
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
      const intl2 = tmp(1128).intl;
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
      const intl = tmp(1128).intl;
      formatResult = intl.string(tmp(1128).t.eXan7B);
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
        tmp30 = channel(11711);
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
  const tmp16 = closure_14(tmp(8951).FormSubLabel, { text: tmp10, style: labelCallScreen });
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
    const intl2 = tmp3(1128).intl;
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
    const intl = tmp3(1128).intl;
    formatResult = intl.string(tmp3(1128).t.eXan7B);
  }
  const tmp10 = closure_14;
  const obj3 = { subLabel: tmp10(FormSubLabel, obj4) };
  const merged = Object.assign(user);
  obj4 = { text: formatResult, style: labelCallScreen };
  labelCallScreen = null;
  FormSubLabel = tmp3(8951).FormSubLabel;
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
    tmp17 = channel(11711);
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
          const intl = tmp(1128).intl;
          const stringResult = intl.string(channelId(1128).t.bHa9kN);
          cResult[3] = stringResult;
          tmp10 = stringResult;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== tmp8) {
          const obj2 = { style: tmp8, children: tmp10 };
          const tmp14 = closure_14(channelId(1202).LegacyText, obj2);
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
        const tmp17 = closure_14(channelId(6908).PressableOpacity, obj3);
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
      const PressableOpacity = channelId(6908).PressableOpacity;
      obj2 = { style: isActionSheet ? tmp2.ringingButtonLabel : tmp.ringingButtonLabel, children: intl.string(channelId(1128).t.bHa9kN) };
      LegacyText = tmp5(1202).LegacyText;
      intl = tmp5(1128).intl;
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
          const intl = tmp(1128).intl;
          const stringResult = intl.string(channelId(1128).t.ygslb0);
          cResult[3] = stringResult;
          tmp10 = stringResult;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== tmp8) {
          const obj2 = { style: tmp8, children: tmp10 };
          const tmp14 = closure_14(channelId(1202).LegacyText, obj2);
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
        const tmp17 = closure_14(channelId(6908).PressableOpacity, obj3);
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
      const PressableOpacity = channelId(6908).PressableOpacity;
      obj2 = { style: isActionSheet ? tmp2.ringingButtonLabel : tmp.ringingButtonLabel, children: intl.string(channelId(1128).t.ygslb0) };
      LegacyText = tmp5(1202).LegacyText;
      intl = tmp5(1128).intl;
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
    const tmpResult = tmp(isActionSheet[18]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    if (cResult[5] === channel.guild_id) {
      if (cResult[6] === channel.id) {
        let tmp10;
        if (cResult[7] === user) {
          tmp10 = cResult[8];
        }
        const tmpResult2 = tmp(isActionSheet[39]);
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
                      const FormRow = tmp(tmp2[30]).FormRow;
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
                    const obj5 = { user, guildId: channel.guild_id, size: tmp(isActionSheet[22]).AvatarSizes.REFRESH_MEDIUM_32 };
                    const Avatar = tmp(tmp2[22]).Avatar;
                    const tmp21 = closure_14(Avatar, obj5);
                    cResult[21] = channel.guild_id;
                    cResult[22] = user;
                    cResult[23] = tmp21;
                    tmp20 = tmp21;
                  }
                  const obj6 = { text: tmp10, style: null };
                  const tmp19 = closure_14(tmp(isActionSheet[30]).FormRow.Label, obj6);
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
    const obj3 = channel(isActionSheet[38]);
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
  const obj2 = channel(5989);
  const name = obj2.getName(channel.guild_id, channel.id, user);
  const obj4 = {
    onPress() {
      return dependencyMap(user);
    },
    label: closure_14(Label, obj5),
    leading: closure_14(Avatar, obj6),
    trailing: tmp7Result
  };
  const obj3 = user(7423);
  const canRing = obj3.useCanRing(user);
  obj5 = { text: name, style: labelCallScreen };
  labelCallScreen = null;
  Label = user(8951).FormRow.Label;
  if (isActionSheet) {
    labelCallScreen = tmp.labelCallScreen;
  }
  obj6 = { user, guildId: channel.guild_id, size: user(1202).AvatarSizes.REFRESH_MEDIUM_32 };
  Avatar = tmp2(1202).Avatar;
  tmp7Result = null;
  if (canRing) {
    const obj7 = { channelId: channel.id, userId: user.id, isActionSheet };
    tmp7Result = tmp7(stateFromStores ? closure_22 : closure_21, obj7);
  }
  const obj8 = {};
  const FormRow = tmp2(8951).FormRow;
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
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx");

export default memo3Result;
export const STREAM_PREVIEW_MARGIN = 16;
export const DisconnectedUserRow = memo2Result;
