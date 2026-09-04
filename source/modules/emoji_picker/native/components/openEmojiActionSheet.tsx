// Module ID: 10257
// Function ID: 10258
// Name: openEmojiActionSheet
// Dependencies: [1924, 1431, 1890, 4448, 10258, 2008, 2]
// Exports: openEmojiActionSheet

// Module 10257 (openEmojiActionSheet)
import set from "set" /* 2 */;
import getAvatarURLDefault from "getAvatarURL" /* 1431 */;
import dismissGlobalKeyboard from "dismissGlobalKeyboard" /* 1890 */;
import set2 from "set" /* 1924 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

const EMOJI_URL_BASE_SIZE = set2.EMOJI_URL_BASE_SIZE;
let result = set.fileFinishedImporting("modules/emoji_picker/native/components/openEmojiActionSheet.tsx");

export const openEmojiActionSheet = function openEmojiActionSheet(uniqueName) {
  if (null != uniqueName.uniqueName) {
    if ("" !== uniqueName.uniqueName) {
      let name = uniqueName.uniqueName;
    }
    if (null == uniqueName.id) {
      if (null != uniqueName.surrogates) {
        let obj = { surrogate: null, content: null };
        obj[0] = uniqueName.surrogates;
        const _HermesInternal = HermesInternal;
        obj[1] = ":" + name + ":";
      }
      const result = dismissGlobalKeyboard.dismissGlobalKeyboard();
      const obj6 = ACTION_SHEET_HEIGHT_HALFDefault;
      obj = { emojiNode: null };
      obj[0] = obj;
      obj6.openLazy(asyncRequireImpl(10258, dependencyMap.paths), "MessageEmojiActionSheet", obj, "stack");
    }
    obj = { id: null, alt: null, src: null };
    obj[0] = uniqueName.id;
    obj[1] = name;
    if (null != uniqueName.id) {
      obj1 = getAvatarURLDefault;
      obj1 = { id: null, animated: null, size: null };
      ({ id: obj3[0], animated: obj3[1] } = uniqueName);
      obj1[2] = EMOJI_URL_BASE_SIZE;
      let url = obj1.getEmojiURL(obj1);
    } else {
      url = uniqueName.url;
    }
    obj[2] = url;
  }
  name = uniqueName.name;
};
