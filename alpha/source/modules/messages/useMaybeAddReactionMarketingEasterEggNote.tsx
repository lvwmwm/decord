// Module ID: 10193
// Function ID: 10194
// Name: useMaybeAddReactionMarketingEasterEggNote
// Dependencies: [10194, 2]
// Exports: default

// Module 10193 (useMaybeAddReactionMarketingEasterEggNote)
import useMaybeAddPollsMarketingEasterEggNoteDefault from "useMaybeAddPollsMarketingEasterEggNote" /* 10194 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx");

export default function useMaybeAddReactionMarketingEasterEggNote(arg0) {
  let tmp = arg0;
  if (":pizza:" === arg0) {
    tmp = useMaybeAddPollsMarketingEasterEggNoteDefault(arg0);
  }
  return tmp;
};
