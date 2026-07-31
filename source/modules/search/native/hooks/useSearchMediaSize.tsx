// Module ID: 15505
// Function ID: 15506
// Name: useSearchMediaSize
// Dependencies: [9108, 2]
// Exports: default

// Module 15505 (useSearchMediaSize)
import MessageEmbedTypes from "MessageEmbedTypes";

let c0;
let closure_1;
let obj1;
({ SEARCH_LIST_HORIZONTAL_PADDING: c0, MEDIA_NUM_COLUMNS: closure_1, MEDIA_ITEM_GAP_WIDTH: obj1 } = MessageEmbedTypes);
const result = require("set").fileFinishedImporting("modules/search/native/hooks/useSearchMediaSize.tsx");

export default function useSearchMediaSize(arg0) {
  return Math.floor((arg0 - 2 * closure_0 - closure_2 * (closure_1 - 1)) / closure_1);
};
