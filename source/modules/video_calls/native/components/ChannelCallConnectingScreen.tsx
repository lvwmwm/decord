// Module ID: 10698
// Function ID: 83308
// Name: VoiceSettingsActionSheet
// Dependencies: []
// Exports: CallConnectingActionBar, ChannelCallConnectingHeader, showVoiceSettingsActionSheet

// Module 10698 (VoiceSettingsActionSheet)
function VoiceSettingsActionSheet() {
  let obj = { scrollable: true };
  obj = { children: callback(importDefault(dependencyMap[15]), {}) };
  obj.children = callback(arg1(dependencyMap[14]).BottomSheetScrollView, obj);
  return callback(arg1(dependencyMap[13]).BottomSheet, obj);
}
function JoinMutedButton(channel) {
  const tmp = importDefault(dependencyMap[24])();
  return callback(arg1(dependencyMap[25]).ChannelCallMicButton, { channel: channel.channel, disableTint: "light" === importDefault(dependencyMap[24])(), isSmallSize: false });
}
function JoinVoiceButton(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let View;
  const importDefault = importDefault(dependencyMap[26])();
  let obj = arg1(dependencyMap[27]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const items1 = [closure_8];
  const stateFromStores1 = arg1(dependencyMap[27]).useStateFromStores(items1, () => {
    let sessionId;
    if (null != lib) {
      sessionId = lib.sessionId;
    }
    let str = "";
    if (null != sessionId) {
      str = sessionId;
    }
    const sessionById = sessionById.getSessionById(str);
    let os;
    if (null != sessionById) {
      os = sessionById.clientInfo.os;
    }
    return os;
  });
  const dependencyMap = stateFromStores1;
  const tmp3 = importDefault(dependencyMap[28])();
  const React = tmp3;
  const tmp4 = importDefault(dependencyMap[29])(channel);
  View = tmp5;
  const items2 = [channel, stateFromStores1, tmp3, tmp4.selfMute || tmp4.mute || tmp4.suppress];
  const callback = React.useCallback(() => {
    if (null != stateFromStores1) {
      const result = channel(stateFromStores1[30]).coerceConsoleTypeToPlatformType(stateFromStores1, tmp3);
      if (null != result) {
        return channel(stateFromStores1[31]).beginConsoleTransfer(channel, result);
      }
      const obj = channel(stateFromStores1[30]);
    }
    callback();
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
    if (tmp5) {
      if (!settings.getSettings().mute) {
        lib(stateFromStores1[22]).toggleSelfMute();
        const obj3 = lib(stateFromStores1[22]);
      }
    }
    const voiceChannel = lib(stateFromStores1[23]).selectVoiceChannel(channel.id, false, false);
  }, items2);
  const tmp7 = importDefault(dependencyMap[17])(channel);
  const obj2 = arg1(dependencyMap[27]);
  const isVoiceChannelLocked = arg1(dependencyMap[17]).useIsVoiceChannelLocked(channel);
  obj = {};
  let tmp10 = tmp7;
  if (!tmp7) {
    tmp10 = isVoiceChannelLocked;
  }
  if (!tmp10) {
    tmp10 = stateFromStores;
  }
  obj.disabled = tmp10;
  obj.backgroundColor = importDefault(dependencyMap[33]).unsafe_rawColors.GREEN_360;
  obj = { tintColor: importDefault(dependencyMap[33]).unsafe_rawColors.WHITE };
  obj.imageStyle = obj;
  const intl = arg1(dependencyMap[21]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[21]).t.96ANUN);
  if (tmp4.selfMute || tmp4.mute || tmp4.suppress) {
    let tmp13 = tmp12[34];
  } else {
    tmp13 = tmp12[35];
  }
  obj.source = importDefault(tmp13);
  obj.onPress = callback;
  const intl2 = arg1(dependencyMap[21]).intl;
  const string = intl2.string;
  const t = arg1(dependencyMap[21]).t;
  if (isVoiceChannelLocked) {
    let stringResult = string(t.TVBCKZ);
  } else if (tmp7) {
    stringResult = string(t.rZfiNq);
  } else if (tmp5) {
    stringResult = string(t.Bd/Liz);
  } else {
    stringResult = string(t.96ANUN);
  }
  obj.label = stringResult;
  obj.iconPosition = arg1(dependencyMap[32]).IconPosition.RIGHT;
  return closure_12(arg1(dependencyMap[32]).LabeledActionButton, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const resetFocus = arg1(dependencyMap[6]).resetFocus;
const InstantInviteSources = arg1(dependencyMap[7]).InstantInviteSources;
const Permissions = arg1(dependencyMap[8]).Permissions;
({ jsx: closure_12, Fragment: closure_13, jsxs: closure_14 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = { spacer: { width: 8 } };
obj = { height: arg1(dependencyMap[11]).CALL_ACTION_BAR_HEIGHT };
obj.actionBarContainer = obj;
let closure_15 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/video_calls/native/components/ChannelCallConnectingScreen.tsx");

export const showVoiceSettingsActionSheet = function showVoiceSettingsActionSheet(guildId) {
  let obj = importDefault(dependencyMap[12]);
  obj = { guildId };
  obj.openLazy(() => Promise.resolve(closure_16), "voice settings", obj);
};
export const ChannelCallConnectingHeader = function ChannelCallConnectingHeader(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback3();
  let obj = arg1(dependencyMap[17]);
  const isVoiceChannelLocked = obj.useIsVoiceChannelLocked(channel);
  let fn = null;
  if (closure_7.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
    fn = null;
    if (!isVoiceChannelLocked) {
      fn = () => {
        let obj = channel(closure_2[18]);
        obj = { source: constants.VOICE_CHANNEL };
        return obj.showInstantInviteActionSheet(channel, obj);
      };
    }
  }
  obj = {};
  const items = [callback(View, { style: { width: 4 } }), , , ];
  let tmp6 = null;
  if (null != fn) {
    obj = { source: importDefault(dependencyMap[20]), onPress: fn };
    const intl = arg1(dependencyMap[21]).intl;
    const obj1 = { channelName: tmp2 };
    obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[21]).t.dHHb/2, obj1);
    tmp6 = callback(importDefault(dependencyMap[19]), obj);
    const tmp10 = importDefault(dependencyMap[19]);
  }
  items[1] = tmp6;
  items[2] = callback(View, { style: tmp.spacer });
  items[3] = callback(View, { style: { width: 4 } });
  obj.children = items;
  return closure_14(closure_13, obj);
};
export const CallConnectingActionBar = function CallConnectingActionBar(channel) {
  channel = channel.channel;
  const obj = { style: callback3().actionBarContainer };
  const items = [callback(JoinMutedButton, { channel }), callback(JoinVoiceButton, { channel })];
  obj.children = items;
  return callback2(View, obj);
};
