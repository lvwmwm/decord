// Module ID: 10388
// Function ID: 10389
// Name: ChannelCallConnectingScreen
// Dependencies: [19, 17, 5852, 2132, 4975, 5853, 10009, 1071, 1082, 21, 5043, 10032, 5257, 5271, 1626, 5275, 10389, 5659, 10345, 10429, 10500, 10501, 1112, 2019, 5996, 6797, 5252, 10502, 10270, 504, 10509, 10406, 10510, 10511, 10528, 575, 10187, 10529, 2]
// Exports: CallConnectingActionBar, ChannelCallConnectingHeader, showVoiceSettingsActionSheet

// Module 10388 (ChannelCallConnectingScreen)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1071 */;
import Constants2 from "Constants" /* 1082 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1626 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 2019 */;
import useThemeDefault from "useTheme" /* 5252 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5271 */;
import BottomSheetModal from "BottomSheetModal" /* 5275 */;
import useChannelNameDefault from "useChannelName" /* 5659 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5996 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6797 */;
import ChannelCallStore from "ChannelCallStore" /* 10009 */;
import useActionBarHeight from "useActionBarHeight" /* 10032 */;
import UserSettingsVoiceDefault from "UserSettingsVoice" /* 10389 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 10429 */;
import VoiceChatHeaderIconDefault from "VoiceChatHeaderIcon" /* 10500 */;
import AssetRegistryDefault from "AssetRegistry" /* 10501 */;
import ChannelCallMicButton from "ChannelCallMicButton" /* 10502 */;
import coercePlatformTypeToConsoleType from "coercePlatformTypeToConsoleType" /* 10510 */;
import beginConsoleTransfer from "beginConsoleTransfer" /* 10511 */;
import react_mod from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5852 */;
import MediaEngineStore from "MediaEngineStore" /* 2132 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import SessionsStore from "SessionsStore" /* 5853 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let closure_12;
let closure_14;
let map1;
let obj2;
function VoiceSettingsActionSheet() {
  let BottomSheetScrollView;
  let obj2;
  let obj3;
  const obj = { scrollable: true, startExpanded: obj2.isMetaQuest(), children: authStore2(BottomSheetScrollView, obj3) };
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
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
  let obj = channel(10345);
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
    let obj2 = { source: AssetRegistryDefault, onPress: fn, accessibilityLabel: intl.formatToPlainString(channel(1112).t["dHHb/2"], obj3) };
    const tmp2Result = VoiceChatHeaderIconDefault;
    intl = tmp5(1112).intl;
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
  return gesture(View, obj);
}
