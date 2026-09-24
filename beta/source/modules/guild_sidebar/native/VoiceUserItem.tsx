// Module ID: 16469
// Function ID: 16470
// Name: VoiceUserItem
// Dependencies: [19, 17, 4782, 1078, 21, 1181, 11327, 4790, 580, 12250, 558, 568, 504, 10008, 10009, 10011, 1245, 4529, 4791, 1401, 16470, 9955, 9957, 9951, 9953, 11769, 10077, 5278, 10057, 2]
// Exports: getVoiceUserHeight

// Module 16469 (VoiceUserItem)
import nativeDefault from "native" /* 580 */;
import native from "native" /* 1181 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1401 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4529 */;
import timing from "timing" /* 4791 */;
import _modDef5278 from "module_5278" /* 5278 */;
import HeadphonesDenyIcon from "HeadphonesDenyIcon" /* 9951 */;
import HeadphonesSlashIcon from "HeadphonesSlashIcon" /* 9953 */;
import MicrophoneDenyIcon from "MicrophoneDenyIcon" /* 9955 */;
import MicrophoneSlashIcon from "MicrophoneSlashIcon" /* 9957 */;
import GameActivityIconDefault from "GameActivityIcon" /* 10057 */;
import getConsoleIcon from "getConsoleIcon" /* 10077 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11327 */;
import VideoIcon from "VideoIcon" /* 11769 */;
import VoiceUserNameItemDefault from "VoiceUserNameItem" /* 16470 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AnalyticEvents = fn(1078).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = "text-sm/medium";
let c10 = "redesign-channel-name-muted-text";
const XSMALL_20 = fn(1181).AvatarSizes.XSMALL_20;
let c12 = 0.1;
let c13 = 0.4;
let c14 = 100;
let c15 = 250;
let c16 = 500;
const createStyles = fn(4790);
let obj = { voiceState: { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 5 }, disabled: { opacity: 0.5 }, voiceStateCollapsed: null, voiceStateIcon: null, legacyVoiceStateIcon: null, gameIcon: null };
let size = { marginTop: 4, marginRight: 8, width: 32, height: 32, borderRadius: nativeDefault.radii.lg, borderWidth: 4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", overflow: "hidden" };
obj.voiceStateCollapsed = size;
const ChannelListLayout = fn(12250);
let merged = Object.assign(ChannelListLayout.makeSizeStyle(14));
obj.voiceStateIcon = { marginLeft: 6 };
obj.legacyVoiceStateIcon = { tintColor: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
obj.gameIcon = { marginLeft: 6 };
let closure_17 = createStyles.createStyles(obj);
let closure_18 = { code: "function VoiceUserItemTsx1(){const{ringing,shouldAnimate,PULSE_ENDING_OPACITY,withRepeat,withSequence,withDelay,INNER_PULSE_DELAY,withTiming,PULSE_DURATION,Easing,PULSE_STARTING_OPACITY,FADE_DURATION}=this.__closure;if(!ringing){return{opacity:1};}else{if(!shouldAnimate){return{opacity:PULSE_ENDING_OPACITY};}}return{opacity:withRepeat(withSequence(withDelay(INNER_PULSE_DELAY,withTiming(PULSE_ENDING_OPACITY,{duration:PULSE_DURATION,easing:Easing.bezier(0.4,0,1,1)})),withDelay(PULSE_DURATION,withTiming(PULSE_STARTING_OPACITY,{duration:FADE_DURATION}))),-1)};}" };
const __initData = { code: "function VoiceUserItemTsx2(){const{ringing,shouldAnimate,PULSE_ENDING_OPACITY,withRepeat,withSequence,withDelay,INNER_PULSE_DELAY,withTiming,PULSE_DURATION,Easing,PULSE_STARTING_OPACITY,FADE_DURATION}=this.__closure;if(!ringing){return{opacity:1.0};}else if(!shouldAnimate){return{opacity:PULSE_ENDING_OPACITY};}return{opacity:withRepeat(withSequence(withDelay(INNER_PULSE_DELAY,withTiming(PULSE_ENDING_OPACITY,{duration:PULSE_DURATION,easing:Easing.bezier(0.4,0.0,1,1)})),withDelay(PULSE_DURATION,withTiming(PULSE_STARTING_OPACITY,{duration:FADE_DURATION}))),-1)};}" };
const ReactCompilerGating = fn(558);
let obj3 = { marginLeft: 6 };
let obj4 = { tintColor: nativeDefault.colors.REDESIGN_CHANNEL_NAME_MUTED_TEXT, marginLeft: 6 };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserItem.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((member) => {
  _require = member;
  const cResult = require("c").c(83);
  member = member.member;
  user = member.user;
  const guildId = member.guildId;
  const channelId = member.channelId;
  const stream = member.stream;
  const serverMute = member.serverMute;
  const serverDeaf = member.serverDeaf;
  const mute = member.mute;
  const deaf = member.deaf;
  const localMute = member.localMute;
  const video = member.video;
  const disabled = member.disabled;
  const platform = member.platform;
  const isInEmbeddedActivity = member.isInEmbeddedActivity;
  const voicePlatform = member.voicePlatform;
  const ringing = member.ringing;
  let tmp4 = closure_17();
  closure_17 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stream];
    class N {
      constructor() {
        return !stream.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = N;
    tmp5 = items;
    tmp6 = N;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  const tmp9 = member;
  const tmpResult = require("initialize");
  const first = member(tmp2[14])(user.id, guildId, member(user[13])("channel_list"))[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  const gameRecord = tmp9(tmp2[15])(application_id).gameRecord;
  if (cResult[2] === channelId) {
    if (cResult[3] === application_id) {
      if (cResult[4] === guildId) {
        let tmp13 = cResult[5];
      }
      const onShown = tmp13;
      class K {
        constructor() {
          if (ringing) {
            tmp = closure_18;
            obj = { opacity: null };
            if (closure_18) {
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj2 = closure_0(closure_2[17]);
              obj3 = closure_0(closure_2[17]);
              obj4 = closure_0(closure_2[17]);
              tmp6 = c14;
              obj5 = closure_0(closure_2[18]);
              tmp7 = c13;
              obj1 = { duration: null, easing: null };
              tmp8 = c15;
              obj1.duration = c15;
              Easing = closure_0(closure_2[17]).Easing;
              num = 1;
              num2 = 0;
              num3 = 0.4;
              tmp9 = Easing;
              num4 = 1;
              num5 = 1;
              obj1.easing = Easing.bezier(0.4, 0, 1, 1);
              withDelayResult = obj4.withDelay(c14, obj5.withTiming(c13, obj1));
              obj7 = closure_0(closure_2[17]);
              obj8 = closure_0(closure_2[18]);
              tmp11 = c12;
              obj10 = { duration: null };
              tmp12 = c16;
              obj10.duration = c16;
              num6 = -1;
              obj.opacity = obj2.withRepeat(obj3.withSequence(withDelayResult, obj7.withDelay(c15, obj8.withTiming(c12, obj10))), -1);
              tmp3 = obj;
            } else {
              tmp2 = c13;
              obj.opacity = c13;
              tmp3 = obj;
            }
            tmp13 = tmp3;
          } else {
            return { opacity: 1 };
          }
          return;
        }
      }
      let obj2 = { ringing, shouldAnimate: stateFromStores, PULSE_ENDING_OPACITY: platform, withRepeat: tmp(tmp2[17]).withRepeat, withSequence: tmp(tmp2[17]).withSequence, withDelay: tmp(tmp2[17]).withDelay, INNER_PULSE_DELAY: isInEmbeddedActivity, withTiming: tmp(tmp2[18]).withTiming, PULSE_DURATION: voicePlatform, Easing: tmp(tmp2[17]).Easing, PULSE_STARTING_OPACITY: disabled, FADE_DURATION: ringing };
      K.__closure = obj2;
      K.__workletHash = 3002863095527;
      K.__initData = stateFromStores;
      const animatedStyle = tmp(tmp2[17]).useAnimatedStyle(K);
      if (cResult[6] === guildId) {
        if (cResult[7] === member) {
          if (cResult[8] === user) {
            let tmp21 = cResult[9];
          }
          const source = tmp21;
          if (cResult[10] === tmp21) {
            if (cResult[13] !== tmp21) {
              function te() {
                return React5(native.Avatar, { source, size: XSMALL_20 });
              }
              cResult[13] = tmp21;
              class K {
                constructor() {
                  if (ringing) {
                    tmp = closure_18;
                    obj = { opacity: null };
                    if (closure_18) {
                      tmp4 = closure_0;
                      tmp5 = closure_2;
                      obj2 = closure_0(closure_2[17]);
                      obj3 = closure_0(closure_2[17]);
                      obj4 = closure_0(closure_2[17]);
                      tmp6 = c14;
                      obj5 = closure_0(closure_2[18]);
                      tmp7 = c13;
                      obj1 = { duration: null, easing: null };
                      tmp8 = c15;
                      obj1.duration = c15;
                      Easing = closure_0(closure_2[17]).Easing;
                      num = 1;
                      num2 = 0;
                      num3 = 0.4;
                      tmp9 = Easing;
                      num4 = 1;
                      num5 = 1;
                      obj1.easing = Easing.bezier(0.4, 0, 1, 1);
                      withDelayResult = obj4.withDelay(c14, obj5.withTiming(c13, obj1));
                      obj7 = closure_0(closure_2[17]);
                      obj8 = closure_0(closure_2[18]);
                      tmp11 = c12;
                      obj10 = { duration: null };
                      tmp12 = c16;
                      obj10.duration = c16;
                      num6 = -1;
                      obj.opacity = obj2.withRepeat(obj3.withSequence(withDelayResult, obj7.withDelay(c15, obj8.withTiming(c12, obj10))), -1);
                      tmp3 = obj;
                    } else {
                      tmp2 = c13;
                      obj.opacity = c13;
                      tmp3 = obj;
                    }
                    tmp13 = tmp3;
                  } else {
                    return { opacity: 1 };
                  }
                  return;
                }
              }
              cResult[14] = te;
            }
            if (cResult[15] !== member) {
              function oe() {
                const merged = Object.assign(closure_0);
                return React5(VoiceUserNameItemDefault, { variant, color });
              }
              cResult[15] = member;
              class K {
                constructor() {
                  if (ringing) {
                    tmp = closure_18;
                    obj = { opacity: null };
                    if (closure_18) {
                      tmp4 = closure_0;
                      tmp5 = closure_2;
                      obj2 = closure_0(closure_2[17]);
                      obj3 = closure_0(closure_2[17]);
                      obj4 = closure_0(closure_2[17]);
                      tmp6 = c14;
                      obj5 = closure_0(closure_2[18]);
                      tmp7 = c13;
                      obj1 = { duration: null, easing: null };
                      tmp8 = c15;
                      obj1.duration = c15;
                      Easing = closure_0(closure_2[17]).Easing;
                      num = 1;
                      num2 = 0;
                      num3 = 0.4;
                      tmp9 = Easing;
                      num4 = 1;
                      num5 = 1;
                      obj1.easing = Easing.bezier(0.4, 0, 1, 1);
                      withDelayResult = obj4.withDelay(c14, obj5.withTiming(c13, obj1));
                      obj7 = closure_0(closure_2[17]);
                      obj8 = closure_0(closure_2[18]);
                      tmp11 = c12;
                      obj10 = { duration: null };
                      tmp12 = c16;
                      obj10.duration = c16;
                      num6 = -1;
                      obj.opacity = obj2.withRepeat(obj3.withSequence(withDelayResult, obj7.withDelay(c15, obj8.withTiming(c12, obj10))), -1);
                      tmp3 = obj;
                    } else {
                      tmp2 = c13;
                      obj.opacity = c13;
                      tmp3 = obj;
                    }
                    tmp13 = tmp3;
                  } else {
                    return { opacity: 1 };
                  }
                  return;
                }
              }
              cResult[16] = oe;
            }
            class K {
              constructor() {
                if (ringing) {
                  tmp = closure_18;
                  obj = { opacity: null };
                  if (closure_18) {
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    obj2 = closure_0(closure_2[17]);
                    obj3 = closure_0(closure_2[17]);
                    obj4 = closure_0(closure_2[17]);
                    tmp6 = c14;
                    obj5 = closure_0(closure_2[18]);
                    tmp7 = c13;
                    obj1 = { duration: null, easing: null };
                    tmp8 = c15;
                    obj1.duration = c15;
                    Easing = closure_0(closure_2[17]).Easing;
                    num = 1;
                    num2 = 0;
                    num3 = 0.4;
                    tmp9 = Easing;
                    num4 = 1;
                    num5 = 1;
                    obj1.easing = Easing.bezier(0.4, 0, 1, 1);
                    withDelayResult = obj4.withDelay(c14, obj5.withTiming(c13, obj1));
                    obj7 = closure_0(closure_2[17]);
                    obj8 = closure_0(closure_2[18]);
                    tmp11 = c12;
                    obj10 = { duration: null };
                    tmp12 = c16;
                    obj10.duration = c16;
                    num6 = -1;
                    obj.opacity = obj2.withRepeat(obj3.withSequence(withDelayResult, obj7.withDelay(c15, obj8.withTiming(c12, obj10))), -1);
                    tmp3 = obj;
                  } else {
                    tmp2 = c13;
                    obj.opacity = c13;
                    tmp3 = obj;
                  }
                  tmp13 = tmp3;
                } else {
                  return { opacity: 1 };
                }
                return;
              }
            }
            function ae() {
              if (disabled) {
                return null;
              } else if (serverMute) {
                const obj2 = { style: closure_17.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
                let tmp4 = React5(MicrophoneDenyIcon.MicrophoneDenyIcon, obj2);
              } else if (localMute) {
                const obj3 = { style: closure_17.voiceStateIcon, size: "custom", color };
                tmp4 = React5(MicrophoneDenyIcon.MicrophoneDenyIcon, obj3);
              } else if (mute) {
                const obj = { style: closure_17.voiceStateIcon, size: "custom", color };
                tmp4 = React5(MicrophoneSlashIcon.MicrophoneSlashIcon, obj);
              }
            }
            cResult[17] = disabled;
            cResult[18] = localMute;
            cResult[19] = mute;
            cResult[20] = serverMute;
            cResult[21] = tmp4.voiceStateIcon;
            cResult[22] = ae;
          }
          class K {
            constructor() {
              if (ringing) {
                tmp = closure_18;
                obj = { opacity: null };
                if (closure_18) {
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  obj2 = closure_0(closure_2[17]);
                  obj3 = closure_0(closure_2[17]);
                  obj4 = closure_0(closure_2[17]);
                  tmp6 = c14;
                  obj5 = closure_0(closure_2[18]);
                  tmp7 = c13;
                  obj1 = { duration: null, easing: null };
                  tmp8 = c15;
                  obj1.duration = c15;
                  Easing = closure_0(closure_2[17]).Easing;
                  num = 1;
                  num2 = 0;
                  num3 = 0.4;
                  tmp9 = Easing;
                  num4 = 1;
                  num5 = 1;
                  obj1.easing = Easing.bezier(0.4, 0, 1, 1);
                  withDelayResult = obj4.withDelay(c14, obj5.withTiming(c13, obj1));
                  obj7 = closure_0(closure_2[17]);
                  obj8 = closure_0(closure_2[18]);
                  tmp11 = c12;
                  obj10 = { duration: null };
                  tmp12 = c16;
                  obj10.duration = c16;
                  num6 = -1;
                  obj.opacity = obj2.withRepeat(obj3.withSequence(withDelayResult, obj7.withDelay(c15, obj8.withTiming(c12, obj10))), -1);
                  tmp3 = obj;
                } else {
                  tmp2 = c13;
                  obj.opacity = c13;
                  tmp3 = obj;
                }
                tmp13 = tmp3;
              } else {
                return { opacity: 1 };
              }
              return;
            }
          }
          cResult[10] = tmp21;
          cResult[11] = tmp4.voiceStateCollapsed;
          cResult[12] = tmp23;
        }
      }
      class Z {
        constructor() {
          tmp = member;
          if (null != member) {
            if (null != tmp.avatar) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[19]);
              tmp5 = user;
              guildMemberAvatarSource = obj.getGuildMemberAvatarSource(tmp, user);
            }
            return guildMemberAvatarSource;
          }
          guildMemberAvatarSource = user.getAvatarSource(guildId);
          return;
        }
      }
      cResult[6] = guildId;
      cResult[7] = member;
      cResult[8] = user;
      cResult[9] = Z;
      tmp21 = Z;
      const tmpResult2 = tmp(tmp2[17]);
    }
  }
  const fn = function q() {
    AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_SHOWN, { guild_id: guildId, channel_id: channelId, application_id });
  };
  cResult[2] = channelId;
  cResult[3] = application_id;
  cResult[4] = guildId;
  cResult[5] = fn;
  tmp13 = fn;
}) : ((guildId) => {
  ({ member: require, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  ({ disabled, platform, isInEmbeddedActivity, ringing } = guildId);
  ({ collapsed, stream, serverMute, serverDeaf, mute, deaf, localMute, video, voicePlatform } = guildId);
  const tmp = closure_17();
  const items = [stateFromStores];
  stateFromStores = require("initialize").useStateFromStores(items, () => !stateFromStores.useReducedMotion);
  let obj = require("initialize");
  const first = user(guildId[14])(user.id, guildId, user(guildId[13])("channel_list"))[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  function getSource() {
    if (null != _require) {
      if (null != tmp.avatar) {
        let guildMemberAvatarSource = AvatarUtilsDefault.getGuildMemberAvatarSource(tmp, user);
      }
      return guildMemberAvatarSource;
    }
    guildMemberAvatarSource = user.getAvatarSource(guildId);
  }
  const gameRecord = tmp5(tmp3[15])(application_id).gameRecord;
  const items1 = [guildId, channelId, application_id];
  const callback = channelId.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_SHOWN, { guild_id: guildId, channel_id: channelId, application_id });
  }, items1);
  require("ReanimatedRexport");
  class D {
    constructor() {
      if (ringing) {
        tmp = closure_5;
        obj = { opacity: null };
        if (closure_5) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj2 = closure_0(closure_2[17]);
          obj3 = closure_0(closure_2[17]);
          obj4 = closure_0(closure_2[17]);
          tmp6 = c14;
          obj5 = closure_0(closure_2[18]);
          tmp7 = c13;
          obj1 = { duration: null, easing: null };
          tmp8 = c15;
          obj1.duration = c15;
          Easing = closure_0(closure_2[17]).Easing;
          num = 1;
          num2 = 0;
          num3 = 0.4;
          tmp9 = Easing;
          num4 = 1;
          num5 = 1;
          obj1.easing = Easing.bezier(0.4, 0, 1, 1);
          withDelayResult = obj4.withDelay(c14, obj5.withTiming(c13, obj1));
          obj7 = closure_0(closure_2[17]);
          obj8 = closure_0(closure_2[18]);
          tmp11 = c12;
          obj10 = { duration: null };
          tmp12 = c16;
          obj10.duration = c16;
          num6 = -1;
          obj.opacity = obj2.withRepeat(obj3.withSequence(withDelayResult, obj7.withDelay(c15, obj8.withTiming(c12, obj10))), -1);
          tmp3 = obj;
        } else {
          tmp2 = c13;
          obj.opacity = c13;
          tmp3 = obj;
        }
        tmp13 = tmp3;
      } else {
        return { opacity: 1 };
      }
      return;
    }
  }
  const tmp6 = user(guildId[13])("channel_list");
  D.__closure = { ringing, shouldAnimate: stateFromStores, PULSE_ENDING_OPACITY: v04, withRepeat: require("ReanimatedRexport").withRepeat, withSequence: require("ReanimatedRexport").withSequence, withDelay: require("ReanimatedRexport").withDelay, INNER_PULSE_DELAY, withTiming: require("timing").withTiming, PULSE_DURATION: v250, Easing: require("ReanimatedRexport").Easing, PULSE_STARTING_OPACITY, FADE_DURATION: v500 };
  D.__workletHash = 2137558376418;
  D.__initData = __initData;
  if (collapsed) {
    let obj3 = { style: tmp.voiceStateCollapsed, children: null };
    let obj4 = { source: getSource, size: XSMALL_20 };
    obj3.children = closure_7(tmp2(tmp3[5]).Avatar, obj4);
    let tmp12Result = closure_7(ringing, obj3);
  } else {
    const items2 = [tmp.voiceState, , ];
    let disabled2 = disabled;
    if (disabled) {
      disabled2 = tmp.disabled;
    }
    let obj5 = { style: null, children: null };
    items2[1] = disabled2;
    items2[2] = tmp11;
    obj5.style = items2;
    let obj6 = { source: getSource, size: XSMALL_20 };
    const items3 = [closure_7(tmp2(tmp3[5]).Avatar, obj6), , , , , , , , ];
    let obj7 = { variant, color };
    const merged = Object.assign(guildId);
    items3[1] = closure_7(tmp5(tmp3[20]), obj7);
    if (disabled) {
      items3[2] = null;
      if (disabled) {
        items3[3] = null;
        let tmp13Result = null;
        if (video) {
          tmp13Result = null;
          if (!disabled) {
            let obj8 = { size: "custom", color: tmp17, style: tmp.voiceStateIcon };
            tmp13Result = tmp13(tmp2(tmp3[25]).VideoIcon, obj8);
          }
        }
        items3[4] = tmp13Result;
        let tmp13Result7 = null;
        if (isInEmbeddedActivity) {
          let obj9 = { source: tmp5(tmp3[27]), size: tmp2(tmp3[5]).Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
          tmp13Result7 = tmp13(tmp2(tmp3[5]).Icon, obj9);
        }
        items3[5] = tmp13Result7;
        if (platform == null) {
          platform = "";
        }
        let tmp5Result1Result = tmp5(tmp3[26])(platform);
        if (tmp5Result1Result == null) {
          tmp5Result1Result = tmp2(tmp3[26]).getConsoleIconForVoicePlatform(voicePlatform);
          const tmp2Result2 = tmp2(tmp3[26]);
        }
        let tmp13Result8 = null;
        if (null != tmp5Result1Result) {
          const obj10 = { source: tmp5Result1Result, size: tmp2(tmp3[5]).Icon.Sizes.REFRESH_SMALL_16, style: tmp.legacyVoiceStateIcon };
          tmp13Result8 = tmp13(tmp2(tmp3[5]).Icon, obj10);
        }
        items3[6] = tmp13Result8;
        let tmp13Result9 = null;
        if (stream) {
          const obj11 = { style: tmp.legacyVoiceStateIcon };
          tmp13Result9 = tmp13(tmp2(tmp3[5]).LiveTag, obj11);
        }
        items3[7] = tmp13Result9;
        let tmp13Result10 = null;
        if (!disabled) {
          tmp13Result10 = null;
          if (!isInEmbeddedActivity) {
            tmp13Result10 = null;
            if (null != gameRecord) {
              const obj12 = { game: gameRecord, size: 16, fallback: "none", style: tmp.gameIcon, onShown: callback };
              tmp13Result10 = tmp13(tmp5(tmp3[28]), obj12);
            }
          }
        }
        items3[8] = tmp13Result10;
        obj5.children = items3;
        tmp12Result = tmp12(tmp5(tmp3[17]).View, obj5);
        const tmp5Result2 = tmp5(tmp3[26]);
      } else if (serverDeaf) {
        const obj13 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
        let tmp13Result11 = tmp13(tmp2(tmp3[23]).HeadphonesDenyIcon, obj13);
      } else {
        tmp13Result11 = null;
        if (deaf) {
          const obj14 = { style: tmp.voiceStateIcon, size: "custom", color: tmp17 };
          tmp13Result11 = tmp13(tmp2(tmp3[24]).HeadphonesSlashIcon, obj14);
        }
      }
    } else if (serverMute) {
      const obj15 = { style: tmp.voiceStateIcon, color: "text-feedback-critical", size: "custom" };
      let tmp13Result12 = tmp13(tmp2(tmp3[21]).MicrophoneDenyIcon, obj15);
    } else if (localMute) {
      const obj16 = { style: tmp.voiceStateIcon, size: "custom", color: tmp17 };
      tmp13Result12 = tmp13(tmp2(tmp3[21]).MicrophoneDenyIcon, obj16);
    } else {
      tmp13Result12 = null;
      if (mute) {
        const obj17 = { style: tmp.voiceStateIcon, size: "custom", color: tmp17 };
        tmp13Result12 = tmp13(tmp2(tmp3[22]).MicrophoneSlashIcon, obj17);
      }
    }
    tmp12 = closure_8;
    const tmp5Result = tmp5(tmp3[20]);
  }
  return tmp12Result;
}));
export const getVoiceUserHeight = function getVoiceUserHeight(fontScale) {
  return Math.max(useScaledTextLineHeight.scaleTextLineHeight(c9, fontScale), native.AVATAR_SIZE_MAP[XSMALL_20]) + 10;
};
