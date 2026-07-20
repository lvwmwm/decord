// Module ID: 15618
// Function ID: 119291
// Name: useAnimation
// Dependencies: []

// Module 15618 (useAnimation)
function useAnimation(animationConfig) {
  const arg1 = animationConfig;
  let obj = arg1(dependencyMap[5]);
  const fn = function t(self) {
    const pressed = self.sharedValues.pressed;
    const playing = self.sharedValues.playing;
    let value = pressed.get();
    let obj = self(closure_2[5]);
    const playingAnimationDelay = self.playingAnimationDelay;
    let num = 0;
    if (null != playingAnimationDelay) {
      num = playingAnimationDelay;
    }
    let obj1 = self(closure_2[10]);
    const tmp2 = playing.get() > 0;
    const playing2 = self.sharedValues.playing;
    const items = [24573934974154670000000000000000000000000000000000000000000000000000000000000, self.scaleFactors.playing];
    const obj3 = self(closure_2[5]);
    const withDelayResult = obj.withDelay(num, obj1.withSpring(self(closure_2[5]).interpolate(playing2.get(), [null, null], items), closure_9));
    const obj4 = self(closure_2[10]);
    const pressed2 = self.sharedValues.pressed;
    const items1 = [24573934974154670000000000000000000000000000000000000000000000000000000000000, self.scaleFactors.pressed];
    const withSpringResult = obj4.withSpring(self(closure_2[5]).interpolate(pressed2.get(), [null, null], items1), closure_9);
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
    const obj5 = self(closure_2[5]);
    const pressed3 = self.sharedValues.pressed;
    let prop;
    value = pressed3.get();
    if (null != self) {
      prop = self.pressedRotationDegrees;
    }
    let num2 = 0;
    if (null != prop) {
      num2 = prop;
    }
    const items3 = [0.229, num2];
    obj1.rotate = "" + self(closure_2[5]).interpolate(value, [null, null], items3) + "deg";
    items2[1] = obj1;
    obj.transform = items2;
    return obj;
  };
  obj = { animationConfig, withDelay: arg1(dependencyMap[5]).withDelay, withSpring: arg1(dependencyMap[10]).withSpring, interpolate: arg1(dependencyMap[5]).interpolate, SPRING_CONFIG: closure_9 };
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
  const items = [tmp.emojiWrapper, useAnimation({ sharedValues, scaleFactors: { paddingTop: 24, paddingBottom: 24 } })];
  obj = { style: useAnimation({ sharedValues, scaleFactors: { paddingTop: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020875555400843686, paddingBottom: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011750126578705576 }, playingAnimationDelay: 100, pressedRotationDegrees: -15 }) };
  obj = { fastImageStyle: tmp.emoji, textEmojiStyle: tmp.emoji };
  const tmp2 = useAnimation({ sharedValues, scaleFactors: { paddingTop: 24, paddingBottom: 24 } });
  const tmp3 = closure_6;
  const tmp4 = closure_8;
  const tmp5 = closure_6;
  const tmp6 = closure_8;
  const tmp7 = closure_6;
  obj.src = importDefault(dependencyMap[12])(sound, 24);
  const emojiName = sound.emojiName;
  let str = "";
  if (null != emojiName) {
    str = emojiName;
  }
  obj.name = str;
  obj.children = tmp7(importDefault(dependencyMap[11]), obj);
  obj.children = tmp5(tmp6, obj);
  return tmp3(tmp4, obj);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]).createAnimatedComponent(View);
let closure_9 = {};
let obj2 = arg1(dependencyMap[6]);
let obj = {};
obj = { 9223372036854775807: true, 0: "/assets/images/native/icons", 9223372036854775807: 24, 9223372036854775807: 24, 0: null, 9223372036854775807: "e3c5c9128e3b6990fd3bdb33f2f889a0", 9223372036854775807: "ic_gear", -9223372036854775808: "png", 9223372036854775807: true, height: arg1(dependencyMap[3]).SOUND_BUTTON_HEIGHT, backgroundColor: importDefault(dependencyMap[7]).colors.CARD_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[7]).radii.lg, borderColor: importDefault(dependencyMap[7]).colors.BORDER_MUTED };
const merged = Object.assign(importDefault(dependencyMap[7]).shadows.SHADOW_LOW);
obj.button = obj;
const importDefaultResult = importDefault(dependencyMap[5]);
obj.buttonPressed = { backgroundColor: importDefault(dependencyMap[7]).colors.CARD_PRIMARY_PRESSED_BG };
obj.buttonDisabled = { opacity: 0.5 };
obj2 = { position: false, opacity: false, borderColor: importDefault(dependencyMap[7]).colors.STATUS_SPEAKING, backgroundColor: importDefault(dependencyMap[7]).colors.CARD_SECONDARY_BG };
obj.buttonPlaying = obj2;
const obj3 = {};
const obj1 = { backgroundColor: importDefault(dependencyMap[7]).colors.CARD_PRIMARY_PRESSED_BG };
let num;
if (obj9.isIOS()) {
  num = 24;
}
obj3.fontSize = num;
obj.emoji = obj3;
const obj9 = arg1(dependencyMap[8]);
obj.emojiWrapper = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[7]).radii.round };
obj.text = { marginHorizontal: 8 };
obj.textPlaying = { marginHorizontal: 6 };
const obj5 = { value: "<string:2102460418>", "Bool(false)": "<string:541135204>", "Bool(false)": "<string:1912603217>", "Bool(false)": "toString", "Bool(false)": "toString", top: importDefault(dependencyMap[7]).space.PX_12, end: importDefault(dependencyMap[7]).space.PX_12, tintColor: importDefault(dependencyMap[7]).colors.WHITE };
obj.lock = obj5;
let closure_10 = obj2.createStyles(obj);
const obj4 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[7]).radii.round };
let closure_11 = importDefault(dependencyMap[5]).createAnimatedComponent(arg1(dependencyMap[9]).PressableOpacity);
let closure_12 = { code: "function SoundButtonTsx1(){const{animationConfig,withDelay,withSpring,interpolate,SPRING_CONFIG}=this.__closure;var _animationConfig$play,_animationConfig$pres,_animationConfig;const isNotPressed=animationConfig.sharedValues.pressed.get()===0;const isPlaying=animationConfig.sharedValues.playing.get()>0;const shouldDoPlayingAnimation=isNotPressed&&isPlaying;const playingAnimationScaleValue=withDelay((_animationConfig$play=animationConfig.playingAnimationDelay)!==null&&_animationConfig$play!==void 0?_animationConfig$play:0,withSpring(interpolate(animationConfig.sharedValues.playing.get(),[0,1],[1,animationConfig.scaleFactors.playing]),SPRING_CONFIG));const pressedAnimationScaleValue=withSpring(interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[1,animationConfig.scaleFactors.pressed]),SPRING_CONFIG);const rotationScaleValue=interpolate(animationConfig.sharedValues.pressed.get(),[0,1],[0,(_animationConfig$pres=(_animationConfig=animationConfig)===null||_animationConfig===void 0?void 0:_animationConfig.pressedRotationDegrees)!==null&&_animationConfig$pres!==void 0?_animationConfig$pres:0]);return{transform:[{scale:shouldDoPlayingAnimation?playingAnimationScaleValue:pressedAnimationScaleValue},{rotate:rotationScaleValue+\"deg\"}]};}" };
const importDefaultResult1 = importDefault(dependencyMap[5]);
const memoResult = importAllResult.memo(function SoundButtonComponent(sound) {
  sound = sound.sound;
  const arg1 = sound;
  const channel = sound.channel;
  const importDefault = channel;
  let flag = sound.isSectionLocked;
  if (flag === undefined) {
    flag = false;
  }
  let dependencyMap;
  let importAllResult;
  let View;
  let closure_5;
  let obj = arg1(dependencyMap[13]);
  let tmp = null != sound.emojiId;
  if (!tmp) {
    tmp = null != sound.emojiName;
  }
  const tmp2 = callback2();
  let obj1 = arg1(dependencyMap[14]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => tmp6.getCurrentUser());
  dependencyMap = stateFromStores;
  const tmp4 = importDefault(dependencyMap[15])(sound, channel.id);
  const playSoundboardSound = tmp4.playSoundboardSound;
  importAllResult = playSoundboardSound;
  const isPlayingSound = tmp4.isPlayingSound;
  const analyticsLocations = importDefault(dependencyMap[16])(importDefault(dependencyMap[17]).SOUNDBOARD_BUTTON).analyticsLocations;
  View = analyticsLocations;
  let obj2 = arg1(dependencyMap[18]);
  let tmp6 = !obj2.canUseSoundboardSound(stateFromStores, sound, channel);
  closure_5 = tmp6;
  const items1 = [analyticsLocations, channel.guild_id, stateFromStores, playSoundboardSound, sound, tmp6];
  const callback = importAllResult.useCallback(() => {
    if (tmp6) {
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
      const tmp6 = stateFromStores;
    } else {
      playSoundboardSound(analyticsLocations);
    }
  }, items1);
  const tmp8 = function useAnimationSharedValuesAndHandlers(isPlayingSound) {
    const sound = isPlayingSound;
    const pressed = sound(stateFromStores[5]).useSharedValue(0);
    const channel = pressed;
    const obj = sound(stateFromStores[5]);
    const playing = sound(stateFromStores[5]).useSharedValue(0);
    const stateFromStores = playing;
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
      if (arg0) {
        num = 1;
      }
      const result = playing.set(num);
    }, items2);
    return { handlers: { pressIn, pressOut }, sharedValues: { pressed, playing } };
  }(isPlayingSound);
  obj = { sharedValues: tmp8.sharedValues, scaleFactors: {} };
  const pressed = tmp8.sharedValues.pressed;
  const tmp5 = importDefault(dependencyMap[16]);
  const items2 = [channel.id, sound];
  const tmp9 = useAnimation(obj);
  obj = {};
  obj1 = {};
  const items3 = [tmp2.button, { width: obj.useSoundButtonStyleConfig().buttonWidth }, , , , , ];
  let buttonPressed = null;
  const callback1 = importAllResult.useCallback(() => {
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
  const obj3 = { -1746280843: 29503, -111022282: 2424832, 1639192657: 262144 };
  const items5 = [tmp2.text, ];
  let textPlaying = null;
  if (isPlayingSound) {
    textPlaying = tmp2.textPlaying;
  }
  items5[1] = textPlaying;
  obj3.style = items5;
  obj3.children = sound.name;
  items4[1] = callback(arg1(dependencyMap[26]).Text, obj3);
  obj1.children = items4;
  const items6 = [closure_7(closure_11, obj1), ];
  if (tmp6) {
    tmp6 = !flag;
  }
  if (tmp6) {
    const obj4 = { style: tmp2.lock };
    tmp6 = callback(arg1(dependencyMap[27]).LockIcon, obj4);
  }
  items6[1] = tmp6;
  obj.children = items6;
  return closure_7(View, obj);
});
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/soundboard/native/SoundButton.tsx");

export const SoundButton = memoResult;
