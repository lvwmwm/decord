// Module ID: 19487
// Function ID: 19488
// Name: SoundButton
// Dependencies: [19, 17, 19481, 21, 1652, 5143, 575, 1377, 7124, 5773, 7439, 13661, 19488, 19489, 7465, 7490, 19491, 19478, 19493, 5763, 8813, 2]

// Module 19487 (SoundButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5773 */;
import Pressables from "Pressables" /* 7124 */;
import EmojiDefault from "Emoji" /* 7439 */;
import getSoundboardEmojiUrlDefault from "getSoundboardEmojiUrl" /* 13661 */;
import SoundboardStyleConstants from "SoundboardStyleConstants" /* 19481 */;
import openSoundboardSoundPreviewActionSheetDefault from "openSoundboardSoundPreviewActionSheet" /* 19493 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size_mod from "module_2" /* 2 */;

const module_1652_mod = _mod1652;
let num2, obj1, playing, playing2, pressed2, pressed3, set, tmp4Result, tmp8, value, value1;

let hasOwnProperty;
let metroRequire;
let num;
let obj2;
let obj3;
let obj4;
let rect;
let size;
let size1;
function useAnimation(arg0) {
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const tmp = _mod1652;
  let items = [closure_11, arg0, , , , ];
  const useAnimatedStyle = tmp.useAnimatedStyle;
  items[2] = _mod1652.withDelay;
  items[3] = spring_spring.withSpring;
  items[4] = _mod1652.interpolate;
  items[5] = closure_8;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  class SoundButtonTsx1 {
    constructor() {
      tmp = closure_0;
      pressed = closure_0.sharedValues.pressed;
      playing = closure_0.sharedValues.playing;
      value = pressed.get();
      num = closure_0.playingAnimationDelay;
      tmp3 = playing.get() > 0;
      tmp4 = closure_1;
      if (num == null) {
        num = 0;
      }
      playing2 = tmp.sharedValues.playing;
      tmp5 = closure_3;
      items = [1];
      items[1] = tmp.scaleFactors.playing;
      pressed2 = tmp.sharedValues.pressed;
      tmp4Result = tmp4(num, closure_2(closure_3(playing2.get(), [0, 1], items), closure_4));
      items1 = [1];
      items1[1] = tmp.scaleFactors.pressed;
      tmp7 = closure_2(closure_3(pressed2.get(), [0, 1], items1), closure_4);
      tmp8 = tmp7;
      if (0 === value) {
        tmp8 = tmp7;
        if (tmp3) {
          tmp8 = tmp4Result;
        }
      }
      items2 = [, ];
      items2[0] = { scale: tmp8 };
      pressed3 = tmp.sharedValues.pressed;
      num2 = undefined;
      value1 = pressed3.get();
      if (tmp != null) {
        num2 = tmp.pressedRotationDegrees;
      }
      if (num2 == null) {
        num2 = 0;
      }
      obj = { transform: null };
      obj1 = { rotate: null };
      items3 = [0];
      items3[1] = num2;
      obj1.rotate = "" + tmp5(value1, [0, 1], items3) + "deg";
      items2[1] = obj1;
      obj.transform = items2;
      return obj;
    }
  }
  let items1 = [tmp3, tmp4, tmp5, tmp6, tmp7];
  SoundButtonTsx1.__closure = items1;
  SoundButtonTsx1.__workletHash = 3937789014357;
  SoundButtonTsx1.__initData = tmp2;
  return useAnimatedStyle(SoundButtonTsx1);
}
function SoundButtonEmoji(arg0) {
  let items;
  let obj2;
  let obj3;
  let sharedValues;
  let sound;
  let str;
  let tmp5;
  ({ sound, sharedValues } = arg0);
  const tmp = closure_9();
  const obj = { style: items, children: hasOwnProperty(closure_7, obj2) };
  items = [tmp.emojiWrapper, useAnimation({ sharedValues, scaleFactors: { pressed: 0.8, playing: 1.2 } })];
  useAnimation({ sharedValues, scaleFactors: { pressed: 0.8, playing: 1.2 } });
  obj2 = { style: useAnimation({ sharedValues, scaleFactors: { pressed: 0.7200000000000001, playing: 1.08 }, playingAnimationDelay: 100, pressedRotationDegrees: -15 }), children: hasOwnProperty(tmp5, obj3) };
  obj3 = { fastImageStyle: tmp.emoji, textEmojiStyle: tmp.emoji, src: getSoundboardEmojiUrlDefault(sound, 24), name: str };
  str = sound.emojiName;
  tmp5 = EmojiDefault;
  if (str == null) {
    str = "";
  }
  return hasOwnProperty(closure_7, obj);
}
const View = react_native.View;
const SOUND_BUTTON_HEIGHT = SoundboardStyleConstants.SOUND_BUTTON_HEIGHT;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let module_1652 = module_1652_mod;
let closure_7 = module_1652.createAnimatedComponent(View);
let closure_8 = { damping: 10, stiffness: 300, mass: 1 };
let createStyles = createStyles_mod;
let obj = { button: obj2, buttonPressed: obj3, buttonDisabled: { opacity: 0.5 }, buttonPlaying: obj4, playingBackground: rect, emoji: { height: 24, width: 24, fontSize: num, lineHeight: 28 }, emojiWrapper: size, text: { marginHorizontal: 8 }, textPlaying: { marginHorizontal: 6 }, lock: size1 };
obj2 = { marginTop: 4, height: SOUND_BUTTON_HEIGHT, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj3 = { backgroundColor: nativeDefault.colors.CARD_PRIMARY_PRESSED_BG };
obj4 = { borderStyle: "solid", borderWidth: 2, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
rect = { position: "absolute", top: 0, bottom: 0, start: 0, end: 0, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BG, borderRadius: nativeDefault.radii.lg - 2 };
num = undefined;
if (PlatformUtils.isIOS()) {
  num = 24;
}
size = { display: "flex", alignItems: "center", justifyContent: "center", height: 40, width: 40, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, backgroundSize: 32, borderRadius: nativeDefault.radii.round, marginBottom: 8 };
size1 = { position: "absolute", top: nativeDefault.space.PX_12, end: nativeDefault.space.PX_12, width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
let closure_9 = createStyles(obj);
module_1652 = module_1652_mod;
let closure_10 = module_1652.createAnimatedComponent(Pressables.PressableOpacity);
let closure_11 = { code: "(function SoundButtonTsx1(){let[animationConfig,withDelay,withSpring,interpolate,SPRING_CONFIG]=this.__closure;var _animationConfig$play,_animationConfig$pres,_animationConfig;const isNotPressed=animationConfig.sharedValues.pressed.get()===0;const isPlaying=animationConfig.sharedValues.playing.get()>0;const shouldDoPlayingAnimation=isNotPressed&&isPlaying;const playingAnimationScaleValue=withDelay((_animationConfig$play=animationConfig.playingAnimationDelay)!==null&&_animationConfig$play!==void 0?_animationConfig$play:0,withSpring(interpolate(animationConfig.sharedValues.playing.get(),[0,1],[1,animationConfig.scaleFactors.playing]),SPRING_CONFIG));const pressedAnimationScaleValue=withSpring(interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[1,animationConfig.scaleFactors.pressed]),SPRING_CONFIG);const rotationScaleValue=interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[0,(_animationConfig$pres=(_animationConfig=animationConfig)===null||_animationConfig===void 0?void 0:_animationConfig.pressedRotationDegrees)!==null&&_animationConfig$pres!==void 0?_animationConfig$pres:0]);return{transform:[{scale:shouldDoPlayingAnimation?playingAnimationScaleValue:pressedAnimationScaleValue},{rotate:rotationScaleValue+\"deg\"}]};})" };
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
  const tmp6 = channel(soundGridLocation[14]);
  analyticsLocations = tmp6(channel(tmp2[15]).SOUNDBOARD_BUTTON).analyticsLocations;
  const tmpResult = tmp(soundGridLocation[16]);
  const soundboardSoundLock = tmpResult.useSoundboardSoundLock(sound, channel);
  isLocked = soundboardSoundLock.isLocked;
  onLockedPress = soundboardSoundLock.onLockedPress;
  const items = [analyticsLocations, onLockedPress, channel, soundGridLocation, playSoundboardSound, isLocked];
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
  const tmpResult3 = tmp(soundGridLocation[4]);
  const sharedValue = tmpResult3.useSharedValue(0);
  const tmpResult4 = tmp(soundGridLocation[4]);
  const sharedValue1 = tmpResult4.useSharedValue(0);
  const items1 = [sharedValue];
  const items2 = [sharedValue];
  const callback1 = playSoundboardSound.useCallback(() => {
    const result = sharedValue.set(1);
  }, items1);
  const items3 = [isPlayingSound, sharedValue1, sharedValue];
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
  const pressed = obj2.pressed;
  const items4 = [channel, sound, soundGridLocation, analyticsLocations];
  const items5 = [tmp4.button, { width: buttonWidth }, , , , , ];
  let buttonPressed = null;
  const tmp14 = useAnimation({ sharedValues: obj2, scaleFactors: { pressed: 0.95, playing: 1.05 } });
  const tmp15 = pressed.get() > 0;
  const callback3 = playSoundboardSound.useCallback(() => {
    openSoundboardSoundPreviewActionSheetDefault(channel, sound, analyticsLocations[analyticsLocations.length - 1], soundGridLocation);
  }, items4);
  const tmp19 = closure_10;
  if (tmp15) {
    buttonPressed = tmp4.buttonPressed;
  }
  items5[2] = buttonPressed;
  items5[3] = tmp14;
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
  const obj3 = { style: items5, accessibilityRole: "button", accessibilityLabel: sound.name, accessibilityHint: lockedAccessibilityHint, onPressIn: callback1, onPressOut: callback2, onPress: callback, onLongPress: callback3, children: items6 };
  items5[5] = buttonDisabled;
  items5[6] = style;
  let tmp23 = isPlayingSound;
  if (tmp23) {
    const obj4 = { style: tmp4.playingBackground };
    tmp23 = isLocked(tmp18, obj4);
  }
  items6 = [tmp23, , ];
  if (tmp3) {
    const obj5 = { sharedValues: obj2, sound };
    tmp3 = isLocked(SoundButtonEmoji, obj5);
  }
  items6[1] = tmp3;
  const items7 = [tmp4.text, ];
  let textPlaying = null;
  const Text = tmp(tmp2[19]).Text;
  if (isPlayingSound) {
    textPlaying = tmp4.textPlaying;
  }
  const obj6 = { lineClamp: 1, style: items7, variant: "body-sm/semibold", children: sound.name };
  items7[1] = textPlaying;
  items6[2] = isLocked(Text, obj6);
  const children = [onLockedPress(tmp19, obj3), ];
  if (isLocked) {
    isLocked = !flag;
  }
  if (isLocked) {
    const obj7 = { style: tmp4.lock };
    isLocked = tmp27(tmp(tmp2[20]).LockIcon, obj7);
  }
  children[1] = isLocked;
  return onLockedPress(analyticsLocations, { children });
});
size = size_mod;
let result = size.fileFinishedImporting("modules/soundboard/native/SoundButton.tsx");

export const SoundButton = memoResult;
