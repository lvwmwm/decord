// Module ID: 9113
// Function ID: 9114
// Name: useMaybeAddReactionMarketingEasterEggNote
// Dependencies: [9114, 2]
// Exports: default

// Module 9113 (useMaybeAddReactionMarketingEasterEggNote)
import set from "set" /* 2 */;
import useMaybeAddPollsMarketingEasterEggNoteDefault from "useMaybeAddPollsMarketingEasterEggNote" /* 9114 */;

const result = set.fileFinishedImporting("modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx");

export default function useMaybeAddReactionMarketingEasterEggNote(arg0) {
  let tmp = arg0;
  if (":pizza:" === arg0) {
    tmp = useMaybeAddPollsMarketingEasterEggNoteDefault(arg0);
  }
  return tmp;
};
