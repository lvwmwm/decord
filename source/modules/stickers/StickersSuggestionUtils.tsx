// Module ID: 4798
// Function ID: 41710
// Name: removePunctuation
// Dependencies: []
// Exports: getQueriesFromUserInput

// Module 4798 (removePunctuation)
function removePunctuation(str) {
  return str.replace(closure_0, "").replace(closure_1, " ");
}
let closure_0 = /(!|\.|;|,|-|—|–|\?|"|')/g;
let closure_1 = /(\n|\t|\s)/g;
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/stickers/StickersSuggestionUtils.tsx");

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
