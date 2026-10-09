// Module ID: 11031
// Function ID: 11032
// Name: ChannelCallConnectingScreen
// Dependencies: [19, 17, 5110, 2012, 4709, 5111, 10320, 1085, 1096, 21, 5091, 10830, 5055, 558, 576, 1628, 6836, 6305, 11032, 5418, 10976, 8667, 11059, 11060, 1126, 1894, 5242, 5886, 4992, 11061, 10985, 504, 11068, 7050, 11069, 11070, 587, 5020, 11087, 11088, 2]
// Exports: showVoiceSettingsActionSheet

// Module 11031 (ChannelCallConnectingScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1894 */;
import useThemeDefault from "useTheme" /* 4992 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5242 */;
import useChannelNameDefault from "useChannelName" /* 5418 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5886 */;
import BottomSheetModal from "BottomSheetModal" /* 6305 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6836 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 8667 */;
import ChannelCallStore from "ChannelCallStore" /* 10320 */;
import useActionBarHeight from "useActionBarHeight" /* 10830 */;
import UserSettingsVoiceDefault from "UserSettingsVoice" /* 11032 */;
import VoiceChatHeaderIconDefault from "VoiceChatHeaderIcon" /* 11059 */;
import AssetRegistryDefault from "AssetRegistry" /* 11060 */;
import coercePlatformTypeToConsoleType from "coercePlatformTypeToConsoleType" /* 11069 */;
import beginConsoleTransfer from "beginConsoleTransfer" /* 11070 */;
import react_mod from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5110 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import SessionsStore from "SessionsStore" /* 5111 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, importDefault;

let closure_12;
let closure_14;
let map1;
let obj2;
let tmp;
const ChannelCallMicButton = tmp(11061);
let react = react_mod;
const View = react_native.View;
const resetFocus = ChannelCallStore.resetFocus;
const InstantInviteSources = Constants.InstantInviteSources;
const Permissions = Constants2.Permissions;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let obj = { spacer: { width: 8 }, actionBarContainer: obj2 };
obj2 = { paddingHorizontal: 12, paddingTop: 16, justifyContent: "center", alignItems: "flex-start", flexDirection: "row", height: useActionBarHeight.CALL_ACTION_BAR_HEIGHT };
let closure_15 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceSettingsActionSheet() {
  let BottomSheetScrollView;
  let first;
  let obj3;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = MetaQuestUtils;
    const isMetaQuestResult = tmpResult.isMetaQuest();
    cResult[0] = isMetaQuestResult;
    first = isMetaQuestResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { scrollable: true, startExpanded: first, children: authStore2(BottomSheetScrollView, obj3) };
    BottomSheet = tmp(6836).BottomSheet;
    obj3 = { children: authStore2(UserSettingsVoiceDefault, {}) };
    BottomSheetScrollView = tmp(6305).BottomSheetScrollView;
    const tmp9 = authStore2(BottomSheet, obj2);
    cResult[1] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (function VoiceSettingsActionSheet() {
  let BottomSheetScrollView;
  let obj2;
  let obj3;
  const obj = { scrollable: true, startExpanded: obj2.isMetaQuest(), children: authStore2(BottomSheetScrollView, obj3) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = MetaQuestUtils;
  obj3 = { children: authStore2(UserSettingsVoiceDefault, {}) };
  BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  return authStore2(BottomSheet, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelCallConnectingHeader(channel) {
  let intl;
  let items;
  let obj8;
  let obj = channel(576);
  const cResult = obj.c(13);
  channel = channel.channel;
  const tmp4 = closure_15();
  const tmp6 = useChannelNameDefault(channel);
  let obj2 = channel(10976);
  const isVoiceChannelLocked = obj2.useIsVoiceChannelLocked(channel);
  if (cResult[0] === channel) {
    let tmp8;
    let tmp10;
    if (cResult[1] === isVoiceChannelLocked) {
      tmp8 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { style: { width: 4 } };
      const tmp13 = closure_12(View, obj3);
      cResult[3] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[3];
    }
    if (cResult[4] === tmp6) {
      let tmp14;
      let tmp18;
      let tmp22;
      if (cResult[5] === tmp8) {
        tmp14 = cResult[6];
      }
      if (cResult[7] !== tmp4.spacer) {
        const obj4 = { style: tmp4.spacer };
        const tmp21 = closure_12(View, obj4);
        cResult[7] = tmp4.spacer;
        cResult[8] = tmp21;
        tmp18 = tmp21;
      } else {
        tmp18 = cResult[8];
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { style: { width: 4 } };
        const tmp25 = closure_12(View, obj5);
        cResult[9] = tmp25;
        tmp22 = tmp25;
      } else {
        tmp22 = cResult[9];
      }
      if (cResult[10] === tmp14) {
        let tmp26;
        if (cResult[11] === tmp18) {
          tmp26 = cResult[12];
        }
        return tmp26;
      }
      const obj6 = { children: items };
      items = [tmp10, tmp14, tmp18, tmp22];
      const tmp29 = closure_14(closure_13, obj6);
      cResult[10] = tmp14;
      cResult[11] = tmp18;
      cResult[12] = tmp29;
      tmp26 = tmp29;
    }
    let tmp15 = null;
    if (null != tmp8) {
      const obj7 = { source: AssetRegistryDefault, onPress: tmp8, accessibilityLabel: intl.formatToPlainString(channel(1126).t["dHHb/2"], obj8) };
      const tmp5Result = VoiceChatHeaderIconDefault;
      intl = tmp(1126).intl;
      obj8 = { channelName: tmp6 };
      tmp15 = closure_12(tmp5Result, obj7);
    }
    cResult[4] = tmp6;
    cResult[5] = tmp8;
    cResult[6] = tmp15;
    tmp14 = tmp15;
  }
  let fn = null;
  if (PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
    fn = null;
    if (!isVoiceChannelLocked) {
      fn = () => {
        const obj = instant_invite_InstantInviteUtils;
        const obj2 = { source: InstantInviteSources.VOICE_CHANNEL };
        return obj.showInstantInviteActionSheet(channel, obj2);
      };
    }
  }
  cResult[0] = channel;
  cResult[1] = isVoiceChannelLocked;
  cResult[2] = fn;
  tmp8 = fn;
}) : (function ChannelCallConnectingHeader(channel) {
  let intl;
  let obj3;
  channel = channel.channel;
  const tmp = closure_15();
  const tmp4 = useChannelNameDefault(channel);
  let obj = channel(10976);
  const isVoiceChannelLocked = obj.useIsVoiceChannelLocked(channel);
  let fn = null;
  if (PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
    fn = null;
    if (!isVoiceChannelLocked) {
      fn = () => {
        const obj = instant_invite_InstantInviteUtils;
        const obj2 = { source: InstantInviteSources.VOICE_CHANNEL };
        return obj.showInstantInviteActionSheet(channel, obj2);
      };
    }
  }
  const items = [closure_12(View, { style: { width: 4 } }), , , ];
  let tmp9Result = null;
  const tmp7 = closure_14;
  const tmp8 = closure_13;
  if (null != fn) {
    let obj2 = { source: AssetRegistryDefault, onPress: fn, accessibilityLabel: intl.formatToPlainString(channel(1126).t["dHHb/2"], obj3) };
    const tmp2Result = VoiceChatHeaderIconDefault;
    intl = tmp5(1126).intl;
    obj3 = { channelName: tmp4 };
    tmp9Result = tmp9(tmp2Result, obj2);
  }
  const obj4 = { children: items };
  items[1] = tmp9Result;
  const obj5 = { style: tmp.spacer };
  items[2] = closure_12(View, obj5);
  items[3] = closure_12(View, { style: { width: 4 } });
  return tmp7(tmp8, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function JoinMutedButton(channel) {
  const obj = react2;
  const cResult = obj.c(3);
  channel = channel.channel;
  const tmp4 = "light" === useThemeDefault();
  if (cResult[0] === channel) {
    let tmp5;
    if (cResult[1] === tmp4) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = authStore2(ChannelCallMicButton.ChannelCallMicButton, { channel, disableTint: tmp4, isSmallSize: false });
  cResult[0] = channel;
  cResult[1] = tmp4;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function JoinMutedButton(channel) {
  channel = channel.channel;
  const obj = { channel, disableTint: "light" === useThemeDefault(), isSmallSize: false };
  return authStore2(ChannelCallMicButton.ChannelCallMicButton, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function JoinVoiceButton(channel) {
  let awaitingRemoteSessionInfo;
  let obj4;
  let stateFromStores1;
  let tmp10;
  let tmp14;
  let tmp6;
  let tmp7;
  const tmp = channel;
  let obj = channel(stateFromStores1[14]);
  const cResult = obj.c(21);
  channel = channel.channel;
  const tmp5 = require("useVoiceStateForRemoteSession")();
  importDefault = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameConsoleStore];
    const fn = function l() {
      return null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(stateFromStores1[31]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SessionsStore];
    cResult[2] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
  }
  let sessionId;
  const tmp12 = cResult[3];
  if (tmp5 != null) {
    sessionId = tmp5.sessionId;
  }
  if (tmp12 !== sessionId) {
    let sessionId1;
    if (tmp5 != null) {
      sessionId1 = tmp5.sessionId;
    }
    class S {
      constructor() {
        let str;
        const getSessionById = SessionsStore.getSessionById;
        if (sessionId != null) {
          str = sessionId.sessionId;
        }
        if (str == null) {
          str = "";
        }
        const sessionById = getSessionById(str);
        let os;
        if (sessionById != null) {
          os = sessionById.clientInfo.os;
        }
        return os;
      }
    }
    cResult[3] = sessionId1;
    cResult[4] = S;
    tmp14 = S;
  } else {
    tmp14 = cResult[4];
  }
  const tmpResult2 = tmp(stateFromStores1[31]);
  stateFromStores1 = tmpResult2.useStateFromStores(tmp10, tmp14);
  const tmp17 = require("useGameConsoleAccounts")();
  let closure_3 = tmp17;
  const tmp18 = require("useMuteStates")(channel);
  let closure_4 = tmp19;
  if (cResult[5] === channel) {
    if (cResult[6] === tmp17) {
      if (cResult[7] === (tmp18.selfMute || tmp18.mute || tmp18.suppress)) {
        let tmp20;
        let tmp25;
        let tmp24;
        let stringResult1;
        if (cResult[8] === stateFromStores1) {
          tmp20 = cResult[9];
        }
        const tmp21 = require("useIsVoiceChannelFull")(channel);
        class S {
          constructor() {
            let str;
            const getSessionById = SessionsStore.getSessionById;
            if (sessionId != null) {
              str = sessionId.sessionId;
            }
            if (str == null) {
              str = "";
            }
            const sessionById = getSessionById(str);
            let os;
            if (sessionById != null) {
              os = sessionById.clientInfo.os;
            }
            return os;
          }
        }
        const isVoiceChannelLocked = obj4.useIsVoiceChannelLocked(channel);
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { tintColor: tmp4(tmp2[36]).unsafe_rawColors.WHITE };
          class S {
            constructor() {
              let str;
              const getSessionById = SessionsStore.getSessionById;
              if (sessionId != null) {
                str = sessionId.sessionId;
              }
              if (str == null) {
                str = "";
              }
              const sessionById = getSessionById(str);
              let os;
              if (sessionById != null) {
                os = sessionById.clientInfo.os;
              }
              return os;
            }
          }
          const stringResult = obj6.string(tmp(stateFromStores1[24]).t["96ANUN"]);
          cResult[10] = obj2;
          cResult[11] = stringResult;
          tmp25 = stringResult;
          tmp24 = obj2;
        } else {
          tmp24 = cResult[10];
          tmp25 = cResult[11];
        }
        const tmp4Result = importDefault(tmp18.selfMute || tmp18.mute || tmp18.suppress ? stateFromStores1[37] : stateFromStores1[38]);
        if (cResult[12] === tmp21) {
          if (cResult[13] === isVoiceChannelLocked) {
            let tmp28;
            if (cResult[14] === (tmp18.selfMute || tmp18.mute || tmp18.suppress)) {
              tmp28 = cResult[15];
            }
            if (cResult[16] === (tmp21 || isVoiceChannelLocked || stateFromStores)) {
              if (cResult[17] === tmp20) {
                if (cResult[18] === tmp4Result) {
                  let tmp30;
                  if (cResult[19] === tmp28) {
                    tmp30 = cResult[20];
                  }
                  return tmp30;
                }
              }
            }
            class S {
              constructor() {
                let str;
                const getSessionById = SessionsStore.getSessionById;
                if (sessionId != null) {
                  str = sessionId.sessionId;
                }
                if (str == null) {
                  str = "";
                }
                const sessionById = getSessionById(str);
                let os;
                if (sessionById != null) {
                  os = sessionById.clientInfo.os;
                }
                return os;
              }
            }
            let obj3 = { disabled: tmp21 || isVoiceChannelLocked || stateFromStores, backgroundColor: tmp4(tmp2[36]).unsafe_rawColors.GREEN_360, imageStyle: tmp24, accessibilityLabel: tmp25, source: tmp4Result, onPress: tmp20, label: tmp28, iconPosition: tmp(tmp2[39]).IconPosition.RIGHT };
            const LabeledActionButton = tmp(tmp2[39]).LabeledActionButton;
            const tmp31 = closure_12(LabeledActionButton, obj3);
            cResult[16] = tmp21 || isVoiceChannelLocked || stateFromStores;
            cResult[17] = tmp20;
            cResult[18] = tmp4Result;
            cResult[19] = tmp28;
            cResult[20] = tmp31;
            tmp30 = tmp31;
          }
        }
        const intl = tmp(tmp2[24]).intl;
        const string = intl.string;
        const t = tmp(tmp2[24]).t;
        if (isVoiceChannelLocked) {
          stringResult1 = string(t.TVBCKZ);
        } else if (tmp21) {
          stringResult1 = string(t.rZfiNq);
        } else if (tmp18.selfMute || tmp18.mute || tmp18.suppress) {
          stringResult1 = string(t["Bd/Liz"]);
        } else {
          stringResult1 = string(t["96ANUN"]);
        }
        cResult[12] = tmp21;
        cResult[13] = isVoiceChannelLocked;
        cResult[14] = tmp18.selfMute || tmp18.mute || tmp18.suppress;
        cResult[15] = stringResult1;
        tmp28 = stringResult1;
      }
    }
  }
  class I {
    constructor() {
      if (null != stateFromStores1) {
        const obj = coercePlatformTypeToConsoleType;
        const result = obj.coerceConsoleTypeToPlatformType(tmp, closure_3);
        if (null != result) {
          const obj5 = beginConsoleTransfer;
          return obj5.beginConsoleTransfer(channel, result);
        }
      }
      const id = channel.id;
      resetFocus();
      const obj2 = KeyboardManagerUtils;
      const result1 = obj2.dismissGlobalKeyboard();
      if (closure_4) {
        if (!MediaEngineStore.getSettings().mute) {
          const obj3 = AudioActionCreatorsDefault;
          obj3.toggleSelfMute();
        }
      }
      const obj4 = SelectedChannelActionCreatorsDefault;
      const voiceChannel = obj4.selectVoiceChannel(id, false, false);
    }
  }
  cResult[5] = channel;
  cResult[6] = tmp17;
  cResult[7] = tmp18.selfMute || tmp18.mute || tmp18.suppress;
  cResult[8] = stateFromStores1;
  cResult[9] = I;
  tmp20 = I;
}) : (function JoinVoiceButton(channel) {
  let awaitingRemoteSessionInfo;
  let closure_3;
  let intl;
  let obj4;
  let sessionId;
  let stringResult;
  channel = channel.channel;
  importDefault = undefined;
  let stateFromStores1;
  const tmp = importDefault;
  importDefault = require("useVoiceStateForRemoteSession")();
  let obj = channel(stateFromStores1[31]);
  const items = [GameConsoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  let obj2 = channel(stateFromStores1[31]);
  const items1 = [SessionsStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let str;
    const getSessionById = SessionsStore.getSessionById;
    if (sessionId != null) {
      str = sessionId.sessionId;
    }
    if (str == null) {
      str = "";
    }
    const sessionById = getSessionById(str);
    let os;
    if (sessionById != null) {
      os = sessionById.clientInfo.os;
    }
    return os;
  });
  const tmp6 = require("useGameConsoleAccounts")();
  react = tmp6;
  const tmp7 = require("useMuteStates")(channel);
  let closure_4 = tmp8;
  const items2 = [channel, stateFromStores1, tmp6, tmp7.selfMute || tmp7.mute || tmp7.suppress];
  const callback = react.useCallback(() => {
    if (null != stateFromStores1) {
      const obj = coercePlatformTypeToConsoleType;
      const result = obj.coerceConsoleTypeToPlatformType(tmp, closure_3);
      if (null != result) {
        const obj5 = beginConsoleTransfer;
        return obj5.beginConsoleTransfer(channel, result);
      }
    }
    const id = channel.id;
    resetFocus();
    const obj2 = KeyboardManagerUtils;
    const result1 = obj2.dismissGlobalKeyboard();
    if (closure_4) {
      if (!MediaEngineStore.getSettings().mute) {
        const obj3 = AudioActionCreatorsDefault;
        obj3.toggleSelfMute();
      }
    }
    const obj4 = SelectedChannelActionCreatorsDefault;
    const voiceChannel = obj4.selectVoiceChannel(id, false, false);
  }, items2);
  const tmp10 = tmp(stateFromStores1[20])(channel);
  const tmp3Result = channel(stateFromStores1[20]);
  const isVoiceChannelLocked = tmp3Result.useIsVoiceChannelLocked(channel);
  let tmp13 = tmp10;
  const LabeledActionButton = tmp3(tmp2[39]).LabeledActionButton;
  const tmp12 = closure_12;
  if (!tmp10) {
    tmp13 = isVoiceChannelLocked;
  }
  if (!tmp13) {
    tmp13 = stateFromStores;
  }
  let obj3 = { disabled: tmp13, backgroundColor: tmp(tmp2[36]).unsafe_rawColors.GREEN_360, imageStyle: obj4, accessibilityLabel: intl.string(tmp3(tmp2[24]).t["96ANUN"]), source: tmp(tmp7.selfMute || tmp7.mute || tmp7.suppress ? tmp2[37] : tmp2[38]), onPress: callback, label: stringResult, iconPosition: tmp3(tmp2[39]).IconPosition.RIGHT };
  obj4 = { tintColor: tmp(tmp2[36]).unsafe_rawColors.WHITE };
  intl = tmp3(tmp2[24]).intl;
  const intl2 = tmp3(tmp2[24]).intl;
  const string = intl2.string;
  const t = tmp3(tmp2[24]).t;
  if (isVoiceChannelLocked) {
    stringResult = string(t.TVBCKZ);
  } else if (tmp10) {
    stringResult = string(t.rZfiNq);
  } else if (tmp7.selfMute || tmp7.mute || tmp7.suppress) {
    stringResult = string(t["Bd/Liz"]);
  } else {
    stringResult = string(t["96ANUN"]);
  }
  return tmp12(LabeledActionButton, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CallConnectingActionBar(channel) {
  let items;
  let tmp3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(7);
  channel = channel.channel;
  const tmp2 = closure_15();
  if (cResult[0] !== channel) {
    const obj2 = { channel };
    const tmp7 = authStore2(closure_17, obj2);
    const obj3 = { channel };
    const tmp9 = authStore2(closure_18, obj3);
    cResult[0] = channel;
    cResult[1] = tmp7;
    cResult[2] = tmp9;
    tmp4 = tmp9;
    tmp3 = tmp7;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  if (cResult[3] === tmp2.actionBarContainer) {
    if (cResult[4] === tmp3) {
      let tmp10;
      if (cResult[5] === tmp4) {
        tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  const obj4 = { style: tmp2.actionBarContainer, children: items };
  items = [tmp3, tmp4];
  const tmp11 = authStore3(View, obj4);
  cResult[3] = tmp2.actionBarContainer;
  cResult[4] = tmp3;
  cResult[5] = tmp4;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : (function CallConnectingActionBar(channel) {
  let items;
  channel = channel.channel;
  const obj = { style: closure_15().actionBarContainer, children: items };
  items = [authStore2(closure_17, { channel }), authStore2(closure_18, { channel })];
  return authStore3(View, obj);
});
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallConnectingScreen.tsx");

export const showVoiceSettingsActionSheet = function showVoiceSettingsActionSheet(guildId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { guildId };
  obj.openLazy(() => Promise.resolve(closure_1_16), "voice settings", obj2);
};
export const ChannelCallConnectingHeader = tmp3;
export const CallConnectingActionBar = tmp4;
