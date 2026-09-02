// Module ID: 9189
// Function ID: 9190
// Name: useMaybeAddReactionMarketingEasterEggNote
// Dependencies: [9190, 2]
// Exports: default

// Module 9189 (useMaybeAddReactionMarketingEasterEggNote)
import set from "set" /* 2 */;
import useMaybeAddPollsMarketingEasterEggNoteDefault from "useMaybeAddPollsMarketingEasterEggNote" /* 9190 */;

const result = set.fileFinishedImporting("modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx");

export default function useMaybeAddReactionMarketingEasterEggNote(arg0) {
  let tmp = arg0;
  if (":pizza:" === arg0) {
    tmp = useMaybeAddPollsMarketingEasterEggNoteDefault(arg0);
  }
  return tmp;
};
