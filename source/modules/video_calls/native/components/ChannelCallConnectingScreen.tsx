// Module ID: 10708
// Function ID: 83357
// Name: VoiceSettingsActionSheet
// Dependencies: [31, 27, 4144, 4177, 3758, 4145, 10210, 653, 482, 33, 4130, 10548, 4098, 5187, 5189, 10709, 4320, 10679, 8481, 10730, 10731, 1212, 8843, 4944, 4066, 10732, 8934, 566, 8933, 5740, 10739, 9039, 10740, 689, 10593, 10741, 2]
// Exports: CallConnectingActionBar, ChannelCallConnectingHeader, showVoiceSettingsActionSheet

// Module 10708 (VoiceSettingsActionSheet)
import _beginConsoleTransfer from "_beginConsoleTransfer";
import { View } from "initialize";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { resetFocus } from "resetFocusTimer";
import { InstantInviteSources } from "ME";
import { Permissions } from "sum";
import jsxProd from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
const require = arg1;
function VoiceSettingsActionSheet() {
  let obj = { scrollable: true };
  obj = { children: callback(importDefault(10709), {}) };
  obj.children = callback(require(5189) /* BottomSheetModal */.BottomSheetScrollView, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
}
function JoinMutedButton(channel) {
  const tmp = importDefault(4066)();
  return callback(require(10732) /* ChannelCallMicButton */.ChannelCallMicButton, { channel: channel.channel, disableTint: "light" === importDefault(4066)(), isSmallSize: false });
}
function JoinVoiceButton(channel) {
  channel = channel.channel;
  let c4;
  importDefault = importDefault(stateFromStores1[26])();
  let obj = channel(stateFromStores1[27]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => null != outer1_5.getAwaitingRemoteSessionInfo());
  const items1 = [closure_8];
  stateFromStores1 = channel(stateFromStores1[27]).useStateFromStores(items1, () => {
    let sessionId;
    if (null != lib) {
      sessionId = lib.sessionId;
    }
    let str = "";
    if (null != sessionId) {
      str = sessionId;
    }
    const sessionById = outer1_8.getSessionById(str);
    let os;
    if (null != sessionById) {
      os = sessionById.clientInfo.os;
    }
    return os;
  });
  const tmp3 = importDefault(stateFromStores1[28])();
  const React = tmp3;
  const tmp4 = importDefault(stateFromStores1[29])(channel);
  c4 = tmp5;
  const items2 = [channel, stateFromStores1, tmp3, tmp4.selfMute || tmp4.mute || tmp4.suppress];
  const callback = React.useCallback(() => {
    if (null != stateFromStores1) {
      const result = channel(stateFromStores1[30]).coerceConsoleTypeToPlatformType(stateFromStores1, _beginConsoleTransfer);
      if (null != result) {
        return channel(stateFromStores1[31]).beginConsoleTransfer(channel, result);
      }
      const obj = channel(stateFromStores1[30]);
    }
    outer1_9();
    const tmp8 = channel(stateFromStores1[1]);
    let tmp9 = null == tmp8;
    let tmp10 = tmp8;
    if (!tmp9) {
      const NativeModules = tmp8.NativeModules;
      tmp9 = null == NativeModules;
      tmp10 = NativeModules;
    }
    let obj2 = tmp10;
    if (!tmp9) {
      const KeyboardManager = tmp10.KeyboardManager;
      tmp9 = null == KeyboardManager;
      obj2 = KeyboardManager;
    }
    if (!tmp9) {
      tmp9 = null == obj2.dismissGlobalKeyboard;
    }
    if (!tmp9) {
      const result1 = obj2.dismissGlobalKeyboard();
    }
    if (c4) {
      if (!outer1_6.getSettings().mute) {
        lib(stateFromStores1[22]).toggleSelfMute();
        const obj3 = lib(stateFromStores1[22]);
      }
    }
    const voiceChannel = lib(stateFromStores1[23]).selectVoiceChannel(channel.id, false, false);
  }, items2);
  const tmp7 = importDefault(stateFromStores1[17])(channel);
  let obj2 = channel(stateFromStores1[27]);
  const isVoiceChannelLocked = channel(stateFromStores1[17]).useIsVoiceChannelLocked(channel);
  obj = {};
  let tmp10 = tmp7;
  if (!tmp7) {
    tmp10 = isVoiceChannelLocked;
  }
  if (!tmp10) {
    tmp10 = stateFromStores;
  }
  obj.disabled = tmp10;
  obj.backgroundColor = importDefault(stateFromStores1[33]).unsafe_rawColors.GREEN_360;
  obj = { tintColor: importDefault(stateFromStores1[33]).unsafe_rawColors.WHITE };
  obj.imageStyle = obj;
  const intl = channel(stateFromStores1[21]).intl;
  obj.accessibilityLabel = intl.string(channel(stateFromStores1[21]).t["96ANUN"]);
  if (tmp4.selfMute || tmp4.mute || tmp4.suppress) {
    let tmp13 = tmp12[34];
  } else {
    tmp13 = tmp12[35];
  }
  obj.source = importDefault(tmp13);
  obj.onPress = callback;
  const intl2 = channel(stateFromStores1[21]).intl;
  const string = intl2.string;
  const t = channel(stateFromStores1[21]).t;
  if (isVoiceChannelLocked) {
    let stringResult = string(t.TVBCKZ);
  } else if (tmp7) {
    stringResult = string(t.rZfiNq);
  } else if (tmp5) {
    stringResult = string(t["Bd/Liz"]);
  } else {
    stringResult = string(t["96ANUN"]);
  }
  obj.label = stringResult;
  obj.iconPosition = channel(stateFromStores1[32]).IconPosition.RIGHT;
  return closure_12(channel(stateFromStores1[32]).LabeledActionButton, obj);
}
({ jsx: closure_12, Fragment: closure_13, jsxs: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = { spacer: { width: 8 } };
_createForOfIteratorHelperLoose = { paddingHorizontal: 12, paddingTop: 16, justifyContent: "center", alignItems: "flex-start", flexDirection: "row", height: require("sum").CALL_ACTION_BAR_HEIGHT };
_createForOfIteratorHelperLoose.actionBarContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_calls/native/components/ChannelCallConnectingScreen.tsx");

export const showVoiceSettingsActionSheet = function showVoiceSettingsActionSheet(guildId) {
  let obj = importDefault(4098);
  obj = { guildId };
  obj.openLazy(() => Promise.resolve(outer1_16), "voice settings", obj);
};
export const ChannelCallConnectingHeader = function ChannelCallConnectingHeader(channel) {
  channel = channel.channel;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channel(10679);
  const isVoiceChannelLocked = obj.useIsVoiceChannelLocked(channel);
  let fn = null;
  if (closure_7.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
    fn = null;
    if (!isVoiceChannelLocked) {
      fn = () => {
        let obj = channel(outer1_2[18]);
        obj = { source: outer1_10.VOICE_CHANNEL };
        return obj.showInstantInviteActionSheet(channel, obj);
      };
    }
  }
  obj = {};
  const items = [callback(View, { style: { width: 4 } }), , , ];
  let tmp6 = null;
  if (null != fn) {
    obj = { source: importDefault(10731), onPress: fn };
    const intl = channel(1212).intl;
    const obj1 = { channelName: tmp2 };
    obj.accessibilityLabel = intl.formatToPlainString(channel(1212).t["dHHb/2"], obj1);
    tmp6 = callback(importDefault(10730), obj);
    const tmp10 = importDefault(10730);
  }
  items[1] = tmp6;
  items[2] = callback(View, { style: tmp.spacer });
  items[3] = callback(View, { style: { width: 4 } });
  obj.children = items;
  return closure_14(closure_13, obj);
};
export const CallConnectingActionBar = function CallConnectingActionBar(channel) {
  channel = channel.channel;
  const obj = { style: _createForOfIteratorHelperLoose().actionBarContainer };
  const items = [callback(JoinMutedButton, { channel }), callback(JoinVoiceButton, { channel })];
  obj.children = items;
  return callback2(View, obj);
};
