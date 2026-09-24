// Module ID: 17778
// Function ID: 17779
// Name: VoicePanelVoiceControlsButtons
// Dependencies: [32, 19, 2043, 4845, 1184, 9738, 4851, 502, 1992, 4848, 1074, 17779, 4854, 21, 5196, 17780, 1980, 1115, 10132, 5992, 10286, 504, 4523, 10133, 10150, 5910, 5916, 12614, 17739, 5366, 5377, 17767, 12877, 10300, 1241, 10364, 10333, 1364, 576, 9995, 7533, 10027, 17685, 9988, 10018, 5917, 17670, 17623, 10379, 10348, 5030, 10456, 10299, 17781, 9574, 11722, 9659, 17782, 8985, 573, 10325, 7710, 17684, 2]
// Exports: ActivitiesButton, AudioRouteButton, ChatButton, DeafenSwitch, GameConsoles, HideNonVideoParticipants, HideSelfVideo, InviteButton, LeaveActivitiesButton, RTCDebugPanelButton, ReportStreamIssueButton, ScreenshareButton, ShareActivityLogsButton, SoundboardButton, StreamVolumeItem, ToggleShowActivitiesDebugOverlay, VoiceSettingsButton

// Module 17778 (VoicePanelVoiceControlsButtons)
import initialize from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4523 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5030 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5196 */;
import TableRow from "TableRow" /* 5910 */;
import TableRowIcon from "TableRowIcon" /* 5916 */;
import TableRowArrow from "TableRowArrow" /* 5917 */;
import TableRowGroup from "TableRowGroup" /* 5992 */;
import TableSwitchRow from "TableSwitchRow" /* 7533 */;
import _modDef8985 from "module_8985" /* 8985 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9659 */;
import CallsUtils from "CallsUtils" /* 9988 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9995 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 10018 */;
import HeadphonesSlashIcon from "HeadphonesSlashIcon" /* 10027 */;
import useGameConsoleAccountsDefault from "useGameConsoleAccounts" /* 10132 */;
import ChannelCallConnectingScreen from "ChannelCallConnectingScreen" /* 10325 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 10364 */;
import _modDef11722 from "module_11722" /* 11722 */;
import useInviteMembersCallback from "useInviteMembersCallback" /* 17623 */;
import useCanInviteMembers from "useCanInviteMembers" /* 17670 */;
import _modDef17684 from "module_17684" /* 17684 */;
import _modDef17685 from "module_17685" /* 17685 */;
import useSoundboardConfigDefault from "useSoundboardConfig" /* 17767 */;
import useHideSelfVideoDefault from "useHideSelfVideo" /* 17781 */;
import ChannelCallUtils from "ChannelCallUtils" /* 17782 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2043 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4845 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9738 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4851 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import VoiceStateStore from "VoiceStateStore" /* 4848 */;

const require = globalThis.__r;

const _modDef10348 = tmp4(10348);
require = fn;
class GameConsoleAccountButton {
  constructor(arg0) {
    channel = global.channel;
    ({ account, connected } = global);
    closure_1 = undefined;
    closure_2 = undefined;
    tmp2 = closure_2;
    tmp = closure_1;
    tmp4 = channel;
    tmp3 = closure_1(closure_2[20])(channel);
    obj = channel(closure_2[20]);
    tmp5 = obj.useIsVoiceChannelLocked(channel) && !channel.isPrivate();
    closure_1 = tmp5;
    tmp4Result = tmp4(tmp2[21]);
    items = [];
    items[0] = closure_12;
    stateFromStores = tmp4Result.useStateFromStores(items, () => VoiceStateStore.isInChannel(channel.id));
    tmp7 = !stateFromStores;
    if (!stateFromStores) {
      tmp7 = tmp3;
    }
    if (!tmp7) {
      tmp7 = tmp5;
    }
    items1 = [];
    items1[0] = tmp5;
    callback = closure_4.useCallback(() => {
      const intl = util.intl;
      const string = intl.string;
      const t = util.t;
      if (closure_1) {
        let stringResult = string(t.rimHDW);
        let tmp5 = tmp3;
      } else {
        stringResult = string(t.rZfiNq);
        tmp5 = tmp3;
      }
      const obj2 = { key: stringResult, content: null };
      const intl2 = tmp5(1115).intl;
      const string2 = intl2.string;
      const t2 = tmp5(1115).t;
      if (closure_1) {
        let string2Result = string2(t2.rimHDW);
      } else {
        string2Result = string2(t2.rZfiNq);
      }
      obj2.content = string2Result;
      ToastActionCreatorsDefault.open(obj2);
    }, items1);
    tmp4Result1 = tmp4(tmp2[23]);
    onConnectToConsole = tmp4Result1.useOnConnectToConsole(channel, account);
    closure_2 = onConnectToConsole;
    items2 = [];
    items2[0] = onConnectToConsole;
    callback1 = closure_4.useCallback(() => {
      onConnectToConsole();
    }, items2);
    type = account.type;
    tmp11 = PlatformTypes;
    if (type === PlatformTypes.XBOX) {
      intl3 = tmp4(tmp2[17]).intl;
      string3 = intl3.string;
      t = tmp4(tmp2[17]).t;
      if (connected) {
        t = t["qVE/VF"];
        string3Result = string3(t);
      } else {
        string3Result = string3(t.E8euSk);
      }
      tmp18 = string3Result;
    } else if (type === tmp11.PLAYSTATION) {
      intl2 = tmp4(tmp2[17]).intl;
      string2 = intl2.string;
      vzfxmY = tmp4(tmp2[17]).t;
      if (connected) {
        vzfxmY = vzfxmY.vzfxmY;
        string2Result = string2(vzfxmY);
      } else {
        string2Result = string2(vzfxmY.QxEYDj);
      }
      tmp15 = string2Result;
    } else if (type !== tmp11.PLAYSTATION_STAGING) {
      tmp19 = tmp(tmp2[24])(account.type);
      tmp20 = null;
      tmp22Result1 = null;
      if (null != undefined) {
        tmp22 = jsx;
        tmp22Result = undefined;
        if (null != tmp19) {
          obj1 = { source: null };
          obj1.source = tmp19;
          tmp22Result = tmp22(tmp4(tmp2[26]).TableRowIcon, obj1);
        }
        obj6 = { icon: null, label: null, disabled: null, onPress: null };
        obj6.icon = tmp22Result;
        obj6.label = undefined;
        obj6.disabled = tmp7;
        if (tmp7) {
          callback1 = callback;
        }
        obj6.onPress = callback1;
        tmp22Result1 = tmp22(tmp4(tmp2[25]).TableRow, obj6);
      }
      return tmp22Result1;
    } else {
      intl = tmp4(tmp2[17]).intl;
      string = intl.string;
      BDiXtV = tmp4(tmp2[17]).t;
      if (connected) {
        BDiXtV = BDiXtV.BDiXtV;
        stringResult = string(BDiXtV);
      } else {
        stringResult = string(BDiXtV["bhdB9+"]);
      }
      tmp13 = stringResult;
    }
    return;
  }
}
function toggleDeaf() {
  AudioActionCreatorsDefault.toggleSelfDeaf();
}
const Constants = fn(1074);
({ AnalyticEvents: map1, PlatformTypes: closure_14 } = Constants);
let closure_15 = fn(17779).SelfStreamAndVideoAlertType;
const MediaEngineContextTypes = fn(4854).MediaEngineContextTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx");

export const GameConsoles = function GameConsoles(arg0) {
  ({ channel: require, connected: importDefault } = arg0);
  const arr = useGameConsoleAccountsDefault();
  let tmp2 = null;
  if (arr.length > 0) {
    const obj = { title: null, hasIcons: true, children: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["mbi/fB"]);
    obj.children = arr.map((account) => <GameConsoleAccountButton key={arg0.type} account={arg0} channel={channel} connected={connected} />);
    tmp2 = jsx(TableRowGroup.TableRowGroup, { title: null, hasIcons: true, children: null });
  }
  return tmp2;
};
export { GameConsoleAccountButton };
export const ActivitiesButton = function ActivitiesButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = noop.useContext(dismissPanel(12614)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = noop.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      closure_1_0({ tab: "app_launcher", source: openTab(dependencyMap[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  const obj = { onPress: callback, icon: jsx(openTab(5916).TableRowIcon, { IconComponent: openTab(5366).AppsIcon }), label: null };
  const intl = openTab(1115).intl;
  obj.label = intl.string(openTab(1115).t.aeuOoh);
  return jsx(openTab(5910).TableRow, { onPress: callback, icon: jsx(openTab(5916).TableRowIcon, { IconComponent: openTab(5366).AppsIcon }), label: null });
};
export const ChatButton = function ChatButton(openTab) {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = noop.useContext(dismissPanel(12614)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = noop.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      closure_1_0({ tab: "chat", source: openTab(dependencyMap[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  const obj = { onPress: callback, icon: jsx(openTab(5916).TableRowIcon, { IconComponent: openTab(5377).ChatIcon }), label: null };
  const intl = openTab(1115).intl;
  obj.label = intl.string(openTab(1115).t["5KxXrK"]);
  return jsx(openTab(5910).TableRow, { onPress: callback, icon: jsx(openTab(5916).TableRowIcon, { IconComponent: openTab(5377).ChatIcon }), label: null });
};
export const SoundboardButton = function SoundboardButton(channel) {
  let tmp8 = null;
  if (tmp2Result.visible) {
    const obj = { label: null, onPress: null, disabled: null, accessibilityHint: null, icon: null };
    const intl = tmp3(1115).intl;
    obj.label = intl.string(tmp3(1115).t.ABjMWI);
    obj.onPress = tmp5;
    obj.disabled = tmp6;
    obj.accessibilityHint = tmp7;
    const obj2 = { IconComponent: tmp3(12877).SoundboardIcon };
    obj.icon = jsx(tmp3(5916).TableRowIcon, { IconComponent: tmp3(12877).SoundboardIcon });
    tmp8 = jsx(tmp3(5910).TableRow, { label: null, onPress: null, disabled: null, accessibilityHint: null, icon: null });
  }
  return tmp8;
};
export const ScreenshareButton = function ScreenshareButton(channel) {
  let isActive;
  const tmp = isActive(10300)(channel.channel);
  const onPress = tmp.onPress;
  isActive = tmp.isActive;
  const items = [isActive, onPress];
  ({ imgSource, text, isFeatureEnabled } = tmp);
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, { source: "voice controls", was_active: isActive });
    onPress();
  }, items);
  return jsx(onPress(5910).TableRow, { disabled: !isFeatureEnabled, onPress: callback, icon: jsx(onPress(5916).TableRowIcon, { source: imgSource }), label: text });
};
export const StreamVolumeItem = function StreamVolumeItem() {
  const items = [ApplicationStreamingStore, AuthenticationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
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
  if (stateFromStores != null) {
    ownerId = stateFromStores.ownerId;
  }
  useMuteAwareLocalVolumeDefault(ownerId, MediaEngineContextTypes.STREAM);
  let tmp11Result = null;
  if (null != stateFromStores) {
    const obj2 = { title: null, hasIcons: false, children: null };
    const intl = tmp(1115).intl;
    obj2.title = intl.string(tmp(1115).t.pEAl4b);
    const tmp4Result = tmp4(10333);
    let fn;
    if (tmpResult.isAndroid()) {
      fn = () => true;
    }
    const obj3 = { label: null };
    const obj4 = { onResponderGrant: fn, value: tmp8, onValueChange: tmp9, color: tmp4(576).unsafe_rawColors.WHITE, maxTrackTintColor: tmp4(576).unsafe_rawColors.PRIMARY_300, accessibilityLabel: null };
    const intl2 = tmp(1115).intl;
    obj4.accessibilityLabel = intl2.string(tmp(1115).t.pEAl4b);
    obj3.label = <tmp4Result onResponderGrant={fn} value={tmp8} onValueChange={tmp9} color={tmp4(576).unsafe_rawColors.WHITE} maxTrackTintColor={tmp4(576).unsafe_rawColors.PRIMARY_300} accessibilityLabel={null} />;
    obj2.children = jsx(tmp(5910).TableRow, { label: null });
    tmp11Result = tmp11(tmp(5992).TableRowGroup, obj2);
    tmpResult = tmp(1364);
  }
  return tmp11Result;
};
export const DeafenSwitch = function DeafenSwitch() {
  const items = [MediaEngineStore];
  const stateFromStores = initialize.useStateFromStores(items, () => selfDeaf.isSelfDeaf());
  const obj2 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  obj2.icon = jsx(TableRowIcon.TableRowIcon, { IconComponent: HeadphonesSlashIcon.HeadphonesSlashIcon, source: _modDef17685 });
  const intl = util.intl;
  obj2.accessibilityHint = intl.string(util.t.wjcRFX);
  obj2.value = stateFromStores;
  obj2.onValueChange = toggleDeaf;
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.wjcRFX);
  const intl3 = util.intl;
  obj2.subLabel = intl3.string(util.t.M3VN2U);
  return jsx(TableSwitchRow.TableSwitchRow, { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null });
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  ({ channel: require, connected: importDefault } = arg0);
  const obj2 = {
    icon: jsx(TableRowIcon.TableRowIcon, { source: CallsUtils.useMaskedSpeakerStates().routeSource }),
    onPress() {
      const result = showAudioOutputSelector.showAudioOutputSelector(id.id, importDefault);
    },
    label: null,
    trailing: null
  };
  const intl = util.intl;
  obj2.label = intl.string(util.t["A/Ly/2"]);
  obj2.trailing = jsx(TableRowArrow.TableRowArrow, {});
  return jsx(TableRow.TableRow, {
    icon: jsx(TableRowIcon.TableRowIcon, { source: CallsUtils.useMaskedSpeakerStates().routeSource }),
    onPress() {
      const result = showAudioOutputSelector.showAudioOutputSelector(id.id, importDefault);
    },
    label: null,
    trailing: null
  });
};
export const InviteButton = function InviteButton(channel) {
  channel = channel.channel;
  const canInviteMembers = useCanInviteMembers.useCanInviteMembers(channel.id);
  useInviteMembersCallback;
  let tmp8 = null;
  if (!tmp5) {
    tmp8 = null;
    if (canInviteMembers) {
      tmp8 = null;
      if (channel.connected) {
        const obj2 = { onPress: tmp7, icon: null, label: null, trailing: null };
        const obj3 = { IconComponent: tmp(10379).GroupPlusIcon, source: _modDef10348 };
        obj2.icon = jsx(tmp(5916).TableRowIcon, { IconComponent: tmp(10379).GroupPlusIcon, source: _modDef10348 });
        const intl = tmp(1115).intl;
        obj2.label = intl.string(tmp(1115).t["f1+QIK"]);
        obj2.trailing = jsx(tmp(5917).TableRowArrow, {});
        tmp8 = jsx(tmp(5910).TableRow, { onPress: tmp7, icon: null, label: null, trailing: null });
      }
    }
  }
  return tmp8;
};
export const HideNonVideoParticipants = function HideNonVideoParticipants(channelId) {
  channelId = channelId.channelId;
  const items = [ChannelRTCStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelRTCStore.getVoiceParticipantsHidden(channelId));
  const items1 = [channelId, stateFromStores];
  const callback = noop.useCallback(() => {
    const result = ChannelRTCActionCreatorsDefault.toggleVoiceParticipantsHidden(channelId, !stateFromStores);
  }, items1);
  const obj2 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  const obj = channelId(504);
  obj2.icon = jsx(channelId(5916).TableRowIcon, { IconComponent: channelId(10456).VideoIcon, source: stateFromStores(10299) });
  const intl = channelId(1115).intl;
  obj2.accessibilityHint = intl.string(channelId(1115).t.ZMTRyc);
  obj2.value = stateFromStores;
  obj2.onValueChange = callback;
  const intl2 = channelId(1115).intl;
  obj2.label = intl2.string(channelId(1115).t.ZMTRyc);
  const intl3 = channelId(1115).intl;
  obj2.subLabel = intl3.string(channelId(1115).t.MlpCFS);
  return jsx(channelId(7533).TableSwitchRow, { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null });
};
export const HideSelfVideo = function HideSelfVideo() {
  const tmp3 = _slicedToArray(useHideSelfVideoDefault(AuthenticationStore.getId()), 3);
  _require = tmp4;
  importDefault = tmp3[2];
  const items = [UnsyncedUserSettingsStore];
  dependencyMap = require("initialize").useStateFromStores(items, () => UnsyncedUserSettingsStore.disableHideSelfStreamAndVideoConfirmationAlert);
  let tmp6 = null;
  if (tmp3[0]) {
    let obj2 = { icon: null, value: null, onValueChange: null, label: null };
    const obj3 = { IconComponent: tmp5(9574).UserSquareIcon };
    obj2.icon = jsx(tmp5(5916).TableRowIcon, { IconComponent: tmp5(9574).UserSquareIcon });
    obj2.value = !tmp4;
    obj2.onValueChange = function onValueChange() {
      if (!paths) {
        if (!VIDEO) {
          VIDEO = constants.VIDEO;
          const f122388 = () => f122388(!VIDEO);
          const obj2 = {
            importer() {
                  return VIDEO(paths[16])(paths[15], paths.paths).then((result) => {
                    closure_0 = result.default;
                    return (arg0) => {
                      const obj = {};
                      const merged = Object.assign(arg0);
                      obj.type = type;
                      obj.onConfirm = onConfirm;
                      return closure_3_17(closure_0, obj);
                    };
                  });
                },
            isDismissable: false
          };
          actions_AlertActionCreatorsDefault.openLazy(obj2);
        }
      }
      return closure_1(!VIDEO);
    };
    const intl = tmp5(1115).intl;
    obj2.label = intl.string(tmp5(1115).t.MH8ESU);
    tmp6 = jsx(tmp5(7533).TableSwitchRow, { icon: null, value: null, onValueChange: null, label: null });
  }
  return tmp6;
};
export const LeaveActivitiesButton = function LeaveActivitiesButton() {
  const obj = { icon: jsx(TableRowIcon.TableRowIcon, { source: _modDef11722 }), label: null, onPress: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["R/FK4A"]);
  obj.onPress = function onPress() {
    currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    let _location;
    if (currentEmbeddedActivity != null) {
      _location = currentEmbeddedActivity.location;
    }
    const obj2 = { location: _location, applicationId: null };
    let applicationId;
    if (currentEmbeddedActivity != null) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    obj2.applicationId = applicationId;
    EmbeddedActivitiesNativeManagerDefault.leaveActivity(obj2);
  };
  return jsx(TableRow.TableRow, { icon: jsx(TableRowIcon.TableRowIcon, { source: _modDef11722 }), label: null, onPress: null });
};
export const ShareActivityLogsButton = function ShareActivityLogsButton() {
  const shareActivityLogsResult = ChannelCallUtils.shareActivityLogs();
  const icon = shareActivityLogsResult.icon;
  ({ label, onPress } = shareActivityLogsResult);
  let icon1;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = tmp4(TableRowIcon.TableRowIcon, obj2);
  }
  return jsx(TableRow.TableRow, { icon: icon1, label, onPress });
};
export const ToggleShowActivitiesDebugOverlay = function ToggleShowActivitiesDebugOverlay() {
  const items = [ChannelCallLifecycleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  const obj2 = { icon: null, value: null, onValueChange: null, label: null };
  obj2.icon = jsx(TableRowIcon.TableRowIcon, { source: _modDef8985 });
  obj2.value = stateFromStores;
  obj2.onValueChange = function onValueChange(visible) {
    DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible });
  };
  const intl = util.intl;
  obj2.label = intl.string(util.t["qv5/SP"]);
  return jsx(TableSwitchRow.TableSwitchRow, { icon: null, value: null, onValueChange: null, label: null });
};
export const VoiceSettingsButton = function VoiceSettingsButton(guildId) {
  guildId = guildId.guildId;
  const items = [guildId];
  const callback = noop.useCallback(() => {
    const result = ChannelCallConnectingScreen.showVoiceSettingsActionSheet(guildId);
  }, items);
  const obj = { onPress: callback, icon: jsx(guildId(5916).TableRowIcon, { IconComponent: guildId(7710).SettingsIcon, source: _modDef17684 }), label: null, subLabel: null, trailing: null };
  const intl = guildId(1115).intl;
  obj.label = intl.string(guildId(1115).t.NiTd0e);
  const intl2 = guildId(1115).intl;
  obj.subLabel = intl2.string(guildId(1115).t["16SG+O"]);
  obj.trailing = jsx(guildId(5917).TableRowArrow, {});
  return jsx(guildId(5910).TableRow, { onPress: callback, icon: jsx(guildId(5916).TableRowIcon, { IconComponent: guildId(7710).SettingsIcon, source: _modDef17684 }), label: null, subLabel: null, trailing: null });
};
export const ReportStreamIssueButton = function ReportStreamIssueButton(stream) {
  const reportStreamIssueResult = ChannelCallUtils.reportStreamIssue(stream.stream);
  const icon = reportStreamIssueResult.icon;
  ({ label, onPress } = reportStreamIssueResult);
  let icon1;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = tmp4(TableRowIcon.TableRowIcon, obj2);
  }
  return jsx(TableRow.TableRow, { icon: icon1, label, onPress });
};
export const RTCDebugPanelButton = function RTCDebugPanelButton() {
  const rtcDebugPanelResult = ChannelCallUtils.rtcDebugPanel(() => {

  });
  const icon = rtcDebugPanelResult.icon;
  ({ label, onPress } = rtcDebugPanelResult);
  let icon1;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = tmp4(TableRowIcon.TableRowIcon, obj2);
  }
  return jsx(TableRow.TableRow, { icon: icon1, label, onPress });
};
