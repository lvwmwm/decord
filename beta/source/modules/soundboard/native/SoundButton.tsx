// Module ID: 16892
// Function ID: 16893
// Name: SoundButton
// Dependencies: [19, 17, 16885, 21, 4566, 4836, 576, 1364, 5435, 5280, 6551, 11415, 16893, 16894, 6583, 6603, 16896, 16882, 16898, 4832, 5409, 2]

// Module 16892 (SoundButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Pressables from "Pressables" /* 5435 */;
import EmojiDefault from "Emoji" /* 6551 */;
import getSoundboardEmojiUrlDefault from "getSoundboardEmojiUrl" /* 11415 */;
import SoundboardStyleConstants from "SoundboardStyleConstants" /* 16885 */;
import openSoundboardSoundPreviewActionSheetDefault from "openSoundboardSoundPreviewActionSheet" /* 16898 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4566 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size_mod from "module_2" /* 2 */;

let set;

let hasOwnProperty;
let metroRequire;
let num;
let obj2;
let obj3;
let obj4;
let rect;
let size;
let size1;
function SoundButtonEmoji(arg0) {
  let items;
  let obj8;
  let obj9;
  let sharedValues;
  let sound;
  let str;
  let tmp5;
  ({ sound, sharedValues } = arg0);
  const tmp = closure_9();
  const animationConfig = { sharedValues, scaleFactors: { pressed: 0.8, playing: 1.2 } };
  const fn = function o() {
    let items3;
    const pressed = obj3.sharedValues.pressed;
    const playing = obj3.sharedValues.playing;
    const value = pressed.get();
    let num = obj3.playingAnimationDelay;
    const tmp3 = playing.get() > 0;
    const withDelay = sound(soundGridLocation[4]).withDelay;
    sound(soundGridLocation[4]);
    if (num == null) {
      num = 0;
    }
    const withSpring = sound(soundGridLocation[9]).withSpring;
    sound(soundGridLocation[9]);
    const playing2 = tmp.sharedValues.playing;
    const items = [1, obj3.scaleFactors.playing];
    const tmp4Result5 = sound(soundGridLocation[4]);
    const withDelayResult = withDelay(num, withSpring(tmp4Result5.interpolate(playing2.get(), [0, 1], items), SPRING_CONFIG));
    const withSpring2 = sound(soundGridLocation[9]).withSpring;
    sound(soundGridLocation[9]);
    const pressed2 = tmp.sharedValues.pressed;
    const items1 = [1, obj3.scaleFactors.pressed];
    const tmp4Result7 = sound(soundGridLocation[4]);
    const withSpring2Result = withSpring2(tmp4Result7.interpolate(pressed2.get(), [0, 1], items1), SPRING_CONFIG);
    let tmp11 = withSpring2Result;
    if (0 === value) {
      tmp11 = withSpring2Result;
      if (tmp3) {
        tmp11 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp11 }, ];
    const pressed3 = tmp.sharedValues.pressed;
    const interpolate = sound(soundGridLocation[4]).interpolate;
    let num2 = tmp.pressedRotationDegrees;
    sound(soundGridLocation[4]);
    const value2 = pressed3.get();
    if (num2 == null) {
      num2 = 0;
    }
    const obj = { transform: items2 };
    const obj2 = { rotate: "" + interpolate(value2, [0, 1], items3) + "deg" };
    items3 = [0, num2];
    items2[1] = obj2;
    return obj;
  };
  const obj2 = animationConfig(4566);
  fn.__closure = { animationConfig, withDelay: animationConfig(4566).withDelay, withSpring: animationConfig(5280).withSpring, interpolate: animationConfig(4566).interpolate, SPRING_CONFIG };
  fn.__workletHash = 13932429225740;
  fn.__initData = __initData;
  const obj4 = { sharedValues, scaleFactors: { pressed: 0.7200000000000001, playing: 1.08 }, playingAnimationDelay: 100, pressedRotationDegrees: -15 };
  ({ animationConfig, withDelay: animationConfig(4566).withDelay, withSpring: animationConfig(5280).withSpring, interpolate: animationConfig(4566).interpolate, SPRING_CONFIG });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const fn2 = function o() {
    let items3;
    const pressed = obj3.sharedValues.pressed;
    const playing = obj3.sharedValues.playing;
    const value = pressed.get();
    let num = obj3.playingAnimationDelay;
    const tmp3 = playing.get() > 0;
    const withDelay = sound(soundGridLocation[4]).withDelay;
    sound(soundGridLocation[4]);
    if (num == null) {
      num = 0;
    }
    const withSpring = sound(soundGridLocation[9]).withSpring;
    sound(soundGridLocation[9]);
    const playing2 = tmp.sharedValues.playing;
    const items = [1, obj3.scaleFactors.playing];
    const tmp4Result5 = sound(soundGridLocation[4]);
    const withDelayResult = withDelay(num, withSpring(tmp4Result5.interpolate(playing2.get(), [0, 1], items), SPRING_CONFIG));
    const withSpring2 = sound(soundGridLocation[9]).withSpring;
    sound(soundGridLocation[9]);
    const pressed2 = tmp.sharedValues.pressed;
    const items1 = [1, obj3.scaleFactors.pressed];
    const tmp4Result7 = sound(soundGridLocation[4]);
    const withSpring2Result = withSpring2(tmp4Result7.interpolate(pressed2.get(), [0, 1], items1), SPRING_CONFIG);
    let tmp11 = withSpring2Result;
    if (0 === value) {
      tmp11 = withSpring2Result;
      if (tmp3) {
        tmp11 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp11 }, ];
    const pressed3 = tmp.sharedValues.pressed;
    const interpolate = sound(soundGridLocation[4]).interpolate;
    let num2 = tmp.pressedRotationDegrees;
    sound(soundGridLocation[4]);
    const value2 = pressed3.get();
    if (num2 == null) {
      num2 = 0;
    }
    const obj = { transform: items2 };
    const obj2 = { rotate: "" + interpolate(value2, [0, 1], items3) + "deg" };
    items3 = [0, num2];
    items2[1] = obj2;
    return obj;
  };
  const obj5 = animationConfig(4566);
  fn2.__closure = { animationConfig: obj4, withDelay: animationConfig(4566).withDelay, withSpring: animationConfig(5280).withSpring, interpolate: animationConfig(4566).interpolate, SPRING_CONFIG };
  fn2.__workletHash = 13932429225740;
  fn2.__initData = __initData;
  const obj7 = { style: items, children: closure_5(closure_7, obj8) };
  items = [tmp.emojiWrapper, animatedStyle];
  ({ animationConfig: obj4, withDelay: animationConfig(4566).withDelay, withSpring: animationConfig(5280).withSpring, interpolate: animationConfig(4566).interpolate, SPRING_CONFIG });
  obj8 = { style: obj5.useAnimatedStyle(fn2), children: closure_5(tmp5, obj9) };
  obj9 = { fastImageStyle: tmp.emoji, textEmojiStyle: tmp.emoji, src: getSoundboardEmojiUrlDefault(sound, 24), name: str };
  str = sound.emojiName;
  tmp5 = EmojiDefault;
  if (str == null) {
    str = "";
  }
  return closure_5(closure_7, obj7);
}
const View = react_native.View;
const SOUND_BUTTON_HEIGHT = SoundboardStyleConstants.SOUND_BUTTON_HEIGHT;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_7 = ReanimatedRexport.createAnimatedComponent(View);
const SPRING_CONFIG = { damping: 10, stiffness: 300, mass: 1 };
let createStyles = createStyles_mod;
let obj = { button: obj2, buttonPressed: obj3, buttonDisabled: { opacity: 0.5 }, buttonPlaying: obj4, playingBackground: rect, emoji: { height: 24, width: 24, fontSize: num, lineHeight: 28 }, emojiWrapper: size, text: { marginHorizontal: 8 }, textPlaying: { marginHorizontal: 6 }, lock: size1 };
obj2 = { marginTop: 4, height: SOUND_BUTTON_HEIGHT, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj3 = { backgroundColor: nativeDefault.colors.CARD_PRIMARY_PRESSED_BG };
obj4 = { borderStyle: "solid", borderWidth: 2, borderColor: nativeDefault.colors.STATUS_SPEAKING };
rect = { position: "absolute", top: 0, bottom: 0, start: 0, end: 0, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG, borderRadius: nativeDefault.radii.lg - 2 };
num = undefined;
if (PlatformUtils.isIOS()) {
  num = 24;
}
size = { display: "flex", alignItems: "center", justifyContent: "center", height: 40, width: 40, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, backgroundSize: 32, borderRadius: nativeDefault.radii.round, marginBottom: 8 };
size1 = { position: "absolute", top: nativeDefault.space.PX_12, end: nativeDefault.space.PX_12, width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
let closure_9 = createStyles(obj);
ReanimatedRexport = ReanimatedRexport_mod;
let closure_10 = ReanimatedRexport.createAnimatedComponent(Pressables.PressableOpacity);
const __initData = { code: "function SoundButtonTsx1(){const{animationConfig,withDelay,withSpring,interpolate,SPRING_CONFIG}=this.__closure;var _animationConfig$play,_animationConfig$pres,_animationConfig;const isNotPressed=animationConfig.sharedValues.pressed.get()===0;const isPlaying=animationConfig.sharedValues.playing.get()>0;const shouldDoPlayingAnimation=isNotPressed&&isPlaying;const playingAnimationScaleValue=withDelay((_animationConfig$play=animationConfig.playingAnimationDelay)!==null&&_animationConfig$play!==void 0?_animationConfig$play:0,withSpring(interpolate(animationConfig.sharedValues.playing.get(),[0,1],[1,animationConfig.scaleFactors.playing]),SPRING_CONFIG));const pressedAnimationScaleValue=withSpring(interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[1,animationConfig.scaleFactors.pressed]),SPRING_CONFIG);const rotationScaleValue=interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[0,(_animationConfig$pres=(_animationConfig=animationConfig)===null||_animationConfig===void 0?void 0:_animationConfig.pressedRotationDegrees)!==null&&_animationConfig$pres!==void 0?_animationConfig$pres:0]);return{transform:[{scale:shouldDoPlayingAnimation?playingAnimationScaleValue:pressedAnimationScaleValue},{rotate:rotationScaleValue+\"deg\"}]};}" };
const memoResult = react.memo(function SoundButtonComponent(sound) {
  let items6;
  sound = sound.sound;
  const channel = sound.channel;
  const soundGridLocation = sound.soundGridLocation;
  let flag = sound.isSectionLocked;
  const style = sound.style;
  if (flag === undefined) {
    flag = false;
  }
  let playSoundboardSound;
  let analyticsLocations;
  let isLocked;
  let onLockedPress;
  let tmp = sound;
  let obj = sound(soundGridLocation[12]);
  let tmp3 = null != sound.emojiId;
  const buttonWidth = obj.useSoundButtonStyleConfig().buttonWidth;
  if (!tmp3) {
    tmp3 = null != sound.emojiName;
  }
  const tmp4 = closure_9();
  const tmp5 = channel(soundGridLocation[13])(sound, channel.id);
  playSoundboardSound = tmp5.playSoundboardSound;
  const isPlayingSound = tmp5.isPlayingSound;
  const tmp6 = channel(tmp2[14]);
  analyticsLocations = tmp6(channel(tmp2[15]).SOUNDBOARD_BUTTON).analyticsLocations;
  const tmpResult = tmp(soundGridLocation[16]);
  const soundboardSoundLock = tmpResult.useSoundboardSoundLock(sound, channel);
  isLocked = soundboardSoundLock.isLocked;
  onLockedPress = soundboardSoundLock.onLockedPress;
  let items = [analyticsLocations, onLockedPress, channel, soundGridLocation, playSoundboardSound, isLocked];
  const lockedAccessibilityHint = soundboardSoundLock.lockedAccessibilityHint;
  const callback = playSoundboardSound.useCallback(() => {
    let initialScrollLocation;
    const tmp = isLocked;
    if (tmp) {
      onLockedPress(() => {
        const obj = sound(soundGridLocation[17]);
        const obj2 = { channel, analyticsSource: channel(soundGridLocation[15]).PREMIUM_UPSELL, initialScrollLocation };
        const result = obj.openSoundboardSoundPickerActionSheet(obj2);
      });
    } else {
      playSoundboardSound(analyticsLocations);
    }
  }, items);
  const tmpResult4 = tmp(soundGridLocation[4]);
  const sharedValue = tmpResult4.useSharedValue(0);
  const tmpResult5 = tmp(soundGridLocation[4]);
  const sharedValue1 = tmpResult5.useSharedValue(0);
  let items1 = [sharedValue];
  let items2 = [sharedValue];
  const callback1 = playSoundboardSound.useCallback(() => {
    const result = sharedValue.set(1);
  }, items1);
  let items3 = [isPlayingSound, sharedValue1, sharedValue];
  const callback2 = playSoundboardSound.useCallback(() => {
    const result = sharedValue.set(0);
  }, items2);
  const effect = playSoundboardSound.useEffect(() => {
    let num = 0;
    set = sharedValue1.set;
    if (isPlayingSound) {
      num = 1;
    }
    const result = set(num);
  }, items3);
  let obj2 = { pressed: sharedValue, playing: sharedValue1 };
  const obj3 = { sharedValues: obj2, scaleFactors: { pressed: 0.95, playing: 1.05 } };
  const fn = function o() {
    let items3;
    const pressed = obj3.sharedValues.pressed;
    const playing = obj3.sharedValues.playing;
    const value = pressed.get();
    let num = obj3.playingAnimationDelay;
    const tmp3 = playing.get() > 0;
    const withDelay = sound(soundGridLocation[4]).withDelay;
    sound(soundGridLocation[4]);
    if (num == null) {
      num = 0;
    }
    const withSpring = sound(soundGridLocation[9]).withSpring;
    sound(soundGridLocation[9]);
    const playing2 = tmp.sharedValues.playing;
    const items = [1, obj3.scaleFactors.playing];
    const tmp4Result5 = sound(soundGridLocation[4]);
    const withDelayResult = withDelay(num, withSpring(tmp4Result5.interpolate(playing2.get(), [0, 1], items), SPRING_CONFIG));
    const withSpring2 = sound(soundGridLocation[9]).withSpring;
    sound(soundGridLocation[9]);
    const pressed2 = tmp.sharedValues.pressed;
    const items1 = [1, obj3.scaleFactors.pressed];
    const tmp4Result7 = sound(soundGridLocation[4]);
    const withSpring2Result = withSpring2(tmp4Result7.interpolate(pressed2.get(), [0, 1], items1), SPRING_CONFIG);
    let tmp11 = withSpring2Result;
    if (0 === value) {
      tmp11 = withSpring2Result;
      if (tmp3) {
        tmp11 = withDelayResult;
      }
    }
    const items2 = [{ scale: tmp11 }, ];
    const pressed3 = tmp.sharedValues.pressed;
    const interpolate = sound(soundGridLocation[4]).interpolate;
    let num2 = tmp.pressedRotationDegrees;
    sound(soundGridLocation[4]);
    const value2 = pressed3.get();
    if (num2 == null) {
      num2 = 0;
    }
    const obj = { transform: items2 };
    const obj2 = { rotate: "" + interpolate(value2, [0, 1], items3) + "deg" };
    items3 = [0, num2];
    items2[1] = obj2;
    return obj;
  };
  const tmpResult6 = tmp(soundGridLocation[4]);
  fn.__closure = { animationConfig: obj3, withDelay: tmp(soundGridLocation[4]).withDelay, withSpring: tmp(soundGridLocation[9]).withSpring, interpolate: tmp(soundGridLocation[4]).interpolate, SPRING_CONFIG };
  fn.__workletHash = 13932429225740;
  fn.__initData = __initData;
  let pressed = obj2.pressed;
  ({ animationConfig: obj3, withDelay: tmp(soundGridLocation[4]).withDelay, withSpring: tmp(soundGridLocation[9]).withSpring, interpolate: tmp(soundGridLocation[4]).interpolate, SPRING_CONFIG });
  const animatedStyle = tmpResult6.useAnimatedStyle(fn);
  const items4 = [channel, sound, soundGridLocation, analyticsLocations];
  const items5 = [tmp4.button, { width: buttonWidth }, , , , , ];
  let buttonPressed = null;
  const tmp15 = pressed.get() > 0;
  const callback3 = playSoundboardSound.useCallback(() => {
    openSoundboardSoundPreviewActionSheetDefault(channel, sound, analyticsLocations[analyticsLocations.length - 1], soundGridLocation);
  }, items4);
  const tmp19 = closure_10;
  if (tmp15) {
    buttonPressed = tmp4.buttonPressed;
  }
  items5[2] = buttonPressed;
  items5[3] = animatedStyle;
  let buttonPlaying = null;
  if (isPlayingSound) {
    buttonPlaying = tmp4.buttonPlaying;
  }
  items5[4] = buttonPlaying;
  let buttonDisabled = null;
  if (isLocked) {
    buttonDisabled = null;
    if (!flag) {
      buttonDisabled = tmp4.buttonDisabled;
    }
  }
  const obj5 = { style: items5, accessibilityRole: "button", accessibilityLabel: sound.name, accessibilityHint: lockedAccessibilityHint, onPressIn: callback1, onPressOut: callback2, onPress: callback, onLongPress: callback3, children: items6 };
  items5[5] = buttonDisabled;
  items5[6] = style;
  let tmp23 = isPlayingSound;
  if (tmp23) {
    const obj6 = { style: tmp4.playingBackground };
    tmp23 = isLocked(tmp18, obj6);
  }
  items6 = [tmp23, , ];
  if (tmp3) {
    const obj7 = { sharedValues: obj2, sound };
    tmp3 = isLocked(SoundButtonEmoji, obj7);
  }
  items6[1] = tmp3;
  const items7 = [tmp4.text, ];
  let textPlaying = null;
  const Text = tmp(tmp2[19]).Text;
  if (isPlayingSound) {
    textPlaying = tmp4.textPlaying;
  }
  const obj8 = { lineClamp: 1, style: items7, variant: "text-sm/semibold", children: sound.name };
  items7[1] = textPlaying;
  items6[2] = isLocked(Text, obj8);
  const children = [onLockedPress(tmp19, obj5), ];
  if (isLocked) {
    isLocked = !flag;
  }
  if (isLocked) {
    const obj9 = { style: tmp4.lock };
    isLocked = tmp27(tmp(tmp2[20]).LockIcon, obj9);
  }
  children[1] = isLocked;
  return onLockedPress(analyticsLocations, { children });
});
size = size_mod;
let result = size.fileFinishedImporting("modules/soundboard/native/SoundButton.tsx");

export const SoundButton = memoResult;
