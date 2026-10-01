// Module ID: 11776
// Function ID: 11777
// Name: VocalChannelJoinButton
// Dependencies: [19, 17, 4469, 4855, 1074, 21, 4836, 576, 1364, 7298, 4767, 4685, 8833, 563, 5743, 5737, 5729, 11777, 4832, 1115, 5281, 5411, 5415, 2]

// Module 11776 (VocalChannelJoinButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
({ View: closure_4, Pressable: hasOwnProperty } = react_native);
({ NOOP: metroImportAll, Permissions: c9 } = Constants);
const jsx = Fragment.jsx;
let closure_11 = createStyles.createStyles((arg0, arg1) => {
  let num;
  let num2;
  let num3;
  let str;
  const obj = { borderRadius: nativeDefault.radii.xxl, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, marginVertical: -nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, minHeight: 28, justifyContent: "center", elevation: num, shadowRadius: 4, shadowOffset: { width: 0, height: 1 }, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: num2, borderColor: str, borderWidth: 1 };
  num = 1;
  const tmp3 = arg0;
  if (tmp3) {
    num = 0;
  }
  num2 = 0.14;
  if (arg1) {
    num2 = 0.08;
  }
  str = "rgba(255, 255, 255, 0.14)";
  if (arg1) {
    str = "rgba(0, 0, 0, 0.08)";
  }
  const obj2 = { joinButton: obj, joinButtonContent: { width: "auto", alignItems: "center" }, joinButtonIconActive: { tintColor: nativeDefault.colors.WHITE }, joinButtonIconInactive: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, joinButtonText: { marginTop: num3, alignSelf: "center", maxWidth: 64 } };
  ({ tintColor: nativeDefault.colors.WHITE });
  ({ tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
  num3 = 0;
  const obj5 = PlatformUtils;
  if (obj5.isAndroid()) {
    num3 = -2;
  }
  return obj2;
});
const memoResult = react.memo(function VocalChannelJoinButton(channel) {
  let noIcon;
  let small;
  let str2;
  let tmp23;
  channel = channel.channel;
  let voiceStates = channel.voiceStates;
  if (voiceStates === undefined) {
    voiceStates = [];
  }
  ({ small, noIcon } = channel);
  if (small === undefined) {
    small = false;
  }
  const tmp2 = voiceStates(7298)();
  const tmp3 = voiceStates(4767)();
  const obj = channel(4685);
  const tmp5 = closure_11(tmp2, obj.isThemeLight(tmp3));
  const obj2 = channel(8833);
  const isConnectedToVoiceChannel = obj2.useIsConnectedToVoiceChannel(channel);
  const items = [PermissionStore];
  const obj3 = channel(563);
  const stateFromStores = obj3.useStateFromStores(items, () => !PermissionStore.can(constants.CONNECT, channel));
  const obj4 = channel(5743);
  const stageParticipantsCount = obj4.useStageParticipantsCount(channel.id, channel(5737).StageChannelParticipantNamedIndex.AUDIENCE);
  const isGuildStageVoiceResult = channel.isGuildStageVoice();
  const obj5 = channel(5729);
  obj5.useStageHasMedia(channel.id) && isGuildStageVoiceResult;
  const items1 = [VoiceStateStore];
  const tmp4Result = channel(563);
  const stateFromStores1 = tmp4Result.useStateFromStores(items1, () => VoiceStateStore.hasVideo(channel.id));
  const sum = stageParticipantsCount + voiceStates.length;
  const items2 = [voiceStates];
  const memo = react.useMemo(() => {
    let found;
    const arr = voiceStates;
    if (voiceStates != null) {
      found = arr.find((voiceState) => voiceState.voiceState.selfStream);
    }
    return null != found;
  }, items2);
  const tmp4Result3 = channel(11777);
  const connectedUserLimit = tmp4Result3.useConnectedUserLimit({ channel, video: tmp14 });
  const tmp4Result4 = channel(11777);
  let connectedUserLimitFormatted = tmp4Result4.useConnectedUserLimitFormatted({ channel, video: tmp14, userCount: sum });
  let tmp19 = null;
  const tmp17 = !stateFromStores && !isConnectedToVoiceChannel && null != connectedUserLimitFormatted && sum > 0 && sum >= connectedUserLimit / 2 + 1;
  if (!isConnectedToVoiceChannel) {
    let tmp20Result;
    if (small) {
      const obj6 = { accessibilityRole: "none", pointerEvents: "none", onPress, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no", style: tmp5.joinButton, children: null };
      const Text = tmp4(4832).Text;
      const tmp27 = closure_5;
      if (connectedUserLimitFormatted == null) {
        const intl2 = tmp4(1115).intl;
        connectedUserLimitFormatted = intl2.string(tmp4(1115).t.VJlc0S);
      }
      tmp20Result = tmp20(tmp27, obj6);
    } else {
      let tmp21 = connectedUserLimitFormatted;
      const Button = tmp4(5281).Button;
      if (!tmp17) {
        let formatted;
        const intl = tmp4(1115).intl;
        const string = intl.string;
        const t = tmp4(1115).t;
        if (memo) {
          const str = string(t.dI3q4h);
          formatted = str.toUpperCase();
        } else {
          formatted = string(t.VJlc0S);
        }
        tmp21 = formatted;
      }
      const obj9 = { text: tmp21, icon: tmp23, size: "sm", variant: str2, onPress, pointerEvents: "none", accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no" };
      tmp23 = undefined;
      if (!noIcon) {
        if (!isConnectedToVoiceChannel) {
          let joinButtonIconActive;
          let tmp20Result2;
          if (!memo) {
            joinButtonIconActive = tmp5.joinButtonIconInactive;
          }
          const items3 = [joinButtonIconActive, { marginRight: 3, marginLeft: -1 }];
          if (!memo) {
            if (isGuildStageVoiceResult) {
              let VoiceNormalIcon = tmp4(5411).StageIcon;
            } else {
              VoiceNormalIcon = tmp4(5415).VoiceNormalIcon;
            }
            tmp20Result2 = <VoiceNormalIcon size="xs" style={items3} />;
          }
          tmp23 = tmp20Result2;
        }
        joinButtonIconActive = tmp5.joinButtonIconActive;
      }
      str2 = "tertiary";
      if (memo) {
        str2 = "destructive";
      }
      tmp20Result = tmp20(Button, obj9);
    }
    tmp19 = tmp20Result;
  }
  return tmp19;
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/VocalChannelJoinButton.tsx");

export default memoResult;
