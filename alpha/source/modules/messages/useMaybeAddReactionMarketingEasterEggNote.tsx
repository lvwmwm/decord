// Module ID: 12001
// Function ID: 12002
// Name: useMaybeAddReactionMarketingEasterEggNote
// Dependencies: [12002, 2]
// Exports: default

// Module 12001 (useMaybeAddReactionMarketingEasterEggNote)
import useMaybeAddPollsMarketingEasterEggNoteDefault from "useMaybeAddPollsMarketingEasterEggNote" /* 12002 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/useMaybeAddReactionMarketingEasterEggNote.tsx");

export default function useMaybeAddReactionMarketingEasterEggNote(arg0) {
  let tmp = arg0;
  if (":pizza:" === arg0) {
    tmp = useMaybeAddPollsMarketingEasterEggNoteDefault(arg0);
  }
  return tmp;
};
