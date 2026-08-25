// Module ID: 8885
// Function ID: 8886
// Name: useMaybeAddReactionMarketingEasterEggNote
// Dependencies: [8886, 2]
// Exports: default

// Module 8885 (useMaybeAddReactionMarketingEasterEggNote)
import set from "set" /* 2 */;
import useMaybeAddPollsMarketingEasterEggNoteDefault from "useMaybeAddPollsMarketingEasterEggNote" /* 8886 */;

const result = set.fileFinishedImporting("modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx");

export default function useMaybeAddReactionMarketingEasterEggNote(arg0) {
  let tmp = arg0;
  if (":pizza:" === arg0) {
    tmp = useMaybeAddPollsMarketingEasterEggNoteDefault(arg0);
  }
  return tmp;
};
