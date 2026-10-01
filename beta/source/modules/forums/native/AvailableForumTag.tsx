// Module ID: 10819
// Function ID: 10820
// Name: AvailableForumTag
// Dependencies: [19, 5771, 1375, 21, 4836, 576, 504, 10091, 8370, 6551, 1397, 4832, 2]
// Exports: default

// Module 10819 (AvailableForumTag)
import nativeDefault from "native" /* 576 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import EmojiDefault from "Emoji" /* 6551 */;
import native from "native" /* 8370 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp3;
const Text_Text = tmp3(4832);
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { pill: obj2, pillSelected: obj3, pillDisabled: { opacity: 0.6 }, emoji: { height: 18, width: 18, marginRight: 4, display: "flex", alignItems: "center", justifyContent: "center" }, imageEmoji: { height: 16, width: 16 }, textEmoji: { fontSize: 14, lineHeight: 20 } };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12, borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 6, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden", height: 32 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderWidth: 1 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/forums/native/AvailableForumTag.tsx");

export default function AvailableForumTag(tag) {
  let c5;
  let c6;
  let c7;
  let children;
  let disabled;
  tag = tag.tag;
  ({ onPress: importDefault, disabled } = tag);
  const selected = tag.selected;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  closure_8 = undefined;
  function handlePress() {
    const tmp = disabled;
    if (!tmp) {
      importDefault(tag);
    }
  }
  let tmp = closure_8();
  const pill = tmp;
  ({ name: c5, emojiId: c6, emojiName: c7 } = tag);
  let obj = tag(disabled[6]);
  let items = [pill];
  closure_8 = obj.useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != c6) {
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
    }
    return usableCustomEmojiById;
  });
  const items1 = [disabled, selected, tmp];
  const style = selected.useMemo(() => {
    const items = [];
    items.push(pill.pill);
    const tmp3 = selected;
    if (tmp3) {
      items.push(pill.pillSelected);
    }
    const tmp5 = disabled;
    if (tmp5) {
      items.push(pill.pillDisabled);
    }
    return items;
  }, items1);
  let obj2 = {
    tagId: tag.id,
    children(ref) {
      let emojiURL;
      let items;
      let obj2;
      let str;
      ref = ref.ref;
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { style, accessibilityRole: "button", accessibilityState: obj2, disabled, ref, onPress: handlePress, children: items };
      obj2 = { selected };
      const PressableScale = native.PressableScale;
      const merged1 = Object.assign(merged);
      let tmp9Result = null != closure_8;
      const tmp2 = metroImportDefault;
      if (!tmp9Result) {
        tmp9Result = null != c7;
      }
      if (tmp9Result) {
        const obj4 = { style: null, textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
        ({ emoji: obj3.style, textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = pill);
        emojiURL = undefined;
        const tmp10 = importDefault;
        const tmp11 = EmojiDefault;
        const tmp9 = metroRequire;
        if (null != closure_8) {
          const obj6 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
          ({ id: obj5.id, animated: obj5.animated } = closure_8);
          const tmp10Result = tmp10(1397);
          emojiURL = tmp10Result.getEmojiURL(obj6);
        }
        str = c7;
        if (c7 == null) {
          str = "";
        }
        tmp9Result = tmp9(tmp11, obj4);
      }
      items = [tmp9Result, ];
      const obj10 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children };
      items[1] = metroRequire(Text_Text.Text, obj10);
      return tmp2(PressableScale, obj);
    }
  };
  return c6(require("ForumTagContextMenu"), obj2);
};
