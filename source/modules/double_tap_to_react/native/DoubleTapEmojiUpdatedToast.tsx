// Module ID: 9331
// Function ID: 72923
// Name: ToastEmoji
// Dependencies: []
// Exports: showDoubleTapEmojiUpdatedToast

// Module 9331 (ToastEmoji)
class ToastEmoji {
  constructor(arg0) {
    emoji = global.emoji;
    arg1 = emoji;
    obj = arg1(dependencyMap[7]);
    items = [];
    items[0] = closure_4;
    stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    importDefault = stateFromStores;
    tmp2 = closure_7();
    items1 = [, ];
    items1[0] = emoji;
    items1[1] = stateFromStores;
    memo = importAll.useMemo(() => {
      if (null != emoji.id) {
        let obj = stateFromStores(closure_2[8]);
        obj = { id: emoji.id };
        let animated = !stateFromStores;
        if (animated) {
          animated = emoji.animated;
        }
        obj.animated = animated;
        obj.size = closure_5;
        let url = obj.getEmojiURL(obj);
      } else {
        url = emoji.url;
      }
      return url;
    }, items1);
    tmp4 = jsx;
    obj = { style: tmp2.toastEmoji, fastImageStyle: tmp2.toastEmojiCustom, textEmojiStyle: tmp2.toastEmojiText };
    str = "";
    tmp5 = importDefault(dependencyMap[9]);
    if (null == emoji.id) {
      str = emoji.surrogates;
    }
    obj.name = str;
    obj.src = memo;
    return tmp4(tmp5, obj);
  }
}
function ToastText(emoji) {
  let obj = { variant: "text-sm/normal", style: callback().toastText };
  const intl = arg1(dependencyMap[11]).intl;
  obj = { emojiName: emoji.emoji.name };
  obj.children = intl.format(arg1(dependencyMap[11]).t.nKY0Fl, obj);
  return jsx(arg1(dependencyMap[10]).Text, obj);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[2]).EMOJI_URL_BASE_SIZE;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { marginLeft: importDefault(dependencyMap[5]).space.PX_8, marginVertical: importDefault(dependencyMap[5]).space.PX_8 };
obj.toastEmoji = obj;
obj.toastEmojiCustom = {};
const obj1 = {};
let num = 16;
if (obj5.isIOS()) {
  num = 24;
}
obj1.fontSize = num;
const obj5 = arg1(dependencyMap[6]);
let num2;
if (obj6.isIOS()) {
  num2 = 32;
}
obj1.lineHeight = num2;
obj1.textAlign = "center";
obj1.color = importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT;
obj.toastEmojiText = obj1;
const obj6 = arg1(dependencyMap[6]);
obj.toastText = { marginRight: importDefault(dependencyMap[5]).space.PX_12, marginVertical: importDefault(dependencyMap[5]).space.PX_8 };
let closure_7 = obj.createStyles(obj);
const obj2 = { marginRight: importDefault(dependencyMap[5]).space.PX_12, marginVertical: importDefault(dependencyMap[5]).space.PX_8 };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx");

export { ToastEmoji };
export const showDoubleTapEmojiUpdatedToast = function showDoubleTapEmojiUpdatedToast(emoji) {
  emoji = emoji.emoji;
  const arg1 = emoji;
  let obj = arg1(dependencyMap[12]);
  if (obj.getIsScreenReaderEnabled()) {
    const AccessibilityAnnouncer = arg1(dependencyMap[13]).AccessibilityAnnouncer;
    const intl = arg1(dependencyMap[11]).intl;
    obj = { emojiName: emoji.name };
    AccessibilityAnnouncer.announce(intl.formatToPlainString(arg1(dependencyMap[11]).t.nKY0Fl, obj));
  } else {
    obj = {
      key: "DEFAULT_REACTION_EMOJI_UPDATED",
      icon() {
          return callback(closure_8, { emoji });
        },
      content() {
          return callback(closure_9, { emoji });
        },
      toastDurationMs: 3000
    };
    importDefault(dependencyMap[14]).open(obj);
    const obj2 = importDefault(dependencyMap[14]);
  }
};
