// Module ID: 10271
// Function ID: 10272
// Name: ChannelCallConnectingScreen
// Dependencies: [19, 17, 4807, 1996, 4431, 4808, 9668, 1078, 1089, 21, 4790, 9693, 4757, 558, 568, 1613, 7429, 6895, 10272, 4943, 10213, 10094, 10293, 10294, 1119, 9921, 5662, 4725, 10295, 10059, 504, 10058, 7621, 10302, 10061, 580, 9742, 10303, 10304, 2]
// Exports: showVoiceSettingsActionSheet

// Module 10271 (ChannelCallConnectingScreen)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 568 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1613 */;
import useThemeDefault from "useTheme" /* 4725 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import useChannelNameDefault from "useChannelName" /* 4943 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5662 */;
import BottomSheetModal from "BottomSheetModal" /* 6895 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7429 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9921 */;
import beginConsoleTransfer from "beginConsoleTransfer" /* 10061 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 10094 */;
import UserSettingsVoiceDefault from "UserSettingsVoice" /* 10272 */;
import ChannelCallMicButton from "ChannelCallMicButton" /* 10295 */;
import coercePlatformTypeToConsoleType from "coercePlatformTypeToConsoleType" /* 10302 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4807 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;
import PermissionStore from "PermissionStore" /* 4431 */;
import SessionsStore from "SessionsStore" /* 4808 */;

require = fn;
const View = fn(17).View;
const resetFocus = fn(9668).resetFocus;
const InstantInviteSources = fn(1078).InstantInviteSources;
const Permissions = fn(1089).Permissions;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { spacer: { width: 8 }, actionBarContainer: { paddingHorizontal: 12, paddingTop: 16, justifyContent: "center", alignItems: "flex-start", flexDirection: "row", height: fn(9693).CALL_ACTION_BAR_HEIGHT } };
let closure_15 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const isMetaQuestResult = tmp(1613).isMetaQuest();
    cResult[0] = isMetaQuestResult;
    let first = isMetaQuestResult;
    const tmpResult = tmp(1613);
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { scrollable: true, startExpanded: first, children: null };
    const obj3 = { children: __initData(UserSettingsVoiceDefault, {}) };
    obj2.children = __initData(tmp(6895).BottomSheetScrollView, obj3);
    const tmp9 = __initData(tmp(7429).BottomSheet, obj2);
    cResult[1] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (() => {
  const obj = { scrollable: true, startExpanded: MetaQuestUtils.isMetaQuest(), children: null };
  obj.children = __initData(BottomSheetModal.BottomSheetScrollView, { children: __initData(UserSettingsVoiceDefault, {}) });
  return __initData(Sheet_BottomSheet.BottomSheet, obj);
});
fn(558);
let obj3 = { paddingHorizontal: 12, paddingTop: 16, justifyContent: "center", alignItems: "flex-start", flexDirection: "row", height: fn(9693).CALL_ACTION_BAR_HEIGHT };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = c.c(3);
  channel = channel.channel;
  const tmp4 = "light" === useThemeDefault();
  if (cResult[0] === channel) {
    if (cResult[1] === tmp4) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = __initData(ChannelCallMicButton.ChannelCallMicButton, { channel, disableTint: tmp4, isSmallSize: false });
  cResult[0] = channel;
  cResult[1] = tmp4;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((channel) => {
  const tmp = useThemeDefault();
  return __initData(ChannelCallMicButton.ChannelCallMicButton, { channel: channel.channel, disableTint: "light" === useThemeDefault(), isSmallSize: false });
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(stateFromStores1[14]).c(21);
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
  let obj = channel(stateFromStores1[14]);
  const stateFromStores = channel(stateFromStores1[30]).useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SessionsStore];
    cResult[2] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[2];
  }
  let sessionId;
  if (tmp5 != null) {
    sessionId = tmp5.sessionId;
  }
  if (cResult[3] !== sessionId) {
    let sessionId1;
    if (tmp5 != null) {
      sessionId1 = tmp5.sessionId;
    }
    const fn2 = function f() {
      let str;
      if (sessionId != null) {
        str = sessionId.sessionId;
      }
      if (str == null) {
        str = "";
      }
      const sessionById = SessionsStore.getSessionById(str);
      let os;
      if (sessionById != null) {
        os = sessionById.clientInfo.os;
      }
      return os;
    };
    cResult[3] = sessionId1;
    cResult[4] = fn2;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[4];
  }
  const tmpResult = channel(stateFromStores1[30]);
  stateFromStores1 = channel(stateFromStores1[30]).useStateFromStores(tmp10, tmp13);
  const tmp16 = require("useGameConsoleAccounts")();
  closure_3 = tmp16;
  const tmp17 = require("useMuteStates")(channel);
  closure_4 = tmp18;
  if (cResult[5] === channel) {
    if (cResult[6] === tmp16) {
      if (cResult[7] === tmp18) {
        if (cResult[8] === stateFromStores1) {
          let tmp19 = cResult[9];
        }
        const tmp20 = tmp4(tmp2[20])(channel);
        const isVoiceChannelLocked = tmp(tmp2[20]).useIsVoiceChannelLocked(channel);
        let tmp22 = tmp20;
        if (!tmp20) {
          tmp22 = isVoiceChannelLocked;
        }
        if (!tmp22) {
          tmp22 = stateFromStores;
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { tintColor: tmp4(tmp2[35]).unsafe_rawColors.WHITE };
          const intl = tmp(tmp2[24]).intl;
          const stringResult = intl.string(tmp(tmp2[24]).t["96ANUN"]);
          cResult[10] = obj2;
          cResult[11] = stringResult;
          let tmp24 = stringResult;
          let tmp23 = obj2;
        } else {
          tmp23 = cResult[10];
          tmp24 = cResult[11];
        }
        const tmp4Result = tmp4(tmp18 ? tmp2[36] : tmp2[37]);
        if (cResult[12] === tmp20) {
          if (cResult[13] === isVoiceChannelLocked) {
            if (cResult[14] === tmp18) {
              if (cResult[16] === tmp22) {
                if (cResult[17] === tmp19) {
                  if (cResult[18] === tmp4Result) {
                    if (cResult[19] === tmp27) {
                      let tmp30 = cResult[20];
                    }
                    return tmp30;
                  }
                }
              }
              const obj3 = { disabled: tmp22, backgroundColor: tmp4(tmp2[35]).unsafe_rawColors.GREEN_360, imageStyle: tmp23, accessibilityLabel: tmp24, source: tmp4Result, onPress: tmp19, label: cResult[15], iconPosition: tmp(tmp2[38]).IconPosition.RIGHT };
              const tmp32 = closure_12(tmp(tmp2[38]).LabeledActionButton, obj3);
              cResult[16] = tmp22;
              cResult[17] = tmp19;
              cResult[18] = tmp4Result;
              cResult[19] = cResult[15];
              cResult[20] = tmp32;
              tmp30 = tmp32;
            }
          }
        }
        const intl2 = tmp(tmp2[24]).intl;
        const string = intl2.string;
        let TVBCKZ = tmp(tmp2[24]).t;
        if (isVoiceChannelLocked) {
          TVBCKZ = TVBCKZ.TVBCKZ;
          let stringResult1 = string(TVBCKZ);
        } else if (tmp20) {
          stringResult1 = string(TVBCKZ.rZfiNq);
        } else if (tmp18) {
          stringResult1 = string(TVBCKZ["Bd/Liz"]);
        } else {
          stringResult1 = string(TVBCKZ["96ANUN"]);
        }
        cResult[12] = tmp20;
        cResult[13] = isVoiceChannelLocked;
        cResult[14] = tmp18;
        cResult[15] = stringResult1;
        const tmpResult4 = tmp(tmp2[20]);
      }
    }
  }
  class I {
    constructor() {
      if (null != closure_2) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[33]);
        tmp4 = closure_3;
        result = obj.coerceConsoleTypeToPlatformType(tmp, closure_3);
        if (null != result) {
          tmp15 = closure_0;
          tmp16 = closure_2;
          obj4 = closure_0(closure_2[34]);
          tmp17 = channel;
          return obj4.beginConsoleTransfer(channel, result);
        }
      }
      tmp6 = suppress;
      tmp7 = resetFocus();
      tmp8 = closure_2;
      tmp9 = closure_0(closure_2[1]);
      if (tmp9 != null) {
        NativeModules = tmp9.NativeModules;
        if (NativeModules != null) {
          KeyboardManager = NativeModules.KeyboardManager;
          if (KeyboardManager != null) {
            dismissGlobalKeyboard = KeyboardManager.dismissGlobalKeyboard;
            if (dismissGlobalKeyboard != null) {
              result1 = dismissGlobalKeyboard();
            }
          }
        }
      }
      if (tmp6) {
        tmp11 = closure_6;
        if (!closure_6.getSettings().mute) {
          tmp12 = closure_1;
          obj2 = closure_1(tmp8[25]);
          toggleSelfMuteResult = obj2.toggleSelfMute();
        }
      }
      obj3 = closure_1(tmp8[26]);
      voiceChannel = obj3.selectVoiceChannel(channel.id, false, false);
      return;
    }
  }
  cResult[5] = channel;
  cResult[6] = tmp16;
  cResult[7] = tmp17.selfMute || tmp17.mute || tmp17.suppress;
  cResult[8] = stateFromStores1;
  cResult[9] = I;
  tmp19 = I;
}) : ((channel) => {
  channel = channel.channel;
  importDefault = undefined;
  let stateFromStores1;
  importDefault = require("useVoiceStateForRemoteSession")();
  const items = [GameConsoleStore];
  const stateFromStores = channel(stateFromStores1[30]).useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  let obj = channel(stateFromStores1[30]);
  const items1 = [SessionsStore];
  stateFromStores1 = channel(stateFromStores1[30]).useStateFromStores(items1, () => {
    let str;
    if (sessionId != null) {
      str = sessionId.sessionId;
    }
    if (str == null) {
      str = "";
    }
    const sessionById = SessionsStore.getSessionById(str);
    let os;
    if (sessionById != null) {
      os = sessionById.clientInfo.os;
    }
    return os;
  });
  const tmp6 = require("useGameConsoleAccounts")();
  noop = tmp6;
  const tmp7 = require("useMuteStates")(channel);
  closure_4 = tmp8;
  const items2 = [channel, stateFromStores1, tmp6, tmp7.selfMute || tmp7.mute || tmp7.suppress];
  const callback = noop.useCallback(() => {
    if (null != stateFromStores1) {
      const result = coercePlatformTypeToConsoleType.coerceConsoleTypeToPlatformType(tmp, closure_3);
      if (null != result) {
        return beginConsoleTransfer.beginConsoleTransfer(channel, result);
      }
    }
    resetFocus();
    const tmp9 = _mod17;
    if (tmp9 != null) {
      const NativeModules = tmp9.NativeModules;
      if (NativeModules != null) {
        const KeyboardManager = NativeModules.KeyboardManager;
        if (KeyboardManager != null) {
          const dismissGlobalKeyboard = KeyboardManager.dismissGlobalKeyboard;
          if (dismissGlobalKeyboard != null) {
            const result1 = dismissGlobalKeyboard();
          }
        }
      }
    }
    if (closure_4) {
      if (!MediaEngineStore.getSettings().mute) {
        AudioActionCreatorsDefault.toggleSelfMute();
      }
    }
    const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id, false, false);
  }, items2);
  const tmp10 = require("useIsVoiceChannelFull")(channel);
  let obj2 = channel(stateFromStores1[30]);
  const isVoiceChannelLocked = channel(stateFromStores1[20]).useIsVoiceChannelLocked(channel);
  let tmp13 = tmp10;
  if (!tmp10) {
    tmp13 = isVoiceChannelLocked;
  }
  if (!tmp13) {
    tmp13 = stateFromStores;
  }
  const obj3 = { disabled: tmp13, backgroundColor: require("native").unsafe_rawColors.GREEN_360, imageStyle: null, accessibilityLabel: null, source: null, onPress: null, label: null, iconPosition: null };
  const tmp12 = closure_12;
  const tmp3Result = channel(stateFromStores1[20]);
  obj3.imageStyle = { tintColor: require("native").unsafe_rawColors.WHITE };
  const intl = tmp3(tmp2[24]).intl;
  obj3.accessibilityLabel = intl.string(channel(stateFromStores1[24]).t["96ANUN"]);
  obj3.source = importDefault(tmp7.selfMute || tmp7.mute || tmp7.suppress ? stateFromStores1[36] : stateFromStores1[37]);
  obj3.onPress = callback;
  const intl2 = tmp3(tmp2[24]).intl;
  const string = intl2.string;
  const t = tmp3(tmp2[24]).t;
  if (isVoiceChannelLocked) {
    let stringResult = string(t.TVBCKZ);
  } else if (tmp10) {
    stringResult = string(t.rZfiNq);
  } else if (tmp8) {
    stringResult = string(t["Bd/Liz"]);
  } else {
    stringResult = string(t["96ANUN"]);
  }
  obj3.label = stringResult;
  obj3.iconPosition = channel(stateFromStores1[38]).IconPosition.RIGHT;
  return tmp12(channel(stateFromStores1[38]).LabeledActionButton, obj3);
});
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(568).c(13);
  channel = channel.channel;
  const tmp4 = closure_15();
  const tmp6 = useChannelNameDefault(channel);
  const obj = channel(568);
  const isVoiceChannelLocked = channel(10213).useIsVoiceChannelLocked(channel);
  if (cResult[0] === channel) {
    if (cResult[1] === isVoiceChannelLocked) {
      let tmp8 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { style: { width: 4 } };
      const tmp13 = closure_12(View, obj3);
      cResult[3] = tmp13;
      let tmp10 = tmp13;
    } else {
      tmp10 = cResult[3];
    }
    if (cResult[4] === tmp6) {
      if (cResult[5] === tmp8) {
        let tmp14 = cResult[6];
      }
      if (cResult[7] !== tmp4.spacer) {
        const obj4 = { style: tmp4.spacer };
        const tmp21 = closure_12(View, obj4);
        cResult[7] = tmp4.spacer;
        cResult[8] = tmp21;
        let tmp18 = tmp21;
      } else {
        tmp18 = cResult[8];
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { style: { width: 4 } };
        const tmp25 = closure_12(View, obj5);
        cResult[9] = tmp25;
        let tmp22 = tmp25;
      } else {
        tmp22 = cResult[9];
      }
      if (cResult[10] === tmp14) {
        if (cResult[11] === tmp18) {
          let tmp26 = cResult[12];
        }
        return tmp26;
      }
      const obj6 = { children: null };
      const items = [tmp10, tmp14, tmp18, tmp22];
      obj6.children = items;
      const tmp29 = closure_14(closure_13, obj6);
      cResult[10] = tmp14;
      cResult[11] = tmp18;
      cResult[12] = tmp29;
      tmp26 = tmp29;
    }
    let tmp15 = null;
    if (null != tmp8) {
      const obj7 = { source: tmp5(10294), onPress: tmp8, accessibilityLabel: null };
      const intl = tmp(1119).intl;
      const obj8 = { channelName: tmp6 };
      obj7.accessibilityLabel = intl.formatToPlainString(tmp(1119).t["dHHb/2"], obj8);
      tmp15 = closure_12(tmp5(10293), obj7);
      const tmp5Result = tmp5(10293);
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
      fn = () => instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, { source: InstantInviteSources.VOICE_CHANNEL });
    }
  }
  cResult[0] = channel;
  cResult[1] = isVoiceChannelLocked;
  cResult[2] = fn;
  tmp8 = fn;
}) : ((channel) => {
  channel = channel.channel;
  const tmp = closure_15();
  const tmp4 = useChannelNameDefault(channel);
  const isVoiceChannelLocked = channel(10213).useIsVoiceChannelLocked(channel);
  let fn = null;
  if (PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
    fn = null;
    if (!isVoiceChannelLocked) {
      fn = () => instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, { source: InstantInviteSources.VOICE_CHANNEL });
    }
  }
  const items = [closure_12(View, { style: { width: 4 } }), , , ];
  let tmp9Result = null;
  if (null != fn) {
    const obj2 = { source: tmp2(10294), onPress: fn, accessibilityLabel: null };
    const intl = tmp5(1119).intl;
    const obj3 = { channelName: tmp4 };
    obj2.accessibilityLabel = intl.formatToPlainString(tmp5(1119).t["dHHb/2"], obj3);
    tmp9Result = tmp9(tmp2(10293), obj2);
    const tmp2Result = tmp2(10293);
  }
  const obj4 = { children: null };
  items[1] = tmp9Result;
  items[2] = closure_12(View, { style: tmp.spacer });
  items[3] = closure_12(View, { style: { width: 4 } });
  obj4.children = items;
  return closure_14(closure_13, obj4);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallConnectingScreen.tsx");

export const showVoiceSettingsActionSheet = function showVoiceSettingsActionSheet(guildId) {
  ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_16), "voice settings", { guildId });
};
export const ChannelCallConnectingHeader = tmp3;
export const CallConnectingActionBar = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = c.c(7);
  channel = channel.channel;
  const tmp2 = closure_15();
  if (cResult[0] !== channel) {
    const obj2 = { channel };
    const tmp7 = __initData(closure_17, obj2);
    const obj3 = { channel };
    const tmp9 = __initData(closure_18, obj3);
    cResult[0] = channel;
    cResult[1] = tmp7;
    cResult[2] = tmp9;
    let tmp4 = tmp9;
    let tmp3 = tmp7;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  if (cResult[3] === tmp2.actionBarContainer) {
    if (cResult[4] === tmp3) {
      if (cResult[5] === tmp4) {
        let tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  const obj4 = { style: tmp2.actionBarContainer, children: null };
  const items = [tmp3, tmp4];
  obj4.children = items;
  const tmp11 = state(View, obj4);
  cResult[3] = tmp2.actionBarContainer;
  cResult[4] = tmp3;
  cResult[5] = tmp4;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : ((channel) => {
  channel = channel.channel;
  const obj = { style: closure_15().actionBarContainer, children: null };
  const items = [__initData(closure_17, { channel }), __initData(closure_18, { channel })];
  obj.children = items;
  return state(View, obj);
});
