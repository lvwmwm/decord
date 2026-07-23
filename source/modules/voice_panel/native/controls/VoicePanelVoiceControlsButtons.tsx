// Module ID: 15885
// Function ID: 122702
// Name: GameConsoleAccountButton
// Dependencies: [57, 31, 1347, 4143, 1280, 10539, 4149, 1194, 4177, 4146, 653, 15886, 4191, 33, 4471, 15887, 1934, 1212, 8933, 5503, 10679, 566, 3831, 8935, 9054, 5165, 5170, 10014, 15849, 9075, 4629, 15876, 11561, 10689, 675, 10747, 10716, 477, 689, 8843, 5504, 8870, 15799, 8836, 8861, 5171, 15784, 15742, 10195, 10731, 4323, 10159, 10688, 15888, 8015, 10412, 10525, 15889, 7598, 686, 10708, 5791, 15798, 2]
// Exports: ActivitiesButton, AudioRouteButton, ChatButton, DeafenSwitch, GameConsoles, HideNonVideoParticipants, HideSelfVideo, InviteButton, LeaveActivitiesButton, RTCDebugPanelButton, ReportStreamIssueButton, ScreenshareButton, ShareActivityLogsButton, SoundboardButton, StreamVolumeItem, ToggleShowActivitiesDebugOverlay, VoiceSettingsButton

// Module 15885 (GameConsoleAccountButton)
import voiceSettings from "voiceSettings";
import useSoundboardConfig from "useSoundboardConfig";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import ME from "ME";
import { SelfStreamAndVideoAlertType as closure_15 } from "SelfStreamAndVideoAlertType";
import { MediaEngineContextTypes } from "DesktopSources";
import { jsx } from "handleCloseScreenshare";

let closure_13;
let closure_14;
let require = arg1;
class GameConsoleAccountButton {
  constructor(arg0) {
    channel = global.channel;
    ({ account, connected } = global);
    useIsVoiceChannelLocked = undefined;
    c2 = undefined;
    tmp = require("useIsVoiceChannelFull")(channel);
    obj = require("useIsVoiceChannelFull");
    tmp2 = obj.useIsVoiceChannelLocked(channel) && !channel.isPrivate();
    useIsVoiceChannelLocked = tmp2;
    obj2 = require("initialize");
    items = [];
    items[0] = c12;
    tmp3 = !obj2.useStateFromStores(items, () => outer1_12.isInChannel(channel.id)) && tmp || tmp2;
    items1 = [];
    items1[0] = tmp2;
    callback = useSoundboardConfig.useCallback(() => {
      let obj = _undefined(onConnectToConsole[22]);
      obj = {};
      const intl = channel(onConnectToConsole[17]).intl;
      const string = intl.string;
      const t = channel(onConnectToConsole[17]).t;
      if (_undefined) {
        let stringResult = string(t.rimHDW);
      } else {
        stringResult = string(t.rZfiNq);
      }
      obj.key = stringResult;
      const intl2 = channel(onConnectToConsole[17]).intl;
      const string2 = intl2.string;
      const t2 = channel(onConnectToConsole[17]).t;
      if (_undefined) {
        let string2Result = string2(t2.rimHDW);
      } else {
        string2Result = string2(t2.rZfiNq);
      }
      obj.content = string2Result;
      obj.open(obj);
    }, items1);
    tmp5 = c2;
    obj3 = require("onConnectToConsole");
    onConnectToConsole = obj3.useOnConnectToConsole(channel, account);
    c2 = onConnectToConsole;
    items2 = [];
    items2[0] = onConnectToConsole;
    callback1 = useSoundboardConfig.useCallback(() => {
      onConnectToConsole();
    }, items2);
    type = account.type;
    if (type === PlatformTypes.XBOX) {
      tmp17 = channel;
      tmp18 = c2;
      num3 = 17;
      intl3 = require("getSystemLocale").intl;
      string3 = intl3.string;
      qVE_VF = require("getSystemLocale").t;
      if (connected) {
        qVE_VF = qVE_VF["qVE/VF"];
        string3Result = string3(qVE_VF);
      } else {
        string3Result = string3(qVE_VF.E8euSk);
      }
      tmp20 = string3Result;
    } else {
      tmp32 = PlatformTypes;
      if (type === PlatformTypes.PLAYSTATION) {
        tmp13 = channel;
        tmp14 = c2;
        num2 = 17;
        intl2 = require("getSystemLocale").intl;
        string2 = intl2.string;
        vzfxmY = require("getSystemLocale").t;
        if (connected) {
          vzfxmY = vzfxmY.vzfxmY;
          string2Result = string2(vzfxmY);
        } else {
          string2Result = string2(vzfxmY.QxEYDj);
        }
        tmp16 = string2Result;
      } else {
        tmp8 = PlatformTypes;
        if (type !== PlatformTypes.PLAYSTATION_STAGING) {
          tmp21 = useIsVoiceChannelLocked;
          num4 = 24;
          tmp22 = require("PlatformTypes")(account.type);
          tmp23 = null;
          tmp25Result = null;
          if (null != undefined) {
            tmp26 = channel;
            tmp27 = c2;
            num5 = 25;
            tmp25 = jsx;
            obj = {};
            tmp28 = undefined;
            if (null != tmp22) {
              tmp29 = jsx;
              tmp30 = channel;
              tmp31 = c2;
              num6 = 26;
              obj1 = {};
              obj1.source = tmp22;
              tmp28 = jsx(require("TableRowIcon").TableRowIcon, obj1);
            }
            obj.icon = tmp28;
            obj.label = undefined;
            obj.disabled = tmp3;
            if (tmp3) {
              callback1 = callback;
            }
            obj.onPress = callback1;
            tmp25Result = tmp25(require("TableRowInner").TableRow, obj);
          }
          return tmp25Result;
        } else {
          tmp9 = channel;
          tmp10 = c2;
          num = 17;
          intl = require("getSystemLocale").intl;
          string = intl.string;
          BDiXtV = require("getSystemLocale").t;
          if (connected) {
            BDiXtV = BDiXtV.BDiXtV;
            stringResult = string(BDiXtV);
          } else {
            stringResult = string(BDiXtV["bhdB9+"]);
          }
          tmp12 = stringResult;
        }
      }
    }
    return;
  }
}
function toggleDeaf() {
  importDefault(8843).toggleSelfDeaf();
}
({ AnalyticEvents: closure_13, PlatformTypes: closure_14 } = ME);
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx");

export const GameConsoles = function GameConsoles(arg0) {
  let importDefault;
  let require;
  ({ channel: require, connected: importDefault } = arg0);
  const arr = importDefault(8933)();
  let tmp = null;
  if (arr.length > 0) {
    const obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t["mbi/fB"]);
    obj.hasIcons = true;
    obj.children = arr.map((account) => outer1_17(outer1_18, { account, channel: closure_0, connected: closure_1 }, account.type));
    tmp = jsx(require(5503) /* TableRowGroupTitle */.TableRowGroup, {});
  }
  return tmp;
};
export { GameConsoleAccountButton };
export const ActivitiesButton = function ActivitiesButton(openTab) {
  openTab = openTab.openTab;
  dismissPanel = React.useContext(dismissPanel(10014)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = React.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      outer1_0({ tab: "app_launcher", source: openTab(outer2_2[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  let obj = { onPress: callback };
  obj = { IconComponent: openTab(9075).AppsIcon };
  obj.icon = jsx(openTab(5170).TableRowIcon, { IconComponent: openTab(9075).AppsIcon });
  const intl = openTab(1212).intl;
  obj.label = intl.string(openTab(1212).t.aeuOoh);
  return jsx(openTab(5165).TableRow, { IconComponent: openTab(9075).AppsIcon });
};
export const ChatButton = function ChatButton(openTab) {
  openTab = openTab.openTab;
  dismissPanel = React.useContext(dismissPanel(10014)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = React.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      outer1_0({ tab: "chat", source: openTab(outer2_2[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  let obj = { onPress: callback };
  obj = { IconComponent: openTab(4629).ChatIcon };
  obj.icon = jsx(openTab(5170).TableRowIcon, { IconComponent: openTab(4629).ChatIcon });
  const intl = openTab(1212).intl;
  obj.label = intl.string(openTab(1212).t["5KxXrK"]);
  return jsx(openTab(5165).TableRow, { IconComponent: openTab(4629).ChatIcon });
};
export const SoundboardButton = function SoundboardButton(channel) {
  const tmp = importDefault(15876);
  let tmp5 = null;
  if (tmpResult.visible) {
    let obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t.ABjMWI);
    obj.onPress = tmp3;
    obj.disabled = tmp4;
    obj = { IconComponent: require(11561) /* SoundboardIcon */.SoundboardIcon };
    obj.icon = jsx(require(5170) /* TableRowIcon */.TableRowIcon, { IconComponent: require(11561) /* SoundboardIcon */.SoundboardIcon });
    tmp5 = jsx(require(5165) /* TableRowInner */.TableRow, { IconComponent: require(11561) /* SoundboardIcon */.SoundboardIcon });
  }
  return tmp5;
};
export const ScreenshareButton = function ScreenshareButton(channel) {
  let imgSource;
  let isFeatureEnabled;
  let text;
  const tmp = isActive(10689)(channel.channel);
  const onPress = tmp.onPress;
  isActive = tmp.isActive;
  const items = [isActive, onPress];
  ({ imgSource, text, isFeatureEnabled } = tmp);
  const callback = React.useCallback(() => {
    let obj = isActive(outer1_2[34]);
    obj = { source: "voice controls", was_active: isActive };
    obj.track(outer1_13.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj);
    onPress();
  }, items);
  let obj = { disabled: !isFeatureEnabled, onPress: callback, icon: jsx(onPress(5170).TableRowIcon, { source: imgSource }), label: text };
  return jsx(onPress(5165).TableRow, { disabled: !isFeatureEnabled, onPress: callback, icon: jsx(onPress(5170).TableRowIcon, { source: imgSource }), label: text });
};
export const StreamVolumeItem = function StreamVolumeItem() {
  let obj = require(566) /* initialize */;
  const items = [closure_9, closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const lastActiveStream = outer1_9.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== outer1_10.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    return tmp2;
  });
  let ownerId;
  if (null != stateFromStores) {
    ownerId = stateFromStores.ownerId;
  }
  importDefault(10747)(ownerId, MediaEngineContextTypes.STREAM);
  let tmp8Result = null;
  if (null != stateFromStores) {
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t.pEAl4b);
    obj.hasIcons = false;
    obj = {};
    const obj1 = {};
    const tmp11 = jsx;
    const tmp12 = jsx;
    const tmp14 = importDefault(10716);
    const tmp8 = jsx;
    let fn;
    if (obj5.isAndroid()) {
      fn = () => true;
    }
    obj1.onResponderGrant = fn;
    obj1.value = tmp5;
    obj1.onValueChange = tmp6;
    obj1.color = importDefault(689).unsafe_rawColors.WHITE;
    obj1.maxTrackTintColor = importDefault(689).unsafe_rawColors.PRIMARY_300;
    obj.label = tmp12(tmp14, obj1);
    obj.children = tmp11(require(5165) /* TableRowInner */.TableRow, obj);
    tmp8Result = tmp8(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
    obj5 = require(477) /* set */;
  }
  return tmp8Result;
};
export const DeafenSwitch = function DeafenSwitch() {
  let obj = require(566) /* initialize */;
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.isSelfDeaf());
  obj = {};
  obj = { IconComponent: require(8870) /* HeadphonesSlashIcon */.HeadphonesSlashIcon, source: importDefault(15799) };
  obj.icon = jsx(require(5170) /* TableRowIcon */.TableRowIcon, { IconComponent: require(8870) /* HeadphonesSlashIcon */.HeadphonesSlashIcon, source: importDefault(15799) });
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityHint = intl.string(require(1212) /* getSystemLocale */.t.wjcRFX);
  obj.value = stateFromStores;
  obj.onValueChange = toggleDeaf;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t.wjcRFX);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.subLabel = intl3.string(require(1212) /* getSystemLocale */.t.M3VN2U);
  return jsx(require(5504) /* TableSwitchRow */.TableSwitchRow, { IconComponent: require(8870) /* HeadphonesSlashIcon */.HeadphonesSlashIcon, source: importDefault(15799) });
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  let importDefault;
  let require;
  ({ channel: require, connected: importDefault } = arg0);
  let obj = require(8836) /* _handleToggleVideo */;
  obj = {};
  obj.icon = jsx(require(5170) /* TableRowIcon */.TableRowIcon, { source: obj.useMaskedSpeakerStates().routeSource });
  obj.onPress = function onPress() {
    const result = outer1_0(outer1_2[44]).showAudioOutputSelector(id.id, closure_1);
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["A/Ly/2"]);
  obj.trailing = jsx(require(5171) /* TableRowArrow */.TableRowArrow, {});
  return jsx(require(5165) /* TableRowInner */.TableRow, {});
};
export const InviteButton = function InviteButton(channel) {
  channel = channel.channel;
  let obj = require(15784) /* useCanInviteMembers */;
  const canInviteMembers = obj.useCanInviteMembers(channel.id);
  require(15742) /* useInviteMembersCallback */;
  let tmp5 = null;
  if (!tmp2) {
    tmp5 = null;
    if (canInviteMembers) {
      tmp5 = null;
      if (channel.connected) {
        obj = { onPress: tmp4 };
        obj = { IconComponent: require(10195) /* GroupPlusIcon */.GroupPlusIcon, source: importDefault(10731) };
        obj.icon = jsx(require(5170) /* TableRowIcon */.TableRowIcon, { IconComponent: require(10195) /* GroupPlusIcon */.GroupPlusIcon, source: importDefault(10731) });
        const intl = require(1212) /* getSystemLocale */.intl;
        obj.label = intl.string(require(1212) /* getSystemLocale */.t["f1+QIK"]);
        obj.trailing = jsx(require(5171) /* TableRowArrow */.TableRowArrow, {});
        tmp5 = jsx(require(5165) /* TableRowInner */.TableRow, { IconComponent: require(10195) /* GroupPlusIcon */.GroupPlusIcon, source: importDefault(10731) });
      }
    }
  }
  return tmp5;
};
export const HideNonVideoParticipants = function HideNonVideoParticipants(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getVoiceParticipantsHidden(channelId));
  const items1 = [channelId, stateFromStores];
  const callback = React.useCallback(() => {
    const result = stateFromStores(outer1_2[50]).toggleVoiceParticipantsHidden(channelId, !stateFromStores);
  }, items1);
  obj = {};
  obj = { IconComponent: channelId(10159).VideoIcon, source: stateFromStores(10688) };
  obj.icon = jsx(channelId(5170).TableRowIcon, { IconComponent: channelId(10159).VideoIcon, source: stateFromStores(10688) });
  const intl = channelId(1212).intl;
  obj.accessibilityHint = intl.string(channelId(1212).t.ZMTRyc);
  obj.value = stateFromStores;
  obj.onValueChange = callback;
  const intl2 = channelId(1212).intl;
  obj.label = intl2.string(channelId(1212).t.ZMTRyc);
  const intl3 = channelId(1212).intl;
  obj.subLabel = intl3.string(channelId(1212).t.MlpCFS);
  return jsx(channelId(5504).TableSwitchRow, { IconComponent: channelId(10159).VideoIcon, source: stateFromStores(10688) });
};
export const HideSelfVideo = function HideSelfVideo() {
  const tmp2 = callback(importDefault(15888)(id.getId()), 3);
  const require = tmp3;
  importDefault = tmp2[2];
  let obj = require(566) /* initialize */;
  const items = [closure_7];
  const dependencyMap = obj.useStateFromStores(items, () => outer1_7.disableHideSelfStreamAndVideoConfirmationAlert);
  let tmp4 = null;
  if (tmp2[0]) {
    obj = {};
    obj = { IconComponent: require(8015) /* UserSquareIcon */.UserSquareIcon };
    obj.icon = jsx(require(5170) /* TableRowIcon */.TableRowIcon, { IconComponent: require(8015) /* UserSquareIcon */.UserSquareIcon });
    obj.value = !tmp3;
    obj.onValueChange = function onValueChange() {
      if (!closure_2) {
        if (!closure_0) {
          (function openHideSelfStreamAndVideoConfirmDialog(VIDEO, arg1) {
            let closure_0 = VIDEO;
            const callback = arg1;
            let obj = callback(table[14]);
            obj = {
              importer() {
                return VIDEO(paths[16])(paths[15], paths.paths).then((arg0) => {
                  let closure_0 = arg0.default;
                  return () => { ... };
                });
              }
            };
            obj.openLazy(obj);
          })(outer1_15.VIDEO, () => outer1_1(!outer1_0));
        }
      }
      return callback(!closure_0);
    };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t.MH8ESU);
    tmp4 = jsx(require(5504) /* TableSwitchRow */.TableSwitchRow, { IconComponent: require(8015) /* UserSquareIcon */.UserSquareIcon });
  }
  return tmp4;
};
export const LeaveActivitiesButton = function LeaveActivitiesButton() {
  let obj = {};
  obj = { source: importDefault(10412) };
  obj.icon = jsx(require(5170) /* TableRowIcon */.TableRowIcon, { source: importDefault(10412) });
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["R/FK4A"]);
  obj.onPress = function onPress() {
    const currentEmbeddedActivity = outer1_5.getCurrentEmbeddedActivity();
    let obj = outer1_1(outer1_2[56]);
    obj = {};
    let _location;
    if (null != currentEmbeddedActivity) {
      _location = currentEmbeddedActivity.location;
    }
    obj.location = _location;
    let applicationId;
    if (null != currentEmbeddedActivity) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    obj.applicationId = applicationId;
    obj.leaveActivity(obj);
  };
  return jsx(require(5165) /* TableRowInner */.TableRow, { source: importDefault(10412) });
};
export const ShareActivityLogsButton = function ShareActivityLogsButton() {
  let label;
  let onPress;
  let obj = require(15889) /* voiceSettings */;
  const shareActivityLogsResult = obj.shareActivityLogs();
  const icon = shareActivityLogsResult.icon;
  ({ label, onPress } = shareActivityLogsResult);
  obj = {};
  let tmp3;
  if (null != icon) {
    obj = { source: icon };
    tmp3 = jsx(require(5170) /* TableRowIcon */.TableRowIcon, { source: icon });
  }
  obj.icon = tmp3;
  obj.label = label;
  obj.onPress = onPress;
  return jsx(require(5165) /* TableRowInner */.TableRow, {});
};
export const ToggleShowActivitiesDebugOverlay = function ToggleShowActivitiesDebugOverlay() {
  let obj = require(566) /* initialize */;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getShowActivitiesDebugOverlay());
  obj = {};
  obj = { source: importDefault(7598) };
  obj.icon = jsx(require(5170) /* TableRowIcon */.TableRowIcon, { source: importDefault(7598) });
  obj.value = stateFromStores;
  obj.onValueChange = function onValueChange(visible) {
    let obj = outer1_1(outer1_2[59]);
    obj = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
    obj.dispatch(obj);
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["qv5/SP"]);
  return jsx(require(5504) /* TableSwitchRow */.TableSwitchRow, { source: importDefault(7598) });
};
export const VoiceSettingsButton = function VoiceSettingsButton(guildId) {
  guildId = guildId.guildId;
  const items = [guildId];
  const callback = React.useCallback(() => {
    const result = guildId(outer1_2[60]).showVoiceSettingsActionSheet(guildId);
  }, items);
  let obj = { onPress: callback };
  obj = { IconComponent: guildId(5791).SettingsIcon, source: importDefault(15798) };
  obj.icon = jsx(guildId(5170).TableRowIcon, { IconComponent: guildId(5791).SettingsIcon, source: importDefault(15798) });
  const intl = guildId(1212).intl;
  obj.label = intl.string(guildId(1212).t.NiTd0e);
  const intl2 = guildId(1212).intl;
  obj.subLabel = intl2.string(guildId(1212).t["16SG+O"]);
  obj.trailing = jsx(guildId(5171).TableRowArrow, {});
  return jsx(guildId(5165).TableRow, { IconComponent: guildId(5791).SettingsIcon, source: importDefault(15798) });
};
export const ReportStreamIssueButton = function ReportStreamIssueButton(stream) {
  let label;
  let onPress;
  let obj = require(15889) /* voiceSettings */;
  const reportStreamIssueResult = obj.reportStreamIssue(stream.stream);
  const icon = reportStreamIssueResult.icon;
  ({ label, onPress } = reportStreamIssueResult);
  obj = {};
  let tmp3;
  if (null != icon) {
    obj = { source: icon };
    tmp3 = jsx(require(5170) /* TableRowIcon */.TableRowIcon, { source: icon });
  }
  obj.icon = tmp3;
  obj.label = label;
  obj.onPress = onPress;
  return jsx(require(5165) /* TableRowInner */.TableRow, {});
};
export const RTCDebugPanelButton = function RTCDebugPanelButton() {
  let label;
  let onPress;
  let obj = require(15889) /* voiceSettings */;
  const rtcDebugPanelResult = obj.rtcDebugPanel(() => {

  });
  const icon = rtcDebugPanelResult.icon;
  ({ label, onPress } = rtcDebugPanelResult);
  obj = {};
  let tmp3;
  if (null != icon) {
    obj = { source: icon };
    tmp3 = jsx(require(5170) /* TableRowIcon */.TableRowIcon, { source: icon });
  }
  obj.icon = tmp3;
  obj.label = label;
  obj.onPress = onPress;
  return jsx(require(5165) /* TableRowInner */.TableRow, {});
};
