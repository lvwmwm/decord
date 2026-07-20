// Module ID: 9934
// Function ID: 76860
// Name: DoubleTapEmojiEditNudgeInner
// Dependencies: []
// Exports: DoubleTapEmojiEditNudge

// Module 9934 (DoubleTapEmojiEditNudgeInner)
function DoubleTapEmojiEditNudgeInner(location) {
  const _location = location.location;
  const arg1 = _location;
  const emoji = location.emoji;
  const importDefault = emoji;
  let obj = arg1(closure_2[12]);
  closure_2 = obj.useAppEntryKey();
  let obj1 = arg1(closure_2[13]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let closure_3 = stateFromStores;
  const tmp3 = callback3(callback((arg0) => arg0.byAppEntry[closure_2].fontScale));
  const items1 = [emoji, stateFromStores];
  const items2 = [_location];
  const memo = React.useMemo(() => {
    if (null != emoji.id) {
      let obj = emoji(closure_2[14]);
      obj = { id: emoji.id, size: closure_9 };
      let animated = !stateFromStores;
      if (animated) {
        animated = emoji.animated;
      }
      obj.animated = animated;
      let url = obj.getEmojiURL(obj);
    } else {
      url = emoji.url;
    }
    return url;
  }, items1);
  obj = { style: tmp3.doubleTapEmojiEditNudgeContainer };
  const callback = React.useCallback(() => {
    let obj = _location(closure_2[15]);
    obj = { pickerIntention: constants.DEFAULT_REACT_EMOJI };
    // CreateGeneratorClosureLongIndex (0x67)
    const _location = stateFromStores(tmp);
    obj.onPressEmoji = function() {
      return callback(...arguments);
    };
    obj.startExpanded = true;
    const result = obj.openEmojiPickerActionSheet(obj, "stack");
  }, items2);
  obj = { "Bool(false)": true, "Bool(false)": "/assets/images/native/community" };
  const intl = arg1(closure_2[19]).intl;
  obj.children = intl.string(arg1(closure_2[19]).t.1EUr/W);
  const items3 = [callback2(arg1(closure_2[18]).Text, obj), , ];
  obj1 = { style: tmp3.doubleTapEmojiContainer, fastImageStyle: tmp3.doubleTapCustomEmoji, textEmojiStyle: tmp3.doubleTapTextEmoji, src: memo };
  let str = "";
  const tmp = callback((arg0) => arg0.byAppEntry[closure_2].fontScale);
  const tmp6 = closure_12;
  const tmp7 = View;
  const tmp8 = callback2;
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj1.name = str;
  items3[1] = tmp8(importDefault(closure_2[20]), obj1);
  const obj2 = { accessibilityRole: "button", onPress: callback, hitSlop: closure_13, style: tmp3.editButton };
  const obj3 = {};
  const intl2 = arg1(closure_2[19]).intl;
  obj3.children = intl2.string(arg1(closure_2[19]).t.bt75uw);
  obj2.children = callback2(arg1(closure_2[18]).Text, obj3);
  items3[2] = callback2(arg1(closure_2[21]).PressableOpacity, obj2);
  obj.children = items3;
  return tmp6(tmp7, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
({ EMOJI_URL_BASE_SIZE: closure_9, EmojiIntention: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let closure_13 = {};
const tmp3 = arg1(dependencyMap[7]);
let closure_14 = arg1(dependencyMap[8]).createStyles((arg0) => {
  let obj = {};
  obj = { marginHorizontal: importDefault(dependencyMap[9]).space.PX_4 };
  obj.doubleTapEmojiContainer = obj;
  obj = { fontSize: 12 * arg0, color: importDefault(dependencyMap[9]).colors.INTERACTIVE_TEXT_DEFAULT };
  obj.doubleTapTextEmoji = obj;
  obj.doubleTapCustomEmoji = { height: 16 * arg0, width: 16 * arg0 };
  obj.doubleTapEmojiEditNudgeContainer = { marginTop: importDefault(dependencyMap[9]).space.PX_8 };
  const obj1 = { height: 16 * arg0, width: 16 * arg0 };
  const obj2 = { marginTop: importDefault(dependencyMap[9]).space.PX_8 };
  obj.editButton = { marginHorizontal: importDefault(dependencyMap[9]).space.PX_4 };
  return obj;
});
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx");

export const DoubleTapEmojiEditNudge = function DoubleTapEmojiEditNudge(location) {
  const _location = location.location;
  const DoubleTapReactionEmoji = arg1(dependencyMap[10]).DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.useSetting();
  const arg1 = setting;
  const items = [setting];
  const memo = React.useMemo(() => setting(closure_2[11]).disambiguatedEmojiFromSettingsValue(setting), items);
  const memo1 = React.useMemo(() => setting(closure_2[11]).getFallbackDoubleTapDisambiguatedEmoji(), []);
  [][0] = setting;
  let tmp5 = null;
  if (true === setting.disableDoubleTap) {
    return null;
  } else {
    if (!tmp4) {
      if (tmp5 != memo1) {
        let obj = { location: _location, emoji: memo1 };
        let tmp8 = callback2(DoubleTapEmojiEditNudgeInner, obj);
      }
    }
    tmp5 = null;
    if (tmp9) {
      obj = { location: _location, emoji: memo };
      tmp5 = callback2(DoubleTapEmojiEditNudgeInner, obj);
    }
    tmp8 = tmp5;
    const tmp9 = tmp5 != memo;
  }
};
