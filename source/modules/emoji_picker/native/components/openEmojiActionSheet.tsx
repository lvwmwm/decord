// Module ID: 9377
// Function ID: 73139
// Name: openEmojiActionSheet
// Dependencies: []
// Exports: openEmojiActionSheet

// Module 9377 (openEmojiActionSheet)
const EMOJI_URL_BASE_SIZE = require(dependencyMap[0]).EMOJI_URL_BASE_SIZE;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/emoji_picker/native/components/openEmojiActionSheet.tsx");

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
      const result = require(dependencyMap[2]).dismissGlobalKeyboard();
      const obj6 = importDefault(dependencyMap[3]);
      obj = {};
      obj.emojiNode = obj;
      obj6.openLazy(require(dependencyMap[5])(dependencyMap[4], dependencyMap.paths), "MessageEmojiActionSheet", obj, "stack");
    }
    obj = { id: uniqueName.id, alt: name };
    if (null != uniqueName.id) {
      let obj1 = importDefault(dependencyMap[1]);
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
