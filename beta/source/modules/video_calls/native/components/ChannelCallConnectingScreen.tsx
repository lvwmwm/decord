// Module ID: 9433
// Function ID: 9434
// Name: ChannelCallConnectingScreen
// Dependencies: [19, 17, 4853, 1993, 4469, 4854, 8829, 1074, 1085, 21, 4836, 8854, 4800, 6571, 1610, 6045, 9434, 4989, 9394, 9275, 9460, 9461, 1115, 9104, 5723, 4767, 9462, 8962, 504, 9240, 6763, 9469, 9242, 9470, 576, 8907, 9471, 2]
// Exports: CallConnectingActionBar, ChannelCallConnectingHeader, showVoiceSettingsActionSheet

// Module 9433 (ChannelCallConnectingScreen)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 1085 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import useThemeDefault from "useTheme" /* 4767 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5723 */;
import BottomSheetModal from "BottomSheetModal" /* 6045 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import ChannelCallStore from "ChannelCallStore" /* 8829 */;
import useActionBarHeight from "useActionBarHeight" /* 8854 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9104 */;
import beginConsoleTransfer from "beginConsoleTransfer" /* 9242 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9275 */;
import UserSettingsVoiceDefault from "UserSettingsVoice" /* 9434 */;
import VoiceChatHeaderIconDefault from "VoiceChatHeaderIcon" /* 9460 */;
import AssetRegistryDefault from "AssetRegistry" /* 9461 */;
import ChannelCallMicButton from "ChannelCallMicButton" /* 9462 */;
import coercePlatformTypeToConsoleType from "coercePlatformTypeToConsoleType" /* 9469 */;
import react_mod from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4853 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SessionsStore from "SessionsStore" /* 4854 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, importDefault;

let closure_12;
let closure_14;
let map1;
let obj2;
function VoiceSettingsActionSheet() {
  let BottomSheetScrollView;
  let obj2;
  let obj3;
  const obj = { scrollable: true, startExpanded: obj2.isMetaQuest(), children: closure_12(BottomSheetScrollView, obj3) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = MetaQuestUtils;
  obj3 = { children: closure_12(UserSettingsVoiceDefault, {}) };
  BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  return closure_12(BottomSheet, obj);
}
function JoinMutedButton(channel) {
  channel = channel.channel;
  const obj = { channel, disableTint: "light" === useThemeDefault(), isSmallSize: false };
  return closure_12(ChannelCallMicButton.ChannelCallMicButton, obj);
}
function JoinVoiceButton(channel) {
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
  let obj = channel(stateFromStores1[28]);
  const items = [GameConsoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  let obj2 = channel(stateFromStores1[28]);
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
  let tmp6 = require("useGameConsoleAccounts")();
  react = tmp6;
  const tmp7 = require("useMuteStates")(channel);
  let tmp8 = tmp7.selfMute || tmp7.mute || tmp7.suppress;
  let closure_4 = tmp8;
  const items2 = [channel, stateFromStores1, tmp6, tmp8];
  const callback = react.useCallback(() => {
    if (null != stateFromStores1) {
      const obj = coercePlatformTypeToConsoleType;
      const result = obj.coerceConsoleTypeToPlatformType(tmp, closure_3);
      if (null != result) {
        const obj4 = beginConsoleTransfer;
        return obj4.beginConsoleTransfer(channel, result);
      }
    }
    const id = channel.id;
    resetFocus();
    const tmp8 = react_native;
    const tmp6 = closure_4;
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
    if (tmp6) {
      if (!MediaEngineStore.getSettings().mute) {
        const obj2 = AudioActionCreatorsDefault;
        obj2.toggleSelfMute();
      }
    }
    const obj3 = SelectedChannelActionCreatorsDefault;
    const voiceChannel = obj3.selectVoiceChannel(id, false, false);
  }, items2);
  const tmp10 = tmp(stateFromStores1[18])(channel);
  const tmp3Result = channel(stateFromStores1[18]);
  const isVoiceChannelLocked = tmp3Result.useIsVoiceChannelLocked(channel);
  let tmp13 = tmp10;
  const LabeledActionButton = tmp3(tmp2[33]).LabeledActionButton;
  const tmp12 = closure_12;
  if (!tmp10) {
    tmp13 = isVoiceChannelLocked;
  }
  if (!tmp13) {
    tmp13 = stateFromStores;
  }
  let obj3 = { disabled: tmp13, backgroundColor: tmp(tmp2[34]).unsafe_rawColors.GREEN_360, imageStyle: obj4, accessibilityLabel: intl.string(tmp3(tmp2[22]).t["96ANUN"]), source: tmp(tmp8 ? tmp2[35] : tmp2[36]), onPress: callback, label: stringResult, iconPosition: tmp3(tmp2[33]).IconPosition.RIGHT };
  obj4 = { tintColor: tmp(tmp2[34]).unsafe_rawColors.WHITE };
  intl = tmp3(tmp2[22]).intl;
  const intl2 = tmp3(tmp2[22]).intl;
  const string = intl2.string;
  const t = tmp3(tmp2[22]).t;
  if (isVoiceChannelLocked) {
    stringResult = string(t.TVBCKZ);
  } else if (tmp10) {
    stringResult = string(t.rZfiNq);
  } else if (tmp8) {
    stringResult = string(t["Bd/Liz"]);
  } else {
    stringResult = string(t["96ANUN"]);
  }
  return tmp12(LabeledActionButton, obj3);
}
let react = react_mod;
const View = react_native.View;
const resetFocus = ChannelCallStore.resetFocus;
const InstantInviteSources = Constants.InstantInviteSources;
const Permissions = Constants2.Permissions;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let obj = { spacer: { width: 8 }, actionBarContainer: obj2 };
obj2 = { paddingHorizontal: 12, paddingTop: 16, justifyContent: "center", alignItems: "flex-start", flexDirection: "row", height: useActionBarHeight.CALL_ACTION_BAR_HEIGHT };
let closure_15 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallConnectingScreen.tsx");

export const showVoiceSettingsActionSheet = function showVoiceSettingsActionSheet(guildId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { guildId };
  obj.openLazy(() => Promise.resolve(VoiceSettingsActionSheet), "voice settings", obj2);
};
export const ChannelCallConnectingHeader = function ChannelCallConnectingHeader(channel) {
  let intl;
  let obj3;
  channel = channel.channel;
  const tmp = closure_15();
  const tmp4 = useChannelNameDefault(channel);
  let obj = channel(9394);
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
    let obj2 = { source: AssetRegistryDefault, onPress: fn, accessibilityLabel: intl.formatToPlainString(channel(1115).t["dHHb/2"], obj3) };
    const tmp2Result = VoiceChatHeaderIconDefault;
    intl = tmp5(1115).intl;
    obj3 = { channelName: tmp4 };
    tmp9Result = tmp9(tmp2Result, obj2);
  }
  const obj4 = { children: items };
  items[1] = tmp9Result;
  const obj5 = { style: tmp.spacer };
  items[2] = closure_12(View, obj5);
  items[3] = closure_12(View, { style: { width: 4 } });
  return tmp7(tmp8, obj4);
};
export const CallConnectingActionBar = function CallConnectingActionBar(channel) {
  let items;
  channel = channel.channel;
  const obj = { style: closure_15().actionBarContainer, children: items };
  items = [closure_12(JoinMutedButton, { channel }), closure_12(JoinVoiceButton, { channel })];
  return authStore2(View, obj);
};
