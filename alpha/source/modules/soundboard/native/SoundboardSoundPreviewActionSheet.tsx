// Module ID: 19131
// Function ID: 19132
// Name: SoundboardSoundPreviewActionSheet
// Dependencies: [32, 19, 17, 4858, 1384, 6053, 1072, 21, 5009, 575, 1376, 19129, 19128, 19115, 504, 7511, 7519, 1253, 5629, 10042, 10040, 1114, 11041, 5712, 8189, 7360, 7294, 13379, 5619, 8659, 8839, 2]
// Exports: default

// Module 19131 (SoundboardSoundPreviewActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7511 */;
import SoundboardUtils from "SoundboardUtils" /* 7519 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 19115 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import UserStore from "UserStore" /* 1384 */;
import SoundboardStore from "SoundboardStore" /* 6053 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let map1;
let num;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
let size2;
let unpackModuleId;
const View = react_native.View;
({ AnalyticEvents: c9, AnalyticsObjects: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
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
let closure_14 = createStyles(obj);
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
  c10 = undefined;
  let tmp = closure_14();
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
  const items2 = [onDismiss];
  const stateFromStores = obj4.useStateFromStores(items2, () => {
    const currentUser = callback.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items3 = [stateFromStores];
  const obj5 = channel(soundGridLocation[14]);
  const stateFromStores1 = obj5.useStateFromStores(items3, () => SoundboardStore.isFavoriteSound(sound.soundId));
  const items4 = [stateFromStores];
  const items5 = [sound];
  const obj6 = channel(soundGridLocation[14]);
  const stateFromStores2 = obj6.useStateFromStores(items4, () => SoundboardStore.isPlayingSound(sound.soundId), items5);
  const items6 = [stateFromStores];
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
      obj2 = { object: _undefined.SOUNDBOARD_SOUND };
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
      const EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED = stateFromStores1.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED;
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
  const obj8 = { variant: str, icon: stateFromStores3(StarOutlineIcon, obj9), text: stringResult, onPress: callback2 };
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
  const tmp18Result = stateFromStores3(Button, obj8);
  const Button2 = tmp2(tmp3[18]).Button;
  if (tmp13) {
    const obj10 = { style: tmp.star };
    tmp18Result3 = tmp18(tmp2(tmp3[22]).WaveformIcon, obj10);
  } else {
    const obj11 = { style: tmp.star, source: sound(soundGridLocation[24]) };
    const tmp22 = sound(soundGridLocation[23]);
    tmp18Result3 = tmp18(tmp22, obj11);
  }
  const obj12 = { variant: "secondary", icon: tmp18Result3, text: string2(tmp13 ? t2.diasud : t2.Kd4uxG), onPress: callback3 };
  const intl2 = tmp2(tmp3[21]).intl;
  string2 = intl2.string;
  t2 = tmp2(tmp3[21]).t;
  const tmp18Result4 = stateFromStores3(Button2, obj12);
  const items11 = [tmp.soundPresentation, ];
  let prop = null;
  const obj13 = { startExpanded: true, onDismiss, children: closure_12(soundboardSoundPreviewMenuEnabled, obj22) };
  const ActionSheet = tmp2(tmp3[25]).ActionSheet;
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
  const obj16 = { fastImageStyle: items12, textEmojiStyle: items13, src: sound(soundGridLocation[27])(sound, 64), name: str2 };
  items12 = [, ];
  ({ emoji: arr13[0], emojiFastImage: arr13[1] } = tmp);
  items13 = [, ];
  ({ emoji: arr14[0], emojiText: arr14[1] } = tmp);
  str2 = sound.emojiName;
  const tmp29 = sound(soundGridLocation[26]);
  if (str2 == null) {
    str2 = "";
  }
  items14 = [stateFromStores3(tmp29, obj16), ];
  const obj17 = { style: tmp.text, variant: "heading-lg/extrabold", children: sound.name };
  items14[1] = stateFromStores3(channel(soundGridLocation[28]).Text, obj17);
  const items15 = [closure_12(soundboardSoundPreviewMenuEnabled, obj14), ];
  const obj19 = { children: null };
  const obj18 = { style: tmp.buttonContainer, children: closure_12(tmp30, tmp31) };
  tmp30 = closure_13;
  if (soundboardSoundPreviewMenuEnabled) {
    let PlayIcon;
    const Button3 = tmp2(tmp3[18]).Button;
    if (isLocked) {
      PlayIcon = tmp2(tmp3[29]).LockIcon;
    } else {
      PlayIcon = tmp2(tmp3[30]).PlayIcon;
    }
    const obj20 = { variant: "primary", icon: stateFromStores3(PlayIcon, obj21), text: intl4.string(channel(soundGridLocation[21]).t.RscU7I), disabled: isLocked, accessibilityHint: lockedAccessibilityHint, onPress: callback4, onPressDisabled: callback1 };
    obj21 = { style: tmp.primaryIcon };
    intl4 = tmp2(tmp3[21]).intl;
    const items16 = [stateFromStores3(Button3, obj20), tmp18Result4, tmp18Result];
    obj19.children = items16;
    tmp31 = obj19;
  } else {
    const items17 = [tmp18Result, tmp18Result4];
    obj19.children = items17;
    tmp31 = obj19;
  }
  obj22 = { children: items15 };
  items15[1] = stateFromStores3(soundboardSoundPreviewMenuEnabled, obj18);
  return stateFromStores3(ActionSheet, obj13);
};
