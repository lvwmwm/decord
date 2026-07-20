// Module ID: 9631
// Function ID: 75032
// Name: AppliedForumTag
// Dependencies: []
// Exports: AppliedForumTagPill

// Module 9631 (AppliedForumTag)
class AppliedForumTag {
  constructor(arg0) {
    ({ tag, containerStyle: closure_0 } = global);
    closure_6 = undefined;
    importDefault = closure_8();
    ({ name: closure_2, emojiId: closure_3, emojiName: closure_4 } = tag);
    obj = arg1(dependencyMap[7]);
    items = [];
    items[0] = closure_4;
    f75034 = obj.useStateFromStores(items, () => {
      let usableCustomEmojiById = null;
      if (null != closure_3) {
        usableCustomEmojiById = usableCustomEmojiById.getUsableCustomEmojiById(closure_3);
      }
      return usableCustomEmojiById;
    });
    str = "text-muted";
    if (global.hasUnreads) {
      str = "text-default";
    }
    closure_6 = str;
    obj = {
      tagId: tag.id,
      children(ref) {
            let obj = Object.create(null);
            obj.ref = 0;
            const merged = Object.assign(ref, obj);
            obj = { style: items, accessible: true };
            const items = [lib.container, callback];
            const intl = callback(closure_2[9]).intl;
            obj = { tagName: closure_2 };
            obj.accessibilityLabel = intl.formatToPlainString(callback(closure_2[9]).t.tXXD6v, obj);
            obj.ref = ref.ref;
            const merged1 = Object.assign(merged);
            let tmp8Result = null != closure_4;
            if (!tmp8Result) {
              tmp8Result = null != closure_3;
            }
            if (tmp8Result) {
              const obj1 = {};
              ({ textEmoji: obj3.textEmojiStyle, emoji: obj3.fastImageStyle } = lib);
              let emojiURL;
              if (null != closure_5) {
                let obj3 = lib(closure_2[11]);
                const obj2 = {};
                ({ id: obj5.id, animated: obj5.animated } = closure_5);
                obj2.size = closure_5;
                emojiURL = obj3.getEmojiURL(obj2);
              }
              obj1.src = emojiURL;
              let str = "";
              if (null != closure_4) {
                str = closure_4;
              }
              obj1.name = str;
              tmp8Result = str(lib(closure_2[10]), obj1);
              const tmp11 = lib(closure_2[10]);
              const tmp8 = str;
            }
            const items1 = [tmp8Result, ];
            obj3 = { style: lib.tagName, color: str, children: closure_2 };
            items1[1] = str(callback(closure_2[12]).Text, obj3);
            obj["children"] = items1;
            return closure_7(closure_3, obj);
          }
    };
    return closure_6(importDefault(dependencyMap[8]), obj);
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[3]).EMOJI_URL_BASE_SIZE;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_NORMAL, borderColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
obj.pill = obj;
obj.disableEndMargin = { marginRight: 0 };
obj.emoji = { GAME_JOIN: null, _handleRelationshipUpdate: "space-between", NEW_PERK_AVAILABLE: 8, setHubProgressActionComplete: 16 };
obj.textEmoji = {};
obj.tagName = { flexShrink: 1 };
obj.container = { "Bool(true)": 8, "Bool(true)": null, "Bool(true)": "\u270A\u{1F3FF}" };
let closure_8 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/forums/native/AppliedForumTag.tsx");

export const AppliedForumTagPill = function AppliedForumTagPill(arg0) {
  let containerStyle;
  let disableEndMargin;
  let hasUnreads;
  let tag;
  ({ tag, hasUnreads, containerStyle, disableEndMargin } = arg0);
  const tmp = callback2();
  containerStyle = [tmp.pill, , ];
  containerStyle[1] = containerStyle;
  containerStyle[2] = disableEndMargin ? tmp.disableEndMargin : {};
  return callback(AppliedForumTag, { tag, hasUnreads, containerStyle });
};
export { AppliedForumTag };
