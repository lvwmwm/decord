// Module ID: 10090
// Function ID: 10091
// Name: AppliedForumTag
// Dependencies: [19, 17, 5771, 1375, 21, 4836, 576, 504, 10091, 1115, 6551, 1397, 4832, 2]
// Exports: AppliedForumTagPill

// Module 10090 (AppliedForumTag)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import EmojiDefault from "Emoji" /* 6551 */;
import ForumTagContextMenuDefault from "ForumTagContextMenu" /* 10091 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let tmp5;
const Text_Text = tmp5(4832);
class AppliedForumTag {
  constructor(hasUnreads) {
    let c2;
    let c3;
    let c4;
    let container;
    let tag;
    let tagName;
    ({ tag, containerStyle: require } = hasUnreads);
    dependencyMap = undefined;
    c3 = undefined;
    c4 = undefined;
    hasUnreads = hasUnreads.hasUnreads;
    importDefault = closure_8();
    ({ name: c2, emojiId: c3, emojiName: c4 } = tag);
    const tmp = dependencyMap;
    let obj = get_initialized;
    let items = [c4];
    let closure_5 = obj.useStateFromStores(items, () => {
      let usableCustomEmojiById = null;
      if (null != c3) {
        usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
      }
      return usableCustomEmojiById;
    });
    let str = "text-muted";
    if (hasUnreads) {
      str = "text-default";
    }
    let obj2 = {
      tagId: tag.id,
      children(ref) {
        let emojiURL;
        let intl;
        let items;
        let items1;
        let obj2;
        ref = ref.ref;
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { style: items, accessible: true, accessibilityLabel: intl.formatToPlainString(intl2.t.tXXD6v, obj2), ref, children: items1 };
        items = [container.container, require];
        intl = intl2.intl;
        obj2 = { tagName };
        const merged1 = Object.assign(merged);
        str = c4;
        let tmp11Result = null != c4;
        const tmp2 = metroImportDefault;
        const tmp3 = View;
        const tmp7 = tagName;
        if (!tmp11Result) {
          tmp11Result = null != c3;
        }
        if (tmp11Result) {
          const obj4 = { textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
          ({ textEmoji: obj3.textEmojiStyle, emoji: obj3.fastImageStyle } = container);
          emojiURL = undefined;
          const tmp11 = metroRequire;
          const tmp12 = importDefault;
          const tmp13 = EmojiDefault;
          const tmp14 = closure_5;
          if (null != closure_5) {
            const obj6 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
            ({ id: obj5.id, animated: obj5.animated } = tmp14);
            const tmp12Result = tmp12(1397);
            emojiURL = tmp12Result.getEmojiURL(obj6);
          }
          if (str == null) {
            str = "";
          }
          tmp11Result = tmp11(tmp13, obj4);
        }
        items1 = [tmp11Result, ];
        const obj10 = { lineClamp: 1, style: container.tagName, variant: "text-xs/semibold", color: str, children: tmp7 };
        items1[1] = metroRequire(Text_Text.Text, obj10);
        return tmp2(tmp3, obj);
      }
    };
    return str(ForumTagContextMenuDefault, obj2);
  }
}
const View = react_native.View;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { pill: obj2, disableEndMargin: { marginRight: 0 }, emoji: { height: 12, width: 12, marginRight: 4, flexShrink: 0 }, textEmoji: { fontSize: 10, marginRight: 4 }, tagName: { flexShrink: 1 }, container: { display: "flex", flexDirection: "row", alignItems: "center" } };
obj2 = { height: 24, paddingHorizontal: 8, borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginRight: 4, flexShrink: 1 };
const metroImportAll = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/forums/native/AppliedForumTag.tsx");

export const AppliedForumTagPill = function AppliedForumTagPill(arg0) {
  let containerStyle;
  let disableEndMargin;
  let hasUnreads;
  let items;
  let tag;
  ({ tag, hasUnreads, containerStyle, disableEndMargin } = arg0);
  const tmp = closure_8();
  const obj = { tag, hasUnreads, containerStyle: items };
  items = [tmp.pill, containerStyle, disableEndMargin ? tmp.disableEndMargin : {}];
  return metroRequire(AppliedForumTag, obj);
};
export { AppliedForumTag };
