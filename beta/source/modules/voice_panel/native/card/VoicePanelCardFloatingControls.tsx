// Module ID: 18578
// Function ID: 18579
// Name: VoicePanelCardFloatingControls
// Dependencies: [19, 17, 4972, 4822, 6642, 5714, 10900, 10898, 10903, 1087, 5632, 21, 5052, 1202, 4971, 587, 558, 576, 10899, 18532, 18579, 11717, 18580, 18506, 1128, 11623, 9166, 9165, 6886, 7012, 5247, 7168, 18504, 7829, 6645, 10771, 18476, 18581, 18582, 504, 18564, 18583, 5037, 9222, 9249, 8581, 9247, 9245, 9225, 18584, 5267, 7253, 8668, 9177, 6367, 9221, 5234, 14178, 18585, 2]

// Module 18578 (VoicePanelCardFloatingControls)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import intl5 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import spring from "spring" /* 5247 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6645 */;
import NativeViewDefault from "NativeView" /* 6886 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7168 */;
import StreamActionCreators from "StreamActionCreators" /* 7829 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8668 */;
import VoiceStateIcons from "VoiceStateIcons" /* 9165 */;
import VoiceStateIconUtils from "VoiceStateIconUtils" /* 9166 */;
import usePlayingGameActivitiesDefault from "usePlayingGameActivities" /* 9222 */;
import GuildTagDefault from "GuildTag" /* 9225 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9245 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 9247 */;
import useResolveGameForProfileDefault from "useResolveGameForProfile" /* 9249 */;
import leaveEmbeddedActivity2 from "leaveEmbeddedActivity" /* 10771 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 10898 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 10899 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 10903 */;
import VoiceXIcon from "VoiceXIcon" /* 11623 */;
import useStableParticipant from "useStableParticipant" /* 18504 */;
import useVoicePanelCardUserStateIcons from "useVoicePanelCardUserStateIcons" /* 18506 */;
import AssetRegistryDefault from "AssetRegistry" /* 18532 */;
import getRandomNumberInRangeDefault from "getRandomNumberInRange" /* 18564 */;
import GameTagChipletDefault from "GameTagChiplet" /* 18584 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4822 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6642 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5714 */;
import VoicePanelConstants from "VoicePanelConstants" /* 10900 */;
import CallConstants from "CallConstants" /* 5632 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 5052 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let PixelRatio;
let Platform;
let Pressable;
let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let tmp;
const native2 = tmp(5037);
const useGameProfileObscuredDefault = tmp(8581);
function getAccessibilityLabel(tmp4ResultResult, label) {
  if (null != tmp4ResultResult.find((type) => type.type === require("useVoicePanelCardUserStateIcons").VoicePanelCardUserStateIconType.STREAM_ICON)) {
    const intl3 = intl5.intl;
    const obj2 = { username: label };
    return intl3.formatToPlainString(intl5.t.I0mOAs, obj2);
  } else {
    const found = tmp4ResultResult.find((type) => type.type === require("useVoicePanelCardUserStateIcons").VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON);
    if (null != found) {
      const muteDeafenIconState = found.muteDeafenIconState;
      if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED !== muteDeafenIconState) {
        if (VoiceStateIconUtils.MuteDeafenIconState.DEAFENED_SERVER !== muteDeafenIconState) {
          const intl = tmp(1128).intl;
          const obj = { username: label };
          return intl.formatToPlainString(intl5.t.Hd1oVG, obj);
        }
      }
      const intl2 = tmp(1128).intl;
      const obj3 = { username: label };
      return intl2.formatToPlainString(intl5.t["9hDjai"], obj3);
    } else {
      return label;
    }
  }
}
({ PixelRatio, Platform, Pressable } = react_native);
({ MODE_CHANGE_PHYSICS: c9, VoicePanelModes: c10 } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VOICE_PANEL_CARD_INNER_PADDING = VoicePanelCardConstants.VOICE_PANEL_CARD_INNER_PADDING;
const ThemeTypes = Constants.ThemeTypes;
({ ParticipantTypes: closure_14, VoicePlatforms: closure_15 } = CallConstants);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_19 = ReanimatedRexport.createAnimatedComponent(native.Icon);
ReanimatedRexport = ReanimatedRexport_mod;
let closure_20 = ReanimatedRexport.createAnimatedComponent(Pressable);
let c21 = 28;
const paddingVertical = PixelRatio.roundToNearestPixel(4);
let closure_23 = createStyles.createStyles(() => {
  let obj3;
  let rect;
  let rect1;
  let rect2;
  let size1;
  let size2;
  const obj = { topLeftButton: rect, topRightButton: { position: "absolute", top: VOICE_PANEL_CARD_INNER_PADDING, right: VOICE_PANEL_CARD_INNER_PADDING, zIndex: 1 }, labelPositionContainer: rect1, labelHideWrapper: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" }, labelOuterContainer: { display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden", paddingHorizontal: 8, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, height, gap: 4 }, initialIcons: { display: "flex", flexDirection: "row", marginStart: -4, marginEnd: -4 }, icon: size, iconWithoutBackground: size1, iconContainer: size2, speakerMuteIcon: { marginRight: 4 }, floatingContainer: { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden", flexShrink: 1, alignSelf: "stretch" }, floatingText: obj3, ringingIconContainer: rect2, ringingIcon: { tintColor: nativeDefault.colors.STATUS_POSITIVE }, secureFramesIcon: { marginEnd: -2 } };
  rect = { position: "absolute", top: VOICE_PANEL_CARD_INNER_PADDING, left: VOICE_PANEL_CARD_INNER_PADDING, zIndex: 1 };
  rect1 = { position: "absolute", left: 8, right: 8, bottom: 8, height, marginHorizontal: 8 };
  ({ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden", paddingHorizontal: 8, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, height, gap: 4 });
  size = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
  size1 = { width: 16, height: 16, tintColor: nativeDefault.colors.WHITE };
  size2 = { width: 20, height: 20, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
  obj3 = { overflow: "hidden", paddingStart: 4, paddingEnd: 4, paddingVertical, marginVertical: -paddingVertical, flexShrink: 1, lineHeight: 14 };
  rect2 = { position: "absolute", top: 8, right: 8, padding: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  ({ tintColor: nativeDefault.colors.STATUS_POSITIVE });
  return obj;
});
const __initData = { code: "function VoicePanelCardFloatingControlsTsx1(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}" };
const __initData2 = { code: "function VoicePanelCardFloatingControlsTsx2(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function StreamIcon(voicePlatform) {
  let controlsSpecs;
  let tmp = dependencyMap;
  let obj = controlsSpecs(576);
  const cResult = obj.c(6);
  voicePlatform = voicePlatform.voicePlatform;
  const tmp3 = closure_23();
  controlsSpecs = react.useContext(VoicePanelStateContextDefault).controlsSpecs;
  const fn = function o() {
    let num2;
    const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
    let num = 4;
    if (tmp) {
      num = 2;
    }
    const obj = { marginLeft: num, marginRight: num2 };
    num2 = 0;
    if (tmp) {
      num2 = 2;
    }
    return obj;
  };
  const obj3 = { controlsSpecs, VoicePanelControlsModes, GAP: 4 };
  fn.__closure = obj3;
  fn.__workletHash = 3270040588948;
  fn.__initData = __initData;
  const obj2 = controlsSpecs(5052);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let tmp4Result = AssetRegistryDefault;
  if (voicePlatform === constants2.XBOX) {
    tmp4Result = tmp4(18579);
  } else if (voicePlatform === constants2.MOBILE) {
    tmp4Result = tmp4(11717);
  } else if (voicePlatform === constants2.QUEST) {
    tmp4Result = tmp4(18580);
  }
  if (cResult[0] === animatedStyle) {
    let tmp8;
    if (cResult[1] === tmp3.iconWithoutBackground) {
      tmp8 = cResult[2];
    }
    if (cResult[3] === tmp4Result) {
      let tmp9;
      if (cResult[4] === tmp8) {
        tmp9 = cResult[5];
      }
      return tmp9;
    }
    const obj4 = { source: tmp4Result, style: tmp8 };
    const tmp12 = closure_16(closure_19, obj4);
    let num = 3;
    cResult[3] = tmp4Result;
    let num2 = 4;
    cResult[4] = tmp8;
    cResult[5] = tmp12;
    tmp9 = tmp12;
  }
  const items = [tmp3.iconWithoutBackground, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp3.iconWithoutBackground;
  cResult[2] = items;
  tmp8 = items;
}) : (function StreamIcon(voicePlatform) {
  let items;
  voicePlatform = voicePlatform.voicePlatform;
  let tmp = closure_23();
  const controlsSpecs = react.useContext(VoicePanelStateContextDefault).controlsSpecs;
  let obj = controlsSpecs(5052);
  const fn = function o() {
    let num2;
    const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
    let num = 4;
    if (tmp) {
      num = 2;
    }
    const obj = { marginLeft: num, marginRight: num2 };
    num2 = 0;
    if (tmp) {
      num2 = 2;
    }
    return obj;
  };
  const obj2 = { controlsSpecs, VoicePanelControlsModes, GAP: 4 };
  fn.__closure = obj2;
  fn.__workletHash = 15914667672663;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let tmp2Result = AssetRegistryDefault;
  if (voicePlatform === constants2.XBOX) {
    tmp2Result = tmp2(18579);
  } else if (voicePlatform === constants2.MOBILE) {
    tmp2Result = tmp2(11717);
  } else if (voicePlatform === constants2.QUEST) {
    tmp2Result = tmp2(18580);
  }
  const obj3 = { source: tmp2Result, style: items };
  items = [tmp.iconWithoutBackground, animatedStyle];
  return closure_16(closure_19, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedLabelIcon(icon) {
  let obj6;
  let obj8;
  const obj = react2;
  const cResult = obj.c(31);
  icon = icon.icon;
  const tmp4 = closure_23();
  const type = icon.type;
  if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
    let tmp47;
    if (cResult[0] !== icon.voicePlatform) {
      const obj2 = { voicePlatform: icon.voicePlatform };
      const tmp50 = authStore3(closure_26, obj2);
      cResult[0] = icon.voicePlatform;
      cResult[1] = tmp50;
      tmp47 = tmp50;
    } else {
      tmp47 = cResult[1];
    }
    return tmp47;
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.SPEAKER_MUTE_ICON === type) {
    let tmp38;
    let tmp40;
    const _Symbol2 = Symbol;
    const speakerMuteIcon = tmp4.speakerMuteIcon;
    const onPress2 = icon.onPress;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1128).intl;
      const stringResult = intl4.string(intl5.t.Q8Uzof);
      cResult[2] = stringResult;
      tmp38 = stringResult;
    } else {
      tmp38 = cResult[2];
    }
    if (cResult[3] !== tmp4.iconWithoutBackground) {
      const obj3 = { style: tmp4.iconWithoutBackground };
      const tmp42 = authStore3(VoiceXIcon.VoiceXIcon, obj3);
      cResult[3] = tmp4.iconWithoutBackground;
      cResult[4] = tmp42;
      tmp40 = tmp42;
    } else {
      tmp40 = cResult[4];
    }
    if (cResult[5] === icon.onPress) {
      if (cResult[6] === tmp4.speakerMuteIcon) {
        let tmp43;
        if (cResult[7] === tmp40) {
          tmp43 = cResult[8];
        }
        return tmp43;
      }
    }
    const obj4 = { style: speakerMuteIcon, hitSlop: 12, onPress: onPress2, accessibilityRole: "button", accessibilityLabel: tmp38, children: tmp40 };
    const tmp46 = authStore3(Pressable, obj4);
    cResult[5] = icon.onPress;
    cResult[6] = tmp4.speakerMuteIcon;
    cResult[7] = tmp40;
    cResult[8] = tmp46;
    tmp43 = tmp46;
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON === type) {
    let tmp27;
    let tmp34;
    if (cResult[9] !== icon.videoIconState) {
      let stringResult1;
      if (icon.videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
        const intl3 = tmp(1128).intl;
        stringResult1 = intl3.string(tmp(1128).t.uv1tVh);
      } else {
        const intl2 = tmp(1128).intl;
        stringResult1 = intl2.string(tmp(1128).t["PXMZ/+"]);
      }
      cResult[9] = icon.videoIconState;
      cResult[10] = stringResult1;
      tmp27 = stringResult1;
    } else {
      tmp27 = cResult[10];
    }
    if (cResult[11] === icon.onPress) {
      if (cResult[12] === icon.videoIconState) {
        if (cResult[13] === tmp4.icon) {
          if (cResult[14] === tmp4.iconContainer) {
            let tmp29;
            if (cResult[15] === tmp27) {
              tmp29 = cResult[16];
            }
            return tmp29;
          }
        }
      }
    }
    if (null != icon.onPress) {
      const obj5 = { style: tmp4.iconContainer, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: tmp27, children: authStore3(VoiceStateIcons.VideoIcon, obj6) };
      obj6 = { style: tmp4.icon, state: icon.videoIconState };
      tmp34 = authStore3(Pressable, obj5);
    } else {
      const obj7 = { style: tmp4.iconContainer, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp27, children: authStore3(VoiceStateIcons.VideoIcon, obj8) };
      obj8 = { style: tmp4.icon, state: icon.videoIconState };
      const tmp33 = NativeViewDefault;
      tmp34 = authStore3(tmp33, obj7);
    }
    cResult[11] = icon.onPress;
    cResult[12] = icon.videoIconState;
    cResult[13] = tmp4.icon;
    cResult[14] = tmp4.iconContainer;
    cResult[15] = tmp27;
    cResult[16] = tmp34;
    tmp29 = tmp34;
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON === type) {
    if (cResult[17] === icon.muteDeafenIconState) {
      let tmp16;
      if (cResult[18] === tmp4.icon) {
        tmp16 = cResult[19];
      }
      if (cResult[20] === icon.onPress) {
        let tmp19;
        if (cResult[21] === tmp16) {
          tmp19 = cResult[22];
        }
        if (cResult[23] === tmp4.iconContainer) {
          let tmp23;
          if (cResult[24] === tmp19) {
            tmp23 = cResult[25];
          }
          return tmp23;
        }
        const obj9 = { style: tmp4.iconContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp19 };
        const tmp26 = authStore3(NativeViewDefault, obj9);
        cResult[23] = tmp4.iconContainer;
        cResult[24] = tmp19;
        cResult[25] = tmp26;
        tmp23 = tmp26;
      }
      const obj10 = { onPress: icon.onPress, hitSlop: 12, children: tmp16 };
      const tmp22 = authStore3(Pressable, obj10);
      cResult[20] = icon.onPress;
      cResult[21] = tmp16;
      cResult[22] = tmp22;
      tmp19 = tmp22;
    }
    const obj11 = { style: tmp4.icon, state: icon.muteDeafenIconState, alwaysWhite: true };
    const tmp18 = authStore3(VoiceStateIcons.MuteDeafenIcon, obj11);
    cResult[17] = icon.muteDeafenIconState;
    cResult[18] = tmp4.icon;
    cResult[19] = tmp18;
    tmp16 = tmp18;
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_DISCONNECTED_ICON === type) {
    let tmp7;
    let tmp6;
    const _Symbol = Symbol;
    const iconContainer = tmp4.iconContainer;
    const onPress = icon.onPress;
    if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1128).intl;
      const stringResult2 = intl.string(intl5.t.HFwRpk);
      const obj12 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
      const CircleErrorIcon = tmp(7012).CircleErrorIcon;
      const tmp11 = authStore3(CircleErrorIcon, obj12);
      cResult[26] = stringResult2;
      cResult[27] = tmp11;
      tmp7 = tmp11;
      tmp6 = stringResult2;
    } else {
      tmp6 = cResult[26];
      tmp7 = cResult[27];
    }
    if (cResult[28] === icon.onPress) {
      let tmp12;
      if (cResult[29] === tmp4.iconContainer) {
        tmp12 = cResult[30];
      }
      return tmp12;
    }
    const obj13 = { style: iconContainer, onPress, accessibilityRole: "button", accessibilityLabel: tmp6, children: tmp7 };
    const tmp15 = authStore3(Pressable, obj13);
    cResult[28] = icon.onPress;
    cResult[29] = tmp4.iconContainer;
    cResult[30] = tmp15;
    tmp12 = tmp15;
  }
}) : (function AnimatedLabelIcon(icon) {
  let CircleErrorIcon;
  let intl;
  let intl4;
  let obj10;
  let obj11;
  let obj12;
  let obj4;
  let obj6;
  let obj8;
  icon = icon.icon;
  const tmp = closure_23();
  const type = icon.type;
  if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
    const obj2 = { voicePlatform: icon.voicePlatform };
    return authStore3(closure_26, obj2);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.SPEAKER_MUTE_ICON === type) {
    const obj3 = { style: tmp.speakerMuteIcon, hitSlop: 12, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: intl4.string(intl5.t.Q8Uzof), children: authStore3(VoiceXIcon.VoiceXIcon, obj4) };
    intl4 = tmp2(1128).intl;
    obj4 = { style: tmp.iconWithoutBackground };
    return authStore3(Pressable, obj3);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON === type) {
    let stringResult;
    let tmp16;
    if (icon.videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
      const intl3 = tmp2(1128).intl;
      stringResult = intl3.string(tmp2(1128).t.uv1tVh);
    } else {
      const intl2 = tmp2(1128).intl;
      stringResult = intl2.string(tmp2(1128).t["PXMZ/+"]);
    }
    if (null != icon.onPress) {
      const obj5 = { style: tmp.iconContainer, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: stringResult, children: authStore3(VoiceStateIcons.VideoIcon, obj6) };
      obj6 = { style: tmp.icon, state: icon.videoIconState };
      tmp16 = authStore3(Pressable, obj5);
    } else {
      const obj7 = { style: tmp.iconContainer, accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult, children: authStore3(VoiceStateIcons.VideoIcon, obj8) };
      obj8 = { style: tmp.icon, state: icon.videoIconState };
      const tmp15 = NativeViewDefault;
      tmp16 = authStore3(tmp15, obj7);
    }
    return tmp16;
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON === type) {
    const obj9 = { style: tmp.iconContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: authStore3(Pressable, obj10) };
    obj10 = { onPress: icon.onPress, hitSlop: 12, children: authStore3(VoiceStateIcons.MuteDeafenIcon, obj11) };
    obj11 = { style: tmp.icon, state: icon.muteDeafenIconState, alwaysWhite: true };
    const tmp9 = NativeViewDefault;
    return authStore3(tmp9, obj9);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_DISCONNECTED_ICON === type) {
    const obj = { style: tmp.iconContainer, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: intl.string(intl5.t.HFwRpk), children: authStore3(CircleErrorIcon, obj12) };
    intl = tmp2(1128).intl;
    obj12 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
    CircleErrorIcon = tmp2(7012).CircleErrorIcon;
    return authStore3(Pressable, obj);
  }
});
let closure_29 = -28 + 3 * VOICE_PANEL_CARD_INNER_PADDING;
let closure_30 = 28 + VOICE_PANEL_CARD_INNER_PADDING;
const __initData3 = { code: "function VoicePanelCardFloatingControlsTsx3(){const{withSpring,hidden,MODE_CHANGE_PHYSICS,hiddenOffsetY}=this.__closure;return{opacity:withSpring(hidden.get()?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(hidden.get()?hiddenOffsetY:0,MODE_CHANGE_PHYSICS)}]};}" };
const __initData4 = { code: "function VoicePanelCardFloatingControlsTsx4(){const{withSpring,hidden,MODE_CHANGE_PHYSICS,hiddenOffsetY}=this.__closure;return{opacity:withSpring(hidden.get()?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(hidden.get()?hiddenOffsetY:0,MODE_CHANGE_PHYSICS)}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_33 = ReactCompilerGating.isReactCompilerEnabled() ? (function useControlsHideStyles(hidden, hiddenOffsetY) {
  _require = hidden;
  let closure_1 = hiddenOffsetY;
  let obj = require("ReanimatedRexport");
  const fn = function o() {
    let items;
    const withSpring = spring.withSpring;
    let num = 1;
    spring;
    const obj = hidden;
    if (hidden.get()) {
      num = 0;
    }
    const obj2 = { opacity: withSpring(num, c9), transform: items };
    const withSpring2 = tmp(5247).withSpring;
    let num2 = 0;
    spring;
    if (obj.get()) {
      num2 = hiddenOffsetY;
    }
    items = [{ translateY: withSpring2(num2, tmp4) }];
    ({ translateY: withSpring2(num2, c9) });
    return obj2;
  };
  let obj2 = { withSpring: require("spring").withSpring, hidden, MODE_CHANGE_PHYSICS, hiddenOffsetY };
  fn.__closure = obj2;
  fn.__workletHash = 17465031688867;
  fn.__initData = __initData3;
  return obj.useAnimatedStyle(fn);
}) : (function useControlsHideStyles(hidden, hiddenOffsetY) {
  _require = hidden;
  let closure_1 = hiddenOffsetY;
  let obj = require("ReanimatedRexport");
  const fn = function o() {
    let items;
    const withSpring = spring.withSpring;
    let num = 1;
    spring;
    const obj = hidden;
    if (hidden.get()) {
      num = 0;
    }
    const obj2 = { opacity: withSpring(num, c9), transform: items };
    const withSpring2 = tmp(5247).withSpring;
    let num2 = 0;
    spring;
    if (obj.get()) {
      num2 = hiddenOffsetY;
    }
    items = [{ translateY: withSpring2(num2, tmp4) }];
    ({ translateY: withSpring2(num2, c9) });
    return obj2;
  };
  let obj2 = { withSpring: require("spring").withSpring, hidden, MODE_CHANGE_PHYSICS, hiddenOffsetY };
  fn.__closure = obj2;
  fn.__workletHash = 1152554995044;
  fn.__initData = __initData4;
  return obj.useAnimatedStyle(fn);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? (function HideableTileControl(arg0) {
  let children;
  let hideStyles;
  let layout;
  let style;
  const obj = react2;
  const cResult = obj.c(7);
  ({ style, hideStyles, layout, children } = arg0);
  if (cResult[0] === children) {
    let tmp3;
    if (cResult[1] === hideStyles) {
      tmp3 = cResult[2];
    }
    if (cResult[3] === layout) {
      if (cResult[4] === style) {
        let tmp5;
        if (cResult[5] === tmp3) {
          tmp5 = cResult[6];
        }
        return tmp5;
      }
    }
    const obj2 = { style, layout, pointerEvents: "box-none", children: tmp3 };
    const tmp8 = authStore3(ReanimatedNativeViewDefault, obj2);
    cResult[3] = layout;
    cResult[4] = style;
    cResult[5] = tmp3;
    cResult[6] = tmp8;
    tmp5 = tmp8;
  }
  const tmp4 = authStore3(ReanimatedNativeViewDefault, { style: hideStyles, pointerEvents: "box-none", children });
  cResult[0] = children;
  cResult[1] = hideStyles;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function HideableTileControl(arg0) {
  let children;
  let hideStyles;
  let layout;
  let style;
  ({ style, hideStyles, layout, children } = arg0);
  const obj = { style, layout, pointerEvents: "box-none", children: authStore3(ReanimatedNativeViewDefault, { style: hideStyles, pointerEvents: "box-none", children }) };
  const tmp = ReanimatedNativeViewDefault;
  return authStore3(tmp, obj);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function CloseButton(participant) {
  let guildId;
  let isSelf;
  let layout;
  let obj = participant(576);
  const cResult = obj.c(14);
  participant = participant.participant;
  ({ isSelf, layout } = participant);
  const controlsHidden = participant.controlsHidden;
  guildId = react.useContext(guildId(10899)).guildId;
  const tmp5 = closure_23();
  const tmp6 = closure_33(controlsHidden, closure_29);
  if (cResult[0] === guildId) {
    let tmp7;
    let stringResult;
    if (cResult[1] === participant) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === isSelf) {
      let tmp8;
      if (cResult[4] === participant) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp7) {
        let tmp11;
        if (cResult[7] === tmp8) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === tmp6) {
          if (cResult[10] === layout) {
            if (cResult[11] === tmp5.topLeftButton) {
              let tmp15;
              if (cResult[12] === tmp11) {
                tmp15 = cResult[13];
              }
              return tmp15;
            }
          }
        }
        let obj2 = { style: tmp5.topLeftButton, hideStyles: tmp6, layout, children: tmp11 };
        const tmp18 = closure_16(closure_34, obj2);
        cResult[9] = tmp6;
        cResult[10] = layout;
        cResult[11] = tmp5.topLeftButton;
        cResult[12] = tmp11;
        cResult[13] = tmp18;
        tmp15 = tmp18;
      }
      const obj3 = { icon: guildId(18581), onPress: tmp7, accessibilityLabel: tmp8 };
      const tmp4Result = guildId(18476);
      const tmp14 = closure_16(tmp4Result, obj3);
      cResult[6] = tmp7;
      cResult[7] = tmp8;
      cResult[8] = tmp14;
      tmp11 = tmp14;
    }
    const tmpResult = tmp(18504);
    let result = tmpResult.isStableActivityParticipant(participant);
    const intl = tmp(1128).intl;
    const string = intl.string;
    const t = tmp(1128).t;
    if (result) {
      stringResult = string(t["R/FK4A"]);
    } else if (isSelf) {
      stringResult = string(t.S5anIc);
    } else {
      stringResult = string(t.q3O3J8);
    }
    cResult[3] = isSelf;
    cResult[4] = participant;
    cResult[5] = stringResult;
    tmp8 = stringResult;
  }
  const fn = function o() {
    const obj = useStableParticipant;
    if (obj.isStableStreamParticipant(participant)) {
      const streamForUser = ApplicationStreamingStore.getStreamForUser(tmp3.user.id, guildId);
      if (null != streamForUser) {
        const stopStream = StreamActionCreators.stopStream;
        StreamActionCreators;
        const tmpResult4 = StreamKeyUtils;
        stopStream(tmpResult4.encodeStreamKey(streamForUser));
      }
    }
    const tmpResult5 = useStableParticipant;
    if (tmpResult5.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let _location;
      const leaveEmbeddedActivity = leaveEmbeddedActivity2.leaveEmbeddedActivity;
      leaveEmbeddedActivity2;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const obj2 = { location: _location, applicationId: participant.applicationId };
      const result = leaveEmbeddedActivity(obj2);
    }
  };
  cResult[0] = guildId;
  cResult[1] = participant;
  cResult[2] = fn;
  tmp7 = fn;
}) : (function CloseButton(participant) {
  let controlsHidden;
  let isSelf;
  let layout;
  let obj2;
  let stringResult;
  let tmp6;
  participant = participant.participant;
  let guildId;
  ({ controlsHidden, isSelf, layout } = participant);
  guildId = react.useContext(guildId(10899)).guildId;
  const items = [guildId, participant];
  const tmp = closure_23();
  const tmp2 = closure_33(controlsHidden, closure_29);
  let obj = { style: tmp.topLeftButton, hideStyles: tmp2, layout, children: tmp4(tmp6, obj2) };
  const callback = react.useCallback(() => {
    const obj = useStableParticipant;
    if (obj.isStableStreamParticipant(participant)) {
      const streamForUser = ApplicationStreamingStore.getStreamForUser(tmp3.user.id, guildId);
      if (null != streamForUser) {
        const stopStream = StreamActionCreators.stopStream;
        StreamActionCreators;
        const tmpResult4 = StreamKeyUtils;
        stopStream(tmpResult4.encodeStreamKey(streamForUser));
      }
    }
    const tmpResult5 = useStableParticipant;
    if (tmpResult5.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let _location;
      const leaveEmbeddedActivity = leaveEmbeddedActivity2.leaveEmbeddedActivity;
      leaveEmbeddedActivity2;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const obj2 = { location: _location, applicationId: participant.applicationId };
      const result = leaveEmbeddedActivity(obj2);
    }
  }, items);
  obj2 = { icon: guildId(18581), onPress: callback, accessibilityLabel: stringResult };
  tmp6 = guildId(18476);
  const obj3 = participant(18504);
  let result = obj3.isStableActivityParticipant(participant);
  const intl = participant(1128).intl;
  const string = intl.string;
  const t = participant(1128).t;
  const tmp5 = closure_34;
  if (result) {
    stringResult = string(t["R/FK4A"]);
  } else if (isSelf) {
    stringResult = string(t.S5anIc);
  } else {
    stringResult = string(t.q3O3J8);
  }
  return closure_16(tmp5, obj);
}));
const __initData5 = { code: "function VoicePanelCardFloatingControlsTsx5(){const{controlsHidden,mode,VoicePanelModes}=this.__closure;return controlsHidden.get()||mode.get()===VoicePanelModes.PIP;}" };
const __initData6 = { code: "function VoicePanelCardFloatingControlsTsx6(){const{controlsHidden,mode,VoicePanelModes}=this.__closure;return controlsHidden.get()||mode.get()===VoicePanelModes.PIP;}" };
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_38 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function CardFocusButton(participantId) {
  let isActivityParticipant;
  let layout;
  let mode;
  let setFocused;
  let targetName;
  const obj = participantId(setFocused[17]);
  const cResult = obj.c(14);
  participantId = participantId.participantId;
  const controlsHidden = participantId.controlsHidden;
  ({ targetName, isActivityParticipant, layout } = participantId);
  const context = mode.useContext(controlsHidden(setFocused[18]));
  setFocused = context.setFocused;
  mode = context.mode;
  const tmp4 = controlsHidden;
  if (cResult[0] === participantId) {
    let tmp6;
    let stringResult;
    if (cResult[1] === setFocused) {
      tmp6 = cResult[2];
    }
    const tmp8 = closure_23();
    const tmpResult = participantId(setFocused[12]);
    class S {
      constructor() {
        const value = controlsHidden.get() || mode.get() === constants.PIP;
        return value;
      }
    }
    const obj2 = { controlsHidden, mode, VoicePanelModes };
    S.__closure = obj2;
    S.__workletHash = 1604088689263;
    S.__initData = __initData5;
    const tmp13 = closure_33(tmpResult.useDerivedValue(S), closure_29);
    if (cResult[3] === isActivityParticipant) {
      let tmp14;
      if (cResult[4] === targetName) {
        tmp14 = cResult[5];
      }
      if (cResult[6] === tmp14) {
        let tmp17;
        if (cResult[7] === tmp6) {
          tmp17 = cResult[8];
        }
        if (cResult[9] === tmp13) {
          if (cResult[10] === layout) {
            if (cResult[11] === tmp8.topRightButton) {
              let tmp21;
              if (cResult[12] === tmp17) {
                tmp21 = cResult[13];
              }
              return tmp21;
            }
          }
        }
        class S {
          constructor() {
            const value = controlsHidden.get() || mode.get() === constants.PIP;
            return value;
          }
        }
        tmp24[0] = tmp8.topRightButton;
        tmp24[1] = tmp13;
        tmp24[2] = layout;
        tmp24[3] = tmp17;
        const tmp25 = closure_16(closure_34, tmp24);
        cResult[9] = tmp13;
        cResult[10] = layout;
        cResult[11] = tmp8.topRightButton;
        cResult[12] = tmp17;
        cResult[13] = tmp25;
        tmp21 = tmp25;
      }
      const obj3 = { icon: tmp4(setFocused[38]), onPress: tmp6, accessibilityLabel: tmp14 };
      class S {
        constructor() {
          const value = controlsHidden.get() || mode.get() === constants.PIP;
          return value;
        }
      }
      const tmp20 = closure_16(tmp19, obj3);
      cResult[6] = tmp14;
      cResult[7] = tmp6;
      cResult[8] = tmp20;
      tmp17 = tmp20;
    }
    if (isActivityParticipant) {
      const intl2 = tmp(tmp2[24]).intl;
      stringResult = intl2.string(tmp(tmp2[24]).t["3ejJer"]);
    } else if (null != targetName) {
      const formatToPlainString = tmp(tmp2[24]).intl.formatToPlainString;
      class S {
        constructor() {
          const value = controlsHidden.get() || mode.get() === constants.PIP;
          return value;
        }
      }
    } else {
      const intl = tmp(tmp2[24]).intl;
      stringResult = intl.string(tmp(tmp2[24]).t["77cRN4"]);
    }
    cResult[3] = isActivityParticipant;
    cResult[4] = targetName;
    cResult[5] = stringResult;
    tmp14 = stringResult;
  }
  const fn = function o() {
    setFocused(participantId);
  };
  cResult[0] = participantId;
  cResult[1] = setFocused;
  cResult[2] = fn;
  tmp6 = fn;
}) : (function CardFocusButton(participantId) {
  let isActivityParticipant;
  let layout;
  let obj5;
  let stringResult;
  let tmpResult;
  participantId = participantId.participantId;
  const controlsHidden = participantId.controlsHidden;
  const targetName = participantId.targetName;
  let setFocused;
  let mode;
  ({ isActivityParticipant, layout } = participantId);
  const context = mode.useContext(controlsHidden(setFocused[18]));
  setFocused = context.setFocused;
  mode = context.mode;
  const items = [setFocused, participantId];
  const callback = mode.useCallback(() => {
    setFocused(participantId);
  }, items);
  const fn = function u() {
    const value = controlsHidden.get() || mode.get() === constants.PIP;
    return value;
  };
  const obj2 = { controlsHidden, mode, VoicePanelModes };
  fn.__closure = obj2;
  fn.__workletHash = 2518485438764;
  fn.__initData = __initData6;
  const tmp5 = closure_23();
  const obj = participantId(setFocused[12]);
  const tmp7 = closure_33(obj.useDerivedValue(fn), closure_29);
  if (isActivityParticipant) {
    const intl3 = tmp6(tmp2[24]).intl;
    stringResult = intl3.string(tmp6(tmp2[24]).t["3ejJer"]);
  } else if (null != targetName) {
    const intl2 = tmp6(tmp2[24]).intl;
    const obj3 = { targetName };
    stringResult = intl2.formatToPlainString(tmp6(tmp2[24]).t.OervdV, obj3);
  } else {
    const intl = tmp6(tmp2[24]).intl;
    stringResult = intl.string(tmp6(tmp2[24]).t["77cRN4"]);
  }
  const obj4 = { style: tmp5.topRightButton, hideStyles: tmp7, layout, children: closure_16(tmpResult, obj5) };
  obj5 = { icon: controlsHidden(setFocused[38]), onPress: callback, accessibilityLabel: stringResult };
  tmpResult = controlsHidden(setFocused[36]);
  return closure_16(closure_34, obj4);
}));
const RING_PHYSICS = { mass: 0.1, stiffness: 400, overshootClamping: true };
const __initData7 = { code: "function VoicePanelCardFloatingControlsTsx7(){const{flip}=this.__closure;return flip.get();}" };
const __initData8 = { code: "function VoicePanelCardFloatingControlsTsx8(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(35,55),RING_PHYSICS,\"respect-motion-settings\",function(finished){if(!finished){return;}flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(-10,10),RING_PHYSICS,\"respect-motion-settings\",function(finished_0){if(!finished_0){return;}flip.set(!flip.get());}));}}" };
let closure_42 = { code: "function VoicePanelCardFloatingControlsTsx9(finished){const{flip}=this.__closure;if(!finished){return;}flip.set(!flip.get());}" };
let closure_43 = { code: "function VoicePanelCardFloatingControlsTsx10(finished_0){const{flip}=this.__closure;if(!finished_0){return;}flip.set(!flip.get());}" };
const __initData9 = { code: "function VoicePanelCardFloatingControlsTsx11(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}" };
const __initData10 = { code: "function VoicePanelCardFloatingControlsTsx12(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+\"deg\"}]};}" };
const __initData11 = { code: "function VoicePanelCardFloatingControlsTsx13(){const{flip}=this.__closure;return flip.get();}" };
const __initData12 = { code: "function VoicePanelCardFloatingControlsTsx14(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(45-10,45+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(0-10,0+10),RING_PHYSICS,'respect-motion-settings',function(finished_0){if(!finished_0)return;flip.set(!flip.get());}));}}" };
let closure_48 = { code: "function VoicePanelCardFloatingControlsTsx15(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}" };
let closure_49 = { code: "function VoicePanelCardFloatingControlsTsx16(finished_0){const{flip}=this.__closure;if(!finished_0)return;flip.set(!flip.get());}" };
const __initData13 = { code: "function VoicePanelCardFloatingControlsTsx17(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}" };
const __initData14 = { code: "function VoicePanelCardFloatingControlsTsx18(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+\"deg\"}]};}" };
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_52 = memo3(ReactCompilerGating.isReactCompilerEnabled() ? (function RingingIcon(controlsHidden) {
  let sharedValue1;
  let tmp7;
  let tmp8;
  let useReducedMotion;
  let tmp = controlsHidden;
  let tmp2 = sharedValue1;
  let obj = controlsHidden(sharedValue1[17]);
  const cResult = obj.c(13);
  controlsHidden = controlsHidden.controlsHidden;
  let tmp4 = closure_23();
  let obj2 = controlsHidden(sharedValue1[12]);
  const sharedValue = obj2.useSharedValue(true);
  const obj3 = controlsHidden(sharedValue1[12]);
  sharedValue1 = obj3.useSharedValue(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    let fn = function o() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = tmp(tmp2[39]);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  const tmpResult4 = tmp(tmp2[12]);
  class I {
    constructor() {
      return sharedValue.get();
    }
  }
  I.__closure = { flip: sharedValue };
  I.__workletHash = 12043935058158;
  I.__initData = __initData7;
  let fn2 = function h(arg0) {
    let tmp = sharedValue1;
    const withSpring = spring.withSpring;
    const tmp3 = getRandomNumberInRangeDefault;
    const tmp4 = arg0;
    if (tmp4) {
      const fn2 = function o(arg0) {
        const tmp = arg0;
        if (tmp) {
          const result = sharedValue.set(!sharedValue.get());
        }
      };
      const obj2 = { flip: sharedValue };
      fn2.__closure = obj2;
      fn2.__workletHash = 12072622457709;
      fn2.__initData = __initData;
      let result = set(withSpring(tmp3(35, 55), RING_PHYSICS, "respect-motion-settings", fn2));
    } else {
      const fn = function n(arg0) {
        const tmp = arg0;
        if (tmp) {
          const result = sharedValue.set(!sharedValue.get());
        }
      };
      const obj = { flip: sharedValue };
      fn.__closure = obj;
      fn.__workletHash = 3548834534549;
      fn.__initData = __initData2;
      const result1 = set(withSpring(tmp3(-10, 10), RING_PHYSICS, "respect-motion-settings", fn));
    }
  };
  fn2.__closure = { angle: sharedValue1, withSpring: tmp(tmp2[30]).withSpring, getRandomNumberInRange: sharedValue(tmp2[40]), RING_PHYSICS, flip: sharedValue };
  fn2.__workletHash = 9806064842498;
  fn2.__initData = __initData8;
  ({ angle: sharedValue1, withSpring: tmp(tmp2[30]).withSpring, getRandomNumberInRange: sharedValue(tmp2[40]), RING_PHYSICS, flip: sharedValue });
  const animatedReaction = tmpResult4.useAnimatedReaction(I, fn2);
  const tmpResult5 = tmp(tmp2[12]);
  class S {
    constructor() {
      let top = 0;
      if (controlsHidden.get()) {
        top = -c21 + 2 * VOICE_PANEL_CARD_INNER_PADDING;
      }
      return { top };
    }
  }
  const obj5 = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING };
  S.__closure = obj5;
  S.__workletHash = 1062668091812;
  S.__initData = __initData9;
  const animatedStyle = tmpResult5.useAnimatedStyle(S);
  tmp(tmp2[12]);
  class P {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ rotate: "" + sharedValue1.get() + "deg" }];
      ({ rotate: "" + sharedValue1.get() + "deg" });
      return obj;
    }
  }
  P.__closure = { angle: sharedValue1 };
  P.__workletHash = 5604667206084;
  P.__initData = __initData10;
  if (cResult[2] === tmp4.ringingIconContainer) {
    let tmp16;
    let tmp18;
    if (cResult[3] === animatedStyle) {
      tmp16 = cResult[4];
    }
    if (cResult[5] !== tmp4.ringingIcon) {
      const obj6 = { source: sharedValue(tmp2[41]), size: tmp(tmp2[13]).IconSizes.SMALL_20, style: tmp4.ringingIcon };
      const Icon = tmp(tmp2[13]).Icon;
      const tmp20 = closure_16(Icon, obj6);
      cResult[5] = tmp4.ringingIcon;
      cResult[6] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[6];
    }
    if (cResult[7] === (!stateFromStores && tmp15)) {
      let tmp21;
      if (cResult[8] === tmp18) {
        tmp21 = cResult[9];
      }
      if (cResult[10] === tmp16) {
        let tmp24;
        if (cResult[11] === tmp21) {
          tmp24 = cResult[12];
        }
        return tmp24;
      }
      const obj7 = { style: tmp16, children: tmp21 };
      const tmp26 = closure_16(sharedValue(tmp2[31]), obj7);
      cResult[10] = tmp16;
      cResult[11] = tmp21;
      cResult[12] = tmp26;
      tmp24 = tmp26;
    }
    const obj8 = { style: !stateFromStores && tmp15, pointerEvents: "none", children: tmp18 };
    const tmp23 = closure_16(sharedValue(tmp2[31]), obj8);
    cResult[7] = !stateFromStores && tmp15;
    cResult[8] = tmp18;
    cResult[9] = tmp23;
    tmp21 = tmp23;
  }
  const items1 = [animatedStyle, tmp4.ringingIconContainer];
  cResult[2] = tmp4.ringingIconContainer;
  cResult[3] = animatedStyle;
  cResult[4] = items1;
  tmp16 = items1;
}) : (function RingingIcon(controlsHidden) {
  let Icon;
  let items1;
  let obj10;
  let obj11;
  let tmp13;
  let useReducedMotion;
  controlsHidden = controlsHidden.controlsHidden;
  let sharedValue1;
  let tmp = closure_23();
  let tmp2 = controlsHidden;
  let tmp3 = sharedValue1;
  let obj = controlsHidden(sharedValue1[12]);
  const sharedValue = obj.useSharedValue(true);
  let obj2 = controlsHidden(sharedValue1[12]);
  sharedValue1 = obj2.useSharedValue(0);
  let items = [AccessibilityStore];
  const obj3 = controlsHidden(sharedValue1[39]);
  const stateFromStores = obj3.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let fn = function o() {
    return sharedValue.get();
  };
  fn.__closure = { flip: sharedValue };
  fn.__workletHash = 12713167779771;
  fn.__initData = __initData11;
  let fn2 = function n(arg0) {
    let tmp = sharedValue1;
    const withSpring = spring.withSpring;
    const tmp3 = getRandomNumberInRangeDefault;
    const tmp4 = arg0;
    if (tmp4) {
      const fn2 = function o(arg0) {
        const tmp = arg0;
        if (tmp) {
          const result = sharedValue.set(!sharedValue.get());
        }
      };
      const obj2 = { flip: sharedValue };
      fn2.__closure = obj2;
      fn2.__workletHash = 6186600894966;
      fn2.__initData = __initData;
      let result = set(withSpring(tmp3(35, 55), RING_PHYSICS, "respect-motion-settings", fn2));
    } else {
      const fn = function n(arg0) {
        const tmp = arg0;
        if (tmp) {
          const result = sharedValue.set(!sharedValue.get());
        }
      };
      const obj = { flip: sharedValue };
      fn.__closure = obj;
      fn.__workletHash = 8631692281909;
      fn.__initData = __initData2;
      const result1 = set(withSpring(tmp3(-10, 10), RING_PHYSICS, "respect-motion-settings", fn));
    }
  };
  const obj4 = controlsHidden(sharedValue1[12]);
  fn2.__closure = { angle: sharedValue1, withSpring: controlsHidden(sharedValue1[30]).withSpring, getRandomNumberInRange: sharedValue(sharedValue1[40]), RING_PHYSICS, flip: sharedValue };
  fn2.__workletHash = 5752929555156;
  fn2.__initData = __initData12;
  ({ angle: sharedValue1, withSpring: controlsHidden(sharedValue1[30]).withSpring, getRandomNumberInRange: sharedValue(sharedValue1[40]), RING_PHYSICS, flip: sharedValue });
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const fn3 = function p() {
    let top = 0;
    if (controlsHidden.get()) {
      top = -c21 + 2 * VOICE_PANEL_CARD_INNER_PADDING;
    }
    return { top };
  };
  const obj7 = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING };
  fn3.__closure = obj7;
  fn3.__workletHash = 15571042858594;
  fn3.__initData = __initData13;
  const obj6 = controlsHidden(sharedValue1[12]);
  const animatedStyle = obj6.useAnimatedStyle(fn3);
  const fn4 = function h() {
    let items;
    const obj = { transform: items };
    items = [{ rotate: "" + sharedValue1.get() + "deg" }];
    ({ rotate: "" + sharedValue1.get() + "deg" });
    return obj;
  };
  fn4.__closure = { angle: sharedValue1 };
  fn4.__workletHash = 12957595468302;
  fn4.__initData = __initData14;
  const obj8 = controlsHidden(sharedValue1[12]);
  const animatedStyle1 = obj8.useAnimatedStyle(fn4);
  const obj9 = { style: items1, children: closure_16(tmp13, obj10) };
  items1 = [animatedStyle, tmp.ringingIconContainer];
  let tmp14 = !stateFromStores;
  const tmp12 = sharedValue(sharedValue1[31]);
  tmp13 = sharedValue(sharedValue1[31]);
  const tmp7 = sharedValue;
  if (!stateFromStores) {
    tmp14 = animatedStyle1;
  }
  obj10 = { style: tmp14, pointerEvents: "none", children: closure_16(Icon, obj11) };
  obj11 = { source: tmp7(tmp3[41]), size: tmp2(tmp3[13]).IconSizes.SMALL_20, style: tmp.ringingIcon };
  Icon = tmp2(tmp3[13]).Icon;
  return closure_16(tmp12, obj9);
}));
const memo4 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_53 = memo4(ReactCompilerGating.isReactCompilerEnabled() ? (function RingingIconWrapper(controlsHidden) {
  let obj3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  controlsHidden = controlsHidden.controlsHidden;
  if (cResult[0] !== controlsHidden) {
    const obj2 = { theme: ThemeTypes.LIGHT, children: authStore3(closure_52, obj3) };
    obj3 = { controlsHidden };
    const ThemeContextProvider = native2.ThemeContextProvider;
    const tmp8 = authStore3(ThemeContextProvider, obj2);
    cResult[0] = controlsHidden;
    cResult[1] = tmp8;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function RingingIconWrapper(controlsHidden) {
  controlsHidden = controlsHidden.controlsHidden;
  const obj = { theme: ThemeTypes.LIGHT, children: authStore3(closure_52, { controlsHidden }) };
  const ThemeContextProvider = native2.ThemeContextProvider;
  return authStore3(ThemeContextProvider, obj);
}));
const memo5 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_54 = memo5(ReactCompilerGating.isReactCompilerEnabled() ? (function UserTagChiplet(arg0) {
  let closure_1;
  let gameRecord;
  let ref;
  let textColor;
  let tmp6;
  let userId;
  let tmp = dependencyMap;
  const obj = gameRecord(576);
  const cResult = obj.c(13);
  ({ userId, textColor } = arg0);
  const first = usePlayingGameActivitiesDefault(userId, arg0.guildId)[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  if (cResult[0] !== application_id) {
    const obj2 = { applicationId: application_id };
    cResult[0] = application_id;
    cResult[1] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  gameRecord = tmp3(9249)(tmp6).gameRecord;
  let tmp7 = tmp3(8581)(gameRecord);
  importDefault = tmp7;
  dependencyMap = react.useRef(false);
  const obj3 = react;
  if (cResult[2] === gameRecord) {
    let tmp8;
    let tmp9;
    let tmp11;
    if (cResult[3] === tmp7) {
      tmp8 = cResult[4];
      tmp9 = cResult[5];
    }
    const effect = obj3.useEffect(tmp8, tmp9);
    if (null != gameRecord) {
      if (!tmp7) {
        if (cResult[9] === gameRecord) {
          if (cResult[10] === textColor) {
            if (cResult[11] === userId) {
              tmp11 = cResult[12];
            }
          }
        }
        const obj4 = { game: gameRecord, userId, textColor };
        const tmp13 = closure_16(GameTagChipletDefault, obj4);
        cResult[9] = gameRecord;
        cResult[10] = textColor;
        cResult[11] = userId;
        cResult[12] = tmp13;
        tmp11 = tmp13;
      }
      return tmp11;
    }
    if (cResult[6] === textColor) {
      let tmp14;
      if (cResult[7] === userId) {
        tmp14 = cResult[8];
      }
      tmp11 = tmp14;
    }
    const obj5 = { userId, textColor };
    const tmp16 = closure_16(GuildTagDefault, obj5);
    cResult[6] = textColor;
    cResult[7] = userId;
    cResult[8] = tmp16;
    tmp14 = tmp16;
  }
  const fn = function h() {
    const current = ref.current;
    let tmp2 = !current;
    const tmp = ref;
    if (!current) {
      tmp2 = null != gameRecord;
    }
    if (tmp2) {
      tmp2 = closure_1;
    }
    if (tmp2) {
      const trackEntryPoint = useShouldOpenGameProfileModal.trackEntryPoint;
      const id = gameRecord.id;
      const items = [useShouldOpenGameProfileModal.RejectionReason.Obscured];
      trackEntryPoint(false, id, items, GameProfileAnalyticUtils.GameProfileSources.CallTile);
      tmp.current = true;
    }
  };
  let items = [gameRecord, tmp7];
  cResult[2] = gameRecord;
  cResult[3] = tmp7;
  cResult[4] = fn;
  cResult[5] = items;
  tmp9 = items;
  tmp8 = fn;
}) : (function UserTagChiplet(arg0) {
  let closure_1;
  let ref;
  let textColor;
  let userId;
  ({ userId, textColor } = arg0);
  let gameRecord;
  importDefault = undefined;
  dependencyMap = undefined;
  let tmp = importDefault;
  let tmp2 = dependencyMap;
  const first = usePlayingGameActivitiesDefault(userId, arg0.guildId)[0];
  let application_id;
  const tmp4 = useResolveGameForProfileDefault;
  if (first != null) {
    application_id = first.application_id;
  }
  gameRecord = tmp4({ applicationId: application_id }).gameRecord;
  const tmp6 = useGameProfileObscuredDefault(gameRecord);
  importDefault = tmp6;
  dependencyMap = react.useRef(false);
  let items = [gameRecord, tmp6];
  const effect = react.useEffect(() => {
    const current = ref.current;
    let tmp2 = !current;
    const tmp = ref;
    if (!current) {
      tmp2 = null != gameRecord;
    }
    if (tmp2) {
      tmp2 = closure_1;
    }
    if (tmp2) {
      const trackEntryPoint = useShouldOpenGameProfileModal.trackEntryPoint;
      const id = gameRecord.id;
      const items = [useShouldOpenGameProfileModal.RejectionReason.Obscured];
      trackEntryPoint(false, id, items, GameProfileAnalyticUtils.GameProfileSources.CallTile);
      tmp.current = true;
    }
  }, items);
  if (null != gameRecord) {
    let tmp9;
    if (!tmp6) {
      const obj = { game: gameRecord, userId, textColor };
      tmp9 = closure_16(GameTagChipletDefault, obj);
    }
    return tmp9;
  }
  tmp9 = closure_16(GuildTagDefault, { userId, textColor });
}));
const __initData15 = { code: "function VoicePanelCardFloatingControlsTsx19(){const{hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden}=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;return!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();}" };
const __initData16 = { code: "function VoicePanelCardFloatingControlsTsx20(){const{FLOATING_BAR_HEIGHT,isPillHidden}=this.__closure;return{height:FLOATING_BAR_HEIGHT,pointerEvents:isPillHidden.get()?\"none\":\"auto\"};}" };
const __initData17 = { code: "function VoicePanelCardFloatingControlsTsx21(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP}=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden&&hasIcon;return{width:shouldCollapseWidth?0:\"auto\",marginRight:hidden?-GAP:0};}" };
const __initData18 = { code: "function VoicePanelCardFloatingControlsTsx22(){const{hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden}=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;return!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();}" };
const __initData19 = { code: "function VoicePanelCardFloatingControlsTsx23(){const{FLOATING_BAR_HEIGHT,isPillHidden}=this.__closure;return{height:FLOATING_BAR_HEIGHT,pointerEvents:isPillHidden.get()?'none':'auto'};}" };
const __initData20 = { code: "function VoicePanelCardFloatingControlsTsx24(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP}=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden&&hasIcon;return{width:shouldCollapseWidth?0:'auto',marginRight:hidden?-GAP:0};}" };
const memo6 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_61 = memo6(ReactCompilerGating.isReactCompilerEnabled() ? (function FloatingParticipantLabel(controlsHidden) {
  let channelId;
  let controlsSpecs;
  let focused;
  let guildId;
  let intl;
  let label;
  let layout;
  let participant;
  let tmp = controlsHidden;
  let tmp2 = controlsSpecs;
  let obj = controlsHidden(controlsSpecs[17]);
  const cResult = obj.c(64);
  controlsHidden = controlsHidden.controlsHidden;
  ({ label, layout, participant } = controlsHidden);
  let tmp4 = channelId;
  const context = focused.useContext(channelId(controlsSpecs[18]));
  ({ guildId, channelId } = context);
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  const connected = context.connected;
  const mode = context.mode;
  const obj2 = controlsHidden(controlsSpecs[50]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const tmp7 = closure_23();
  let id;
  const obj3 = controlsHidden(controlsSpecs[32]);
  if (obj3.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  const analyticsLocations = tmp4(tmp2[51])().analyticsLocations;
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === channelId) {
      if (cResult[4] === channelId) {
        let tmp10;
        if (cResult[5] === id) {
          tmp10 = cResult[6];
        }
        const tmpResult = tmp(tmp2[53]);
        const isUserSecureFramesVerified = tmpResult.useIsUserSecureFramesVerified(tmp10);
        const type = participant.type;
        let id1;
        const tmp4Result = tmp4(tmp2[23]);
        const tmpResult6 = tmp(tmp2[32]);
        if (tmpResult6.isStableParticipantWithUser(participant)) {
          id1 = participant.user.id;
        }
        const tmp4ResultResult = tmp4Result(type, id1, guildId, channelId);
        if (cResult[7] === guildId) {
          let tmp18;
          let tmp20;
          let tmp36;
          if (cResult[8] === id) {
            tmp18 = cResult[9];
          }
          const tmp19 = tmp4(tmp2[54])(tmp18);
          if (cResult[10] !== tmp19) {
            const obj4 = { displayNameStyles: tmp19 };
            cResult[10] = tmp19;
            cResult[11] = obj4;
            tmp20 = obj4;
          } else {
            tmp20 = cResult[11];
          }
          const tmpResult7 = tmp(tmp2[55]);
          const displayNameStylesFont = tmpResult7.useDisplayNameStylesFont(tmp20);
          let closure_9 = tmp22;
          const tmp23 = tmp4ResultResult.filter((type) => type.type !== controlsHidden(controlsSpecs[23]).VoicePanelCardUserStateIconType.STREAM_ICON).length >= 1;
          VoicePanelModes = tmp23;
          const tmpResult8 = tmp(tmp2[12]);
          class Y {
            constructor() {
              const tmp = closure_10 && null == focused.get();
              const value = connected.get();
              let tmp5 = !value;
              if (value) {
                tmp5 = mode.get() === constants.PIP;
              }
              if (!tmp5) {
                const value2 = !tmp && controlsHidden.get();
                tmp5 = value2;
              }
              return tmp5;
            }
          }
          const obj5 = { hasHiddenVisibleIcon: tmp23, focused, connected, mode, VoicePanelModes, controlsHidden };
          Y.__closure = obj5;
          Y.__workletHash = 12564689742086;
          Y.__initData = __initData15;
          const derivedValue = tmpResult8.useDerivedValue(Y);
          const fn2 = function z() {
            let str;
            const obj = { height, pointerEvents: str };
            str = "auto";
            if (derivedValue.get()) {
              str = "none";
            }
            return obj;
          };
          const obj6 = { FLOATING_BAR_HEIGHT: v28, isPillHidden: derivedValue };
          fn2.__closure = obj6;
          fn2.__workletHash = 14536744021222;
          fn2.__initData = __initData16;
          const tmpResult9 = tmp(tmp2[12]);
          const animatedStyle = tmpResult9.useAnimatedStyle(fn2);
          const tmp32 = closure_33(derivedValue, closure_30);
          const fn3 = function j() {
            let num2;
            const value = connected.get();
            let tmp2 = !value;
            if (value) {
              tmp2 = !isScreenReaderEnabled && controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && closure_9;
              const tmp4 = !isScreenReaderEnabled && controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && closure_9;
            }
            let num = "auto";
            if (tmp2) {
              num = "auto";
              if (closure_9) {
                num = 0;
              }
            }
            const obj = { width: num, marginRight: num2 };
            num2 = 0;
            if (tmp2) {
              num2 = -4;
            }
            return obj;
          };
          const obj7 = { connected, isScreenReaderEnabled, controlsSpecs, VoicePanelControlsModes: derivedValue, hasIcon: tmp4ResultResult.length >= 1, GAP: 4 };
          fn3.__closure = obj7;
          fn3.__workletHash = 5569452163568;
          fn3.__initData = __initData17;
          const tmpResult10 = tmp(tmp2[12]);
          const animatedStyle1 = tmpResult10.useAnimatedStyle(fn3);
          if (cResult[12] !== tmp7.labelPositionContainer) {
            const items = [tmp7.labelPositionContainer];
            cResult[12] = tmp7.labelPositionContainer;
            cResult[13] = items;
            tmp36 = items;
          } else {
            tmp36 = cResult[13];
          }
          if (cResult[14] === tmp32) {
            let tmp37;
            if (cResult[15] === tmp7.labelHideWrapper) {
              tmp37 = cResult[16];
            }
            if (cResult[17] === animatedStyle) {
              let tmp40;
              if (cResult[18] === tmp7.labelOuterContainer) {
                tmp40 = cResult[19];
              }
              if (cResult[20] === tmp4ResultResult) {
                if (cResult[23] === animatedStyle1) {
                  let tmp46;
                  if (cResult[26] !== displayNameStylesFont) {
                    let tmp47 = null != displayNameStylesFont;
                    if (tmp47) {
                      tmp47 = { fontFamily: displayNameStylesFont };
                      const obj8 = { fontFamily: displayNameStylesFont };
                    }
                    cResult[26] = displayNameStylesFont;
                    cResult[27] = tmp47;
                    tmp46 = tmp47;
                  } else {
                    tmp46 = cResult[27];
                  }
                  if (cResult[28] === tmp7.floatingText) {
                    let tmp48;
                    if (cResult[29] === tmp46) {
                      tmp48 = cResult[30];
                    }
                    if (cResult[31] === tmp4ResultResult) {
                      if (cResult[34] === label) {
                        if (cResult[35] === tmp48) {
                          let tmp52;
                          if (cResult[36] === tmp49) {
                            tmp52 = cResult[37];
                          }
                          if (cResult[38] === guildId) {
                            if (cResult[39] === participant.type) {
                              let tmp55;
                              if (cResult[40] === participant.user) {
                                tmp55 = cResult[41];
                              }
                              if (cResult[42] === isUserSecureFramesVerified) {
                                let tmp60;
                                if (cResult[43] === tmp7.secureFramesIcon) {
                                  tmp60 = cResult[44];
                                }
                                if (cResult[45] === layout) {
                                  if (cResult[46] === tmp45) {
                                    if (cResult[47] === tmp52) {
                                      if (cResult[48] === tmp55) {
                                        let tmp63;
                                        if (cResult[49] === tmp60) {
                                          tmp63 = cResult[50];
                                        }
                                        if (cResult[51] === layout) {
                                          if (cResult[52] === tmp63) {
                                            if (cResult[53] === tmp39) {
                                              if (cResult[54] === tmp40) {
                                                let tmp66;
                                                if (cResult[55] === tmp41) {
                                                  tmp66 = cResult[56];
                                                }
                                                if (cResult[57] === tmp66) {
                                                  let tmp70;
                                                  if (cResult[58] === tmp37) {
                                                    tmp70 = cResult[59];
                                                  }
                                                  if (cResult[60] === tmp36) {
                                                    if (cResult[61] === layout) {
                                                      let tmp73;
                                                      if (cResult[62] === tmp70) {
                                                        tmp73 = cResult[63];
                                                      }
                                                      return tmp73;
                                                    }
                                                  }
                                                  const obj9 = { style: tmp36, layout, pointerEvents: "box-none", children: tmp70 };
                                                  const tmp75 = closure_16(tmp4(tmp2[31]), obj9);
                                                  cResult[60] = tmp36;
                                                  class Y {
                                                    constructor() {
                                                      const tmp = closure_10 && null == focused.get();
                                                      const value = connected.get();
                                                      let tmp5 = !value;
                                                      if (value) {
                                                        tmp5 = mode.get() === constants.PIP;
                                                      }
                                                      if (!tmp5) {
                                                        const value2 = !tmp && controlsHidden.get();
                                                        tmp5 = value2;
                                                      }
                                                      return tmp5;
                                                    }
                                                  }
                                                  cResult[62] = tmp70;
                                                  cResult[63] = tmp75;
                                                  tmp73 = tmp75;
                                                }
                                                const obj10 = { style: tmp37, pointerEvents: "box-none", children: tmp66 };
                                                const tmp72 = closure_16(tmp4(tmp2[31]), obj10);
                                                cResult[57] = tmp66;
                                                cResult[58] = tmp37;
                                                class Y {
                                                  constructor() {
                                                    const tmp = closure_10 && null == focused.get();
                                                    const value = connected.get();
                                                    let tmp5 = !value;
                                                    if (value) {
                                                      tmp5 = mode.get() === constants.PIP;
                                                    }
                                                    if (!tmp5) {
                                                      const value2 = !tmp && controlsHidden.get();
                                                      tmp5 = value2;
                                                    }
                                                    return tmp5;
                                                  }
                                                }
                                                cResult[59] = tmp72;
                                                tmp70 = tmp72;
                                              }
                                            }
                                          }
                                        }
                                        const items1 = [tmp41, tmp63];
                                        const obj11 = { onPress: tmp39, style: tmp40, layout, children: null };
                                        class Y {
                                          constructor() {
                                            const tmp = closure_10 && null == focused.get();
                                            const value = connected.get();
                                            let tmp5 = !value;
                                            if (value) {
                                              tmp5 = mode.get() === constants.PIP;
                                            }
                                            if (!tmp5) {
                                              const value2 = !tmp && controlsHidden.get();
                                              tmp5 = value2;
                                            }
                                            return tmp5;
                                          }
                                        }
                                        const tmp69 = closure_17(closure_20, obj11);
                                        cResult[51] = layout;
                                        cResult[52] = tmp63;
                                        cResult[53] = tmp39;
                                        cResult[54] = tmp40;
                                        cResult[55] = tmp41;
                                        cResult[56] = tmp69;
                                        tmp66 = tmp69;
                                      }
                                    }
                                  }
                                }
                                const items2 = [tmp52, tmp55, tmp60];
                                class Y {
                                  constructor() {
                                    const tmp = closure_10 && null == focused.get();
                                    const value = connected.get();
                                    let tmp5 = !value;
                                    if (value) {
                                      tmp5 = mode.get() === constants.PIP;
                                    }
                                    if (!tmp5) {
                                      const value2 = !tmp && controlsHidden.get();
                                      tmp5 = value2;
                                    }
                                    return tmp5;
                                  }
                                }
                                cResult[45] = layout;
                                cResult[46] = tmp45;
                                cResult[47] = tmp52;
                                cResult[48] = tmp55;
                                cResult[49] = tmp60;
                                cResult[50] = tmp65;
                                tmp63 = tmp65;
                              }
                              let tmp61 = isUserSecureFramesVerified;
                              if (tmp61) {
                                const obj13 = { style: tmp7.secureFramesIcon, size: "xs", accessibilityLabel: intl.string(tmp(tmp2[24]).t.mR9cf3) };
                                const ShieldLockIcon = tmp(tmp2[57]).ShieldLockIcon;
                                intl = tmp(tmp2[24]).intl;
                                tmp61 = closure_16(ShieldLockIcon, obj13);
                              }
                              cResult[42] = isUserSecureFramesVerified;
                              cResult[43] = tmp7.secureFramesIcon;
                              cResult[44] = tmp61;
                              tmp60 = tmp61;
                            }
                          }
                          let tmp57 = participant.type === constants.USER;
                          if (tmp57) {
                            const obj14 = { userId: participant.user.id, guildId, textColor: "text-overlay-light" };
                            tmp57 = closure_16(closure_54, obj14);
                          }
                          cResult[38] = guildId;
                          cResult[39] = participant.type;
                          cResult[40] = participant.user;
                          class Y {
                            constructor() {
                              const tmp = closure_10 && null == focused.get();
                              const value = connected.get();
                              let tmp5 = !value;
                              if (value) {
                                tmp5 = mode.get() === constants.PIP;
                              }
                              if (!tmp5) {
                                const value2 = !tmp && controlsHidden.get();
                                tmp5 = value2;
                              }
                              return tmp5;
                            }
                          }
                          cResult[41] = tmp57;
                          tmp55 = tmp57;
                        }
                      }
                      const obj15 = { variant: "heading-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: tmp48, ellipsizeMode: "tail", accessibilityLabel: tmp49, children: label };
                      const tmp54 = closure_16(tmp(tmp2[56]).Text, obj15);
                      cResult[34] = label;
                      class Y {
                        constructor() {
                          const tmp = closure_10 && null == focused.get();
                          const value = connected.get();
                          let tmp5 = !value;
                          if (value) {
                            tmp5 = mode.get() === constants.PIP;
                          }
                          if (!tmp5) {
                            const value2 = !tmp && controlsHidden.get();
                            tmp5 = value2;
                          }
                          return tmp5;
                        }
                      }
                      cResult[36] = tmp49;
                      cResult[37] = tmp54;
                      tmp52 = tmp54;
                    }
                    cResult[31] = tmp4ResultResult;
                    cResult[32] = label;
                    cResult[33] = getAccessibilityLabel(tmp4ResultResult, label);
                    getAccessibilityLabel(tmp4ResultResult, label);
                    class Y {
                      constructor() {
                        const tmp = closure_10 && null == focused.get();
                        const value = connected.get();
                        let tmp5 = !value;
                        if (value) {
                          tmp5 = mode.get() === constants.PIP;
                        }
                        if (!tmp5) {
                          const value2 = !tmp && controlsHidden.get();
                          tmp5 = value2;
                        }
                        return tmp5;
                      }
                    }
                  }
                  const items3 = [tmp7.floatingText, tmp46];
                  cResult[28] = tmp7.floatingText;
                  cResult[29] = tmp46;
                  class Y {
                    constructor() {
                      const tmp = closure_10 && null == focused.get();
                      const value = connected.get();
                      let tmp5 = !value;
                      if (value) {
                        tmp5 = mode.get() === constants.PIP;
                      }
                      if (!tmp5) {
                        const value2 = !tmp && controlsHidden.get();
                        tmp5 = value2;
                      }
                      return tmp5;
                    }
                  }
                  tmp48 = items3;
                }
                const items4 = [tmp7.floatingContainer, animatedStyle1];
                cResult[23] = animatedStyle1;
                cResult[24] = tmp7.floatingContainer;
                cResult[25] = items4;
                class Y {
                  constructor() {
                    const tmp = closure_10 && null == focused.get();
                    const value = connected.get();
                    let tmp5 = !value;
                    if (value) {
                      tmp5 = mode.get() === constants.PIP;
                    }
                    if (!tmp5) {
                      const value2 = !tmp && controlsHidden.get();
                      tmp5 = value2;
                    }
                    return tmp5;
                  }
                }
              }
              let tmp42 = tmp4ResultResult.length > 0;
              if (tmp42) {
                const obj16 = {
                  style: tmp7.initialIcons,
                  children: tmp4ResultResult.map((icon) => {
                                  const obj = { icon };
                                  return closure_1_16(closure_1_27, obj, icon.type);
                                })
                };
                const tmp4Result2 = tmp4(tmp2[28]);
                tmp42 = closure_16(tmp4Result2, obj16);
              }
              cResult[20] = tmp4ResultResult;
              cResult[21] = tmp7.initialIcons;
              cResult[22] = tmp42;
              class Y {
                constructor() {
                  const tmp = closure_10 && null == focused.get();
                  const value = connected.get();
                  let tmp5 = !value;
                  if (value) {
                    tmp5 = mode.get() === constants.PIP;
                  }
                  if (!tmp5) {
                    const value2 = !tmp && controlsHidden.get();
                    tmp5 = value2;
                  }
                  return tmp5;
                }
              }
            }
            const items5 = [tmp7.labelOuterContainer, animatedStyle];
            cResult[17] = animatedStyle;
            class Y {
              constructor() {
                const tmp = closure_10 && null == focused.get();
                const value = connected.get();
                let tmp5 = !value;
                if (value) {
                  tmp5 = mode.get() === constants.PIP;
                }
                if (!tmp5) {
                  const value2 = !tmp && controlsHidden.get();
                  tmp5 = value2;
                }
                return tmp5;
              }
            }
            cResult[19] = items5;
            tmp40 = items5;
          }
          const items6 = [tmp7.labelHideWrapper, tmp32];
          cResult[14] = tmp32;
          cResult[15] = tmp7.labelHideWrapper;
          cResult[16] = items6;
          tmp37 = items6;
        }
        const obj17 = { userId: id, guildId };
        cResult[7] = guildId;
        cResult[8] = id;
        cResult[9] = obj17;
        tmp18 = obj17;
      }
      let num = 4;
      const obj18 = { userId: id, channelId };
      cResult[4] = channelId;
      let num2 = 5;
      cResult[5] = id;
      cResult[6] = obj18;
    }
  }
  const fn = function o() {
    if (null != id) {
      const obj = { userId: tmp, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }
  };
  cResult[0] = analyticsLocations;
  cResult[1] = channelId;
  cResult[2] = id;
  cResult[3] = fn;
}) : (function FloatingParticipantLabel(controlsHidden) {
  let channelId;
  let guildId;
  let intl;
  let items2;
  let items3;
  let items4;
  let items5;
  let items7;
  let label;
  let layout;
  let obj8;
  let obj9;
  let participant;
  let tmp24;
  let tmpResult6;
  controlsHidden = controlsHidden.controlsHidden;
  ({ label, layout, participant } = controlsHidden);
  channelId = undefined;
  let controlsSpecs;
  let focused;
  let analyticsLocations;
  let closure_9;
  VoicePanelModes = undefined;
  let derivedValue;
  let obj = focused;
  let tmp = channelId;
  let tmp2 = controlsSpecs;
  const context = focused.useContext(channelId(controlsSpecs[18]));
  ({ guildId, channelId } = context);
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  const connected = context.connected;
  const mode = context.mode;
  let tmp4 = controlsHidden;
  const obj2 = controlsHidden(controlsSpecs[50]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const tmp6 = closure_23();
  let id;
  const obj3 = controlsHidden(controlsSpecs[32]);
  if (obj3.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  analyticsLocations = tmp(tmp2[51])().analyticsLocations;
  const items = [id, channelId, analyticsLocations];
  const callback = obj.useCallback(() => {
    if (null != id) {
      const obj = { userId: tmp, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }
  }, items);
  const tmp4Result = tmp4(tmp2[53]);
  let isUserSecureFramesVerified = tmp4Result.useIsUserSecureFramesVerified({ userId: id, channelId });
  const type = participant.type;
  let id1;
  const tmpResult = tmp(tmp2[23]);
  const tmp4Result6 = tmp4(tmp2[32]);
  if (tmp4Result6.isStableParticipantWithUser(participant)) {
    id1 = participant.user.id;
  }
  const tmpResultResult = tmpResult(type, id1, guildId, channelId);
  const tmp12 = tmp(tmp2[54])({ userId: id, guildId });
  const tmp4Result7 = tmp4(tmp2[55]);
  const displayNameStylesFont = tmp4Result7.useDisplayNameStylesFont({ displayNameStyles: tmp12 });
  closure_9 = tmp14;
  const tmp15 = tmpResultResult.filter((type) => type.type !== controlsHidden(controlsSpecs[23]).VoicePanelCardUserStateIconType.STREAM_ICON).length >= 1;
  VoicePanelModes = tmp15;
  const fn = function c() {
    const tmp = closure_10 && null == focused.get();
    const value = connected.get();
    let tmp5 = !value;
    if (value) {
      tmp5 = mode.get() === constants.PIP;
    }
    if (!tmp5) {
      const value2 = !tmp && controlsHidden.get();
      tmp5 = value2;
    }
    return tmp5;
  };
  const obj4 = { hasHiddenVisibleIcon: tmp15, focused, connected, mode, VoicePanelModes, controlsHidden };
  fn.__closure = obj4;
  fn.__workletHash = 12554335904174;
  fn.__initData = __initData18;
  const tmp4Result8 = tmp4(tmp2[12]);
  derivedValue = tmp4Result8.useDerivedValue(fn);
  const fn2 = function u() {
    let str;
    const obj = { height, pointerEvents: str };
    str = "auto";
    if (derivedValue.get()) {
      str = "none";
    }
    return obj;
  };
  const obj5 = { FLOATING_BAR_HEIGHT: v28, isPillHidden: derivedValue };
  fn2.__closure = obj5;
  fn2.__workletHash = 5252557783301;
  fn2.__initData = __initData19;
  const tmp4Result9 = tmp4(tmp2[12]);
  const animatedStyle = tmp4Result9.useAnimatedStyle(fn2);
  const fn3 = function _() {
    let num2;
    const value = connected.get();
    let tmp2 = !value;
    if (value) {
      tmp2 = !isScreenReaderEnabled && controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && closure_9;
      const tmp4 = !isScreenReaderEnabled && controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && closure_9;
    }
    let num = "auto";
    if (tmp2) {
      num = "auto";
      if (closure_9) {
        num = 0;
      }
    }
    const obj = { width: num, marginRight: num2 };
    num2 = 0;
    if (tmp2) {
      num2 = -4;
    }
    return obj;
  };
  const obj6 = { connected, isScreenReaderEnabled, controlsSpecs, VoicePanelControlsModes: derivedValue, hasIcon: tmpResultResult.length >= 1, GAP: 4 };
  fn3.__closure = obj6;
  fn3.__workletHash = 6830777623285;
  fn3.__initData = __initData20;
  const items1 = [tmp6.labelPositionContainer];
  const tmp18 = closure_33(derivedValue, closure_30);
  const tmp4Result10 = tmp4(tmp2[12]);
  const animatedStyle1 = tmp4Result10.useAnimatedStyle(fn3);
  const obj7 = { style: items1, layout, pointerEvents: "box-none", children: closure_16(tmpResult6, obj8) };
  obj8 = { style: items2, pointerEvents: "box-none", children: closure_17(tmp24, obj9) };
  items2 = [tmp6.labelHideWrapper, tmp18];
  let tmp25;
  const tmpResult5 = tmp(tmp2[31]);
  tmp24 = closure_20;
  tmpResult6 = tmp(tmp2[31]);
  if (null != id) {
    tmp25 = callback;
  }
  obj9 = { onPress: tmp25, style: items3, layout, children: items4 };
  items3 = [tmp6.labelOuterContainer, animatedStyle];
  let tmp20Result = tmpResultResult.length > 0;
  if (tmp20Result) {
    const obj10 = {
      style: tmp6.initialIcons,
      children: tmpResultResult.map((icon) => {
          const obj = { icon };
          return closure_1_16(closure_1_27, obj, icon.type);
        })
    };
    const tmpResult7 = tmp(tmp2[28]);
    tmp20Result = tmp20(tmpResult7, obj10);
  }
  items4 = [tmp20Result, ];
  const obj11 = { style: items5, layout, children: items7 };
  items5 = [tmp6.floatingContainer, animatedStyle1];
  const items6 = [tmp6.floatingText, ];
  let tmp29 = null != displayNameStylesFont;
  const tmpResult8 = tmp(tmp2[31]);
  const Text = tmp4(tmp2[56]).Text;
  if (tmp29) {
    tmp29 = { fontFamily: displayNameStylesFont };
    const obj12 = { fontFamily: displayNameStylesFont };
  }
  items6[1] = tmp29;
  items7 = [, , ];
  const obj13 = { variant: "heading-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: items6, ellipsizeMode: "tail", accessibilityLabel: getAccessibilityLabel(tmpResultResult, label), children: label };
  items7[0] = closure_16(Text, obj13);
  let tmp20Result2 = participant.type === constants.USER;
  if (tmp20Result2) {
    const obj14 = { userId: participant.user.id, guildId, textColor: "text-overlay-light" };
    tmp20Result2 = tmp20(closure_54, obj14);
  }
  items7[1] = tmp20Result2;
  if (isUserSecureFramesVerified) {
    const obj15 = { style: tmp6.secureFramesIcon, size: "xs", accessibilityLabel: intl.string(tmp4(tmp2[24]).t.mR9cf3) };
    const ShieldLockIcon = tmp4(tmp2[57]).ShieldLockIcon;
    intl = tmp4(tmp2[24]).intl;
    isUserSecureFramesVerified = tmp20(ShieldLockIcon, obj15);
  }
  items7[2] = isUserSecureFramesVerified;
  items4[1] = closure_17(tmpResult8, obj11);
  return closure_16(tmpResult5, obj7);
}));
const __initData21 = { code: "function VoicePanelCardFloatingControlsTsx25(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}" };
const __initData22 = { code: "function VoicePanelCardFloatingControlsTsx26(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}" };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function FloatingControls(arg0) {
  let connected;
  let controlsSpecs;
  let focused;
  let guildId;
  let isRinging;
  let label;
  let layout;
  let participant;
  let tmp11;
  let tmp6;
  let tmp7;
  let tmpResult8;
  let tmp = participant;
  let obj = participant(controlsSpecs[17]);
  const cResult = obj.c(33);
  ({ label, participant } = arg0);
  ({ isRinging, layout } = arg0);
  const context = focused.useContext(guildId(controlsSpecs[18]));
  const tmp4 = guildId;
  guildId = context.guildId;
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  const mode = context.mode;
  const channelId = context.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore];
    const fn = function s() {
      return connected.isConnected();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let tmpResult = tmp(tmp2[39]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  const tmpResult5 = tmp(controlsSpecs[32]);
  const tmp10 = tmpResult5.isStableParticipantWithUser(participant) && participant.isSelf;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmbeddedActivitiesStore, ApplicationStreamingStore];
    cResult[2] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === guildId) {
    let tmp14;
    if (cResult[4] === participant) {
      tmp14 = cResult[5];
    }
    const tmpResult6 = tmp(controlsSpecs[39]);
    const stateFromStores1 = tmpResult6.useStateFromStores(tmp11, tmp14);
    const tmp16 = tmp4(controlsSpecs[58])(guildId, channelId, participant.id);
    const tmpResult7 = tmp(controlsSpecs[12]);
    class F {
      constructor() {
        const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN || null != focused.get() || mode.get() === constants.PIP;
        return tmp;
      }
    }
    const obj2 = { controlsSpecs, VoicePanelControlsModes, focused, mode, VoicePanelModes };
    F.__closure = obj2;
    F.__workletHash = 3813471061271;
    F.__initData = __initData21;
    const derivedValue = tmpResult7.useDerivedValue(F);
    if (cResult[6] === derivedValue) {
      if (cResult[7] === label) {
        if (cResult[8] === layout) {
          let tmp21;
          if (cResult[9] === participant) {
            tmp21 = cResult[10];
          }
          if (cResult[11] === derivedValue) {
            let tmp26;
            if (cResult[12] === isRinging) {
              tmp26 = cResult[13];
            }
            if (cResult[14] === derivedValue) {
              if (cResult[15] === stateFromStores) {
                if (cResult[16] === tmp10) {
                  if (cResult[17] === stateFromStores1) {
                    if (cResult[18] === layout) {
                      let tmp30;
                      if (cResult[19] === participant) {
                        tmp30 = cResult[20];
                      }
                      if (cResult[21] === derivedValue) {
                        if (cResult[22] === stateFromStores) {
                          if (cResult[23] === label) {
                            if (cResult[24] === layout) {
                              if (cResult[25] === participant) {
                                let tmp34;
                                if (cResult[26] === tmp16) {
                                  tmp34 = cResult[27];
                                }
                                if (cResult[28] === tmp21) {
                                  if (cResult[29] === tmp26) {
                                    if (cResult[30] === tmp30) {
                                      let tmp38;
                                      if (cResult[31] === tmp34) {
                                        tmp38 = cResult[32];
                                      }
                                      return tmp38;
                                    }
                                  }
                                }
                                const obj3 = { children: tmp41 };
                                class F {
                                  constructor() {
                                    const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN || null != focused.get() || mode.get() === constants.PIP;
                                    return tmp;
                                  }
                                }
                                tmp41[0] = tmp26;
                                tmp41[1] = tmp30;
                                tmp41[2] = tmp34;
                                tmp41[3] = tmp21;
                                const tmp42 = closure_17(closure_18, obj3);
                                cResult[28] = tmp21;
                                cResult[29] = tmp26;
                                cResult[30] = tmp30;
                                cResult[31] = tmp34;
                                cResult[32] = tmp42;
                                tmp38 = tmp42;
                              }
                            }
                          }
                        }
                      }
                      let tmp35 = stateFromStores && tmp16;
                      if (tmp35) {
                        const obj4 = { controlsHidden: derivedValue, participantId: participant.id, targetName: null, isActivityParticipant: tmpResult8.isStableActivityParticipant(participant), layout };
                        class F {
                          constructor() {
                            const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN || null != focused.get() || mode.get() === constants.PIP;
                            return tmp;
                          }
                        }
                        tmpResult8 = tmp(controlsSpecs[32]);
                        tmp35 = closure_16(closure_38, obj4);
                      }
                      class F {
                        constructor() {
                          const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN || null != focused.get() || mode.get() === constants.PIP;
                          return tmp;
                        }
                      }
                      cResult[22] = stateFromStores;
                      cResult[23] = label;
                      cResult[24] = layout;
                      cResult[25] = participant;
                      cResult[26] = tmp16;
                      cResult[27] = tmp35;
                      tmp34 = tmp35;
                    }
                  }
                }
              }
            }
            let tmp31 = stateFromStores && stateFromStores1;
            if (tmp31) {
              const obj5 = { controlsHidden: derivedValue, participant, isSelf: null, layout };
              class F {
                constructor() {
                  const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN || null != focused.get() || mode.get() === constants.PIP;
                  return tmp;
                }
              }
              tmp31 = closure_16(closure_35, obj5);
            }
            class F {
              constructor() {
                const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN || null != focused.get() || mode.get() === constants.PIP;
                return tmp;
              }
            }
            cResult[15] = stateFromStores;
            cResult[16] = tmp10;
            cResult[17] = stateFromStores1;
            cResult[18] = layout;
            cResult[19] = participant;
            cResult[20] = tmp31;
            tmp30 = tmp31;
          }
          let tmp27 = isRinging;
          if (tmp27) {
            const obj6 = { controlsHidden: derivedValue };
            tmp27 = closure_16(closure_53, obj6);
          }
          class F {
            constructor() {
              const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN || null != focused.get() || mode.get() === constants.PIP;
              return tmp;
            }
          }
          cResult[12] = isRinging;
          cResult[13] = tmp27;
          tmp26 = tmp27;
        }
      }
    }
    let tmp23 = null != label;
    if (tmp23) {
      const obj7 = { controlsHidden: derivedValue, label, layout: null, participant };
      class F {
        constructor() {
          const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN || null != focused.get() || mode.get() === constants.PIP;
          return tmp;
        }
      }
      tmp23 = closure_16(closure_61, obj7);
    }
    cResult[6] = derivedValue;
    cResult[7] = label;
    cResult[8] = layout;
    cResult[9] = participant;
    cResult[10] = tmp23;
    tmp21 = tmp23;
  }
  class N {
    constructor() {
      const obj = useStableParticipant;
      if (obj.isStableActivityParticipant(participant)) {
        const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
        let applicationId1;
        const applicationId = tmp3.applicationId;
        if (currentEmbeddedActivity != null) {
          applicationId1 = currentEmbeddedActivity.applicationId;
        }
        return applicationId === applicationId1;
      } else {
        const tmpResult = useStableParticipant;
        const result = tmpResult.isStableStreamParticipant(tmp3) && null != ApplicationStreamingStore.getActiveStreamForUser(tmp3.user.id, guildId);
        return result;
      }
    }
  }
  cResult[3] = guildId;
  cResult[4] = participant;
  cResult[5] = N;
  tmp14 = N;
}) : (function FloatingControls(arg0) {
  let connected;
  let isRinging;
  let label;
  let layout;
  let participant;
  let tmp4Result4;
  ({ label, participant } = arg0);
  ({ isRinging, layout } = arg0);
  let guildId;
  let controlsSpecs;
  let focused;
  let tmp = guildId;
  const context = focused.useContext(guildId(controlsSpecs[18]));
  guildId = context.guildId;
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  const mode = context.mode;
  const channelId = context.channelId;
  let obj = participant(controlsSpecs[39]);
  const items = [RTCConnectionStore];
  let stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
  const obj2 = participant(controlsSpecs[32]);
  const items1 = [EmbeddedActivitiesStore, ApplicationStreamingStore];
  const tmp6 = obj2.isStableParticipantWithUser(participant) && participant.isSelf;
  const tmp4Result = participant(controlsSpecs[39]);
  const stateFromStores1 = tmp4Result.useStateFromStores(items1, () => {
    const obj = useStableParticipant;
    if (obj.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let applicationId1;
      const applicationId = tmp3.applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId1 = currentEmbeddedActivity.applicationId;
      }
      return applicationId === applicationId1;
    } else {
      const tmpResult = useStableParticipant;
      const result = tmpResult.isStableStreamParticipant(tmp3) && null != ApplicationStreamingStore.getActiveStreamForUser(tmp3.user.id, guildId);
      return result;
    }
  });
  const fn = function p() {
    const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN || null != focused.get() || mode.get() === constants.PIP;
    return tmp;
  };
  const obj3 = { controlsSpecs, VoicePanelControlsModes, focused, mode, VoicePanelModes };
  fn.__closure = obj3;
  fn.__workletHash = 4146938327924;
  fn.__initData = __initData22;
  const tmp8 = tmp(controlsSpecs[58])(guildId, channelId, participant.id);
  const tmp4Result3 = participant(controlsSpecs[12]);
  const derivedValue = tmp4Result3.useDerivedValue(fn);
  let tmp10 = null != label;
  if (tmp10) {
    const obj4 = { controlsHidden: derivedValue, label, layout, participant };
    tmp10 = closure_16(closure_61, obj4);
  }
  const tmp13 = closure_17;
  const tmp14 = closure_18;
  if (isRinging) {
    const obj5 = { controlsHidden: derivedValue };
    isRinging = closure_16(closure_53, obj5);
  }
  const children = [isRinging, , , ];
  let tmp17 = stateFromStores && stateFromStores1;
  if (tmp17) {
    const obj6 = { controlsHidden: derivedValue, participant, isSelf: tmp6, layout };
    tmp17 = closure_16(closure_35, obj6);
  }
  children[1] = tmp17;
  if (stateFromStores) {
    stateFromStores = tmp8;
  }
  if (stateFromStores) {
    const obj7 = { controlsHidden: derivedValue, participantId: participant.id, targetName: label, isActivityParticipant: tmp4Result4.isStableActivityParticipant(participant), layout };
    tmp4Result4 = participant(controlsSpecs[32]);
    stateFromStores = closure_16(closure_38, obj7);
  }
  children[2] = stateFromStores;
  children[3] = tmp10;
  return tmp13(tmp14, { children });
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx");

export default memoResult;
