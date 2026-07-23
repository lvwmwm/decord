// Module ID: 9384
// Function ID: 73180
// Name: openEmojiActionSheet
// Dependencies: [1852, 1392, 1820, 4098, 9385, 1934, 2]
// Exports: openEmojiActionSheet

// Module 9384 (openEmojiActionSheet)
import { EMOJI_URL_BASE_SIZE } from "set";

let result = require("dismissGlobalKeyboard").fileFinishedImporting("modules/emoji_picker/native/components/openEmojiActionSheet.tsx");

export const openEmojiActionSheet = function openEmojiActionSheet(uniqueName) {
  if (null != uniqueName.uniqueName) {
    if ("" !== uniqueName.uniqueName) {
      let name = uniqueName.uniqueName;
    }
    if (null == uniqueName.id) {
      if (null != uniqueName.surrogates) {
        let obj = { surrogate: uniqueName.surrogates };
        const _HermesInternal = HermesInternal;
        obj.content = ":" + name + ":";
      }
      const result = require(1820) /* dismissGlobalKeyboard */.dismissGlobalKeyboard();
      const obj6 = importDefault(4098);
      obj = {};
      obj.emojiNode = obj;
      obj6.openLazy(require(1934) /* maybeLoadBundle */(9385, dependencyMap.paths), "MessageEmojiActionSheet", obj, "stack");
    }
    obj = { id: uniqueName.id, alt: name };
    if (null != uniqueName.id) {
      let obj1 = importDefault(1392);
      obj1 = {};
      ({ id: obj3.id, animated: obj3.animated } = uniqueName);
      obj1.size = EMOJI_URL_BASE_SIZE;
      let url = obj1.getEmojiURL(obj1);
    } else {
      url = uniqueName.url;
    }
    obj.src = url;
  }
  name = uniqueName.name;
};
