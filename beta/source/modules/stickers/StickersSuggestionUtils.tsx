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
  return str.replace(re0, "").replace(re1, " ");
};
export const getQueriesFromUserInput = function getQueriesFromUserInput(str) {
  if (null == str) {
    let items = [];
  } else {
    const str2 = str.replace(re0, "");
    const str4 = str.replace(re0, "").replace(re1, " ");
    items = str.replace(re0, "").replace(re1, " ").trim().split(" ");
    const str5 = str.replace(re0, "").replace(re1, " ").trim();
  }
  return items;
};
