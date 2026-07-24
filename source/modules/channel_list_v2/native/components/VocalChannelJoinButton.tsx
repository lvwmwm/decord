// Module ID: 11420
// Function ID: 88802
// Dependencies: [31, 27, 3758, 4146, 653, 33, 4130, 689, 477, 8869, 4066, 3976, 10244, 624, 4963, 4957, 4950, 11421, 4126, 1212, 4543, 4654, 4658, 2]

// Module 11420
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_4, Pressable: closure_5 } = get_ActivityIndicator);
({ NOOP: closure_8, Permissions: closure_9 } = ME);
let closure_11 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1) => {
  let obj = {};
  obj = { borderRadius: importDefault(689).radii.xxl, paddingHorizontal: importDefault(689).space.PX_8, paddingVertical: importDefault(689).space.PX_4, marginVertical: -importDefault(689).space.PX_4, backgroundColor: importDefault(689).colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, minHeight: 28, justifyContent: "center" };
  let num = 1;
  if (arg0) {
    num = 0;
  }
  obj.elevation = num;
  obj.shadowRadius = 4;
  obj.shadowOffset = { width: 0, height: 1 };
  obj.shadowColor = importDefault(689).colors.BLACK;
  let num2 = 0.14;
  if (arg1) {
    num2 = 0.08;
  }
  obj.shadowOpacity = num2;
  let str = "rgba(255, 255, 255, 0.14)";
  if (arg1) {
    str = "rgba(0, 0, 0, 0.08)";
  }
  obj.borderColor = str;
  obj.borderWidth = 1;
  obj.joinButton = obj;
  obj.joinButtonContent = { width: "auto", alignItems: "center" };
  obj = { tintColor: importDefault(689).colors.WHITE };
  obj.joinButtonIconActive = obj;
  obj.joinButtonIconInactive = { tintColor: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT };
  const obj2 = { marginTop: null, alignSelf: "center", maxWidth: 64 };
  const obj1 = { tintColor: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT };
  let num3 = 0;
  if (obj6.isAndroid()) {
    num3 = -2;
  }
  obj2.marginTop = num3;
  obj.joinButtonText = obj2;
  return obj;
});
const memoResult = importAllResult.memo(function VocalChannelJoinButton(channel) {
  let noIcon;
  let small;
  channel = channel.channel;
  let voiceStates = channel.voiceStates;
  if (voiceStates === undefined) {
    voiceStates = [];
  }
  ({ small, noIcon } = channel);
  if (small === undefined) {
    small = false;
  }
  const tmp = voiceStates(8869)();
  let obj = channel(3976);
  let intl = callback(tmp, obj.isThemeLight(voiceStates(4066)()));
  let obj1 = channel(10244);
  const isConnectedToVoiceChannel = obj1.useIsConnectedToVoiceChannel(channel);
  let obj2 = channel(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj2.useStateFromStores(items, () => !outer1_6.can(outer1_9.CONNECT, channel));
  let obj3 = channel(4963);
  const stageParticipantsCount = obj3.useStageParticipantsCount(channel.id, channel(4957).StageChannelParticipantNamedIndex.AUDIENCE);
  const isGuildStageVoiceResult = channel.isGuildStageVoice();
  let obj4 = channel(4950);
  const tmp2 = voiceStates(4066)();
  let obj5 = channel(624);
  const items1 = [closure_7];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => outer1_7.hasVideo(channel.id));
  const sum = stageParticipantsCount + voiceStates.length;
  let num = 0;
  if (null != sum) {
    num = sum;
  }
  const items2 = [voiceStates];
  const memo = importAllResult.useMemo(() => {
    let found;
    if (null != voiceStates) {
      found = voiceStates.find((voiceState) => voiceState.voiceState.selfStream);
    }
    return null != found;
  }, items2);
  let tmp12 = stateFromStores1;
  if (!stateFromStores1) {
    tmp12 = tmp7;
  }
  tmp7 = obj4.useStageHasMedia(channel.id) && isGuildStageVoiceResult;
  obj = { channel, video: tmp12 };
  const connectedUserLimit = channel(11421).useConnectedUserLimit(obj);
  const obj7 = channel(11421);
  obj = { channel, video: tmp12, userCount: num };
  let connectedUserLimitFormatted = channel(11421).useConnectedUserLimitFormatted(obj);
  let tmp15 = !stateFromStores && !isConnectedToVoiceChannel && tmp10 != connectedUserLimitFormatted && num > 0;
  if (tmp15) {
    tmp15 = num >= connectedUserLimit / 2 + 1;
  }
  if (isConnectedToVoiceChannel) {
    return null;
  } else if (small) {
    obj1 = { accessibilityRole: "none", pointerEvents: "none", onPress: closure_8, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no", style: intl.joinButton };
    obj2 = { style: intl.joinButtonContent };
    obj3 = { style: null, color: "interactive-text-default", variant: "text-xs/semibold", lineClamp: 1 };
    intl = intl.joinButtonText;
    obj3.style = intl;
    if (tmp10 == connectedUserLimitFormatted) {
      intl = channel(1212).intl;
      connectedUserLimitFormatted = intl.string(channel(1212).t.VJlc0S);
    }
    obj3.children = connectedUserLimitFormatted;
    obj2.children = tmp16(channel(4126).Text, obj3);
    obj1.children = tmp16(closure_4, obj2);
    let tmp16Result = tmp16(closure_5, obj1);
    const tmp30 = closure_5;
    const tmp32 = closure_4;
  } else {
    obj4 = {};
    if (tmp15) {
      obj4.text = connectedUserLimitFormatted;
      if (!noIcon) {
        if (!isConnectedToVoiceChannel) {
          if (!memo) {
            let joinButtonIconActive = intl.joinButtonIconInactive;
          }
          const items3 = [joinButtonIconActive, { marginRight: 3, marginLeft: -1 }];
          let tmp26 = channel;
          if (isGuildStageVoiceResult) {
            let VoiceNormalIcon = tmp26(4654).StageIcon;
          } else {
            VoiceNormalIcon = tmp26(4658).VoiceNormalIcon;
          }
          tmp26 = jsx;
          obj5 = { size: "xs", style: items3 };
          <VoiceNormalIcon size="xs" style={items3} />;
        }
        joinButtonIconActive = intl.joinButtonIconActive;
      }
      obj4.icon = undefined;
      obj4.size = "sm";
      let str4 = "tertiary";
      if (memo) {
        str4 = "destructive";
      }
      obj4.variant = str4;
      obj4.onPress = closure_8;
      obj4.pointerEvents = "none";
      obj4.accessible = false;
      obj4.accessibilityElementsHidden = true;
      obj4.importantForAccessibility = "no";
      tmp16Result = tmp16(tmp19, obj4);
    } else {
      const intl2 = channel(1212).intl;
      let str = intl2.string;
      let toUpperCase = channel(1212).t;
      if (memo) {
        str = str(toUpperCase.dI3q4h);
        toUpperCase = str.toUpperCase;
        let formatted = toUpperCase();
      } else {
        formatted = str(toUpperCase.VJlc0S);
      }
    }
  }
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel_list_v2/native/components/VocalChannelJoinButton.tsx");

export default memoResult;
