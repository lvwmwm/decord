// Module ID: 19775
// Function ID: 19776
// Name: VoicePanelVoiceControlsButtons
// Dependencies: [32, 19, 5018, 6931, 1194, 11900, 6801, 502, 2130, 5102, 5835, 1072, 19776, 5929, 21, 6123, 19777, 2118, 1113, 12174, 7159, 12107, 504, 5869, 15006, 15007, 7071, 7079, 11394, 19621, 8782, 8747, 19643, 14373, 12118, 1252, 12200, 12147, 1377, 575, 6079, 7462, 9351, 19634, 9334, 9341, 7080, 19617, 19575, 11139, 12166, 5920, 11204, 12117, 19778, 10077, 11444, 11097, 19779, 8453, 572, 12137, 7666, 19633, 11364, 12048, 5027, 6846, 8045, 12084, 11362, 8773, 8043, 2]
// Exports: ActivitiesButton, AudioRouteButton, DeafenSwitch, GameConsoles, HideNonVideoParticipants, HideSelfVideo, InviteButton, LeaveActivitiesButton, RTCDebugPanelButton, ReportStreamIssueButton, ShareActivityLogsButton, SoundboardButton, StageButtons, StreamVolumeItem, ToggleShowActivitiesDebugOverlay, VoiceSettingsButton

// Module 19775 (VoicePanelVoiceControlsButtons)
import get_initialized from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import StageChannelPermissions from "StageChannelPermissions" /* 5027 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5869 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5920 */;
import Constants2 from "Constants" /* 5929 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6079 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6123 */;
import TableRow3 from "TableRow" /* 7071 */;
import TableRowIcon3 from "TableRowIcon" /* 7079 */;
import TableRowArrow from "TableRowArrow" /* 7080 */;
import TableSwitchRow2 from "TableSwitchRow" /* 7462 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 8043 */;
import useStateChannelIsLiveDefault from "useStateChannelIsLive" /* 8045 */;
import AssetRegistryDefault from "AssetRegistry" /* 8453 */;
import CallsUtils from "CallsUtils" /* 9334 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 9341 */;
import HeadphonesSlashIcon from "HeadphonesSlashIcon" /* 9351 */;
import GroupPlusIcon from "GroupPlusIcon" /* 11139 */;
import speakOnStageDefault from "speakOnStage" /* 11362 */;
import useCanSpeakInChannelDefault from "useCanSpeakInChannel" /* 11364 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11444 */;
import useIsVoiceChannelFullDefault from "useIsVoiceChannelFull" /* 12107 */;
import ChannelCallConnectingScreen from "ChannelCallConnectingScreen" /* 12137 */;
import VolumeSliderDefault from "VolumeSlider" /* 12147 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 12200 */;
import SoundboardIcon from "SoundboardIcon" /* 14373 */;
import useInviteMembersCallback from "useInviteMembersCallback" /* 19575 */;
import useCanInviteMembers from "useCanInviteMembers" /* 19617 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 19633 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 19634 */;
import useSoundboardConfig from "useSoundboardConfig" /* 19643 */;
import HideSelfStreamAndVideoConstants from "HideSelfStreamAndVideoConstants" /* 19776 */;
import useHideSelfVideoDefault from "useHideSelfVideo" /* 19778 */;
import ChannelCallUtils from "ChannelCallUtils" /* 19779 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5018 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6931 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 11900 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6801 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import VoiceStateStore from "VoiceStateStore" /* 5835 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useSoundboardConfigDefault = useSoundboardConfig;
let _require, closure_0, currentEmbeddedActivity, dependencyMap, importDefault, lastActiveStream;

let closure_14;
let closure_15;
let closure_18;
let closure_19;
let tmp4;
const AssetRegistryDefault3 = tmp4(12166);
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
    const obj = channel(onConnectToConsole[21]);
    const tmp5 = obj.useIsVoiceChannelLocked(channel) && !channel.isPrivate();
    const tmp = importDefault;
    importDefault = tmp5;
    const items = [VoiceStateStore];
    const tmp4Result = tmp4(tmp2[22]);
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
      const intl2 = tmp6(1113).intl;
      const string2 = intl2.string;
      const t2 = tmp6(1113).t;
      if (closure_1) {
        string2Result = string2(t2.rimHDW);
      } else {
        string2Result = string2(t2.rZfiNq);
      }
      open(stringResult, { text: string2Result });
    }, items1);
    const tmp4Result2 = tmp4(tmp2[24]);
    onConnectToConsole = tmp4Result2.useOnConnectToConsole(channel, account);
    const items2 = [onConnectToConsole];
    let callback1 = react.useCallback(() => {
      onConnectToConsole();
    }, items2);
    const type = account.type;
    if (type === constants2.XBOX) {
      let string3Result;
      const intl3 = tmp4(tmp2[18]).intl;
      const string3 = intl3.string;
      const t3 = tmp4(tmp2[18]).t;
      if (connected) {
        string3Result = string3(t3["qVE/VF"]);
      } else {
        string3Result = string3(t3.E8euSk);
      }
      tmp12 = string3Result;
    } else if (type === constants2.PLAYSTATION) {
      let string2Result;
      let intl2 = tmp4(tmp2[18]).intl;
      let string2 = intl2.string;
      let t2 = tmp4(tmp2[18]).t;
      if (connected) {
        string2Result = string2(t2.vzfxmY);
      } else {
        string2Result = string2(t2.QxEYDj);
      }
      tmp12 = string2Result;
    } else if (type === constants2.PLAYSTATION_STAGING) {
      let stringResult;
      let intl = tmp4(tmp2[18]).intl;
      let string = intl.string;
      let t = tmp4(tmp2[18]).t;
      if (connected) {
        stringResult = string(t.BDiXtV);
      } else {
        stringResult = string(t["bhdB9+"]);
      }
      tmp12 = stringResult;
    }
    const tmp16 = tmp(tmp2[25])(account.type);
    let tmp18Result2 = null;
    if (null != tmp12) {
      let tmp18Result;
      const TableRow = tmp4(tmp2[26]).TableRow;
      if (null != tmp16) {
        const obj2 = { source: tmp16 };
        tmp18Result = tmp18(tmp4(tmp2[27]).TableRowIcon, obj2);
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
class ChatButton {
  constructor(openTab) {
    let TableRowIcon;
    let intl;
    let obj2;
    openTab = openTab.openTab;
    let dismissPanel;
    dismissPanel = react.useContext(dismissPanel(11394)).dismissPanel;
    const items = [dismissPanel, openTab];
    const callback = react.useCallback(() => {
      dismissPanel();
      const timerId = setTimeout(() => {
        const obj = { tab: "chat", source: openTab(dependencyMap[29]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS };
        closure_1_0(obj);
      }, 200);
    }, items);
    let obj = { onPress: callback, icon: closure_18(TableRowIcon, obj2), label: intl.string(openTab(1113).t["5KxXrK"]) };
    const TableRow = openTab(7071).TableRow;
    obj2 = { IconComponent: openTab(8747).ChatIcon };
    TableRowIcon = openTab(7079).TableRowIcon;
    intl = openTab(1113).intl;
    return closure_18(TableRow, obj);
  }
}
class ScreenshareButton {
  constructor(channel) {
    let imgSource;
    let isFeatureEnabled;
    let text;
    let isActive;
    const tmp = isActive(12118)(channel.channel);
    const onPress = tmp.onPress;
    isActive = tmp.isActive;
    const items = [isActive, onPress];
    ({ imgSource, text, isFeatureEnabled } = tmp);
    const callback = react.useCallback(() => {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { source: "voice controls", was_active: isActive };
      obj.track(constants.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj2);
      onPress();
    }, items);
    let obj = { disabled: !isFeatureEnabled, onPress: callback, icon: closure_18(onPress(7079).TableRowIcon, { source: imgSource }), label: text };
    const TableRow = onPress(7071).TableRow;
    return closure_18(TableRow, obj);
  }
}
function toggleDeaf() {
  const obj = AudioActionCreatorsDefault;
  obj.toggleSelfDeaf();
}
({ AnalyticEvents: closure_14, PlatformTypes: closure_15 } = Constants);
let closure_16 = HideSelfStreamAndVideoConstants.SelfStreamAndVideoAlertType;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx");

export function GameConsoles(channel) {
  let intl;
  channel = channel.channel;
  const connected = channel.connected;
  const arr = connected(12174)();
  let tmp2 = null;
  if (!channel.isGuildStageVoice()) {
    let tmp3 = null;
    if (arr.length > 0) {
      let obj = {
        title: intl.string(channel(1113).t["mbi/fB"]),
        hasIcons: true,
        children: arr.map((account) => {
              const obj = { account, channel, connected };
              return authStore5(GameConsoleAccountButton, obj, account.type);
            })
      };
      const TableRowGroup = channel(7159).TableRowGroup;
      intl = channel(1113).intl;
      tmp3 = closure_18(TableRowGroup, obj);
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
export { GameConsoleAccountButton };
export function ActivitiesButton(openTab) {
  let TableRowIcon;
  let intl;
  let obj2;
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = react.useContext(dismissPanel(11394)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = react.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      const obj = { tab: "app_launcher", source: openTab(dependencyMap[29]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS };
      closure_1_0(obj);
    }, 200);
  }, items);
  let obj = { onPress: callback, icon: closure_18(TableRowIcon, obj2), label: intl.string(openTab(1113).t.aeuOoh) };
  const TableRow = openTab(7071).TableRow;
  obj2 = { IconComponent: openTab(8782).AppsIcon };
  TableRowIcon = openTab(7079).TableRowIcon;
  intl = openTab(1113).intl;
  return closure_18(TableRow, obj);
}
export { ChatButton };
export function SoundboardButton(channel) {
  let TableRowIcon;
  let intl;
  let obj2;
  channel = channel.channel;
  let tmp8 = null;
  const tmp2 = useSoundboardConfigDefault;
  const tmp2Result = tmp2(channel.id, useSoundboardConfig.SoundboardButtonLocation.VOICE_CONTROLS);
  if (tmp2Result.visible) {
    const obj = { label: intl.string(intl4.t.ABjMWI), onPress: tmp5, disabled: tmp6, accessibilityHint: tmp7, icon: authStore5(TableRowIcon, obj2) };
    const TableRow = tmp3(7071).TableRow;
    intl = tmp3(1113).intl;
    obj2 = { IconComponent: SoundboardIcon.SoundboardIcon };
    TableRowIcon = tmp3(7079).TableRowIcon;
    tmp8 = authStore5(TableRow, obj);
  }
  return tmp8;
}
export { ScreenshareButton };
export function StreamVolumeItem() {
  let TableRow;
  let id;
  let intl;
  let intl2;
  let obj3;
  let obj4;
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
    const obj2 = { title: intl.string(intl4.t.pEAl4b), hasIcons: false, children: authStore5(TableRow, obj3) };
    const TableRowGroup = tmp(7159).TableRowGroup;
    intl = tmp(1113).intl;
    TableRow = tmp(7071).TableRow;
    let fn;
    const tmp4Result = VolumeSliderDefault;
    const tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      fn = () => true;
    }
    obj3 = { label: authStore5(tmp4Result, obj4) };
    obj4 = { onResponderGrant: fn, value: tmp8, onValueChange: tmp9, color: nativeDefault.unsafe_rawColors.WHITE, maxTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_300, accessibilityLabel: intl2.string(intl4.t.pEAl4b) };
    intl2 = tmp(1113).intl;
    tmp11Result = tmp11(TableRowGroup, obj2);
  }
  return tmp11Result;
}
export function DeafenSwitch() {
  let TableRowIcon;
  let intl;
  let intl2;
  let intl3;
  let obj3;
  let selfDeaf;
  const items = [MediaEngineStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => selfDeaf.isSelfDeaf());
  const obj2 = { icon: authStore5(TableRowIcon, obj3), accessibilityHint: intl.string(intl4.t.wjcRFX), value: stateFromStores, onValueChange: toggleDeaf, label: intl2.string(intl4.t.wjcRFX), subLabel: intl3.string(intl4.t.M3VN2U) };
  const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  obj3 = { IconComponent: HeadphonesSlashIcon.HeadphonesSlashIcon, source: AssetRegistryDefault5 };
  TableRowIcon = TableRowIcon3.TableRowIcon;
  intl = intl4.intl;
  intl2 = intl4.intl;
  intl3 = intl4.intl;
  return authStore5(TableSwitchRow, obj2);
}
export function AudioRouteButton(arg0) {
  let id;
  let intl;
  let require;
  ({ channel: require, connected: importDefault } = arg0);
  let obj = CallsUtils;
  const routeSource = obj.useMaskedSpeakerStates().routeSource;
  const obj2 = {
    icon: closure_18(TableRowIcon3.TableRowIcon, { source: routeSource }),
    onPress() {
      const obj = showAudioOutputSelector;
      const result = obj.showAudioOutputSelector(require.id, importDefault);
    },
    label: intl.string(intl4.t["A/Ly/2"]),
    trailing: closure_18(TableRowArrow.TableRowArrow, {})
  };
  const TableRow = TableRow3.TableRow;
  intl = intl4.intl;
  return closure_18(TableRow, obj2);
}
export function InviteButton(channel) {
  let TableRowIcon;
  let intl;
  let obj3;
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
        const obj2 = { onPress: tmp7, icon: authStore5(TableRowIcon, obj3), label: intl.string(intl4.t["f1+QIK"]), trailing: authStore5(TableRowArrow.TableRowArrow, {}) };
        const TableRow = tmp(7071).TableRow;
        obj3 = { IconComponent: GroupPlusIcon.GroupPlusIcon, source: AssetRegistryDefault3 };
        TableRowIcon = tmp(7079).TableRowIcon;
        intl = tmp(1113).intl;
        tmp8 = authStore5(TableRow, obj2);
      }
    }
  }
  return tmp8;
}
export function HideNonVideoParticipants(channelId) {
  let TableRowIcon;
  let intl;
  let intl2;
  let intl3;
  let obj3;
  channelId = channelId.channelId;
  let obj = channelId(504);
  const items = [ChannelRTCStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelRTCStore.getVoiceParticipantsHidden(channelId));
  const items1 = [channelId, stateFromStores];
  const callback = react.useCallback(() => {
    const obj = ChannelRTCActionCreatorsDefault;
    const result = obj.toggleVoiceParticipantsHidden(channelId, !stateFromStores);
  }, items1);
  const obj2 = { icon: closure_18(TableRowIcon, obj3), accessibilityHint: intl.string(channelId(1113).t.ZMTRyc), value: stateFromStores, onValueChange: callback, label: intl2.string(channelId(1113).t.ZMTRyc), subLabel: intl3.string(channelId(1113).t.MlpCFS) };
  const TableSwitchRow = channelId(7462).TableSwitchRow;
  obj3 = { IconComponent: channelId(11204).VideoIcon, source: stateFromStores(12117) };
  TableRowIcon = channelId(7079).TableRowIcon;
  intl = channelId(1113).intl;
  intl2 = channelId(1113).intl;
  intl3 = channelId(1113).intl;
  return closure_18(TableSwitchRow, obj2);
}
export function HideSelfVideo() {
  let TableRowIcon;
  let closure_1;
  let closure_2;
  let first;
  let intl;
  let obj3;
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
    let obj2 = {
      icon: closure_18(TableRowIcon, obj3),
      value: !tmp5,
      onValueChange: function handleMaybeConfirmToggleSelfVideoHidden() {
          const tmp = paths;
          if (!tmp) {
            const tmp2 = closure_0;
            if (!tmp2) {
              const VIDEO = constants.VIDEO;
              const f135693 = () => f135693(!VIDEO);
              let obj = actions_AlertActionCreatorsDefault;
              const obj2 = {
                importer() {
                      let onConfirm;
                      let type;
                      const promise = closure_2_0(paths[17])(paths[16], paths.paths);
                      return promise.then((result) => {
                        closure_0 = result.default;
                        return (arg0) => {
                          const obj = { type, onConfirm };
                          const merged = Object.assign(arg0);
                          return closure_3_18(closure_0, obj);
                        };
                      });
                    },
                isDismissable: false
              };
              obj.openLazy(obj2);
            }
          }
          return closure_1(!closure_0);
        },
      label: intl.string(require("intl").t.MH8ESU)
    };
    const TableSwitchRow = tmp6(7462).TableSwitchRow;
    obj3 = { IconComponent: require("UserSquareIcon").UserSquareIcon };
    TableRowIcon = tmp6(7079).TableRowIcon;
    intl = tmp6(1113).intl;
    tmp7 = closure_18(TableSwitchRow, obj2);
  }
  return tmp7;
}
export function LeaveActivitiesButton() {
  let TableRowIcon;
  let intl;
  let obj2;
  let obj = {
    icon: authStore5(TableRowIcon, obj2),
    label: intl.string(intl4.t["R/FK4A"]),
    onPress() {
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
    }
  };
  const TableRow = TableRow3.TableRow;
  obj2 = { source: AssetRegistryDefault2 };
  TableRowIcon = TableRowIcon3.TableRowIcon;
  intl = intl4.intl;
  return authStore5(TableRow, obj);
}
export function ShareActivityLogsButton() {
  let label;
  let onPress;
  const obj = ChannelCallUtils;
  const shareActivityLogsResult = obj.shareActivityLogs();
  const icon = shareActivityLogsResult.icon;
  ({ label, onPress } = shareActivityLogsResult);
  let icon1;
  const TableRow = TableRow3.TableRow;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = tmp4(TableRowIcon3.TableRowIcon, obj2);
  }
  return authStore5(TableRow, { icon: icon1, label, onPress });
}
export function ToggleShowActivitiesDebugOverlay() {
  let TableRowIcon;
  let intl;
  let obj3;
  let showActivitiesDebugOverlay;
  let obj = get_initialized;
  const items = [ChannelCallLifecycleStore];
  const stateFromStores = obj.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  let obj2 = {
    icon: authStore5(TableRowIcon, obj3),
    value: stateFromStores,
    onValueChange: function onPressShowDebugOverlayChange(visible) {
      const obj = DispatcherDefault;
      const obj2 = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
      obj.dispatch(obj2);
    },
    label: intl.string(intl4.t["qv5/SP"])
  };
  const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  obj3 = { source: AssetRegistryDefault };
  TableRowIcon = TableRowIcon3.TableRowIcon;
  intl = intl4.intl;
  return authStore5(TableSwitchRow, obj2);
}
export function VoiceSettingsButton(guildId) {
  let TableRowIcon;
  let intl;
  let intl2;
  let obj2;
  guildId = guildId.guildId;
  const items = [guildId];
  const callback = react.useCallback(() => {
    const obj = ChannelCallConnectingScreen;
    const result = obj.showVoiceSettingsActionSheet(guildId);
  }, items);
  let obj = { onPress: callback, icon: closure_18(TableRowIcon, obj2), label: intl.string(guildId(1113).t.dsXapM), subLabel: intl2.string(guildId(1113).t["16SG+O"]), trailing: closure_18(guildId(7080).TableRowArrow, {}) };
  const TableRow = guildId(7071).TableRow;
  obj2 = { IconComponent: guildId(7666).SettingsIcon, source: AssetRegistryDefault4 };
  TableRowIcon = guildId(7079).TableRowIcon;
  intl = guildId(1113).intl;
  intl2 = guildId(1113).intl;
  return closure_18(TableRow, obj);
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
  const TableRow = TableRow3.TableRow;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = tmp4(TableRowIcon3.TableRowIcon, obj2);
  }
  return authStore5(TableRow, { icon: icon1, label, onPress });
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
  const TableRow = TableRow3.TableRow;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = tmp4(TableRowIcon3.TableRowIcon, obj2);
  }
  return authStore5(TableRow, { icon: icon1, label, onPress });
}
export function StageButtons(channel) {
  let TableRowIcon;
  let TableRowIcon2;
  let intl;
  let obj6;
  let obj9;
  let stringResult;
  let tmp8;
  channel = channel.channel;
  const openTab = channel.openTab;
  const tmp2 = useCanSpeakInChannelDefault(channel.id);
  let obj = channel(12048);
  const isModerator = obj.useStageChannelStartEvent(channel.id).isModerator;
  const items = [PermissionStore];
  const obj2 = channel(504);
  const stateFromStores = obj2.useStateFromStores(items, () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel));
  const obj3 = channel(6846);
  const isStageSpeakingDisabledForCurrentUser = obj3.useIsStageSpeakingDisabledForCurrentUser();
  const tmp6 = useStateChannelIsLiveDefault(channel.id);
  const TableRowGroup = channel(7159).TableRowGroup;
  const tmp7 = closure_19;
  if (tmp2) {
    const obj4 = { channel };
    tmp8 = closure_18(ScreenshareButton, obj4);
  } else {
    tmp8 = null;
    if (isModerator) {
      tmp8 = null;
      if (!isStageSpeakingDisabledForCurrentUser) {
        const obj5 = {
          icon: closure_18(TableRowIcon, obj6),
          label: intl.string(channel(1113).t["8Joh+p"]),
          onPress() {
                  return speakOnStageDefault(channel);
                }
        };
        const TableRow = tmp3(7071).TableRow;
        obj6 = { IconComponent: channel(12084).MicrophoneArrowRightIcon };
        TableRowIcon = tmp3(7079).TableRowIcon;
        intl = tmp3(1113).intl;
        tmp8 = closure_18(TableRow, obj5);
      }
    }
  }
  const children = [tmp8, , ];
  let tmp12 = null;
  if (tmp2) {
    const obj7 = { openTab };
    tmp12 = closure_18(ChatButton, obj7);
  }
  children[1] = tmp12;
  let tmp16Result = null;
  if (stateFromStores) {
    tmp16Result = null;
    if (!isStageSpeakingDisabledForCurrentUser) {
      const obj8 = {
        icon: closure_18(TableRowIcon2, obj9),
        label: stringResult,
        onPress() {
              const obj = StageChannelActionCreatorExtras;
              return obj.openStageChannelSettings(channel);
            }
      };
      const TableRow2 = tmp3(7071).TableRow;
      obj9 = { IconComponent: channel(8773).StageIcon };
      TableRowIcon2 = tmp3(7079).TableRowIcon;
      const intl2 = tmp3(1113).intl;
      const string = intl2.string;
      const t = tmp3(1113).t;
      const tmp16 = closure_18;
      if (tmp6) {
        stringResult = string(t["5BKP4y"]);
      } else {
        stringResult = string(t.s8mM8A);
      }
      tmp16Result = tmp16(TableRow2, obj8);
    }
  }
  children[2] = tmp16Result;
  return tmp7(TableRowGroup, { hasIcons: true, children });
}
