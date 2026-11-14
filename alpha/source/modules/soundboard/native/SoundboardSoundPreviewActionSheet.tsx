// Module ID: 19223
// Function ID: 19224
// Name: SoundboardSoundPreviewActionSheet
// Dependencies: [32, 19, 17, 5155, 1388, 6369, 1072, 21, 5306, 575, 1380, 19221, 504, 7226, 13021, 1256, 7951, 1113, 7894, 14246, 5929, 5936, 8092, 7606, 11071, 6020, 16070, 10183, 10181, 2]
// Exports: default

// Module 19223 (SoundboardSoundPreviewActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7226 */;
import SoundboardUtils from "SoundboardUtils" /* 13021 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import UserStore from "UserStore" /* 1388 */;
import SoundboardStore from "SoundboardStore" /* 6369 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import size_mod from "module_2" /* 2 */;

let currentUser;

let c10;
let c9;
let closure_12;
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
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
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
let closure_13 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx");

export default function SoundboardSoundPreviewActionSheet(analyticsSource) {
  let PlayIcon;
  let StarOutlineIcon;
  let _undefined;
  let c5;
  let channel;
  let intl;
  let intl2;
  let isLocked;
  let items10;
  let items11;
  let items12;
  let items14;
  let lockedAccessibilityHint;
  let obj13;
  let obj18;
  let obj20;
  let onLockedPress;
  let sound;
  let str;
  let string;
  let string2Result;
  let t;
  let tmp10;
  let tmp15Result;
  let tmp19;
  ({ channel, sound } = analyticsSource);
  analyticsSource = analyticsSource.analyticsSource;
  c5 = undefined;
  let tmp = closure_13();
  let id = channel.id;
  let obj = sound(id[11]);
  const soundboardSoundLock = obj.useSoundboardSoundLock(sound, channel);
  ({ isLocked, lockedAccessibilityHint, onLockedPress } = soundboardSoundLock);
  let obj2 = sound(id[12]);
  let items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items1 = [SoundboardStore];
  const obj3 = sound(id[12]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => SoundboardStore.isFavoriteSound(sound.soundId));
  let obj4 = sound(id[12]);
  const items2 = [SoundboardStore];
  const items3 = [sound];
  const stateFromStores2 = obj4.useStateFromStores(items2, () => SoundboardStore.isPlayingSound(sound.soundId), items3);
  const items4 = [SoundboardStore];
  const items5 = [stateFromStores];
  const obj5 = sound(id[12]);
  let stateFromStores3 = obj5.useStateFromStores(items4, () => {
    const isUserPlayingSoundsResult = null != stateFromStores && SoundboardStore.isUserPlayingSounds(tmp);
    return isUserPlayingSoundsResult;
  }, items5);
  [tmp10, c5] = stateFromStores(stateFromStores1.useState(false), 2);
  const tmp9 = stateFromStores(stateFromStores1.useState(false), 2);
  if (tmp10) {
    tmp10 = stateFromStores3;
  }
  stateFromStores3 = tmp10;
  const items6 = [stateFromStores1, sound];
  const items7 = [id, sound, tmp10, analyticsSource];
  const callback = obj6.useCallback(() => {
    let obj2;
    if (stateFromStores1) {
      const tmpResult = SoundboardActionCreators;
      tmpResult.removeFavoriteSound(sound.soundId);
    } else {
      const obj = { sound, location: obj2 };
      obj2 = { object: constants2.SOUNDBOARD_SOUND };
      const tmpResult2 = SoundboardUtils;
      tmpResult2.trackSoundFavorited(obj);
      const obj4 = SoundboardActionCreators;
      obj4.addFavoriteSound(sound.soundId);
    }
  }, items6);
  const items8 = [sound, id, analyticsSource];
  const callback1 = obj6.useCallback(() => {
    let guild_id;
    let items;
    const tmp = stateFromStores3;
    if (!tmp) {
      _undefined(true);
      const obj = { sound_id: null, sound_name: null, sound_guild_id: null, location_guild_id: guild_id, location_stack: items };
      ({ soundId: obj.sound_id, name: obj.sound_name, guildId: obj.sound_guild_id } = sound);
      const track = AnalyticsUtilsDefault.track;
      const EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED = constants.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED;
      AnalyticsUtilsDefault;
      const channel = ChannelStore.getChannel(id);
      guild_id = undefined;
      const tmp10 = id;
      const tmp8 = sound;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      items = [analyticsSource];
      track(EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, obj);
      const obj2 = SoundboardActionCreators;
      obj2.playSoundLocally(tmp10, tmp8);
    }
  }, items7);
  const callback2 = obj6.useCallback(() => {
    _undefined(false);
    const items = [analyticsSource];
    const obj = SoundboardUtils;
    obj.playSound(sound, id, items);
  }, items8);
  const items9 = [tmp.soundPresentation, ];
  let prop = null;
  const ActionSheet = tmp2(tmp3[16]).ActionSheet;
  if (!tmp10 && stateFromStores2 && stateFromStores3) {
    prop = tmp.soundPresentationPlaying;
  }
  const obj7 = { style: items9, accessible: true, accessibilityLabel: sound.name, accessibilityValue: tmp19, children: items12 };
  items9[1] = prop;
  tmp19 = undefined;
  if (!tmp10 && stateFromStores2 && stateFromStores3) {
    const obj8 = { text: intl.string(sound(id[17]).t.diasud) };
    intl = tmp2(tmp3[17]).intl;
    tmp19 = obj8;
  }
  const obj9 = { fastImageStyle: items10, textEmojiStyle: items11, src: analyticsSource(id[19])(sound, 64), name: str };
  items10 = [, ];
  ({ emoji: arr11[0], emojiFastImage: arr11[1] } = tmp);
  items11 = [, ];
  ({ emoji: arr12[0], emojiText: arr12[1] } = tmp);
  str = sound.emojiName;
  const tmp21 = analyticsSource(id[18]);
  if (str == null) {
    str = "";
  }
  items12 = [closure_11(tmp21, obj9), ];
  const obj10 = { style: tmp.text, variant: "heading-lg/semibold", children: sound.name };
  items12[1] = closure_11(sound(id[20]).Text, obj10);
  const items13 = [tmp16(c5, obj7), ];
  const obj11 = { style: tmp.buttonContainer, children: items14 };
  const Button = tmp2(tmp3[21]).Button;
  if (isLocked) {
    PlayIcon = tmp2(tmp3[22]).LockIcon;
  } else {
    PlayIcon = tmp2(tmp3[23]).PlayIcon;
  }
  const obj12 = { variant: "primary", icon: closure_11(PlayIcon, obj13), text: intl2.string(sound(id[17]).t.RscU7I), disabled: isLocked, accessibilityHint: lockedAccessibilityHint, onPress: callback2, onPressDisabled: onLockedPress };
  obj13 = { style: tmp.primaryIcon };
  intl2 = tmp2(tmp3[17]).intl;
  items14 = [closure_11(Button, obj12), , ];
  const Button2 = tmp2(tmp3[21]).Button;
  if (tmp10) {
    const obj14 = { style: tmp.star };
    tmp15Result = tmp15(tmp2(tmp3[24]).WaveformIcon, obj14);
  } else {
    const obj15 = { style: tmp.star, source: analyticsSource(id[26]) };
    const tmp20Result = analyticsSource(id[25]);
    tmp15Result = tmp15(tmp20Result, obj15);
  }
  const obj16 = { variant: "secondary", icon: tmp15Result, text: string(tmp10 ? t.diasud : t.Kd4uxG), onPress: callback1 };
  const intl3 = tmp2(tmp3[17]).intl;
  string = intl3.string;
  t = tmp2(tmp3[17]).t;
  items14[1] = closure_11(Button2, obj16);
  const Button3 = tmp2(tmp3[21]).Button;
  if (stateFromStores1) {
    StarOutlineIcon = tmp2(tmp3[27]).StarIcon;
  } else {
    StarOutlineIcon = tmp2(tmp3[28]).StarOutlineIcon;
  }
  const obj17 = { variant: "secondary", icon: closure_11(StarOutlineIcon, obj18), text: string2Result, onPress: callback };
  obj18 = { style: tmp.star };
  const intl4 = tmp2(tmp3[17]).intl;
  const string2 = intl4.string;
  const t2 = tmp2(tmp3[17]).t;
  if (stateFromStores1) {
    string2Result = string2(t2.aBUcp3);
  } else {
    string2Result = string2(t2.yZFibY);
  }
  const obj19 = { startExpanded: true, children: closure_12(c5, obj20) };
  obj20 = { children: items13 };
  items14[2] = closure_11(Button3, obj17);
  items13[1] = closure_12(c5, obj11);
  return closure_11(ActionSheet, obj19);
};
