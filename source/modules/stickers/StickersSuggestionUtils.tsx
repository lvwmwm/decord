// Module ID: 4801
// Function ID: 41728
// Name: removePunctuation
// Dependencies: [2]
// Exports: getQueriesFromUserInput

// Module 4801 (removePunctuation)
function removePunctuation(str) {
  return str.replace(closure_0, "").replace(closure_1, " ");
}
const re0 = /(!|\.|;|,|-|—|–|\?|"|')/g;
const re1 = /(\n|\t|\s)/g;
const result = require("set").fileFinishedImporting("modules/stickers/StickersSuggestionUtils.tsx");

export { removePunctuation };
export const getQueriesFromUserInput = function getQueriesFromUserInput(arg0) {
  if (null == arg0) {
    let items = [];
  } else {
    const str = removePunctuation(arg0);
    items = removePunctuation(arg0).trim().split(" ");
    const str2 = removePunctuation(arg0).trim();
  }
  return items;
};
