// Module ID: 10274
// Function ID: 10275
// Name: ChannelCallConnectingScreen
// Dependencies: [19, 17, 4805, 1992, 4427, 4806, 9672, 1074, 1085, 21, 4788, 9697, 4755, 7427, 1609, 6901, 10275, 4941, 10234, 10115, 10296, 10297, 1115, 9943, 5660, 4722, 10298, 9801, 504, 10080, 7619, 10305, 10082, 10306, 576, 9747, 10307, 2]
// Exports: CallConnectingActionBar, ChannelCallConnectingHeader, showVoiceSettingsActionSheet

// Module 10274 (ChannelCallConnectingScreen)
import _mod17 from "module_17" /* 17 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
import useThemeDefault from "useTheme" /* 4722 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import useChannelNameDefault from "useChannelName" /* 4941 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5660 */;
import BottomSheetModal from "BottomSheetModal" /* 6901 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7427 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9943 */;
import beginConsoleTransfer from "beginConsoleTransfer" /* 10082 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 10115 */;
import UserSettingsVoiceDefault from "UserSettingsVoice" /* 10275 */;
import ChannelCallMicButton from "ChannelCallMicButton" /* 10298 */;
import coercePlatformTypeToConsoleType from "coercePlatformTypeToConsoleType" /* 10305 */;
import noop from "module_19" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4805 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import PermissionStore from "PermissionStore" /* 4427 */;
import SessionsStore from "SessionsStore" /* 4806 */;

require = fn;
function VoiceSettingsActionSheet() {
  const obj = { scrollable: true, startExpanded: MetaQuestUtils.isMetaQuest(), children: null };
  obj.children = closure_1_12(BottomSheetModal.BottomSheetScrollView, { children: closure_1_12(UserSettingsVoiceDefault, {}) });
  return closure_1_12(Sheet_BottomSheet.BottomSheet, obj);
}
function JoinMutedButton(channel) {
  const tmp = useThemeDefault();
  return closure_1_12(ChannelCallMicButton.ChannelCallMicButton, { channel: channel.channel, disableTint: "light" === useThemeDefault(), isSmallSize: false });
}
function JoinVoiceButton(channel) {
  channel = channel.channel;
  importDefault = undefined;
  let stateFromStores1;
  importDefault = require("useVoiceStateForRemoteSession")();
  const items = [GameConsoleStore];
  const stateFromStores = channel(stateFromStores1[28]).useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  let obj = channel(stateFromStores1[28]);
  const items1 = [SessionsStore];
  stateFromStores1 = channel(stateFromStores1[28]).useStateFromStores(items1, () => {
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
    const tmp8 = _mod17;
    if (tmp8 != null) {
      const NativeModules = tmp8.NativeModules;
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
  let obj2 = channel(stateFromStores1[28]);
  const isVoiceChannelLocked = channel(stateFromStores1[18]).useIsVoiceChannelLocked(channel);
  let tmp13 = tmp10;
  if (!tmp10) {
    tmp13 = isVoiceChannelLocked;
  }
  if (!tmp13) {
    tmp13 = stateFromStores;
  }
  const obj3 = { disabled: tmp13, backgroundColor: require("native").unsafe_rawColors.GREEN_360, imageStyle: null, accessibilityLabel: null, source: null, onPress: null, label: null, iconPosition: null };
  const tmp12 = closure_12;
  const tmp3Result = channel(stateFromStores1[18]);
  obj3.imageStyle = { tintColor: require("native").unsafe_rawColors.WHITE };
  const intl = tmp3(tmp2[22]).intl;
  obj3.accessibilityLabel = intl.string(channel(stateFromStores1[22]).t["96ANUN"]);
  obj3.source = importDefault(tmp7.selfMute || tmp7.mute || tmp7.suppress ? stateFromStores1[35] : stateFromStores1[36]);
  obj3.onPress = callback;
  const intl2 = tmp3(tmp2[22]).intl;
  const string = intl2.string;
  const t = tmp3(tmp2[22]).t;
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
  obj3.iconPosition = channel(stateFromStores1[33]).IconPosition.RIGHT;
  return tmp12(channel(stateFromStores1[33]).LabeledActionButton, obj3);
}
const View = fn(17).View;
const resetFocus = fn(9672).resetFocus;
const InstantInviteSources = fn(1074).InstantInviteSources;
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4788);
let obj2 = { spacer: { width: 8 }, actionBarContainer: { paddingHorizontal: 12, paddingTop: 16, justifyContent: "center", alignItems: "flex-start", flexDirection: "row", height: fn(9697).CALL_ACTION_BAR_HEIGHT } };
let closure_15 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallConnectingScreen.tsx");

export const showVoiceSettingsActionSheet = function showVoiceSettingsActionSheet(guildId) {
  ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(VoiceSettingsActionSheet), "voice settings", { guildId });
};
export const ChannelCallConnectingHeader = function ChannelCallConnectingHeader(channel) {
  channel = channel.channel;
  const tmp = closure_15();
  const tmp4 = useChannelNameDefault(channel);
  const isVoiceChannelLocked = channel(10234).useIsVoiceChannelLocked(channel);
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
    const obj2 = { source: tmp2(10297), onPress: fn, accessibilityLabel: null };
    const intl = tmp5(1115).intl;
    const obj3 = { channelName: tmp4 };
    obj2.accessibilityLabel = intl.formatToPlainString(tmp5(1115).t["dHHb/2"], obj3);
    tmp9Result = tmp9(tmp2(10296), obj2);
    const tmp2Result = tmp2(10296);
  }
  const obj4 = { children: null };
  items[1] = tmp9Result;
  items[2] = closure_12(View, { style: tmp.spacer });
  items[3] = closure_12(View, { style: { width: 4 } });
  obj4.children = items;
  return closure_14(closure_13, obj4);
};
export const CallConnectingActionBar = function CallConnectingActionBar(channel) {
  channel = channel.channel;
  const obj = { style: closure_15().actionBarContainer, children: null };
  const items = [closure_1_12(JoinMutedButton, { channel }), closure_1_12(JoinVoiceButton, { channel })];
  obj.children = items;
  return closure_1_14(View, obj);
};
