// Module ID: 9381
// Function ID: 73132
// Name: useMaybeAddReactionMarketingEasterEggNote
// Dependencies: []
// Exports: default

// Module 9381 (useMaybeAddReactionMarketingEasterEggNote)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx");

export default function useMaybeAddReactionMarketingEasterEggNote(arg0) {
  let tmp = arg0;
  if (":pizza:" === arg0) {
    tmp = importDefault(dependencyMap[0])(arg0);
  }
  return tmp;
};
