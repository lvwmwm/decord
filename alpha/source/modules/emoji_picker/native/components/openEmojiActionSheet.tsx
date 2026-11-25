// Module ID: 9712
// Function ID: 9713
// Name: openEmojiActionSheet
// Dependencies: [1389, 1412, 2018, 5226, 9713, 2119, 2]
// Exports: openEmojiActionSheet

// Module 9712 (openEmojiActionSheet)
import EmojiConstants from "EmojiConstants" /* 1389 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 2018 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/openEmojiActionSheet.tsx");

export function openEmojiActionSheet(uniqueName) {
  let url;
  if (null != uniqueName.uniqueName) {
    let name;
    if ("" !== uniqueName.uniqueName) {
      name = uniqueName.uniqueName;
    }
    if (null == uniqueName.id) {
      let obj;
      if (null != uniqueName.surrogates) {
        const _HermesInternal = HermesInternal;
        obj = { surrogate: uniqueName.surrogates, content: ":" + name + ":" };
        const obj4 = { surrogate: uniqueName.surrogates, content: ":" + name + ":" };
      }
      const obj5 = KeyboardManagerUtils;
      const result = obj5.dismissGlobalKeyboard();
      const obj6 = ActionSheetActionCreatorsDefault;
      const obj7 = { emojiNode: obj };
      obj6.openLazy(asyncRequire(9713, dependencyMap.paths), "MessageEmojiActionSheet", obj7, "stack");
    }
    obj = { id: uniqueName.id, alt: name, src: url };
    if (null != uniqueName.id) {
      const obj10 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
      ({ id: obj3.id, animated: obj3.animated } = uniqueName);
      const obj2 = AvatarUtilsDefault;
      url = obj2.getEmojiURL(obj10);
    } else {
      url = uniqueName.url;
    }
  }
  name = uniqueName.name;
}
