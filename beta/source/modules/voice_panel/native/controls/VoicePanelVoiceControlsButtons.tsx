// Module ID: 17034
// Function ID: 17035
// Name: VoicePanelVoiceControlsButtons
// Dependencies: [32, 19, 2044, 4852, 1184, 8844, 4858, 502, 1993, 4855, 1074, 17035, 4861, 21, 5204, 17036, 1981, 1115, 9240, 5999, 9394, 504, 4528, 9241, 9258, 5917, 5923, 11754, 16995, 5374, 5385, 17023, 12024, 9408, 1241, 9477, 9442, 1364, 576, 9104, 6621, 9136, 16942, 9097, 9127, 5924, 16927, 16880, 9492, 9461, 5037, 9569, 9407, 17037, 8680, 10915, 8765, 17038, 8087, 573, 9433, 6798, 16941, 2]
// Exports: ActivitiesButton, AudioRouteButton, ChatButton, DeafenSwitch, GameConsoles, HideNonVideoParticipants, HideSelfVideo, InviteButton, LeaveActivitiesButton, RTCDebugPanelButton, ReportStreamIssueButton, ScreenshareButton, ShareActivityLogsButton, SoundboardButton, StreamVolumeItem, ToggleShowActivitiesDebugOverlay, VoiceSettingsButton

// Module 17034 (VoicePanelVoiceControlsButtons)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import Constants2 from "Constants" /* 4861 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5037 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import TableRow2 from "TableRow" /* 5917 */;
import TableRowIcon2 from "TableRowIcon" /* 5923 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import TableSwitchRow2 from "TableSwitchRow" /* 6621 */;
import AssetRegistryDefault from "AssetRegistry" /* 8087 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8765 */;
import CallsUtils from "CallsUtils" /* 9097 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9104 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 9127 */;
import HeadphonesSlashIcon from "HeadphonesSlashIcon" /* 9136 */;
import useGameConsoleAccountsDefault from "useGameConsoleAccounts" /* 9240 */;
import useIsVoiceChannelFullDefault from "useIsVoiceChannelFull" /* 9394 */;
import ChannelCallConnectingScreen from "ChannelCallConnectingScreen" /* 9433 */;
import VolumeSliderDefault from "VolumeSlider" /* 9442 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 9477 */;
import GroupPlusIcon from "GroupPlusIcon" /* 9492 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10915 */;
import SoundboardIcon from "SoundboardIcon" /* 12024 */;
import useInviteMembersCallback from "useInviteMembersCallback" /* 16880 */;
import useCanInviteMembers from "useCanInviteMembers" /* 16927 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 16941 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 16942 */;
import useSoundboardConfig from "useSoundboardConfig" /* 17023 */;
import HideSelfStreamAndVideoConstants from "HideSelfStreamAndVideoConstants" /* 17035 */;
import useHideSelfVideoDefault from "useHideSelfVideo" /* 17037 */;
import ChannelCallUtils from "ChannelCallUtils" /* 17038 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 8844 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useSoundboardConfigDefault = useSoundboardConfig;
let _require, closure_0, currentEmbeddedActivity, dependencyMap, importDefault, lastActiveStream;

let closure_14;
let map1;
let tmp4;
const AssetRegistryDefault2 = tmp4(9461);
class GameConsoleAccountButton {
  constructor(channel) {
    let account;
    let closure_1;
    let connected;
    let tmp12;
    channel = channel.channel;
    ({ account, connected } = channel);
    importDefault = undefined;
    let onConnectToConsole;
    const tmp2 = onConnectToConsole;
    const tmp4 = channel;
    const tmp3 = require("useIsVoiceChannelFull")(channel);
    let obj = channel(onConnectToConsole[20]);
    const tmp5 = obj.useIsVoiceChannelLocked(channel) && !channel.isPrivate();
    const tmp = importDefault;
    importDefault = tmp5;
    const items = [VoiceStateStore];
    const tmp4Result = tmp4(tmp2[21]);
    const stateFromStores = tmp4Result.useStateFromStores(items, () => VoiceStateStore.isInChannel(channel.id));
    const items1 = [tmp5];
    const callback = react.useCallback(() => {
      let string2Result;
      let stringResult;
      let tmp6;
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      const intl = intl4.intl;
      const string = intl.string;
      const t = intl4.t;
      if (closure_1) {
        stringResult = string(t.rimHDW);
        tmp6 = tmp4;
      } else {
        stringResult = string(t.rZfiNq);
        tmp6 = tmp4;
      }
      const obj = { key: stringResult, content: string2Result };
      const intl2 = tmp6(1115).intl;
      const string2 = intl2.string;
      const t2 = tmp6(1115).t;
      if (closure_1) {
        string2Result = string2(t2.rimHDW);
      } else {
        string2Result = string2(t2.rZfiNq);
      }
      open(obj);
    }, items1);
    const tmp4Result2 = tmp4(tmp2[23]);
    onConnectToConsole = tmp4Result2.useOnConnectToConsole(channel, account);
    const items2 = [onConnectToConsole];
    let callback1 = react.useCallback(() => {
      onConnectToConsole();
    }, items2);
    const type = account.type;
    if (type === constants2.XBOX) {
      let string3Result;
      const intl3 = tmp4(tmp2[17]).intl;
      const string3 = intl3.string;
      const t3 = tmp4(tmp2[17]).t;
      if (connected) {
        string3Result = string3(t3["qVE/VF"]);
      } else {
        string3Result = string3(t3.E8euSk);
      }
      tmp12 = string3Result;
    } else if (type === constants2.PLAYSTATION) {
      let string2Result;
      let intl2 = tmp4(tmp2[17]).intl;
      let string2 = intl2.string;
      let t2 = tmp4(tmp2[17]).t;
      if (connected) {
        string2Result = string2(t2.vzfxmY);
      } else {
        string2Result = string2(t2.QxEYDj);
      }
      tmp12 = string2Result;
    } else if (type === constants2.PLAYSTATION_STAGING) {
      let stringResult;
      let intl = tmp4(tmp2[17]).intl;
      let string = intl.string;
      let t = tmp4(tmp2[17]).t;
      if (connected) {
        stringResult = string(t.BDiXtV);
      } else {
        stringResult = string(t["bhdB9+"]);
      }
      tmp12 = stringResult;
    }
    const tmp16 = tmp(tmp2[24])(account.type);
    let tmp18Result2 = null;
    if (null != tmp12) {
      let tmp18Result;
      const TableRow = tmp4(tmp2[25]).TableRow;
      if (null != tmp16) {
        const obj2 = { source: tmp16 };
        tmp18Result = tmp18(tmp4(tmp2[26]).TableRowIcon, obj2);
      }
      const obj3 = { icon: tmp18Result, label: tmp12, disabled: !stateFromStores && tmp3 || tmp5, onPress: callback1 };
      if (!stateFromStores && tmp3 || tmp5) {
        callback1 = callback;
      }
      tmp18Result2 = tmp18(TableRow, obj3);
    }
    return tmp18Result2;
  }
}
function toggleDeaf() {
  const obj = AudioActionCreatorsDefault;
  obj.toggleSelfDeaf();
}
({ AnalyticEvents: map1, PlatformTypes: closure_14 } = Constants);
let closure_15 = HideSelfStreamAndVideoConstants.SelfStreamAndVideoAlertType;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx");

export const GameConsoles = function GameConsoles(arg0) {
  let channel;
  let connected;
  let require;
  ({ channel: require, connected: importDefault } = arg0);
  const arr = useGameConsoleAccountsDefault();
  let tmp2 = null;
  if (arr.length > 0) {
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    const intl = intl4.intl;
    tmp2 = <TableRowGroup title={intl.string(intl4.t["mbi/fB"])} hasIcons>{arr.map((account) => <GameConsoleAccountButton key={arg0.type} account={arg0} channel={require} connected={importDefault} />)}</TableRowGroup>;
  }
  return tmp2;
};
export { GameConsoleAccountButton };
export const ActivitiesButton = function ActivitiesButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = react.useContext(dismissPanel(11754)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = react.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      const obj = { tab: "app_launcher", source: openTab(dependencyMap[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS };
      closure_1_0(obj);
    }, 200);
  }, items);
  const TableRow = openTab(5917).TableRow;
  ({ IconComponent: openTab(5374).AppsIcon });
  const TableRowIcon = openTab(5923).TableRowIcon;
  const intl = openTab(1115).intl;
  return <TableRow onPress={callback} icon={null} label={intl.string(openTab(1115).t.aeuOoh)} />;
};
export const ChatButton = function ChatButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = react.useContext(dismissPanel(11754)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = react.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      const obj = { tab: "chat", source: openTab(dependencyMap[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS };
      closure_1_0(obj);
    }, 200);
  }, items);
  const TableRow = openTab(5917).TableRow;
  ({ IconComponent: openTab(5385).ChatIcon });
  const TableRowIcon = openTab(5923).TableRowIcon;
  const intl = openTab(1115).intl;
  return <TableRow onPress={callback} icon={null} label={intl.string(openTab(1115).t["5KxXrK"])} />;
};
export const SoundboardButton = function SoundboardButton(channel) {
  channel = channel.channel;
  let tmp8 = null;
  const tmp2 = useSoundboardConfigDefault;
  const tmp2Result = tmp2(channel.id, useSoundboardConfig.SoundboardButtonLocation.VOICE_CONTROLS);
  if (tmp2Result.visible) {
    const TableRow = tmp3(5917).TableRow;
    const intl = tmp3(1115).intl;
    ({ IconComponent: SoundboardIcon.SoundboardIcon });
    const TableRowIcon = tmp3(5923).TableRowIcon;
    tmp8 = <TableRow label={intl.string(intl4.t.ABjMWI)} onPress={tmp5} disabled={tmp6} accessibilityHint={tmp7} icon={null} />;
  }
  return tmp8;
};
export const ScreenshareButton = function ScreenshareButton(channel) {
  let imgSource;
  let isFeatureEnabled;
  let text;
  let isActive;
  const tmp = isActive(9408)(channel.channel);
  const onPress = tmp.onPress;
  isActive = tmp.isActive;
  const items = [isActive, onPress];
  ({ imgSource, text, isFeatureEnabled } = tmp);
  const callback = react.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { source: "voice controls", was_active: isActive };
    obj.track(map1.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj2);
    onPress();
  }, items);
  const TableRow = onPress(5917).TableRow;
  return <TableRow disabled={!isFeatureEnabled} onPress={callback} icon={null} label={text} />;
};
export const StreamVolumeItem = function StreamVolumeItem() {
  let id;
  let intl;
  let intl2;
  let tmp2 = dependencyMap;
  const items = [ApplicationStreamingStore, AuthenticationStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    lastActiveStream = lastActiveStream.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== id.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    return tmp2;
  });
  let ownerId;
  const tmp5 = useMuteAwareLocalVolumeDefault;
  if (stateFromStores != null) {
    ownerId = stateFromStores.ownerId;
  }
  tmp5(ownerId, MediaEngineContextTypes.STREAM);
  let tmp11Result = null;
  if (null != stateFromStores) {
    const obj2 = { title: intl.string(intl4.t.pEAl4b), hasIcons: false, children: null };
    const TableRowGroup = tmp(5999).TableRowGroup;
    intl = tmp(1115).intl;
    const TableRow = tmp(5917).TableRow;
    VolumeSliderDefault;
    let fn;
    const tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      fn = () => true;
    }
    ({ onResponderGrant: fn, value: tmp8, onValueChange: tmp9, color: nativeDefault.unsafe_rawColors.WHITE, maxTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_300, accessibilityLabel: intl2.string(intl4.t.pEAl4b) });
    intl2 = tmp(1115).intl;
    tmp11Result = tmp11(TableRowGroup, obj2);
  }
  return tmp11Result;
};
export const DeafenSwitch = function DeafenSwitch() {
  let selfDeaf;
  const items = [MediaEngineStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => selfDeaf.isSelfDeaf());
  const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  ({ IconComponent: HeadphonesSlashIcon.HeadphonesSlashIcon, source: AssetRegistryDefault5 });
  const TableRowIcon = TableRowIcon2.TableRowIcon;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  const intl3 = intl4.intl;
  return <TableSwitchRow icon={null} accessibilityHint={intl.string(intl4.t.wjcRFX)} value={stateFromStores} onValueChange={toggleDeaf} label={intl2.string(intl4.t.wjcRFX)} subLabel={intl3.string(intl4.t.M3VN2U)} />;
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  let id;
  let require;
  ({ channel: require, connected: importDefault } = arg0);
  let obj = CallsUtils;
  const routeSource = obj.useMaskedSpeakerStates().routeSource;
  const TableRow = TableRow2.TableRow;
  const intl = intl4.intl;
  return <TableRow icon={null} onPress={function onPress() {
    const obj = showAudioOutputSelector;
    const result = obj.showAudioOutputSelector(require.id, importDefault);
  }} label={intl.string(intl4.t["A/Ly/2"])} trailing={null} />;
};
export const InviteButton = function InviteButton(channel) {
  channel = channel.channel;
  const connected = channel.connected;
  const obj = useCanInviteMembers;
  const canInviteMembers = obj.useCanInviteMembers(channel.id);
  const tmp5 = useIsVoiceChannelFullDefault(channel);
  useInviteMembersCallback;
  let tmp8 = null;
  if (!tmp5) {
    tmp8 = null;
    if (canInviteMembers) {
      tmp8 = null;
      if (connected) {
        const TableRow = tmp(5917).TableRow;
        ({ IconComponent: GroupPlusIcon.GroupPlusIcon, source: AssetRegistryDefault2 });
        const TableRowIcon = tmp(5923).TableRowIcon;
        const intl = tmp(1115).intl;
        tmp8 = <TableRow onPress={tmp7} icon={null} label={intl.string(intl4.t["f1+QIK"])} trailing={null} />;
      }
    }
  }
  return tmp8;
};
export const HideNonVideoParticipants = function HideNonVideoParticipants(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(504);
  const items = [ChannelRTCStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelRTCStore.getVoiceParticipantsHidden(channelId));
  const items1 = [channelId, stateFromStores];
  const callback = react.useCallback(() => {
    const obj = ChannelRTCActionCreatorsDefault;
    const result = obj.toggleVoiceParticipantsHidden(channelId, !stateFromStores);
  }, items1);
  const TableSwitchRow = channelId(6621).TableSwitchRow;
  ({ IconComponent: channelId(9569).VideoIcon, source: stateFromStores(9407) });
  const TableRowIcon = channelId(5923).TableRowIcon;
  const intl = channelId(1115).intl;
  const intl2 = channelId(1115).intl;
  const intl3 = channelId(1115).intl;
  return <TableSwitchRow icon={null} accessibilityHint={intl.string(channelId(1115).t.ZMTRyc)} value={stateFromStores} onValueChange={callback} label={intl2.string(channelId(1115).t.ZMTRyc)} subLabel={intl3.string(channelId(1115).t.MlpCFS)} />;
};
export const HideSelfVideo = function HideSelfVideo() {
  let closure_1;
  let closure_2;
  let first;
  let tmp5;
  let tmp = dependencyMap;
  let tmp2 = useHideSelfVideoDefault;
  [first, tmp5, importDefault] = tmp2(AuthenticationStore.getId());
  _require = tmp5;
  let obj = require("get initialized");
  const items = [UnsyncedUserSettingsStore];
  dependencyMap = obj.useStateFromStores(items, () => UnsyncedUserSettingsStore.disableHideSelfStreamAndVideoConfirmationAlert);
  let tmp7 = null;
  if (first) {
    const TableSwitchRow = tmp6(6621).TableSwitchRow;
    ({ IconComponent: require("UserSquareIcon").UserSquareIcon });
    const TableRowIcon = tmp6(5923).TableRowIcon;
    const intl = tmp6(1115).intl;
    tmp7 = <TableSwitchRow icon={null} value={!tmp5} onValueChange={function onValueChange() {
      const tmp = paths;
      if (!tmp) {
        const tmp2 = closure_0;
        if (!tmp2) {
          const VIDEO = constants.VIDEO;
          const f121582 = () => f121582(!VIDEO);
          let obj = actions_AlertActionCreatorsDefault;
          const obj2 = {
            importer() {
                  let onConfirm;
                  let type;
                  const promise = closure_2_0(paths[16])(paths[15], paths.paths);
                  return promise.then((result) => {
                    closure_0 = result.default;
                    return (arg0) => {
                      const obj = { type, onConfirm };
                      const merged = Object.assign(arg0);
                      return closure_3_17(closure_0, obj);
                    };
                  });
                },
            isDismissable: false
          };
          obj.openLazy(obj2);
        }
      }
      return closure_1(!closure_0);
    }} label={intl.string(require("intl").t.MH8ESU)} />;
  }
  return tmp7;
};
export const LeaveActivitiesButton = function LeaveActivitiesButton() {
  const TableRow = TableRow2.TableRow;
  ({ source: AssetRegistryDefault3 });
  const TableRowIcon = TableRowIcon2.TableRowIcon;
  const intl = intl4.intl;
  return <TableRow icon={null} label={intl.string(intl4.t["R/FK4A"])} onPress={function onPress() {
    let applicationId;
    currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    let _location;
    const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
    EmbeddedActivitiesNativeManagerDefault;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    const obj = { location: _location, applicationId };
    applicationId = undefined;
    if (currentEmbeddedActivity != null) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    leaveActivity(obj);
  }} />;
};
export const ShareActivityLogsButton = function ShareActivityLogsButton() {
  let label;
  let onPress;
  const obj = ChannelCallUtils;
  const shareActivityLogsResult = obj.shareActivityLogs();
  const icon = shareActivityLogsResult.icon;
  ({ label, onPress } = shareActivityLogsResult);
  let icon1;
  const TableRow = TableRow2.TableRow;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = tmp4(TableRowIcon2.TableRowIcon, obj2);
  }
  return <TableRow icon={icon1} label={label} onPress={onPress} />;
};
export const ToggleShowActivitiesDebugOverlay = function ToggleShowActivitiesDebugOverlay() {
  let showActivitiesDebugOverlay;
  let obj = get_initialized;
  const items = [ChannelCallLifecycleStore];
  const stateFromStores = obj.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  ({ source: AssetRegistryDefault });
  const TableRowIcon = TableRowIcon2.TableRowIcon;
  const intl = intl4.intl;
  return <TableSwitchRow icon={null} value={stateFromStores} onValueChange={function onValueChange(visible) {
    const obj = DispatcherDefault;
    const obj2 = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
    obj.dispatch(obj2);
  }} label={intl.string(intl4.t["qv5/SP"])} />;
};
export const VoiceSettingsButton = function VoiceSettingsButton(guildId) {
  guildId = guildId.guildId;
  const items = [guildId];
  const callback = react.useCallback(() => {
    const obj = ChannelCallConnectingScreen;
    const result = obj.showVoiceSettingsActionSheet(guildId);
  }, items);
  const TableRow = guildId(5917).TableRow;
  ({ IconComponent: guildId(6798).SettingsIcon, source: AssetRegistryDefault4 });
  const TableRowIcon = guildId(5923).TableRowIcon;
  const intl = guildId(1115).intl;
  const intl2 = guildId(1115).intl;
  return <TableRow onPress={callback} icon={null} label={intl.string(guildId(1115).t.dsXapM)} subLabel={intl2.string(guildId(1115).t["16SG+O"])} trailing={null} />;
};
export const ReportStreamIssueButton = function ReportStreamIssueButton(stream) {
  let label;
  let onPress;
  stream = stream.stream;
  const obj = ChannelCallUtils;
  const reportStreamIssueResult = obj.reportStreamIssue(stream);
  const icon = reportStreamIssueResult.icon;
  ({ label, onPress } = reportStreamIssueResult);
  let icon1;
  const TableRow = TableRow2.TableRow;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = tmp4(TableRowIcon2.TableRowIcon, obj2);
  }
  return <TableRow icon={icon1} label={label} onPress={onPress} />;
};
export const RTCDebugPanelButton = function RTCDebugPanelButton() {
  let label;
  let onPress;
  const obj = ChannelCallUtils;
  const rtcDebugPanelResult = obj.rtcDebugPanel(() => {

  });
  const icon = rtcDebugPanelResult.icon;
  ({ label, onPress } = rtcDebugPanelResult);
  let icon1;
  const TableRow = TableRow2.TableRow;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = tmp4(TableRowIcon2.TableRowIcon, obj2);
  }
  return <TableRow icon={icon1} label={label} onPress={onPress} />;
};
