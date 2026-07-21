// Module ID: 15630
// Function ID: 119345
// Name: SoundboardSoundPreviewActionSheet
// Dependencies: []
// Exports: default

// Module 15630 (SoundboardSoundPreviewActionSheet)
let closure_3 = ["GUILD_DELETE"];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
({ View: closure_6, Image: closure_7 } = tmp2);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const AnalyticsObjects = arg1(dependencyMap[5]).AnalyticsObjects;
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { "Bool(false)": 24, "Bool(false)": 24, "Bool(false)": null, "Bool(false)": "2e77386663ba77387d021543bdafafef", marginTop: importDefault(dependencyMap[8]).space.PX_16 };
obj.emoji = obj;
obj.emojiFastImage = {};
const obj1 = {};
let obj4 = arg1(dependencyMap[9]);
let num;
if (obj4.isIOS()) {
  num = 60;
}
obj1.fontSize = num;
obj1.lineHeight = 74;
obj.emojiText = obj1;
const tmp3 = arg1(dependencyMap[6]);
obj.text = { marginTop: importDefault(dependencyMap[8]).space.PX_16, alignSelf: "center" };
const obj2 = { marginTop: importDefault(dependencyMap[8]).space.PX_16, alignSelf: "center" };
obj.buttonContainer = { gap: importDefault(dependencyMap[8]).space.PX_8, marginTop: importDefault(dependencyMap[8]).space.PX_24 };
obj4 = { tintColor: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT };
obj.star = obj4;
const obj3 = { gap: importDefault(dependencyMap[8]).space.PX_8, marginTop: importDefault(dependencyMap[8]).space.PX_24 };
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj.border = { borderRadius: importDefault(dependencyMap[8]).radii.round };
const obj5 = { borderRadius: importDefault(dependencyMap[8]).radii.round };
obj.borderPlaying = { borderColor: importDefault(dependencyMap[8]).colors.TEXT_FEEDBACK_POSITIVE };
let closure_13 = obj.createStyles(obj);
const obj6 = { borderColor: importDefault(dependencyMap[8]).colors.TEXT_FEEDBACK_POSITIVE };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx");

export default function SoundboardSoundPreviewActionSheet(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const sound = channelId.sound;
  const importDefault = sound;
  const tmp = callback3();
  let obj = arg1(closure_2[10]);
  const items = [closure_8];
  closure_2 = obj.useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    return id;
  });
  const analyticsLocations = importDefault(closure_2[11])().analyticsLocations;
  let closure_3 = analyticsLocations;
  let obj1 = arg1(closure_2[10]);
  const items1 = [closure_9];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => {
    const obj = {};
    let isUserPlayingSoundsResult = null != closure_2;
    if (isUserPlayingSoundsResult) {
      isUserPlayingSoundsResult = closure_9.isUserPlayingSounds(closure_2);
    }
    obj.isPlayingSound = isUserPlayingSoundsResult;
    obj.isFavorite = closure_9.isFavoriteSound(sound.soundId);
    return obj;
  });
  let borderPlaying = stateFromStoresObject.isPlayingSound;
  let callback = borderPlaying;
  const isFavorite = stateFromStoresObject.isFavorite;
  const React = isFavorite;
  const items2 = [isFavorite, sound, analyticsLocations];
  const items3 = [channelId, sound, borderPlaying];
  callback = React.useCallback(() => {
    if (isFavorite) {
      let tmpResult = tmp(tmp2[12]);
      tmpResult.removeFavoriteSound(sound.soundId);
    } else {
      tmpResult = tmp(tmp2[13]);
      let obj = { sound };
      obj = {};
      const merged = Object.assign(analyticsLocations);
      obj["object"] = constants.SOUNDBOARD_SOUND;
      obj.location = obj;
      tmpResult.trackSoundFavorited(obj);
      tmp(tmp2[12]).addFavoriteSound(sound.soundId);
      const tmpResult1 = tmp(tmp2[12]);
    }
  }, items2);
  const callback1 = React.useCallback(() => {
    if (!borderPlaying) {
      channelId(closure_2[12]).playSoundLocally(channelId, sound, channelId(closure_2[14]).LocalSoundTrigger.SOUNDBOARD);
      const obj = channelId(closure_2[12]);
    }
  }, items3);
  let obj2 = arg1(closure_2[15]);
  const buttonPressAnimationProps = obj2.useButtonPressAnimationProps();
  obj = { startExpanded: true };
  obj = {};
  obj1 = { fastImageStyle: items4, textEmojiStyle: items5 };
  const items4 = [, ];
  ({ emoji: arr5[0], emojiFastImage: arr5[1] } = tmp);
  const items5 = [, ];
  ({ emoji: arr6[0], emojiText: arr6[1] } = tmp);
  const tmp6 = callback(buttonPressAnimationProps, closure_3);
  const tmp8 = closure_12;
  const tmp9 = closure_6;
  obj1.src = importDefault(closure_2[18])(sound, 64);
  const emojiName = sound.emojiName;
  let str = "";
  if (null != emojiName) {
    str = emojiName;
  }
  obj1.name = str;
  const items6 = [callback2(importDefault(closure_2[17]), obj1), , ];
  obj2 = { style: tmp.text, variant: "heading-lg/extrabold", children: sound.name };
  items6[1] = callback2(arg1(closure_2[19]).Text, obj2);
  const obj3 = { style: tmp.buttonContainer };
  const obj4 = { variant: "primary" };
  if (isFavorite) {
    let StarOutlineIcon = tmp14(tmp15[21]).StarIcon;
  } else {
    StarOutlineIcon = tmp14(tmp15[22]).StarOutlineIcon;
  }
  obj4.icon = callback2(StarOutlineIcon, { style: tmp.star });
  const intl = arg1(closure_2[23]).intl;
  const string = intl.string;
  const t = arg1(closure_2[23]).t;
  if (isFavorite) {
    let stringResult = string(t.aBUcp3);
  } else {
    stringResult = string(t.yZFibY);
  }
  obj4.text = stringResult;
  obj4.onPress = callback;
  const items7 = [callback2(arg1(closure_2[20]).Button, obj4), ];
  const obj6 = {};
  const obj7 = {};
  const merged = Object.assign(tmp6);
  obj7["variant"] = "secondary";
  const obj5 = { style: tmp.star };
  const tmp10 = importDefault(closure_2[17]);
  const tmp12 = closure_12;
  const tmp13 = closure_6;
  const tmp17 = closure_12;
  const tmp18 = closure_6;
  const tmp19 = callback2;
  obj7["icon"] = callback2(closure_7, { style: tmp.star, source: importDefault(closure_2[24]) });
  const intl2 = arg1(closure_2[23]).intl;
  obj7["text"] = intl2.string(arg1(closure_2[23]).t.Kd4uxG);
  obj7["onPress"] = callback1;
  const items8 = [callback2(arg1(closure_2[20]).Button, obj7), ];
  const obj9 = {};
  const items9 = [tmp.border, , ];
  if (borderPlaying) {
    borderPlaying = tmp.borderPlaying;
  }
  items9[1] = borderPlaying;
  items9[2] = buttonPressAnimationProps.style;
  obj9.style = items9;
  items8[1] = tmp19(importDefault(closure_2[25]).View, obj9);
  obj6.children = items8;
  items7[1] = tmp17(tmp18, obj6);
  obj3.children = items7;
  items6[2] = tmp12(tmp13, obj3);
  obj.children = items6;
  obj.children = tmp8(tmp9, obj);
  return callback2(arg1(closure_2[16]).ActionSheet, obj);
};
