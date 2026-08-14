// Module ID: 8801
// Function ID: 8802
// Name: useMaybeAddReactionMarketingEasterEggNote
// Dependencies: [8802, 2]
// Exports: default

// Module 8801 (useMaybeAddReactionMarketingEasterEggNote)
const result = require("set").fileFinishedImporting("modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx");

export default function useMaybeAddReactionMarketingEasterEggNote(arg0) {
  let tmp = arg0;
  if (":pizza:" === arg0) {
    tmp = importDefault(8802)(arg0);
  }
  return tmp;
};
