// Module ID: 16899
// Function ID: 16900
// Name: SoundboardSoundPreviewActionSheet
// Dependencies: [32, 19, 17, 2045, 1372, 5319, 1074, 21, 4836, 576, 1364, 16897, 16896, 16882, 504, 6756, 6762, 1241, 5281, 9698, 9704, 1115, 9591, 8083, 6618, 6551, 11415, 4832, 5409, 7722, 2]
// Exports: default

// Module 16899 (SoundboardSoundPreviewActionSheet)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 6756 */;
import SoundboardUtils from "SoundboardUtils" /* 6762 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 16882 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;
import SoundboardStore from "SoundboardStore" /* 5319 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size_mod from "module_2" /* 2 */;

let c10;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroRequire;
let num;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
let size2;
let unpackModuleId;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
({ AnalyticEvents: c10, AnalyticsObjects: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { soundPresentation: obj2, soundPresentationPlaying: obj3, emoji: size, emojiFastImage: { width: 128, height: 128 }, emojiText: { fontSize: num, lineHeight: 74 }, text: obj4, buttonContainer: obj5, star: size1, primaryIcon: size2 };
obj2 = { borderWidth: 2, borderColor: "transparent", borderRadius: nativeDefault.radii.lg, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.STATUS_SPEAKING };
size = { marginTop: nativeDefault.space.PX_16, width: 64, height: 64, alignSelf: "center" };
num = undefined;
if (PlatformUtils.isIOS()) {
  num = 60;
}
obj4 = { marginTop: nativeDefault.space.PX_16, alignSelf: "center" };
obj5 = { gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24 };
size1 = { width: 16, height: 16, tintColor: nativeDefault.colors.TEXT_DEFAULT };
size2 = { width: 16, height: 16, tintColor: nativeDefault.colors.CONTROL_PRIMARY_TEXT_DEFAULT };
let closure_15 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx");

export default function SoundboardSoundPreviewActionSheet(channel) {
  let StarOutlineIcon;
  let _undefined;
  let c10;
  let intl3;
  let intl4;
  let isLocked;
  let items12;
  let items13;
  let items14;
  let obj21;
  let obj22;
  let obj9;
  let onLockedPress;
  let str2;
  let string2;
  let stringResult;
  let t2;
  let tmp13;
  let tmp18Result3;
  let tmp28;
  let tmp30;
  let tmp31;
  channel = channel.channel;
  const sound = channel.sound;
  const soundGridLocation = channel.soundGridLocation;
  const analyticsSource = channel.analyticsSource;
  onLockedPress = undefined;
  let stateFromStores;
  let stateFromStores1;
  c10 = undefined;
  let tmp = closure_15();
  let id = channel.id;
  let obj = channel(soundGridLocation[11]);
  const soundboardSoundPreviewMenuEnabled = obj.useSoundboardSoundPreviewMenuEnabled("SoundboardSoundPreviewActionSheet");
  let obj2 = channel(soundGridLocation[12]);
  const soundboardSoundLock = obj2.useSoundboardSoundLock(sound, channel);
  ({ isLocked, onLockedPress } = soundboardSoundLock);
  let items = [channel, soundGridLocation, soundboardSoundPreviewMenuEnabled, analyticsSource];
  const lockedAccessibilityHint = soundboardSoundLock.lockedAccessibilityHint;
  const onDismiss = id.useCallback(() => {
    const tmp = soundboardSoundPreviewMenuEnabled;
    if (tmp) {
      const obj2 = { channel, analyticsSource, initialScrollLocation: soundGridLocation };
      const obj = soundboard_SoundboardActionCreators;
      const result = obj.openSoundboardSoundPickerActionSheet(obj2);
    }
  }, items);
  const items1 = [onLockedPress, onDismiss];
  const callback1 = id.useCallback(() => {
    onLockedPress(() => onDismiss());
  }, items1);
  let obj4 = channel(soundGridLocation[14]);
  const items2 = [stateFromStores];
  stateFromStores = obj4.useStateFromStores(items2, () => {
    const currentUser = stateFromStores.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items3 = [stateFromStores1];
  const obj5 = channel(soundGridLocation[14]);
  stateFromStores1 = obj5.useStateFromStores(items3, () => SoundboardStore.isFavoriteSound(sound.soundId));
  const items4 = [stateFromStores1];
  const items5 = [sound];
  const obj6 = channel(soundGridLocation[14]);
  const stateFromStores2 = obj6.useStateFromStores(items4, () => SoundboardStore.isPlayingSound(sound.soundId), items5);
  const items6 = [stateFromStores1];
  const items7 = [stateFromStores];
  const obj7 = channel(soundGridLocation[14]);
  obj7.useStateFromStores(items6, () => {
    const isUserPlayingSoundsResult = null != stateFromStores && SoundboardStore.isUserPlayingSounds(tmp);
    return isUserPlayingSoundsResult;
  }, items7);
  [tmp13, c10] = analyticsSource(id.useState(false), 2);
  const stateFromStores3 = tmp13;
  const items8 = [stateFromStores1, sound];
  const items9 = [id, sound, tmp13];
  const tmp12 = analyticsSource(id.useState(false), 2);
  const callback2 = obj3.useCallback(() => {
    let obj2;
    if (stateFromStores1) {
      const tmpResult = SoundboardActionCreators;
      tmpResult.removeFavoriteSound(sound.soundId);
    } else {
      const obj = { sound, location: obj2 };
      obj2 = { object: unpackModuleId.SOUNDBOARD_SOUND };
      const tmpResult2 = SoundboardUtils;
      tmpResult2.trackSoundFavorited(obj);
      const obj4 = SoundboardActionCreators;
      obj4.addFavoriteSound(sound.soundId);
    }
  }, items8);
  const items10 = [sound, id, analyticsSource];
  const callback3 = obj3.useCallback(() => {
    let guild_id;
    const tmp = stateFromStores3;
    if (!tmp) {
      _undefined(true);
      const obj = { sound_id: null, sound_name: null, sound_guild_id: null, location_guild_id: guild_id };
      ({ soundId: obj.sound_id, name: obj.sound_name, guildId: obj.sound_guild_id } = sound);
      const track = AnalyticsUtilsDefault.track;
      const EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED = _undefined.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED;
      AnalyticsUtilsDefault;
      channel = ChannelStore.getChannel(id);
      guild_id = undefined;
      const tmp10 = id;
      const tmp8 = sound;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      track(EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, obj);
      const obj2 = SoundboardActionCreators;
      obj2.playSoundLocally(tmp10, tmp8);
    }
  }, items9);
  const callback4 = obj3.useCallback(() => {
    _undefined(false);
    const items = [analyticsSource];
    const obj = SoundboardUtils;
    obj.playSound(sound, id, items);
  }, items10);
  let str = "primary";
  const Button = tmp2(tmp3[18]).Button;
  if (soundboardSoundPreviewMenuEnabled) {
    str = "secondary";
  }
  const obj8 = { variant: str, icon: closure_12(StarOutlineIcon, obj9), text: stringResult, onPress: callback2 };
  if (stateFromStores1) {
    StarOutlineIcon = tmp2(tmp3[19]).StarIcon;
  } else {
    StarOutlineIcon = tmp2(tmp3[20]).StarOutlineIcon;
  }
  obj9 = { style: tmp.star };
  const intl = tmp2(tmp3[21]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[21]).t;
  if (stateFromStores1) {
    stringResult = string(t.aBUcp3);
  } else {
    stringResult = string(t.yZFibY);
  }
  const tmp18Result = closure_12(Button, obj8);
  const Button2 = tmp2(tmp3[18]).Button;
  if (tmp13) {
    const obj10 = { style: tmp.star };
    tmp18Result3 = tmp18(tmp2(tmp3[22]).WaveformIcon, obj10);
  } else {
    const obj11 = { style: tmp.star, source: sound(soundGridLocation[23]) };
    tmp18Result3 = tmp18(onLockedPress, obj11);
  }
  const obj12 = { variant: "secondary", icon: tmp18Result3, text: string2(tmp13 ? t2.diasud : t2.Kd4uxG), onPress: callback3 };
  const intl2 = tmp2(tmp3[21]).intl;
  string2 = intl2.string;
  t2 = tmp2(tmp3[21]).t;
  const tmp18Result4 = closure_12(Button2, obj12);
  const items11 = [tmp.soundPresentation, ];
  let prop = null;
  const obj13 = { startExpanded: true, onDismiss, children: closure_13(soundboardSoundPreviewMenuEnabled, obj22) };
  const ActionSheet = tmp2(tmp3[24]).ActionSheet;
  if (!tmp13 && stateFromStores2 && stateFromStores3) {
    prop = tmp.soundPresentationPlaying;
  }
  const obj14 = { style: items11, accessible: true, accessibilityLabel: sound.name, accessibilityValue: tmp28, children: items14 };
  items11[1] = prop;
  tmp28 = undefined;
  if (!tmp13 && stateFromStores2 && stateFromStores3) {
    const obj15 = { text: intl3.string(channel(soundGridLocation[21]).t.diasud) };
    intl3 = tmp2(tmp3[21]).intl;
    tmp28 = obj15;
  }
  const obj16 = { fastImageStyle: items12, textEmojiStyle: items13, src: sound(soundGridLocation[26])(sound, 64), name: str2 };
  items12 = [, ];
  ({ emoji: arr13[0], emojiFastImage: arr13[1] } = tmp);
  items13 = [, ];
  ({ emoji: arr14[0], emojiText: arr14[1] } = tmp);
  str2 = sound.emojiName;
  const tmp29 = sound(soundGridLocation[25]);
  if (str2 == null) {
    str2 = "";
  }
  items14 = [closure_12(tmp29, obj16), ];
  const obj17 = { style: tmp.text, variant: "heading-lg/extrabold", children: sound.name };
  items14[1] = closure_12(channel(soundGridLocation[27]).Text, obj17);
  const items15 = [closure_13(soundboardSoundPreviewMenuEnabled, obj14), ];
  const obj19 = { children: null };
  const obj18 = { style: tmp.buttonContainer, children: closure_13(tmp30, tmp31) };
  tmp30 = closure_14;
  if (soundboardSoundPreviewMenuEnabled) {
    let PlayIcon;
    const Button3 = tmp2(tmp3[18]).Button;
    if (isLocked) {
      PlayIcon = tmp2(tmp3[28]).LockIcon;
    } else {
      PlayIcon = tmp2(tmp3[29]).PlayIcon;
    }
    const obj20 = { variant: "primary", icon: closure_12(PlayIcon, obj21), text: intl4.string(channel(soundGridLocation[21]).t.RscU7I), disabled: isLocked, accessibilityHint: lockedAccessibilityHint, onPress: callback4, onPressDisabled: callback1 };
    obj21 = { style: tmp.primaryIcon };
    intl4 = tmp2(tmp3[21]).intl;
    const items16 = [closure_12(Button3, obj20), tmp18Result4, tmp18Result];
    obj19.children = items16;
    tmp31 = obj19;
  } else {
    const items17 = [tmp18Result, tmp18Result4];
    obj19.children = items17;
    tmp31 = obj19;
  }
  obj22 = { children: items15 };
  items15[1] = closure_12(soundboardSoundPreviewMenuEnabled, obj18);
  return closure_12(ActionSheet, obj13);
};
