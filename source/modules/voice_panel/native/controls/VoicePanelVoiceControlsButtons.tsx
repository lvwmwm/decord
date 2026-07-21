// Module ID: 15751
// Function ID: 120321
// Name: GameConsoleAccountButton
// Dependencies: []
// Exports: ActivitiesButton, AudioRouteButton, ChatButton, DeafenSwitch, GameConsoles, HideNonVideoParticipants, HideSelfVideo, InviteButton, LeaveActivitiesButton, RTCDebugPanelButton, ReportStreamIssueButton, ScreenshareButton, ShareActivityLogsButton, SoundboardButton, StreamVolumeItem, ToggleShowActivitiesDebugOverlay, VoiceSettingsButton

// Module 15751 (GameConsoleAccountButton)
class GameConsoleAccountButton {
  constructor(arg0) {
    channel = global.channel;
    arg1 = channel;
    ({ account, connected } = global);
    importDefault = undefined;
    closure_2 = undefined;
    tmp = importDefault(closure_2[20])(channel);
    obj = arg1(closure_2[20]);
    tmp2 = obj.useIsVoiceChannelLocked(channel) && !channel.isPrivate();
    importDefault = tmp2;
    obj2 = arg1(closure_2[21]);
    items = [];
    items[0] = closure_12;
    tmp3 = !obj2.useStateFromStores(items, () => inChannel.isInChannel(channel.id)) && tmp || tmp2;
    items1 = [];
    items1[0] = tmp2;
    callback = importAll.useCallback(() => {
      let obj = tmp2(onConnectToConsole[22]);
      obj = {};
      const intl = channel(onConnectToConsole[17]).intl;
      const string = intl.string;
      const t = channel(onConnectToConsole[17]).t;
      if (tmp2) {
        let stringResult = string(t.rimHDW);
      } else {
        stringResult = string(t.rZfiNq);
      }
      obj.key = stringResult;
      const intl2 = channel(onConnectToConsole[17]).intl;
      const string2 = intl2.string;
      const t2 = channel(onConnectToConsole[17]).t;
      if (tmp2) {
        let string2Result = string2(t2.rimHDW);
      } else {
        string2Result = string2(t2.rZfiNq);
      }
      obj.content = string2Result;
      obj.open(obj);
    }, items1);
    tmp5 = closure_2;
    obj3 = arg1(closure_2[23]);
    onConnectToConsole = obj3.useOnConnectToConsole(channel, account);
    closure_2 = onConnectToConsole;
    items2 = [];
    items2[0] = onConnectToConsole;
    callback1 = importAll.useCallback(() => {
      onConnectToConsole();
    }, items2);
    type = account.type;
    if (type === PlatformTypes.XBOX) {
      tmp17 = arg1;
      tmp18 = closure_2;
      num3 = 17;
      intl3 = arg1(closure_2[17]).intl;
      string3 = intl3.string;
      qVE/VF = arg1(closure_2[17]).t;
      if (connected) {
        qVE/VF = qVE_VF.qVE/VF;
        string3Result = string3(qVE_VF);
      } else {
        string3Result = string3(qVE_VF.E8euSk);
      }
      tmp20 = string3Result;
    } else {
      tmp32 = PlatformTypes;
      if (type === PlatformTypes.PLAYSTATION) {
        tmp13 = arg1;
        tmp14 = closure_2;
        num2 = 17;
        intl2 = arg1(closure_2[17]).intl;
        string2 = intl2.string;
        vzfxmY = arg1(closure_2[17]).t;
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
          tmp21 = importDefault;
          num4 = 24;
          tmp22 = importDefault(tmp5[24])(account.type);
          tmp23 = null;
          tmp25Result = null;
          if (null != undefined) {
            tmp26 = arg1;
            tmp27 = closure_2;
            num5 = 25;
            tmp25 = jsx;
            obj = {};
            tmp28 = undefined;
            if (null != tmp22) {
              tmp29 = jsx;
              tmp30 = arg1;
              tmp31 = closure_2;
              num6 = 26;
              obj1 = {};
              obj1.source = tmp22;
              tmp28 = jsx(arg1(closure_2[26]).TableRowIcon, obj1);
            }
            obj.icon = tmp28;
            obj.label = undefined;
            obj.disabled = tmp3;
            if (tmp3) {
              callback1 = callback;
            }
            obj.onPress = callback1;
            tmp25Result = tmp25(arg1(closure_2[25]).TableRow, obj);
          }
          return tmp25Result;
        } else {
          tmp9 = arg1;
          tmp10 = closure_2;
          num = 17;
          intl = arg1(closure_2[17]).intl;
          string = intl.string;
          BDiXtV = arg1(closure_2[17]).t;
          if (connected) {
            BDiXtV = BDiXtV.BDiXtV;
            stringResult = string(BDiXtV);
          } else {
            stringResult = string(BDiXtV.bhdB9+);
          }
          tmp12 = stringResult;
        }
      }
    }
    return;
  }
}
function toggleDeaf() {
  importDefault(dependencyMap[39]).toggleSelfDeaf();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
({ AnalyticEvents: closure_13, PlatformTypes: closure_14 } = arg1(dependencyMap[10]));
let closure_15 = arg1(dependencyMap[11]).SelfStreamAndVideoAlertType;
const MediaEngineContextTypes = arg1(dependencyMap[12]).MediaEngineContextTypes;
const jsx = arg1(dependencyMap[13]).jsx;
const tmp2 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[63]).fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx");

export const GameConsoles = function GameConsoles(arg0) {
  ({ channel: closure_0, connected: closure_1 } = arg0);
  const arr = importDefault(dependencyMap[18])();
  let tmp = null;
  if (arr.length > 0) {
    const obj = {};
    const intl = arg1(dependencyMap[17]).intl;
    obj.title = intl.string(arg1(dependencyMap[17]).t.mbi/fB);
    obj.hasIcons = true;
    obj.children = arr.map((account) => callback(closure_18, { account, channel: closure_0, connected: closure_1 }, account.type));
    tmp = jsx(arg1(dependencyMap[19]).TableRowGroup, obj);
  }
  return tmp;
};
export { GameConsoleAccountButton };
export const ActivitiesButton = function ActivitiesButton(openTab) {
  openTab = openTab.openTab;
  const arg1 = openTab;
  const dismissPanel = React.useContext(importDefault(dependencyMap[27])).dismissPanel;
  const importDefault = dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = React.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      callback({ tab: "app_launcher", source: callback(closure_2[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  let obj = { onPress: callback };
  obj = { IconComponent: arg1(dependencyMap[29]).AppsIcon };
  obj.icon = jsx(arg1(dependencyMap[26]).TableRowIcon, obj);
  const intl = arg1(dependencyMap[17]).intl;
  obj.label = intl.string(arg1(dependencyMap[17]).t.aeuOoh);
  return jsx(arg1(dependencyMap[25]).TableRow, obj);
};
export const ChatButton = function ChatButton(openTab) {
  openTab = openTab.openTab;
  const arg1 = openTab;
  const dismissPanel = React.useContext(importDefault(dependencyMap[27])).dismissPanel;
  const importDefault = dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = React.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      callback({ tab: "chat", source: callback(closure_2[28]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  let obj = { onPress: callback };
  obj = { IconComponent: arg1(dependencyMap[30]).ChatIcon };
  obj.icon = jsx(arg1(dependencyMap[26]).TableRowIcon, obj);
  const intl = arg1(dependencyMap[17]).intl;
  obj.label = intl.string(arg1(dependencyMap[17]).t.5KxXrK);
  return jsx(arg1(dependencyMap[25]).TableRow, obj);
};
export const SoundboardButton = function SoundboardButton(channel) {
  const tmp = importDefault(dependencyMap[31]);
  let tmp5 = null;
  if (tmpResult.visible) {
    let obj = {};
    const intl = arg1(dependencyMap[17]).intl;
    obj.label = intl.string(arg1(dependencyMap[17]).t.ABjMWI);
    obj.onPress = tmp3;
    obj.disabled = tmp4;
    obj = { IconComponent: arg1(dependencyMap[32]).SoundboardIcon };
    obj.icon = jsx(arg1(dependencyMap[26]).TableRowIcon, obj);
    tmp5 = jsx(arg1(dependencyMap[25]).TableRow, obj);
  }
  return tmp5;
};
export const ScreenshareButton = function ScreenshareButton(channel) {
  let imgSource;
  let isFeatureEnabled;
  let text;
  const tmp = importDefault(dependencyMap[33])(channel.channel);
  const onPress = tmp.onPress;
  const arg1 = onPress;
  const isActive = tmp.isActive;
  const importDefault = isActive;
  const items = [isActive, onPress];
  ({ imgSource, text, isFeatureEnabled } = tmp);
  const callback = React.useCallback(() => {
    let obj = isActive(closure_2[34]);
    obj = { source: "voice controls", was_active: isActive };
    obj.track(constants.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, obj);
    onPress();
  }, items);
  const obj = { disabled: !isFeatureEnabled, onPress: callback, icon: jsx(arg1(dependencyMap[26]).TableRowIcon, { source: imgSource }), label: text };
  return jsx(arg1(dependencyMap[25]).TableRow, obj);
};
export const StreamVolumeItem = function StreamVolumeItem() {
  let obj = arg1(dependencyMap[21]);
  const items = [closure_9, closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const lastActiveStream = lastActiveStream.getLastActiveStream();
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
  if (null != stateFromStores) {
    ownerId = stateFromStores.ownerId;
  }
  importDefault(dependencyMap[35])(ownerId, MediaEngineContextTypes.STREAM);
  let tmp8Result = null;
  if (null != stateFromStores) {
    obj = {};
    const intl = arg1(dependencyMap[17]).intl;
    obj.title = intl.string(arg1(dependencyMap[17]).t.pEAl4b);
    obj.hasIcons = false;
    obj = {};
    const obj1 = {};
    const tmp11 = jsx;
    const tmp12 = jsx;
    const tmp14 = importDefault(dependencyMap[36]);
    const tmp8 = jsx;
    let fn;
    if (obj5.isAndroid()) {
      fn = () => true;
    }
    obj1.onResponderGrant = fn;
    obj1.value = tmp5;
    obj1.onValueChange = tmp6;
    obj1.color = importDefault(dependencyMap[38]).unsafe_rawColors.WHITE;
    obj1.maxTrackTintColor = importDefault(dependencyMap[38]).unsafe_rawColors.PRIMARY_300;
    obj.label = tmp12(tmp14, obj1);
    obj.children = tmp11(arg1(dependencyMap[25]).TableRow, obj);
    tmp8Result = tmp8(arg1(dependencyMap[19]).TableRowGroup, obj);
    const obj5 = arg1(dependencyMap[37]);
  }
  return tmp8Result;
};
export const DeafenSwitch = function DeafenSwitch() {
  let obj = arg1(dependencyMap[21]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => selfDeaf.isSelfDeaf());
  obj = {};
  obj = { IconComponent: arg1(dependencyMap[41]).HeadphonesSlashIcon, source: importDefault(dependencyMap[42]) };
  obj.icon = jsx(arg1(dependencyMap[26]).TableRowIcon, obj);
  const intl = arg1(dependencyMap[17]).intl;
  obj.accessibilityHint = intl.string(arg1(dependencyMap[17]).t.wjcRFX);
  obj.value = stateFromStores;
  obj.onValueChange = toggleDeaf;
  const intl2 = arg1(dependencyMap[17]).intl;
  obj.label = intl2.string(arg1(dependencyMap[17]).t.wjcRFX);
  const intl3 = arg1(dependencyMap[17]).intl;
  obj.subLabel = intl3.string(arg1(dependencyMap[17]).t.M3VN2U);
  return jsx(arg1(dependencyMap[40]).TableSwitchRow, obj);
};
export const AudioRouteButton = function AudioRouteButton(arg0) {
  ({ channel: closure_0, connected: closure_1 } = arg0);
  let obj = arg1(dependencyMap[43]);
  obj = {};
  obj.icon = jsx(arg1(dependencyMap[26]).TableRowIcon, { source: obj.useMaskedSpeakerStates().routeSource });
  obj.onPress = function onPress() {
    const result = lib(closure_2[44]).showAudioOutputSelector(lib.id, closure_1);
  };
  const intl = arg1(dependencyMap[17]).intl;
  obj.label = intl.string(arg1(dependencyMap[17]).t.A/Ly/2);
  obj.trailing = jsx(arg1(dependencyMap[45]).TableRowArrow, {});
  return jsx(arg1(dependencyMap[25]).TableRow, obj);
};
export const InviteButton = function InviteButton(channel) {
  channel = channel.channel;
  let obj = arg1(dependencyMap[46]);
  const canInviteMembers = obj.useCanInviteMembers(channel.id);
  arg1(dependencyMap[47]);
  let tmp5 = null;
  if (!tmp2) {
    tmp5 = null;
    if (canInviteMembers) {
      tmp5 = null;
      if (channel.connected) {
        obj = { onPress: tmp4 };
        obj = { IconComponent: arg1(dependencyMap[48]).GroupPlusIcon, source: importDefault(dependencyMap[49]) };
        obj.icon = jsx(arg1(dependencyMap[26]).TableRowIcon, obj);
        const intl = arg1(dependencyMap[17]).intl;
        obj.label = intl.string(arg1(dependencyMap[17]).t.f1+QIK);
        obj.trailing = jsx(arg1(dependencyMap[45]).TableRowArrow, {});
        tmp5 = jsx(arg1(dependencyMap[25]).TableRow, obj);
      }
    }
  }
  return tmp5;
};
export const HideNonVideoParticipants = function HideNonVideoParticipants(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  let obj = arg1(dependencyMap[21]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => voiceParticipantsHidden.getVoiceParticipantsHidden(channelId));
  const importDefault = stateFromStores;
  const items1 = [channelId, stateFromStores];
  const callback = React.useCallback(() => {
    const result = stateFromStores(closure_2[50]).toggleVoiceParticipantsHidden(channelId, !stateFromStores);
  }, items1);
  obj = {};
  obj = { IconComponent: arg1(dependencyMap[51]).VideoIcon, source: importDefault(dependencyMap[52]) };
  obj.icon = jsx(arg1(dependencyMap[26]).TableRowIcon, obj);
  const intl = arg1(dependencyMap[17]).intl;
  obj.accessibilityHint = intl.string(arg1(dependencyMap[17]).t.ZMTRyc);
  obj.value = stateFromStores;
  obj.onValueChange = callback;
  const intl2 = arg1(dependencyMap[17]).intl;
  obj.label = intl2.string(arg1(dependencyMap[17]).t.ZMTRyc);
  const intl3 = arg1(dependencyMap[17]).intl;
  obj.subLabel = intl3.string(arg1(dependencyMap[17]).t.MlpCFS);
  return jsx(arg1(dependencyMap[40]).TableSwitchRow, obj);
};
export const HideSelfVideo = function HideSelfVideo() {
  const tmp2 = callback(importDefault(closure_2[53])(id.getId()), 3);
  const arg1 = tmp3;
  const importDefault = tmp2[2];
  let obj = arg1(closure_2[21]);
  const items = [closure_7];
  closure_2 = obj.useStateFromStores(items, () => obj.disableHideSelfStreamAndVideoConfirmationAlert);
  let tmp4 = null;
  if (tmp2[0]) {
    obj = {};
    obj = { IconComponent: arg1(closure_2[54]).UserSquareIcon };
    obj.icon = jsx(arg1(closure_2[26]).TableRowIcon, obj);
    obj.value = !tmp3;
    obj.onValueChange = function onValueChange() {
      if (!closure_2) {
        if (!tmp3) {
          const tmp3 = function openHideSelfStreamAndVideoConfirmDialog(VIDEO, arg1) {
            let obj = arg1(closure_2[14]);
            obj = {
              importer() {
                return arg0(paths[16])(paths[15], paths.paths).then((arg0) => {
                  let closure_0 = arg0.default;
                  return () => { ... };
                });
              }
            };
            obj.openLazy(obj);
          }(constants.VIDEO, () => callback(!closure_0));
        }
      }
      return callback(!tmp3);
    };
    const intl = arg1(closure_2[17]).intl;
    obj.label = intl.string(arg1(closure_2[17]).t.MH8ESU);
    tmp4 = jsx(arg1(closure_2[40]).TableSwitchRow, obj);
  }
  return tmp4;
};
export const LeaveActivitiesButton = function LeaveActivitiesButton() {
  let obj = {};
  obj = { source: importDefault(dependencyMap[55]) };
  obj.icon = jsx(arg1(dependencyMap[26]).TableRowIcon, obj);
  const intl = arg1(dependencyMap[17]).intl;
  obj.label = intl.string(arg1(dependencyMap[17]).t.R/FK4A);
  obj.onPress = function onPress() {
    const currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    let obj = callback(closure_2[56]);
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
  return jsx(arg1(dependencyMap[25]).TableRow, obj);
};
export const ShareActivityLogsButton = function ShareActivityLogsButton() {
  let label;
  let onPress;
  let obj = arg1(dependencyMap[57]);
  const shareActivityLogsResult = obj.shareActivityLogs();
  const icon = shareActivityLogsResult.icon;
  ({ label, onPress } = shareActivityLogsResult);
  obj = {};
  let tmp3;
  if (null != icon) {
    obj = { source: icon };
    tmp3 = jsx(arg1(dependencyMap[26]).TableRowIcon, obj);
  }
  obj.icon = tmp3;
  obj.label = label;
  obj.onPress = onPress;
  return jsx(arg1(dependencyMap[25]).TableRow, obj);
};
export const ToggleShowActivitiesDebugOverlay = function ToggleShowActivitiesDebugOverlay() {
  let obj = arg1(dependencyMap[21]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  obj = {};
  obj = { source: importDefault(dependencyMap[58]) };
  obj.icon = jsx(arg1(dependencyMap[26]).TableRowIcon, obj);
  obj.value = stateFromStores;
  obj.onValueChange = function onValueChange(visible) {
    let obj = callback(closure_2[59]);
    obj = { type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible };
    obj.dispatch(obj);
  };
  const intl = arg1(dependencyMap[17]).intl;
  obj.label = intl.string(arg1(dependencyMap[17]).t.qv5/SP);
  return jsx(arg1(dependencyMap[40]).TableSwitchRow, obj);
};
export const VoiceSettingsButton = function VoiceSettingsButton(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const items = [guildId];
  const callback = React.useCallback(() => {
    const result = guildId(closure_2[60]).showVoiceSettingsActionSheet(guildId);
  }, items);
  let obj = { onPress: callback };
  obj = { IconComponent: arg1(dependencyMap[61]).SettingsIcon, source: importDefault(dependencyMap[62]) };
  obj.icon = jsx(arg1(dependencyMap[26]).TableRowIcon, obj);
  const intl = arg1(dependencyMap[17]).intl;
  obj.label = intl.string(arg1(dependencyMap[17]).t.NiTd0e);
  const intl2 = arg1(dependencyMap[17]).intl;
  obj.subLabel = intl2.string(arg1(dependencyMap[17]).t.16SG+O);
  obj.trailing = jsx(arg1(dependencyMap[45]).TableRowArrow, {});
  return jsx(arg1(dependencyMap[25]).TableRow, obj);
};
export const ReportStreamIssueButton = function ReportStreamIssueButton(stream) {
  let label;
  let onPress;
  let obj = arg1(dependencyMap[57]);
  const reportStreamIssueResult = obj.reportStreamIssue(stream.stream);
  const icon = reportStreamIssueResult.icon;
  ({ label, onPress } = reportStreamIssueResult);
  obj = {};
  let tmp3;
  if (null != icon) {
    obj = { source: icon };
    tmp3 = jsx(arg1(dependencyMap[26]).TableRowIcon, obj);
  }
  obj.icon = tmp3;
  obj.label = label;
  obj.onPress = onPress;
  return jsx(arg1(dependencyMap[25]).TableRow, obj);
};
export const RTCDebugPanelButton = function RTCDebugPanelButton() {
  let label;
  let onPress;
  let obj = arg1(dependencyMap[57]);
  const rtcDebugPanelResult = obj.rtcDebugPanel(() => {

  });
  const icon = rtcDebugPanelResult.icon;
  ({ label, onPress } = rtcDebugPanelResult);
  obj = {};
  let tmp3;
  if (null != icon) {
    obj = { source: icon };
    tmp3 = jsx(arg1(dependencyMap[26]).TableRowIcon, obj);
  }
  obj.icon = tmp3;
  obj.label = label;
  obj.onPress = onPress;
  return jsx(arg1(dependencyMap[25]).TableRow, obj);
};
