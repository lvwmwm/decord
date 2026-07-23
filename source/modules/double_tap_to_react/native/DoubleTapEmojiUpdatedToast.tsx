// Module ID: 9339
// Function ID: 72977
// Name: ToastEmoji
// Dependencies: [31, 4122, 1852, 33, 4130, 689, 477, 566, 1392, 5151, 4126, 1212, 4528, 3843, 3831, 2]
// Exports: showDoubleTapEmojiUpdatedToast

// Module 9339 (ToastEmoji)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { EMOJI_URL_BASE_SIZE } from "set";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "set";
import set from "set";

const require = arg1;
class ToastEmoji {
  constructor(arg0) {
    emoji = global.emoji;
    obj = require("initialize");
    items = [];
    items[0] = c4;
    stateFromStores = obj.useStateFromStores(items, () => outer1_4.useReducedMotion);
    closure_1 = stateFromStores;
    tmp2 = c7();
    items1 = [, ];
    items1[0] = emoji;
    items1[1] = stateFromStores;
    memo = result.useMemo(() => {
      if (null != emoji.id) {
        let obj = stateFromStores(outer1_2[8]);
        obj = { id: emoji.id };
        let animated = !stateFromStores;
        if (animated) {
          animated = emoji.animated;
        }
        obj.animated = animated;
        obj.size = outer1_5;
        let url = obj.getEmojiURL(obj);
      } else {
        url = emoji.url;
      }
      return url;
    }, items1);
    tmp4 = jsx;
    obj = { style: tmp2.toastEmoji, fastImageStyle: tmp2.toastEmojiCustom, textEmojiStyle: tmp2.toastEmojiText };
    str = "";
    tmp5 = require("Emoji");
    if (null == emoji.id) {
      str = emoji.surrogates;
    }
    obj.name = str;
    obj.src = memo;
    return tmp4(tmp5, obj);
  }
}
function ToastText(emoji) {
  let obj = { variant: "text-sm/normal", style: _createForOfIteratorHelperLoose().toastText };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { emojiName: emoji.emoji.name };
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.nKY0Fl, obj);
  return jsx(require(4126) /* Text */.Text, { emojiName: emoji.emoji.name });
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8, marginVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.toastEmoji = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.toastEmojiCustom = { width: 24, height: 24 };
const obj1 = {};
let num = 16;
if (set.isIOS()) {
  num = 24;
}
obj1.fontSize = num;
let num2;
if (set.isIOS()) {
  num2 = 32;
}
obj1.lineHeight = num2;
obj1.textAlign = "center";
obj1.color = require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT;
_createForOfIteratorHelperLoose.toastEmojiText = obj1;
_createForOfIteratorHelperLoose.toastText = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_12, marginVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = set.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx");

export { ToastEmoji };
export const showDoubleTapEmojiUpdatedToast = function showDoubleTapEmojiUpdatedToast(emoji) {
  emoji = emoji.emoji;
  let obj = emoji(4528);
  if (obj.getIsScreenReaderEnabled()) {
    const AccessibilityAnnouncer = emoji(3843).AccessibilityAnnouncer;
    const intl = emoji(1212).intl;
    obj = { emojiName: emoji.name };
    AccessibilityAnnouncer.announce(intl.formatToPlainString(emoji(1212).t.nKY0Fl, obj));
  } else {
    obj = {
      key: "DEFAULT_REACTION_EMOJI_UPDATED",
      icon() {
          return outer1_6(outer1_8, { emoji });
        },
      content() {
          return outer1_6(outer1_9, { emoji });
        },
      toastDurationMs: 3000
    };
    importDefault(3831).open(obj);
    const obj2 = importDefault(3831);
  }
};
