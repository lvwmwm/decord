// Module ID: 19274
// Function ID: 19275
// Name: VoicePanelVoiceControlsButtons
// Dependencies: [32, 19, 4857, 6837, 1195, 11667, 6708, 502, 2007, 5674, 1072, 19275, 5763, 21, 5954, 19276, 1995, 1114, 11937, 7054, 11870, 504, 5707, 14699, 14700, 6969, 6977, 11203, 19234, 8670, 8635, 19262, 14052, 11881, 1253, 11963, 11910, 1376, 575, 5896, 7363, 9219, 19172, 9202, 9209, 6978, 19157, 19113, 10958, 11929, 5754, 11021, 11880, 19277, 9901, 11246, 10907, 19278, 8342, 572, 11900, 7555, 19171, 2]
// Exports: ActivitiesButton, AudioRouteButton, ChatButton, DeafenSwitch, GameConsoles, HideNonVideoParticipants, HideSelfVideo, InviteButton, LeaveActivitiesButton, RTCDebugPanelButton, ReportStreamIssueButton, ScreenshareButton, ShareActivityLogsButton, SoundboardButton, StreamVolumeItem, ToggleShowActivitiesDebugOverlay, VoiceSettingsButton

// Module 19274 (VoicePanelVoiceControlsButtons)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5754 */;
import Constants2 from "Constants" /* 5763 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5896 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5954 */;
import TableRow2 from "TableRow" /* 6969 */;
import TableRowIcon2 from "TableRowIcon" /* 6977 */;
import TableSwitchRow2 from "TableSwitchRow" /* 7363 */;
import AssetRegistryDefault from "AssetRegistry" /* 8342 */;
import CallsUtils from "CallsUtils" /* 9202 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 9209 */;
import HeadphonesSlashIcon from "HeadphonesSlashIcon" /* 9219 */;
import GroupPlusIcon from "GroupPlusIcon" /* 10958 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11246 */;
import useIsVoiceChannelFullDefault from "useIsVoiceChannelFull" /* 11870 */;
import ChannelCallConnectingScreen from "ChannelCallConnectingScreen" /* 11900 */;
import VolumeSliderDefault from "VolumeSlider" /* 11910 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 11963 */;
import SoundboardIcon from "SoundboardIcon" /* 14052 */;
import useInviteMembersCallback from "useInviteMembersCallback" /* 19113 */;
import useCanInviteMembers from "useCanInviteMembers" /* 19157 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 19171 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 19172 */;
import useSoundboardConfig from "useSoundboardConfig" /* 19262 */;
import HideSelfStreamAndVideoConstants from "HideSelfStreamAndVideoConstants" /* 19275 */;
import useHideSelfVideoDefault from "useHideSelfVideo" /* 19277 */;
import ChannelCallUtils from "ChannelCallUtils" /* 19278 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6837 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1195 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 11667 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6708 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import VoiceStateStore from "VoiceStateStore" /* 5674 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useSoundboardConfigDefault = useSoundboardConfig;
let _require, closure_0, currentEmbeddedActivity, dependencyMap, importDefault, lastActiveStream;

let closure_14;
let map1;
let tmp4;
const AssetRegistryDefault3 = tmp4(11929);
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
    const obj = channel(onConnectToConsole[20]);
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
      const intl2 = tmp6(1114).intl;
      const string2 = intl2.string;
      const t2 = tmp6(1114).t;
      if (closure_1) {
        string2Result = string2(t2.rimHDW);
      } else {
        string2Result = string2(t2.rZfiNq);
      }
      open(stringResult, { text: string2Result });
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

export function GameConsoles(channel) {
  channel = channel.channel;
  const connected = channel.connected;
  const arr = connected(11937)();
  let tmp2 = null;
  if (!channel.isGuildStageVoice()) {
    let tmp3 = null;
    if (arr.length > 0) {
      const TableRowGroup = channel(7054).TableRowGroup;
      const intl = channel(1114).intl;
      tmp3 = <TableRowGroup title={intl.string(channel(1114).t["mbi/fB"])} hasIcons>{arr.map((account) => <GameConsoleAccountButton key={arg0.type} account={arg0} channel={channel} connected={connected} />)}</TableRowGroup>;
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
export { GameConsoleAccountButton };
export function ActivitiesButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = react.useContext(dismissPanel(11203)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = react.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      const obj = { tab: "app_launcher", source: openTab(dependencyMap[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS };
      closure_1_0(obj);
    }, 200);
  }, items);
  const TableRow = openTab(6969).TableRow;
  ({ IconComponent: openTab(8670).AppsIcon });
  const TableRowIcon = openTab(6977).TableRowIcon;
  const intl = openTab(1114).intl;
  return <TableRow onPress={callback} icon={null} label={intl.string(openTab(1114).t.aeuOoh)} />;
}
export function ChatButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = react.useContext(dismissPanel(11203)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = react.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      const obj = { tab: "chat", source: openTab(dependencyMap[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS };
      closure_1_0(obj);
    }, 200);
  }, items);
  const TableRow = openTab(6969).TableRow;
  ({ IconComponent: openTab(8635).ChatIcon });
  const TableRowIcon = openTab(6977).TableRowIcon;
  const intl = openTab(1114).intl;
  return <TableRow onPress={callback} icon={null} label={intl.string(openTab(1114).t["5KxXrK"])} />;
}
export function SoundboardButton(channel) {
  channel = channel.channel;
  let tmp8 = null;
  const tmp2 = useSoundboardConfigDefault;
  const tmp2Result = tmp2(channel.id, useSoundboardConfig.SoundboardButtonLocation.VOICE_CONTROLS);
  if (tmp2Result.visible) {
    const TableRow = tmp3(6969).TableRow;
    const intl = tmp3(1114).intl;
    ({ IconComponent: SoundboardIcon.SoundboardIcon });
    const TableRowIcon = tmp3(6977).TableRowIcon;
    tmp8 = <TableRow label={intl.string(intl4.t.ABjMWI)} onPress={tmp5} disabled={tmp6} accessibilityHint={tmp7} icon={null} />;
  }
  return tmp8;
}
export function ScreenshareButton(channel) {
  let imgSource;
  let isFeatureEnabled;
  let text;
  let isActive;
  const tmp = isActive(11881)(channel.channel);
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
  const TableRow = onPress(6969).TableRow;
  return <TableRow disabled={!isFeatureEnabled} onPress={callback} icon={null} label={text} />;
}
export function StreamVolumeItem() {
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
    const TableRowGroup = tmp(7054).TableRowGroup;
    intl = tmp(1114).intl;
    const TableRow = tmp(6969).TableRow;
    VolumeSliderDefault;
    let fn;
    const tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      fn = () => true;
    }
    ({ onResponderGrant: fn, value: tmp8, onValueChange: tmp9, color: nativeDefault.unsafe_rawColors.WHITE, maxTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_300, accessibilityLabel: intl2.string(intl4.t.pEAl4b) });
    intl2 = tmp(1114).intl;
    tmp11Result = tmp11(TableRowGroup, obj2);
  }
  return tmp11Result;
}
export function DeafenSwitch() {
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
}
export function AudioRouteButton(arg0) {
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
}
export function InviteButton(channel) {
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
        const TableRow = tmp(6969).TableRow;
        ({ IconComponent: GroupPlusIcon.GroupPlusIcon, source: AssetRegistryDefault3 });
        const TableRowIcon = tmp(6977).TableRowIcon;
        const intl = tmp(1114).intl;
        tmp8 = <TableRow onPress={tmp7} icon={null} label={intl.string(intl4.t["f1+QIK"])} trailing={null} />;
      }
    }
  }
  return tmp8;
}
export function HideNonVideoParticipants(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(504);
  const items = [ChannelRTCStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelRTCStore.getVoiceParticipantsHidden(channelId));
  const items1 = [channelId, stateFromStores];
  const callback = react.useCallback(() => {
    const obj = ChannelRTCActionCreatorsDefault;
    const result = obj.toggleVoiceParticipantsHidden(channelId, !stateFromStores);
  }, items1);
  const TableSwitchRow = channelId(7363).TableSwitchRow;
  ({ IconComponent: channelId(11021).VideoIcon, source: stateFromStores(11880) });
  const TableRowIcon = channelId(6977).TableRowIcon;
  const intl = channelId(1114).intl;
  const intl2 = channelId(1114).intl;
  const intl3 = channelId(1114).intl;
  return <TableSwitchRow icon={null} accessibilityHint={intl.string(channelId(1114).t.ZMTRyc)} value={stateFromStores} onValueChange={callback} label={intl2.string(channelId(1114).t.ZMTRyc)} subLabel={intl3.string(channelId(1114).t.MlpCFS)} />;
}
export function HideSelfVideo() {
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
    const TableSwitchRow = tmp6(7363).TableSwitchRow;
    ({ IconComponent: require("UserSquareIcon").UserSquareIcon });
    const TableRowIcon = tmp6(6977).TableRowIcon;
    const intl = tmp6(1114).intl;
    tmp7 = <TableSwitchRow icon={null} value={!tmp5} onValueChange={function handleMaybeConfirmToggleSelfVideoHidden() {
      const tmp = paths;
      if (!tmp) {
        const tmp2 = closure_0;
        if (!tmp2) {
          const VIDEO = constants.VIDEO;
          const f132661 = () => f132661(!VIDEO);
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
}
export function LeaveActivitiesButton() {
  const TableRow = TableRow2.TableRow;
  ({ source: AssetRegistryDefault2 });
  const TableRowIcon = TableRowIcon2.TableRowIcon;
  const intl = intl4.intl;
  return <TableRow icon={null} label={intl.string(intl4.t["R/FK4A"])} onPress={function onPress() {
    let applicationId;
    currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    let _location;
    const leaveEmbeddedActivity = require("leaveEmbeddedActivity").leaveEmbeddedActivity;
    require("leaveEmbeddedActivity");
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    const obj = { location: _location, applicationId };
    applicationId = undefined;
    if (currentEmbeddedActivity != null) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    const result = leaveEmbeddedActivity(obj);
  }} />;
}
export function ShareActivityLogsButton() {
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
}
export function ToggleShowActivitiesDebugOverlay() {
  let showActivitiesDebugOverlay;
  let obj = get_initialized;
  const items = [ChannelCallLifecycleStore];
  const stateFromStores = obj.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  ({ source: AssetRegistryDefault });
  const TableRowIcon = TableRowIcon2.TableRowIcon;
  const intl = intl4.intl;
  return <TableSwitchRow icon={null} value={stateFromStores} onValueChange={function onPressShowDebugOverlayChange(visible) {
    const obj = DispatcherDefault;
    const obj2 = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
    obj.dispatch(obj2);
  }} label={intl.string(intl4.t["qv5/SP"])} />;
}
export function VoiceSettingsButton(guildId) {
  guildId = guildId.guildId;
  const items = [guildId];
  const callback = react.useCallback(() => {
    const obj = ChannelCallConnectingScreen;
    const result = obj.showVoiceSettingsActionSheet(guildId);
  }, items);
  const TableRow = guildId(6969).TableRow;
  ({ IconComponent: guildId(7555).SettingsIcon, source: AssetRegistryDefault4 });
  const TableRowIcon = guildId(6977).TableRowIcon;
  const intl = guildId(1114).intl;
  const intl2 = guildId(1114).intl;
  return <TableRow onPress={callback} icon={null} label={intl.string(guildId(1114).t.dsXapM)} subLabel={intl2.string(guildId(1114).t["16SG+O"])} trailing={null} />;
}
export function ReportStreamIssueButton(stream) {
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
}
export function RTCDebugPanelButton() {
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
}
