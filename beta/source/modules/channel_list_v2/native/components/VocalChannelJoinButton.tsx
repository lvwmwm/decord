// Module ID: 12441
// Function ID: 12442
// Name: VocalChannelJoinButton
// Dependencies: [19, 17, 4399, 4777, 1078, 21, 4758, 580, 1368, 558, 568, 8122, 4693, 4610, 9640, 565, 5650, 5644, 5636, 12442, 5317, 5321, 1119, 4754, 5188, 2]

// Module 12441 (VocalChannelJoinButton)
import nativeDefault from "native" /* 580 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4399 */;
import VoiceStateStore from "VoiceStateStore" /* 4777 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1078);
({ NOOP: closure_8, Permissions: closure_9 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_11 = createStyles.createStyles((arg0, arg1) => {
  const obj = { borderRadius: nativeDefault.radii.xxl, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, marginVertical: -nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, minHeight: 28, justifyContent: "center", elevation: null, shadowRadius: 4, shadowOffset: null, shadowColor: null, shadowOpacity: null, borderColor: null, borderWidth: 1 };
  let num = 1;
  if (arg0) {
    num = 0;
  }
  obj.elevation = num;
  obj.shadowOffset = { width: 0, height: 1 };
  obj.shadowColor = nativeDefault.colors.BLACK;
  let num2 = 0.14;
  if (arg1) {
    num2 = 0.08;
  }
  obj.shadowOpacity = num2;
  let str = "rgba(255, 255, 255, 0.14)";
  if (arg1) {
    str = "rgba(0, 0, 0, 0.08)";
  }
  const obj2 = { joinButton: obj, joinButtonContent: { width: "auto", alignItems: "center" }, joinButtonIconActive: { tintColor: nativeDefault.colors.WHITE }, joinButtonIconInactive: null, joinButtonText: null };
  obj.borderColor = str;
  const obj3 = { tintColor: nativeDefault.colors.WHITE };
  obj2.joinButtonIconInactive = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const obj4 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  let num3 = 0;
  if (obj5.isAndroid()) {
    num3 = -2;
  }
  obj2.joinButtonText = { marginTop: num3, alignSelf: "center", maxWidth: 64 };
  return obj2;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/VocalChannelJoinButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(isConnectedToVoiceChannel[10]).c(50);
  channel = channel.channel;
  ({ voiceStates, noIcon, small } = channel);
  if (cResult[0] !== voiceStates) {
    let items = voiceStates;
    if (undefined === voiceStates) {
      items = [];
    }
    cResult[0] = voiceStates;
    cResult[1] = items;
    let arr = items;
  } else {
    arr = cResult[1];
  }
  let obj = channel(isConnectedToVoiceChannel[10]);
  const tmp5 = require("useTheme")();
  if (cResult[2] !== tmp5) {
    const isThemeLightResult = tmp(tmp2[13]).isThemeLight(tmp5);
    cResult[2] = tmp5;
    cResult[3] = isThemeLightResult;
    let tmp6 = isThemeLightResult;
    const tmpResult = tmp(tmp2[13]);
  } else {
    tmp6 = cResult[3];
  }
  const tmp4 = require("useIsUsingClientTheme")();
  importDefault = closure_11(require("useIsUsingClientTheme")(), tmp6);
  const tmp8 = closure_11(require("useIsUsingClientTheme")(), tmp6);
  isConnectedToVoiceChannel = channel(isConnectedToVoiceChannel[14]).useIsConnectedToVoiceChannel(channel);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[4] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== channel) {
    class A {
      constructor() {
        return !closure_6.can(Permissions.CONNECT, channel);
      }
    }
    cResult[5] = channel;
    cResult[6] = A;
    const tmp12 = A;
  } else {
    class A {
      constructor() {
        return !closure_6.can(Permissions.CONNECT, channel);
      }
    }
  }
  const tmpResult7 = channel(isConnectedToVoiceChannel[14]);
  const stateFromStores = channel(isConnectedToVoiceChannel[15]).useStateFromStores(tmp10, tmp12);
  const tmpResult8 = channel(isConnectedToVoiceChannel[15]);
  const stageParticipantsCount = channel(isConnectedToVoiceChannel[16]).useStageParticipantsCount(channel.id, tmp(tmp2[17]).StageChannelParticipantNamedIndex.AUDIENCE);
  if (cResult[7] !== channel) {
    class A {
      constructor() {
        return !closure_6.can(Permissions.CONNECT, channel);
      }
    }
    cResult[7] = channel;
    cResult[8] = tmp16;
  } else {
    class A {
      constructor() {
        return !closure_6.can(Permissions.CONNECT, channel);
      }
    }
  }
  noop = tmp15;
  const tmpResult9 = channel(isConnectedToVoiceChannel[16]);
  channel(isConnectedToVoiceChannel[18]).useStageHasMedia(channel.id) && tmp15;
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        return !closure_6.can(Permissions.CONNECT, channel);
      }
    }
    const items2 = [VoiceStateStore];
    cResult[9] = items2;
    const tmp18 = items2;
  } else {
    class A {
      constructor() {
        return !closure_6.can(Permissions.CONNECT, channel);
      }
    }
  }
  if (cResult[10] !== channel.id) {
    class O {
      constructor() {
        return closure_7.hasVideo(channel.id);
      }
    }
    cResult[10] = channel.id;
    cResult[11] = O;
    const tmp19 = O;
  } else {
    class O {
      constructor() {
        return closure_7.hasVideo(channel.id);
      }
    }
  }
  const tmpResult10 = channel(isConnectedToVoiceChannel[18]);
  const stateFromStores1 = channel(isConnectedToVoiceChannel[15]).useStateFromStores(tmp18, tmp19);
  const sum = stageParticipantsCount + arr.length;
  if (cResult[12] !== arr) {
    class O {
      constructor() {
        return closure_7.hasVideo(channel.id);
      }
    }
    if (arr != null) {
      class O {
        constructor() {
          return closure_7.hasVideo(channel.id);
        }
      }
    }
    cResult[12] = arr;
    cResult[13] = undefined;
  } else {
    class O {
      constructor() {
        return closure_7.hasVideo(channel.id);
      }
    }
  }
  closure_4 = null != tmp22;
  if (!stateFromStores1) {
    class O {
      constructor() {
        return closure_7.hasVideo(channel.id);
      }
    }
  }
  if (cResult[14] === channel) {
    class O {
      constructor() {
        return closure_7.hasVideo(channel.id);
      }
    }
    tmp(tmp2[19]);
    if (cResult[17] === channel) {
      class O {
        constructor() {
          return closure_7.hasVideo(channel.id);
        }
      }
    }
    const obj2 = { channel, video: tmp24, userCount: sum };
    cResult[17] = channel;
    cResult[18] = sum;
    cResult[19] = tmp24;
    cResult[20] = obj2;
  }
  cResult[14] = channel;
  cResult[15] = stateFromStores1;
  cResult[16] = { channel, video: stateFromStores1 };
}) : ((channel) => {
  channel = channel.channel;
  let voiceStates = channel.voiceStates;
  if (voiceStates === undefined) {
    voiceStates = [];
  }
  ({ small, noIcon } = channel);
  if (small === undefined) {
    small = false;
  }
  let VJlc0S = dependencyMap;
  const tmp = voiceStates(8122)();
  const tmp2 = voiceStates(4693)();
  let joinButtonText = closure_11(tmp, channel(4610).isThemeLight(tmp2));
  const obj = channel(4610);
  const isConnectedToVoiceChannel = channel(9640).useIsConnectedToVoiceChannel(channel);
  const obj2 = channel(9640);
  const items = [PermissionStore];
  const stateFromStores = channel(565).useStateFromStores(items, () => !PermissionStore.can(constants.CONNECT, channel));
  const obj3 = channel(565);
  const stageParticipantsCount = channel(5650).useStageParticipantsCount(channel.id, channel(5644).StageChannelParticipantNamedIndex.AUDIENCE);
  const isGuildStageVoiceResult = channel.isGuildStageVoice();
  const obj4 = channel(5650);
  const obj5 = channel(5636);
  const tmp8 = channel(5636).useStageHasMedia(channel.id) && isGuildStageVoiceResult;
  const items1 = [VoiceStateStore];
  const stateFromStores1 = channel(565).useStateFromStores(items1, () => VoiceStateStore.hasVideo(channel.id));
  const sum = stageParticipantsCount + voiceStates.length;
  const items2 = [voiceStates];
  const memo = noop.useMemo(() => {
    let found;
    if (voiceStates != null) {
      found = voiceStates.find((voiceState) => voiceState.voiceState.selfStream);
    }
    return null != found;
  }, items2);
  let tmp12 = stateFromStores1;
  if (!stateFromStores1) {
    tmp12 = tmp8;
  }
  const tmp3Result = channel(565);
  const connectedUserLimit = channel(12442).useConnectedUserLimit({ channel, video: tmp12 });
  const tmp3Result3 = channel(12442);
  let connectedUserLimitFormatted = channel(12442).useConnectedUserLimitFormatted({ channel, video: tmp12, userCount: sum });
  let tmp15 = !stateFromStores;
  if (!stateFromStores) {
    tmp15 = !isConnectedToVoiceChannel;
  }
  if (tmp15) {
    tmp15 = null != connectedUserLimitFormatted;
  }
  if (tmp15) {
    tmp15 = sum > 0;
  }
  if (tmp15) {
    tmp15 = sum >= connectedUserLimit / 2 + 1;
  }
  if (isConnectedToVoiceChannel) {
    return null;
  } else if (small) {
    const obj6 = { accessibilityRole: "none", pointerEvents: "none", onPress, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no", style: joinButtonText.joinButton, children: null };
    const obj7 = { style: joinButtonText.joinButtonContent, children: null };
    const obj8 = { style: null, color: "interactive-text-default", variant: "text-xs/semibold", lineClamp: 1, children: null };
    joinButtonText = joinButtonText.joinButtonText;
    obj8.style = joinButtonText;
    if (connectedUserLimitFormatted == null) {
      const intl2 = tmp3(1119).intl;
      VJlc0S = tmp3(1119).t.VJlc0S;
      connectedUserLimitFormatted = intl2.string(VJlc0S);
    }
    obj8.children = connectedUserLimitFormatted;
    obj7.children = tmp17(tmp3(4754).Text, obj8);
    obj6.children = tmp17(closure_4, obj7);
    let tmp17Result = tmp17(closure_5, obj6);
  } else if (tmp15) {
    const obj9 = { text: connectedUserLimitFormatted, icon: null, size: "sm", variant: null, onPress: null, pointerEvents: "none", accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no" };
    if (!noIcon) {
      if (!isConnectedToVoiceChannel) {
        if (!memo) {
          let joinButtonIconActive = joinButtonText.joinButtonIconInactive;
        }
        const items3 = [joinButtonIconActive, { marginRight: 3, marginLeft: -1 }];
        if (isGuildStageVoiceResult) {
          let VoiceNormalIcon = tmp3(5317).StageIcon;
        } else {
          VoiceNormalIcon = tmp3(5321).VoiceNormalIcon;
        }
        const obj10 = { size: "xs", style: items3 };
        tmp17(VoiceNormalIcon, obj10);
      }
      joinButtonIconActive = joinButtonText.joinButtonIconActive;
    }
    obj9.icon = undefined;
    let str2 = "tertiary";
    if (memo) {
      str2 = "destructive";
    }
    obj9.variant = str2;
    obj9.onPress = onPress;
    tmp17Result = tmp17(tmp18, obj9);
  } else {
    const intl = tmp3(1119).intl;
    let str = intl.string;
    let toUpperCase = tmp3(1119).t;
    if (memo) {
      str = str(toUpperCase.dI3q4h);
      toUpperCase = str.toUpperCase;
      let formatted = toUpperCase();
    } else {
      formatted = str(toUpperCase.VJlc0S);
    }
  }
}));
