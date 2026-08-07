// Module ID: 8673
// Function ID: 8674
// Name: openEmojiActionSheet
// Dependencies: [1906, 1416, 1872, 4270, 8674, 1988, 2]
// Exports: openEmojiActionSheet

// Module 8673 (openEmojiActionSheet)
import { EMOJI_URL_BASE_SIZE } from "set";

let result = require("dismissGlobalKeyboard").fileFinishedImporting("modules/emoji_picker/native/components/openEmojiActionSheet.tsx");

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
      const result = require(1872) /* dismissGlobalKeyboard */.dismissGlobalKeyboard();
      const obj6 = importDefault(4270);
      obj = { emojiNode: null };
      obj[0] = obj;
      obj6.openLazy(require(1988) /* asyncRequireImpl */(8674, dependencyMap.paths), "MessageEmojiActionSheet", obj, "stack");
    }
    obj = { id: null, alt: null, src: null };
    obj[0] = uniqueName.id;
    obj[1] = name;
    if (null != uniqueName.id) {
      let obj1 = importDefault(1416);
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
