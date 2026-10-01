// Module ID: 5582
// Function ID: 5583
// Name: StickersSuggestionUtils
// Dependencies: [2]
// Exports: getQueriesFromUserInput, removePunctuation

// Module 5582 (StickersSuggestionUtils)
import size from "module_2" /* 2 */;

const re0 = /(!|\.|;|,|-|—|–|\?|"|')/g;
const re1 = /(\n|\t|\s)/g;
const result = size.fileFinishedImporting("modules/stickers/StickersSuggestionUtils.tsx");

export const removePunctuation = function removePunctuation(str) {
  str = str.replace(re0, "");
  return str.replace(re1, " ");
};
export const getQueriesFromUserInput = function getQueriesFromUserInput(str) {
  let items;
  if (null == str) {
    items = [];
  } else {
    const str2 = str.replace(re0, "");
    const str4 = str2.replace(re1, " ");
    const str5 = str4.trim();
    items = str5.split(" ");
  }
  return items;
};
