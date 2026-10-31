// Module ID: 11938
// Function ID: 11939
// Name: ChannelCallConnectingScreen
// Dependencies: [19, 17, 5765, 2006, 4946, 5766, 11000, 1072, 1083, 21, 5014, 11713, 5258, 5272, 1622, 5275, 11939, 5652, 11908, 9118, 11966, 11967, 1113, 1888, 5915, 6706, 5253, 11968, 11859, 504, 11975, 7526, 11976, 11977, 11994, 575, 11782, 11995, 2]
// Exports: CallConnectingActionBar, ChannelCallConnectingHeader, showVoiceSettingsActionSheet

// Module 11938 (ChannelCallConnectingScreen)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 1083 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1622 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1888 */;
import useThemeDefault from "useTheme" /* 5253 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5272 */;
import BottomSheetModal from "BottomSheetModal" /* 5275 */;
import useChannelNameDefault from "useChannelName" /* 5652 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5915 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6706 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9118 */;
import ChannelCallStore from "ChannelCallStore" /* 11000 */;
import useActionBarHeight from "useActionBarHeight" /* 11713 */;
import UserSettingsVoiceDefault from "UserSettingsVoice" /* 11939 */;
import VoiceChatHeaderIconDefault from "VoiceChatHeaderIcon" /* 11966 */;
import AssetRegistryDefault from "AssetRegistry" /* 11967 */;
import ChannelCallMicButton from "ChannelCallMicButton" /* 11968 */;
import coercePlatformTypeToConsoleType from "coercePlatformTypeToConsoleType" /* 11976 */;
import beginConsoleTransfer from "beginConsoleTransfer" /* 11977 */;
import react_mod from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5765 */;
import MediaEngineStore from "MediaEngineStore" /* 2006 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import SessionsStore from "SessionsStore" /* 5766 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
  const obj = { scrollable: true, startExpanded: obj2.isMetaQuest(), children: authStore2(BottomSheetScrollView, obj3) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = MetaQuestUtils;
  obj3 = { children: authStore2(UserSettingsVoiceDefault, {}) };
  BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  return authStore2(BottomSheet, obj);
}
function JoinMutedButton(channel) {
  channel = channel.channel;
  const obj = { channel, disableTint: "light" === useThemeDefault(), isSmallSize: false };
  return authStore2(ChannelCallMicButton.ChannelCallMicButton, obj);
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
  let obj = channel(stateFromStores1[29]);
  const items = [GameConsoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => null != awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  let obj2 = channel(stateFromStores1[29]);
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
  const items2 = [channel, stateFromStores1, tmp6, tmp8];
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
  const tmp10 = tmp(stateFromStores1[18])(channel);
  const tmp3Result = channel(stateFromStores1[18]);
  const isVoiceChannelLocked = tmp3Result.useIsVoiceChannelLocked(channel);
  let tmp13 = tmp10;
  const LabeledActionButton = tmp3(tmp2[34]).LabeledActionButton;
  const tmp12 = closure_12;
  if (!tmp10) {
    tmp13 = isVoiceChannelLocked;
  }
  if (!tmp13) {
    tmp13 = stateFromStores;
  }
  let obj3 = { disabled: tmp13, backgroundColor: tmp(tmp2[35]).unsafe_rawColors.GREEN_360, imageStyle: obj4, accessibilityLabel: intl.string(tmp3(tmp2[22]).t["96ANUN"]), source: tmp(tmp8 ? tmp2[36] : tmp2[37]), onPress: callback, label: stringResult, iconPosition: tmp3(tmp2[34]).IconPosition.RIGHT };
  obj4 = { tintColor: tmp(tmp2[35]).unsafe_rawColors.WHITE };
  intl = tmp3(tmp2[22]).intl;
  const intl2 = tmp3(tmp2[22]).intl;
  const string = intl2.string;
  const t = tmp3(tmp2[22]).t;
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

export function showVoiceSettingsActionSheet(guildId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { guildId };
  obj.openLazy(() => Promise.resolve(VoiceSettingsActionSheet), "voice settings", obj2);
}
export function ChannelCallConnectingHeader(channel) {
  let intl;
  let obj3;
  channel = channel.channel;
  const tmp = closure_15();
  const tmp4 = useChannelNameDefault(channel);
  let obj = channel(11908);
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
    let obj2 = { source: AssetRegistryDefault, onPress: fn, accessibilityLabel: intl.formatToPlainString(channel(1113).t["dHHb/2"], obj3) };
    const tmp2Result = VoiceChatHeaderIconDefault;
    intl = tmp5(1113).intl;
    obj3 = { channelName: tmp4 };
    tmp9Result = tmp9(tmp2Result, obj2);
  }
  const obj4 = { children: items };
  items[1] = tmp9Result;
  const obj5 = { style: tmp.spacer };
  items[2] = closure_12(View, obj5);
  items[3] = closure_12(View, { style: { width: 4 } });
  return tmp7(tmp8, obj4);
}
export function CallConnectingActionBar(channel) {
  let items;
  channel = channel.channel;
  const obj = { style: closure_15().actionBarContainer, children: items };
  items = [authStore2(JoinMutedButton, { channel }), authStore2(JoinVoiceButton, { channel })];
  return authStore3(View, obj);
}
