// Module ID: 15758
// Function ID: 121600
// Name: SoundboardSoundPreviewActionSheet
// Dependencies: [29, 31, 27, 1849, 4578, 653, 33, 4130, 689, 477, 566, 5464, 5733, 5739, 4585, 4548, 5500, 5151, 11079, 4126, 4543, 9395, 9397, 1212, 7594, 3991, 2]
// Exports: default

// Module 15758 (SoundboardSoundPreviewActionSheet)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { AnalyticsObjects } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "get ActivityIndicator";

let closure_11;
let closure_12;
let closure_6;
let closure_7;
const require = arg1;
let closure_3 = ["style"];
({ View: closure_6, Image: closure_7 } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, width: 64, height: 64, alignSelf: "center" };
_createForOfIteratorHelperLoose.emoji = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.emojiFastImage = { width: 128, height: 128 };
let obj1 = {};
let num;
if (set.isIOS()) {
  num = 60;
}
obj1.fontSize = num;
obj1.lineHeight = 74;
_createForOfIteratorHelperLoose.emojiText = obj1;
_createForOfIteratorHelperLoose.text = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, alignSelf: "center" };
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, alignSelf: "center" };
_createForOfIteratorHelperLoose.buttonContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
set = { width: 16, height: 16, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.star = set;
let obj5 = { borderColor: "transparent", borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, pointerEvents: "none" };
let merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose.border = obj5;
let obj3 = { gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.borderPlaying = { borderColor: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_POSITIVE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = set.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx");

export default function SoundboardSoundPreviewActionSheet(channelId) {
  channelId = channelId.channelId;
  const sound = channelId.sound;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channelId(566);
  const items = [_isNativeReflectConstruct];
  const dependencyMap = obj.useStateFromStores(items, () => {
    const currentUser = outer1_8.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    return id;
  });
  const analyticsLocations = sound(5464)().analyticsLocations;
  let obj1 = channelId(566);
  const items1 = [closure_9];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => {
    const obj = {};
    let isUserPlayingSoundsResult = null != closure_2;
    if (isUserPlayingSoundsResult) {
      isUserPlayingSoundsResult = outer1_9.isUserPlayingSounds(closure_2);
    }
    obj.isPlayingSound = isUserPlayingSoundsResult;
    obj.isFavorite = outer1_9.isFavoriteSound(sound.soundId);
    return obj;
  });
  let borderPlaying = stateFromStoresObject.isPlayingSound;
  const isFavorite = stateFromStoresObject.isFavorite;
  const items2 = [isFavorite, sound, analyticsLocations];
  const items3 = [channelId, sound, borderPlaying];
  const callback = isFavorite.useCallback(() => {
    if (isFavorite) {
      let tmpResult = tmp(tmp2[12]);
      tmpResult.removeFavoriteSound(sound.soundId);
    } else {
      tmpResult = tmp(tmp2[13]);
      let obj = { sound };
      obj = {};
      const merged = Object.assign(analyticsLocations);
      obj["object"] = outer1_10.SOUNDBOARD_SOUND;
      obj.location = obj;
      tmpResult.trackSoundFavorited(obj);
      tmp(tmp2[12]).addFavoriteSound(sound.soundId);
      const tmpResult1 = tmp(tmp2[12]);
    }
  }, items2);
  const callback1 = isFavorite.useCallback(() => {
    if (!borderPlaying) {
      channelId(5733).playSoundLocally(channelId, sound, channelId(4585).LocalSoundTrigger.SOUNDBOARD);
      const obj = channelId(5733);
    }
  }, items3);
  let obj2 = channelId(4548);
  const buttonPressAnimationProps = obj2.useButtonPressAnimationProps();
  obj = { startExpanded: true };
  obj = {};
  obj1 = { fastImageStyle: items4, textEmojiStyle: items5 };
  items4 = [, ];
  ({ emoji: arr5[0], emojiFastImage: arr5[1] } = tmp);
  items5 = [, ];
  ({ emoji: arr6[0], emojiText: arr6[1] } = tmp);
  const tmp6 = borderPlaying(buttonPressAnimationProps, analyticsLocations);
  const tmp8 = closure_12;
  const tmp9 = closure_6;
  obj1.src = sound(11079)(sound, 64);
  const emojiName = sound.emojiName;
  let str = "";
  if (null != emojiName) {
    str = emojiName;
  }
  obj1.name = str;
  const items6 = [callback(sound(5151), obj1), , ];
  obj2 = { style: tmp.text, variant: "heading-lg/extrabold", children: sound.name };
  items6[1] = callback(channelId(4126).Text, obj2);
  const obj3 = { style: tmp.buttonContainer };
  const obj4 = { variant: "primary" };
  if (isFavorite) {
    let StarOutlineIcon = tmp14(9395).StarIcon;
  } else {
    StarOutlineIcon = tmp14(9397).StarOutlineIcon;
  }
  obj4.icon = callback(StarOutlineIcon, { style: tmp.star });
  const intl = channelId(1212).intl;
  const string = intl.string;
  const t = channelId(1212).t;
  if (isFavorite) {
    let stringResult = string(t.aBUcp3);
  } else {
    stringResult = string(t.yZFibY);
  }
  obj4.text = stringResult;
  obj4.onPress = callback;
  const items7 = [callback(channelId(4543).Button, obj4), ];
  const obj6 = {};
  const obj7 = {};
  let merged = Object.assign(tmp6);
  obj7["variant"] = "secondary";
  const obj5 = { style: tmp.star };
  const tmp10 = sound(5151);
  const tmp12 = closure_12;
  const tmp13 = closure_6;
  const tmp17 = closure_12;
  const tmp18 = closure_6;
  const tmp19 = callback;
  obj7["icon"] = callback(closure_7, { style: tmp.star, source: sound(7594) });
  const intl2 = channelId(1212).intl;
  obj7["text"] = intl2.string(channelId(1212).t.Kd4uxG);
  obj7["onPress"] = callback1;
  const items8 = [callback(channelId(4543).Button, obj7), ];
  const obj9 = {};
  const items9 = [tmp.border, , ];
  if (borderPlaying) {
    borderPlaying = tmp.borderPlaying;
  }
  items9[1] = borderPlaying;
  items9[2] = buttonPressAnimationProps.style;
  obj9.style = items9;
  items8[1] = tmp19(sound(3991).View, obj9);
  obj6.children = items8;
  items7[1] = tmp17(tmp18, obj6);
  obj3.children = items7;
  items6[2] = tmp12(tmp13, obj3);
  obj.children = items6;
  obj.children = tmp8(tmp9, obj);
  return callback(channelId(5500).ActionSheet, obj);
};
