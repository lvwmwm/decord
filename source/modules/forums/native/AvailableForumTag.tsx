// Module ID: 9890
// Function ID: 76505
// Name: AvailableForumTag
// Dependencies: [31, 4991, 1852, 33, 4130, 689, 566, 9681, 8416, 5151, 1392, 4126, 2]
// Exports: default

// Module 9890 (AvailableForumTag)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12, borderRadius: 20, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, margin: 6, borderWidth: 2, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, overflow: "hidden", height: 32 };
_createForOfIteratorHelperLoose.pill = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.pillSelected = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderWidth: 1 };
_createForOfIteratorHelperLoose.pillDisabled = { opacity: 0.6 };
_createForOfIteratorHelperLoose.emoji = { height: 18, width: 18, marginRight: 4, display: "flex", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.imageEmoji = { height: 16, width: 16 };
_createForOfIteratorHelperLoose.textEmoji = { fontSize: 14, lineHeight: 20 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderWidth: 1 };
const result = require("set").fileFinishedImporting("modules/forums/native/AvailableForumTag.tsx");

export default function AvailableForumTag(tag) {
  let EMOJI_URL_BASE_SIZE;
  let closure_6;
  let closure_7;
  let disabled;
  let importDefault;
  tag = tag.tag;
  ({ onPress: importDefault, disabled } = tag);
  const selected = tag.selected;
  function handlePress() {
    if (!disabled) {
      callback(tag);
    }
  }
  const tmp = _createForOfIteratorHelperLoose();
  let _isNativeReflectConstruct = tmp;
  ({ name: EMOJI_URL_BASE_SIZE, emojiId: closure_6, emojiName: closure_7 } = tag);
  let obj = tag(disabled[6]);
  let items = [_isNativeReflectConstruct];
  _createForOfIteratorHelperLoose = obj.useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != closure_6) {
      usableCustomEmojiById = tmp.getUsableCustomEmojiById(closure_6);
    }
    return usableCustomEmojiById;
  });
  const items1 = [disabled, selected, tmp];
  let closure_9 = selected.useMemo(() => {
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
        ({ emoji: obj3.style, textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = _isNativeReflectConstruct);
        let emojiURL;
        if (null != closure_8) {
          let obj3 = outer1_1(disabled[10]);
          const obj2 = {};
          ({ id: obj5.id, animated: obj5.animated } = closure_8);
          obj2.size = outer1_5;
          emojiURL = obj3.getEmojiURL(obj2);
        }
        obj1.src = emojiURL;
        let str = "";
        if (null != closure_7) {
          str = closure_7;
        }
        obj1.name = str;
        tmp7Result = outer1_6(outer1_1(disabled[9]), obj1);
        const tmp10 = outer1_1(disabled[9]);
        const tmp7 = outer1_6;
      }
      const items = [tmp7Result, ];
      obj3 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: closure_5 };
      items[1] = outer1_6(tag(disabled[11]).Text, obj3);
      obj["children"] = items;
      return outer1_7(tag(disabled[8]).PressableScale, obj);
    }
  };
  return callback(importDefault(disabled[7]), obj);
};
