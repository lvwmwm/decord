// Module ID: 9644
// Function ID: 75114
// Name: AppliedForumTag
// Dependencies: [31, 27, 4991, 1852, 33, 4130, 689, 566, 9645, 1212, 5151, 1392, 4126, 2]
// Exports: AppliedForumTagPill

// Module 9644 (AppliedForumTag)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
class AppliedForumTag {
  constructor(arg0) {
    ({ tag, containerStyle } = global);
    c6 = undefined;
    closure_1 = c8();
    ({ name, emojiId, emojiName } = tag);
    obj = require("initialize");
    items = [];
    items[0] = emojiName;
    f75116 = obj.useStateFromStores(items, () => {
      let usableCustomEmojiById = null;
      if (null != closure_3) {
        usableCustomEmojiById = outer1_4.getUsableCustomEmojiById(closure_3);
      }
      return usableCustomEmojiById;
    });
    str = "text-muted";
    if (global.hasUnreads) {
      str = "text-default";
    }
    c6 = str;
    obj = {
      tagId: tag.id,
      children(ref) {
            let obj = Object.create(null);
            obj.ref = 0;
            const merged = Object.assign(ref, obj);
            obj = { style: items, accessible: true };
            items = [lib.container, closure_0];
            const intl = outer1_0(outer1_2[9]).intl;
            obj = { tagName: closure_2 };
            obj.accessibilityLabel = intl.formatToPlainString(outer1_0(outer1_2[9]).t.tXXD6v, obj);
            obj.ref = ref.ref;
            const merged1 = Object.assign(merged);
            let tmp8Result = null != _isNativeReflectConstruct;
            if (!tmp8Result) {
              tmp8Result = null != closure_3;
            }
            if (tmp8Result) {
              const obj1 = {};
              ({ textEmoji: obj3.textEmojiStyle, emoji: obj3.fastImageStyle } = lib);
              let emojiURL;
              if (null != closure_5) {
                let obj3 = lib(outer1_2[11]);
                const obj2 = {};
                ({ id: obj5.id, animated: obj5.animated } = closure_5);
                obj2.size = closure_5;
                emojiURL = obj3.getEmojiURL(obj2);
              }
              obj1.src = emojiURL;
              let str = "";
              if (null != _isNativeReflectConstruct) {
                str = _isNativeReflectConstruct;
              }
              obj1.name = str;
              tmp8Result = str(lib(outer1_2[10]), obj1);
              const tmp11 = lib(outer1_2[10]);
              const tmp8 = str;
            }
            const items1 = [tmp8Result, ];
            obj3 = { lineClamp: 1, style: lib.tagName, variant: "text-xs/semibold", color: str, children: closure_2 };
            items1[1] = str(outer1_0(outer1_2[12]).Text, obj3);
            obj["children"] = items1;
            return outer1_7(outer1_3, obj);
          }
    };
    return c6(require("ForumTagContextMenu"), obj);
  }
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 24, paddingHorizontal: 8, borderRadius: 20, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginRight: 4, flexShrink: 1 };
_createForOfIteratorHelperLoose.pill = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.disableEndMargin = { marginRight: 0 };
_createForOfIteratorHelperLoose.emoji = { height: 12, width: 12, marginRight: 4, flexShrink: 0 };
_createForOfIteratorHelperLoose.textEmoji = { fontSize: 10, marginRight: 4 };
_createForOfIteratorHelperLoose.tagName = { flexShrink: 1 };
_createForOfIteratorHelperLoose.container = { display: "flex", flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forums/native/AppliedForumTag.tsx");

export const AppliedForumTagPill = function AppliedForumTagPill(arg0) {
  let containerStyle;
  let disableEndMargin;
  let hasUnreads;
  let tag;
  ({ tag, hasUnreads, containerStyle, disableEndMargin } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  containerStyle = [tmp.pill, , ];
  containerStyle[1] = containerStyle;
  containerStyle[2] = disableEndMargin ? tmp.disableEndMargin : {};
  return callback(AppliedForumTag, { tag, hasUnreads, containerStyle });
};
export { AppliedForumTag };
