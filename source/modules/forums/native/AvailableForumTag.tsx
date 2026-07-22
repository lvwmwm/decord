// Module ID: 9851
// Function ID: 76270
// Name: AvailableForumTag
// Dependencies: []
// Exports: default

// Module 9851 (AvailableForumTag)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[2]).EMOJI_URL_BASE_SIZE;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { 1449366625: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040439468851276, 105995435: 37442662124804074000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 131072.00119209295, "Null": -0.0000000000000000019220782303981922, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032842137145942, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000065187710698453, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003911262643526144, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001513052729734563, "Null": 0.0000000000000000000000000000000000000000024910381827976072, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018700106487324, "Null": -0.0000000000000000000000000017165655764753322, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST, borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.pill = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.pillSelected = { borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, borderWidth: 1 };
obj.pillDisabled = { opacity: 0.6 };
obj.emoji = {};
obj.imageEmoji = { hideWhenScrolling: null, autoCapitalize: null };
obj.textEmoji = {};
let closure_8 = obj.createStyles(obj);
const obj1 = { borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, borderWidth: 1 };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/forums/native/AvailableForumTag.tsx");

export default function AvailableForumTag(tag) {
  let disabled;
  tag = tag.tag;
  const arg1 = tag;
  ({ onPress: closure_1, disabled } = tag);
  const dependencyMap = disabled;
  const selected = tag.selected;
  const React = selected;
  function handlePress() {
    if (!disabled) {
      callback(tag);
    }
  }
  const tmp = callback2();
  let closure_4 = tmp;
  ({ name: closure_5, emojiId: closure_6, emojiName: closure_7 } = tag);
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  const callback2 = obj.useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != closure_6) {
      usableCustomEmojiById = tmp.getUsableCustomEmojiById(closure_6);
    }
    return usableCustomEmojiById;
  });
  const items1 = [disabled, selected, tmp];
  let closure_9 = React.useMemo(() => {
    const items = [];
    items.push(tmp.pill);
    if (selected) {
      items.push(tmp.pillSelected);
    }
    if (disabled) {
      items.push(tmp.pillDisabled);
    }
    return items;
  }, items1);
  obj = {
    tagId: tag.id,
    children(ref) {
      let obj = Object.create(null);
      obj.ref = 0;
      const merged = Object.assign(ref, obj);
      obj = { style: closure_9, accessibilityRole: "button", accessibilityState: obj, disabled, ref: ref.ref };
      obj = { selected };
      const merged1 = Object.assign(merged);
      obj["onPress"] = handlePress;
      let tmp7Result = null != closure_8;
      if (!tmp7Result) {
        tmp7Result = null != closure_7;
      }
      if (tmp7Result) {
        const obj1 = {};
        ({ emoji: obj3.style, textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = tmp);
        let emojiURL;
        if (null != closure_8) {
          let obj3 = callback(disabled[10]);
          const obj2 = {};
          ({ id: obj5.id, animated: obj5.animated } = closure_8);
          obj2.size = closure_5;
          emojiURL = obj3.getEmojiURL(obj2);
        }
        obj1.src = emojiURL;
        let str = "";
        if (null != closure_7) {
          str = closure_7;
        }
        obj1.name = str;
        tmp7Result = callback2(callback(disabled[9]), obj1);
        const tmp10 = callback(disabled[9]);
        const tmp7 = callback2;
      }
      const items = [tmp7Result, ];
      obj3 = { cachedAt: true, edpbxy: true, children: closure_5 };
      items[1] = callback2(tag(disabled[11]).Text, obj3);
      obj["children"] = items;
      return closure_7(tag(disabled[8]).PressableScale, obj);
    }
  };
  return callback(importDefault(dependencyMap[7]), obj);
};
