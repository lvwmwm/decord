// Module ID: 9354
// Function ID: 73019
// Name: getEmojiPickerDataRowItemSlimEmoji
// Dependencies: [0, 0, 0]
// Exports: default

// Module 9354 (getEmojiPickerDataRowItemSlimEmoji)
import result from "result";

result = result.fileFinishedImporting("modules/emoji_picker/native/components/data/getEmojiPickerDataRowItemSlimEmoji.tsx");

export default function getEmojiPickerDataRowItemSlimEmoji(isSectionNitroLocked) {
  const require = isSectionNitroLocked;
  const emojis = isSectionNitroLocked.emojis;
  return {
    type: require(dependencyMap[0]).EmojiPickerItemType.EMOJI_ROW_SLIM,
    emojis: emojis.map((type) => {
      if (type.type === type(closure_1[1]).EmojiTypes.UNICODE) {
        let obj = {};
        ({ name: obj5.name, surrogates: obj5.surrogates } = type);
        return obj;
      } else {
        const emojisDisabled = type.emojisDisabled;
        const hasItem = emojisDisabled.has(type.id);
        if (type.animated) {
          if (hasItem) {
            obj = {};
            ({ id: obj4.id, name: obj4.name } = type);
            obj.animated = true;
            obj.disabled = true;
          }
          return obj;
        }
        if (type.animated) {
          const obj1 = {};
          ({ id: obj3.id, name: obj3.name } = type);
          obj1.animated = true;
          obj = obj1;
        } else if (hasItem) {
          const obj2 = {};
          ({ id: obj2.id, name: obj2.name } = type);
          obj2.disabled = true;
          obj = obj2;
        } else {
          obj = {};
          ({ id: obj.id, name: obj.name } = type);
        }
      }
    }),
    isSectionNitroLocked: true === isSectionNitroLocked.isSectionNitroLocked
  };
};
