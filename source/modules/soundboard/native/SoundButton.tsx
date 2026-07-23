// Module ID: 15753
// Function ID: 121570
// Name: useAnimation
// Dependencies: [31, 27, 1849, 15747, 33, 3991, 4130, 689, 477, 4660, 4542, 5151, 11079, 15754, 566, 15755, 5464, 5484, 5739, 3776, 7949, 7951, 3831, 10797, 1212, 15757, 4126, 4652, 2]

// Module 15753 (useAnimation)
import importAllResult from "result";
import { View } from "LockIcon";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";
import set from "set";
import importDefaultResult1 from "module_3991";
import set from "_isNativeReflectConstruct";

let closure_6;
let closure_7;
const require = arg1;
function useAnimation(animationConfig) {
  const _require = animationConfig;
  let obj = _require(3991);
  const fn = function t() {
    const pressed = animationConfig.sharedValues.pressed;
    const playing = animationConfig.sharedValues.playing;
    let value = pressed.get();
    let obj = animationConfig(outer1_2[5]);
    const playingAnimationDelay = animationConfig.playingAnimationDelay;
    let num = 0;
    if (null != playingAnimationDelay) {
      num = playingAnimationDelay;
    }
    let obj1 = animationConfig(outer1_2[10]);
    const tmp2 = playing.get() > 0;
    const playing2 = animationConfig.sharedValues.playing;
    const items = [1, animationConfig.scaleFactors.playing];
    const obj3 = animationConfig(outer1_2[5]);
    const withDelayResult = obj.withDelay(num, obj1.withSpring(animationConfig(outer1_2[5]).interpolate(playing2.get(), [0, 1], items), outer1_9));
    const obj4 = animationConfig(outer1_2[10]);
    const pressed2 = animationConfig.sharedValues.pressed;
    const items1 = [1, animationConfig.scaleFactors.pressed];
    const withSpringResult = obj4.withSpring(animationConfig(outer1_2[5]).interpolate(pressed2.get(), [0, 1], items1), outer1_9);
    obj = {};
    obj = {};
    let tmp5 = withSpringResult;
    if (0 === value) {
      tmp5 = withSpringResult;
      if (tmp2) {
        tmp5 = withDelayResult;
      }
    }
    obj.scale = tmp5;
    const items2 = [obj, ];
    obj1 = {};
    const obj5 = animationConfig(outer1_2[5]);
    const pressed3 = animationConfig.sharedValues.pressed;
    let prop;
    value = pressed3.get();
    if (null != animationConfig) {
      prop = animationConfig.pressedRotationDegrees;
    }
    let num2 = 0;
    if (null != prop) {
      num2 = prop;
    }
    const items3 = [0, num2];
    obj1.rotate = "" + animationConfig(outer1_2[5]).interpolate(value, [0, 1], items3) + "deg";
    items2[1] = obj1;
    obj.transform = items2;
    return obj;
  };
  obj = { animationConfig, withDelay: _require(3991).withDelay, withSpring: _require(4542).withSpring, interpolate: _require(3991).interpolate, SPRING_CONFIG: closure_9 };
  fn.__closure = obj;
  fn.__workletHash = 13932429225740;
  fn.__initData = closure_12;
  return obj.useAnimatedStyle(fn);
}
function SoundButtonEmoji(arg0) {
  let sharedValues;
  let sound;
  ({ sound, sharedValues } = arg0);
  const tmp = callback2();
  let obj = { style: items };
  items = [tmp.emojiWrapper, useAnimation({ sharedValues, scaleFactors: { pressed: 0.8, playing: 1.2 } })];
  obj = { style: useAnimation({ sharedValues, scaleFactors: { pressed: 0.7200000000000001, playing: 1.08 }, playingAnimationDelay: 100, pressedRotationDegrees: -15 }) };
  obj = { fastImageStyle: tmp.emoji, textEmojiStyle: tmp.emoji };
  const tmp2 = useAnimation({ sharedValues, scaleFactors: { pressed: 0.8, playing: 1.2 } });
  const tmp3 = closure_6;
  const tmp4 = closure_8;
  const tmp5 = closure_6;
  const tmp6 = closure_8;
  const tmp7 = closure_6;
  obj.src = importDefault(11079)(sound, 24);
  const emojiName = sound.emojiName;
  let str = "";
  if (null != emojiName) {
    str = emojiName;
  }
  obj.name = str;
  obj.children = tmp7(importDefault(5151), obj);
  obj.children = tmp5(tmp6, obj);
  return tmp3(tmp4, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = require("module_3991").createAnimatedComponent(View);
let closure_9 = { damping: 10, stiffness: 300, mass: 1 };
let obj = {};
obj = { marginTop: 4, height: require("SOUND_BUTTON_HEIGHT").SOUND_BUTTON_HEIGHT, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
obj.button = obj;
obj.buttonPressed = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_PRIMARY_PRESSED_BG };
obj.buttonDisabled = { opacity: 0.5 };
_createForOfIteratorHelperLoose = { borderStyle: "solid", borderWidth: 2, borderColor: require("_createForOfIteratorHelperLoose").colors.STATUS_SPEAKING, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_SECONDARY_BG };
obj.buttonPlaying = _createForOfIteratorHelperLoose;
let obj3 = { height: 24, width: 24, fontSize: null, lineHeight: 28 };
let num;
if (set.isIOS()) {
  num = 24;
}
obj3.fontSize = num;
obj.emoji = obj3;
let obj4 = { display: "flex", alignItems: "center", justifyContent: "center", height: 40, width: 40, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, backgroundSize: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, marginBottom: 8 };
obj.emojiWrapper = obj4;
obj.text = { marginHorizontal: 8 };
obj.textPlaying = { marginHorizontal: 6 };
let obj5 = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_12, end: require("_createForOfIteratorHelperLoose").space.PX_12, width: 12, height: 12, tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj.lock = obj5;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_PRIMARY_PRESSED_BG };
let closure_11 = require("module_3991").createAnimatedComponent(require("PressableBase").PressableOpacity);
let closure_12 = { code: "function SoundButtonTsx1(){const{animationConfig,withDelay,withSpring,interpolate,SPRING_CONFIG}=this.__closure;var _animationConfig$play,_animationConfig$pres,_animationConfig;const isNotPressed=animationConfig.sharedValues.pressed.get()===0;const isPlaying=animationConfig.sharedValues.playing.get()>0;const shouldDoPlayingAnimation=isNotPressed&&isPlaying;const playingAnimationScaleValue=withDelay((_animationConfig$play=animationConfig.playingAnimationDelay)!==null&&_animationConfig$play!==void 0?_animationConfig$play:0,withSpring(interpolate(animationConfig.sharedValues.playing.get(),[0,1],[1,animationConfig.scaleFactors.playing]),SPRING_CONFIG));const pressedAnimationScaleValue=withSpring(interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[1,animationConfig.scaleFactors.pressed]),SPRING_CONFIG);const rotationScaleValue=interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[0,(_animationConfig$pres=(_animationConfig=animationConfig)===null||_animationConfig===void 0?void 0:_animationConfig.pressedRotationDegrees)!==null&&_animationConfig$pres!==void 0?_animationConfig$pres:0]);return{transform:[{scale:shouldDoPlayingAnimation?playingAnimationScaleValue:pressedAnimationScaleValue},{rotate:rotationScaleValue+\"deg\"}]};}" };
let result = set.fileFinishedImporting("modules/soundboard/native/SoundButton.tsx");

export const SoundButton = importAllResult.memo(function SoundButtonComponent(sound) {
  sound = sound.sound;
  const channel = sound.channel;
  let flag = sound.isSectionLocked;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  let playSoundboardSound;
  let analyticsLocations;
  let c5;
  let obj = sound(stateFromStores[13]);
  let tmp = null != sound.emojiId;
  if (!tmp) {
    tmp = null != sound.emojiName;
  }
  const tmp2 = callback2();
  let obj1 = sound(stateFromStores[14]);
  let items = [c5];
  stateFromStores = obj1.useStateFromStores(items, () => _undefined.getCurrentUser());
  const tmp4 = channel(stateFromStores[15])(sound, channel.id);
  playSoundboardSound = tmp4.playSoundboardSound;
  const isPlayingSound = tmp4.isPlayingSound;
  analyticsLocations = channel(stateFromStores[16])(channel(stateFromStores[17]).SOUNDBOARD_BUTTON).analyticsLocations;
  let obj2 = sound(stateFromStores[18]);
  let tmp6 = !obj2.canUseSoundboardSound(stateFromStores, sound, channel);
  c5 = tmp6;
  let items1 = [analyticsLocations, channel.guild_id, stateFromStores, playSoundboardSound, sound, tmp6];
  const callback = playSoundboardSound.useCallback(() => {
    if (c5) {
      let obj = channel(stateFromStores[19]);
      if (!obj.canUseSoundboardEverywhere(stateFromStores)) {
        if (sound.guildId !== channel.guild_id) {
          channel(stateFromStores[20])(sound(stateFromStores[21]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
          const tmp11 = channel(stateFromStores[20]);
        }
      }
      if (!sound.available) {
        obj = { key: "DISABLED_SOUND_PRESSED", icon: channel(stateFromStores[23]) };
        const intl = sound(stateFromStores[24]).intl;
        obj.content = intl.string(sound(stateFromStores[24]).t.MDOXJR);
        obj.toastDurationMs = 3000;
        channel(stateFromStores[22]).open(obj);
        const obj2 = channel(stateFromStores[22]);
      }
    } else {
      playSoundboardSound(analyticsLocations);
    }
  }, items1);
  const tmp8 = (function useAnimationSharedValuesAndHandlers(isPlayingSound) {
    let closure_0 = isPlayingSound;
    const pressed = sound(stateFromStores[5]).useSharedValue(0);
    const obj = sound(stateFromStores[5]);
    const playing = sound(stateFromStores[5]).useSharedValue(0);
    const items = [pressed];
    const items1 = [pressed];
    const pressIn = playSoundboardSound.useCallback(() => {
      const result = pressed.set(1);
    }, items);
    const items2 = [isPlayingSound, playing, pressed];
    const pressOut = playSoundboardSound.useCallback(() => {
      const result = pressed.set(0);
    }, items1);
    const effect = playSoundboardSound.useEffect(() => {
      let num = 0;
      if (closure_0) {
        num = 1;
      }
      const result = playing.set(num);
    }, items2);
    return { handlers: { pressIn, pressOut }, sharedValues: { pressed, playing } };
  })(isPlayingSound);
  obj = { sharedValues: tmp8.sharedValues, scaleFactors: { pressed: 0.95, playing: 1.05 } };
  let pressed = tmp8.sharedValues.pressed;
  const tmp5 = channel(stateFromStores[16]);
  let items2 = [channel.id, sound];
  const tmp9 = useAnimation(obj);
  obj = {};
  obj1 = {};
  const items3 = [tmp2.button, { width: obj.useSoundButtonStyleConfig().buttonWidth }, , , , , ];
  let buttonPressed = null;
  const callback1 = playSoundboardSound.useCallback(() => {
    channel(stateFromStores[25])(channel.id, sound);
  }, items2);
  if (tmp10) {
    buttonPressed = tmp2.buttonPressed;
  }
  items3[2] = buttonPressed;
  items3[3] = tmp9;
  let buttonPlaying = null;
  if (isPlayingSound) {
    buttonPlaying = tmp2.buttonPlaying;
  }
  items3[4] = buttonPlaying;
  let buttonDisabled = null;
  if (tmp6) {
    buttonDisabled = null;
    if (!flag) {
      buttonDisabled = tmp2.buttonDisabled;
    }
  }
  items3[5] = buttonDisabled;
  items3[6] = sound.style;
  obj1.style = items3;
  obj1.accessibilityRole = "button";
  obj1.accessibilityLabel = sound.name;
  obj1.onPressIn = tmp8.handlers.pressIn;
  obj1.onPressOut = tmp8.handlers.pressOut;
  obj1.onPress = callback;
  obj1.onLongPress = callback1;
  if (tmp) {
    obj2 = { sharedValues: tmp8.sharedValues, sound };
    tmp = callback(SoundButtonEmoji, obj2);
  }
  const items4 = [tmp, ];
  const obj3 = { lineClamp: 1, style: null, variant: "text-sm/semibold" };
  const items5 = [tmp2.text, ];
  let textPlaying = null;
  if (isPlayingSound) {
    textPlaying = tmp2.textPlaying;
  }
  items5[1] = textPlaying;
  obj3.style = items5;
  obj3.children = sound.name;
  items4[1] = callback(sound(stateFromStores[26]).Text, obj3);
  obj1.children = items4;
  const items6 = [closure_7(closure_11, obj1), ];
  if (tmp6) {
    tmp6 = !flag;
  }
  if (tmp6) {
    const obj4 = { style: tmp2.lock };
    tmp6 = callback(sound(stateFromStores[27]).LockIcon, obj4);
  }
  items6[1] = tmp6;
  obj.children = items6;
  return closure_7(analyticsLocations, obj);
});
