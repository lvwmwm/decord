// Module ID: 17633
// Function ID: 17634
// Name: VoicePanelVoiceControlsButtons
// Dependencies: [32, 19, 2044, 4774, 1188, 9651, 4780, 502, 1996, 4777, 1078, 17634, 4783, 21, 5111, 17635, 1984, 1119, 558, 568, 10019, 5903, 10174, 504, 4458, 10021, 10038, 5828, 5822, 12419, 17594, 5280, 5291, 17622, 12691, 10206, 1245, 10271, 1368, 10240, 580, 9889, 9921, 17536, 7446, 9882, 9912, 5829, 17495, 17496, 10286, 10255, 4959, 11733, 10205, 17636, 9489, 9572, 10374, 17637, 577, 13219, 10232, 7624, 17535, 2]

// Module 17633 (VoicePanelVoiceControlsButtons)
import c from "c" /* 568 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import util from "util" /* 1119 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4458 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4959 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5111 */;
import TableRowIcon from "TableRowIcon" /* 5828 */;
import TableRowArrow from "TableRowArrow" /* 5829 */;
import TableRowGroup from "TableRowGroup" /* 5903 */;
import TableSwitchRow from "TableSwitchRow" /* 7446 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9572 */;
import CallsUtils from "CallsUtils" /* 9882 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9889 */;
import showAudioOutputSelector from "showAudioOutputSelector" /* 9912 */;
import HeadphonesSlashIcon from "HeadphonesSlashIcon" /* 9921 */;
import useGameConsoleAccountsDefault from "useGameConsoleAccounts" /* 10019 */;
import useIsVoiceChannelFullDefault from "useIsVoiceChannelFull" /* 10174 */;
import ChannelCallConnectingScreen from "ChannelCallConnectingScreen" /* 10232 */;
import useMuteAwareLocalVolumeDefault from "useMuteAwareLocalVolume" /* 10271 */;
import _modDef10374 from "module_10374" /* 10374 */;
import _modDef13219 from "module_13219" /* 13219 */;
import useCanInviteMembers from "useCanInviteMembers" /* 17495 */;
import useInviteMembersCallback from "useInviteMembersCallback" /* 17496 */;
import _modDef17535 from "module_17535" /* 17535 */;
import _modDef17536 from "module_17536" /* 17536 */;
import useSoundboardConfig from "useSoundboardConfig" /* 17622 */;
import useHideSelfVideoDefault from "useHideSelfVideo" /* 17636 */;
import ChannelCallUtils from "ChannelCallUtils" /* 17637 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4774 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1188 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9651 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4780 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;
import VoiceStateStore from "VoiceStateStore" /* 4777 */;

const useSoundboardConfigDefault = useSoundboardConfig;

const initialize = TableRow(504);
const PlatformUtils = TableRow(1368);
const TableRow2 = TableRow(5822);
const _modDef10255 = tmp5(10255);
require = fn;
function getGameConsoleLabel(connected, type) {
  if (type === constants2.XBOX) {
    const intl3 = util.intl;
    const string3 = intl3.string;
    let t = util.t;
    if (connected) {
      t = t["qVE/VF"];
      let string3Result = string3(t);
    } else {
      string3Result = string3(t.E8euSk);
    }
  } else if (type === tmp.PLAYSTATION) {
    const intl2 = util.intl;
    const string2 = intl2.string;
    let vzfxmY = util.t;
    if (connected) {
      vzfxmY = vzfxmY.vzfxmY;
      let string2Result = string2(vzfxmY);
    } else {
      string2Result = string2(vzfxmY.QxEYDj);
    }
  } else if (type === tmp.PLAYSTATION_STAGING) {
    const intl = util.intl;
    const string = intl.string;
    let BDiXtV = util.t;
    if (connected) {
      BDiXtV = BDiXtV.BDiXtV;
      let stringResult = string(BDiXtV);
    } else {
      stringResult = string(BDiXtV["bhdB9+"]);
    }
  }
}
function toggleDeaf() {
  AudioActionCreatorsDefault.toggleSelfDeaf();
}
const Constants = fn(1078);
({ AnalyticEvents: map1, PlatformTypes: closure_14 } = Constants);
const constants3 = fn(17634).SelfStreamAndVideoAlertType;
const MediaEngineContextTypes = fn(4783).MediaEngineContextTypes;
const jsx = fn(21).jsx;
fn(558);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(onConnectToConsole[19]).c(19);
  channel = channel.channel;
  ({ account, connected } = channel);
  const obj = channel(onConnectToConsole[19]);
  const tmp4 = require("useIsVoiceChannelFull")(channel);
  let tmp5 = channel(onConnectToConsole[22]).useIsVoiceChannelLocked(channel) && !channel.isPrivate();
  importDefault = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    const fn = function t() {
      return VoiceStateStore.isInChannel(channel.id);
    };
    cResult[1] = channel.id;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj2 = channel(onConnectToConsole[22]);
  const stateFromStores = channel(onConnectToConsole[23]).useStateFromStores(first, tmp8);
  let tmp10 = !stateFromStores;
  if (!stateFromStores) {
    tmp10 = tmp4;
  }
  if (!tmp10) {
    tmp10 = tmp5;
  }
  if (cResult[3] !== tmp5) {
    const fn2 = function v() {
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
      const intl2 = tmp5(1119).intl;
      const string2 = intl2.string;
      const t2 = tmp5(1119).t;
      if (closure_1) {
        let string2Result = string2(t2.rimHDW);
      } else {
        string2Result = string2(t2.rZfiNq);
      }
      obj2.content = string2Result;
      ToastActionCreatorsDefault.open(obj2);
    };
    cResult[3] = tmp5;
    cResult[4] = fn2;
  }
  const tmpResult = channel(onConnectToConsole[23]);
  onConnectToConsole = channel(onConnectToConsole[25]).useOnConnectToConsole(channel, account);
  if (cResult[5] !== onConnectToConsole) {
    class R {
      constructor() {
        tmp = closure_2();
        return;
      }
    }
    cResult[5] = onConnectToConsole;
    cResult[6] = R;
  } else {
    class R {
      constructor() {
        tmp = closure_2();
        return;
      }
    }
  }
  if (cResult[7] === account.type) {
    class R {
      constructor() {
        tmp = closure_2();
        return;
      }
    }
    if (cResult[10] !== account.type) {
      class R {
        constructor() {
          tmp = closure_2();
          return;
        }
      }
      cResult[10] = account.type;
      cResult[11] = tmp17;
    } else {
      class R {
        constructor() {
          tmp = closure_2();
          return;
        }
      }
    }
    if (null == tmp14) {
      class R {
        constructor() {
          tmp = closure_2();
          return;
        }
      }
    } else {
      class R {
        constructor() {
          tmp = closure_2();
          return;
        }
      }
      if (tmp10) {
        class R {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
      }
      if (cResult[14] === tmp10) {
        class R {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
      }
      const obj3 = { icon: tmp19, label: tmp14, disabled: tmp10, onPress: tmp13 };
      const tmp22 = jsx(tmp(tmp2[28]).TableRow, { icon: tmp19, label: tmp14, disabled: tmp10, onPress: tmp13 });
      cResult[14] = tmp10;
      cResult[15] = tmp14;
      cResult[16] = tmp19;
      cResult[17] = tmp13;
      cResult[18] = tmp22;
    }
  }
  const tmp15 = getGameConsoleLabel(connected, account.type);
  cResult[7] = account.type;
  cResult[8] = connected;
  cResult[9] = tmp15;
}) : ((channel) => {
  channel = channel.channel;
  const account = channel.account;
  importDefault = undefined;
  let onConnectToConsole;
  const tmp = importDefault;
  const tmp3 = require("useIsVoiceChannelFull")(channel);
  let tmp5 = channel(onConnectToConsole[22]).useIsVoiceChannelLocked(channel) && !channel.isPrivate();
  importDefault = tmp5;
  const obj = channel(onConnectToConsole[22]);
  const items = [VoiceStateStore];
  const stateFromStores = channel(onConnectToConsole[23]).useStateFromStores(items, () => VoiceStateStore.isInChannel(channel.id));
  let tmp7 = !stateFromStores;
  if (!stateFromStores) {
    tmp7 = tmp3;
  }
  if (!tmp7) {
    tmp7 = tmp5;
  }
  const items1 = [tmp5];
  const callback = noop.useCallback(() => {
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
    const intl2 = tmp5(1119).intl;
    const string2 = intl2.string;
    const t2 = tmp5(1119).t;
    if (closure_1) {
      let string2Result = string2(t2.rimHDW);
    } else {
      string2Result = string2(t2.rZfiNq);
    }
    obj2.content = string2Result;
    ToastActionCreatorsDefault.open(obj2);
  }, items1);
  const tmp4Result = channel(onConnectToConsole[23]);
  onConnectToConsole = channel(onConnectToConsole[25]).useOnConnectToConsole(channel, account);
  const items2 = [onConnectToConsole];
  let callback1 = noop.useCallback(() => {
    onConnectToConsole();
  }, items2);
  const tmp11 = getGameConsoleLabel(channel.connected, account.type);
  const tmp12 = tmp(onConnectToConsole[26])(account.type);
  let tmp14Result2 = null;
  if (null != tmp11) {
    let tmp14Result;
    if (null != tmp12) {
      let obj2 = { source: tmp12 };
      tmp14Result = tmp14(tmp4(tmp2[27]).TableRowIcon, obj2);
    }
    const obj3 = { icon: tmp14Result, label: tmp11, disabled: tmp7, onPress: null };
    if (tmp7) {
      callback1 = callback;
    }
    obj3.onPress = callback1;
    tmp14Result2 = tmp14(tmp4(tmp2[28]).TableRow, obj3);
  }
  return tmp14Result2;
});
let closure_19 = tmp4;
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(568).c(4);
  channel = channel.channel;
  const connected = channel.connected;
  const arr = connected(10019)();
  if (cResult[0] === channel) {
    if (cResult[1] === connected) {
      if (cResult[2] === arr) {
        let tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  let tmp5 = null;
  if (arr.length > 0) {
    const obj2 = { title: null, hasIcons: true, children: null };
    const intl = tmp(1119).intl;
    obj2.title = intl.string(tmp(1119).t["mbi/fB"]);
    obj2.children = arr.map((account) => <closure_19 key={arg0.type} account={arg0} channel={channel} connected={connected} />);
    tmp5 = jsx(tmp(5903).TableRowGroup, { title: null, hasIcons: true, children: null });
  }
  cResult[0] = channel;
  cResult[1] = connected;
  cResult[2] = arr;
  cResult[3] = tmp5;
  tmp4 = tmp5;
}) : ((arg0) => {
  ({ channel: require, connected: importDefault } = arg0);
  const arr = useGameConsoleAccountsDefault();
  let tmp2 = null;
  if (arr.length > 0) {
    const obj = { title: null, hasIcons: true, children: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["mbi/fB"]);
    obj.children = arr.map((account) => <closure_19 key={arg0.type} account={arg0} channel={channel} connected={connected} />);
    tmp2 = jsx(TableRowGroup.TableRowGroup, { title: null, hasIcons: true, children: null });
  }
  return tmp2;
});
ReactCompilerGating = fn(558);
tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((openTab) => {
  const cResult = openTab(568).c(7);
  openTab = openTab.openTab;
  dismissPanel = noop.useContext(dismissPanel(12419)).dismissPanel;
  if (cResult[0] === dismissPanel) {
    if (cResult[1] === openTab) {
      let tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { IconComponent: tmp(5280).AppsIcon };
      const tmp9 = jsx(tmp(5828).TableRowIcon, { IconComponent: tmp(5280).AppsIcon });
      const intl = tmp(1119).intl;
      const stringResult = intl.string(tmp(1119).t.aeuOoh);
      cResult[3] = tmp9;
      cResult[4] = stringResult;
      let tmp7 = stringResult;
      let tmp6 = tmp9;
    } else {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    if (cResult[5] !== tmp4) {
      const obj3 = { onPress: tmp4, icon: tmp6, label: tmp7 };
      const tmp13 = jsx(tmp(5822).TableRow, { onPress: tmp4, icon: tmp6, label: tmp7 });
      cResult[5] = tmp4;
      cResult[6] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[6];
    }
    return tmp11;
  }
  const fn = function t() {
    dismissPanel();
    const timerId = setTimeout(() => {
      closure_1_0({ tab: "app_launcher", source: openTab(dependencyMap[30]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  };
  cResult[0] = dismissPanel;
  cResult[1] = openTab;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((openTab) => {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = noop.useContext(dismissPanel(12419)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = noop.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      closure_1_0({ tab: "app_launcher", source: openTab(dependencyMap[30]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  const obj = { onPress: callback, icon: jsx(openTab(5828).TableRowIcon, { IconComponent: openTab(5280).AppsIcon }), label: null };
  const intl = openTab(1119).intl;
  obj.label = intl.string(openTab(1119).t.aeuOoh);
  return jsx(openTab(5822).TableRow, { onPress: callback, icon: jsx(openTab(5828).TableRowIcon, { IconComponent: openTab(5280).AppsIcon }), label: null });
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((openTab) => {
  const cResult = openTab(568).c(7);
  openTab = openTab.openTab;
  dismissPanel = noop.useContext(dismissPanel(12419)).dismissPanel;
  if (cResult[0] === dismissPanel) {
    if (cResult[1] === openTab) {
      let tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { IconComponent: tmp(5291).ChatIcon };
      const tmp9 = jsx(tmp(5828).TableRowIcon, { IconComponent: tmp(5291).ChatIcon });
      const intl = tmp(1119).intl;
      const stringResult = intl.string(tmp(1119).t["5KxXrK"]);
      cResult[3] = tmp9;
      cResult[4] = stringResult;
      let tmp7 = stringResult;
      let tmp6 = tmp9;
    } else {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    if (cResult[5] !== tmp4) {
      const obj3 = { onPress: tmp4, icon: tmp6, label: tmp7 };
      const tmp13 = jsx(tmp(5822).TableRow, { onPress: tmp4, icon: tmp6, label: tmp7 });
      cResult[5] = tmp4;
      cResult[6] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[6];
    }
    return tmp11;
  }
  const fn = function t() {
    dismissPanel();
    const timerId = setTimeout(() => {
      closure_1_0({ tab: "chat", source: openTab(dependencyMap[30]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  };
  cResult[0] = dismissPanel;
  cResult[1] = openTab;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((openTab) => {
  openTab = openTab.openTab;
  let dismissPanel;
  dismissPanel = noop.useContext(dismissPanel(12419)).dismissPanel;
  const items = [dismissPanel, openTab];
  const callback = noop.useCallback(() => {
    dismissPanel();
    const timerId = setTimeout(() => {
      closure_1_0({ tab: "chat", source: openTab(dependencyMap[30]).VoicePanelTabAnalyticsSources.VOICE_CONTROLS });
    }, 200);
  }, items);
  const obj = { onPress: callback, icon: jsx(openTab(5828).TableRowIcon, { IconComponent: openTab(5291).ChatIcon }), label: null };
  const intl = openTab(1119).intl;
  obj.label = intl.string(openTab(1119).t["5KxXrK"]);
  return jsx(openTab(5822).TableRow, { onPress: callback, icon: jsx(openTab(5828).TableRowIcon, { IconComponent: openTab(5291).ChatIcon }), label: null });
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = c.c(5);
  ({ visible, handlePress, disabled, disabledAccessibilityHint } = useSoundboardConfigDefault(channel.channel.id, useSoundboardConfig.SoundboardButtonLocation.VOICE_CONTROLS));
  if (cResult[0] === disabled) {
    if (cResult[1] === disabledAccessibilityHint) {
      if (cResult[2] === handlePress) {
        if (cResult[3] === visible) {
          let tmp6 = cResult[4];
        }
        return tmp6;
      }
    }
  }
  let tmp7 = null;
  if (visible) {
    const obj2 = { label: null, onPress: null, disabled: null, accessibilityHint: null, icon: null };
    const intl = tmp(1119).intl;
    obj2.label = intl.string(tmp(1119).t.ABjMWI);
    obj2.onPress = handlePress;
    obj2.disabled = disabled;
    obj2.accessibilityHint = disabledAccessibilityHint;
    const obj3 = { IconComponent: tmp(12691).SoundboardIcon };
    obj2.icon = jsx(tmp(5828).TableRowIcon, { IconComponent: tmp(12691).SoundboardIcon });
    tmp7 = jsx(tmp(5822).TableRow, { label: null, onPress: null, disabled: null, accessibilityHint: null, icon: null });
  }
  cResult[0] = disabled;
  cResult[1] = disabledAccessibilityHint;
  cResult[2] = handlePress;
  cResult[3] = visible;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : ((channel) => {
  let tmp8 = null;
  if (tmp2Result.visible) {
    const obj = { label: null, onPress: null, disabled: null, accessibilityHint: null, icon: null };
    const intl = tmp3(1119).intl;
    obj.label = intl.string(tmp3(1119).t.ABjMWI);
    obj.onPress = tmp5;
    obj.disabled = tmp6;
    obj.accessibilityHint = tmp7;
    const obj2 = { IconComponent: tmp3(12691).SoundboardIcon };
    obj.icon = jsx(tmp3(5828).TableRowIcon, { IconComponent: tmp3(12691).SoundboardIcon });
    tmp8 = jsx(tmp3(5822).TableRow, { label: null, onPress: null, disabled: null, accessibilityHint: null, icon: null });
  }
  return tmp8;
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = onPress(568).c(10);
  const tmp4 = isActive(10206)(channel.channel);
  onPress = tmp4.onPress;
  ({ imgSource, text, isActive } = tmp4);
  if (cResult[0] === isActive) {
    if (cResult[1] === onPress) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== imgSource) {
      const obj2 = { source: imgSource };
      const tmp10 = jsx(tmp(5828).TableRowIcon, { source: imgSource });
      cResult[3] = imgSource;
      cResult[4] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp6) {
      if (cResult[6] === tmp7) {
        if (cResult[7] === tmp8) {
          if (cResult[8] === text) {
            let tmp11 = cResult[9];
          }
          return tmp11;
        }
      }
    }
    const obj3 = { disabled: !tmp5, onPress: tmp6, icon: tmp8, label: text };
    const tmp13 = jsx(tmp(5822).TableRow, { disabled: !tmp5, onPress: tmp6, icon: tmp8, label: text });
    cResult[5] = tmp6;
    cResult[6] = !tmp5;
    cResult[7] = tmp8;
    cResult[8] = text;
    cResult[9] = tmp13;
    tmp11 = tmp13;
  }
  const fn = function o() {
    AnalyticsUtilsDefault.track(constants.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, { source: "voice controls", was_active: isActive });
    onPress();
  };
  cResult[0] = isActive;
  cResult[1] = onPress;
  cResult[2] = fn;
  tmp6 = fn;
}) : ((channel) => {
  let isActive;
  const tmp = isActive(10206)(channel.channel);
  const onPress = tmp.onPress;
  isActive = tmp.isActive;
  const items = [isActive, onPress];
  ({ imgSource, text, isFeatureEnabled } = tmp);
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED, { source: "voice controls", was_active: isActive });
    onPress();
  }, items);
  return jsx(onPress(5822).TableRow, { disabled: !isFeatureEnabled, onPress: callback, icon: jsx(onPress(5828).TableRowIcon, { source: imgSource }), label: text });
});
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let TableRow = require;
  let PRIMARY_300 = dependencyMap;
  const cResult = c.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStreamingStore, AuthenticationStore];
    const fn = function o() {
      lastActiveStream = lastActiveStream.getLastActiveStream();
      let tmp2 = null;
      if (null != lastActiveStream) {
        tmp2 = null;
        if (lastActiveStream.ownerId !== id.getId()) {
          tmp2 = lastActiveStream;
        }
      }
      return tmp2;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp2 = items;
    tmp3 = fn;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp2, tmp3);
  let ownerId;
  const TableRowResult = initialize;
  if (stateFromStores != null) {
    ownerId = stateFromStores.ownerId;
  }
  ({ effectiveVolume, handleVolumeChange } = useMuteAwareLocalVolumeDefault(ownerId, MediaEngineContextTypes.STREAM));
  if (null == stateFromStores) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.pEAl4b);
      cResult[2] = stringResult;
      let tmp11 = stringResult;
    } else {
      tmp11 = cResult[2];
    }
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let fn2;
      if (TableRowResult1.isAndroid()) {
        fn2 = () => true;
      }
      cResult[3] = fn2;
      let WHITE = fn2;
      TableRowResult1 = PlatformUtils;
    } else {
      WHITE = cResult[3];
    }
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult1 = intl2.string(util.t.pEAl4b);
      cResult[4] = stringResult1;
      let tmp13 = stringResult1;
    } else {
      tmp13 = cResult[4];
    }
    if (cResult[5] === effectiveVolume) {
    }
    const obj2 = { title: tmp11, hasIcons: false, children: null };
    TableRow = TableRow2.TableRow;
    const obj3 = { label: null };
    const obj4 = { onResponderGrant: WHITE, value: effectiveVolume, onValueChange: handleVolumeChange, color: null, maxTrackTintColor: null, accessibilityLabel: null };
    WHITE = tmp7(580).unsafe_rawColors.WHITE;
    obj4.color = WHITE;
    PRIMARY_300 = tmp7(580).unsafe_rawColors.PRIMARY_300;
    obj4.maxTrackTintColor = PRIMARY_300;
    obj4.accessibilityLabel = tmp13;
    obj3.label = jsx(tmp7(10240), { onResponderGrant: WHITE, value: effectiveVolume, onValueChange: handleVolumeChange, color: null, maxTrackTintColor: null, accessibilityLabel: null });
    tmp11 = <TableRow label={null} />;
    obj2.children = tmp11;
    const tmp18 = jsx(TableRowGroup.TableRowGroup, { title: tmp11, hasIcons: false, children: null });
    cResult[5] = effectiveVolume;
    cResult[6] = handleVolumeChange;
    cResult[7] = tmp18;
    const tmp7Result = tmp7(10240);
  }
}) : (() => {
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
    const intl = tmp(1119).intl;
    obj2.title = intl.string(tmp(1119).t.pEAl4b);
    const tmp4Result = tmp4(10240);
    let fn;
    if (tmpResult.isAndroid()) {
      fn = () => true;
    }
    const obj3 = { label: null };
    const obj4 = { onResponderGrant: fn, value: tmp8, onValueChange: tmp9, color: tmp4(580).unsafe_rawColors.WHITE, maxTrackTintColor: tmp4(580).unsafe_rawColors.PRIMARY_300, accessibilityLabel: null };
    const intl2 = tmp(1119).intl;
    obj4.accessibilityLabel = intl2.string(tmp(1119).t.pEAl4b);
    obj3.label = <tmp4Result onResponderGrant={fn} value={tmp8} onValueChange={tmp9} color={tmp4(580).unsafe_rawColors.WHITE} maxTrackTintColor={tmp4(580).unsafe_rawColors.PRIMARY_300} accessibilityLabel={null} />;
    obj2.children = jsx(tmp(5822).TableRow, { label: null });
    tmp11Result = tmp11(tmp(5903).TableRowGroup, obj2);
    tmpResult = tmp(1368);
  }
  return tmp11Result;
});
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function o() {
      return selfDeaf.isSelfDeaf();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { IconComponent: tmp(9921).HeadphonesSlashIcon, source: _modDef17536 };
    const tmp12 = jsx(tmp(5828).TableRowIcon, { IconComponent: tmp(9921).HeadphonesSlashIcon, source: _modDef17536 });
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.wjcRFX);
    cResult[2] = tmp12;
    cResult[3] = stringResult;
    let tmp9 = stringResult;
    let tmp8 = tmp12;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(tmp(1119).t.wjcRFX);
    const intl3 = tmp(1119).intl;
    const stringResult2 = intl3.string(tmp(1119).t.M3VN2U);
    cResult[4] = stringResult1;
    cResult[5] = stringResult2;
    let tmp15 = stringResult2;
    let tmp14 = stringResult1;
  } else {
    tmp14 = cResult[4];
    tmp15 = cResult[5];
  }
  if (cResult[6] !== stateFromStores) {
    const obj3 = { icon: tmp8, accessibilityHint: tmp9, value: stateFromStores, onValueChange: toggleDeaf, label: tmp14, subLabel: tmp15 };
    const tmp21 = jsx(tmp(7446).TableSwitchRow, { icon: tmp8, accessibilityHint: tmp9, value: stateFromStores, onValueChange: toggleDeaf, label: tmp14, subLabel: tmp15 });
    cResult[6] = stateFromStores;
    cResult[7] = tmp21;
    let tmp18 = tmp21;
  } else {
    tmp18 = cResult[7];
  }
  return tmp18;
}) : (() => {
  const items = [MediaEngineStore];
  const stateFromStores = initialize.useStateFromStores(items, () => selfDeaf.isSelfDeaf());
  const obj2 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  obj2.icon = jsx(TableRowIcon.TableRowIcon, { IconComponent: HeadphonesSlashIcon.HeadphonesSlashIcon, source: _modDef17536 });
  const intl = util.intl;
  obj2.accessibilityHint = intl.string(util.t.wjcRFX);
  obj2.value = stateFromStores;
  obj2.onValueChange = toggleDeaf;
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.wjcRFX);
  const intl3 = util.intl;
  obj2.subLabel = intl3.string(util.t.M3VN2U);
  return jsx(TableSwitchRow.TableSwitchRow, { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null });
});
ReactCompilerGating = fn(558);
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(568).c(10);
  channel = channel.channel;
  const connected = channel.connected;
  const obj = channel(568);
  const routeSource = channel(9882).useMaskedSpeakerStates().routeSource;
  if (cResult[0] !== routeSource) {
    const obj3 = { source: routeSource };
    const tmp6 = jsx(tmp(5828).TableRowIcon, { source: routeSource });
    cResult[0] = routeSource;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === channel.id) {
    if (cResult[3] === connected) {
      let tmp7 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult = intl.string(tmp(1119).t["A/Ly/2"]);
      const tmp13 = jsx(tmp(5829).TableRowArrow, {});
      cResult[5] = stringResult;
      cResult[6] = tmp13;
      let tmp10 = tmp13;
      let tmp9 = stringResult;
    } else {
      tmp9 = cResult[5];
      tmp10 = cResult[6];
    }
    if (cResult[7] === tmp4) {
      if (cResult[8] === tmp7) {
        let tmp14 = cResult[9];
      }
      return tmp14;
    }
    const obj4 = { icon: tmp4, onPress: tmp7, label: tmp9, trailing: tmp10 };
    const tmp16 = jsx(tmp(5822).TableRow, { icon: tmp4, onPress: tmp7, label: tmp9, trailing: tmp10 });
    cResult[7] = tmp4;
    cResult[8] = tmp7;
    cResult[9] = tmp16;
    tmp14 = tmp16;
  }
  const fn = function t() {
    const result = showAudioOutputSelector.showAudioOutputSelector(channel.id, connected);
  };
  cResult[2] = channel.id;
  cResult[3] = connected;
  cResult[4] = fn;
  tmp7 = fn;
}) : ((arg0) => {
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
  return jsx(TableRow2.TableRow, {
    icon: jsx(TableRowIcon.TableRowIcon, { source: CallsUtils.useMaskedSpeakerStates().routeSource }),
    onPress() {
      const result = showAudioOutputSelector.showAudioOutputSelector(id.id, importDefault);
    },
    label: null,
    trailing: null
  });
});
ReactCompilerGating = fn(558);
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  ({ channel, connected } = arg0);
  const canInviteMembers = useCanInviteMembers.useCanInviteMembers(channel.id);
  const tmp6 = useIsVoiceChannelFullDefault(channel);
  const inviteMembersCallback = useInviteMembersCallback.useInviteMembersCallback(channel.id);
  if (cResult[0] === canInviteMembers) {
    if (cResult[1] === connected) {
      if (cResult[2] === tmp6) {
        if (cResult[3] === inviteMembersCallback) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
    }
  }
  let tmp9 = null;
  if (!tmp6) {
    tmp9 = null;
    if (canInviteMembers) {
      tmp9 = null;
      if (connected) {
        const obj4 = { onPress: inviteMembersCallback, icon: null, label: null, trailing: null };
        const obj5 = { IconComponent: tmp(10286).GroupPlusIcon, source: _modDef10255 };
        obj4.icon = jsx(tmp(5828).TableRowIcon, { IconComponent: tmp(10286).GroupPlusIcon, source: _modDef10255 });
        const intl = tmp(1119).intl;
        obj4.label = intl.string(tmp(1119).t["f1+QIK"]);
        obj4.trailing = jsx(tmp(5829).TableRowArrow, {});
        tmp9 = jsx(tmp(5822).TableRow, { onPress: inviteMembersCallback, icon: null, label: null, trailing: null });
      }
    }
  }
  cResult[0] = canInviteMembers;
  cResult[1] = connected;
  cResult[2] = tmp6;
  cResult[3] = inviteMembersCallback;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((channel) => {
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
        const obj3 = { IconComponent: tmp(10286).GroupPlusIcon, source: _modDef10255 };
        obj2.icon = jsx(tmp(5828).TableRowIcon, { IconComponent: tmp(10286).GroupPlusIcon, source: _modDef10255 });
        const intl = tmp(1119).intl;
        obj2.label = intl.string(tmp(1119).t["f1+QIK"]);
        obj2.trailing = jsx(tmp(5829).TableRowArrow, {});
        tmp8 = jsx(tmp(5822).TableRow, { onPress: tmp7, icon: null, label: null, trailing: null });
      }
    }
  }
  return tmp8;
});
ReactCompilerGating = fn(558);
let tmp13 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(568).c(13);
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function t() {
      return ChannelRTCStore.getVoiceParticipantsHidden(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = channelId(568);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp6);
  if (cResult[3] === channelId) {
    if (cResult[4] === stateFromStores) {
      let tmp8 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { IconComponent: tmp(11733).VideoIcon, source: stateFromStores(10205) };
      const tmp13 = jsx(tmp(5828).TableRowIcon, { IconComponent: tmp(11733).VideoIcon, source: stateFromStores(10205) });
      const intl = tmp(1119).intl;
      const stringResult = intl.string(tmp(1119).t.ZMTRyc);
      cResult[6] = tmp13;
      cResult[7] = stringResult;
      let tmp10 = stringResult;
      let tmp9 = tmp13;
    } else {
      tmp9 = cResult[6];
      tmp10 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1119).intl;
      const stringResult1 = intl2.string(tmp(1119).t.ZMTRyc);
      const intl3 = tmp(1119).intl;
      const stringResult2 = intl3.string(tmp(1119).t.MlpCFS);
      cResult[8] = stringResult1;
      cResult[9] = stringResult2;
      let tmp16 = stringResult2;
      let tmp15 = stringResult1;
    } else {
      tmp15 = cResult[8];
      tmp16 = cResult[9];
    }
    if (cResult[10] === tmp8) {
      if (cResult[11] === stateFromStores) {
        let tmp19 = cResult[12];
      }
      return tmp19;
    }
    const obj3 = { icon: tmp9, accessibilityHint: tmp10, value: stateFromStores, onValueChange: tmp8, label: tmp15, subLabel: tmp16 };
    const tmp21 = jsx(tmp(7446).TableSwitchRow, { icon: tmp9, accessibilityHint: tmp10, value: stateFromStores, onValueChange: tmp8, label: tmp15, subLabel: tmp16 });
    cResult[10] = tmp8;
    cResult[11] = stateFromStores;
    cResult[12] = tmp21;
    tmp19 = tmp21;
  }
  const fn2 = function u() {
    const result = ChannelRTCActionCreatorsDefault.toggleVoiceParticipantsHidden(channelId, !stateFromStores);
  };
  cResult[3] = channelId;
  cResult[4] = stateFromStores;
  cResult[5] = fn2;
  tmp8 = fn2;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const items = [ChannelRTCStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelRTCStore.getVoiceParticipantsHidden(channelId));
  const items1 = [channelId, stateFromStores];
  const callback = noop.useCallback(() => {
    const result = ChannelRTCActionCreatorsDefault.toggleVoiceParticipantsHidden(channelId, !stateFromStores);
  }, items1);
  const obj2 = { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null };
  const obj = channelId(504);
  obj2.icon = jsx(channelId(5828).TableRowIcon, { IconComponent: channelId(11733).VideoIcon, source: stateFromStores(10205) });
  const intl = channelId(1119).intl;
  obj2.accessibilityHint = intl.string(channelId(1119).t.ZMTRyc);
  obj2.value = stateFromStores;
  obj2.onValueChange = callback;
  const intl2 = channelId(1119).intl;
  obj2.label = intl2.string(channelId(1119).t.ZMTRyc);
  const intl3 = channelId(1119).intl;
  obj2.subLabel = intl3.string(channelId(1119).t.MlpCFS);
  return jsx(channelId(7446).TableSwitchRow, { icon: null, accessibilityHint: null, value: null, onValueChange: null, label: null, subLabel: null });
});
ReactCompilerGating = fn(558);
let tmp14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const id = AuthenticationStore.getId();
    cResult[0] = id;
    let first = id;
  } else {
    first = cResult[0];
  }
  const tmp7 = _slicedToArray(require("useHideSelfVideo")(first), 3);
  [tmp8, tmp9] = tmp7;
  require = tmp9;
  importDefault = tmp10;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UnsyncedUserSettingsStore];
    const fn = function s() {
      return UnsyncedUserSettingsStore.disableHideSelfStreamAndVideoConfirmationAlert;
    };
    cResult[1] = items;
    cResult[2] = fn;
    let tmp12 = fn;
    let tmp11 = items;
  } else {
    tmp11 = cResult[1];
    tmp12 = cResult[2];
  }
  const obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(tmp11, tmp12);
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === tmp10) {
      if (cResult[5] === tmp9) {
        let tmp15 = cResult[6];
      }
      if (cResult[7] === tmp15) {
        if (cResult[8] === tmp9) {
          if (cResult[9] === tmp8) {
            let tmp16 = cResult[10];
          }
          return tmp16;
        }
      }
      let tmp17 = null;
      if (tmp8) {
        let obj2 = { icon: null, value: null, onValueChange: null, label: null };
        const obj3 = { IconComponent: tmp(tmp2[56]).UserSquareIcon };
        obj2.icon = jsx(tmp(tmp2[27]).TableRowIcon, { IconComponent: tmp(tmp2[56]).UserSquareIcon });
        obj2.value = !tmp9;
        obj2.onValueChange = tmp15;
        const intl = tmp(tmp2[17]).intl;
        obj2.label = intl.string(tmp(tmp2[17]).t.MH8ESU);
        tmp17 = jsx(tmp(tmp2[44]).TableSwitchRow, { icon: null, value: null, onValueChange: null, label: null });
      }
      cResult[7] = tmp15;
      cResult[8] = tmp9;
      cResult[9] = tmp8;
      cResult[10] = tmp17;
      tmp16 = tmp17;
    }
  }
  class R {
    constructor() {
      if (!closure_2) {
        tmp = closure_0;
        if (!closure_0) {
          tmp2 = closure_15;
          VIDEO = closure_15.VIDEO;
          f147045 = () => f147045(!VIDEO);
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj = closure_1(closure_2[14]);
          obj1 = { importer: null, isDismissable: false };
          obj1.importer = function importer() {
            return VIDEO(paths[16])(paths[15], paths.paths).then(() => { ... });
          };
          openLazyResult = obj.openLazy(obj1);
          return;
        }
      }
      return closure_1(!closure_0);
    }
  }
  cResult[3] = stateFromStores;
  cResult[4] = tmp7[2];
  cResult[5] = tmp9;
  cResult[6] = R;
  tmp15 = R;
}) : (() => {
  const tmp3 = _slicedToArray(useHideSelfVideoDefault(AuthenticationStore.getId()), 3);
  _require = tmp4;
  importDefault = tmp3[2];
  const items = [UnsyncedUserSettingsStore];
  dependencyMap = require("initialize").useStateFromStores(items, () => UnsyncedUserSettingsStore.disableHideSelfStreamAndVideoConfirmationAlert);
  let tmp6 = null;
  if (tmp3[0]) {
    let obj2 = { icon: null, value: null, onValueChange: null, label: null };
    const obj3 = { IconComponent: tmp5(9489).UserSquareIcon };
    obj2.icon = jsx(tmp5(5828).TableRowIcon, { IconComponent: tmp5(9489).UserSquareIcon });
    obj2.value = !tmp4;
    obj2.onValueChange = function onValueChange() {
      if (!paths) {
        if (!VIDEO) {
          VIDEO = constants.VIDEO;
          const f147046 = () => f147046(!VIDEO);
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
    const intl = tmp5(1119).intl;
    obj2.label = intl.string(tmp5(1119).t.MH8ESU);
    tmp6 = jsx(tmp5(7446).TableSwitchRow, { icon: null, value: null, onValueChange: null, label: null });
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
let tmp15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
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
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { icon: null, label: null, onPress: null };
    const obj3 = { source: _modDef10374 };
    obj2.icon = jsx(tmp(5828).TableRowIcon, { source: _modDef10374 });
    const intl = tmp(1119).intl;
    obj2.label = intl.string(tmp(1119).t["R/FK4A"]);
    obj2.onPress = first;
    const tmp8 = jsx(tmp(5822).TableRow, { icon: null, label: null, onPress: null });
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const obj = { icon: jsx(TableRowIcon.TableRowIcon, { source: _modDef10374 }), label: null, onPress: null };
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
  return jsx(TableRow2.TableRow, { icon: jsx(TableRowIcon.TableRowIcon, { source: _modDef10374 }), label: null, onPress: null });
});
ReactCompilerGating = fn(558);
let tmp16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const shareActivityLogsResult = tmp(17637).shareActivityLogs();
    cResult[0] = shareActivityLogsResult;
    let first = shareActivityLogsResult;
    const tmpResult = tmp(17637);
  } else {
    first = cResult[0];
  }
  const icon = first.icon;
  ({ label, onPress } = first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp7Result;
    if (null != icon) {
      const obj2 = { source: icon };
      tmp7Result = tmp7(tmp(5828).TableRowIcon, obj2);
    }
    const obj3 = { icon: tmp7Result, label, onPress };
    const tmp7Result2 = jsx(tmp(5822).TableRow, { icon: tmp7Result, label, onPress });
    cResult[1] = tmp7Result2;
    let tmp6 = tmp7Result2;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (() => {
  const shareActivityLogsResult = ChannelCallUtils.shareActivityLogs();
  const icon = shareActivityLogsResult.icon;
  ({ label, onPress } = shareActivityLogsResult);
  let icon1;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = tmp4(TableRowIcon.TableRowIcon, obj2);
  }
  return jsx(TableRow2.TableRow, { icon: icon1, label, onPress });
});
ReactCompilerGating = fn(558);
let tmp17 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelCallLifecycleStore];
    const fn = function o() {
      return showActivitiesDebugOverlay.getShowActivitiesDebugOverlay();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l(visible) {
      DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible });
    };
    cResult[2] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: _modDef13219 };
    const tmp12 = jsx(tmp(5828).TableRowIcon, { source: _modDef13219 });
    cResult[3] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t["qv5/SP"]);
    cResult[4] = stringResult;
    let tmp13 = stringResult;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    const obj3 = { icon: tmp9, value: stateFromStores, onValueChange: tmp8, label: tmp13 };
    const tmp17 = jsx(tmp(7446).TableSwitchRow, { icon: tmp9, value: stateFromStores, onValueChange: tmp8, label: tmp13 });
    cResult[5] = stateFromStores;
    cResult[6] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[6];
  }
  return tmp15;
}) : (() => {
  const items = [ChannelCallLifecycleStore];
  const stateFromStores = initialize.useStateFromStores(items, () => showActivitiesDebugOverlay.getShowActivitiesDebugOverlay());
  const obj2 = { icon: null, value: null, onValueChange: null, label: null };
  obj2.icon = jsx(TableRowIcon.TableRowIcon, { source: _modDef13219 });
  obj2.value = stateFromStores;
  obj2.onValueChange = function onValueChange(visible) {
    DispatcherDefault.dispatch({ type: "EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY", visible });
  };
  const intl = util.intl;
  obj2.label = intl.string(util.t["qv5/SP"]);
  return jsx(TableSwitchRow.TableSwitchRow, { icon: null, value: null, onValueChange: null, label: null });
});
ReactCompilerGating = fn(558);
let tmp18 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(568).c(8);
  guildId = guildId.guildId;
  if (cResult[0] !== guildId) {
    const fn = function o() {
      const result = ChannelCallConnectingScreen.showVoiceSettingsActionSheet(guildId);
    };
    cResult[0] = guildId;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { IconComponent: tmp(7624).SettingsIcon, source: _modDef17535 };
    const tmp11 = jsx(tmp(5828).TableRowIcon, { IconComponent: tmp(7624).SettingsIcon, source: _modDef17535 });
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.NiTd0e);
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(tmp(1119).t["16SG+O"]);
    const tmp14 = jsx(tmp(5829).TableRowArrow, {});
    cResult[2] = tmp11;
    cResult[3] = stringResult;
    cResult[4] = stringResult1;
    cResult[5] = tmp14;
    let tmp8 = tmp14;
    let tmp7 = stringResult1;
    let tmp6 = stringResult;
    let tmp5 = tmp11;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  if (cResult[6] !== tmp4) {
    const obj3 = { onPress: tmp4, icon: tmp5, label: tmp6, subLabel: tmp7, trailing: tmp8 };
    const tmp17 = jsx(tmp(5822).TableRow, { onPress: tmp4, icon: tmp5, label: tmp6, subLabel: tmp7, trailing: tmp8 });
    cResult[6] = tmp4;
    cResult[7] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[7];
  }
  return tmp15;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const items = [guildId];
  const callback = noop.useCallback(() => {
    const result = ChannelCallConnectingScreen.showVoiceSettingsActionSheet(guildId);
  }, items);
  const obj = { onPress: callback, icon: jsx(guildId(5828).TableRowIcon, { IconComponent: guildId(7624).SettingsIcon, source: _modDef17535 }), label: null, subLabel: null, trailing: null };
  const intl = guildId(1119).intl;
  obj.label = intl.string(guildId(1119).t.NiTd0e);
  const intl2 = guildId(1119).intl;
  obj.subLabel = intl2.string(guildId(1119).t["16SG+O"]);
  obj.trailing = jsx(guildId(5829).TableRowArrow, {});
  return jsx(guildId(5822).TableRow, { onPress: callback, icon: jsx(guildId(5828).TableRowIcon, { IconComponent: guildId(7624).SettingsIcon, source: _modDef17535 }), label: null, subLabel: null, trailing: null });
});
ReactCompilerGating = fn(558);
let tmp19 = ReactCompilerGating.isReactCompilerEnabled() ? ((stream) => {
  const cResult = c.c(8);
  stream = stream.stream;
  if (cResult[0] !== stream) {
    const reportStreamIssueResult = tmp(17637).reportStreamIssue(stream);
    cResult[0] = stream;
    cResult[1] = reportStreamIssueResult;
    let tmp4 = reportStreamIssueResult;
    const tmpResult = tmp(17637);
  } else {
    tmp4 = cResult[1];
  }
  ({ label, icon, onPress } = tmp4);
  if (cResult[2] !== icon) {
    let tmp8;
    if (null != icon) {
      const obj2 = { source: icon };
      tmp8 = jsx(tmp(5828).TableRowIcon, { source: icon });
    }
    cResult[2] = icon;
    cResult[3] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === label) {
    if (cResult[5] === onPress) {
      if (cResult[6] === tmp6) {
        let tmp10 = cResult[7];
      }
      return tmp10;
    }
  }
  const tmp11 = jsx(TableRow2.TableRow, { icon: tmp6, label, onPress });
  cResult[4] = label;
  cResult[5] = onPress;
  cResult[6] = tmp6;
  cResult[7] = tmp11;
  tmp10 = tmp11;
}) : ((stream) => {
  const reportStreamIssueResult = ChannelCallUtils.reportStreamIssue(stream.stream);
  const icon = reportStreamIssueResult.icon;
  ({ label, onPress } = reportStreamIssueResult);
  let icon1;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = tmp4(TableRowIcon.TableRowIcon, obj2);
  }
  return jsx(TableRow2.TableRow, { icon: icon1, label, onPress });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControlsButtons.tsx");

export const GameConsoles = tmp3;
export const GameConsoleAccountButton = tmp4;
export const ActivitiesButton = tmp5;
export const ChatButton = tmp6;
export const SoundboardButton = tmp7;
export const ScreenshareButton = tmp8;
export const StreamVolumeItem = tmp9;
export const DeafenSwitch = tmp10;
export const AudioRouteButton = tmp11;
export const InviteButton = tmp12;
export const HideNonVideoParticipants = tmp13;
export const HideSelfVideo = tmp14;
export const LeaveActivitiesButton = tmp15;
export const ShareActivityLogsButton = tmp16;
export const ToggleShowActivitiesDebugOverlay = tmp17;
export const VoiceSettingsButton = tmp18;
export const ReportStreamIssueButton = tmp19;
export const RTCDebugPanelButton = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const rtcDebugPanelResult = tmp(17637).rtcDebugPanel(() => {

    });
    cResult[0] = rtcDebugPanelResult;
    let first = rtcDebugPanelResult;
    const tmpResult = tmp(17637);
  } else {
    first = cResult[0];
  }
  const icon = first.icon;
  ({ label, onPress } = first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp7Result;
    if (null != icon) {
      const obj2 = { source: icon };
      tmp7Result = tmp7(tmp(5828).TableRowIcon, obj2);
    }
    const obj3 = { icon: tmp7Result, label, onPress };
    const tmp7Result2 = jsx(tmp(5822).TableRow, { icon: tmp7Result, label, onPress });
    cResult[1] = tmp7Result2;
    let tmp6 = tmp7Result2;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (() => {
  const rtcDebugPanelResult = ChannelCallUtils.rtcDebugPanel(() => {

  });
  const icon = rtcDebugPanelResult.icon;
  ({ label, onPress } = rtcDebugPanelResult);
  let icon1;
  if (null != icon) {
    const obj2 = { source: icon };
    icon1 = tmp4(TableRowIcon.TableRowIcon, obj2);
  }
  return jsx(TableRow2.TableRow, { icon: icon1, label, onPress });
});
