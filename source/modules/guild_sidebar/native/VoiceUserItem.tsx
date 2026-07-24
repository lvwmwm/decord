// Module ID: 15023
// Function ID: 114466
// Name: getVoiceUserHeight
// Dependencies: [31, 27, 4122, 33, 1273, 9921, 4130, 689, 10290, 566, 3991, 4131, 1392, 15024, 8911, 8913, 8907, 8909, 7496, 7473, 9093, 2]
// Exports: getVoiceUserHeight

// Module 15023 (getVoiceUserHeight)
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import getLayoutStyles from "getLayoutStyles";
import merged from "MicrophoneDenyIcon";
import importAllResult from "result";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
const XSMALL_20 = require("Button").AvatarSizes.XSMALL_20;
let obj = { voiceState: { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 5 }, disabled: { opacity: 0.5 } };
obj = { marginTop: 4, marginRight: 8, width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: 4, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, alignItems: "center", overflow: "hidden" };
obj.voiceStateCollapsed = obj;
_createForOfIteratorHelperLoose = { marginLeft: 6 };
obj.voiceStateIcon = _createForOfIteratorHelperLoose;
obj.legacyVoiceStateIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_9 = { code: "function VoiceUserItemTsx1(){const{ringing,shouldAnimate,PULSE_ENDING_OPACITY,withRepeat,withSequence,withDelay,INNER_PULSE_DELAY,withTiming,PULSE_DURATION,Easing,PULSE_STARTING_OPACITY,FADE_DURATION}=this.__closure;if(!ringing){return{opacity:1.0};}else if(!shouldAnimate){return{opacity:PULSE_ENDING_OPACITY};}return{opacity:withRepeat(withSequence(withDelay(INNER_PULSE_DELAY,withTiming(PULSE_ENDING_OPACITY,{duration:PULSE_DURATION,easing:Easing.bezier(0.4,0.0,1,1)})),withDelay(PULSE_DURATION,withTiming(PULSE_STARTING_OPACITY,{duration:FADE_DURATION}))),-1)};}" };
let obj2 = { tintColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
const memoResult = importAllResult.memo(function VoiceUserItem(arg0) {
  let collapsed;
  let deaf;
  let dependencyMap;
  let disabled;
  let importDefault;
  let isInEmbeddedActivity;
  let localMute;
  let mute;
  let platform;
  let require;
  let ringing;
  let serverDeaf;
  let serverMute;
  let stream;
  let video;
  let voicePlatform;
  function getSource() {
    if (null != user) {
      if (null != user.avatar) {
        let guildMemberAvatarSource = outer1_1(outer1_2[12]).getGuildMemberAvatarSource(user, avatarSource);
        const obj = outer1_1(outer1_2[12]);
      }
      return guildMemberAvatarSource;
    }
    guildMemberAvatarSource = avatarSource.getAvatarSource(closure_2);
  }
  ({ member: require, user: importDefault, guildId: dependencyMap, disabled, platform, ringing } = arg0);
  ({ collapsed, stream, serverMute, serverDeaf, mute, deaf, localMute, video, isInEmbeddedActivity, voicePlatform } = arg0);
  const tmp = callback2();
  let obj = require(566) /* initialize */;
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => !stateFromStores.useReducedMotion);
  require(3991);
  const fn = function c() {
    let obj = {};
    if (ringing) {
      if (stateFromStores) {
        const obj2 = outer1_0(outer1_2[10]);
        const obj3 = outer1_0(outer1_2[10]);
        const obj4 = outer1_0(outer1_2[10]);
        obj = { duration: 250 };
        const Easing = outer1_0(outer1_2[10]).Easing;
        obj.easing = Easing.bezier(0.4, 0, 1, 1);
        const obj5 = outer1_0(outer1_2[11]);
        const withDelayResult = obj4.withDelay(100, outer1_0(outer1_2[11]).withTiming(0.4, obj));
        const obj7 = outer1_0(outer1_2[10]);
        obj = { duration: 500 };
        obj.opacity = obj2.withRepeat(obj3.withSequence(withDelayResult, obj7.withDelay(250, outer1_0(outer1_2[11]).withTiming(0.1, obj))), -1);
        let tmp3 = obj;
        const obj8 = outer1_0(outer1_2[11]);
      } else {
        obj.opacity = 0.4;
        tmp3 = obj;
      }
    } else {
      obj.opacity = 1;
      return obj;
    }
  };
  obj = { ringing, shouldAnimate: stateFromStores, PULSE_ENDING_OPACITY: 0.4, withRepeat: require(3991).withRepeat, withSequence: require(3991).withSequence, withDelay: require(3991).withDelay, INNER_PULSE_DELAY: 100, withTiming: require(4131) /* withTiming */.withTiming, PULSE_DURATION: 250, Easing: require(3991).Easing, PULSE_STARTING_OPACITY: 0.1, FADE_DURATION: 500 };
  fn.__closure = obj;
  fn.__workletHash = 9430639809025;
  fn.__initData = closure_9;
  if (collapsed) {
    obj = { style: tmp.voiceStateCollapsed };
    const obj1 = { source: getSource, size: XSMALL_20 };
    obj.children = callback(require(1273) /* Button */.Avatar, obj1);
    let tmp5Result = callback(ringing, obj);
  } else {
    let obj2 = {};
    const items1 = [tmp.voiceState, , ];
    let disabled2 = disabled;
    if (disabled) {
      disabled2 = tmp.disabled;
    }
    items1[1] = disabled2;
    items1[2] = tmp4;
    obj2.style = items1;
    let obj3 = { source: getSource, size: XSMALL_20 };
    const items2 = [callback(require(1273) /* Button */.Avatar, obj3), , , , , , , ];
    let obj4 = { variant: "text-sm/medium", color: "redesign-channel-name-muted-text" };
    const merged = Object.assign(arg0);
    items2[1] = callback(importDefault(15024), obj4);
    if (disabled) {
      items2[2] = null;
      if (disabled) {
        items2[3] = null;
        let tmp39 = null;
        if (video) {
          tmp39 = null;
          if (!disabled) {
            let obj5 = { size: "custom", color: "redesign-channel-name-muted-text", style: tmp.voiceStateIcon };
            tmp39 = callback(require(7496) /* VideoIcon */.VideoIcon, obj5);
          }
        }
        items2[4] = tmp39;
        let tmp43 = null;
        if (isInEmbeddedActivity) {
          const obj6 = { source: importDefault(7473), size: require(1273) /* Button */.Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
          tmp43 = callback(require(1273) /* Button */.Icon, obj6);
        }
        items2[5] = tmp43;
        let str = "";
        if (null != platform) {
          str = platform;
        }
        let consoleIconForVoicePlatform = importDefault(9093)(str);
        if (null == consoleIconForVoicePlatform) {
          let obj12 = require(9093) /* PlatformTypes */;
          consoleIconForVoicePlatform = obj12.getConsoleIconForVoicePlatform(voicePlatform);
        }
        let tmp54 = null;
        if (null != consoleIconForVoicePlatform) {
          let obj7 = { source: consoleIconForVoicePlatform, size: require(1273) /* Button */.Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
          tmp54 = callback(require(1273) /* Button */.Icon, obj7);
        }
        items2[6] = tmp54;
        let tmp58 = null;
        if (stream) {
          let obj8 = { style: tmp.legacyVoiceStateIcon };
          tmp58 = callback(require(1273) /* Button */.LiveTag, obj8);
        }
        items2[7] = tmp58;
        obj2.children = items2;
        tmp5Result = tmp5(importDefault(3991).View, obj2);
        const tmp50 = importDefault(9093);
      } else if (serverDeaf) {
        const obj9 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
        let tmp31 = callback(require(8907) /* HeadphonesDenyIcon */.HeadphonesDenyIcon, obj9);
      } else {
        tmp31 = null;
        if (deaf) {
          const obj10 = { style: tmp.voiceStateIcon, size: "custom", color: "redesign-channel-name-muted-text" };
          tmp31 = callback(require(8909) /* HeadphonesSlashIcon */.HeadphonesSlashIcon, obj10);
        }
      }
    } else if (serverMute) {
      const obj11 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
      let tmp19 = callback(require(8911) /* MicrophoneDenyIcon */.MicrophoneDenyIcon, obj11);
    } else if (localMute) {
      obj12 = { style: tmp.voiceStateIcon, size: "custom", color: "redesign-channel-name-muted-text" };
      tmp19 = callback(require(8911) /* MicrophoneDenyIcon */.MicrophoneDenyIcon, obj12);
    } else {
      tmp19 = null;
      if (mute) {
        const obj13 = { style: tmp.voiceStateIcon, size: "custom", color: "redesign-channel-name-muted-text" };
        tmp19 = callback(require(8913) /* MicrophoneSlashIcon */.MicrophoneSlashIcon, obj13);
      }
    }
    const tmp13 = importDefault(15024);
    tmp5 = closure_6;
  }
  return tmp5Result;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_sidebar/native/VoiceUserItem.tsx");

export default memoResult;
export const getVoiceUserHeight = function getVoiceUserHeight(fontScale) {
  const obj = require(9921) /* scaleLineHeight */;
  return Math.max(require(9921) /* scaleLineHeight */.scaleTextLineHeight("text-sm/medium", fontScale), require(1273) /* Button */.AVATAR_SIZE_MAP[XSMALL_20]) + 10;
};
