// Module ID: 14849
// Function ID: 111900
// Name: getVoiceUserHeight
// Dependencies: []
// Exports: getVoiceUserHeight

// Module 14849 (getVoiceUserHeight)
import merged from "module_14";

const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const XSMALL_20 = arg1(dependencyMap[4]).AvatarSizes.XSMALL_20;
let obj1 = arg1(dependencyMap[6]);
let obj = { voiceState: { accessible: "<string:1010910605>", count: "<string:1912603051>", "Bool(false)": "l", "Bool(false)": "Boolean" }, disabled: { opacity: 0.5 } };
obj = { scales: 10, then: 17, memo: 2, body: 13, style: 4, add: 4, end: 2, memo: 0, bottom: true, borderRadius: importDefault(dependencyMap[7]).radii.lg, borderColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.voiceStateCollapsed = obj;
obj1 = { marginLeft: 6 };
const tmp2 = arg1(dependencyMap[3]);
obj.voiceStateIcon = obj1;
const obj6 = arg1(dependencyMap[8]);
obj.legacyVoiceStateIcon = { tintColor: importDefault(dependencyMap[7]).colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
let closure_8 = obj1.createStyles(obj);
let closure_9 = { code: "function VoiceUserItemTsx1(){const{ringing,shouldAnimate,PULSE_ENDING_OPACITY,withRepeat,withSequence,withDelay,INNER_PULSE_DELAY,withTiming,PULSE_DURATION,Easing,PULSE_STARTING_OPACITY,FADE_DURATION}=this.__closure;if(!ringing){return{opacity:1.0};}else if(!shouldAnimate){return{opacity:PULSE_ENDING_OPACITY};}return{opacity:withRepeat(withSequence(withDelay(INNER_PULSE_DELAY,withTiming(PULSE_ENDING_OPACITY,{duration:PULSE_DURATION,easing:Easing.bezier(0.4,0.0,1,1)})),withDelay(PULSE_DURATION,withTiming(PULSE_STARTING_OPACITY,{duration:FADE_DURATION}))),-1)};}" };
const obj2 = { tintColor: importDefault(dependencyMap[7]).colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
const memoResult = importAllResult.memo(function VoiceUserItem(arg0) {
  let collapsed;
  let deaf;
  let disabled;
  let isInEmbeddedActivity;
  let localMute;
  let mute;
  let platform;
  let ringing;
  let serverDeaf;
  let serverMute;
  let stream;
  let video;
  let voicePlatform;
  function getSource() {
    if (null != lib) {
      if (null != lib.avatar) {
        let guildMemberAvatarSource = avatarSource(closure_2[12]).getGuildMemberAvatarSource(lib, avatarSource);
        const obj = avatarSource(closure_2[12]);
      }
      return guildMemberAvatarSource;
    }
    guildMemberAvatarSource = avatarSource.getAvatarSource(closure_2);
  }
  ({ member: closure_0, user: closure_1, guildId: closure_2, disabled, platform, ringing } = arg0);
  const View = ringing;
  ({ collapsed, stream, serverMute, serverDeaf, mute, deaf, localMute, video, isInEmbeddedActivity, voicePlatform } = arg0);
  const tmp = callback2();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => !stateFromStores.useReducedMotion);
  closure_4 = stateFromStores;
  arg1(dependencyMap[10]);
  const fn = function c() {
    let obj = {};
    if (ringing) {
      if (stateFromStores) {
        const obj2 = lib(closure_2[10]);
        const obj3 = lib(closure_2[10]);
        const obj4 = lib(closure_2[10]);
        obj = { duration: 250 };
        const Easing = lib(closure_2[10]).Easing;
        obj.easing = Easing.bezier(0.4, 0, 1, 1);
        const obj5 = lib(closure_2[11]);
        const withDelayResult = obj4.withDelay(100, lib(closure_2[11]).withTiming(0.4, obj));
        const obj7 = lib(closure_2[10]);
        obj = { duration: 500 };
        obj.opacity = obj2.withRepeat(obj3.withSequence(withDelayResult, obj7.withDelay(250, lib(closure_2[11]).withTiming(0.1, obj))), -1);
        let tmp3 = obj;
        const obj8 = lib(closure_2[11]);
      } else {
        obj.opacity = 0.4;
        tmp3 = obj;
      }
    } else {
      obj.opacity = 1;
      return obj;
    }
  };
  obj = { ringing, shouldAnimate: stateFromStores, PULSE_ENDING_OPACITY: 0.4, withRepeat: arg1(dependencyMap[10]).withRepeat, withSequence: arg1(dependencyMap[10]).withSequence, withDelay: arg1(dependencyMap[10]).withDelay, INNER_PULSE_DELAY: 100, withTiming: arg1(dependencyMap[11]).withTiming, PULSE_DURATION: 250, Easing: arg1(dependencyMap[10]).Easing, PULSE_STARTING_OPACITY: 0.1, FADE_DURATION: 500 };
  fn.__closure = obj;
  fn.__workletHash = 9430639809025;
  fn.__initData = closure_9;
  if (collapsed) {
    obj = { style: tmp.voiceStateCollapsed };
    const obj1 = { source: getSource, size: XSMALL_20 };
    obj.children = callback(arg1(dependencyMap[4]).Avatar, obj1);
    let tmp5Result = callback(View, obj);
  } else {
    const obj2 = {};
    const items1 = [tmp.voiceState, , ];
    let disabled2 = disabled;
    if (disabled) {
      disabled2 = tmp.disabled;
    }
    items1[1] = disabled2;
    items1[2] = tmp4;
    obj2.style = items1;
    const obj3 = { source: getSource, size: XSMALL_20 };
    const items2 = [callback(arg1(dependencyMap[4]).Avatar, obj3), , , , , , , ];
    const obj4 = {};
    const merged = Object.assign(arg0);
    items2[1] = callback(importDefault(dependencyMap[13]), obj4);
    if (disabled) {
      items2[2] = null;
      if (disabled) {
        items2[3] = null;
        let tmp39 = null;
        if (video) {
          tmp39 = null;
          if (!disabled) {
            const obj5 = { flex: true, flexGrow: true, style: tmp.voiceStateIcon };
            tmp39 = callback(arg1(dependencyMap[18]).VideoIcon, obj5);
          }
        }
        items2[4] = tmp39;
        let tmp43 = null;
        if (isInEmbeddedActivity) {
          const obj6 = { source: importDefault(dependencyMap[19]), size: arg1(dependencyMap[4]).Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
          tmp43 = callback(arg1(dependencyMap[4]).Icon, obj6);
        }
        items2[5] = tmp43;
        let str = "";
        if (null != platform) {
          str = platform;
        }
        let consoleIconForVoicePlatform = importDefault(dependencyMap[20])(str);
        if (null == consoleIconForVoicePlatform) {
          let obj12 = arg1(dependencyMap[20]);
          consoleIconForVoicePlatform = obj12.getConsoleIconForVoicePlatform(voicePlatform);
        }
        let tmp54 = null;
        if (null != consoleIconForVoicePlatform) {
          const obj7 = { source: consoleIconForVoicePlatform, size: arg1(dependencyMap[4]).Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
          tmp54 = callback(arg1(dependencyMap[4]).Icon, obj7);
        }
        items2[6] = tmp54;
        let tmp58 = null;
        if (stream) {
          const obj8 = { style: tmp.legacyVoiceStateIcon };
          tmp58 = callback(arg1(dependencyMap[4]).LiveTag, obj8);
        }
        items2[7] = tmp58;
        obj2.children = items2;
        tmp5Result = tmp5(importDefault(dependencyMap[10]).View, obj2);
        const tmp50 = importDefault(dependencyMap[20]);
      } else if (serverDeaf) {
        const obj9 = { style: tmp.voiceStateIcon };
        let tmp31 = callback(arg1(dependencyMap[16]).HeadphonesDenyIcon, obj9);
      } else {
        tmp31 = null;
        if (deaf) {
          const obj10 = { style: tmp.voiceStateIcon };
          tmp31 = callback(arg1(dependencyMap[17]).HeadphonesSlashIcon, obj10);
        }
      }
    } else if (serverMute) {
      const obj11 = { style: tmp.voiceStateIcon };
      let tmp19 = callback(arg1(dependencyMap[14]).MicrophoneDenyIcon, obj11);
    } else if (localMute) {
      obj12 = { style: tmp.voiceStateIcon };
      tmp19 = callback(arg1(dependencyMap[14]).MicrophoneDenyIcon, obj12);
    } else {
      tmp19 = null;
      if (mute) {
        const obj13 = { style: tmp.voiceStateIcon };
        tmp19 = callback(arg1(dependencyMap[15]).MicrophoneSlashIcon, obj13);
      }
    }
    const tmp13 = importDefault(dependencyMap[13]);
    const tmp5 = closure_6;
  }
  return tmp5Result;
});
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/guild_sidebar/native/VoiceUserItem.tsx");

export default memoResult;
export const getVoiceUserHeight = function getVoiceUserHeight(fontScale) {
  const obj = arg1(dependencyMap[5]);
  return Math.max(arg1(dependencyMap[5]).scaleTextLineHeight("text-sm/medium", fontScale), arg1(dependencyMap[4]).AVATAR_SIZE_MAP[closure_7]) + 10;
};
